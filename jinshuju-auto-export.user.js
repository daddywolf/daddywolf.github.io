// ==UserScript==
// @name         金数据自动导出助手 (拖拽增强版)
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  自动在金数据导出 -> 自动清理旧任务 -> 跨域自动填充 [支持按钮拖拽与位置记忆]
// @author       Gemini & You
// @match        https://jinshuju.net/forms/*/entries
// @match        https://daddywolf.github.io/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @updateURL    https://raw.githubusercontent.com/daddywolf/daddywolf.github.io/main/jinshuju-auto-export.user.js
// @downloadURL  https://raw.githubusercontent.com/daddywolf/daddywolf.github.io/main/jinshuju-auto-export.user.js
// ==/UserScript==

(function() {
    'use strict';

    // ============================================
    // 通用配置与工具
    // ============================================
    const CONFIG = {
        btnId: 'js-export-helper-btn-v19', // 更新ID防止旧样式冲突
        colors: {
            normal: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // 紫蓝渐变
            running: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // 粉红渐变
            success: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // 绿色渐变
            error: '#ff4d4f'
        }
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    // 更新按钮状态的辅助函数
    function updateBtnState(text, styleType, enable = false) {
        const btn = document.getElementById(CONFIG.btnId);
        if (!btn) return;

        btn.innerText = text;
        if (CONFIG.colors[styleType]) {
            btn.style.background = CONFIG.colors[styleType];
        }
        btn.disabled = !enable;
        btn.style.cursor = enable ? 'pointer' : 'not-allowed';
    }

    // ============================================
    // PART A: 目标页面逻辑 (daddywolf.github.io)
    // ============================================
    async function handleTargetPage() {
        if (window.location.href.indexOf('daddywolf.github.io') === -1) return;

        console.log(">>> [B页面] 目标页面就绪...");

        let retries = 20;
        let inputField = null;
        let loadBtn = null;

        while (retries > 0) {
            inputField = getElementByXpath('//*[@id="url-input"]');
            loadBtn = getElementByXpath('//*[@id="load-url-btn"]');
            if (inputField && loadBtn) break;
            await sleep(500);
            retries--;
        }

        if (!inputField || !loadBtn) return;

        const savedUrl = GM_getValue('jinshuju_latest_download_url');
        if (savedUrl) {
            console.log(`>>> [B页面] 填入链接: ${savedUrl}`);
            await sleep(500);

            inputField.value = savedUrl;
            inputField.dispatchEvent(new Event('input', { bubbles: true }));

            await sleep(800);
            loadBtn.click();

            GM_deleteValue('jinshuju_latest_download_url');
        }
    }

    // ============================================
    // PART B: 金数据页面逻辑 (jinshuju.net)
    // ============================================

    function monitorDynamicContainer() {
        console.log(">>> [A页面] 监测中...");

        const intervalId = setInterval(() => {
            const exportContainer = document.querySelector("div[id^='grid-toolbar__export-excel_']");
            if (!exportContainer) return;

            const links = exportContainer.querySelectorAll("a");
            let downloadLink = null;

            for (let link of links) {
                const text = link.innerText;
                if (text.includes("下载") && !text.includes("生成") && link.href && link.href.includes("http")) {
                    downloadLink = link;
                    break;
                }
            }

            if (downloadLink) {
                clearInterval(intervalId);
                const href = downloadLink.href;

                // 1. 存储链接
                GM_setValue('jinshuju_latest_download_url', href);

                // 2. 更新按钮状态：成功
                updateBtnState('✅ 导出成功', 'success', false);

                // 3. 打开新页面
                setTimeout(() => {
                    window.open('https://daddywolf.github.io/', '_blank');

                    // 4. (可选) 3秒后重置按钮
                    setTimeout(() => {
                        updateBtnState('开始自动导出', 'normal', true);
                    }, 3000);
                }, 1000);
            }
        }, 1000);
    }

    async function waitAndClick(xpath, stepName) {
        let maxRetries = 30;
        while (maxRetries > 0) {
            const element = getElementByXpath(xpath);
            if (element && element.offsetParent !== null) {
                console.log(`[点击] ${stepName}`);
                element.click();
                return true;
            }
            await sleep(500);
            maxRetries--;
        }
        console.error(`[超时] ${stepName}`);
        updateBtnState('❌ 出错了，重试？', 'error', true);
        return false;
    }

    async function runAutomation() {
        console.log(">>> 脚本启动 V1.9 <<<");
        updateBtnState('🚀 正在运行...', 'running', false);

        // [Step 0] 清理旧任务
        const oldContainer = document.querySelector("div[id^='grid-toolbar__export-excel_']");
        if (oldContainer) {
            const allLinks = oldContainer.querySelectorAll('a');
            let cancelClicked = false;
            for (let link of allLinks) {
                if (link.innerText.includes("取消")) {
                    link.click();
                    cancelClicked = true;
                    break;
                }
            }
            if (cancelClicked) await sleep(3000);
        }

        // [Step 1-4] 流程
        if (!await waitAndClick('//*[@id="entry-grid__toolbar"]/div/div[1]/div[9]/div/button', '菜单')) return;
        await sleep(500);
        if (!await waitAndClick('/html/body/div[18]/div/div/div/ul/li[2]', '导出数据')) return;
        await sleep(1000);
        if (!await waitAndClick('//*[@id="export_job_modal"]/div/div/div[3]/div/a[1]', '确定')) return;
        await sleep(1000);
        if (!await waitAndClick('//*[@id="export_privacy_confirm_modal"]/div/div/div[3]/div/a[2]', '继续')) return;

        // [Step 5] 监测
        monitorDynamicContainer();
    }

    // ============================================
    // UI 初始化：创建可拖拽的漂亮按钮
    // ============================================

    // 1. 核心拖拽逻辑函数
    function makeDraggable(el) {
        let isDragging = false;
        let hasMoved = false; // 区分是点击还是拖拽
        let startX, startY;

        // 鼠标按下
        el.addEventListener('mousedown', (e) => {
            // 如果按钮是禁用状态，不允许拖动（可选，或者允许拖动但不允许点击）
            // 这里我们允许拖动即使是禁用状态，方便调整位置

            isDragging = true;
            hasMoved = false;

            // 计算鼠标点击点距离元素左上角的偏移量
            startX = e.clientX - el.offsetLeft;
            startY = e.clientY - el.offsetTop;

            el.style.cursor = 'grabbing'; // 抓取手势
            el.style.transition = 'none'; // 拖动时关闭过渡动画，防止延迟
        });

        // 鼠标移动 (监听整个文档，防止鼠标移出按钮导致失效)
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            e.preventDefault(); // 防止选中文字
            hasMoved = true;

            // 计算新位置
            const newLeft = e.clientX - startX;
            const newTop = e.clientY - startY;

            // 应用新位置 (重要：要把 right 设为 auto，否则 left 不生效)
            el.style.left = `${newLeft}px`;
            el.style.top = `${newTop}px`;
            el.style.right = 'auto';
            el.style.bottom = 'auto';
        });

        // 鼠标松开
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;

            isDragging = false;
            el.style.cursor = !el.disabled ? 'pointer' : 'not-allowed'; // 恢复手势
            el.style.transition = 'all 0.3s ease'; // 恢复动画

            // 保存位置到本地存储
            if (hasMoved) {
                GM_setValue('btn_pos_left', el.style.left);
                GM_setValue('btn_pos_top', el.style.top);
            }
        });

        // 拦截点击事件：如果是拖拽行为，阻止原来的 onclick 触发
        el.addEventListener('click', (e) => {
            if (hasMoved) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }, true); // 使用捕获模式，优先处理
    }

    function addStartButton() {
        if (document.getElementById(CONFIG.btnId)) return;

        const btn = document.createElement('button');
        btn.id = CONFIG.btnId;
        btn.innerText = '开始自动导出';

        // 读取上次保存的位置
        const savedLeft = GM_getValue('btn_pos_left', null);
        const savedTop = GM_getValue('btn_pos_top', '10px'); // 默认 Top

        // 如果没有保存过 Left，默认靠右 (right: 300px)，否则使用保存的 Left
        // 这是一个小技巧：初始状态用 right 定位，一旦拖动过就变成 left 定位
        const initialRight = savedLeft ? 'auto' : '300px';
        const initialLeft = savedLeft || 'auto';

        // CSS 样式美化
        Object.assign(btn.style, {
            position: 'fixed',
            // --- 位置调整区 ---
            top: savedTop,
            left: initialLeft,
            right: initialRight,
            // ----------------
            zIndex: '999999',
            padding: '12px 24px',
            background: CONFIG.colors.normal,
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            outline: 'none',
            letterSpacing: '1px',
            userSelect: 'none' // 禁止选中按钮文字
        });

        // 绑定点击事件 (运行脚本)
        btn.onclick = () => {
            // 注意：拖拽逻辑里的 click 拦截器会保护这里
            // 只有当 hasMoved 为 false 时，这里才会执行
            runAutomation();
        };

        // 鼠标悬停效果 (仅在未禁用时生效)
        btn.onmouseover = () => {
            if(!btn.disabled) {
                btn.style.transform = 'scale(1.05)';
                btn.style.boxShadow = '0 6px 20px rgba(118, 75, 162, 0.4)';
            }
        };
        btn.onmouseout = () => {
            if(!btn.disabled) {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }
        };

        // 启用拖拽功能
        makeDraggable(btn);

        document.body.appendChild(btn);
    }

    // ============================================
    // 主入口
    // ============================================
    (function main() {
        const currentUrl = window.location.href;
        if (currentUrl.includes('daddywolf.github.io')) {
            handleTargetPage();
        } else if (currentUrl.includes('jinshuju.net/forms/')) {
            window.addEventListener('load', addStartButton);
        }
    })();

})();
