// ==UserScript==
// @name         金数据自动导出助手 (拖拽增强版)
// @namespace    http://tampermonkey.net/
// @version      1.9.1
// @description  自动在金数据导出 -> 自动清理旧任务 -> 跨域自动填充 [支持按钮拖拽与位置记忆] -> 修复导出菜单定位
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
        console.log(">>> 脚本启动 V1.9.1 <<<");
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
        // 1. 点击工具栏上的“导出”按钮（这里假设位置相对固定，或者你也想改成文字定位？）
        if (!await waitAndClick('//*[@id="entry-grid__toolbar"]/div/div[1]/div[9]/div/button', '菜单')) return;
        await sleep(500);

        // 2. 点击下拉菜单中的“导出数据” (已修改为文字匹配 Span)
        if (!await waitAndClick('//span[contains(text(), "导出数据")]', '导出数据')) return;
        await sleep(1000);

        // 3. 点击“确定” (建议也优化，但暂时保持原样)
        if (!await waitAndClick('//*[@id="export_job_modal"]/div/div/div[3]/div/a[1]', '确定')) return;
        await sleep(1000);

        // 4. 点击隐私确认中的“继续”
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
            isDragging = true;
            hasMoved = false;
            startX = e.clientX - el.offsetLeft;
            startY = e.clientY - el.offsetTop;
            el.style.cursor = 'grabbing';
            el.style.transition = 'none';
        });

        // 鼠标移动
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            hasMoved = true;
            const newLeft = e.clientX - startX;
            const newTop = e.clientY - startY;
            el.style.left = `${newLeft}px`;
            el.style.top = `${newTop}px`;
            el.style.right = 'auto';
            el.style.bottom = 'auto';
        });

        // 鼠标松开
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            el.style.cursor = !el.disabled ? 'pointer' : 'not-allowed';
            el.style.transition = 'all 0.3s ease';
            if (hasMoved) {
                GM_setValue('btn_pos_left', el.style.left);
                GM_setValue('btn_pos_top', el.style.top);
            }
        });

        // 拦截点击事件
        el.addEventListener('click', (e) => {
            if (hasMoved) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }, true);
    }

    function addStartButton() {
        if (document.getElementById(CONFIG.btnId)) return;

        const btn = document.createElement('button');
        btn.id = CONFIG.btnId;
        btn.innerText = '开始自动导出';

        const savedLeft = GM_getValue('btn_pos_left', null);
        const savedTop = GM_getValue('btn_pos_top', '10px');
        const initialRight = savedLeft ? 'auto' : '300px';
        const initialLeft = savedLeft || 'auto';

        Object.assign(btn.style, {
            position: 'fixed',
            top: savedTop,
            left: initialLeft,
            right: initialRight,
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
            userSelect: 'none'
        });

        btn.onclick = () => {
            runAutomation();
        };

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
