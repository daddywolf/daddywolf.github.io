const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "Cloud providers will probably not allow ________ as part of a customer's penetration test.\n(A) Network mapping\n(B) Vulnerability scanning\n(C) Reconnaissance\n(D) Social engineering",
        "中文题目与选项": "云提供商可能不允许 ________ 作为客户渗透测试的一部分。\n(A) 网络映射\n(B) 漏洞扫描\n(C) 侦察\n(D) 社会工程",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 1
    },
    {
        "题号": "2",
        "英文题目与选项": "Virtual machine (VM) configuration management (CM) tools should require that managed systems perform\n(A) Biometric recognition\n(B) Anti-tampering mechanisms\n(C) Log file generation\n(D) Hackback capabilities",
        "中文题目与选项": "虚拟机 (VM) 配置管理 (CM) 工具应要求受管系统执行以下哪项？\n(A) 生物识别\n(B) 防篡改机制\n(C) 日志文件生成\n(D) 反击能力",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 2
    },
    {
        "题号": "3",
        "英文题目与选项": "Lin wants to allow her users to use existing credentials provided by a third-party identity provider when they access her service. What element will she have to provide from the following list?\n(A) User IDs\n(B) Authentication\n(C) Authorization\n(D) Identity proofing",
        "中文题目与选项": "Lin 希望允许她的用户在访问她的服务时使用第三方身份提供商提供的现有凭据。她必须从以下列表中提供哪些要素？\n(A) 用户ID\n(B) 身份验证\n(C) 授权\n(D) 身份证明",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第四章",
        "来源页码": 3
    },
    {
        "题号": "4",
        "英文题目与选项": "Susan wants to avoid common pitfalls in cloud application development. Which of the following pitfalls is frequently associated with cloud environments?\n(A) Reliability of applications built in the cloud\n(B) Scalability of applications built in the cloud\n(C) Redundancy of applications built in the cloud\n(D) Security of applications built in the cloud",
        "中文题目与选项": "Susan希望避免云应用程序开发中常见的陷阱。以下哪些陷阱经常与云环境有关？\n(A) 构建在云中的应用程序的可靠性\n(B) 构建在云中的应用程序的可扩展性\n(C) 构建在云中的应用程序的冗余性\n(D) 构建在云中的应用程序的安全性",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第四章",
        "来源页码": 4
    },
    {
        "题号": "5",
        "英文题目与选项": "Nick wants to avoid common pitfalls in his CI/CD pipeline. Which of the following is a common CI/CD pitfall that can harm cloud development efforts?\n(A) Automation of processes\n(B) Use of metrics\n(C) Using multiple deployment paths\n(D) Reliance on a version control system",
        "中文题目与选项": "Nick希望避免他的CI/CD管道中常见的陷阱。以下哪一项是可能损害云开发工作的常见CI/CD陷阱？\n(A) 流程自动化\n(B) 指标的使用\n(C) 使用多个部署路径\n(D) 依赖版本控制系统",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第四章",
        "来源页码": 5
    },
    {
        "题号": "6",
        "英文题目与选项": "At which phase of the software development life cycle (SDLC) is user involvement most crucial?\n(A) Definition\n(B) Design\n(C) Development\n(D) Testing",
        "中文题目与选项": "在软件开发生命周期 (SDLC) 的哪个阶段，用户参与最为关键？\n(A) 定义阶段\n(B) 设计阶段\n(C) 开发阶段\n(D) 测试阶段",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第四章",
        "来源页码": 6
    },
    {
        "题号": "7",
        "英文题目与选项": "Gary's cloud service provides customers with access to APIs. Which of the following is a common security flaw in APIs?\n(A) Use of unstructured data\n(B) Lack of authentication\n(C) Use of semi-structured data\n(D) Lack of encryption",
        "中文题目与选项": "Gary 的云服务为客户提供 API 访问权限。以下哪项是 API 中常见的安全缺陷？\n(A) 非结构化数据的使用\n(B) 缺乏身份验证\n(C) 半结构化数据的使用\n(D) 缺乏加密",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第四章",
        "来源页码": 7
    },
    {
        "题号": "8",
        "英文题目与选项": "OWASP’s Application Security Verification Standard (ASVS) has three primary usage models. Which of the following is not an intended usage model based on its design objectives?\n(A) To be used as a metric\n(B) To be used for auditing\n(C) To be used as guidance\n(D) To be used during procurement",
        "中文题目与选项": "OWASP 的应用程序安全验证标准 (ASVS) 有三个主要的使用模型。以下哪项不是基于其设计目标的预期使用模型？\n(A) 用作指标\n(B) 用于审计\n(C) 用作指导\n(D) 采购时使用",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第四章",
        "来源页码": 8
    },
    {
        "题号": "9",
        "英文题目与选项": "Megan wants to increase the auditability of the use of privileges in her infrastructure. Which of the following solutions will have the biggest positive impact on auditability?\n(A) Use shared service accounts\n(B) Use multifactor authentication\n(C) Use dynamic secrets\n(D) Use API keys",
        "中文题目与选项": "Megan 希望提高其基础设施中使用特权的可审计性。以下哪种解决方案将对可审计性产生最大的积极影响？\n(A) 使用共享服务账户\n(B) 使用多因素身份验证\n(C) 使用动态密钥\n(D) 使用 API 密钥",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 9
    },
    {
        "题号": "10",
        "英文题目与选项": "Yasmine is working with a software as a service vendor. What part of the environment does Yasmine's company have responsibility for?\n(A) Applications and data storage\n(B) The OS, middleware, and runtime\n(C) Storage and networking\n(D) The vendor is responsible for the environment",
        "中文题目与选项": "Yasmine 正在与一家软件即服务供应商合作。Yasmine 的公司对环境的哪一部分负责？\n(A) 应用程序和数据存储\n(B) 操作系统、中间件和运行时\n(C) 存储和网络\n(D) 供应商对环境负责",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第四章",
        "来源页码": 10
    },
    {
        "题号": "11",
        "英文题目与选项": "Gretchen wants to ensure that her organization is in compliance with their software licenses. Which of the following is the most important step for most organizations in ensuring license compliance?\n(A) Using only open source software\n(B) Tracking all software versions\n(C) Using only commercial software\n(D) Software inventory",
        "中文题目与选项": "Gretchen 希望确保她的组织遵守他们的软件许可证。对于大多数组织来说，以下哪一项是确保许可证合规性的最重要步骤？\n(A) 仅使用开源软件\n(B) 跟踪所有软件版本\n(C) 仅使用商业软件\n(D) 软件清单",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 11
    },
    {
        "题号": "12",
        "英文题目与选项": "Laura wants to use a threat modeling tool to assess threats in her environment. Which of the following models has been abandoned by Microsoft and replaced with a new model?\n(A) DREAD\n(B) PASTA\n(C) STRIDE\n(D) ATASM",
        "中文题目与选项": "Laura想使用威胁建模工具来评估她所处环境中的威胁。以下哪种模型已被微软放弃，并由新模型取代？\n(A) DREAD\n(B) PASTA\n(C) STRIDE\n(D) ATASM",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第四章",
        "来源页码": 12
    },
    {
        "题号": "13",
        "英文题目与选项": "Jack wants to use the ATASM model. Which of the following is not one of the key elements of an ATASM assessment?\n(A) Attacks\n(B) Threats\n(C) Architecture\n(D) Mitigations",
        "中文题目与选项": "Jack 想使用 ATASM 模型。以下哪项不是 ATASM 评估的关键要素？\n(A) 攻击\n(B) 威胁\n(C) 架构\n(D) 缓解措施",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第四章",
        "来源页码": 13
    },
    {
        "题号": "14",
        "英文题目与选项": "Henry wants to design his SDLC to help prevent the most common application security issues. Where in the SDLC should he insert controls to ensure that his application architecture is secure?\n(A) Analysis and requirements definition\n(B) Design\n(C) Deployment\n(D) Operations and maintenance",
        "中文题目与选项": "Henry希望设计他的SDLC来帮助防止最常见的应用程序安全问题。在SDLC中，他应该在哪里插入控制以确保他的应用程序体系结构是安全的？\n(A) 分析和需求定义\n(B) 设计\n(C) 部署\n(D) 操作和维护",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第四章",
        "来源页码": 14
    },
    {
        "题号": "15",
        "英文题目与选项": "Paula wants to avoid denial-of-service attacks against her APIs. What controls should she select to most effectively provide this type of security?\n(A) Use an IPS and a scalable architecture.\n(B) Use a scalable architecture and set throttling limits and quotas.\n(C) Require authentication and use an IPS.\n(D) Require authentication and set throttling limits and quotas.",
        "中文题目与选项": "Paula 希望避免针对她的 API 的拒绝服务攻击。她应该选择哪些控制措施来最有效地提供这种类型的安全性？\n(A) 使用 IPS 和可扩展架构。\n(B) 使用可扩展的体系结构并设置节流限制和配额。\n(C) 需要身份验证并使用 IPS。\n(D) 要求身份验证并设置节流限制和配额。",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第四章",
        "来源页码": 15
    },
    {
        "题号": "16",
        "英文题目与选项": "Software developers designing applications that allow access to protected customer information for the cloud should expect to include options to ensure all of the following capabilities except:\n(A) Encryption of data at rest\n(B) Encryption of data in transit\n(C) Data masking\n(D) Randomizing customer data",
        "中文题目与选项": "设计允许访问受保护的云端客户信息的应用程序的开发人员应包括确保以下所有功能选项，除了：\n(A) 静止时的数据加密\n(B) 传输中的数据加密\n(C) 数据屏蔽\n(D) 随机化客户数据",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第四章",
        "来源页码": 16
    },
    {
        "题号": "17",
        "英文题目与选项": "Kristen wants to filter her SAML traffic for potential attacks, including rate-limiting requests and validating content. Which of the following solutions is purpose-built for this type of security design?\n(A) A DAM with OpenID support\n(B) A SAML compliant IDS\n(C) An XML firewall\n(D) A WAF",
        "中文题目与选项": "Kristen 希望过滤她的 SAML 流量，以寻找潜在的攻击，包括速率限制请求和验证内容。以下哪种解决方案是专门为这种类型的安全设计构建的？\n(A) 支持 OpenID 的 DAM\n(B) 符合 SAML 的 IDS\n(C) XML 防火墙\n(D) WAF",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 17
    },
    {
        "题号": "18",
        "英文题目与选项": "Christina is following a typical SDLC process and has completed the planning phase. What phase typically follows the Planning phase in most SDLCs?\n(A) Design\n(B) Deployment\n(C) Maintenance\n(D) Requirements Gathering",
        "中文题目与选项": "Christina 正在遵循典型的 SDLC 流程，并已完成规划阶段。在大多数 SDLC 中，规划阶段之后通常是什么阶段？\n(A) 设计\n(B) 部署\n(C) 维护\n(D) 需求收集",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第四章",
        "来源页码": 18
    },
    {
        "题号": "19",
        "英文题目与选项": "The SAFECode Fundamental Practices for Secure Software Development includes a section on handling errors. What common development best practice does it reference?\n(A) Providing too much information in errors\n(B) Handling errors in a secure and graceful way\n(C) Ensuring unanticipated errors are provided only to administrators\n(D) Ensuring unanticipated errors are provided only to users",
        "中文题目与选项": "安全软件开发的 SAFECode 基本实践包括一节关于处理错误的内容。它参考了哪些常见的开发最佳实践？\n(A) 错误地提供过多信息\n(B) 以安全优雅的方式处理错误\n(C) 确保意外错误只提供给管理员\n(D) 确保意外错误只提供给用户",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第四章",
        "来源页码": 19
    },
    {
        "题号": "20",
        "英文题目与选项": "Regardless of which model the organization uses for system development, in which phase of the software development life cycle (SDLC) will user input be requested and considered?\n(A) Define\n(B) Design\n(C) Development\n(D) Detect",
        "中文题目与选项": "无论组织使用哪种模型进行系统开发，在软件开发生命周期 (SDLC) 的哪个阶段会请求并考虑用户输入？\n(A) 定义\n(B) 设计\n(C) 开发\n(D) 检测",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 20
    },
    {
        "题号": "21",
        "英文题目与选项": "Pete is reviewing his environment based on the OWASP Cloud Native Application Security Top 10. He knows that container configuration is a top concern and has identified that his containers currently run as root. How can he remediate this issue?\n(A) Set the operating system to prevent root logins.\n(B) Set a non-privileged user as the container owner.\n(C) Set a non-privileged user as the process owner.\n(D) Use multifactor authentication for the root user.",
        "中文题目与选项": "Pete 正在根据 OWASP 云原生应用程序安全 Top 10 审查他的环境。他知道容器配置是最重要的关注点之一，并且已确认他的容器当前以 root 身份运行。他应如何解决这个问题？\n(A) 设置操作系统以防止 root 用户登录。\n(B) 将非特权用户设置为容器所有者。\n(C) 将非特权用户设置为进程所有者。\n(D) 对 root 用户使用多因素身份验证。",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 21
    },
    {
        "题号": "22",
        "英文题目与选项": "Malika wants to ensure that human error doesn’t influence the security of secrets in her organization. Which of the following practices will most effectively prevent human-related issues from influencing her secrets security?\n(A) Use a common passphrase word list in an automated CI/CD pipeline\n(B) Require password complexity\n(C) Generate passphrases randomly\n(D) Exclusively use shared passphrases",
        "中文题目与选项": "Malika 想确保人为失误不会影响她所在组织的密钥安全。以下哪种做法将最有效地防止与人类相关的问题影响她的密钥安全？\n(A) 在自动化 CI/CD 管道中使用常见的密码短语词列表\n(B) 要求密码的复杂性\n(C) 随机生成密码短语\n(D) 仅使用共享密码短语",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第四章",
        "来源页码": 22
    },
    {
        "题号": "23",
        "英文题目与选项": "Frank knows that his organization intends to use federated identities as part of its cloud services environment. What standard should he ensure that his existing on-site identity management system supports to help with this?\n(A) SAML\n(B) FIPS 140-2\n(C) XML\n(D) RM",
        "中文题目与选项": "Frank 知道他的组织打算将联合身份作为其云服务环境的一部分。他应该确保现有的现场身份管理系统支持什么标准来帮助实现这一点？\n(A) SAML（安全断言标记语言）\n(B) FIPS 140-2\n(C) XML\n(D) RM",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第四章",
        "来源页码": 23
    },
    {
        "题号": "24",
        "英文题目与选项": "James uses a CI/CD pipeline at the core of his development process. What design pattern should he use to ensure his QA process doesn’t impact production?\n(A) Add software going through QA to his production environment to allow live testing.\n(B) Create a new environment for QA testing, then promote to production after testing.\n(C) Replicate the production environment for QA testing, then promote to production after testing.\n(D) Add software to the QA environment for testing, then allow production users to access QA with instrumentation in place.",
        "中文题目与选项": "James 将 CI/CD 管道作为其开发过程的核心。他应该使用什么设计模式来确保他的 QA 过程不会影响生产？\n(A) 将通过 QA 的软件添加到生产环境中，以便进行实时测试。\n(B) 为 QA 测试创建一个新环境，然后在测试后推广到生产中。\n(C) 复制生产环境进行 QA 测试，然后在测试后推广到生产环境。\n(D) 将软件添加到 QA 环境中进行测试，然后允许生产用户使用适当的监控访问 QA。",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 24
    },
    {
        "题号": "25",
        "英文题目与选项": "Sally is building her organization's communication plans and knows that customers are an important group to include in the plan. What key function does proactive customer communication help with?\n(A) Notification of breaches\n(B) Regulatory compliance\n(C) Managing expectations\n(D) Problem management",
        "中文题目与选项": "Sally正在制定组织的沟通计划，她知道客户是计划中的一个重要群体。主动式客户沟通有助于实现什么关键功能？\n(A) 事件通知\n(B) 法规遵从性\n(C) 管理期望\n(D) 问题管理",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 25
    },
    {
        "题号": "26",
        "英文题目与选项": "Jason's organization needs to provide information about its cloud operating environment, including yearly audit information to regulators in his industry. What is he most likely to be able to provide to the regulators when they ask for a security audit of his hosted environment?\n(A) A recent audit conducted by staff from Jason's organization\n(B) A recent audit conducted by a third-party auditor hired by Jason’s organization\n(C) Direct audit permissions for the regulators to audit the cloud provider\n(D) A copy of the cloud provider’s third-party audit results",
        "中文题目与选项": "Jason 的组织需要向其所在行业的监管机构提供有关其云运营环境的信息，包括年度审计信息。当监管机构要求对其托管环境进行安全审计时，他最有可能向他们提供什么？\n(A) Jason 组织工作人员最近进行的审计\n(B) Jason 组织聘请的第三方审计师最近进行的审计\n(C) 监管机构对云提供商进行审计的直接审计权限\n(D) 云提供商第三方审计结果的副本",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "未知",
        "来源页码": 26
    },
    {
        "题号": "27",
        "英文题目与选项": "ITIL v4 describes three sub-processes related to availability management. What are these three sub-processes?\n(A) Designing services for availability, disaster recovery testing, determining availability targets\n(B) Availability management, availability metrics, and availability improvement\n(C) Designing services for availability, availability testing, and availability monitoring and reporting\n(D) Availability planning, availability improvement, availability validation",
        "中文题目与选项": "ITIL v4 描述了与可用性管理相关的三个子流程。这三个子流程是什么？\n(A) 设计可用性服务、灾难恢复测试、确定可用性目标\n(B) 可用性管理、可用性指标和可用性改进\n(C) 为可用性设计服务、可用性测试以及可用性监控和报告\n(D) 可用性规划、可用性改进、可用性验证",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第五章",
        "来源页码": 27
    },
    {
        "题号": "28",
        "英文题目与选项": "Naomi's organization has recently experienced a data breach. Which of the following parties is least likely to require notification based on existing contracts or regulations?\n(A) Customers\n(B) Vendors\n(C) Regulators\n(D) Partners",
        "中文题目与选项": "Naomi 的组织最近发生了数据泄露。根据现有合同或法规，以下哪一方最不可能要求通知？\n(A) 客户\n(B) 供应商\n(C) 监管机构\n(D) 合作伙伴",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第五章",
        "来源页码": 28
    },
    {
        "题号": "29",
        "英文题目与选项": "Megan is starting her organization's change management practices. She has conducted an asset inventory. What step is typically next in a change management process?\n(A) Creating a baseline\n(B) Deploying new assets\n(C) Establishing a CMB\n(D) Documenting deviations from the baseline",
        "中文题目与选项": "Megan正在开始她的组织的变更管理实践。她进行了资产盘点。变更管理流程的下一步通常是什么？\n(A) 创建基线\n(B) 部署新资产\n(C) 建立CMB\n(D) 记录与基线的偏差",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第五章",
        "来源页码": 29
    },
    {
        "题号": "30",
        "英文题目与选项": "Geoff knows that ITIL v4 focuses on four information security management practices. Which of these processes could involve an SOC 2 Type 2 audit?\n(A) Design of security controls\n(B) Security testing\n(C) Management of security incidents\n(D) Security review",
        "中文题目与选项": "Geoff 知道 ITIL v4 侧重于四种信息安全管理实践。以下哪一项过程可能涉及 SOC 2 类型 2 审计？\n(A) 安全控制的设计\n(B) 安全测试\n(C) 安全事件的管理\n(D) 安全审查",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第二十一题",
        "来源页码": 30
    },
    {
        "题号": "31",
        "英文题目与选项": "In an IaaS environment, who is responsible for network risks?\n(A) The customer\n(B) Both the customer and the service provider\n(C) The service provider\n(D) Third-party incident responders",
        "中文题目与选项": "在 IaaS 环境中，谁负责网络风险？\n(A) 客户\n(B) 客户和服务提供商\n(C) 服务提供商\n(D) 第三方事件响应者",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "未知",
        "来源页码": 31
    },
    {
        "题号": "32",
        "英文题目与选项": "Eleanor wants to build her organization’s change management processes. What is the typical first step for change management efforts?\n(A) Policy creation\n(B) Baselining\n(C) Documentation creation\n(D) Vulnerability scanning",
        "中文题目与选项": "Eleanor 希望建立组织的变更管理流程。什么是变更管理工作的典型第一步？\n(A) 政策制定\n(B) 基线建立\n(C) 文档创建\n(D) 漏洞扫描",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 32
    },
    {
        "题号": "33",
        "英文题目与选项": "Kolin needs to collect forensic data from an Azure-hosted VM. What should he do to validate his forensic data after capturing disk snapshots for the VM’s OS and data disks?\n(A) Compare hashes of the VM’s OS and data disks and the snapshots of each.\n(B) Make two copies of the snapshots and compare hashes between the snapshot hashes.\n(C) Export the VM as a hash, then validate the hash.\n(D) Export the VM as a disk image and compare the disk image’s digital signature to the original.",
        "中文题目与选项": "Kolin需要从Azure托管的虚拟机（VM）收集取证数据。在为虚拟机的操作系统和数据磁盘捕获磁盘快照后，他应该做些什么来验证他的取证数据？\n(A) 比较虚拟机操作系统和数据磁盘的哈希值以及每个磁盘快照的哈希值。\n(B) 制作快照的两个副本，并比较这些快照之间的哈希值。\n(C) 将虚拟机导出为哈希值，然后验证该哈希。\n(D) 将虚拟机导出为磁盘映像，并将磁盘映像的数字签名与原始签名进行比较。",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 33
    },
    {
        "题号": "34",
        "英文题目与选项": "Asha wants to take advantage of her cloud provider’s ability to schedule instances to match her business practices. What practice will help her handle a large number of instances with different scheduling requirements?\n(A) Using a third-party scheduler\n(B) Enabling auto-scheduling\n(C) Tagging\n(D) Disabling unused instances",
        "中文题目与选项": "Asha 希望利用她的云提供商安排实例以匹配她的商业实践的能力。什么实践可以帮助她处理大量具有不同调度要求的实例？\n(A) 使用第三方调度程序\n(B) 启用自动调度\n(C) 标记\n(D) 禁用未使用的实例",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第五章",
        "来源页码": 34
    },
    {
        "题号": "35",
        "英文题目与选项": "In order to enhance virtual environment isolation and security, a best practice is to:\n(A) Ensure that all virtual switches are not connected to the physical network\n(B) Ensure that management systems are connected to a different physical network than the production systems\n(C) Never connect a virtual switch to a physical host\n(D) Connect physical devices only with virtual switches",
        "中文题目与选项": "为了增强虚拟环境的隔离性和安全性，最佳做法是：\n(A) 确保所有虚拟交换机都未连接到物理网络\n(B) 确保管理系统连接到与生产系统不同的物理网络\n(C) 永远不要将虚拟交换机连接到物理主机\n(D) 仅使用虚拟交换机连接物理设备",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 35
    },
    {
        "题号": "36",
        "英文题目与选项": "Megan is responsible for ensuring that her organization's continual service improvement efforts are meeting their goals. What formal role does Megan hold under ITIL?\n(A) CSI manager\n(B) Process architect\n(C) Process owner\n(D) Customer",
        "中文题目与选项": "Megan负责确保其组织的持续服务改进工作达到其目标。梅根在ITIL下担任什么正式职务？\n(A) CSI经理\n(B) 流程架构师\n(C) 流程所有者\n(D) 客户",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 36
    },
    {
        "题号": "37",
        "英文题目与选项": "Designing system redundancy into a cloud datacenter allows all the following capabilities except:\n(A) Incorporating additional hardware into the production environment to support increased redundancy\n(B) Preventing any chance of service interruption\n(C) Load-sharing/balancing\n(D) Planned, controlled failover during contingency operations",
        "中文题目与选项": "将系统冗余设计到云数据中心中，允许以下所有功能，除了：\n(A) 在生产环境中加入额外的硬件以支持增加的冗余\n(B) 防止任何服务中断的可能\n(C) 负载分担/负载均衡\n(D) 应急操作期间有计划、有控制的故障切换",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 37
    },
    {
        "题号": "38",
        "英文题目与选项": "Raj is required to provide proof of PCI compliance to his acquiring bank. What should he ask for from his cloud service provider?\n(A) An attestation of compliance\n(B) An SOC 1 Type 1 audit\n(C) An SOC 2 Type 2 audit\n(D) To allow him to conduct a PCI audit of the vendor",
        "中文题目与选项": "Raj必须向收单银行提供PCI合规性证明。他应该向云服务提供商要求什么？\n(A) 合规证明\n(B) SOC 1 类型 1 审计\n(C) SOC 2 类型 2 审计\n(D) 允许他对供应商进行PCI审计",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第五章",
        "来源页码": 38
    },
    {
        "题号": "39",
        "英文题目与选项": "What key function is described by ITIL's incident management practice?\n(A) Engaging third-party responders based on best practices\n(B) Managing problem escalations\n(C) Restoring a service as soon as possible after an incident\n(D) Identifying incidents to allow response",
        "中文题目与选项": "ITIL 的事故管理实践描述了什么关键功能？\n(A) 根据最佳实践动员第三方响应者\n(B) 管理问题升级\n(C) 事故发生后尽快恢复服务\n(D) 识别事件以便做出反应",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第一章",
        "来源页码": 39
    },
    {
        "题号": "40",
        "英文题目与选项": "47. What description best explains the relationship between problems and incidents?\n(A) Every problem is the result of an incident, but not all incidents are problems.\n(B) Problems and incidents are distinct and unrelated.\n(C) Problems are handled by support desks, and incidents are handled by security professionals.\n(D) Every incident is the result of a problem, but not all problems are incidents.",
        "中文题目与选项": "47. 什么描述最能解释问题和事件之间的关系？\n(A) 每个问题都是一个事件的结果，但并非所有事件都是问题。\n(B) 问题和事件是不同的、不相关的。\n(C) 问题由支持台处理，事件由安全专业人员处理。\n(D) 每个事件都是一个问题的结果，但并非所有问题都是事件。",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 40
    },
    {
        "题号": "41",
        "英文题目与选项": "Emily is in charge of her organization’s deployment management as part of a CI/CD pipeline. What process typically needs to occur for a deployment to occur?\n(A) A change request must be approved.\n(B) The change advisory board must review the change.\n(C) Automated testing and validation must complete successfully.\n(D) The next version must enter the pipeline.",
        "中文题目与选项": "Emily 负责其组织的部署管理，作为 CI/CD 管道的一部分。部署通常需要进行什么过程？\n(A) 变更请求必须得到批准。\n(B) 变更咨询委员会必须对变更进行审查。\n(C) 自动化测试和验证必须成功完成。\n(D) 下一个版本必须进入管道。",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第五章",
        "来源页码": 41
    },
    {
        "题号": "42",
        "英文题目与选项": "Methods for achieving high-availability cloud environments include all of the following except:\n(A) Using instances running on alternate CPU architectures\n(B) Multiple system vendors for the same services\n(C) Explicitly documented business continuity and disaster recovery (BC/DR) functions in the service-level agreement (SLA) or contract\n(D) Failover capability back to the customer’s on-premises environment",
        "中文题目与选项": "实现高可用性云环境的方法包括以下所有方法，除了：\n(A) 使用在备用CPU架构上运行的实例\n(B) 同一服务的多个系统供应商\n(C) 在服务级别协议(SLA)或合同中明确记录业务连续性和灾难恢复(BC/DR)功能\n(D) 故障切换功能返回到客户的内部部署环境",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第五章",
        "来源页码": 42
    },
    {
        "题号": "43",
        "英文题目与选项": "Melissa is responsible for establishing an SOC in her organization. Which of the following services is not a typical SOC offering?\n(A) Vulnerability management\n(B) Threat management\n(C) Incident response\n(D) eDiscovery",
        "中文题目与选项": "Melissa负责在她的组织中建立SOC。以下哪项服务不是典型的SOC服务？\n(A) 漏洞管理\n(B) 威胁管理\n(C) 事件响应\n(D) 电子取证（eDiscovery）",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 43
    },
    {
        "题号": "44",
        "英文题目与选项": "Which key document(s) in business continuity management practices ensure that an organization can recover to a known consistent state as well as to a working state?\n(A) The business continuity strategy\n(B) The recovery plan\n(C) The IT service continuity report\n(D) The disaster recovery invocation guideline",
        "中文题目与选项": "业务连续性管理实践中的哪些关键文件确保组织能够恢复到已知的一致状态以及工作状态？\n(A) 业务连续性战略\n(B) 恢复计划\n(C) IT服务连续性报告\n(D) 灾难恢复调用指南",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "未注明",
        "来源页码": 44
    },
    {
        "题号": "45",
        "英文题目与选项": "Rick is creating a policy defining his organization’s change management process. Which of the following is not a common change management policy element?\n(A) Defining the composition of the change management board\n(B) The change management process itself\n(C) A requirement to prevent deviation from the baselines established in the policy\n(D) Enforcement measures",
        "中文题目与选项": "Rick正在制定一项政策，用于定义其组织的变更管理流程。以下哪项不是常见的变更管理政策要素？\n(A) 确定变更管理委员会的组成\n(B) 变更管理过程本身\n(C) 防止偏离政策中确定的基线的要求\n(D) 执行措施",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 45
    },
    {
        "题号": "46",
        "英文题目与选项": "Isaac is an IT manager for a small surgical center. His organization is reviewing upgrade options for its current on-premises datacenter. The organization wants to increase its disaster recovery and business continuity capabilities without making significant investments in staffing or technology. Which of the following options should Isaac recommend?\n(A) Building a completely new datacenter\n(B) Adding additional DR/BC capabilities to the existing datacenter\n(C) Moving to a cloud-hosted datacenter\n(D) Staying with the current datacenter",
        "中文题目与选项": "Isaac 是一家小型外科中心的 IT 经理。他的组织正在审查其当前内部部署的数据中心的升级选项。该组织希望在不对人员配置或技术进行重大投资的情况下提高其灾难恢复和业务连续性能力。Isaac 应该推荐以下哪种选择？\n(A) 建立一个全新的数据中心\n(B) 向现有数据中心添加额外的灾难恢复和业务连续性功能\n(C) 迁移到云托管的数据中心\n(D) 留在当前的数据中心",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 46
    },
    {
        "题号": "47",
        "英文题目与选项": "When designing a cloud datacenter, which of the following aspects is not necessary to ensure continuity of operations during contingency operations?\n(A) Access to clean water\n(B) Broadband data connection\n(C) Extended battery backup\n(D) Physical access to the datacenter",
        "中文题目与选项": "在设计云数据中心时，以下哪些方面不是确保应急操作期间操作连续性的必要条件？\n(A) 清洁水源的获取\n(B) 宽带数据连接\n(C) 延长电池备份时间\n(D) 对数据中心的物理访问",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第五章",
        "来源页码": 47
    },
    {
        "题号": "48",
        "英文题目与选项": "Geoff knows that ITIL v4 focuses on four information security management practices. Which of these processes could involve an SOC 2 Type 2 audit?\n(A) Design of security controls\n(B) Security testing\n(C) Management of security incidents\n(D) Security review",
        "中文题目与选项": "Geoff 知道 ITIL v4 侧重于四种信息安全管理实践。这些过程中的哪一个可能涉及 SOC 2 类型 2 审计？\n(A) 安全控制的设计\n(B) 安全测试\n(C) 安全事件的管理\n(D) 安全审查",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第二十一题",
        "来源页码": 48
    },
    {
        "题号": "49",
        "英文题目与选项": "Kolin needs to collect forensic data from an Azure-hosted VM. What should he do to validate his forensic data after capturing disk snapshots for the VM’s OS and data disks?\n(A) Compare hashes of the VM’s OS and data disks and the snapshots of each.\n(B) Make two copies of the snapshots and compare hashes between the snapshot hashes.\n(C) Export the VM as a hash, then validate the hash.\n(D) Export the VM as a disk image and compare the disk image’s digital signature to the original.",
        "中文题目与选项": "Kolin 需要从 Azure 托管的虚拟机收集取证数据。在为虚拟机的操作系统和数据磁盘捕获磁盘快照后，他应该做些什么来验证他的取证数据？\n(A) 比较虚拟机操作系统和数据磁盘的哈希值以及每个磁盘快照的哈希。\n(B) 制作快照的两个副本，并比较快照哈希之间的差异。\n(C) 将虚拟机导出为哈希，然后验证该哈希。\n(D) 将虚拟机导出为磁盘映像，并将磁盘映像的数字签名与原始签名进行比较。",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第一章",
        "来源页码": 49
    },
    {
        "题号": "50",
        "英文题目与选项": "Maria is planning her organization’s ISO/IEC 20000-1–based release management plan. Which of the following elements is not typically part of an RDM plan?\n(A) Risk assessment\n(B) Build planning\n(C) Testing\n(D) Decommissioning",
        "中文题目与选项": "Maria 正在计划其组织基于 ISO/IEC 20000-1 的发布管理计划。以下哪些要素通常不属于 RDM 计划的一部分？\n(A) 风险评估\n(B) 建设规划\n(C) 测试\n(D) 退役下线",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第五章",
        "来源页码": 50
    },
    {
        "题号": "51",
        "英文题目与选项": "Hannah wants to align her information security management program to ISO/IEC 20000-1. According to the standard, what must be done with an information security policy?\n(A) Establish, approve, and communicate an information security policy.\n(B) Create and regularly update an information security policy.\n(C) Adopt an ISO/IEC standard template-based information security policy.\n(D) Undergo a third-party review of the organization’s security policy.",
        "中文题目与选项": "Hannah 希望将她的信息安全管理计划与 ISO/IEC 20000-1 保持一致。根据该标准，信息安全策略必须做些什么？\n(A) 建立、批准并传达信息安全策略。\n(B) 创建并定期更新信息安全策略。\n(C) 采用基于 ISO/IEC 标准模板的信息安全策略。\n(D) 对组织的安全策略进行第三方审查。",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第五章",
        "来源页码": 51
    },
    {
        "题号": "52",
        "英文题目与选项": "Tina would like to use a technology that will allow her to bundle up workloads and easily move them between different operating systems. What technology would best meet this need?\n(A) Virtual machines\n(B) Serverless computing\n(C) Hypervisors\n(D) Containers",
        "中文题目与选项": "Tina希望使用一种技术，使她能够捆绑工作负载，并在不同的操作系统之间轻松地移动它们。什么技术最能满足这一需求？\n(A) 虚拟机\n(B) 无服务器计算\n(C) 虚拟机监控程序\n(D) 容器",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第一章",
        "来源页码": 52
    },
    {
        "题号": "53",
        "英文题目与选项": "Sherry is deploying a zero-trust network architecture for her organization. In this approach, which one of the following characteristics would be least important in validating a login attempt?\n(A) User identity\n(B) IP address\n(C) Geolocation\n(D) Nature of requested access",
        "中文题目与选项": "Sherry 正在为她的组织部署零信任网络架构。在这种方法中，以下哪一个特征在验证登录尝试时最不重要？\n(A) 用户身份\n(B) IP 地址\n(C) 地理位置\n(D) 请求访问的性质",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第一章",
        "来源页码": 53
    },
    {
        "题号": "54",
        "英文题目与选项": "21. What type of effort attempts to bring all of an organization’s cloud activities under more centralized control?\n(A) Cloud access service broker\n(B) Cloud orchestration\n(C) Cloud governance\n(D) Cloud migration",
        "中文题目与选项": "21. 什么类型的努力试图将组织的所有云活动置于更集中的控制之下？\n(A) 云访问服务代理\n(B) 云编排\n(C) 云治理\n(D) 云迁移",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 54
    },
    {
        "题号": "55",
        "英文题目与选项": "What activity are cloud providers able to engage in because not all users will access the full capacity of their service offering simultaneously?\n(A) Oversubscription\n(B) Overprovisioning\n(C) Underprovisioning\n(D) Undersubscription",
        "中文题目与选项": "云提供商能够参与哪些活动，因为并非所有用户都会同时访问其服务的全部容量？\n(A) 超额订阅\n(B) 过度供应\n(C) 供应不足\n(D) 订阅不足",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 55
    },
    {
        "题号": "56",
        "英文题目与选项": "35. Which one of the following systems assurance processes provides an independent third-party evaluation of a system’s controls that may be trusted by many different organizations?\n(A) Planning\n(B) Definition\n(C) Verification\n(D) Accreditation",
        "中文题目与选项": "35. 以下哪一个系统保证过程为许多不同组织信任的系统控制提供了独立的第三方评估？\n(A) 规划\n(B) 定义\n(C) 验证\n(D) 认证",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第一章",
        "来源页码": 56
    },
    {
        "题号": "57",
        "英文题目与选项": "Gavin is looking for guidance on how his organization should approach the evaluation of cloud service providers. What ISO document can help him with this work?\n(A) ISO 27001\n(B) ISO 27701\n(C) ISO 27017\n(D) ISO 17789",
        "中文题目与选项": "Gavin正在寻求有关其组织应如何评估云服务提供商的指导。哪一份ISO文件可以帮助他完成这项工作？\n(A) ISO 27001\n(B) ISO 27701\n(C) ISO 27017\n(D) ISO 17789",
        "答案": "C",
        "用户错选": "C",
        "来源章节": "第一章",
        "来源页码": 57
    },
    {
        "题号": "58",
        "英文题目与选项": "When considering a move from a traditional on-premises environment to the cloud, organizations often calculate a return on investment. Which one of the following factors should you expect to contribute the most to this calculation?\n(A) Utility costs\n(B) Licensing fees\n(C) Security expenses\n(D) Executive compensation",
        "中文题目与选项": "当考虑从传统的内部部署环境转移到云环境时，组织通常会计算投资回报。以下哪一个因素对本次计算的贡献最大？\n(A) 公用事业成本\n(B) 许可费\n(C) 安全费用\n(D) 高管薪酬",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第五章",
        "来源页码": 58
    },
    {
        "题号": "59",
        "英文题目与选项": "During a system audit, Casey notices that the private key for her organization’s web server has been stored in a public Amazon S3 storage bucket for more than a year. What should she do?\n(A) Remove the key from the bucket.\n(B) Notify all customers that their data may have been exposed.\n(C) Request a new certificate using a new key.\n(D) Nothing, because the private key should be accessible for validation.",
        "中文题目与选项": "在一次系统审计中，Casey注意到她所在组织的网络服务器的私钥已经在公共的Amazon S3存储桶中存放了一年多。她该怎么办？\n(A) 从存储桶中移除密钥。\n(B) 通知所有客户他们的数据可能已经暴露。\n(C) 使用新密钥申请新证书。\n(D) 什么都不做，因为私钥应该可以被访问以进行验证。",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 59
    },
    {
        "题号": "60",
        "英文题目与选项": "Glenda would like to conduct a disaster recovery test and is seeking a test that will allow a review of the plan with no disruption to normal information system activities and as minimal a commitment of time as possible. What type of test should she choose?\n(A) Tabletop exercise\n(B) Parallel test\n(C) Full interruption test\n(D) Checklist review",
        "中文题目与选项": "Glenda 希望进行灾难恢复测试，并正在寻求一项测试，以便在不干扰正常信息系统活动的情况下审查该计划，并尽可能缩短时间。她应该选择什么类型的测试？\n(A) 桌面演练\n(B) 平行测试\n(C) 完全中断测试\n(D) 检查表审查",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第一章",
        "来源页码": 60
    },
    {
        "题号": "61",
        "英文题目与选项": "Kristen wants to use multiple processing sites for her data, but does not want to pay for a full datacenter. Which of the following options would you recommend as her best option if she wants to be able to quickly migrate portions of her custom application environment to the facilities in multiple countries without having to wait to ship or acquire hardware?\n(A) A cloud PaaS vendor\n(B) A hosted datacenter provider\n(C) A cloud IaaS vendor\n(D) A datacenter vendor that provides rack, power, and remote hands services",
        "中文题目与选项": "Kristen 希望使用多个处理站点来处理她的数据，但不想为一个完整的数据中心付费。如果她希望能够快速将其自定义应用程序环境的一部分迁移到多个国家/地区的设施，而不必等待发货或获取硬件，您会推荐以下哪种选项作为她的最佳选择？\n(A) 云 PaaS 供应商\n(B) 托管数据中心提供商\n(C) 云 IaaS 供应商\n(D) 提供机架、电源和远程协助服务的数据中心供应商",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第一章",
        "来源页码": 61
    },
    {
        "题号": "62",
        "英文题目与选项": "Which one of the following is a critical component for confidential computing environments?\n(A) Trusted Execution Environment (TEE)\n(B) Trusted Platform Module (TPM)\n(C) Hardware Security Module (HSM)\n(D) Public Key Infrastructure (PKI)",
        "中文题目与选项": "以下哪一项是机密计算环境的关键组成部分？\n(A) 可信执行环境（TEE）\n(B) 可信平台模块（TPM）\n(C) 硬件安全模块（HSM）\n(D) 公钥基础设施（PKI）",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第一章",
        "来源页码": 62
    },
    {
        "题号": "63",
        "英文题目与选项": "Mike and Renee wish to communicate using an asymmetric cryptosystem. They are located in different parts of the country but exchange encryption keys by using digital certificates signed by a mutually trusted certificate authority. When Mike receives Renee’s digital certificate, what key does he use to verify the authenticity of the certificate?\n(A) Renee’s public key\n(B) Renee’s private key\n(C) CA’s public key\n(D) CA’s private key",
        "中文题目与选项": "迈克和蕾妮想用一种非对称的加密系统进行通信。他们位于该国的不同地区，但通过使用相互信任的证书颁发机构签署的数字证书交换了加密密钥。当 Mike 收到 Renee 的数字证书时，他用什么密钥来验证证书的真实性？\n(A) Renee 的公钥\n(B) Renee 的私钥\n(C) CA 的公钥\n(D) CA 的私钥",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第一章",
        "来源页码": 63
    },
    {
        "题号": "64",
        "英文题目与选项": "An email is an example of what type of data?\n(A) Structured data\n(B) Semi-structured data\n(C) RFC-defined data\n(D) Unstructured data",
        "中文题目与选项": "电子邮件是什么类型的数据的示例？\n(A) 结构化数据\n(B) 半结构化数据\n(C) RFC定义的数据\n(D) 非结构化数据",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第二章",
        "来源页码": 64
    },
    {
        "题号": "65",
        "英文题目与选项": "Jacinda is planning to deploy a data loss prevention (DLP) system in her cloud environment. Which of the following challenges is most likely to impact the ability of her DLP system to determine whether sensitive data is being transmitted outside of her organization?\n(A) Lack of data labeling\n(B) Use of encryption for data in transit\n(C) Improper data labeling\n(D) Use of encryption for data at rest",
        "中文题目与选项": "Jacinda计划在她的云环境中部署一个数据丢失预防（DLP）系统。以下哪项挑战最有可能影响DLP系统确定敏感数据是否在组织外传输的能力？\n(A) 缺乏数据标签\n(B) 对传输中的数据使用加密\n(C) 数据标签不当\n(D) 对静态数据使用加密",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第二章",
        "来源页码": 65
    },
    {
        "题号": "66",
        "英文题目与选项": "Lisa runs Windows instances in her cloud-hosted environment. Each Windows instance is created with a C: drive that houses the operating system and application files. What type of storage best describes the C: drive for these Windows instances?\n(A) Long-term storage\n(B) Ephemeral storage\n(C) Raw storage\n(D) Volume-based storage",
        "中文题目与选项": "Lisa 在她的云托管环境中运行 Windows 实例。每个 Windows 实例都创建了一个 C: 驱动器，其中包含操作系统和应用程序文件。哪种类型的存储最能描述这些 Windows 实例的 C: 驱动器？\n(A) 长期存储\n(B) 短期存储\n(C) 原始存储\n(D) 基于卷的存储",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第二章",
        "来源页码": 66
    },
    {
        "题号": "67",
        "英文题目与选项": "Susan wants to be prepared for legal holds. What organizational policy often accounts for legal holds?\n(A) Data classification policy\n(B) Retention policy\n(C) Acceptable use policy\n(D) Data breach response policy",
        "中文题目与选项": "苏珊想为法律诉讼做好准备。什么样的组织策略通常会导致法律封存？\n(A) 数据分类策略\n(B) 保留策略\n(C) 可接受的使用策略\n(D) 数据泄露应对策略",
        "答案": "B",
        "用户错选": "B",
        "来源章节": "第二章",
        "来源页码": 67
    },
    {
        "题号": "68",
        "英文题目与选项": "Charleen wants to perform data discovery on her organization’s data, which is stored in archival storage hosted by her organization’s cloud service provider. What issue should she point out about this discovery plan?\n(A) It may be slow and costly due to how archival storage is designed and priced.\n(B) The data may not exist because it has been archived.\n(C) The discovery process cannot be run against archival storage because it is not online under normal circumstances.\n(D) The data will need to be decrypted before being scanned for discovery purposes.",
        "中文题目与选项": "Charleen 希望对其组织的数据执行数据发现，这些数据存储在由其组织的云服务提供商托管的档案存储中。关于这个发现计划，她应该指出什么问题？\n(A) 由于存档存储的设计和定价方式，它可能速度慢且成本高。\n(B) 数据可能不存在，因为它已经存档。\n(C) 发现过程不能针对存档存储运行，因为它在正常情况下不在线。\n(D) 出于发现目的，在扫描数据之前，需要对数据进行解密。",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第五章",
        "来源页码": 68
    },
    {
        "题号": "69",
        "英文题目与选项": "Frank’s organization is preparing to adopt an information rights management tool. What IRM capability focuses on providing rights to individuals based on their roles to ensure appropriate data access?\n(A) Tagging\n(B) Data labeling\n(C) Encryption\n(D) Provisioning",
        "中文题目与选项": "弗兰克的组织正准备采用一种信息权限管理工具。IRM 的哪项功能侧重于根据个人角色为其提供权限，以确保适当的数据访问？\n(A) 标记\n(B) 数据标签\n(C) 加密\n(D) 供应",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第二章",
        "来源页码": 69
    },
    {
        "题号": "70",
        "英文题目与选项": "Randy is following his organization’s data classification policy and tags data that was identified in the organization’s business impact analysis. What type of classification is Randy performing?\n(A) Criticality\n(B) Jurisdiction\n(C) Security\n(D) Sensitivity",
        "中文题目与选项": "Randy 正在遵循其组织的数据分类政策，并标记在组织的业务影响分析中确定的数据。Randy 执行的是什么类型的分类？\n(A) 关键性\n(B) 管辖权\n(C) 安全\n(D) 灵敏度",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第二章",
        "来源页码": 70
    },
    {
        "题号": "71",
        "英文题目与选项": "Frank knows that his organization adds data labels for data during its creation. What additional phase of the cloud data lifecycle often includes data labels as data is combined or modified?\n(A) Store\n(B) Use\n(C) Share\n(D) Deletion",
        "中文题目与选项": "Frank 知道他的组织在创建数据时会为数据添加数据标签。当数据被组合或修改时，云数据生命周期的哪个附加阶段通常包括数据标签？\n(A) 存储\n(B) 使用\n(C) 共享\n(D) 删除",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第二章",
        "来源页码": 71
    },
    {
        "题号": "72",
        "英文题目与选项": "Renee wants to set a retention period for log files in her data retention policy that minimizes the ongoing cost of retention. What retention period should she select for ephemeral logs that do not have a contractual or legal requirement for retention?\n(A) 45 days\n(B) 6 months\n(C) 3 years\n(D) 7 years",
        "中文题目与选项": "Renee希望在她的数据保留策略中为日志文件设置一个保留期，以最大限度地降低持续的保留成本。对于没有合同或法律要求保留的临时日志，她应该选择什么保留期？\n(A) 45天\n(B) 6个月\n(C) 3年\n(D) 7年",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第七章",
        "来源页码": 72
    },
    {
        "题号": "73",
        "英文题目与选项": "Jaime is performing data discovery and wants to search for a specific term in the unstructured data she’s working with. What type of discovery is she performing?\n(A) Label-based discovery\n(B) Metadata-based discovery\n(C) Content-based discovery\n(D) Structure-based discovery",
        "中文题目与选项": "Jaime 正在执行数据发现，并希望在她使用的非结构化数据中搜索特定术语。她在做什么样的发现？\n(A) 基于标签的发现\n(B) 基于元数据的发现\n(C) 基于内容的发现\n(D) 基于结构的发现",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第二章",
        "来源页码": 73
    },
    {
        "题号": "74",
        "英文题目与选项": "Dan’s DLP deployment has been experiencing false positives when keying on pattern matching, resulting in extra work for his organization’s security team. What can he do to best improve the DLP’s performance if the DLP is currently relying on pattern matching as the primary means of identifying sensitive information?\n(A) Tag data with its sensitivity level\n(B) Apply a data lifecycle and delete unneeded data to reduce the data being monitored\n(C) Classify data based on a classification scheme\n(D) Use regular expressions to improve the pattern matching algorithm’s success rate",
        "中文题目与选项": "Dan 的 DLP 部署在进行模式匹配时出现了误报，导致组织的安全团队增加了额外的工作量。如果 DLP 当前依赖模式匹配作为识别敏感信息的主要手段，他可以做些什么来最好地提高 DLP 的性能？\n(A) 标记数据及其敏感度等级\n(B) 应用数据生命周期并删除不需要的数据，以减少被监控的数据量\n(C) 根据分类方案对数据进行分类\n(D) 使用正则表达式来提高模式匹配算法的成功率",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第二章",
        "来源页码": 74
    },
    {
        "题号": "75",
        "英文题目与选项": "Barry is the CIO of an organization that recently suffered a serious operational issue that required activation of the disaster recovery plan. He would like to conduct a lessons learned session to review the incident. Who would be the best facilitator for this session?\n(A) Barry, as chief information officer\n(B) Chief information security officer\n(C) Disaster recovery team leader\n(D) External consultant",
        "中文题目与选项": "Barry是一家组织的首席信息官，该组织最近遇到了一个严重的运营问题，需要启动灾难恢复计划。他希望召开一次总结经验教训的会议来回顾这一事件。谁将是本次会议的最佳主持人？\n(A) 首席信息官Barry\n(B) 首席信息安全官\n(C) 灾难恢复小组组长\n(D) 外部顾问",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第三章",
        "来源页码": 75
    },
    {
        "题号": "76",
        "英文题目与选项": "Brent is reviewing the controls that will protect his organization in the event of a sustained period of power loss at his on‑premises datacenter. Which one of the following solutions would best meet his needs?\n(A) Redundant servers\n(B) Uninterruptible power supply (UPS)\n(C) Generator\n(D) RAID",
        "中文题目与选项": "Brent正在审查在其内部数据中心持续断电的情况下保护其组织的控制措施。以下哪种解决方案最能满足他的需求？\n(A) 冗余服务器\n(B) 不间断电源（UPS）\n(C) 发电机\n(D) RAID",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 76
    },
    {
        "题号": "77",
        "英文题目与选项": "What individuals should have access to the management plane of a cloud datacenter?\n(A) Service provider engineers\n(B) Customer engineers\n(C) End users\n(D) Both A and E",
        "中文题目与选项": "哪些个人应该能够访问云数据中心的管理平面？\n(A) 服务提供商工程师\n(B) 客户工程师\n(C) 最终用户\n(D) A 和 E",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 77
    },
    {
        "题号": "78",
        "英文题目与选项": "Roger recently accepted a new position as a security professional at a company that runs its entire IT infrastructure within an IaaS environment. Which one of the following would most likely be the responsibility of Roger’s firm?\n(A) Configuring the network firewall\n(B) Applying hypervisor updates\n(C) Patching operating systems\n(D) Wiping drives prior to disposal",
        "中文题目与选项": "Roger 最近在一家在 IaaS 环境中运行整个 IT 基础设施的公司担任安全专业人员。以下哪一项最有可能由 Roger 的公司负责？\n(A) 配置网络防火墙\n(B) 应用虚拟机监控程序更新\n(C) 修补操作系统\n(D) 报废前擦除驱动器",
        "答案": "C",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 78
    },
    {
        "题号": "79",
        "英文题目与选项": "19. In addition to the security controls implemented by the cloud provider, a cloud customer must consider the security controls implemented by:\n(A) The respective regulator\n(B) The end user(s)\n(C) Any vendor the cloud customer previously used in the on-premises environment\n(D) Any third parties the provider depends on",
        "中文题目与选项": "除了云提供商实施的安全控制外，云客户还必须考虑由谁实施的安全控制：\n(A) 各自的监管方\n(B) 最终用户\n(C) 云客户以前在本地环境中使用的任何供应商\n(D) 供应商所依赖的任何第三方",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第三章",
        "来源页码": 79
    },
    {
        "题号": "80",
        "英文题目与选项": "Risk should always be considered from a business perspective. When a risk is accepted, it should be balanced by a corresponding:\n(A) Profit\n(B) Performance\n(C) Cost\n(D) Opportunity",
        "中文题目与选项": "应始终从业务角度考虑风险。当风险被接受时，应通过相应的以下方面进行平衡：\n(A) 利润\n(B) 性能\n(C) 成本\n(D) 机会",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 80
    },
    {
        "题号": "81",
        "英文题目与选项": "You are designing a cloud datacenter that is expected to meet Tier 2 status according to the Uptime Institute standards. What level of availability must you achieve to meet this standard?\n(A) 0.99422\n(B) 0.99671\n(C) 0.99974\n(D) 0.99995",
        "中文题目与选项": "您正在设计一个云数据中心，该数据中心预计将符合 Uptime Institute 标准的 Tier 2 状态。您必须达到什么级别的可用性才能达到此标准？\n(A) 0.99422\n(B) 0.99671\n(C) 0.99974\n(D) 0.99995",
        "答案": "C",
        "用户错选": "C",
        "来源章节": "未标明",
        "来源页码": 81
    },
    {
        "题号": "82",
        "英文题目与选项": "When discussing the cloud, we often segregate the datacenter into the terms compute, storage, and networking. Compute is made up of ___ and ___.\n(A) Routers; hosts\n(B) Application programming interfaces (APIs); northbound interfaces (NBIs)\n(C) Central processing units (CPUs); random access memory (RAM)\n(D) Virtualized; actual hardware devices",
        "中文题目与选项": "在讨论云时，我们经常将数据中心分为计算、存储和网络。计算由___和___组成。\n(A) 路由器；主机\n(B) 应用程序编程接口 (API)；北向接口 (NBI)\n(C) 中央处理器 (CPU)；随机存取存储器 (RAM)\n(D) 虚拟化；实际硬件设备",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 82
    },
    {
        "题号": "83",
        "英文题目与选项": "What type of IaaS storage is typically used to provide disk volumes that are mountable on virtual server instances?\n(A) Dedicated disks\n(B) Block\n(C) Encrypted\n(D) Object",
        "中文题目与选项": "通常使用哪种类型的 IaaS 存储来提供可装载在虚拟服务器实例上的磁盘卷？\n(A) 专用磁盘\n(B) 块存储\n(C) 加密存储\n(D) 对象存储",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第三章",
        "来源页码": 83
    },
    {
        "题号": "84",
        "英文题目与选项": "Which one of the following statements about file storage security in the cloud is correct?\n(A) File stores are always kept in plaintext in the cloud.\n(B) There is no way to sanitize file storage space in the cloud.\n(C) Virtualization prevents the use of application-based security controls.\n(D) Virtual machines are stored as snapshotted files when not in use.",
        "中文题目与选项": "以下关于云中文件存储安全的陈述中哪一项是正确的？\n(A) 文件存储总是以明文形式保存在云中。\n(B) 没有办法净化云中的文件存储空间。\n(C) 虚拟化防止使用基于应用程序的安全控制。\n(D) 虚拟机在不使用时存储为快照文件。",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 84
    },
    {
        "题号": "85",
        "英文题目与选项": "“Return to normal operations” is a phase in BC/DR activity when the emergency is over and regular production can resume. Which of the following can sometimes be the result when the organization uses two different cloud providers for the production and BC/DR environments?\n(A) Both providers are affected by the emergency, extending the time before return to normal can occur.\n(B) The BC/DR provider becomes the new normal production environment.\n(C) Regulators will find the organization in violation of compliance guidance.\n(D) All data is lost irretrievably.",
        "中文题目与选项": "“恢复正常运营”是 BC/DR 活动的一个阶段，当紧急情况结束后，可以恢复正常生产。当组织在生产和 BC/DR 环境中使用两个不同的云服务提供商时，有时会产生以下哪一种结果？\n(A) 两个供应商都受到紧急情况的影响，延长了恢复正常的时间。\n(B) BC/DR 提供商成为新的正常生产环境。\n(C) 监管机构将发现该组织违反合规指导。\n(D) 所有数据都已无可挽回地丢失。",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 85
    },
    {
        "题号": "86",
        "英文题目与选项": "Gary is preparing to develop controls around access to root encryption keys and would like to apply a principle of security designed specifically for very sensitive operations. Which principle should he apply?\n(A) Least privilege\n(B) Defense in depth\n(C) Security through obscurity\n(D) Two-person control",
        "中文题目与选项": "Gary 正准备制定有关访问根加密密钥的控制措施，并希望应用专门为非常敏感的操作设计的安全原则。他应该适用哪条原则？\n(A) 最小特权\n(B) 纵深防御\n(C) 默默无闻的安全\n(D) 双人控制",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 86
    },
    {
        "题号": "87",
        "英文题目与选项": "Yolanda is helping her organization decide whether to build their own datacenters or lease space from a colocation provider. What would be the major benefit of using a colocation provider?\n(A) Reduced cost\n(B) Increased security\n(C) Reduced complexity\n(D) Increased capability",
        "中文题目与选项": "Yolanda 正在帮助她的组织决定是建造自己的数据中心还是从主机代管提供商那里租赁空间。使用主机代管提供商的主要好处是什么？\n(A) 降低成本\n(B) 提高安全性\n(C) 降低复杂性\n(D) 增强能力",
        "答案": "A",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 87
    },
    {
        "题号": "88",
        "英文题目与选项": "Which one of the following components is not necessary in a Tier 1 datacenter?\n(A) Uninterruptible power supplies\n(B) Dual-power supplies in systems\n(C) Backup generator\n(D) Cooling",
        "中文题目与选项": "以下哪一个组件在第1层数据中心中是不必要的？\n(A) 不间断电源\n(B) 系统中的双电源\n(C) 备用发电机\n(D) 冷却",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 88
    },
    {
        "题号": "89",
        "英文题目与选项": "Fred is working to design security controls for a cloud environment where remote systems will need to gain command-line access to Linux servers in an automated fashion. Which one of the following authentication approaches will provide the strongest security in this scenario?\n(A) Multifactor authentication\n(B) Digital certificates\n(C) Biometric authentication\n(D) Strong passwords",
        "中文题目与选项": "Fred 正在为云环境设计安全控制，在该云环境中，远程系统需要以自动方式获得对 Linux 服务器的命令行访问权限。在这种情况下，下列哪种身份验证方法将提供最强的安全性？\n(A) 多因素身份验证\n(B) 数字证书\n(C) 生物识别认证\n(D) 强密码",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 89
    },
    {
        "题号": "90",
        "英文题目与选项": "53. In software-defined networking (SDN), the northbound interface (NBI) usually handles traffic between the ______ and the ______.\n(A) Cloud customer; ISP\n(B) SDN controllers; SDN applications\n(C) Cloud provider; ISP\n(D) Router; host",
        "中文题目与选项": "在软件定义网络 (SDN) 中，北向接口 (NBI) 通常处理 ______ 和 ______ 之间的流量。\n(A) 云客户；ISP\n(B) SDN 控制器；SDN 应用程序\n(C) 云提供商；ISP\n(D) 路由器；主机",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第三章",
        "来源页码": 90
    },
    {
        "题号": "91",
        "英文题目与选项": "You are responsible for developing business continuity and disaster recovery (BC/DR) plans and procedures for your organization. You decide to conduct a tabletop test of BC/DR activities. Which of the following will offer the best value during the test?\n(A) Have all participants conduct their individual activities via remote meeting technology.\n(B) Task a moderator well versed in BC/DR actions to supervise and present scenarios to the participants, including randomized special events.\n(C) Provide copies of the BC/DR policy to all participants.\n(D) Allow all users in your organization to participate.",
        "中文题目与选项": "您负责为您的组织制定业务连续性和灾难恢复（BC/DR）计划和程序。您决定对 BC/DR 活动进行桌面测试。以下哪项在测试过程中会提供最佳价值？\n(A) 让所有参与者通过远程会议技术进行个人活动。\n(B) 让精通 BC/DR 行动的主持人监督并向参与者展示场景，包括随机特殊事件。\n(C) 向所有参与者提供 BC/DR 政策的副本。\n(D) 允许组织中的所有用户参与。",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "未知",
        "来源页码": 91
    },
    {
        "题号": "92",
        "英文题目与选项": "You are in charge of creating the business continuity and disaster recovery (BC/DR) plan and procedures for your organization. Your organization has its production environment hosted by a cloud provider, and you have appropriate protections in place. Which of the following is a significant consideration for your BC/DR backup?\n(A) Enough personnel at the BC/DR recovery site to ensure proper operations\n(B) Good cryptographic key management\n(C) Access to the servers where the BC/DR backup is stored\n(D) Forensic analysis capabilities",
        "中文题目与选项": "您负责为您的组织制定业务连续性和灾难恢复 (BC/DR) 计划和程序。您的组织的生产环境由云提供商托管，并且您已具备适当的保护措施。以下哪项是您在 BC/DR 备份中需要重点考虑的重要因素？\n(A) BC/DR 恢复现场有足够的人员以确保正常操作\n(B) 良好的加密密钥管理\n(C) 访问存储 BC/DR 备份的服务器\n(D) 司法分析能力",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第七章",
        "来源页码": 92
    },
    {
        "题号": "93",
        "英文题目与选项": "Melissa uses the snapshot capabilities of her cloud service provider to make backup copies of the disk volumes that support her virtual machines. What type of storage is most likely used to store these backups?\n(A) Dedicated disks\n(B) Encrypted storage\n(C) Object storage\n(D) Block storage",
        "中文题目与选项": "Melissa 使用她的云服务提供商的快照功能来备份支持她虚拟机的磁盘卷。最有可能使用哪种类型的存储来存储这些备份？\n(A) 专用磁盘\n(B) 加密存储\n(C) 对象存储\n(D) 块存储",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 93
    },
    {
        "题号": "94",
        "英文题目与选项": "76. The BC/DR plan/policy should include all of the following except\n(A) Tasking for the office responsible for maintaining/enforcing the plan\n(B) Contact information for essential entities, including BC/DR personnel and emergency services agencies\n(C) Copies of the laws/regulations/standards governing specific elements of the plan\n(D) Checklists for BC/DR personnel to follow",
        "中文题目与选项": "76. BC/DR 计划/政策应包括以下所有内容，除外。\n(A) 负责维护/执行计划的办公室的任务\n(B) 重要实体的联系信息，包括 BC/DR 人员和应急服务机构\n(C) 管理计划特定要素的法律/法规/标准的副本\n(D) BC/DR 人员应遵守的检查表",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第三章",
        "来源页码": 94
    },
    {
        "题号": "95",
        "英文题目与选项": "Warren is working with a cloud service provider on the terms of a new service that his organization will depend on as a disaster recovery capability. Which one of the following actions will provide Warren with the best assurance that the service will function correctly?\n(A) Audit all performance functions\n(B) Audit all security functions\n(C) Perform a full-scale test\n(D) Mandate this capability in the contract",
        "中文题目与选项": "Warren正在与一家云服务提供商合作，制定一项新服务的条款，他的组织将依赖该服务作为灾难恢复能力。以下哪项操作将为Warren提供服务正常运行的最佳保证？\n(A) 审核所有绩效职能\n(B) 审核所有安全功能\n(C) 进行全面测试\n(D) 在合同中规定这种能力",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 95
    },
    {
        "题号": "96",
        "英文题目与选项": "Charles is the BC/DR program manager for a cloud service provider. He is assessing the risks facing his program. He believes that the organization has done adequate BC/DR planning but they have never actually activated the plan. Which of the following would most likely pose the most significant risk to the organization?\n(A) Not having essential BC/DR personnel available during a contingency\n(B) Not including all BC/DR elements in the cloud contract\n(C) Returning to normal operations too soon\n(D) Telecommunications outages",
        "中文题目与选项": "Charles是一家云服务提供商的BC/DR项目经理。他正在评估项目面临的风险。他认为该组织已经进行了充分的BC/DR规划，但他们从未真正启动该计划。以下哪项最可能对组织构成最大的风险？\n(A) 应急期间没有必要的BC/DR人员\n(B) 云合同中不包括所有BC/DR要素\n(C) 过早恢复正常运行\n(D) 电信中断",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 96
    },
    {
        "题号": "97",
        "英文题目与选项": "Where is isolation failure probably least likely to pose a significant risk?\n(A) Public cloud\n(B) Private cloud\n(C) PaaS environment\n(D) SaaS environment",
        "中文题目与选项": "隔离故障可能最不可能造成重大风险的地方在哪里？\n(A) 公有云\n(B) 私有云\n(C) PaaS 环境\n(D) SaaS 环境",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第三章",
        "来源页码": 97
    },
    {
        "题号": "98",
        "英文题目与选项": "What can hamper the ability of a cloud customer to protect their assets in a managed services arrangement?\n(A) Prohibitions on port scanning and penetration testing\n(B) Geographical dispersion\n(C) Rules against training users\n(D) Laws that prevent them from doing so",
        "中文题目与选项": "什么会阻碍云客户在托管服务安排中保护其资产的能力？\n(A) 禁止端口扫描和渗透测试\n(B) 物理分散\n(C) 禁止培训用户的规则\n(D) 阻止他们这样做的法律",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 98
    },
    {
        "题号": "99",
        "英文题目与选项": "Glenda would like to conduct a disaster recovery test and is seeking a test that will allow a review of the plan with no disruption to normal information system activities and as minimal a commitment of time as possible. What type of test should she choose?\n(A) Tabletop exercise\n(B) Parallel test\n(C) Full interruption test\n(D) Checklist review",
        "中文题目与选项": "Glenda 希望进行灾难恢复测试，并正在寻求一项测试，以便在不干扰正常信息系统活动的情况下审查该计划，并尽可能缩短时间。她应该选择什么类型的测试？\n(A) 桌面演练\n(B) 平行试验\n(C) 完全中断试验\n(D) 检查表审查",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第三章",
        "来源页码": 99
    },
    {
        "题号": "100",
        "英文题目与选项": "Henry's company has deployed an extensive IoT infrastructure for building monitoring that includes environmental controls, occupancy sensors, and a variety of other sensors and controllers that help manage the building. Which of the following security concerns should Henry report as the most critical in his analysis of the IoT deployment?\n(A) There is a lack of local storage space for security logs which is common to IoT devices.\n(B) The IoT devices may not have a separate administrative interface, allowing anybody on the same network to attempt to log in to them and making brute-force attacks possible.\n(C) IoT devices may not support strong encryption for communications, exposing the log and sensor data to interception on the network.\n(D) The long-term support and patching model for the IoT devices may create security and operational risk for the organization.",
        "中文题目与选项": "亨利的公司已经部署了广泛的物联网基础设施，用于建筑监控，其中包括环境控制、占用传感器以及各种其他传感器和控制器，以帮助管理建筑。亨利在分析物联网部署时，应报告以下哪个安全问题为最关键？\n(A) 安全日志缺乏本地存储空间，这在物联网设备中很常见。\n(B) 物联网设备可能没有单独的管理接口，允许同一网络上的任何人尝试登录设备，从而使暴力破解攻击成为可能。\n(C) 物联网设备可能不支持强加密通信，从而使日志和传感数据在网络上可能被拦截。\n(D) 物联网设备的长期支持与补丁模式可能会给组织带来安全和运营风险。",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第九章",
        "来源页码": 100
    },
    {
        "题号": "101",
        "英文题目与选项": "What term is used to describe an individual within an organization who has been delegated day-to-day responsibility for decision-making about a category of information?\n(A) Data owner\n(B) Data custodian\n(C) Data processor\n(D) Data steward",
        "中文题目与选项": "用什么术语来描述一个组织中被委派负责某类信息日常决策的个人？\n(A) 数据所有者\n(B) 数据保管人\n(C) 数据处理者\n(D) 数据管理员",
        "答案": "D",
        "用户错选": "A",
        "来源章节": "第六章",
        "来源页码": 1
    },
    {
        "题号": "102",
        "英文题目与选项": "What procedures should an organization follow when collecting evidence from a security incident that may be used in court?\n(A) Digital forensics\n(B) ISO 27001\n(C) Common law\n(D) eDiscovery",
        "中文题目与选项": "当组织在收集可能在法庭上使用的安全事件证据时，应该遵循什么程序？\n(A) 数字取证\n(B) ISO 27001\n(C) 普通法\n(D) 电子发现（eDiscovery）",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 2
    },
    {
        "题号": "103",
        "英文题目与选项": "Which one of the following frameworks is a U.S. federal law governing privacy?\n(A) PCI DSS\n(B) CCPA\n(C) GDPR\n(D) HIPAA",
        "中文题目与选项": "以下哪一个框架是管理隐私的美国联邦法律？\n(A) 支付卡行业数据安全标准 (PCI DSS)\n(B) 加利福尼亚消费者隐私法 (CCPA)\n(C) 通用数据保护条例 (GDPR)\n(D) 健康保险可携性与责任法案 (HIPAA)",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第六章",
        "来源页码": 3
    },
    {
        "题号": "104",
        "英文题目与选项": "73. What is an accounting report on controls at a service organization that replaces older SAS 70 type reports?\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC for Cybersecurity",
        "中文题目与选项": "73. 取代旧的 SAS 70 类型报告的服务组织控制会计报告是什么？\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 网络安全报告",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第六章",
        "来源页码": 4
    },
    {
        "题号": "105",
        "英文题目与选项": "Greg is evaluating a new vendor that will be supplying networking gear to his organization. Due to the nature of his organization's work, Greg is concerned that an attacker might attempt a supply chain exploit. Assuming that both Greg's organization and the vendor operate under reasonable security procedures, which one of the following activities likely poses the greatest supply chain risk to the equipment?\n(A) Tampering by an unauthorized third party at the vendor’s site\n(B) Interception of devices in transit\n(C) Misconfiguration by an administrator after installation\n(D) Tampering by an unauthorized third party at Greg’s site",
        "中文题目与选项": "Greg 正在评估一家新供应商，该供应商将为他的组织提供网络设备。由于其组织工作的性质，Greg 担心攻击者可能会试图利用供应链进行攻击。假设 Greg 的组织和供应商都在合理的安全程序下运作，以下哪项活动可能对设备构成最大的供应链风险？\n(A) 未经授权的第三方在供应商现场进行的篡改\n(B) 拦截运输中的设备\n(C) 安装后管理员配置错误\n(D) 未经授权的第三方在 Greg 的现场进行篡改",
        "答案": "B",
        "用户错选": "",
        "来源章节": "第六章",
        "来源页码": 5
    },
    {
        "题号": "106",
        "英文题目与选项": "Chris is worried that the laptops that his organization has recently acquired were modified by a third party to include keyloggers before they were delivered. Where should he focus his efforts to prevent this?\n(A) His supply chain\n(B) His vendor contracts\n(C) His post-purchase build process\n(D) The original equipment manufacturer (OEM)",
        "中文题目与选项": "Chris 担心他的组织最近收购的笔记本电脑在交付前被第三方修改，包含键盘记录器。他应该把精力集中在哪里来防止这种情况发生？\n(A) 他的供应链\n(B) 他的供应商合同\n(C) 他的购买后构建过程\n(D) 原始设备制造商 (OEM)",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第六章",
        "来源页码": 6
    },
    {
        "题号": "107",
        "英文题目与选项": "You are the compliance officer for a medical device manufacturing firm. Your company maintains a cloud-based list of patients currently fitted with your devices for long-term care and quality assurance purposes. The list is maintained in a database that cross-references details about the hardware and some billing data. In this situation, who is likely to be considered the data custodian, under many privacy regulations and laws?\n(A) You (the compliance officer)\n(B) The cloud provider’s network security team\n(C) Your company\n(D) The database administrator",
        "中文题目与选项": "你是一家医疗器械制造公司的合规官。你的公司维护着一个基于云的患者名单，这些患者目前安装了你的设备，用于长期护理和质量保证。该列表保存在一个数据库中，该数据库交叉引用了有关硬件的详细信息和一些计费数据。在这种情况下，根据许多隐私法规和法律，谁可能被视为数据保管人？\n(A) 您（合规官）\n(B) 云提供商的网络安全团队\n(C) 你的公司\n(D) 数据库管理员",
        "答案": "D",
        "用户错选": "C",
        "来源章节": "第六章",
        "来源页码": 7
    },
    {
        "题号": "108",
        "英文题目与选项": "Bella is working to develop a long-term relationship with a consulting firm that will assist in her organization’s cloud migration. She would like to create a contract that may govern the terms of many different projects. What type of document should she create?\n(A) Master Service Agreement (MSA)\n(B) Statement of Work (SOW)\n(C) Memorandum of Understanding (MOU)\n(D) Service-Level Agreement (SLA)",
        "中文题目与选项": "Bella 正致力于与一家咨询公司建立长期关系，该公司将协助她的组织进行云迁移。她想创建一个合同，可以管理许多不同项目的条款。她应该创建什么类型的文档？\n(A) 主服务协议（MSA）\n(B) 工作说明书（SOW）\n(C) 谅解备忘录（MOU）\n(D) 服务水平协议（SLA）",
        "答案": "A",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 8
    },
    {
        "题号": "109",
        "英文题目与选项": "Wanda is working with one of her organization's European Union business partners to facilitate the exchange of customer information. Wanda’s organization is located in the United States. What would be the best method for Wanda to use to ensure GDPR compliance?\n(A) Binding corporate rules\n(B) Privacy Shield\n(C) Standard contractual clauses\n(D) Safe harbor",
        "中文题目与选项": "万达正在与其组织的一个欧盟商业伙伴合作，促进客户信息的交流。万达的组织位于美国。万达确保 GDPR 合规的最佳方法是什么？\n(A) 具有约束力的公司规则\n(B) 隐私保护框架\n(C) 标准合同条款\n(D) 安全港",
        "答案": "C",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 9
    },
    {
        "题号": "110",
        "英文题目与选项": "In most privacy-regulation situations, which entity is most responsible for deciding how a particular privacy-related data set will be used or processed?\n(A) The data subject\n(B) The data controller\n(C) The data steward\n(D) The data custodian",
        "中文题目与选项": "在大多数隐私监管情况下，哪个实体最负责决定如何使用或处理特定的隐私相关数据集？\n(A) 数据主体\n(B) 数据控制人\n(C) 数据管理员\n(D) 数据保管人",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第六章",
        "来源页码": 10
    },
    {
        "题号": "111",
        "英文题目与选项": "Kevin is reviewing and updating the security documentation used by his organization. He would like to document some best practices for securing cloud computing services that his team has implemented over the past year. The practices are generalized in nature and do not cover specific services. What type of document would be best for this purpose?\n(A) Policy\n(B) Standard\n(C) Guideline\n(D) Procedure",
        "中文题目与选项": "Kevin 正在审查和更新其组织使用的安全文件。他想记录一下他的团队在过去一年中实施的保护云计算服务的最佳实践。这些做法是一般性的，不包括具体的服务。哪种类型的文件最适合此目的？\n(A) 政策\n(B) 标准\n(C) 指南\n(D) 程序",
        "答案": "C",
        "用户错选": "A",
        "来源章节": "第六章",
        "来源页码": 11
    },
    {
        "题号": "112",
        "英文题目与选项": "Matt works for a telecommunications firm and was approached by a federal agent seeking assistance with wiretapping one of Matt's clients pursuant to a search warrant. Which one of the following laws requires that communications service providers cooperate with law enforcement requests?\n(A) Privacy Act\n(B) CALEA\n(C) HIPAA\n(D) HITECH Act",
        "中文题目与选项": "Matt在一家电信公司工作，一名联邦特工找到他，寻求协助，根据搜查令窃听Matt的一名客户。以下哪项法律要求通信服务提供商配合执法请求？\n(A) 隐私法案\n(B) 通信协助执法法案（CALEA）\n(C) 健康保险可携性和责任法案（HIPAA）\n(D) 医疗信息技术促进法案（HITECH）",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第六章",
        "来源页码": 12
    },
    {
        "题号": "113",
        "英文题目与选项": "38. Which of the following statements about SSAE-18 is not correct?\n(A) It mandates a specific control set.\n(B) It is an attestation standard.\n(C) It is used for external audits.\n(D) It uses a framework, including SOC 1, SOC 2, and SOC 3 reports.",
        "中文题目与选项": "38. 以下关于 SSAE-18 的陈述中哪一项不正确？\n(A) 它规定了一个特定的控制集。\n(B) 它是一种认证标准。\n(C) 它用于外部审计。\n(D) 它使用了一个框架，包括 SOC 1、SOC 2 和 SOC 3 报告。",
        "答案": "A",
        "用户错选": "B",
        "来源章节": "第六章",
        "来源页码": 13
    },
    {
        "题号": "114",
        "英文题目与选项": "Tony is developing a business continuity plan and is having trouble prioritizing resources because of the difficulty of combining information about tangible and intangible assets. What would be the most effective risk assessment approach for him to use?\n(A) Quantitative risk assessment\n(B) Qualitative risk assessment\n(C) Neither quantitative nor qualitative risk assessment\n(D) Combination of quantitative and qualitative risk assessment",
        "中文题目与选项": "Tony正在制定业务连续性计划，由于难以将有形资产和无形资产的信息结合起来，他很难对资源进行优先排序。对他来说，最有效的风险评估方法是什么？\n(A) 定量风险评估\n(B) 定性风险评估\n(C) 既不是定量也不是定性风险评估\n(D) 定量和定性风险评估相结合",
        "答案": "D",
        "用户错选": "B",
        "来源章节": "第六章",
        "来源页码": 14
    },
    {
        "题号": "115",
        "英文题目与选项": "Belinda is auditing the financial controls of a manufacturing company and learns that the financial systems are run on a major IaaS platform. She would like to gain assurance that the platform has appropriate security controls in place to assure the accuracy of her client's financial statements. What action should she take?\n(A) Perform an IT audit of the cloud provider.\n(B) Obtain a SOC 1 report.\n(C) Obtain a SOC 2 report.\n(D) Continue testing only controls at the client and note the use of the cloud provider in her report.",
        "中文题目与选项": "Belinda正在审计一家制造公司的财务控制，并了解到财务系统运行在一个主要的IaaS平台上。她希望获得保证，即该平台具有适当的安全控制措施，以确保其客户财务报表的准确性。她应该采取什么行动？\n(A) 对云提供商进行IT审计。\n(B) 获取SOC 1报告。\n(C) 获取SOC 2报告。\n(D) 仅在客户端继续测试控制，并在报告中注明云提供商的使用情况。",
        "答案": "B",
        "用户错选": "C",
        "来源章节": "第六章",
        "来源页码": 15
    },
    {
        "题号": "116",
        "英文题目与选项": "A(n) ___ includes reviewing the organization’s current position/performance as revealed by an audit against a given standard.\n(A) Service Organization Control (SOC) report\n(B) Gap analysis\n(C) Audit scoping statement\n(D) Federal guideline",
        "中文题目与选项": "___ 包括根据给定标准审查组织的当前状况/绩效。\n(A) 服务组织控制 (SOC) 报告\n(B) 差距分析\n(C) 审计范围声明\n(D) 联邦指南",
        "答案": "B",
        "用户错选": "A",
        "来源章节": "第六章",
        "来源页码": 16
    },
    {
        "题号": "117",
        "英文题目与选项": "Digital forensics investigators perform all of the following actions routinely except for securely ___ data.\n(A) Collecting\n(B) Creating\n(C) Analyzing\n(D) Presenting",
        "中文题目与选项": "除安全地 ___ 数据外，数字取证调查员通常会执行以下所有操作。\n(A) 收集\n(B) 创建\n(C) 分析\n(D) 提交",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 17
    },
    {
        "题号": "118",
        "英文题目与选项": "12. Which of the following is not a way in which an entity located outside the European Union (EU) can be allowed to gather and process privacy data belonging to EU citizens?\n(A) Be located in a country with a nationwide law that complies with the EU laws.\n(B) Appeal to the EU High Court for permission.\n(C) Create binding contractual language that complies with the EU laws.\n(D) Join the Privacy Shield program in its own country.",
        "中文题目与选项": "以下哪一项不是允许位于欧盟以外的实体收集和处理属于欧盟公民的隐私数据的方式？\n(A) 位于一个拥有符合欧盟法律的全国性法律的国家。\n(B) 向欧盟高等法院申请许可。\n(C) 制定符合欧盟法律的具有约束力的合同语言。\n(D) 加入自己国家的隐私保护计划。",
        "答案": "B",
        "用户错选": "D",
        "来源章节": "第六章",
        "来源页码": 18
    }
]
