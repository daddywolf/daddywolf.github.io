const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "You are selecting a datacenter environment to host a cloud application run by your organization. Your primary requirement is that the datacenter must require no shutdowns for equipment maintenance. What is the lowest level of datacenter that would be acceptable under the Uptime Institute tier system?\n(A) Tier 1\n(B) Tier 2\n(C) Tier 3\n(D) Tier 4",
        "中文题目与选项": "你正在选择一个数据中心环境来托管由你组织运行的云应用。你的主要要求是该数据中心在设备维护期间不能有任何停机。根据 Uptime Institute 的分级体系，最低可接受的数据中心等级是哪个？\n(A) 一级（Tier 1）\n(B) 二级（Tier 2）\n(C) 三级（Tier 3）\n(D) 四级（Tier 4）",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "2",
        "英文题目与选项": "In an infrastructure as a service (IaaS) arrangement, who accepts responsibility for securing cloud-based applications?\n(A) The cloud provider\n(B) The cloud customer\n(C) The regulator\n(D) The end user/client",
        "中文题目与选项": "在基础设施即服务（IaaS）模式中，谁负责保护云端应用程序的安全？\n(A) 云服务提供者\n(B) 云服务客户\n(C) 监管机构\n(D) 最终用户/客户端",
        "答案": "B",
        "来源页码": 1
    },
    {
        "题号": "3",
        "英文题目与选项": "Brenda’s company employs a number of application developers who create software to meet many different business needs. She is embarking on a project to validate the use of verified open source software and is concerned about the unknowing use of software libraries by those developers. Which of the following technologies will best assist with identifying these uses?\n(A) Dynamic application security testing (DAST)\n(B) Static application security testing (SAST)\n(C) Software composition analysis (SCA)\n(D) Interactive application security testing (IAST)",
        "中文题目与选项": "Brenda 的公司雇用了许多应用开发人员，他们开发软件以满足不同的业务需求。她正在启动一个项目，以验证已验证的开源软件的使用，并担心开发人员无意间使用了第三方软件库。以下哪种技术最能帮助识别这些使用情况？\n(A) 动态应用安全测试（DAST）\n(B) 静态应用安全测试（SAST）\n(C) 软件成分分析（SCA）\n(D) 交互式应用安全测试（IAST）",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "4",
        "英文题目与选项": "________ are software or devices that monitor networks for malicious activities or policy violations and produce electronic alerts and/or reports to a management station.\n(A) Host intrusion detection systems (HIDS)\n(B) Hardware security modules (HSM)\n(C) Network intrusion detection systems (NIDS)\n(D) Virtual private networks (VPNs)",
        "中文题目与选项": "________ 是用于监控网络中恶意活动或策略违规的软件或设备，并将电子警报和/或报告发送到管理站。\n(A) 主机入侵检测系统（HIDS）\n(B) 硬件安全模块（HSM）\n(C) 网络入侵检测系统（NIDS）\n(D) 虚拟专用网络（VPN）",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "5",
        "英文题目与选项": "Carla works for an infrastructure as a service (IaaS) provider. She is analyzing the security settings for the hypervisors used in a multitenant environment. Who should have access to modify settings on those hypervisors?\n(A) Only employees of Carla’s company with the appropriate security training and access rights.\n(B) Employees of Carla’s company and customers with virtual machines running on that specific hypervisor.\n(C) Employees of Carla’s company and customers with appropriate security training.\n(D) None of these groups should have hypervisor access.",
        "中文题目与选项": "Carla 在一家基础设施即服务（IaaS）提供商工作。她正在分析用于多租户环境的虚拟机管理程序（hypervisor）的安全设置。谁应该有权限修改这些虚拟机管理程序上的设置？\n(A) 仅 Carla 公司中拥有适当安全培训和访问权限的员工。\n(B) Carla 公司员工以及在该特定虚拟机管理程序上运行虚拟机的客户。\n(C) Carla 公司员工和具有适当安全培训的客户。\n(D) 以上任何群体都不应具有虚拟机管理程序的访问权限。",
        "答案": "A",
        "来源页码": 1
    },
    {
        "题号": "6",
        "英文题目与选项": "In which cloud computing model does a customer share computing infrastructure with other customers of the cloud vendor where one customer may not know the other’s identity?\n(A) Public cloud\n(B) Private cloud\n(C) Community cloud\n(D) Shared cloud",
        "中文题目与选项": "在下列哪种云计算模型中，客户与其他云服务提供商的客户共享计算基础设施，而一个客户可能不知道其他客户的身份？\n(A) 公有云\n(B) 私有云\n(C) 社区云\n(D) 共享云",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "7",
        "英文题目与选项": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations. Instead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization’s specific storage resources.\nWhat is the term for this kind of arrangement?\n(A) Public-key infrastructure (PKI)\n(B) Portability\n(C) Federation\n(D) Repudiation",
        "中文题目与选项": "你在一个政府研究机构工作。你的组织经常与其他政府研究组织共享数据。你希望在这些组织之间创建单点登录体验，使每个组织的用户都可以使用该组织签发的用户 ID/认证登录，然后访问其他组织的研究数据。与其在每个组织之间复制数据存储（这是一种实现该目标的方式），你希望每个用户都可以访问各组织特定的存储资源。\n这种安排的术语是什么？\n(A) 公钥基础设施 (PKI)\n(B) 可移植性\n(C) 联盟 (Federation)\n(D) 否认 (Repudiation)",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "8",
        "英文题目与选项": "Paul’s organization maintains protected health information that is regulated under HIPAA. He would like to add a new security control capable of detecting when employees attempt to remove this sensitive information from his organization’s systems and networks, either intentionally or unintentionally. What security control would best meet his needs?\n(A) DLP\n(B) CASB\n(C) IPS\n(D) NGFW",
        "中文题目与选项": "Paul 的组织维护着受 HIPAA 管控的受保护健康信息。他希望新增一种安全控制，可以检测员工是否试图有意或无意地从组织的系统与网络中移除这些敏感信息。哪种安全控制最能满足他的需求？\n(A) 数据泄露防护 (DLP)\n(B) 云访问安全代理 (CASB)\n(C) 入侵防御系统 (IPS)\n(D) 下一代防火墙 (NGFW)",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "9",
        "英文题目与选项": "Which of the following is not an essential element defining cloud computing?\n(A) Broad network access\n(B) Metered service\n(C) Off-site storage\n(D) On-demand self-service",
        "中文题目与选项": "以下哪项不是定义云计算的基本要素？\n(A) 广泛的网络访问\n(B) 计量服务\n(C) 异地存储\n(D) 按需自助服务",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "10",
        "英文题目与选项": "Justin recently participated in a disaster recovery plan test where the team sat together and discussed the response to a scenario but did not actually activate any disaster recovery controls. What type of test did he participate in?\n(A) Checklist review\n(B) Full interruption test\n(C) Parallel test\n(D) Tabletop exercise",
        "中文题目与选项": "Justin 最近参加了一次灾难恢复计划演练，团队成员坐在一起讨论对某一场景的响应，但并未实际启动任何灾难恢复控制措施。他参与的是什么类型的测试？\n(A) 清单审查\n(B) 完全中断测试\n(C) 并行测试\n(D) 桌面演练",
        "答案": "D",
        "来源页码": 2
    },
    {
        "题号": "11",
        "英文题目与选项": "Tonya is employed by a cloud service provider and is responsible for evaluating the provider’s security program. What ISO standard can best help her ensure that her organization has a robust set of security controls in place?\n(A) ISO 27001\n(B) ISO 27002\n(C) ISO 27017\n(D) ISO 27701",
        "中文题目与选项": "Tonya 受雇于一家云服务提供商，负责评估该提供商的安全计划。以下哪一项 ISO 标准最有助于她确保组织已建立稳健的安全控制措施？\n(A) ISO 27001\n(B) ISO 27002\n(C) ISO 27017\n(D) ISO 27701",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "12",
        "英文题目与选项": "Katie’s organization recently suffered a data breach and exposed a database containing student records. The records contained no identifying information other than tokenized student ID numbers. Which of the following statements most accurately represents how Katie should feel about the exposure of these records?\n(A) The data is safe only if data from the tokenization process was secure.\n(B) The data is safe only if the cryptographic keys were not exposed.\n(C) The data is safe only if a strong hash function was used in the tokenization process.\n(D) The data is not safe and should be considered breached.",
        "中文题目与选项": "Katie 所在的组织最近发生了数据泄露事件，暴露了一个包含学生记录的数据库。这些记录除了标记化（tokenized）的学生ID号外，没有其他可识别信息。以下哪项陈述最准确地反映了 Katie 对这些记录被泄露的正确看法？\n(A) 只有当标记化过程的数据是安全的，数据才是安全的。\n(B) 只有当加密密钥未被泄露，数据才是安全的。\n(C) 只有当标记化过程使用了强哈希函数，数据才是安全的。\n(D) 数据并不安全，应被视为已泄露。",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "13",
        "英文题目与选项": "Bob is designing a datacenter to support his organization, a financial services firm. Which of the following actions would best enhance Bob’s efforts to create resiliency in the datacenter?\n(A) Ensure that all entrances are secured with biometric-based locks.\n(B) Purchase uninterruptible power supplies (UPSs) from different vendors.\n(C) Include financial background checks in all personnel reviews for administrators.\n(D) Make sure all raised floors have at least 24 inches of clearance.",
        "中文题目与选项": "Bob 正在为其组织（一家金融服务公司）设计数据中心。以下哪项措施最能增强数据中心的弹性（resiliency）？\n(A) 确保所有入口均使用基于生物识别的锁具。\n(B) 从不同供应商处购买不间断电源（UPS）。\n(C) 在管理员的人事审查中增加财务背景调查。\n(D) 确保所有架高地板至少有 24 英寸的间隙。",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "14",
        "英文题目与选项": "Under the Common Criteria, which one of the following EAL levels indicates that a system has been methodically designed, tested, and reviewed?\n(A) EAL1\n(B) EAL2\n(C) EAL3\n(D) EAL4",
        "中文题目与选项": "根据《通用准则》（Common Criteria），以下哪个 EAL 级别表示系统已被有条理地设计、测试和审查？\n(A) EAL1\n(B) EAL2\n(C) EAL3\n(D) EAL4",
        "答案": "D",
        "来源页码": 3
    },
    {
        "题号": "15",
        "英文题目与选项": "A(n) ______________ consists of a computer, data, or a network site that appears to be part of a network but is actually isolated and monitored. It also appears to contain data or resources of value that are in fact fake.\n(A) Honeypot\n(B) HIDS\n(C) Virtual application\n(D) Sandbox",
        "中文题目与选项": "______________ 是由一台计算机、数据或网络站点组成的，看似是网络的一部分，但实际上是隔离并受到监控的。它似乎包含有价值的数据或资源，但实际上都是伪造的。\n(A) 蜜罐（Honeypot）\n(B) 主机入侵检测系统（HIDS）\n(C) 虚拟应用（Virtual application）\n(D) 沙箱（Sandbox）",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "16",
        "英文题目与选项": "Rusty is evaluating the security of a web-based SaaS application and wants to verify that the site provides strong encryption between the web server and the client. What is the most common way to achieve this goal?\n(A) Secure sockets layer (SSL)\n(B) DNS Security Extensions (DNSSEC)\n(C) Internet Protocol Secure (IPsec)\n(D) Transport layer security (TLS)",
        "中文题目与选项": "Rusty 正在评估一个基于网络的 SaaS 应用程序的安全性，他想验证该网站是否在 Web 服务器与客户端之间提供了强加密。实现此目标的最常见方式是什么？\n(A) 安全套接字层（SSL）\n(B) DNS 安全扩展（DNSSEC）\n(C) 互联网协议安全（IPsec）\n(D) 传输层安全（TLS）",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "17",
        "英文题目与选项": "You operate a cloud service and would like a report that confirms the effectiveness of your security controls and provides significant detail of control gaps that you can use for remediation. What type of audit should you conduct?\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "中文题目与选项": "您运营一个云服务，并希望获得一份报告来确认您的安全控制的有效性，并提供可用于整改的控制缺陷的详细信息。您应进行哪种类型的审计？\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "18",
        "英文题目与选项": "Adam’s organization recently experienced a security breach that affected customer data. Which one of the following stakeholder groups might Adam be required to inform?\n(A) Customers\n(B) Regulators\n(C) Partners\n(D) All of the above",
        "中文题目与选项": "Adam 的组织最近发生了一个影响客户数据的安全漏洞。以下哪个利益相关方群体可能是 Adam 需要通知的？\n(A) 客户\n(B) 监管机构\n(C) 合作伙伴\n(D) 以上全部",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "19",
        "英文题目与选项": "An application programming interface (API) gateway can typically offer all of the following capabilities except _________________.\n(A) Rate limiting\n(B) Access control\n(C) Content filtering\n(D) Logging",
        "中文题目与选项": "应用程序编程接口（API）网关通常可以提供以下所有功能，但不包括 _________________.\n(A) 速率限制\n(B) 访问控制\n(C) 内容过滤\n(D) 日志记录",
        "答案": "C",
        "来源页码": 4
    },
    {
        "题号": "20",
        "英文题目与选项": "When logging information about an internet user’s location, what source provides the most accurate physical location data?\n(A) GPS\n(B) IP address correlation\n(C) User attestation\n(D) MAC address correlation",
        "中文题目与选项": "在记录互联网用户位置信息时，哪个来源提供了最准确的物理位置数据？\n(A) GPS\n(B) IP 地址关联\n(C) 用户声明\n(D) MAC 地址关联",
        "答案": "A",
        "来源页码": 4
    },
    {
        "题号": "21",
        "英文题目与选项": "What type of device is designed to safely store and manage encryption keys?\n(A) Hardware security module\n(B) Secure BIOS\n(C) Hardware token\n(D) Host intrusion detection system",
        "中文题目与选项": "哪种类型的设备专门用于安全地存储和管理加密密钥？\n(A) 硬件安全模块\n(B) 安全 BIOS\n(C) 硬件令牌\n(D) 主机入侵检测系统",
        "答案": "A",
        "来源页码": 4
    },
    {
        "题号": "22",
        "英文题目与选项": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the internet). In a typical TLS session, who initiates the protocol?\n(A) The server\n(B) The client\n(C) The certifying authority\n(D) The internet service provider (ISP)",
        "中文题目与选项": "传输层安全 (TLS) 协议在公共媒介（例如互联网）上创建安全通信通道。在典型的 TLS 会话中，谁发起该协议？\n(A) 服务器\n(B) 客户端\n(C) 认证机构\n(D) 互联网服务提供商（ISP）",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "23",
        "英文题目与选项": "In what cloud computing service model is the customer responsible for installing and maintaining the operating system?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) FaaS",
        "中文题目与选项": "在以下哪种云计算服务模型中，客户需要负责安装和维护操作系统？\n(A) 基础设施即服务（IaaS）\n(B) 平台即服务（PaaS）\n(C) 软件即服务（SaaS）\n(D) 函数即服务（FaaS）",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "24",
        "英文题目与选项": "Based on the information in this scenario, what is the exposure factor for the effect of a fire on the Roscommon Cloud Solutions datacenter?\n(A) 7.5 percent\n(B) 15.0 percent\n(C) 27.5 percent\n(D) 37.5 percent",
        "中文题目与选项": "根据该场景中的信息，Roscommon 云解决方案数据中心遭受火灾影响的暴露因子（Exposure Factor）是多少？\n(A) 7.5%\n(B) 15.0%\n(C) 27.5%\n(D) 37.5%",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "25",
        "英文题目与选项": "Based on the information in this scenario, what is the annualized rate of occurrence for a fire at the Roscommon Cloud Solutions datacenter?\n(A) 0.002\n(B) 0.005\n(C) 0.02\n(D) 0.05",
        "中文题目与选项": "根据该场景中的信息，Roscommon 云解决方案数据中心发生火灾的年发生率（ARO）是多少？\n(A) 0.002\n(B) 0.005\n(C) 0.02\n(D) 0.05",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "26",
        "英文题目与选项": "Based on the information in this scenario, what is the annualized loss expectancy for a fire at the Roscommon Cloud Solutions datacenter?\n(A) $15,000\n(B) $25,000",
        "中文题目与选项": "根据该场景中的信息，Roscommon 云解决方案数据中心的火灾年度预期损失（ALE）是多少？\n(A) 15,000 美元\n(B) 25,000 美元",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "27",
        "英文题目与选项": "What is the most significant barrier to eDiscovery efforts in organizations that make heavy use of many different cloud services?\n(A) Identifying relevant records\n(B) Coordinating multiple providers that might have relevant records\n(C) Obtaining provider cooperation\n(D) Determining when eDiscovery is necessary",
        "中文题目与选项": "在使用多种不同云服务的组织中，电子发现（eDiscovery）工作的最主要障碍是什么？\n(A) 识别相关记录\n(B) 协调多个可能拥有相关记录的云服务提供商\n(C) 获得提供商的配合\n(D) 确定何时需要进行电子发现",
        "答案": "B",
        "来源页码": 6
    },
    {
        "题号": "28",
        "英文题目与选项": "David’s organization is preparing to adopt an information rights management tool. What IRM capability focuses on securing data sent by the system while it is in transit over a network?\n(A) Tagging\n(B) Data labeling\n(C) Encryption\n(D) Provisioning",
        "中文题目与选项": "David 的组织正在准备采用信息权限管理（IRM）工具。哪项 IRM 功能专注于保护系统在网络传输过程中发送的数据？\n(A) 标记\n(B) 数据标签\n(C) 加密\n(D) 供应配置",
        "答案": "C",
        "来源页码": 6
    },
    {
        "题号": "29",
        "英文题目与选项": "Which of the following best describes threat modeling?\n(A) The idea of identifying specific points of vulnerability and then implementing countermeasures to protect or thwart those points from successful exploitation\n(B) The idea of finding points and then implementing countermeasures to protect or thwart those points from successful exploitation\n(C) The idea of identifying specific vulnerabilities and then patching them to protect or thwart them from successful exploitation\n(D) The idea of identifying specific intrusion points and implementing countermeasures to protect or thwart those points from successful intrusion",
        "中文题目与选项": "以下哪项最能描述威胁建模（Threat Modeling）？\n(A) 识别具体的漏洞点，然后实施对策以防止这些点被成功利用\n(B) 找出脆弱点，然后实施对策以防止这些点被成功利用\n(C) 识别具体漏洞，然后通过修补方式防止这些漏洞被成功利用\n(D) 识别具体入侵点，然后实施对策以防止这些点被成功入侵",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "30",
        "英文题目与选项": "Gary is concerned that the environmental controls in his organization’s datacenter may not be effectively controlling humidity. Which of the following circumstances would not commonly result from humidity issues? (Choose all that apply.)\n(A) Static electricity damaging equipment\n(B) Fires in power supplies\n(C) Corrosion of equipment\n(D) Moisture buildup",
        "中文题目与选项": "Gary 担心其组织数据中心的环境控制可能无法有效地控制湿度。以下哪种情况通常不会由湿度问题引起？（选择所有适用项）\n(A) 静电损坏设备\n(B) 电源发生火灾\n(C) 设备腐蚀\n(D) 湿气积聚",
        "答案": "B",
        "来源页码": 6
    },
    {
        "题号": "31",
        "英文题目与选项": "Which of the following mechanisms cannot be used by a data loss prevention (DLP) solution to detect the presence of data?\n(A) Pattern matching\n(B) Metadata\n(C) Content strings\n(D) Tokenization",
        "中文题目与选项": "以下哪种机制无法被数据泄漏防护（DLP）解决方案用于检测数据的存在？\n(A) 模式匹配\n(B) 元数据\n(C) 内容字符串\n(D) 令牌化",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "32",
        "英文题目与选项": "Gabriel’s organization maintains a system of voting records. The system uses SHA3 to obscure the contents of sensitive records. What data obfuscation technique is this system using?\n(A) Hashing\n(B) Masking\n(C) Anonymization\n(D) Shuffling",
        "中文题目与选项": "Gabriel 的组织维护着一个选举记录系统。该系统使用 SHA3 来模糊敏感记录的内容。该系统使用的是哪种数据混淆技术？\n(A) 哈希（Hashing）\n(B) 掩码（Masking）\n(C) 匿名化（Anonymization）\n(D) 打乱（Shuffling）",
        "答案": "A",
        "来源页码": 7
    },
    {
        "题号": "33",
        "英文题目与选项": "Which Statement on Standards for Attestation Engagements (SSAE) 18 report is purposefully designed for public release (for instance, to be posted on a company’s website)?\n(A) Service Organization Control (SOC) 1\n(B) SOC 2, Type 1\n(C) SOC 2, Type 2\n(D) SOC 3",
        "中文题目与选项": "以下哪种《鉴证业务准则声明》(SSAE) 18 报告是专门为公开发布而设计的（例如发布在公司网站上）？\n(A) 服务组织控制（SOC）1\n(B) SOC 2，类型 1\n(C) SOC 2，类型 2\n(D) SOC 3",
        "答案": "D",
        "来源页码": 7
    },
    {
        "题号": "34",
        "英文题目与选项": "Which of the following is a true statement about the virtualization management toolset?\n(A) It can be regarded as something public-facing.\n(B) It must be on a distinct, isolated management network (virtual local area network [VLAN]).\n(C) It connects physically to a dedicated storage area allocated to each customer.\n(D) The responsibility for securely installing and updating it falls on the customer.",
        "中文题目与选项": "以下关于虚拟化管理工具集的说法哪一个是正确的？\n(A) 它可以视为面向公众的组件。\n(B) 它必须位于独立、隔离的管理网络（虚拟局域网 VLAN）上。\n(C) 它物理连接到分配给每个客户的专用存储区域。\n(D) 安全安装和更新它的责任由客户承担。",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "35",
        "英文题目与选项": "You are the IT director for a small contracting firm. Your company is considering migrating to a cloud production environment. Which service model would best fit your needs if you wanted an option that reduced the chance of vendor lock-in but also did not require the highest degree of administration by your own personnel?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) SECaaS",
        "中文题目与选项": "你是一家小型承包公司的 IT 总监。贵公司正在考虑迁移到云生产环境中。如果你希望选择一种既能降低供应商锁定风险，又不需要你的团队承担大量管理工作量的服务模型，那么哪一种最合适？\n(A) 基础设施即服务（IaaS）\n(B) 平台即服务（PaaS）\n(C) 软件即服务（SaaS）\n(D) 安全即服务（SECaaS）",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "36",
        "英文题目与选项": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity. Which facet of cloud computing is most important for making this possible?\n(A) Broad network access\n(B) Rapid elasticity\n(C) Metered service\n(D) Resource pooling",
        "中文题目与选项": "你是一家零售公司的数据经理；你预计每年最后一个季度的销售活动量将远高于其他季度。为了应对交易量的增加，并容纳仅在该期间雇用的临时销售人员，你考虑在一段特定时间内将现有的本地生产环境与云能力结合使用，并在销售旺季结束后重新回到完全本地运行。哪一个云计算特征对于实现这一目标最为重要？\n(A) 广泛的网络访问\n(B) 快速弹性\n(C) 计量服务\n(D) 资源池化",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "37",
        "英文题目与选项": "Which one of the following individuals is typically responsible for making high-level data classification decisions for an organization?\n(A) The data custodian\n(B) The data owner\n(C) The data processor\n(D) The data user",
        "中文题目与选项": "以下哪一类人员通常负责为组织做出高层数据分类决策？\n(A) 数据保管人\n(B) 数据所有者\n(C) 数据处理者\n(D) 数据使用者",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "38",
        "英文题目与选项": "Brad is assisting with the implementation of a cloud-based SaaS solution where users can post content that is viewed by other users. He is concerned that users might store executable content on the site that then might be executed automatically by the browsers of other site visitors. What type of vulnerability would permit this attack?\n(A) SQL injection\n(B) Cross-site scripting\n(C) Cross-site request forgery\n(D) Server-side request forgery",
        "中文题目与选项": "Brad 正在帮助实施一个基于云的 SaaS 解决方案，用户可以发布内容供其他用户浏览。他担心用户可能在网站上存储可执行内容，而这些内容可能会被其他访问者的浏览器自动执行。哪种漏洞会允许此类攻击？\n(A) SQL 注入\n(B) 跨站脚本攻击 (XSS)\n(C) 跨站请求伪造 (CSRF)\n(D) 服务器端请求伪造 (SSRF)",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "39",
        "英文题目与选项": "You are the security manager for an online marketing company. Your company has recently migrated to a cloud production environment and has deployed a number of new cloud-based protection mechanisms offered by both third parties and the cloud provider, including data loss prevention (DLP) and security information and event management (SIEM) solutions. After one week of operation, your security team reports an inordinate amount of time responding to potential incidents that have turned out to only be false-positive reports. Management is concerned that the cloud migration was a bad idea and that it is too costly in terms of misspent security efforts. What do you recommend?\n(A) Change the control set so that you use only security products not offered by the cloud provider.\n(B) Change the control set so that you use only security products offered by the cloud provider.\n(C) Wait three weeks for additional data before making a final decision.\n(D) Move back to an on-premises environment as soon as possible to avoid additional wasted funds and effort.",
        "中文题目与选项": "你是一家在线营销公司的安全经理。你们公司最近迁移到云生产环境，并部署了多种由第三方和云服务提供商提供的云安全防护机制，包括数据丢失防护 (DLP) 和安全信息及事件管理 (SIEM) 解决方案。运行一周后，你的安全团队报告花费了大量时间应对潜在事件，但这些事件最终只是误报。管理层担心云迁移是错误决定且在安全投入上成本过高。你会建议怎么做？\n(A) 更改控制集，只使用非云服务提供商提供的安全产品。\n(B) 更改控制集，只使用云服务提供商提供的安全产品。\n(C) 等待三周收集更多数据后再做最终决定。\n(D) 尽快迁回本地环境以避免更多资金和精力的浪费。",
        "答案": "C",
        "来源页码": 8
    },
    {
        "题号": "40",
        "英文题目与选项": "Which one of the following stakeholders is most likely to demand communication about service outages for a cloud service provider?\n(A) Customers\n(B) Vendors\n(C) Partners\n(D) Regulators",
        "中文题目与选项": "以下哪类利益相关者最有可能要求云服务提供商在服务中断时进行沟通？\n(A) 客户\n(B) 供应商\n(C) 合作伙伴\n(D) 监管机构",
        "答案": "A",
        "来源页码": 8
    },
    {
        "题号": "41",
        "英文题目与选项": "Which is the part of the SDLC in which all functional features of the system chosen for development in analysis are described independently of any computer platform?\n(A) Physical design phase\n(B) User story\n(C) Agile phase\n(D) Logical design phase",
        "中文题目与选项": "软件开发生命周期 (SDLC) 的哪个阶段描述了系统分析阶段选定的所有功能特性，而与任何计算机平台无关？\n(A) 物理设计阶段\n(B) 用户故事\n(C) 敏捷阶段\n(D) 逻辑设计阶段",
        "答案": "D",
        "来源页码": 8
    },
    {
        "题号": "42",
        "英文题目与选项": "A group of clinics decides to create an identification federation for their users (medical providers and clinicians). In this federation, all of the participating organizations would need to be in compliance with what U.S. federal regulation?\n(A) Family Educational Rights and Privacy Act (FERPA)\n(B) Family and Medical Leave Act (FMLA)\n(C) Payment Card Industry Data Security Standard (PCI DSS)\n(D) Health Insurance Portability and Accountability Act (HIPAA)",
        "中文题目与选项": "一组诊所决定为其用户（医疗服务提供者和临床医生）创建一个身份联合。在该联合中，所有参与的组织必须遵守哪项美国联邦法规？\n(A) 《家庭教育权利和隐私法案》（FERPA）\n(B) 《家庭与医疗休假法案》（FMLA）\n(C) 《支付卡行业数据安全标准》（PCI DSS）\n(D) 《健康保险携带与责任法案》（HIPAA）",
        "答案": "D",
        "来源页码": 9
    },
    {
        "题号": "43",
        "英文题目与选项": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity. Which deployment model best describes this type of arrangement?\n(A) Private cloud\n(B) Community cloud\n(C) Public cloud\n(D) Hybrid cloud",
        "中文题目与选项": "你是一家零售公司的数据经理；你预计每年最后一个季度的销售活动量会大幅高于其他季度。为了处理这些增加的交易，并容纳你在该期间临时雇用的销售人员，你考虑在特定时间内将内部本地生产环境扩展到云端能力，并在高峰期结束后回到完全本地运营。哪种部署模型最符合这种安排？\n(A) 私有云\n(B) 社区云\n(C) 公有云\n(D) 混合云",
        "答案": "D",
        "来源页码": 9
    },
    {
        "题号": "44",
        "英文题目与选项": "How does representational state transfer (REST) make web service requests?\n(A) XML\n(B) SAML\n(C) URIs\n(D) TLS",
        "中文题目与选项": "表述性状态传输（REST）是如何发出 Web 服务请求的？\n(A) XML\n(B) SAML\n(C) URI\n(D) TLS",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "45",
        "英文题目与选项": "Which of the following best describes a set of practices that focus on aligning IT services with business needs?\n(A) ITIL\n(B) ISO\n(C) HIPAA\n(D) GLBA",
        "中文题目与选项": "以下哪项最能描述一套专注于将 IT 服务与业务需求对齐的最佳实践？\n(A) ITIL\n(B) ISO\n(C) HIPAA\n(D) GLBA",
        "答案": "A",
        "来源页码": 9
    },
    {
        "题号": "46",
        "英文题目与选项": "What type of cloud storage is typically used to provide disk volumes for use with virtual server instances that will store important long-term data?\n(A) Object storage\n(B) Block storage\n(C) Ephemeral storage\n(D) Archival storage",
        "中文题目与选项": "哪种类型的云存储通常用于为虚拟服务器实例提供磁盘卷，以存放重要的长期数据？\n(A) 对象存储\n(B) 块存储\n(C) 临时存储\n(D) 归档存储",
        "答案": "B",
        "来源页码": 9
    },
    {
        "题号": "47",
        "英文题目与选项": "Lisa is working to develop a long-term relationship with a consulting firm that will assist in her organization’s cloud migration. She has a contract in place that governs the terms of many different projects and would like to create a document that will describe one specific new project. What type of document should she create?\n(A) MSA\n(B) BPA\n(C) SOW\n(D) MOU",
        "中文题目与选项": "Lisa 正在与一家咨询公司建立长期合作关系，该公司将协助她的组织进行云迁移。她已经签订了一份合同，用于管理多个不同项目的条款，现在她希望创建一个文件来描述一个特定的新项目。她应该创建哪种类型的文件？\n(A) MSA 主服务协议\n(B) BPA 业务合作协议\n(C) SOW 工作说明书\n(D) MOU 谅解备忘录",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "48",
        "英文题目与选项": "Full isolation of user activity, processes, and virtual network segments in a cloud environment is incredibly important because of risks due to _________________?\n(A) Distributed denial of service (DDoS)\n(B) Unencrypted packets\n(C) Multitenancy\n(D) Insider threat",
        "中文题目与选项": "在云环境中，完全隔离用户活动、进程和虚拟网络段非常重要，因为存在来自 _________________ 的风险。\n(A) 分布式拒绝服务攻击（DDoS）\n(B) 未加密的数据包\n(C) 多租户\n(D) 内部威胁",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "49",
        "英文题目与选项": "In a federated environment, who is the relying party, and what do they do?\n(A) The relying party is the service provider and they would consume the tokens generated by the identity provider.\n(B) The relying party is the service provider and they would consume the tokens generated by the customer.\n(C) The relying party is the customer and they would consume the tokens generated by the identity provider.\n(D) The relying party is the identity provider and they would consume the tokens generated by the service provider.",
        "中文题目与选项": "在一个联合身份环境中，谁是信任方？他们的职责是什么？\n(A) 信任方是服务提供者，他们会使用身份提供者生成的令牌。\n(B) 信任方是服务提供者，他们会使用客户生成的令牌。\n(C) 信任方是客户，他们会使用身份提供者生成的令牌。\n(D) 信任方是身份提供者，他们会使用服务提供者生成的令牌。",
        "答案": "A",
        "来源页码": 10
    },
    {
        "题号": "50",
        "英文题目与选项": "Christine is concerned about the risk that another customer will be able to access sensitive data elements stored in her organization’s database in a multitenant public cloud environment. What control would best mitigate this risk?\n(A) TLS\n(B) IPsec\n(C) Volume encryption\n(D) VPN",
        "中文题目与选项": "Christine 担心在多租户的公共云环境中，其他客户可能会访问她组织数据库中存储的敏感数据。哪种控制措施最能减轻这种风险？\n(A) TLS 传输层安全协议\n(B) IPsec 网络层安全协议\n(C) 卷加密\n(D) VPN 虚拟专用网络",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "51",
        "英文题目与选项": "Which one of the following fire suppression systems is least likely to damage sensitive electronic equipment in a datacenter?\n(A) Wet pipe\n(B) Dry pipe\n(C) Preaction\n(D) Inert gas",
        "中文题目与选项": "以下哪种灭火系统最不可能损坏数据中心中的敏感电子设备？\n(A) 湿式管道系统\n(B) 干式管道系统\n(C) 预作用系统\n(D) 惰性气体系统",
        "答案": "D",
        "来源页码": 10
    },
    {
        "题号": "52",
        "英文题目与选项": "You are the security manager for a data analysis company. Your senior management is considering a cloud migration in order to use the greater capabilities of a cloud provider to perform calculations and computations. Your company wants to ensure that neither the contractual nor the technical setup of the cloud service will affect your data sets in any way so that you are not locked into a single provider.\nWhich of the following criteria will probably be most crucial for your choice of cloud providers?\n(A) Portability\n(B) Interoperability\n(C) Resiliency\n(D) Governance",
        "中文题目与选项": "你是一家数据分析公司的安全经理。你的高层管理人员正在考虑迁移到云端，以利用云服务商更强大的计算和处理能力。你的公司希望确保云服务的合同或技术设置不会以任何方式影响你的数据集，从而避免被锁定到单一的服务提供商。\n以下哪个标准最可能是选择云服务提供商时的关键？\n(A) 可移植性\n(B) 互操作性\n(C) 弹性\n(D) 治理",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "53",
        "英文题目与选项": "Which one of the following standards is most likely to contain detailed technical requirements for a hardware security module (HSM) used in a cloud environment?\n(A) FIPS 140-2\n(B) PCI DSS\n(C) ISO 27017\n(D) Common Criteria",
        "中文题目与选项": "以下哪一项标准最有可能包含用于云环境中的硬件安全模块 (HSM) 的详细技术要求？\n(A) FIPS 140-2\n(B) PCI DSS\n(C) ISO 27017\n(D) 通用准则（Common Criteria）",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "54",
        "英文题目与选项": "Which of the following is not a reason for conducting audits?\n(A) Regulatory compliance\n(B) Enhanced user experience\n(C) Determination of service quality\n(D) Security assurance",
        "中文题目与选项": "以下哪一项不是进行审计的原因？\n(A) 法规合规\n(B) 改善用户体验\n(C) 判断服务质量\n(D) 安全保证",
        "答案": "B",
        "来源页码": 11
    },
    {
        "题号": "55",
        "英文题目与选项": "Migrating to a cloud environment will reduce an organization’s dependence on ________________.\n(A) Capital expenditures for IT\n(B) Operational expenditures for IT\n(C) Data-driven workflows\n(D) Customer satisfaction",
        "中文题目与选项": "迁移到云环境将减少组织对 ________________ 的依赖。\n(A) IT 资本支出\n(B) IT 运营支出\n(C) 数据驱动的工作流程\n(D) 客户满意度",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "56",
        "英文题目与选项": "Which one of the following hash algorithms would not trigger this vulnerability?\n(A) MD4\n(B) MD5\n(C) SHA-1\n(D) SHA-256",
        "中文题目与选项": "下列哪种哈希算法不会触发此漏洞？\n(A) MD4\n(B) MD5\n(C) SHA-1\n(D) SHA-256",
        "答案": "D",
        "来源页码": 12
    },
    {
        "题号": "57",
        "英文题目与选项": "What is the most likely result of failing to correct this vulnerability?\n(A) All users will be able to access the site, but some may see an error message.\n(B) All users will be able to access the site.\n(C) Some users will be unable to access the site.\n(D) All users will be unable to access the site.",
        "中文题目与选项": "未能修复此漏洞最可能导致的结果是什么？\n(A) 所有用户都可以访问该网站，但有些人可能会看到错误信息。\n(B) 所有用户都可以访问该网站。\n(C) 部分用户将无法访问该网站。\n(D) 所有用户都将无法访问该网站。",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "58",
        "英文题目与选项": "How can Arlene correct this vulnerability?\n(A) Reconfigure the VPN server to only use secure hash functions.\n(B) Request a new certificate.\n(C) Change the domain name of the server.\n(D) Implement an intrusion prevention system.",
        "中文题目与选项": "Arlene 可以如何修复此漏洞？\n(A) 重新配置 VPN 服务器仅使用安全的哈希函数。\n(B) 申请新的证书。\n(C) 更改服务器的域名。\n(D) 部署入侵防御系统。",
        "答案": "A",
        "来源页码": 12
    },
    {
        "题号": "59",
        "英文题目与选项": "You are also concerned about the availability of data stored on servers that support your organization’s cloud services. You would like to add technology that would enable continued access to files located on the server even if a hard drive in a server fails. What integrity control allows you to add robustness without adding additional servers?\n(A) Server clustering\n(B) Load balancing\n(C) RAID\n(D) Scheduled backups",
        "中文题目与选项": "你还担心存放在支持贵组织云服务的服务器上的数据的可用性。你希望添加一种技术，即使服务器中的硬盘发生故障也能继续访问服务器上的文件。哪种完整性控制机制可以在不增加额外服务器的情况下增强系统的稳健性？\n(A) 服务器集群\n(B) 负载均衡\n(C) RAID 磁盘阵列\n(D) 定期备份",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "60",
        "英文题目与选项": "MTTR is best described as which of the following?\n(A) The average cost to repair a device that has failed or is in need of repair\n(B) The average time it takes to return a defective device to the manufacturer\n(C) The average time it takes to repair a device that has failed or is in need of repair\n(D) The time it takes to repair a device that has failed or is in need of repair",
        "中文题目与选项": "以下哪项最能描述 MTTR（平均修复时间）？\n(A) 修理故障设备或需要维修设备的平均成本\n(B) 将有缺陷的设备退回制造商所需的平均时间\n(C) 修理故障设备或需要维修设备所需的平均时间\n(D) 修理故障设备所需的时间",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "61",
        "英文题目与选项": "What is a set of technologies designed to analyze application source code and binaries for coding and design conditions that are indicative of security and vulnerabilities?\n(A) Dynamic application security testing (DAST)\n(B) Static application security testing (SAST)\n(C) Secure coding\n(D) OWASP",
        "中文题目与选项": "用于分析应用程序源代码和二进制文件，以检测可能表明存在安全问题或漏洞的编码和设计条件的一组技术是什么？\n(A) 动态应用安全测试（DAST）\n(B) 静态应用安全测试（SAST）\n(C) 安全编码\n(D) OWASP",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "62",
        "英文题目与选项": "You are participating in a data discovery effort and begin to explore a relational database server. What type of data should you most likely expect to encounter?\n(A) Unstructured data\n(B) Semi-structured data\n(C) Structured data\n(D) Unorganized data",
        "中文题目与选项": "你正在参与数据发现工作，并开始探索一个关系型数据库服务器。你最可能会遇到哪种类型的数据？\n(A) 非结构化数据\n(B) 半结构化数据\n(C) 结构化数据\n(D) 无组织的数据",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "63",
        "英文题目与选项": "Domain Name System Security Extensions (DNSSEC) provides all of the following except __________.\n(A) Payload encryption\n(B) Origin authority\n(C) Data integrity\n(D) Authenticated denial of existence",
        "中文题目与选项": "域名系统安全扩展（DNSSEC）提供以下所有功能，除了 __________。\n(A) 负载加密\n(B) 来源权威性验证\n(C) 数据完整性\n(D) 经过身份验证的不存在否认",
        "答案": "A",
        "来源页码": 13
    },
    {
        "题号": "64",
        "英文题目与选项": "Alice received an encrypted message from Bob. Bob encrypted the message for confidentiality using an asymmetric encryption algorithm. What key should Alice use to decrypt the message?\n(A) Bob’s public key\n(B) Bob’s private key\n(C) Alice’s private key\n(D) Alice’s public key",
        "中文题目与选项": "Alice 收到 Bob 发来的加密消息。Bob 使用非对称加密算法对消息进行了加密以保护机密性。Alice 应该使用哪一个密钥来解密该消息？\n(A) Bob 的公钥\n(B) Bob 的私钥\n(C) Alice 的私钥\n(D) Alice 的公钥",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "65",
        "英文题目与选项": "Bobbi is investigating a security incident and discovers that an attacker began with a normal user account but managed to exploit a system vulnerability to provide that account with administrative rights. What type of attack took place under the STRIDE threat model?\n(A) Spoofing\n(B) Repudiation\n(C) Tampering\n(D) Elevation of privilege",
        "中文题目与选项": "Bobbi 正在调查一起安全事件，发现攻击者最初使用的是普通用户账户，但利用系统漏洞将该账户提升为管理员权限。根据 STRIDE 威胁模型，这属于哪种类型的攻击？\n(A) 冒充\n(B) 否认\n(C) 篡改\n(D) 权限提升",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "66",
        "英文题目与选项": "Which type of hypervisor has an operating system installed on the hardware and then the virtual manager software installed on top of it?\n(A) Type 1\n(B) Type 3\n(C) Type 2\n(D) Type 4",
        "中文题目与选项": "哪种类型的虚拟机管理程序是在硬件上安装操作系统，然后在其上安装虚拟管理软件的？\n(A) 第 1 类型\n(B) 第 3 类型\n(C) 第 2 类型\n(D) 第 4 类型",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "67",
        "英文题目与选项": "The government-wide program that provides for a standardized approach to security assessments, authorization, and continuous monitoring of cloud products and services is called______________.\n(A) FISMA\n(B) HIPAA\n(C) FedRAMP\n(D) GLBA",
        "中文题目与选项": "提供对云产品和服务进行安全评估、授权和持续监控的标准化方法的政府范围计划称为______________。\n(A) FISMA《联邦信息安全管理法案》\n(B) HIPAA《健康保险携带与责任法案》\n(C) FedRAMP《联邦风险与授权管理计划》\n(D) GLBA《格拉姆-里奇-布莱利法案》",
        "答案": "C",
        "来源页码": 14
    },
    {
        "题号": "68",
        "英文题目与选项": "In a cloud context, who determines the risk appetite of your organization?\n(A) The cloud provider\n(B) Your internet service provider (ISP)\n(C) Federal regulators\n(D) Senior management",
        "中文题目与选项": "在云计算环境中，谁决定贵组织的风险偏好？\n(A) 云服务提供商\n(B) 你的互联网服务提供商 (ISP)\n(C) 联邦监管机构\n(D) 高级管理层",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "69",
        "英文题目与选项": "Yolanda is analyzing a business process that uses a cloud service to send invoices to clients. What phase of the cloud data lifecycle is most directly occurring?\n(A) Create\n(B) Archive\n(C) Store\n(D) Share",
        "中文题目与选项": "Yolanda 正在分析一个使用云服务向客户发送发票的业务流程。当前发生的云数据生命周期的主要阶段是什么？\n(A) 创建\n(B) 归档\n(C) 存储\n(D) 共享",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "70",
        "英文题目与选项": "Carla is completing an IT audit that involves very sensitive log records that may later be disputed. She would like to collect a copy of the log records now and then protect them with a technology that will provide nonrepudiation. Which one of the following technologies would best meet her needs?\n(A) Multifactor authentication\n(B) Strong encryption\n(C) Cryptographic hash\n(D) Digital signature",
        "中文题目与选项": "Carla 正在完成一次包含非常敏感日志记录的 IT 审计，这些记录以后可能会受到争议。她希望现在收集一份日志记录的副本，并使用能够提供不可否认性的技术保护它们。以下哪种技术最能满足她的需求？\n(A) 多因素身份验证\n(B) 强加密\n(C) 加密哈希\n(D) 数字签名",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "71",
        "英文题目与选项": "You are the security manager for a small application development company. Your company is considering the migration of your testing environment to the cloud. As part of your testing methodology, you use several third-party cloud testing vendors. Which of the following traits of cloud functionality is probably the most crucial in terms of deciding which cloud provider you will choose?\n(A) Portability\n(B) Interoperability\n(C) Resiliency\n(D) Governance",
        "中文题目与选项": "你是一家小型应用开发公司的安全经理。贵公司正考虑将测试环境迁移到云上。作为测试方法的一部分，你使用了多个第三方云测试供应商。以下哪项云功能特征在决定选择哪家云服务提供商时最为关键？\n(A) 可移植性\n(B) 互操作性\n(C) 弹性\n(D) 治理",
        "答案": "B",
        "来源页码": 14
    },
    {
        "题号": "72",
        "英文题目与选项": "Luis is concerned about the proliferation of sensitive data in his organization and is searching for systems containing Social Security numbers. He uses a tool that detects any data matching the pattern “XXX-XX-XXXX” where each X is a digit. What type of data discovery is Luis performing?\n(A) Metadata-based discovery\n(B) Content-based discovery\n(C) Classification-based discovery\n(D) Label-based discovery",
        "中文题目与选项": "Luis 担心其组织中敏感数据的泛滥，正在搜索包含社会安全号码（SSN）的系统。他使用一种工具来检测符合“XXX-XX-XXXX”模式的数据，其中每个 X 都是一个数字。Luis 执行的是哪种类型的数据发现？\n(A) 基于元数据的发现\n(B) 基于内容的发现\n(C) 基于分类的发现\n(D) 基于标签的发现",
        "答案": "B",
        "来源页码": 15
    },
    {
        "题号": "73",
        "英文题目与选项": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations. Instead of replicating the data stores of each organization at every other organization, you instead want every user to have access to each organization’s specific storage resources. In order to pass the user IDs and authenticating credentials of each user among the organizations, what protocol, language, or technique will you most likely utilize?\n(A) Representational State Transfer (REST)\n(B) Security Assertion Markup Language (SAML)\n(C) Simple Object Access Protocol (SOAP)\n(D) Hypertext Markup Language (HTML)",
        "中文题目与选项": "你在一个政府研究机构工作。你的组织经常与其他政府研究机构共享数据。你希望在各机构之间建立单点登录体验，使每个机构的用户可以使用本机构颁发的用户ID和认证登录，并能访问其他机构的研究数据。你不想在各机构间复制数据存储，而是希望每个用户都能访问各自机构的存储资源。为了在各机构之间传递用户ID和认证凭证，你最可能使用哪种协议、语言或技术？\n(A) 表述性状态转移（REST）\n(B) 安全断言标记语言（SAML）\n(C) 简单对象访问协议（SOAP）\n(D) 超文本标记语言（HTML）",
        "答案": "B",
        "来源页码": 15
    },
    {
        "题号": "74",
        "英文题目与选项": "Warren is helping his organization build a new datacenter that will support a cloud service they provide to their customers. Which one of the following is a reasonable minimum amount of time to expect the uninterruptible power supply (UPS) to provide power to the systems in the datacenter?\n(A) 10 minutes\n(B) 60 minutes\n(C) 3 hours\n(D) 12 hours",
        "中文题目与选项": "Warren 正在帮助他的组织建立一个新的数据中心，以支持他们向客户提供的云服务。以下哪一项是合理的UPS（不间断电源）供电的最短时间预期？\n(A) 10 分钟\n(B) 60 分钟\n(C) 3 小时\n(D) 12 小时",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "75",
        "英文题目与选项": "The practice of using strong magnets to erase and scramble data on magnetic media is called ___________.\n(A) Degaussing\n(B) Scrubbing\n(C) Crypto-shredding\n(D) Bit splitting",
        "中文题目与选项": "使用强磁场来擦除并扰乱磁性介质上数据的做法称为什么？\n(A) 消磁\n(B) 擦洗\n(C) 加密粉碎\n(D) 位分离",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "76",
        "英文题目与选项": "Which one of the following actions should Gary take to minimize costs?\n(A) Set a lifecycle policy that moves data to archival storage after 90 days and destroys it after five years.\n(B) Set a lifecycle policy that moves data to archival storage after 90 days.\n(C) Set a lifecycle policy that destroys data after five years.\n(D) None of these actions are appropriate.",
        "中文题目与选项": "Gary 应该采取以下哪项措施来最小化成本？\n(A) 设置生命周期策略，在 90 天后将数据转移到归档存储，并在五年后销毁。\n(B) 设置生命周期策略，在 90 天后将数据转移到归档存储。\n(C) 设置生命周期策略，在五年后销毁数据。\n(D) 以上措施均不合适。",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "77",
        "英文题目与选项": "Gary receives a litigation hold notice for data related to tests performed in March 2022. What should he do?\n(A) Suspend all data deletion.\n(B) Suspend deletion of data from March 2022 only.\n(C) Suspend all data archival.\n(D) None of these actions are necessary.",
        "中文题目与选项": "Gary 收到一份关于 2022 年 3 月进行的测试数据的诉讼保留通知。他应该怎么做？\n(A) 暂停所有数据删除。\n(B) 仅暂停删除 2022 年 3 月的数据。\n(C) 暂停所有数据归档。\n(D) 无需采取任何措施。",
        "答案": "B",
        "来源页码": 16
    },
    {
        "题号": "78",
        "英文题目与选项": "In regard to most privacy guidance, the data subject is _________________.\n(A) The individual described by the personally identifiable information (PII)\n(B) The entity that collects or creates the PII\n(C) The entity that uses the PII on behalf of the controller\n(D) The entity that regulates the PII",
        "中文题目与选项": "根据大多数隐私指南，数据主体是指 ________________。\n(A) 由个人可识别信息（PII）所描述的个人\n(B) 收集或创建 PII 的实体\n(C) 代表控制者使用 PII 的实体\n(D) 监管 PII 的实体",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "79",
        "英文题目与选项": "Which term refers to a system’s ability to cordon off or protect certain aspects of the compute environment such as processing, memory, and other resources needed in the compute transaction?\n(A) Virtualization\n(B) Emulation\n(C) ASLR\n(D) Sandboxing",
        "中文题目与选项": "哪个术语指的是系统隔离或保护计算环境某些方面（如处理、内存以及计算事务所需的其他资源）的能力？\n(A) 虚拟化\n(B) 仿真\n(C) 地址空间布局随机化 (ASLR)\n(D) 沙盒化",
        "答案": "D",
        "来源页码": 16
    },
    {
        "题号": "80",
        "英文题目与选项": "You are the security policy lead for your organization, which is considering migrating from your on-premises, traditional IT environment into the cloud. You are reviewing the Cloud Security Alliance Cloud Controls Matrix (CSA CCM) as a tool for your organization. Which of the following benefits will the CSA CCM offer your organization?\n(A) Simplifying regulatory compliance\n(B) Collecting multiple data streams from your log files\n(C) Ensuring that the baseline configuration is applied to all systems\n(D) Enforcing contract terms between your organization and the cloud provider",
        "中文题目与选项": "你是组织的安全策略负责人，正考虑将传统的本地 IT 环境迁移到云端。你正在审查云安全联盟的云控制矩阵（CSA CCM）作为组织的工具。以下哪项是 CSA CCM 能为你的组织带来的好处？\n(A) 简化合规要求\n(B) 从日志文件中收集多个数据流\n(C) 确保所有系统应用基线配置\n(D) 强制执行组织与云服务提供商之间的合同条款",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "81",
        "英文题目与选项": "ISO 31000 is most similar to which of the following regulations, standards, guidelines, and frameworks?\n(A) NIST 800-37\n(B) COBIT\n(C) ITIL\n(D) GDPR",
        "中文题目与选项": "ISO 31000 与以下哪个法规、标准、指南或框架最为相似？\n(A) NIST 800-37\n(B) COBIT\n(C) ITIL\n(D) GDPR",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "82",
        "英文题目与选项": "Which one of the following technologies is typically contained within a computer and manages the encryption keys used for full-disk encryption?\n(A) HSM\n(B) PKI\n(C) TPM\n(D) IPS",
        "中文题目与选项": "以下哪种技术通常包含在计算机中并管理用于全盘加密的加密密钥？\n(A) HSM（硬件安全模块）\n(B) PKI（公钥基础设施）\n(C) TPM（可信平台模块）\n(D) IPS（入侵防御系统）",
        "答案": "C",
        "来源页码": 17
    },
    {
        "题号": "83",
        "英文题目与选项": "You are the IT security manager for a video game software development company. In order to test your products for security defects, your firm decides to use a small team of game testers recruited from a public pool of interested gamers who apply for a chance to take part. This is an example of _________________ .\n(A) Static testing\n(B) Dynamic testing\n(C) Code review\n(D) Open source review",
        "中文题目与选项": "你是一家视频游戏软件开发公司的IT安全经理。为了测试产品的安全缺陷，你的公司决定使用一支从公众中招聘的有兴趣的游戏玩家测试团队，他们自愿报名参与。此做法是以下哪种测试的示例？\n(A) 静态测试\n(B) 动态测试\n(C) 代码审查\n(D) 开放式众测审查",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "84",
        "英文题目与选项": "Which one of the following principles imposes a standard of care upon an individual that is broad and equivalent to what one would expect from a reasonable person under the circumstances?\n(A) Due diligence\n(B) Separation of duties\n(C) Due care\n(D) Least privilege",
        "中文题目与选项": "以下哪一原则要求个人达到在当时情境下一个理性人应具备的谨慎程度？\n(A) 尽职调查（Due diligence）\n(B) 职责分离（Separation of duties）\n(C) 应有注意（Due care）\n(D) 最小特权（Least privilege）",
        "答案": "C",
        "来源页码": 17
    },
    {
        "题号": "85",
        "英文题目与选项": "Which one of the following is the most important security consideration when selecting a new computer facility?\n(A) Local law enforcement response times\n(B) Location adjacent to competitor’s facilities\n(C) Aircraft flight paths\n(D) Utility infrastructure",
        "中文题目与选项": "在选择新的计算机设施时，下列哪一项是最重要的安全考虑因素？\n(A) 当地执法部门的响应时间\n(B) 与竞争对手设施的邻近位置\n(C) 飞机航线\n(D) 公用基础设施",
        "答案": "D",
        "来源页码": 17
    },
    {
        "题号": "86",
        "英文题目与选项": "Which one of the following storage types is typically the most inexpensive class of storage?\n(A) Block storage\n(B) Object storage\n(C) Archival storage\n(D) Raw storage",
        "中文题目与选项": "以下哪种存储类型通常是成本最低的存储类别？\n(A) 块存储\n(B) 对象存储\n(C) 归档存储\n(D) 原始存储",
        "答案": "C",
        "来源页码": 17
    },
    {
        "题号": "87",
        "英文题目与选项": "Andy is concerned that his organization is not meeting uptime requirements to their cloud service customers. Which one of the following ITIL control categories is least directly impacted?\n(A) Incident management\n(B) Change management\n(C) Availability management\n(D) Service level management",
        "中文题目与选项": "Andy 担心其组织未能满足云服务客户的正常运行时间要求。以下哪一个 ITIL 控制类别受影响最不直接？\n(A) 事件管理\n(B) 变更管理\n(C) 可用性管理\n(D) 服务级别管理",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "88",
        "英文题目与选项": "Firewalls, DLP (data loss prevention or data leak protection) and digital rights management (DRM) solutions, and security information and event management (SIEM) products are all examples of _________________ controls.\n(A) Technical\n(B) Administrative\n(C) Physical\n(D) Competing",
        "中文题目与选项": "防火墙、DLP（数据泄露防护）、数字版权管理（DRM）解决方案以及安全信息与事件管理（SIEM）产品都是 __________ 控制的例子。\n(A) 技术控制\n(B) 管理控制\n(C) 物理控制\n(D) 竞争控制",
        "答案": "A",
        "来源页码": 18
    },
    {
        "题号": "89",
        "英文题目与选项": "Brenda’s organization recently completed the acquisition of a competitor firm. Which one of the following tasks would be least likely to be part of the organizational processes addressed during the acquisition?\n(A) Consolidation of security functions\n(B) Integration of security tools\n(C) Protection of intellectual property\n(D) Documentation of security policies",
        "中文题目与选项": "Brenda 的组织最近完成了对一家竞争公司的收购。以下哪项任务最不可能是收购过程中涉及的组织流程的一部分？\n(A) 安全职能的整合\n(B) 安全工具的集成\n(C) 知识产权保护\n(D) 安全策略的文档化",
        "答案": "D",
        "来源页码": 18
    },
    {
        "题号": "90",
        "英文题目与选项": "What is the term used to describe loss of access to data because the cloud provider has ceased operation?\n(A) Tokenization\n(B) Vendor lockout\n(C) Vendor lock-in\n(D) Masking",
        "中文题目与选项": "用于描述由于云服务提供商停止运营而导致无法访问数据的术语是什么？\n(A) 令牌化\n(B) 供应商锁定退出（Vendor lockout）\n(C) 供应商锁定（Vendor lock-in）\n(D) 数据遮掩",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "91",
        "英文题目与选项": "Which one of the following is not commonly used as a criterion for data classification decisions?\n(A) Sensitivity\n(B) Criticality\n(C) Age\n(D) Jurisdiction",
        "中文题目与选项": "以下哪一项不是数据分类决策中常用的标准？\n(A) 敏感度\n(B) 关键性\n(C) 数据年龄\n(D) 管辖权",
        "答案": "C",
        "来源页码": 18
    },
    {
        "题号": "92",
        "英文题目与选项": "All of the following are activities that should be performed when capturing and maintaining an accurate, secure system baseline except _________________\n(A) Updating the OS baseline image according to a scheduled interval to include any necessary security patches and configuration modifications\n(B) Starting with a clean installation (hardware or virtual) of the desired OS\n(C) Including only the default account credentials and nothing customized\n(D) Halting or removing all unnecessary services",
        "中文题目与选项": "当捕获并维护准确且安全的系统基线时，应执行以下所有活动，除了 __________。\n(A) 按计划间隔更新操作系统基线镜像，以包含任何必要的安全补丁和配置修改\n(B) 从干净安装（硬件或虚拟）所需的操作系统开始\n(C) 仅包含默认帐户凭据，不做任何自定义\n(D) 停止或移除所有不必要的服务",
        "答案": "C",
        "来源页码": 18
    },
    {
        "题号": "93",
        "英文题目与选项": "Richard is a data custodian who recently received a litigation hold notice for a set of records he administers. How long should he set the retention period for the affected data?\n(A) 1 year\n(B) 5 years\n(C) 7 years\n(D) Indefinite",
        "中文题目与选项": "Richard是一名数据管理员，最近他收到了针对其管理的一组记录的诉讼保留通知。他应将受影响数据的保留期限设置为多久？\n(A) 1年\n(B) 5年\n(C) 7年\n(D) 无限期",
        "答案": "D",
        "来源页码": 19
    },
    {
        "题号": "94",
        "英文题目与选项": "What technology can serve as a connection between the virtual guest operating system and the hypervisor, improving the services provided to the guest?\n(A) Virtualization sandbox\n(B) Virtualization bridge\n(C) Virtualization tools\n(D) It is not advised to create a connection between the virtual guests and the hypervisor in order to preserve tenant isolation",
        "中文题目与选项": "哪种技术可以作为虚拟客户操作系统与管理程序（hypervisor）之间的连接，改善提供给客户的服务？\n(A) 虚拟化沙箱\n(B) 虚拟化桥接\n(C) 虚拟化工具\n(D) 为了保持租户隔离，不建议在虚拟客户与管理程序之间建立连接",
        "答案": "C",
        "来源页码": 19
    },
    {
        "题号": "95",
        "英文题目与选项": "Matt needs to revoke a digital certificate that is used as part of his organization’s information rights management (IRM) program. Which one of the following options would best meet this need?\n(A) Update the certificate’s OCSP record\n(B) Add the certificate to the CRL\n(C) Change the public key\n(D) Change the private key",
        "中文题目与选项": "Matt需要吊销其组织的信息权限管理（IRM）计划中使用的数字证书。以下哪一个选项最符合这一需求？\n(A) 更新证书的OCSP记录\n(B) 将证书添加到CRL中\n(C) 更改公钥\n(D) 更改私钥",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "96",
        "英文题目与选项": "You are the IT security subject matter expert for a hobbyist collective that researches and archives old music. Your collective is set up in such a way that the members own various pieces of the network themselves, pool resources and data, and communicate and share files via the internet. This is an example of what cloud model?\n(A) Hybrid\n(B) Private\n(C) Public\n(D) Community",
        "中文题目与选项": "你是一家研究和存档旧音乐的业余集体的IT安全专家。该集体的成员各自拥有网络的不同部分，共享资源和数据，并通过互联网进行交流与文件共享。这属于哪种云模型？\n(A) 混合云\n(B) 私有云\n(C) 公有云\n(D) 社区云",
        "答案": "D",
        "来源页码": 19
    },
    {
        "题号": "97",
        "英文题目与选项": "What ITIL process ensures that IT resources are sufficient to meet current and future business demand?\n(A) Availability management\n(B) Service level management\n(C) Configuration management\n(D) Capacity management",
        "中文题目与选项": "哪个ITIL流程确保IT资源足以满足当前和未来的业务需求？\n(A) 可用性管理\n(B) 服务级别管理\n(C) 配置管理\n(D) 容量管理",
        "答案": "D",
        "来源页码": 19
    },
    {
        "题号": "98",
        "英文题目与选项": "What is the correct order of the phases of the data lifecycle?\n(A) Create, Store, Use, Archive, Share, Destroy\n(B) Create, Store, Use, Share, Archive, Destroy\n(C) Create, Use, Store, Share, Archive, Destroy\n(D) Create, Archive, Store, Share, Use, Destroy",
        "中文题目与选项": "数据生命周期阶段的正确顺序是哪个？\n(A) 创建、存储、使用、归档、共享、销毁\n(B) 创建、存储、使用、共享、归档、销毁\n(C) 创建、使用、存储、共享、归档、销毁\n(D) 创建、归档、存储、共享、使用、销毁",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "99",
        "英文题目与选项": "Carolyn is using ephemeral storage to process data in a machine learning application using a virtual server instance. Which one of the following best describes this storage?\n(A) It will remain until Carolyn explicitly deletes it.\n(B) It will be deleted if the server is rebooted.\n(C) It will be deleted only if the server is stopped.\n(D) It will be deleted only if the server is terminated.",
        "中文题目与选项": "Carolyn 使用临时存储在虚拟服务器实例中处理机器学习应用的数据。以下哪项最能描述这种存储？\n(A) 它将一直保留，直到 Carolyn 明确删除它。\n(B) 当服务器重新启动时它将被删除。\n(C) 只有当服务器停止时它才会被删除。\n(D) 只有当服务器终止时它才会被删除。",
        "答案": "D",
        "来源页码": 20
    },
    {
        "题号": "100",
        "英文题目与选项": "You are the security manager for a small retailer engaged in e‑commerce. A large part of your sales is transacted through the use of credit and debit cards and you need to store these numbers for use in future transactions. You have determined that the costs of maintaining an encrypted storage capability in order to meet compliance requirements are prohibitive. What other technology can you use instead to meet those regulatory needs?\n(A) Obfuscation\n(B) Masking\n(C) Tokenization\n(D) Hashing",
        "中文题目与选项": "你是一家从事电子商务的小型零售商的安全经理。你的销售大部分通过信用卡和借记卡完成，你需要存储这些号码以备未来的交易使用。你发现维护加密存储能力以满足合规要求的成本过高。为了满足这些监管需求，你可以使用哪种其他技术？\n(A) 混淆\n(B) 掩码\n(C) 令牌化\n(D) 哈希",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "101",
        "英文题目与选项": "Which one of the following actions might be taken as part of a business continuity plan?\n(A) Restoring from backup tapes\n(B) Implementing RAID\n(C) Relocating to a cold site\n(D) Restarting business operations",
        "中文题目与选项": "以下哪项操作可能作为业务连续性计划的一部分？\n(A) 从备份磁带恢复\n(B) 实施 RAID\n(C) 迁移到冷备站点\n(D) 重新启动业务运营",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "102",
        "英文题目与选项": "Bob is designing a datacenter to support his organization, a financial services firm. Bob’s datacenter will have to be approved by regulators using a framework under which law?\n(A) Health Industry Portability and Accountability Act (HIPAA)\n(B) Payment Card Industry Data Security Standard (PCI DSS)\n(C) Gramm–Leach–Bliley Act (GLBA)\n(D) Sarbanes–Oxley Act (SOX)",
        "中文题目与选项": "Bob 正在为他的组织（一家金融服务公司）设计数据中心。Bob 的数据中心必须通过监管机构依据哪项法律框架的批准？\n(A) 健康产业可携性和责任法案 (HIPAA)\n(B) 支付卡行业数据安全标准 (PCI DSS)\n(C) 格雷姆–里奇–布莱利法案 (GLBA)\n(D) 萨班斯–奥克斯利法案 (SOX)",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "103",
        "英文题目与选项": "Which one of the following is most likely to be stored as unstructured data?\n(A) Interview videos\n(B) Sales transactions\n(C) Customer contact information\n(D) Website visitor logs",
        "中文题目与选项": "以下哪项最有可能以非结构化数据形式存储？\n(A) 面试视频\n(B) 销售交易记录\n(C) 客户联系信息\n(D) 网站访问日志",
        "答案": "A",
        "来源页码": 20
    },
    {
        "题号": "104",
        "英文题目与选项": "_____________ is a symmetric block type of cipher used to encrypt information and is currently the standard for the U.S. government in protecting sensitive and secret documents.\n(A) MD5\n(B) SSL\n(C) Blowfish\n(D) AES",
        "中文题目与选项": "_____________ 是一种用于加密信息的对称分组加密算法，目前是美国政府用于保护敏感和机密文件的标准。\n(A) MD5\n(B) SSL\n(C) Blowfish\n(D) AES",
        "答案": "D",
        "来源页码": 20
    },
    {
        "题号": "105",
        "英文题目与选项": "Tom is conducting a business continuity planning effort for Orange Blossoms, a fruit orchard located in Central Florida. During the assessment process, the committee determined that there is a small risk of snow in the region but that the cost of implementing controls to reduce the impact of that risk is not warranted. They elect to not take any specific action in response to the risk. What risk management strategy is Orange Blossoms pursuing?\n(A) Risk mitigation\n(B) Risk transference\n(C) Risk avoidance\n(D) Risk acceptance",
        "中文题目与选项": "Tom 正在为位于佛罗里达中部的果园 Orange Blossoms 开展业务连续性计划工作。在评估过程中，委员会确定该地区发生降雪的风险较小，但为降低该风险影响而实施控制措施的成本并不值得。他们决定不采取任何具体行动应对该风险。Orange Blossoms 正在采用哪种风险管理策略？\n(A) 风险缓解\n(B) 风险转移\n(C) 风险规避\n(D) 风险接受",
        "答案": "D",
        "来源页码": 21
    },
    {
        "题号": "106",
        "英文题目与选项": "Linda is selecting a disaster recovery facility for her organization, and she wants to retain independence from other organizations as much as possible. She would like to choose a facility that balances cost and recovery time, allowing activation in about one week after a disaster is declared. What type of facility should she choose?\n(A) Cold site\n(B) Warm site\n(C) Mutual assistance agreement\n(D) Hot site",
        "中文题目与选项": "Linda 正在为其组织选择灾难恢复设施，她希望尽可能保持对其他组织的独立性。她希望选择一种在成本和恢复时间之间取得平衡的设施，可以在灾难宣布后一周左右启用。她应选择哪种设施类型？\n(A) 冷站点\n(B) 温站点\n(C) 互助协议站点\n(D) 热站点",
        "答案": "B",
        "来源页码": 21
    },
    {
        "题号": "107",
        "英文题目与选项": "Helen’s organization handles large quantities of highly sensitive information. To help address this risk, she purchased a cyber-liability insurance policy. What type of risk response action is Helen taking?\n(A) Transfer\n(B) Avoid\n(C) Mitigate\n(D) Accept",
        "中文题目与选项": "Helen 的组织处理大量高度敏感的信息。为了应对这一风险，她购买了网络责任保险。Helen 采取了哪种类型的风险应对措施？\n(A) 转移\n(B) 规避\n(C) 缓解\n(D) 接受",
        "答案": "A",
        "来源页码": 21
    },
    {
        "题号": "108",
        "英文题目与选项": "Which type of attack occurs when an application receives untrusted data and then sends it to a web browser without proper validation?\n(A) SQL injection\n(B) Brute-force\n(C) Cross-site scripting (XSS)\n(D) Man-in-the-middle/on-path",
        "中文题目与选项": "当应用程序接收不受信任的数据并在未经适当验证的情况下将其发送到 Web 浏览器时，会发生哪种类型的攻击？\n(A) SQL 注入\n(B) 暴力破解\n(C) 跨站脚本攻击 (XSS)\n(D) 中间人/路径攻击",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "109",
        "英文题目与选项": "Which federal standard is for the accreditation and distinguishing of secure and well-architected cryptographic modules produced by private sector vendors who seek to or are in the process of having their solutions and services certified by the U.S. government departments and regulated industries that collect, store, transfer, or share data that is deemed to be sensitive but not classified?\n(A) ISO 27036\n(B) ISO 27050\n(C) COBIT\n(D) FIPS 140-2",
        "中文题目与选项": "哪项联邦标准用于认证和区分由私营部门供应商生产的安全且架构良好的加密模块，这些供应商希望或正在让其解决方案和服务通过美国政府部门以及收集、存储、传输或共享被视为敏感但非机密数据的受监管行业的认证？\n(A) ISO 27036\n(B) ISO 27050\n(C) COBIT\n(D) FIPS 140-2",
        "答案": "D",
        "来源页码": 21
    },
    {
        "题号": "110",
        "英文题目与选项": "Which one of the following technologies is least commonly associated with semi-structured data?\n(A) JSON\n(B) XML\n(C) SQL\n(D) MongoDB",
        "中文题目与选项": "以下哪项技术与半结构化数据的关联最不常见？\n(A) JSON\n(B) XML\n(C) SQL\n(D) MongoDB",
        "答案": "C",
        "来源页码": 22
    },
    {
        "题号": "111",
        "英文题目与选项": "Which of the following describes a SYN flood attack?\n(A) Rapid transmission of Internet Relay Chat (IRC) messages\n(B) Creating a high number of partially open TCP connections\n(C) Disabling the Domain Name Service (DNS) server\n(D) Excessive list linking of users and files",
        "中文题目与选项": "以下哪项描述了 SYN 洪泛攻击？\n(A) 快速发送互联网中继聊天（IRC）消息\n(B) 创建大量未完全打开的 TCP 连接\n(C) 禁用域名服务（DNS）服务器\n(D) 创建过多的用户与文件链接",
        "答案": "B",
        "来源页码": 22
    },
    {
        "题号": "112",
        "英文题目与选项": "What concept from the field of digital forensics requires that you document who handles evidence from the time of collection until the time of use in court?\n(A) eDiscovery\n(B) Probable cause\n(C) Chain of custody\n(D) The Doctrine of the Proper Law",
        "中文题目与选项": "数字取证领域中的哪个概念要求记录证据从收集到法庭使用过程中由谁保管？\n(A) 电子信息发现（eDiscovery）\n(B) 合理原因（Probable cause）\n(C) 证据保管链（Chain of custody）\n(D) 适当法律原则（Doctrine of the Proper Law）",
        "答案": "C",
        "来源页码": 22
    },
    {
        "题号": "113",
        "英文题目与选项": "Chris is investigating a security incident where he believes that an attacker placed fraudulent orders using his organization’s website. He believes that critical evidence may be stored in the website’s logs and is concerned that those logs may be modified because the web server is still in production. The web server is hosted in a virtualized environment. What action should Chris take?\n(A) Keep the website offline until the investigation is complete.\n(B) Take the virtualization platform offline as evidence.\n(C) Take a snapshot of the web server instance and use that for the investigation.\n(D) No action is necessary.",
        "中文题目与选项": "Chris 正在调查一起安全事件，他认为攻击者通过其组织的网站提交了虚假订单。他认为关键证据可能存储在网站日志中，并担心由于 Web 服务器仍在运行，日志可能被修改。Web 服务器托管在虚拟化环境中。Chris 应采取什么行动？\n(A) 将网站下线直到调查完成\n(B) 将整个虚拟化平台下线作为证据\n(C) 对 Web 服务器实例进行快照并用该快照进行调查\n(D) 不需要采取任何措施",
        "答案": "C",
        "来源页码": 22
    },
    {
        "题号": "114",
        "英文题目与选项": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the internet). In a typical TLS session, what form of cryptography is used for the session key?\n(A) Symmetric key\n(B) Asymmetric key pairs\n(C) Hashing\n(D) One asymmetric key pair",
        "中文题目与选项": "传输层安全（TLS）协议在公共媒介（例如互联网）上创建安全通信通道。在典型的 TLS 会话中，会话密钥使用哪种加密形式？\n(A) 对称密钥\n(B) 非对称密钥对\n(C) 哈希\n(D) 单个非对称密钥对",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "115",
        "英文题目与选项": "Which of the following is not typically a phase in the software development life cycle (SDLC)?\n(A) Define\n(B) Test\n(C) Develop\n(D) Sanitize",
        "中文题目与选项": "以下哪一项通常不是软件开发生命周期（SDLC）中的阶段？\n(A) 定义\n(B) 测试\n(C) 开发\n(D) 清理",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "116",
        "英文题目与选项": "What component of a virtualized environment is responsible for enforcing tenant isolation?\n(A) Guest operating system\n(B) Hypervisor\n(C) Kernel\n(D) Protection manager",
        "中文题目与选项": "在虚拟化环境中，哪个组件负责实施租户隔离？\n(A) 客户操作系统\n(B) 虚拟机管理程序（Hypervisor）\n(C) 内核\n(D) 保护管理器",
        "答案": "B",
        "来源页码": 23
    },
    {
        "题号": "117",
        "英文题目与选项": "In a public cloud services arrangement, who creates governance that will determine which controls are selected for the datacenter and how they are deployed?\n(A) The cloud provider\n(B) The cloud customer\n(C) The regulator(s)\n(D) The end user",
        "中文题目与选项": "在公共云服务模式下，谁负责制定治理策略，以决定数据中心采用哪些控制措施以及如何部署这些控制？\n(A) 云服务提供商\n(B) 云服务客户\n(C) 监管机构\n(D) 最终用户",
        "答案": "A",
        "来源页码": 23
    },
    {
        "题号": "118",
        "英文题目与选项": "Which one of the following entities is dedicated to helping application developers improve software security?\n(A) ATASM\n(B) PASTA\n(C) DREAD\n(D) SAFEcode",
        "中文题目与选项": "以下哪一个组织专注于帮助应用程序开发人员提高软件安全性？\n(A) ATASM\n(B) PASTA\n(C) DREAD\n(D) SAFEcode",
        "答案": "D",
        "来源页码": 23
    },
    {
        "题号": "119",
        "英文题目与选项": "Gavin is creating a report to management on the results of his most recent risk assessment. In his report, he would like to identify the remaining level of risk to the organization after adopting security controls. What term best describes this current level of risk?\n(A) Inherent risk\n(B) Residual risk\n(C) Control risk\n(D) Mitigated risk",
        "中文题目与选项": "Gavin 正在为管理层撰写最新风险评估结果报告。在报告中，他希望指出在采用安全控制后组织仍然面临的风险水平。哪个术语最能描述这种当前的风险？\n(A) 固有风险\n(B) 剩余风险\n(C) 控制风险\n(D) 缓解风险",
        "答案": "B",
        "来源页码": 23
    },
    {
        "题号": "120",
        "英文题目与选项": "Tina is gathering evidence as part of a cybersecurity investigation. Which one of the following evidence types is most volatile?\n(A) Firmware contents\n(B) File stored in archival storage\n(C) File stored on a server hard drive\n(D) RAM contents",
        "中文题目与选项": "Tina 正在进行网络安全调查并收集证据。以下哪种证据类型是最易失性的？\n(A) 固件内容\n(B) 存储于归档存储中的文件\n(C) 存储于服务器硬盘中的文件\n(D) 内存（RAM）内容",
        "答案": "D",
        "来源页码": 23
    },
    {
        "题号": "121",
        "英文题目与选项": "The Agile Manifesto for software development focuses largely on _________________.\n(A) Secure build\n(B) Thorough documentation\n(C) Working prototypes\n(D) Proper planning",
        "中文题目与选项": "软件开发的敏捷宣言主要关注__________________。\n(A) 安全构建\n(B) 完整文档\n(C) 可运行的原型\n(D) 合理规划",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "122",
        "英文题目与选项": "You are the IT security manager for a video game software development company. In order to test the functionality of online multiplayer game content, your testing team wants to use a cloud service independent from the internal production environment. You suggest that a(n) _________________ service model will best meet this requirement.\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) FaaS",
        "中文题目与选项": "你是一家视频游戏软件开发公司的IT安全经理。为了测试在线多人游戏内容的功能，你的测试团队希望使用一个与内部生产环境相独立的云服务。你建议使用哪种服务模型最能满足这一需求？\n(A) IaaS（基础设施即服务）\n(B) PaaS（平台即服务）\n(C) SaaS（软件即服务）\n(D) FaaS（函数即服务）",
        "答案": "B",
        "来源页码": 24
    },
    {
        "题号": "123",
        "英文题目与选项": "Why is Simple Object Access Protocol (SOAP) used for accessing web services instead of the Distributed Component Object Model (DCOM) and the Common Object Request Broker Architecture (CORBA)?\n(A) SOAP provides a much more lightweight solution.\n(B) SOAP provides for stronger interoperability.\n(C) SOAP is much more secure.\n(D) SOAP is newer.",
        "中文题目与选项": "为什么在访问Web服务时使用简单对象访问协议（SOAP），而不是分布式组件对象模型（DCOM）和通用对象请求代理架构（CORBA）？\n(A) SOAP提供了一个更轻量级的解决方案。\n(B) SOAP具有更强的互操作性。\n(C) SOAP更加安全。\n(D) SOAP更新。",
        "答案": "B",
        "来源页码": 24
    },
    {
        "题号": "124",
        "英文题目与选项": "____________ is an exercise designed to determine the impact of losing the support of or availability of any particular resource to an organization.\n(A) BIA\n(B) PCP\n(C) BCD\n(D) DR",
        "中文题目与选项": "____________ 是一种旨在确定失去某一特定资源的支持或可用性对组织产生影响的活动。\n(A) BIA（业务影响分析）\n(B) PCP（生产连续性计划）\n(C) BCD（业务连续性设计）\n(D) DR（灾难恢复）",
        "答案": "A",
        "来源页码": 24
    },
    {
        "题号": "125",
        "英文题目与选项": "Which of the following best describes the characteristics of a private cloud?\n(A) An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units)\n(B) An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers hosted exclusively off-premises\n(C) An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units) hosted exclusively on-premises\n(D) An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units) that is owned and managed by the organization",
        "中文题目与选项": "以下哪一项最能描述私有云的特征？\n(A) 为单个组织（由多个客户或业务部门组成）专用的基础设施。\n(B) 为单个组织（由多个客户组成）专用并完全托管在外部的基础设施。\n(C) 为单个组织（由多个客户或业务部门组成）专用并完全托管在内部的基础设施。\n(D) 为单个组织（由多个客户或业务部门组成）专用，并由该组织拥有和管理的基础设施。",
        "答案": "D",
        "来源页码": 24
    }
]
