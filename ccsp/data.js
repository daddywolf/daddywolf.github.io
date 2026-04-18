const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "Single sign-on systems work by authenticating users from a centralized location or using a centralized method, and then allowing applications that trust the system to grant those users access. What would be passed between the authentication system and the applications to grant a user access?\n(A) Ticket\n(B) Certificate\n(C) Credential\n(D) Token",
        "中文题目与选项": "单点登录系统的工作方式是从集中位置或使用集中方法验证用户，然后允许信任该系统的应用程序授予这些用户访问权限。在认证系统和应用程序之间会传递什么来授予用户访问权限？\n(A) 凭证票据\n(B) 证书\n(C) 认证凭据\n(D) 令牌",
        "答案": "D",
        "来源页码": 1
    },
    {
        "题号": "2",
        "英文题目与选项": "All of the following methods can be used to attenuate the harm caused by escalation of privilege except:\n(A) Extensive access control and authentication tools and techniques\n(B) Analysis and review of all log data by trained, skilled personnel on a frequent basis\n(C) Periodic and effective use of cryptographic sanitization tools\n(D) The use of automated analysis tools such as SIM, SIEM, and SEM solutions",
        "中文题目与选项": "以下所有方法均可用于减轻特权升级造成的危害，但以下方法除外：\n(A) 广泛的访问控制和身份验证工具与技术\n(B) 由受过培训的专业人员定期分析和审查所有日志数据\n(C) 定期有效地使用加密清理工具\n(D) 使用 SIM、SIEM 和 SEM 等自动化分析解决方案",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "3",
        "英文题目与选项": "Which of the following involves assigning an opaque value to sensitive data fields to protect confidentiality?\n(A) Obfuscation\n(B) Masking\n(C) Tokenization\n(D) Anonymization",
        "中文题目与选项": "以下哪项涉及为敏感数据字段分配不透明值以保护机密性？\n(A) 混淆\n(B) 掩蔽\n(C) 令牌化\n(D) 匿名化",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "4",
        "英文题目与选项": "Federation should be to the users.\n(A) Hostile\n(B) Proportional\n(C) Transparent\n(D) Expensive",
        "中文题目与选项": "对于用户来说，联合应该是：\n(A) 怀有敌意的\n(B) 相称的\n(C) 透明的\n(D) 昂贵的",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "5",
        "英文题目与选项": "Which of the following roles is responsible for obtaining new customers and securing contracts and agreements?\n(A) Inter-cloud provider\n(B) Cloud service broker\n(C) Cloud auditor\n(D) Cloud service developer",
        "中文题目与选项": "以下哪个角色负责获得新客户并确保合同和协议的安全？\n(A) 云间提供商\n(B) 云服务代理\n(C) 云审计员\n(D) 云服务开发者",
        "答案": "B",
        "来源页码": 2
    },
    {
        "题号": "6",
        "英文题目与选项": "Which of the following statements accurately describes VLANs?\n(A) They are not restricted to the same data center or the same racks.\n(B) They are not restricted to the same rack but restricted to the same data center.\n(C) They are restricted to the same racks and data centers.\n(D) They are not restricted to the same rack but restricted to the same switches.",
        "中文题目与选项": "以下哪项陈述准确描述了 VLAN？\n(A) 它们不限于同一数据中心或同一机架。\n(B) 它们不限于同一机架，而是限于同一数据中心。\n(C) 它们仅限于相同的机架和数据中心。\n(D) 它们不限于同一机架，而是限于同一交换机。",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "7",
        "英文题目与选项": "Data labels can include all of the following except:\n(A) Source\n(B) Delivery vendor\n(C) Handling restrictions\n(D) Jurisdiction",
        "中文题目与选项": "数据标签可以包括以下所有内容，但不包括：\n(A) 来源\n(B) 交付供应商\n(C) 处理限制\n(D) 司法权",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "8",
        "英文题目与选项": "Cryptographic keys for encrypted data stored in the cloud should be\n(A) Not stored with the cloud provider\n(B) Generated with redundancy\n(C) At least 128 bits long\n(D) Split into groups",
        "中文题目与选项": "存储在云中的加密数据的加密密钥应当：\n(A) 不与云提供商一起存储\n(B) 冗余生成\n(C) 至少 128 位长\n(D) 分成多个组",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "9",
        "英文题目与选项": "Because PaaS implementations are so often used for software development, what is one of the vulnerabilities that should always be kept in mind?\n(A) Malware\n(B) Loss/theft of portable devices\n(C) Backdoors\n(D) DoS/DDoS",
        "中文题目与选项": "由于 PaaS 实现经常用于软件开发，因此应始终记住的一个漏洞是什么？\n(A) 恶意软件\n(B) 便携式设备丢失/被盗\n(C) 后门\n(D) DoS/DDoS 攻击",
        "答案": "C",
        "来源页码": 3
    },
    {
        "题号": "11",
        "英文题目与选项": "What must be secured on physical hardware to prevent unauthorized access to systems?\n(A) BIOS\n(B) SSH\n(C) RDP\n(D) ALOM",
        "中文题目与选项": "物理硬件上必须保护哪些内容以防止未经授权访问系统？\n(A) BIOS\n(B) SSH\n(C) RDP\n(D) ALOM",
        "答案": "A",
        "来源页码": 4
    },
    {
        "题号": "12",
        "英文题目与选项": "What does the \"SOC\" acronym refer to with audit reports?\n(A) Service Origin Confidentiality\n(B) System Organization Confidentiality\n(C) Service Organizational Control\n(D) System Organization Control",
        "中文题目与选项": "“SOC”首字母缩略词在审计报告中指的是什么？\n(A) 服务来源保密\n(B) 系统组织保密\n(C) 服务组织控制\n(D) 系统组织控制",
        "答案": "C",
        "来源页码": 4
    },
    {
        "题号": "13",
        "英文题目与选项": "Which network protocol is essential for allowing automation and orchestration within a cloud environment?\n(A) DNSSEC\n(B) DHCP\n(C) IPsec\n(D) VLAN",
        "中文题目与选项": "哪种网络协议对于在云环境中实现自动化和协调至关重要？\n(A) DNSSEC\n(B) DHCP\n(C) IPsec\n(D) VLAN",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "15",
        "英文题目与选项": "You were recently hired as a project manager at a major university to implement cloud services for the academic and administrative systems. Because the load and demand for services at a university are very cyclical in nature, commensurate with the academic calendar, which of the following aspects of cloud computing would NOT be a primary benefit to you?\n(A) Measured service\n(B) Broad network access\n(C) Resource pooling\n(D) On-demand self-service",
        "中文题目与选项": "你最近被聘为一所大型大学的项目经理，为学术和管理系统实施云服务。由于大学的服务负载和需求具有很强的周期性，与学术日历相对应，因此，以下哪一个云计算特性不会对您带来主要好处？\n(A) 度量的服务\n(B) 广泛的网络接入\n(C) 资源池化\n(D) 按需自助服务",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "16",
        "英文题目与选项": "Apart from using encryption at the file system level, what technology is the most widely used to protect data stored in an object storage system?\n(A) TLS\n(B) HTTPS\n(C) VPN\n(D) IRM",
        "中文题目与选项": "除了在文件系统级别使用加密之外，在保护存储在对象存储系统中的数据方面，最广泛使用的技术是什么？\n(A) TLS\n(B) HTTPS\n(C) VPN\n(D) IRM",
        "答案": "D",
        "来源页码": 5
    },
    {
        "题号": "17",
        "英文题目与选项": "Which of the following is associated with SOC 1/SOC 2/SOC 3?\n(A) Audit reports\n(B) Risk management frameworks\n(C) Access controls\n(D) Software developments",
        "中文题目与选项": "以下哪项与 SOC 1 / SOC 2 / SOC 3 相关？\n(A) 审计报告\n(B) 风险管理框架\n(C) 访问控制\n(D) 软件开发",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "18",
        "英文题目与选项": "Which of the following characteristics is associated with digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM)?\n(A) Persistence\n(B) Influence\n(C) Resistance\n(D) Trepidation",
        "中文题目与选项": "以下哪些特征与数字版权管理 (DRM) 解决方案（有时称为信息权限管理，IRM）相关？\n(A) 持久性\n(B) 影响力\n(C) 抵抗性\n(D) 恐惧",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "19",
        "英文题目与选项": "Which of the following is NOT one of the security domains presented within the Cloud Controls Matrix?\n(A) Financial security\n(B) Mobile security\n(C) Data center security\n(D) Interface security",
        "中文题目与选项": "以下哪一项不是云控制矩阵中显示的安全域之一？\n(A) 财务安全\n(B) 移动安全\n(C) 数据中心安全\n(D) 接口安全",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "20",
        "英文题目与选项": "What can tokenization be used for?\n(A) Encryption\n(B) PCI DSS compliance\n(C) Enhancing the user experience\n(D) Giving management oversight to e-commerce functions",
        "中文题目与选项": "标记化可以用于什么？\n(A) 加密\n(B) 符合 PCI DSS\n(C) 增强用户体验\n(D) 对电子商务职能进行管理监督",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "21",
        "英文题目与选项": "Which of the following is NOT an application or utility to apply and enforce baselines on a system?\n(A) Chef\n(B) GitHub\n(C) Puppet\n(D) Active Directory",
        "中文题目与选项": "以下哪项不是可以在系统上应用和实施基线的应用程序或工具程序？\n(A) Chef\n(B) GitHub\n(C) Puppet\n(D) Active Directory",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "22",
        "英文题目与选项": "A federated identity system is composed of three main components. Which of the following is NOT one of the three main components?\n(A) Identity provider\n(B) User\n(C) Relying party\n(D) API",
        "中文题目与选项": "联合身份系统由三个主要组件组成。以下哪项不是三个主要组件之一？\n(A) 身份提供方\n(B) 使用者\n(C) 依赖方\n(D) API",
        "答案": "D",
        "来源页码": 7
    },
    {
        "题号": "23",
        "英文题目与选项": "What concept does the 'A' represent in the DREAD model?\n(A) Affected users\n(B) Authentication\n(C) Affinity\n(D) Authorization",
        "中文题目与选项": "在 DREAD 模型中，“A”代表什么概念？\n(A) 受影响的用户\n(B) 身份验证\n(C) 密切关系\n(D) 批准",
        "答案": "A",
        "来源页码": 7
    },
    {
        "题号": "24",
        "英文题目与选项": "Which experimental technology is intended to create the possibility of processing encrypted data without having to decrypt it first?\n(A) Quantum-state\n(B) Polyinstantiation\n(C) Homomorphic\n(D) Gastronomic",
        "中文题目与选项": "什么是一种实验技术，旨在创造处理加密数据而无需先解密的可能性？\n(A) 量子态\n(B) 多重实例\n(C) 同态加密\n(D) 美食学",
        "答案": "C",
        "来源页码": 8
    },
    {
        "题号": "25",
        "英文题目与选项": "Which of the following are the storage types associated with IaaS?\n(A) Volume and object\n(B) Volume and label\n(C) Volume and container\n(D) Object and target",
        "中文题目与选项": "以下哪些是与 IaaS 相关的存储类型？\n(A) 卷和对象\n(B) 卷和标签\n(C) 卷和容器\n(D) 对象和目标",
        "答案": "A",
        "来源页码": 8
    },
    {
        "题号": "26",
        "英文题目与选项": "According to OWASP recommendations, active software security testing should include all of the following except\n(A) Session initiation testing\n(B) Input validation testing\n(C) Testing for error handling\n(D) Testing for weak cryptography",
        "中文题目与选项": "根据 OWASP 建议，主动软件安全测试应包括以下所有内容，但不包括：\n(A) 会话初始化测试\n(B) 输入验证测试\n(C) 错误处理测试\n(D) 弱加密测试",
        "答案": "D",
        "来源页码": 8
    },
    {
        "题号": "27",
        "英文题目与选项": "Over time, what is a primary concern for data archiving?\n(A) Size of archives\n(B) Format of archives\n(C) Recoverability\n(D) Regulatory changes",
        "中文题目与选项": "随着时间的推移，数据归档的主要关注点是什么？\n(A) 档案的大小\n(B) 档案的格式\n(C) 可恢复性\n(D) 法规变更",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "28",
        "英文题目与选项": "Which data state would be most likely to use digital signatures as a security protection mechanism?\n(A) Data in use\n(B) Data in transit\n(C) Archived\n(D) Data at rest",
        "中文题目与选项": "哪个数据状态最可能使用数字签名作为安全保护机制？\n(A) 使用中的数据\n(B) 传输中的数据\n(C) 已归档的数据\n(D) 静止数据",
        "答案": "A",
        "来源页码": 9
    },
    {
        "题号": "29",
        "英文题目与选项": "You have just hired an external developer to modernize some application traces using new web services and functions. To create a comprehensive verification testing platform, the developer needs a data set similar in size and composition to the production data set. To achieve this, what type of masking technique should you use?\n(A) Development\n(B) Replicated\n(C) Static\n(D) Dynamic",
        "中文题目与选项": "您刚聘请了一名外部开发人员，使用新的 web 服务和功能对一些应用程序进行现代化改造。为了实现一个全面的验证测试平台，开发人员需要一个在大小和组成上都类似于生产数据集的数据集。为实现这一点，您将采用什么类型的屏蔽技术？\n(A) 开发型\n(B) 复制型\n(C) 静态型\n(D) 动态型",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "30",
        "英文题目与选项": "DLP solutions can aid in deterring loss due to which of the following?\n(A) Power failure\n(B) Performance\n(C) Bad policy\n(D) Malicious disclosure",
        "中文题目与选项": "DLP 解决方案有助于防止以下哪一项造成的损失？\n(A) 电源故障\n(B) 性能问题\n(C) 错误的策略\n(D) 恶意泄露",
        "答案": "D",
        "来源页码": 10
    },
    {
        "题号": "31",
        "英文题目与选项": "Which of the following is not one of the defined security control domains within the Cloud Controls Matrix, published by the Cloud Security Alliance?\n(A) Financial\n(B) Human resources\n(C) Mobile security\n(D) Identity and access management",
        "中文题目与选项": "以下哪项不是云安全联盟发布的云控制矩阵中定义的安全控制域之一？\n(A) 财务\n(B) 人力资源\n(C) 移动安全\n(D) 身份与访问管理",
        "答案": "A",
        "来源页码": 10
    },
    {
        "题号": "32",
        "英文题目与选项": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing.\nAccording to the CSA, all of the following activity can result in data loss except\n(A) Misplaced crypto keys\n(B) Improper policy\n(C) Ineffectual backup procedures\n(D) Accidental overwrite",
        "中文题目与选项": "云安全联盟（CSA）发布了一份针对参与云计算的组织的常见威胁列表，名为“臭名昭著的九个威胁”。根据CSA，下列所有活动都可能导致数据丢失，但以下除外：\n(A) 错误放置的加密密钥\n(B) 政策不当\n(C) 备份过程无效\n(D) 意外覆盖",
        "答案": "B",
        "来源页码": 11
    },
    {
        "题号": "33",
        "英文题目与选项": "Where is an XML firewall most commonly and effectively deployed in the environment?\n(A) Between the application and data layers\n(B) Between the presentation and application layers\n(C) Between the IPS and firewall\n(D) Between the firewall and application server",
        "中文题目与选项": "XML防火墙在环境中最常见和最有效的部署位置是哪里？\n(A) 在应用程序和数据层之间\n(B) 在表示层和应用层之间\n(C) 在IPS和防火墙之间\n(D) 在防火墙和应用程序服务器之间",
        "答案": "D",
        "来源页码": 11
    },
    {
        "题号": "34",
        "英文题目与选项": "Which role is responsible for preparing systems for the cloud, administering and monitoring services, and managing inventory and assets?\n(A) Cloud service business manager\n(B) Cloud service deployment manager\n(C) Cloud service manager\n(D) Cloud service operations manager",
        "中文题目与选项": "以下哪个角色负责为云准备系统、管理和监控服务以及管理库存和资产？\n(A) 云服务业务经理\n(B) 云服务部署经理\n(C) 云服务经理\n(D) 云服务运营经理",
        "答案": "D",
        "来源页码": 12
    },
    {
        "题号": "35",
        "英文题目与选项": "Which cloud storage type uses an opaque value or descriptor to categorize and organize data?\n(A) Volume\n(B) Object\n(C) Structured\n(D) Unstructured",
        "中文题目与选项": "哪种云存储类型使用不透明的值或描述符来分类和组织数据？\n(A) 卷\n(B) 对象\n(C) 结构化的\n(D) 非结构化的",
        "答案": "B",
        "来源页码": 12
    },
    {
        "题号": "36",
        "英文题目与选项": "Your boss has tasked your team with getting your legacy systems and applications connected with new cloud-based services that management has decided are crucial to customer service and offerings. Which role would you be assuming under this directive?\n(A) Cloud service administrator\n(B) Cloud service user\n(C) Cloud service integrator\n(D) Cloud service business manager",
        "中文题目与选项": "您的上司已责成您的团队将遗留系统和应用程序与新的基于云的服务连接起来，管理层认为这些服务对客户服务和产品至关重要。根据这一指令，您将担任哪个角色？\n(A) 云服务管理员\n(B) 云服务用户\n(C) 云服务集成商\n(D) 云服务业务经理",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "37",
        "英文题目与选项": "Of the following, which is probably the most significant risk in a managed cloud environment?\n(A) DDoS\n(B) Management plane breach\n(C) Guest escape\n(D) Physical attack on the utility service lines",
        "中文题目与选项": "以下哪一项可能是托管云环境中最重要的风险？\n(A) DDoS 攻击\n(B) 管理平面入侵\n(C) 客户逃逸\n(D) 对公用事业服务线路的物理攻击",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "38",
        "英文题目与选项": "DRM solutions should generally include all the following functions, except:\n(A) Persistency\n(B) Automatic self-destruct\n(C) Automatic expiration\n(D) Dynamic policy control",
        "中文题目与选项": "DRM 解决方案通常应包括以下所有功能，但以下功能除外：\n(A) 持久性\n(B) 自动自毁\n(C) 自动过期\n(D) 动态策略控制",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "39",
        "英文题目与选项": "Where is an XML firewall most commonly deployed in the environment?\n(A) Between the application and data layers\n(B) Between the IPS and firewall\n(C) Between the presentation and application layers\n(D) Between the firewall and application server",
        "中文题目与选项": "环境中最常见的 XML 防火墙部署位置是：\n(A) 在应用程序和数据层之间\n(B) 在 IPS 和防火墙之间\n(C) 在表示层和应用层之间\n(D) 在防火墙和应用程序服务器之间",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "40",
        "英文题目与选项": "Data centers and operations design traditionally use a layered topology approach. Which of the following standards focuses on this approach and is widely used across the industry?\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "中文题目与选项": "数据中心和运营设计传统上采用分层拓扑方法。以下哪个标准侧重于该方法，并且在整个行业中普遍使用？\n(A) 国际数据中心管理局 (IDCA)\n(B) 美国国家消防协会 (NFPA)\n(C) 建筑行业咨询服务国际 (BICSI)\n(D) Uptime Institute",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "41",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?\n(A) Infrastructure\n(B) Platform\n(C) Application\n(D) Data",
        "中文题目与选项": "无论使用哪种云模型，以下哪一项都是云客户的唯一责任？\n(A) 基础设施\n(B) 平台\n(C) 应用\n(D) 数据",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "42",
        "英文题目与选项": "Which of the following roles involves the provisioning and delivery of cloud services?\n(A) Cloud service deployment manager\n(B) Cloud service business manager\n(C) Cloud service manager\n(D) Cloud service operations manager",
        "中文题目与选项": "以下哪个角色涉及云服务的供应和交付？\n(A) 云服务部署经理\n(B) 云服务业务经理\n(C) 云服务经理\n(D) 云服务运营经理",
        "答案": "C",
        "来源页码": 14
    },
    {
        "题号": "43",
        "英文题目与选项": "Which of the following is NOT a core component of a SIEM solution?\n(A) Correlation\n(B) Federation\n(C) Compliance\n(D) Scalability",
        "中文题目与选项": "以下哪项不是 SIEM 解决方案的核心组件？\n(A) 关联性\n(B) 联合\n(C) 合规\n(D) 可扩展性",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "44",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Data value\n(B) Date of scheduled destruction\n(C) Date data was created\n(D) Data owner",
        "中文题目与选项": "数据标签可以包含以下所有内容，但不包括：\n(A) 数据值\n(B) 计划销毁日期\n(C) 数据创建日期\n(D) 数据所有者",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "45",
        "英文题目与选项": "Which crucial aspect of cloud computing can be most threatened by insecure APIs?\n(A) Automation\n(B) Resource pooling\n(C) Elasticity\n(D) Redundancy",
        "中文题目与选项": "云计算的哪个关键方面最容易受到不安全 API 的威胁？\n(A) 自动化\n(B) 资源池化\n(C) 弹性\n(D) 冗余",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "46",
        "英文题目与选项": "Which of the following is NOT a major regulatory framework?\n(A) PCI DSS\n(B) HIPAA\n(C) SOX\n(D) FIPS 140-2",
        "中文题目与选项": "以下哪项不是主要的监管框架？\n(A) PCI DSS\n(B) HIPAA\n(C) SOX\n(D) FIPS 140-2",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "47",
        "英文题目与选项": "The most pragmatic option for data disposal in the cloud is which of the following?\n(A) Cryptoshredding\n(B) Overwriting\n(C) Cold fusion\n(D) Melting",
        "中文题目与选项": "在云中处理数据最实用的选择是以下哪一项？\n(A) 加密粉碎\n(B) 覆盖\n(C) 冷融合\n(D) 熔化",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "48",
        "英文题目与选项": "Static software security testing typically uses _____ as a measure of how thorough the testing was.\n(A) Number of testers\n(B) Flaws detected\n(C) Code coverage\n(D) Malware hits",
        "中文题目与选项": "静态软件安全测试通常使用_____来衡量测试的彻底程度。\n(A) 测试人员数量\n(B) 检测到的缺陷\n(C) 代码覆盖率\n(D) 恶意软件命中率",
        "答案": "C",
        "来源页码": 16
    },
    {
        "题号": "49",
        "英文题目与选项": "Countermeasures for protecting cloud operations against internal threats include all of the following except:\n(A) Mandatory vacation\n(B) Least privilege\n(C) Separation of duties\n(D) Conflict of interest",
        "中文题目与选项": "保护云运营免受内部威胁的对策包括以下所有方面，但不包括：\n(A) 强制休假\n(B) 最低特权\n(C) 职责分离\n(D) 利益冲突",
        "答案": "D",
        "来源页码": 16
    },
    {
        "题号": "50",
        "英文题目与选项": "Which of the following is a management role, versus a technical role, as it pertains to data management and oversight?\n(A) Data owner\n(B) Data processor\n(C) Database administrator\n(D) Data custodian",
        "中文题目与选项": "在数据管理和监督方面，以下哪一项是管理角色，而不是技术角色？\n(A) 数据所有者\n(B) 数据处理器\n(C) 数据库管理员\n(D) 数据保管人",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "51",
        "英文题目与选项": "Which characteristic of automated patching makes it attractive?\n(A) Cost\n(B) Speed\n(C) Noise reduction\n(D) Capability to recognize problems quickly",
        "中文题目与选项": "自动修补的哪个特性使其具有吸引力？\n(A) 成本\n(B) 速度\n(C) 降噪\n(D) 快速识别问题的能力",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "52",
        "英文题目与选项": "Patches do all the following except\n(A) Address newly discovered vulnerabilities\n(B) Solve cloud interoperability problems\n(C) Add new features and capabilities to existing systems\n(D) Address performance issues",
        "中文题目与选项": "修补程序执行以下所有操作，但以下哪项除外？\n(A) 解决新发现的漏洞\n(B) 解决云互操作性问题\n(C) 向现有系统添加新功能和能力\n(D) 解决性能问题",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "53",
        "英文题目与选项": "Which strategy involves using a fake production system to lure attackers in order to learn about their tactics?\n(A) IDS\n(B) Honeypot\n(C) Test environment\n(D) Firewall",
        "中文题目与选项": "哪种策略涉及使用假生产系统来引诱攻击者以了解他们的战术？\n(A) 入侵检测系统\n(B) 蜜罐\n(C) 测试环境\n(D) 防火墙",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "54",
        "英文题目与选项": "Which of the following is not a reason for conducting audits?\n(A) Regulatory compliance\n(B) User satisfaction\n(C) Determination of service quality\n(D) Security assurance",
        "中文题目与选项": "以下哪项不是进行审计的理由？\n(A) 法规合规性\n(B) 用户满意度\n(C) 服务质量的确定\n(D) 安全保证",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "55",
        "英文题目与选项": "Your organization is developing software for wide use by the public. You have decided to test it in a cloud environment, in a PaaS model. Which of the following should be of particular concern to your organization for this situation?\n(A) Vendor lock-in\n(B) Backdoors\n(C) Regulatory compliance\n(D) High-speed network connectivity",
        "中文题目与选项": "您的组织正在开发供公众广泛使用的软件。您已经决定在云环境中以 PaaS 模型测试它。对于这种情况，您的组织应特别关注以下哪一项？\n(A) 厂商锁定\n(B) 后门\n(C) 法规合规性\n(D) 高速网络连接",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "56",
        "英文题目与选项": "Which of the following would NOT be considered part of the resource pool implementation for Infrastructure as a Service (IaaS)?\n(A) Storage\n(B) Applications\n(C) Memory\n(D) CPU",
        "中文题目与选项": "以下哪项不会被视为基础设施即服务（IaaS）实施的资源池的一部分？\n(A) 存储\n(B) 应用\n(C) 内存\n(D) 中央处理器",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "57",
        "英文题目与选项": "Which of the following roles involves overseeing billing, purchasing, and requesting audit reports for an organization within a cloud environment?\n(A) Cloud service user\n(B) Cloud service business manager\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪个角色涉及监督云环境中组织的账单、采购和请求审计报告？\n(A) 云服务用户\n(B) 云服务业务经理\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "58",
        "英文题目与选项": "Which of the following is considered an internal redundancy for a data center?\n(A) Power feeds\n(B) Chillers\n(C) Network circuits\n(D) Generators",
        "中文题目与选项": "以下哪项被视为数据中心的内部冗余？\n(A) 电源线路\n(B) 冷却器\n(C) 网络电路\n(D) 发电机",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "59",
        "英文题目与选项": "Open source files with hub meaning\n(A) Database management software\n(B) Secure software\n(C) Proprietary software\n(D) —",
        "中文题目与选项": "哪种类型的软件最有可能由最多的人员、最多的视角进行审查？\n(A) 数据库管理软件\n(B) 安全软件\n(C) 专有软件\n(D) —",
        "答案": "B",
        "来源页码": 20
    },
    {
        "题号": "60",
        "英文题目与选项": "Which of the following cloud aspects complicates eDiscovery?\n(A) Resource pooling\n(B) On-demand self-service\n(C) Multitenancy\n(D) Measured service",
        "中文题目与选项": "以下哪些云方面使 eDiscovery 变得复杂？\n(A) 资源池化\n(B) 按需自助服务\n(C) 多租户技术\n(D) 测量的服务",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "61",
        "英文题目与选项": "Managed cloud services exist because the service is less expensive for each customer than creating the same services for themselves in a legacy environment. Using a managed service allows the customer to realize significant cost savings through the reduction of:\n(A) Risk\n(B) Security controls\n(C) Personnel\n(D) Data",
        "中文题目与选项": "托管云服务之所以存在，是因为与在传统环境中为自己创建相同服务相比，该服务对每个客户来说成本更低。通过使用管理服务，客户可以通过减少以下内容实现显著的成本节约：\n(A) 风险\n(B) 安全控制\n(C) 人员\n(D) 数据",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "62",
        "英文题目与选项": "Which aspects of cloud cross-discipline are related to monitoring processes and systems and ensuring their compliance with specific policies and regulations?\n(A) Governance\n(B) Regulatory requirements\n(C) Service-level agreements\n(D) Auditability",
        "中文题目与选项": "云交叉领域的哪些方面与对流程和系统的监督以及确保其遵守特定政策和法规有关？\n(A) 治理\n(B) 监管要求\n(C) 服务级别协议\n(D) 可审计性",
        "答案": "D",
        "来源页码": 21
    },
    {
        "题号": "63",
        "英文题目与选项": "Which of the following concepts is NOT one of the core components of an encryption system architecture?\n(A) Software\n(B) Network\n(C) Keys\n(D) Data",
        "中文题目与选项": "以下哪个概念不是加密系统架构的核心组件之一？\n(A) 软件\n(B) 网络\n(C) 密钥\n(D) 数据",
        "答案": "B",
        "来源页码": 21
    },
    {
        "题号": "64",
        "英文题目与选项": "Which of the following roles is responsible for peering with other cloud services and providers?\n(A) Cloud auditor\n(B) Inter-cloud provider\n(C) Cloud service broker\n(D) Cloud service developer",
        "中文题目与选项": "以下哪个角色负责与其他云服务和提供商进行对等连接？\n(A) 云审核员\n(B) 云间提供商\n(C) 云服务代理\n(D) 云服务开发者",
        "答案": "B",
        "来源页码": 21
    },
    {
        "题号": "65",
        "英文题目与选项": "Three core concepts define organizational responsibility in eDiscovery.\nWhich of the following represents the three required components?\n(A) Possession, ownership, control\n(B) Ownership, use, creation\n(C) Control, custody, use\n(D) Possession, custody, control",
        "中文题目与选项": "三个核心概念定义了组织在电子发现（eDiscovery）中的责任。\n以下哪一项是构成所需披露的三个组成部分？\n(A) 占有、所有权、控制\n(B) 所有权、使用、创建\n(C) 控制、保管、使用\n(D) 占有、保管、控制",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "66",
        "英文题目与选项": "Which of the following is a risk that stems from a virtualized environment?\n(A) Live virtual machines in the production environment are moved from one host to another in the clear.\n(B) Cloud data centers can become a single point of failure.\n(C) It is difficult to find and contract with multiple utility providers of the same type (electric, water, etc.).\n(D) Modern SLA demands are stringent and very hard to meet.",
        "中文题目与选项": "以下哪项风险源于虚拟化环境？\n(A) 生产环境中的实时虚拟机可以在未加密的情况下从一台主机移动到另一台主机。\n(B) 云数据中心可能成为单一故障点。\n(C) 很难找到并与多家相同类型（如电力、水等）的公用事业供应商签订合同。\n(D) 现代SLA要求非常严格，难以满足。",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "67",
        "英文题目与选项": "All policies within the organization should include a section that includes all of the following, except:\n(A) Policy maintenance\n(B) Policy review\n(C) Policy enforcement\n(D) Policy adjudication",
        "中文题目与选项": "组织内的所有政策都应包含一个涵盖以下所有内容的部分，但以下哪一项除外？\n(A) 政策维护\n(B) 政策审查\n(C) 政策执行\n(D) 政策裁决",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "68",
        "英文题目与选项": "FM-200 has all of the following properties except:\n(A) It is non-toxic when used for fire suppression\n(B) It is gaseous at room temperature\n(C) It may deplete the Earth's ozone layer\n(D) It does not leave a film or coagulant after use",
        "中文题目与选项": "FM-200具有以下所有属性，但除外：\n(A) 它在用于灭火方面是无毒的\n(B) 它在室温下是气态的\n(C) 它可能会耗尽地球的臭氧层\n(D) 使用后不会留下薄膜或凝固剂",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "69",
        "英文题目与选项": "The REST API is a widely used standard for communications of web-based services between clients and the servers hosting them. Which protocol does the REST API depend on?\n(A) HTTP\n(B) SSH\n(C) SAML\n(D) XML",
        "中文题目与选项": "REST API是一种广泛使用的标准，用于客户端和托管它们的服务器之间基于Web的服务通信。REST API依赖于哪个协议？\n(A) HTTP\n(B) SSH\n(C) SAML\n(D) XML",
        "答案": "A",
        "来源页码": 23
    },
    {
        "题号": "70",
        "英文题目与选项": "Modern web service systems are designed for high availability and resiliency. Which concept pertains to the ability to detect problems within a system, environment, or application and programmatically invoke redundant systems or processes for mitigation?\n(A) Elasticity\n(B) Redundancy\n(C) Fault tolerance\n(D) Automation",
        "中文题目与选项": "现代Web服务系统是为高可用性和弹性而设计的。哪个概念与检测系统、环境或应用程序中的问题，并以编程方式调用冗余系统或过程进行缓解的能力有关？\n(A) 弹性\n(B) 冗余\n(C) 容错性\n(D) 自动化",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "71",
        "英文题目与选项": "What is a standard configuration and policy set that is applied to systems and virtual machines called?\n(A) Standardization\n(B) Baseline\n(C) Hardening\n(D) Redline",
        "中文题目与选项": "应用于系统和虚拟机的标准配置和策略集叫什么？\n(A) 标准化\n(B) 基线\n(C) 加固\n(D) 红线",
        "答案": "B",
        "来源页码": 24
    },
    {
        "题号": "72",
        "英文题目与选项": "Which of the following roles would be responsible for managing memberships in federations and the use and integration of federated services?\n(A) Inter-cloud provider\n(B) Cloud service business manager\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪个角色将负责管理联合会中的成员资格以及联合服务的使用和集成？\n(A) 云间提供商\n(B) 云服务业务经理\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "A",
        "来源页码": 24
    },
    {
        "题号": "73",
        "英文题目与选项": "Which aspect of cloud computing would make the use of a cloud the most attractive as a BCDR solution?\n(A) Interoperability\n(B) Resource pooling\n(C) Portability\n(D) Measured service",
        "中文题目与选项": "云计算的哪个方面将使云作为BCDR解决方案最具吸引力？\n(A) 互操作性\n(B) 资源池化\n(C) 可移植性\n(D) 可计量的服务",
        "答案": "D",
        "来源页码": 24
    },
    {
        "题号": "74",
        "英文题目与选项": "In the wake of many scandals with major corporations involving fraud and the deception of investors and regulators, which of the following laws was passed to govern accounting and financial records and disclosures?\n(A) GLBA\n(B) Safe Harbor\n(C) HIPAA\n(D) SOX",
        "中文题目与选项": "在与大公司发生许多涉及欺诈、欺骗投资者和监管机构的丑闻之后，以下哪项法律被通过以管理会计、财务记录和披露？\n(A) GLBA 法案\n(B) 安全港计划\n(C) HIPAA 法案\n(D) SOX 法案",
        "答案": "D",
        "来源页码": 25
    },
    {
        "题号": "75",
        "英文题目与选项": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing. According to the CSA, an organization that suffers a data breach might suffer all of the following negative effects except:\n(A) Cost of compliance with notification laws\n(B) Loss of public perception/goodwill\n(C) Loss of market share\n(D) Cost of detection",
        "中文题目与选项": "云安全联盟（CSA）发布了“臭名昭著的九大威胁”，这是一份针对参与云计算的组织的常见威胁列表。根据 CSA，遭受数据泄露的组织可能会遭受以下所有负面影响，但以下哪项除外？\n(A) 遵守通知法律的合规成本\n(B) 公众认知/商誉损失\n(C) 市场份额损失\n(D) 检测成本",
        "答案": "D",
        "来源页码": 25
    },
    {
        "题号": "76",
        "英文题目与选项": "Which of the following are distinguishing characteristics of a managed service provider?\n(A) Be able to remotely monitor and manage objects for the customer and proactively maintain these objects under management.\n(B) Have some form of a help desk but no NOC.\n(C) Be able to remotely monitor and manage objects for the customer and reactively maintain these objects under management.\n(D) Have some form of a NOC but no help desk.",
        "中文题目与选项": "以下哪些是托管服务提供商的显著特征？\n(A) 能够远程监控和管理客户的对象，并主动维护这些对象\n(B) 有某种形式的服务台，但没有 NOC\n(C) 能够远程监控和管理客户的对象，并被动维护这些对象\n(D) 有某种形式的 NOC，但没有服务台",
        "答案": "A",
        "来源页码": 25
    },
    {
        "题号": "77",
        "英文题目与选项": "During which phase of the cloud data lifecycle is it possible for the classification of data to change?\n(A) Use\n(B) Archive\n(C) Create\n(D) Share",
        "中文题目与选项": "在云数据生命周期的哪个阶段，数据分类可能发生变化？\n(A) 使用\n(B) 归档\n(C) 创建\n(D) 共享",
        "答案": "C",
        "来源页码": 26
    },
    {
        "题号": "78",
        "英文题目与选项": "What is a data custodian responsible for?\n(A) The safe custody, transport, storage of the data, and implementation of business rules\n(B) Data content, context, and associated business rules\n(C) Logging and alerts for all data\n(D) Customer access and alerts for all data",
        "中文题目与选项": "数据保管人负责什么？\n(A) 数据的安全保管、传输、存储和业务规则的实施\n(B) 数据内容、上下文和相关业务规则\n(C) 所有数据的日志记录和警报\n(D) 所有数据的客户访问和警报",
        "答案": "A",
        "来源页码": 26
    },
    {
        "题号": "80",
        "英文题目与选项": "DLP solutions typically involve all of the following aspects except\n(A) Data discovery\n(B) Tokenization\n(C) Monitoring\n(D) Enforcement",
        "中文题目与选项": "DLP解决方案通常涉及以下所有方面，但除外：\n(A) 数据发现\n(B) Tokenization（令牌化）\n(C) 监测\n(D) 执行",
        "答案": "B",
        "来源页码": 27
    },
    {
        "题号": "81",
        "英文题目与选项": "Which process serves to prove the identity and credentials of a user requesting access to an application or data?\n(A) Repudiation\n(B) Authentication\n(C) Identification\n(D) Authorization",
        "中文题目与选项": "哪个过程用于证明请求访问应用程序或数据的用户的身份和凭据？\n(A) 否认\n(B) 认证\n(C) 识别\n(D) 授权",
        "答案": "B",
        "来源页码": 27
    },
    {
        "题号": "82",
        "英文题目与选项": "Which of the following provides assurance, to a predetermined acceptable level of certainty, that an entity is indeed who they claim to be?\n(A) Authentication\n(B) Identification\n(C) Proofing\n(D) Authorization",
        "中文题目与选项": "以下哪一项在预定的可接受的确定程度上提供保证，使一个实体确实是他们声称的那个实体？\n(A) 身份验证\n(B) 识别\n(C) 校对\n(D) 授权",
        "答案": "C",
        "来源页码": 27
    },
    {
        "题号": "83",
        "英文题目与选项": "Which of the following would be a reason to undertake a BCDR test?\n(A) Functional change of the application\n(B) Change in staff\n(C) User interface overhaul of the application\n(D) Change in regulations",
        "中文题目与选项": "以下哪项是进行 BCDR 测试的理由？\n(A) 应用程序的功能更改\n(B) 工作人员变动\n(C) 应用程序的用户界面大修\n(D) 法规的变更",
        "答案": "A",
        "来源页码": 28
    },
    {
        "题号": "84",
        "英文题目与选项": "Which of the following data protection methodologies maintains the ability to connect back values to the original values?\n(A) Tokenization\n(B) Anonymization\n(C) Obfuscation\n(D) Dynamic mapping",
        "中文题目与选项": "以下哪种数据保护方法能够将数值与原始数值联系起来？\n(A) 标记化\n(B) 匿名化\n(C) 混淆\n(D) 动态映射",
        "答案": "A",
        "来源页码": 28
    },
    {
        "题号": "85",
        "英文题目与选项": "Along with humidity, temperature is crucial to a data center for optimal operations and protection of equipment. Which of the following is the optimal temperature range as set by ASHRAE?\n(A) 69.8 to 86.0 degrees Fahrenheit (21 to 30 degrees Celsius)\n(B) 51.8 to 66.2 degrees Fahrenheit (11 to 19 degrees Celsius)\n(C) 64.4 to 80.6 degrees Fahrenheit (18 to 27 degrees Celsius)\n(D) 44.6 to 60.8 degrees Fahrenheit (7 to 16 degrees Celsius)",
        "中文题目与选项": "除了湿度外，温度对数据中心的最佳运行和设备保护至关重要。以下哪一项是 ASHRAE 设定的最佳温度范围？\n(A) 69.8 至 86.0 华氏度（21 至 30 摄氏度）\n(B) 51.8 至 66.2 华氏度（11 至 19 摄氏度）\n(C) 64.4 至 80.6 华氏度（18 至 27 摄氏度）\n(D) 44.6 至 60.8 华氏度（7 至 16 摄氏度）",
        "答案": "C",
        "来源页码": 28
    },
    {
        "题号": "86",
        "英文题目与选项": "Which of the following is the concept of segregating information or processes, within the same system or application, for security reasons?\n(A) Cell blocking\n(B) Sandboxing\n(C) Pooling\n(D) Fencing",
        "中文题目与选项": "出于安全原因，在同一系统或应用程序中隔离信息或进程的概念是以下哪一项？\n(A) 单元阻断\n(B) 沙盒\n(C) 资源池化\n(D) 围栏",
        "答案": "B",
        "来源页码": 29
    },
    {
        "题号": "87",
        "英文题目与选项": "Which of the following is the best and only completely secure method of data destruction?\n(A) Degaussing\n(B) Crypto-shredding\n(C) Physical destruction of resources that store the data\n(D) Legal order issued by the prevailing jurisdiction where the data is geographically situated",
        "中文题目与选项": "以下哪一种是最好且唯一完全安全的数据销毁方法？\n(A) 消磁\n(B) 加密粉碎\n(C) 对存储数据的资源进行物理销毁\n(D) 由数据所在地的现行司法辖区发布的法律命令",
        "答案": "C",
        "来源页码": 29
    },
    {
        "题号": "88",
        "英文题目与选项": "Which of the following is a file server that provides data access to multiple, heterogeneous machines/users on the network?\n(A) Storage area network (SAN)\n(B) Network-attached storage (NAS)\n(C) Hardware security module (HSM)\n(D) Content delivery network (CDN)",
        "中文题目与选项": "以下哪一项是为网络上的多个异构机器或用户提供数据访问的文件服务器？\n(A) 存储区域网络 (SAN)\n(B) 网络附加存储 (NAS)\n(C) 硬件安全模块 (HSM)\n(D) 内容分发网络 (CDN)",
        "答案": "B",
        "来源页码": 29
    },
    {
        "题号": "89",
        "英文题目与选项": "TLS uses which two protocols?\n(A) Handshake and Record\n(B) Transport and Initiate\n(C) Handshake and Transport\n(D) Record and Transmit",
        "中文题目与选项": "TLS 使用的两种协议是什么？\n(A) 握手和记录\n(B) 传输和启动\n(C) 握手和传输\n(D) 记录并传输",
        "答案": "A",
        "来源页码": 30
    },
    {
        "题号": "90",
        "英文题目与选项": "What is a cloud storage architecture that manages the data in a hierarchy of files?\n(A) Object-based storage\n(B) File-based storage\n(C) Database\n(D) CDN",
        "中文题目与选项": "哪种云存储架构以文件层级方式管理数据？\n(A) 基于对象的存储\n(B) 基于文件的存储\n(C) 数据库\n(D) CDN",
        "答案": "B",
        "来源页码": 30
    },
    {
        "题号": "91",
        "英文题目与选项": "What is used with a single sign-on system for authentication after the identity provider has successfully authenticated a user?\n(A) Token\n(B) Key\n(C) XML\n(D) SAML",
        "中文题目与选项": "身份提供者成功验证用户后，单点登录系统使用什么进行身份验证？\n(A) 令牌\n(B) 密钥\n(C) XML\n(D) SAML",
        "答案": "A",
        "来源页码": 30
    },
    {
        "题号": "92",
        "英文题目与选项": "Is important to maintain a current asset inventory list, including surveying your environment on a regular basis, in order to \n(A) Prevent unknown, unpatched assets from being used as backdoors into the environment\n(B) Ensure all lost devices are automatically entered into the collection system for repurchase and recovery\n(C) Maintain user morale by properly cataloging and annotating devices\n(D) Ensure all device billing is handled by the appropriate department",
        "中文题目与选项": "为了确保资产安全，定期巡查环境，维护一份最新的资产清单至关重要，为了：\n(A) 防止未知、未修补的资产被用作环境的后门\n(B) 确保所有丢失的设备都自动输入采集系统，以便重新购买和恢复\n(C) 通过对其设备进行正确的编目和注释，保持用户士气\n(D) 确保所有设备的账单由相应部门处理",
        "答案": "A",
        "来源页码": 31
    },
    {
        "题号": "93",
        "英文题目与选项": "Which aspect of cloud computing makes it very difficult to perform repeat audits over time to track changes and compliance?\n(A) Virtualization\n(B) Multitenancy\n(C) Resource pooling\n(D) Dynamic optimization",
        "中文题目与选项": "云计算的哪个方面使得随着时间的推移，很难执行重复审核以追踪更改和合规性？\n(A) 虚拟化\n(B) 多租户技术\n(C) 资源池化\n(D) 动态优化",
        "答案": "A",
        "来源页码": 31
    },
    {
        "题号": "94",
        "英文题目与选项": "What is the best approach for dealing with services or utilities that are installed on a system but not needed to perform their desired function?\n(A) Remove\n(B) Monitor\n(C) Disable\n(D) Stop",
        "中文题目与选项": "处理安装在系统上但不需要执行其所需功能的服务或实用程序的最佳方法是什么？\n(A) 删除\n(B) 监控\n(C) 禁用\n(D) 停止",
        "答案": "A",
        "来源页码": 31
    },
    {
        "题号": "95",
        "英文题目与选项": "What are the U.S. State Department controls on technology exports known as?\n(A) DRM\n(B) ITAR\n(C) EAR\n(D) EAL",
        "中文题目与选项": "美国国务院对技术出口的控制被称为什么？\n(A) DRM\n(B) ITAR\n(C) EAR\n(D) EAL",
        "答案": "B",
        "来源页码": 31
    },
    {
        "题号": "96",
        "英文题目与选项": "Which of the following is the correct sequence of steps for a BCDR plan?\n(A) Define scope, gather requirements, assess risk, implement\n(B) Define scope, gather requirements, implement, assess risk\n(C) Gather requirements, define scope, implement, assess risk\n(D) Gather requirements, define scope, assess risk, implement",
        "中文题目与选项": "如同风控管理流程一样，BCDR 规划流程有一系列明确的步骤和流程，以确保制定全面、成功的计划。以下哪项是 BCDR 计划的正确步骤顺序？\n(A) 定义范围、收集需求、评估风险、实施\n(B) 定义范围、收集需求、实施、评估风险\n(C) 收集需求、定义范围、实施、评估风险\n(D) 收集需求、定义范围、评估风险、实施",
        "答案": "A",
        "来源页码": 32
    },
    {
        "题号": "97",
        "英文题目与选项": "Which entity requires all collection and storing of data on their citizens to be done on hardware that resides within their borders?\n(A) Russia\n(B) France\n(C) Germany\n(D) United States",
        "中文题目与选项": "哪个实体要求在其境内的硬件上收集和存储其公民的所有数据？\n(A) 俄罗斯联邦\n(B) 法国\n(C) 德国\n(D) 美国",
        "答案": "A",
        "来源页码": 32
    },
    {
        "题号": "98",
        "英文题目与选项": "What does dynamic application security testing (DAST) NOT entail?\n(A) Scanning\n(B) Probing\n(C) Discovery\n(D) Knowledge of the system",
        "中文题目与选项": "动态应用程序安全测试（DAST）不需要哪项？\n(A) 扫描\n(B) 探测\n(C) 发现\n(D) 对系统的知识",
        "答案": "D",
        "来源页码": 32
    },
    {
        "题号": "99",
        "英文题目与选项": "Which of the cloud deployment models offers the easiest initial setup and access for the cloud customer?\n(A) Hybrid\n(B) Community\n(C) Private\n(D) Public",
        "中文题目与选项": "哪种云部署模型为云客户提供了最简单的初始设置和访问？\n(A) 混合云\n(B) 社区云\n(C) 私有云\n(D) 公有云",
        "答案": "D",
        "来源页码": 33
    },
    {
        "题号": "100",
        "英文题目与选项": "You are the IT director for a small contracting firm. Your company is considering migrating to a cloud production environment. Which service model would best fit your needs if you wanted an option that reduced the chance of vendor lock-in but also did not require the highest degree of administration by your own personnel?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) TanstaafL",
        "中文题目与选项": "你是一家小型承包公司的IT主管。您的公司正在考虑迁移到云生产环境。如果您想要一种既减少供应商锁定机会又不需要由自己的人员进行最高程度管理的选项，那么哪种服务模型最适合您的需求？\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) TanstaafL",
        "答案": "B",
        "来源页码": 33
    },
    {
        "题号": "101",
        "英文题目与选项": "From the perspective of compliance, what is the most important consideration when it comes to data center location?\n(A) Natural disasters\n(B) Utility access\n(C) Jurisdiction\n(D) Personnel access",
        "中文题目与选项": "从法规遵从性的角度来看，在数据中心选址方面，最重要的考虑因素是什么？\n(A) 自然灾害\n(B) 公用设施接入\n(C) 司法管辖权\n(D) 人员访问",
        "答案": "C",
        "来源页码": 33
    },
    {
        "题号": "102",
        "英文题目与选项": "What does a cloud customer purchase or obtain from a cloud provider?\n(A) Services\n(B) Hosting\n(C) Servers\n(D) Customers",
        "中文题目与选项": "云客户从云提供商购买或获得什么？\n(A) 服务\n(B) 托管\n(C) 服务器\n(D) 客户",
        "答案": "A",
        "来源页码": 34
    },
    {
        "题号": "103",
        "英文题目与选项": "Which of the following threat types involves an application developer leaving references to internal information and configurations in code that is exposed to the client?\n(A) Sensitive data exposure\n(B) Security misconfiguration\n(C) Insecure direct object references\n(D) Unvalidated redirect and forwards",
        "中文题目与选项": "以下哪种威胁类型涉及应用程序开发人员在向客户端公开的代码中保留对内部信息和配置的引用？\n(A) 敏感数据泄露\n(B) 安全配置错误\n(C) 不安全的直接对象引用\n(D) 未验证的重定向和转发",
        "答案": "C",
        "来源页码": 34
    },
    {
        "题号": "105",
        "英文题目与选项": "What provides the information to an application to make decisions about the authorization level appropriate when granting access?\n(A) User\n(B) Relying party\n(C) Federation\n(D) Identity Provider",
        "中文题目与选项": "什么为应用程序提供信息，以便在授予访问权限时决定适当的授权级别？\n(A) 使用者\n(B) 依赖方\n(C) 联合\n(D) 身份提供方",
        "答案": "D",
        "来源页码": 35
    },
    {
        "题号": "106",
        "英文题目与选项": "What is the best source for information about securing a physical asset's BIOS?\n(A) Security policies\n(B) Manual pages\n(C) Vendor documentation\n(D) Regulations",
        "中文题目与选项": "有关保护物理资产 BIOS 的信息的最佳来源是什么？\n(A) 安全策略\n(B) 手册页面\n(C) 供应商文档\n(D) 法规",
        "答案": "C",
        "来源页码": 35
    },
    {
        "题号": "107",
        "英文题目与选项": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity.\nThis is an example of\n(A) Cloud framing\n(B) Cloud enhancement\n(C) Cloud fragility\n(D) Cloud bursting",
        "中文题目与选项": "你是一家零售公司的数据经理，预期每个日历年的最后一个季度的销售活动量将远高于其他季度。为了应对这些增加的交易，并容纳你在该期间内临时雇佣的销售人员，你考虑在特定时间段内用云能力增强内部的本地生产环境，并在活动增加期结束后恢复完全本地运行。这是以下哪种情况的例子？\n(A) 云框架\n(B) 云增强\n(C) 云脆弱性\n(D) 云突发",
        "答案": "D",
        "来源页码": 35
    },
    {
        "题号": "108",
        "英文题目与选项": "Digital investigations have adopted many of the same methodologies and protocols as other types of criminal or scientific inquiries.\nWhat term pertains to the application of scientific norms and protocols to digital investigations?\n(A) Scientific\n(B) Investigative\n(C) Methodological\n(D) Forensics",
        "中文题目与选项": "数字调查采用了许多与其他类型的刑事或科学调查相同的方法和协议。\n什么术语与科学规范和协议在数字调查中的应用有关？\n(A) 科学的\n(B) 调查的\n(C) 方法论的\n(D) 法医学的",
        "答案": "D",
        "来源页码": 36
    },
    {
        "题号": "109",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes “cross-site scripting (XSS).”\nWhich of the following is not a method for reducing the risk of XSS attacks?\n(A) Use an auto-escaping template system\n(B) XML escape all identity assertions\n(C) Sanitize HTML markup with a library designed for the purpose\n(D) HTML escape JSON values in an HTML context and read the data with JSON.parse",
        "中文题目与选项": "开放式 Web 应用程序安全项目 (OWASP) 十大威胁是一份由应用程序开发专家组成的成员驱动的 OWASP 委员会编制的网页应用安全威胁清单，大约每 24 个月发布一次。2013 年的 OWASP 十大榜单包括“跨站点脚本（XSS）”。\n以下哪一项不是降低 XSS 攻击风险的方法？\n(A) 使用自动转义模板系统\n(B) 对所有身份断言进行 XML 转义\n(C) 使用专门设计的库对 HTML 标记进行清理\n(D) 在 HTML 环境中对 JSON 值进行 HTML 转义并使用 JSON.parse 读取数据",
        "答案": "B",
        "来源页码": 36
    },
    {
        "题号": "110",
        "英文题目与选项": "In addition to BCDR what other benefit can your data archive/backup provide?\n(A) Physical security enforcement\n(B) Access control methodology\n(C) Security control against data breach\n(D) Identity management testing",
        "中文题目与选项": "除了 BCDR，您的数据归档/备份还可以提供哪些好处？\n(A) 物理安全强制执行\n(B) 访问控制方法\n(C) 针对数据泄露的安全控制\n(D) 身份管理测试",
        "答案": "D",
        "来源页码": 37
    },
    {
        "题号": "111",
        "英文题目与选项": "The physical layout of a cloud data center campus should include redundancies of all the following except\n(A) Physical perimeter security controls (fences, lights, walls, etc.)\n(B) The administration/support staff building\n(C) Electrical utility lines\n(D) Communications connectivity lines",
        "中文题目与选项": "云数据中心园区的物理布局应包括以下所有冗余，但除外：\n(A) 物理周界安全控制（围栏、灯光、墙壁等）\n(B) 管理/支持人员大楼\n(C) 电力公用线路\n(D) 通信连接线路",
        "答案": "B",
        "来源页码": 37
    },
    {
        "题号": "112",
        "英文题目与选项": "Most APIs will support a variety of different data formats or structures. However, the SOAP API will only support which one of the following data formats?\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "中文题目与选项": "大多数 API 将支持多种不同的数据格式或结构。然而，SOAP API 只支持以下哪一种数据格式？\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "答案": "A",
        "来源页码": 37
    },
    {
        "题号": "113",
        "英文题目与选项": "When monitoring data in transit, where is the DLP solution usually installed?\n(A) Network perimeter\n(B) —\n(C) Application server\n(D) Web server",
        "中文题目与选项": "用于监控传输中的数据时，DLP解决方案通常安装在何处？\n(A) 网络周界\n(B) —\n(C) 应用程序服务器\n(D) Web服务器",
        "答案": "A",
        "来源页码": 38
    },
    {
        "题号": "114",
        "英文题目与选项": "With a cloud service category where the cloud customer is provided a full application framework into which to deploy their code and services, which storage types are MOST likely to be available to them?\n(A) Structured and unstructured\n(B) Structured and hierarchical\n(C) Volume and database\n(D) Volume and object",
        "中文题目与选项": "在云服务类别中，为云客户提供了一个完整的应用程序框架，可将其代码和服务部署到该框架中，这些存储类型最可能为他们所用？\n(A) 结构化和非结构化\n(B) 结构化和分级\n(C) 卷和数据库\n(D) 卷和对象",
        "答案": "A",
        "来源页码": 38
    },
    {
        "题号": "115",
        "英文题目与选项": "Digital rights management (DRM) tools can be combined with _______ to enhance security capabilities.\n(A) Roaming identity services (RIS)\n(B) Egress monitoring solutions (DLP)\n(C) Internal hardware settings (BIOS)\n(D) Remote Authentication Dial-In User Service (RADIUS)",
        "中文题目与选项": "数字版权管理 (DRM) 工具可以与________ 结合，以增强安全能力。\n(A) 漫游身份服务 (RIS)\n(B) 出口监控解决方案 (DLP)\n(C) 内部硬件设置 (BIOS)\n(D) 远程认证拨入用户服务 (RADIUS)",
        "答案": "B",
        "来源页码": 38
    },
    {
        "题号": "116",
        "英文题目与选项": "Which of the following threat types can occur when baselines are not appropriately applied or when unauthorized changes are made?\n(A) Security misconfiguration\n(B) Insecure direct object references\n(C) Unvalidated redirects and forwards\n(D) Sensitive data exposure",
        "中文题目与选项": "当基线未正确应用或发生未经授权的更改时，下列哪种威胁类型可能发生？\n(A) 安全配置错误\n(B) 不安全的直接对象引用\n(C) 未验证的重定向和转发\n(D) 敏感数据泄露",
        "答案": "A",
        "来源页码": 38
    },
    {
        "题号": "117",
        "英文题目与选项": "If a company needed to guarantee through contract and SLAs that a cloud provider would always have available sufficient resources to start their services and provide a certain level of provisioning, what would the contract need to refer to?\n(A) Limit\n(B) Reservation\n(C) Assurance\n(D) Guarantee",
        "中文题目与选项": "如果一家公司需要通过合同和SLA保证云提供商始终有足够的资源来启动其服务并提供一定级别的资源调配，那么合同需要指什么？\n(A) 限制\n(B) 保留\n(C) 保证\n(D) 担保",
        "答案": "B",
        "来源页码": 39
    },
    {
        "题号": "118",
        "英文题目与选项": "What type of security threat is DNSSEC designed to prevent?\n(A) Account hijacking\n(B) Snooping\n(C) Spoofing\n(D) Injection",
        "中文题目与选项": "DNSSEC旨在防止哪种类型的安全威胁？\n(A) 账户劫持\n(B) 窃听\n(C) 欺骗\n(D) 注入",
        "答案": "C",
        "来源页码": 39
    },
    {
        "题号": "119",
        "英文题目与选项": "Which part of ITIL involves planning to recover services after an unexpected outage or incident?\n(A) Continuity management\n(B) Problem management\n(C) Configuration management\n(D) Availability management",
        "中文题目与选项": "ITIL 的哪一部分涉及在意外停机或事故后规划恢复服务？\n(A) 连续性管理\n(B) 问题管理\n(C) 配置管理\n(D) 可用性管理",
        "答案": "A",
        "来源页码": 40
    },
    {
        "题号": "120",
        "英文题目与选项": "One of the security challenges of operating in the cloud is that additional controls must be placed on file storage systems because:\n(A) File stores are always kept in plain text in the cloud\n(B) There is no way to sanitize file storage space in the cloud\n(C) Virtualization necessarily prevents the use of application-based security controls\n(D) Virtual machines are stored as snapshotted files when not in use",
        "中文题目与选项": "在云中操作的安全挑战之一是，由于某种原因，必须对文件存储系统进行额外控制：\n(A) 文件存储始终以明文形式保存在云中\n(B) 无法清理云中的文件存储空间\n(C) 虚拟化必然会阻止使用基于应用程序的安全控制\n(D) 虚拟机在不使用时存储为快照文件",
        "答案": "D",
        "来源页码": 40
    },
    {
        "题号": "121",
        "英文题目与选项": "Which of the cloud deployment models offers the most control and input to the cloud customer as to how the overall cloud environment is implemented and configured?\n(A) Public\n(B) Community\n(C) Hybrid\n(D) Private",
        "中文题目与选项": "在如何实现和配置整个云环境方面，哪些云部署模型为云客户提供了最多的控制和输入？\n(A) 公有云\n(B) 社区云\n(C) 混合云\n(D) 私有云",
        "答案": "D",
        "来源页码": 40
    },
    {
        "题号": "122",
        "英文题目与选项": "(A). Trademark\n(B). Copyright\n(C). Patent\n(D). Trade secret",
        "中文题目与选项": "什么是有助于促进产业创新的知识产权保护？\n(A) 商标\n(B) 版权\n(C) 专利\n(D) 商业秘密",
        "答案": "C",
        "来源页码": 41
    },
    {
        "题号": "123",
        "英文题目与选项": "What’s used for local, physical access to hardware within a data center?\n(A). SSH\n(B). KVM\n(C). VPN\n(D). RDP",
        "中文题目与选项": "数据中心内的硬件的本地物理访问使用什么？\n(A) SSH\n(B) KVM\n(C) VPN\n(D) RDP",
        "答案": "B",
        "来源页码": 41
    },
    {
        "题号": "124",
        "英文题目与选项": "Which of the following best describes data masking?\n(A). A method for creating similar but inauthentic datasets used for software testing and user training.\n(B). A method used to protect prying eyes from data such as social security numbers and credit card data.\n(C). A method where the last few numbers in a dataset are not obscured. These are often used for authentication.\n(D). Data masking involves stripping out all digits in a string of numbers so as to obscure the original number.",
        "中文题目与选项": "以下哪项最能描述数据屏蔽？\n(A) 一种创建类似但不真实的数据集的方法，用于软件测试和用户培训。\n(B) 一种用于保护数据免受窥探者攻击的方法，例如社会安全号码和信用卡数据。\n(C) 一种方法，其中数据集中最后几个数字不会被隐藏，这些通常用于身份验证。\n(D) 数据屏蔽包括去除数字串中的所有数字，以掩盖原始数字。",
        "答案": "A",
        "来源页码": 41
    },
    {
        "题号": "126",
        "英文题目与选项": "What type of segregation and separation of resources is needed within a cloud environment for multitenancy purposes versus a traditional data center model?\n(A) Virtual\n(B) Security\n(C) Physical\n(D) Logical",
        "中文题目与选项": "与传统的数据中心模型相比，云环境中的多租户需要哪种类型的资源隔离和分离？\n(A) 虚拟\n(B) 安全\n(C) 物理\n(D) 逻辑",
        "答案": "D",
        "来源页码": 42
    },
    {
        "题号": "127",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes 'unvalidated redirects and forwards.' Which of the following is a good way to protect against this problem?\n(A) Don't use redirects/forwards in your applications.\n(B) Refrain from storing credentials long term.\n(C) Implement security incident/event monitoring (security information and event management (SIEM)/security information management (SIM)/security event management (SEM)) solutions.\n(D) Implement digital rights management (DRM) solutions.",
        "中文题目与选项": "开放式 Web 应用程序安全项目（OWASP）前十名是一份由应用程序开发专家组成的成员驱动型 OWASP 委员会编制的 Web 应用程序安全威胁列表，大约每 24 个月发布一次。2013 年的 OWASP 前十名列表中包括“未经验证的重定向和转发”。以下哪一项是防止此问题的好方法？\n(A) 不要在应用程序中使用重定向/转发。\n(B) 避免长期存储凭据。\n(C) 实施安全事件监控（安全信息与事件管理 (SIEM)/安全信息管理 (SIM)/安全事件管理 (SEM)）解决方案。\n(D) 实施数字版权管理 (DRM) 解决方案。",
        "答案": "A",
        "来源页码": 42
    },
    {
        "题号": "128",
        "英文题目与选项": "Typically, SSDs are:\n(A) More expensive than spinning platters\n(B) Larger than tape backup\n(C) Heavier than tape libraries\n(D) More subject to malware than legacy drives",
        "中文题目与选项": "通常情况下，SSD 具有以下特征：\n(A) 比磁盘盘片更昂贵\n(B) 比磁带备份更大\n(C) 比磁带库更重\n(D) 比传统驱动器更容易受到恶意软件影响",
        "答案": "A",
        "来源页码": 42
    },
    {
        "题号": "129",
        "英文题目与选项": "A bare-metal hypervisor is Type \n(A) 1\n(B) 2\n(C) 3\n(D) 4",
        "中文题目与选项": "裸机管理程序为哪一型？\n(A) 1 型\n(B) 2 型\n(C) 3 型\n(D) 4 型",
        "答案": "A",
        "来源页码": 43
    },
    {
        "题号": "130",
        "英文题目与选项": "Which cloud storage type requires special consideration on the part of the cloud customer to ensure they do not program themselves into a vendor lock-in situation?\n(A) Unstructured\n(B) Object\n(C) Volume\n(D) Structured",
        "中文题目与选项": "哪种云存储类型需要云客户特别考虑，以确保他们不会将自己编程为供应商锁定状态？\n(A) 非结构化\n(B) 对象\n(C) 卷\n(D) 结构化",
        "答案": "D",
        "来源页码": 43
    },
    {
        "题号": "131",
        "英文题目与选项": "Web application firewalls (WAFs) are designed primarily to protect applications from common attacks like:\n(A) Ransomware\n(B) SYN floods\n(C) XSS and SQL injection\n(D) Password cracking",
        "中文题目与选项": "Web 应用程序防火墙（WAF）主要用于保护应用程序免受以下常见攻击：\n(A) 勒索软件\n(B) SYN 洪水攻击\n(C) XSS 和 SQL 注入\n(D) 密码破解",
        "答案": "C",
        "来源页码": 43
    },
    {
        "题号": "132",
        "英文题目与选项": "For performance purposes, OS monitoring should include all of the following except:\n(A) Disk space\n(B) Disk I/O usage\n(C) CPU usage\n(D) Print spooling",
        "中文题目与选项": "出于性能目的，操作系统监控应包括以下所有内容，但不包括：\n(A) 磁盘空间\n(B) 磁盘I/O使用情况\n(C) CPU使用率\n(D) 打印后台服务",
        "答案": "D",
        "来源页码": 44
    },
    {
        "题号": "133",
        "英文题目与选项": "What is the amount of fuel that should be on hand to power generators for backup datacenter power, in all tiers, according to the Uptime Institute?\n(A) 1\n(B) 1,000 gallons\n(C) 12 hours\n(D) As much as needed to ensure all systems may be gracefully shut down and data securely stored",
        "中文题目与选项": "根据Uptime Institute的数据，所有级别的备用数据中心电源的发电机所需的燃料量是多少？\n(A) 1\n(B) 1000加仑\n(C) 12小时\n(D) 尽可能多，以确保所有系统能够正常关闭并安全存储数据",
        "答案": "C",
        "来源页码": 44
    },
    {
        "题号": "134",
        "英文题目与选项": "Which of the following is not a component of the STRIDE model?\n(A) Spoofing\n(B) Repudiation\n(C) Information disclosure\n(D) External pen testing",
        "中文题目与选项": "以下哪项不是STRIDE模型的组成部分？\n(A) 欺骗\n(B) 否认\n(C) 信息泄露\n(D) 外部渗透测试",
        "答案": "D",
        "来源页码": 44
    },
    {
        "题号": "135",
        "英文题目与选项": "Which term relates to the application of scientific methods and practices to evidence?\n(A) Forensics\n(B) Methodical\n(C) Theoretical\n(D) Measured",
        "中文题目与选项": "哪个术语与科学方法和实践应用于证据有关？\n(A) 取证\n(B) 系统性\n(C) 理论的\n(D) 衡量的",
        "答案": "A",
        "来源页码": 45
    },
    {
        "题号": "136",
        "英文题目与选项": "Which of the following is NOT a function performed by the handshake protocol of TLS?\n(A) Key exchange\n(B) Encryption\n(C) Negotiation of connection\n(D) Establish session ID",
        "中文题目与选项": "以下哪个选项不是 TLS 握手协议执行的功能？\n(A) 密钥交换\n(B) 加密\n(C) 连接协商\n(D) 建立会话 ID",
        "答案": "B",
        "来源页码": 45
    },
    {
        "题号": "137",
        "英文题目与选项": "Which of the following technologies is used to monitor network traffic and notify if any potential threats or attacks are noticed?\n(A) IPS\n(B) WAF\n(C) Firewall\n(D) IDS",
        "中文题目与选项": "以下哪种技术用于监控网络流量，并在发现任何潜在威胁或攻击时发出通知？\n(A) 入侵防御系统 (IPS)\n(B) 网络应用防火墙 (WAF)\n(C) 防火墙\n(D) 入侵检测系统 (IDS)",
        "答案": "D",
        "来源页码": 45
    },
    {
        "题号": "138",
        "英文题目与选项": "What aspect of a Type 2 hypervisor involves additional security concerns that are not relevant with a Type 1 hypervisor?\n(A) Reliance on a host operating system\n(B) Auditing\n(C) Proprietary software\n(D) Programming languages",
        "中文题目与选项": "与类型 1 系统管理程序无关的、涉及额外安全问题的类型 2 系统管理程序的哪个方面？\n(A) 对主机操作系统的依赖\n(B) 审计\n(C) 专有软件\n(D) 编程语言",
        "答案": "A",
        "来源页码": 45
    },
    {
        "题号": "139",
        "英文题目与选项": "Which of the following is NOT one of five principles of SOC Type 2 audits?\n(A) Privacy\n(B) Processing integrity\n(C) Financial\n(D) Security",
        "中文题目与选项": "以下哪项不是 SOC 2 类审计的五项原则之一？\n(A) 隐私\n(B) 处理完整性\n(C) 财务\n(D) 安全",
        "答案": "C",
        "来源页码": 46
    },
    {
        "题号": "140",
        "英文题目与选项": "Legal controls refer to which of the following?\n(A) ISO 27001\n(B) PCI DSS\n(C) NIST 800-53r4\n(D) Controls designed to comply with laws and regulations related to the cloud environment",
        "中文题目与选项": "法律控制指以下哪一项？\n(A) ISO 27001 标准\n(B) PCI DSS\n(C) NIST 800-53r4\n(D) 为遵守与云环境相关的法律法规而设计的控制措施",
        "答案": "D",
        "来源页码": 46
    },
    {
        "题号": "141",
        "英文题目与选项": "Which of the following is NOT one of the cloud computing activities, as outlined in ISO/IEC 17789?\n(A) Cloud service provider\n(B) Cloud service partner\n(C) Cloud service administrator\n(D) Cloud service customer",
        "中文题目与选项": "以下哪项不是 ISO/IEC 17789 中概述的云计算活动之一？\n(A) 云服务提供者\n(B) 云服务合作伙伴\n(C) 云服务管理员\n(D) 云服务客户",
        "答案": "C",
        "来源页码": 46
    },
    {
        "题号": "142",
        "英文题目与选项": "Which of the following is the primary purpose of an SOC 3 report?\n(A) HIPAA compliance\n(B) Absolute assurances\n(C) Seal of approval\n(D) Compliance with PCI/DSS",
        "中文题目与选项": "以下哪项是 SOC 3 报告的主要目的？\n(A) 符合 HIPAA 要求\n(B) 绝对保证\n(C) 认证认可\n(D) 符合 PCI/DSS 要求",
        "答案": "C",
        "来源页码": 47
    },
    {
        "题号": "143",
        "英文题目与选项": "The cloud deployment model that features organizational ownership of the hardware and infrastructure, and usage only by members of that organization, is known as:\n(A) Private\n(B) Public\n(C) Hybrid\n(D) Motive",
        "中文题目与选项": "云部署模型以硬件和基础设施的组织所有权为特征，并仅由该组织的成员使用，称为：\n(A) 私有的\n(B) 公共的\n(C) 混合的\n(D) 动机",
        "答案": "A",
        "来源页码": 47
    },
    {
        "题号": "144",
        "英文题目与选项": "Although host-based and network-based IDSs perform similar functions and have similar capabilities, which of the following is an advantage of a network-based IDS over a host-based IDS, assuming all capabilities are equal?\n(A) Segregated from host systems\n(B) Network access\n(C) Scalability\n(D) External to system patching",
        "中文题目与选项": "尽管基于主机的 IDS 和基于网络的 IDS 执行类似功能并具备相似能力，但假设所有功能都相同，以下哪项是基于网络的入侵检测系统优于基于主机的入侵检测系统的优势？\n(A) 与主机系统隔离\n(B) 网络访问\n(C) 可扩展性\n(D) 外部系统补丁",
        "答案": "A",
        "来源页码": 47
    },
    {
        "题号": "145",
        "英文题目与选项": "What is the cloud service model in which the customer is responsible for administration of the OS?\n(A) SaaS\n(B) PaaS\n(C) IaaS\n(D) None",
        "中文题目与选项": "客户负责管理操作系统的云服务模型是什么？\n(A) SaaS\n(B) PaaS\n(C) IaaS\n(D) 无",
        "答案": "C",
        "来源页码": 48
    },
    {
        "题号": "146",
        "英文题目与选项": "Cloud environments pose many unique challenges for a data custodian to properly adhere to policies and the use of data. What poses the biggest challenge for a data custodian with a PaaS implementation, over and above the same concerns with IaaS?\n(A) Access to systems\n(B) Knowledge of systems\n(C) Data classification rules\n(D) Contractual requirements",
        "中文题目与选项": "云环境为数据保管人正确遵守政策和使用数据带来了许多独特的挑战。对于拥有 PaaS 实施的数据保管人来说，除了 IaaS 的担忧之外，最大的挑战是什么？\n(A) 系统访问\n(B) 系统知识\n(C) 数据分类规则\n(D) 合同要求",
        "答案": "B",
        "来源页码": 48
    },
    {
        "题号": "147",
        "英文题目与选项": "In the cloud model, the data owner is usually:\n(A) The cloud provider\n(B) In another jurisdiction\n(C) The cloud customer\n(D) The cloud access security broker",
        "中文题目与选项": "在云模型中，数据所有者通常是：\n(A) 云提供商\n(B) 位于其他司法管辖区\n(C) 云客户\n(D) 云访问安全代理",
        "答案": "C",
        "来源页码": 48
    },
    {
        "题号": "148",
        "英文题目与选项": "Which type of web application monitoring most closely measures actual user activity?\n(A) Synthetic performance monitoring\n(B) Real-user monitoring (RUM)\n(C) Security information and event management (SIEM)\n(D) Database application monitor (DAM)",
        "中文题目与选项": "哪种类型的 web 应用程序监控最密切地衡量实际用户活动？\n(A) 综合性能监测\n(B) 实时用户监控 (RUM)\n(C) 安全信息和事件管理 (SIEM)\n(D) 数据库应用程序监视器 (DAM)",
        "答案": "B",
        "来源页码": 49
    },
    {
        "题号": "149",
        "英文题目与选项": "To address shared monitoring and testing responsibilities in a cloud configuration, the provider might offer all these to the cloud customer except:\n(A) Access to audit logs and performance data\n(B) DLP solution results\n(C) Security control administration\n(D) SIM, SIEM, and SEM logs",
        "中文题目与选项": "为了解决云配置中共享的监控和测试责任，提供商可以向云客户提供以下所有内容，但以下情况除外：\n(A) 访问审计日志和性能数据\n(B) DLP 解决方案结果\n(C) 安全控制管理\n(D) SIM、SIEM 和 SEM 日志",
        "答案": "C",
        "来源页码": 49
    },
    {
        "题号": "150",
        "英文题目与选项": "Which data protection strategy would be useful for a situation where the ability to remove sensitive data from a set is needed, but a requirement to retain the ability to map back to the original values is also present?\n(A) Masking\n(B) Tokenization\n(C) Encryption\n(D) Anonymization",
        "中文题目与选项": "在需要从数据集中删除敏感数据，但同时需要保留映射回原始值的能力的情况下，哪种数据保护策略最有用？\n(A) 屏蔽\n(B) 标记化\n(C) 加密\n(D) 匿名化",
        "答案": "B",
        "来源页码": 49
    },
    {
        "题号": "151",
        "英文题目与选项": "Which of the following, except for one, is typically a non-functional requirement?\n(A) Performance\n(B) Sound\n(C) Security\n(D) Function",
        "中文题目与选项": "除（ ）外，以下所有要求通常为非功能性要求。\n(A) 性能\n(B) 声音\n(C) 安全\n(D) 功能",
        "答案": "D",
        "来源页码": 50
    },
    {
        "题号": "152",
        "英文题目与选项": "Which of the following would be considered an example of insufficient due diligence leading to security or operational problems when moving to a cloud?\n(A) Monitoring\n(B) Use of a remote key management system\n(C) Programming languages used\n(D) Reliance on physical network controls",
        "中文题目与选项": "以下哪一项将被视为在迁移到云时尽职调查不足导致安全或操作问题的示例？\n(A) 监测\n(B) 使用远程密钥管理系统\n(C) 使用编程语言\n(D) 对物理网络控制的依赖",
        "答案": "D",
        "来源页码": 50
    },
    {
        "题号": "153",
        "英文题目与选项": "A denial of service (DoS) attack can potentially impact all customers within a cloud environment with the continued allocation of additional resources. Which of the following can be useful for a customer to protect themselves from a DoS attack against another customer?\n(A) Limits\n(B) Reservations\n(C) Shares\n(D) Borrows",
        "中文题目与选项": "拒绝服务（DoS）攻击可能会影响云环境中的所有客户，因为它会持续分配额外的资源。以下哪项措施可用于帮助客户防止因其他客户遭受 DoS 攻击而受到影响？\n(A) 限额\n(B) 预留\n(C) 共享\n(D) 借用",
        "答案": "B",
        "来源页码": 50
    },
    {
        "题号": "154",
        "英文题目与选项": "Encryption can help an organization reduce the likelihood of data breach incidents, but it can also increase which other type of threat?\n(A) Insecure interfaces\n(B) Data loss\n(C) System vulnerabilities\n(D) Account hijacking",
        "中文题目与选项": "加密可以帮助组织有效减少数据泄露的可能性，但它还会增加哪种类型的威胁？\n(A) 不安全的接口\n(B) 数据丢失\n(C) 系统漏洞\n(D) 账户劫持",
        "答案": "B",
        "来源页码": 51
    },
    {
        "题号": "155",
        "英文题目与选项": "Which of the following attempts to establish an international standard for eDiscovery processes and best practices?\n(A) ISO/IEC 31000 Standard\n(B) ISO/IEC 27050 Standard\n(C) ISO/IEC 19888 Standard\n(D) ISO/IEC 27001 Standard",
        "中文题目与选项": "以下哪项尝试为 eDiscovery 流程和最佳做法建立国际标准？\n(A) ISO/IEC 31000 标准\n(B) ISO/IEC 27050 标准\n(C) ISO/IEC 19888 标准\n(D) ISO/IEC 27001 标准",
        "答案": "B",
        "来源页码": 51
    },
    {
        "题号": "156",
        "英文题目与选项": "Which aspect of data poses the biggest challenge to using automated tools for data discovery and programmatic data classification?\n(A) Quantity\n(B) Language\n(C) Quality\n(D) Number of courses",
        "中文题目与选项": "使用自动化工具进行数据发现和程序化数据分类时，数据的哪个方面是最大的挑战？\n(A) 数量\n(B) 语言\n(C) 质量\n(D) 课程数量",
        "答案": "C",
        "来源页码": 51
    },
    {
        "题号": "157",
        "英文题目与选项": "Any organization must make a key decision about where its data systems will reside. There is debate about whether it is better to lease space in a data center or build its own data center, and now, with cloud computing, whether to purchase resources in the cloud. Compared with purchasing cloud services, what is the greatest advantage of leasing data center space?\n(A) Legal\n(B) Control\n(C) Security\n(D) Costs",
        "中文题目与选项": "任何一家公司都必须做出的一个关键决定是其所依赖的数据系统的所在地。对于是租用数据中心的空间还是建立自己的数据中心，以及现在的云计算，是否购买云中的资源，存在争论。与购买云服务相比，租赁数据中心空间的最大优势是什么？\n(A) 法规\n(B) 控制\n(C) 安全\n(D) 成本",
        "答案": "B",
        "来源页码": 52
    },
    {
        "题号": "158",
        "英文题目与选项": "A virtual network interface card (NIC) exists at which layer of the OSI model?\n(A) 2\n(B) 4\n(C) 6\n(D) 8",
        "中文题目与选项": "虚拟网络接口卡（NIC）存在于OSI模型的哪一层？\n(A) 第2层\n(B) 第4层\n(C) 第6层\n(D) 第8层",
        "答案": "A",
        "来源页码": 52
    },
    {
        "题号": "159",
        "英文题目与选项": "What type of identity system allows trust and verification between the authentication systems of multiple organizations?\n(A) Federated\n(B) Collaborative\n(C) Integrated\n(D) Bidirectional",
        "中文题目与选项": "什么类型的身份系统允许多个组织的身份验证系统之间实现信任和验证？\n(A) 联合\n(B) 协作\n(C) 集成\n(D) 双向",
        "答案": "A",
        "来源页码": 52
    },
    {
        "题号": "160",
        "英文题目与选项": "Which SSAE 16 report is purposefully designed for public release (for instance, to be posted on a company's website)?\n(A) SOC 1\n(B) SOC 2, Type 1\n(C) SOC 2, Type 2\n(D) SOC 3",
        "中文题目与选项": "哪一份 SSAE 16 报告是专门设计用于公开发布的（例如发布在公司网站上）？\n(A) SOC 1\n(B) SOC 2，类型 1\n(C) SOC 2，类型 2\n(D) SOC 3",
        "答案": "D",
        "来源页码": 52
    },
    {
        "题号": "161",
        "英文题目与选项": "All of the following might be used as data discovery characteristics in a content-analysis-based data discovery effort except:\n(A) Keywords\n(B) Pattern-matching\n(C) Frequency\n(D) Inheritance",
        "中文题目与选项": "以下所有内容都可以用作基于内容分析的数据发现工作中的数据发现特征，但不包括：\n(A) 关键词\n(B) 模式匹配\n(C) 频率\n(D) 继承",
        "答案": "D",
        "来源页码": 53
    },
    {
        "题号": "162",
        "英文题目与选项": "Tokenization requires two distinct:\n(A) Authentication factors\n(B) Personnel\n(C) Databases\n(D) Encryption",
        "中文题目与选项": "标记化需要两个不同的：\n(A) 身份验证因素\n(B) 人员\n(C) 数据库\n(D) 加密",
        "答案": "C",
        "来源页码": 53
    },
    {
        "题号": "163",
        "英文题目与选项": "The European Union passed the first major regulation declaring data privacy to be a human right. In what year did it go into effect?\n(A) 2010\n(B) 2000\n(C) 1995\n(D) 1990",
        "中文题目与选项": "欧盟通过了第一项重大法规，宣布数据隐私是一项人权。它是在哪一年生效的？\n(A) 2010 年\n(B) 2000 年\n(C) 1995 年\n(D) 1990 年",
        "答案": "C",
        "来源页码": 53
    },
    {
        "题号": "164",
        "英文题目与选项": "(A) Main\n(B) RPO\n(C) SRE\n(D) RTO",
        "中文题目与选项": "恢复时间目标（RTO）是灾难恢复的关键指标。\n(A) 主\n(B) RPO\n(C) SRE\n(D) RTO",
        "答案": "D",
        "来源页码": 54
    },
    {
        "题号": "165",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "以下哪项不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 54
    },
    {
        "题号": "166",
        "英文题目与选项": "Which of the following is the MOST important requirement and guidance for testing during an audit?\n(A) Stakeholders\n(B) Shareholders\n(C) Management\n(D) Regulations",
        "中文题目与选项": "以下哪项是审计期间测试的最重要要求和指导？\n(A) 利益相关者\n(B) 股东\n(C) 管理层\n(D) 法规",
        "答案": "D",
        "来源页码": 54
    },
    {
        "题号": "167",
        "英文题目与选项": "What is an often overlooked concept that is essential to protecting the confidentiality of data?\n(A) Strong password\n(B) Training\n(C) Security controls\n(D) Policies",
        "中文题目与选项": "对于保护数据机密性至关重要但经常被忽视的概念是什么？\n(A) 强密码\n(B) 培训\n(C) 安全控制\n(D) 政策",
        "答案": "B",
        "来源页码": 54
    },
    {
        "题号": "168",
        "英文题目与选项": "What is the main reason virtualization is used in the cloud?\n(A) VMs are easier to administer\n(B) If a VM is infected with malware, it can be easily replaced\n(C) With VMs the cloud provider does not have to deploy an entire hardware device for every new user\n(D) VMs are easier to operate than actual devices",
        "中文题目与选项": "在云中使用虚拟化的主要原因是什么？\n(A) 虚拟机更易于管理\n(B) 如果虚拟机感染了恶意软件，可以很容易地更换\n(C) 使用虚拟机，云提供商不必为每个新用户部署整套硬件设备\n(D) 虚拟机比实际设备更易于操作",
        "答案": "C",
        "来源页码": 55
    },
    {
        "题号": "169",
        "英文题目与选项": "What sort of legal enforcement may the Payment Card Industry (PCI) Security Standards Council not bring to bear against organizations that fail to comply with the Payment Card Industry Data Security Standard (PCI DSS)?\n(A) Fines\n(B) Jail time\n(C) Suspension of credit card processing privileges\n(D) Subject to increased audit frequency and scope",
        "中文题目与选项": "支付卡行业（PCI）安全标准委员会无法对未遵守支付卡行业数据安全标准（PCI DSS）的组织实施哪种法律强制措施？\n(A) 罚款\n(B) 监禁\n(C) 暂停信用卡处理特权\n(D) 增加审计频率和范围",
        "答案": "B",
        "来源页码": 55
    },
    {
        "题号": "170",
        "英文题目与选项": "Which of the following approaches would NOT be considered sufficient to meet the requirements of secure data destruction within a cloud environment?\n(A) Cryptographic erasure\n(B) Zeroing\n(C) Overwriting\n(D) Deletion",
        "中文题目与选项": "以下哪种方法不足以满足云环境中安全数据销毁的要求？\n(A) 加密擦除\n(B) 写零处理\n(C) 覆盖写入\n(D) 删除",
        "答案": "D",
        "来源页码": 55
    },
    {
        "题号": "171",
        "英文题目与选项": "Which security concept is based on preventing unauthorized access to data while also ensuring that it is accessible to those authorized to use it?\n(A) Integrity\n(B) Availability\n(C) Confidentiality\n(D) Nonrepudiation",
        "中文题目与选项": "哪种安全概念基于防止未经授权访问数据，同时确保被授权使用数据的人可以访问数据？\n(A) 完整性\n(B) 可用性\n(C) 机密性\n(D) 不可否认性",
        "答案": "C",
        "来源页码": 56
    },
    {
        "题号": "172",
        "英文题目与选项": "If a key feature of cloud computing that your organization desires is the ability to scale and expand without limit or concern about available resources, which cloud deployment model would you MOST likely be considering?\n(A) Public\n(B) Hybrid\n(C) Private\n(D) Community",
        "中文题目与选项": "如果贵组织期望云计算的一个关键特性是能够无限制地扩展，而无需担心可用资源的问题，那么最可能考虑的云部署模型是哪一种？\n(A) 公有云\n(B) 混合云\n(C) 私有云\n(D) 社区云",
        "答案": "A",
        "来源页码": 56
    },
    {
        "题号": "173",
        "英文题目与选项": "What are the four cloud deployment models?\n(A) Public, Internal, Hybrid, and Community\n(B) External, Private, Hybrid, and Community\n(C) Public, Private, Joint, and Community\n(D) Public, Private, Hybrid, and Community",
        "中文题目与选项": "四种云部署模型是什么？\n(A) 公共、内部、混合和社区\n(B) 外部、私有、混合和社区\n(C) 公共、私有、联合和社区\n(D) 公共、私有、混合和社区",
        "答案": "D",
        "来源页码": 56
    },
    {
        "题号": "174",
        "英文题目与选项": "What are the six components that make up the STRIDE threat model?\n(A) Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege\n(B) Spoofing, Tampering, Non-Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege\n(C) Spoofing, Tampering, Repudiation, Information Disclosure, Distributed Denial of Service, and Elevation of Privilege\n(D) Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Social Engineering",
        "中文题目与选项": "STRIDE 威胁模型的六个组成部分是什么？\n(A) 冒充、篡改、否认、信息泄露、拒绝服务和提升特权\n(B) 冒充、篡改、不否认、信息泄露、拒绝服务和提升特权\n(C) 冒充、篡改、否认、信息泄露、分布式拒绝服务和提升特权\n(D) 冒充、篡改、否认、信息泄露、拒绝服务和社会工程",
        "答案": "A",
        "来源页码": 57
    },
    {
        "题号": "175",
        "英文题目与选项": "Who would be responsible for implementing IPsec to secure communications for an application?\n(A) Developers\n(B) Systems staff\n(C) Auditors\n(D) Cloud customer",
        "中文题目与选项": "谁将负责实施 IPsec 以保护应用程序的通信？\n(A) 开发者\n(B) 系统人员\n(C) 审计员\n(D) 云客户",
        "答案": "B",
        "来源页码": 57
    },
    {
        "题号": "176",
        "英文题目与选项": "Which approach is typically the most efficient method to use for data discovery?\n(A) Metadata\n(B) Content analysis\n(C) Labels\n(D) ACLs",
        "中文题目与选项": "哪种方法通常是用于数据发现的最有效方法？\n(A) 元数据\n(B) 内容分析\n(C) 标签\n(D) ACL",
        "答案": "A",
        "来源页码": 57
    },
    {
        "题号": "177",
        "英文题目与选项": "Which protocol, as a part of TLS, handles negotiating and establishing a connection between two parties?\n(A) Record\n(B) Binding\n(C) Negotiation\n(D) Handshake",
        "中文题目与选项": "作为 TLS 的一部分，哪种协议处理双方之间的协商和建立连接？\n(A) 记录\n(B) 结合\n(C) 协商\n(D) 握手",
        "答案": "D",
        "来源页码": 58
    },
    {
        "题号": "178",
        "英文题目与选项": "Which of the following APIs are most commonly used within a cloud environment?\n(A) REST and SAML\n(B) SOAP and REST\n(C) REST and XML\n(D) XML and SAML",
        "中文题目与选项": "以下哪些 API 在云环境中最常用？\n(A) REST 和 SAML\n(B) SOAP 和 REST\n(C) REST 和 XML\n(D) XML 和 SAML",
        "答案": "B",
        "来源页码": 58
    },
    {
        "题号": "179",
        "英文题目与选项": "A variety of security systems can be integrated within a network—some that just monitor for threats and issue alerts, and others that take action based on signatures, behavior, and other types of rules to actively stop potential threats. Which of the following types of technologies is best described here?\n(A) IDS\n(B) IPS\n(C) Proxy\n(D) Firewall",
        "中文题目与选项": "各种安全系统可以集成在一个网络中，其中一些系统只监视威胁并发出警报，而另一些系统则根据签名、行为和其他类型的规则采取行动，主动阻止潜在威胁。这里最能描述的是以下哪种类型的技术？\n(A) IDS\n(B) IPS\n(C) 代理\n(D) 防火墙",
        "答案": "B",
        "来源页码": 58
    },
    {
        "题号": "180",
        "英文题目与选项": "A variety of system configurations and policies can originate from various sources and take a variety of formats. Which concept pertains to the application of a set of configurations and policies that is applied to all systems or a class of systems?\n(A) Hardening\n(B) Leveling\n(C) Baselines\n(D) Standards",
        "中文题目与选项": "系统的配置和策略可以来自各种来源并采用各种格式。哪个概念与应用于所有系统或某类系统的一组配置和策略有关？\n(A) 加固\n(B) 水平化\n(C) 基线\n(D) 标准",
        "答案": "C",
        "来源页码": 59
    },
    {
        "题号": "181",
        "英文题目与选项": "Which of the following data-sanitation approaches are always available within a cloud environment?\n(A) Physical destruction\n(B) Shredding\n(C) Overwriting\n(D) Cryptographic erasure",
        "中文题目与选项": "在云环境中，以下哪种数据清理方法始终可用？\n(A) 物理破坏\n(B) 切碎\n(C) 覆盖\n(D) 加密擦除",
        "答案": "D",
        "来源页码": 59
    },
    {
        "题号": "182",
        "英文题目与选项": "Which of the following best describes a cloud carrier?\n(A) A person or entity responsible for making a cloud service available to consumers\n(B) The intermediary who provides connectivity and transport of cloud services between cloud providers and cloud consumers\n(C) The person or entity responsible for keeping cloud services running for customers\n(D) The person or entity responsible for transporting data across the Internet",
        "中文题目与选项": "以下哪项最能描述云载体？\n(A) 负责向消费者提供云服务的个人或实体\n(B) 在云提供商和云消费者之间提供云服务连接和传输的中介\n(C) 负责为客户保持云服务运行的人员或实体\n(D) 负责通过互联网传输数据的个人或实体",
        "答案": "B",
        "来源页码": 59
    },
    {
        "题号": "184",
        "英文题目与选项": "An audit against the ____ will demonstrate that an organization has adequate security controls to meet its ISO 27001 requirements.\n(A) SAS 70 standard\n(B) SSAE 16 standard\n(C) ISO 27002 certification criteria\n(D) NIST SP 800-53",
        "中文题目与选项": "对 ____ 的审计将证明一个组织有足够的安全控制来满足其 ISO 27001 要求。\n(A) SAS 70 标准\n(B) SSAE 16 标准\n(C) ISO 27002 认证标准\n(D) NIST SP 800-53",
        "答案": "C",
        "来源页码": 60
    },
    {
        "题号": "185",
        "英文题目与选项": "What’s a serious complication an organization faces from the compliance perspective with international operations?\n(A) Multiple jurisdictions\n(B) Different certifications\n(C) Different operational procedures\n(D) Different capabilities",
        "中文题目与选项": "从国际运营的合规角度来看，组织面临的严重复杂性是什么？\n(A) 多个司法管辖区\n(B) 不同的认证\n(C) 不同的操作程序\n(D) 不同的功能",
        "答案": "A",
        "来源页码": 60
    },
    {
        "题号": "186",
        "英文题目与选项": "Which format is the most commonly used standard for exchanging information within a federated identity system?\n(A) XML\n(B) HTML\n(C) SAML\n(D) JSON",
        "中文题目与选项": "哪种格式是联邦身份系统中最常用的信息交换标准？\n(A) XML\n(B) HTML\n(C) SAML\n(D) JSON",
        "答案": "C",
        "来源页码": 60
    },
    {
        "题号": "187",
        "英文题目与选项": "Which of the following is a cloud characteristic that should cause concern when another company using the same provider is under investigation by law enforcement?\n(A) Virtualization\n(B) Pooled resources\n(C) Elasticity\n(D) Automated self-service",
        "中文题目与选项": "您为一家在云中运行生产环境的公司工作。另一家使用同一云提供商的公司因涉嫌敲诈勒索正接受执法部门调查。鉴于云的特性，贵公司应对此表示关注。\n(A) 虚拟化\n(B) 资源池化\n(C) 弹性\n(D) 自动化自助服务",
        "答案": "B",
        "来源页码": 61
    },
    {
        "题号": "188",
        "英文题目与选项": "The destruction of a cloud customer's data can be required by all of the following except:\n(A) Statute\n(B) Regulation\n(C) The cloud provider's policy\n(D) Contract",
        "中文题目与选项": "除以下情况外，所有情况都可能要求销毁云客户的数据：\n(A) 成文法\n(B) 法规\n(C) 云提供商的政策\n(D) 合同",
        "答案": "C",
        "来源页码": 61
    },
    {
        "题号": "189",
        "英文题目与选项": "What type of storage structure does object storage employ to maintain files?\n(A) Directory\n(B) Hierarchical\n(C) Tree\n(D) Flat",
        "中文题目与选项": "对象存储采用什么类型的存储结构来维护文件？\n(A) 目录型\n(B) 分层型\n(C) 树型\n(D) 扁平型",
        "答案": "D",
        "来源页码": 61
    },
    {
        "题号": "190",
        "英文题目与选项": "In application-level encryption, where does the encryption engine reside?\n(A) In the application accessing the database\n(B) In the OS on which the application is run\n(C) Within the database accessed by the application\n(D) In the volume where the database resides",
        "中文题目与选项": "在应用层加密中，加密引擎位于何处？\n(A) 在访问数据库的应用程序中\n(B) 在运行该应用程序的操作系统中\n(C) 在应用程序访问的数据库内部\n(D) 在数据库所在的存储卷中",
        "答案": "A",
        "来源页码": 61
    },
    {
        "题号": "191",
        "英文题目与选项": "A typical DLP tool can enhance the organization's efforts at accomplishing what legal task?\n(A) Evidence collection\n(B) Delivering testimony\n(C) Criminal prosecution\n(D) Enforcement of intellectual property rights",
        "中文题目与选项": "典型的 DLP 工具可以增强组织完成什么法律任务的能力？\n(A) 证据收集\n(B) 提供证词\n(C) 刑事诉讼\n(D) 知识产权的执行",
        "答案": "A",
        "来源页码": 62
    },
    {
        "题号": "192",
        "英文题目与选项": "Which of the following is considered a technological control?\n(A) Firewall software\n(B) Firing personnel\n(C) Fireproof safe\n(D) Fire extinguisher",
        "中文题目与选项": "以下哪项被视为技术控制？\n(A) 防火墙软件\n(B) 解雇人员\n(C) 防火保险箱\n(D) 灭火器",
        "答案": "A",
        "来源页码": 62
    },
    {
        "题号": "193",
        "英文题目与选项": "A DLP solution/implementation has three main components. Which of the following is NOT one of the three main components?\n(A) Monitoring\n(B) Enforcement\n(C) Auditing\n(D) Discovery and classification",
        "中文题目与选项": "DLP 解决方案/实施有三个主要组件。以下哪项不是这三个主要组件之一？\n(A) 监测\n(B) 执行\n(C) 审计\n(D) 发现和分类",
        "答案": "C",
        "来源页码": 62
    },
    {
        "题号": "194",
        "英文题目与选项": "Penetration testing is a(n) form of security assessment.\n(A) Active\n(B) Comprehensive\n(C) Total\n(D) Inexpensive",
        "中文题目与选项": "渗透测试是一种形式的安全评估。\n(A) 主动的\n(B) 综合的\n(C) 全面的\n(D) 低成本的",
        "答案": "A",
        "来源页码": 63
    },
    {
        "题号": "195",
        "英文题目与选项": "Which aspect of cloud computing serves as the biggest challenge to using DLP to protect data at rest?\n(A) Portability\n(B) Resource pooling\n(C) Interoperability\n(D) Reversibility",
        "中文题目与选项": "云计算的哪个方面是使用 DLP 保护静止数据的最大挑战？\n(A) 可移植性\n(B) 资源池化\n(C) 互操作性\n(D) 可逆性",
        "答案": "B",
        "来源页码": 63
    },
    {
        "题号": "196",
        "英文题目与选项": "What is the primary security mechanism used to protect SOAP and REST APIs?\n(A) Firewalls\n(B) XML firewalls\n(C) Encryption\n(D) WAFs",
        "中文题目与选项": "用于保护 SOAP 和 REST API 的主要安全机制是什么？\n(A) 防火墙\n(B) XML 防火墙\n(C) 加密\n(D) WAF",
        "答案": "C",
        "来源页码": 64
    },
    {
        "题号": "197",
        "英文题目与选项": "What changes are necessary to application code in order to implement DNSSEC?\n(A) Adding encryption modules\n(B) Implementing certificate validations\n(C) Additional DNS lookups\n(D) No changes are needed.",
        "中文题目与选项": "为了实现 DNSSEC，需要对应用程序代码进行哪些更改？\n(A) 添加加密模块\n(B) 实施证书验证\n(C) 额外的 DNS 查询\n(D) 无需更改",
        "答案": "D",
        "来源页码": 64
    },
    {
        "题号": "198",
        "英文题目与选项": "The nature of cloud computing and how it operates make complying with data discovery and disclosure orders more difficult. Which of the following concepts provides the biggest challenge in regard to data collection, pursuant to a legal order?\n(A) Portability\n(B) Multitenancy\n(C) Reversibility\n(D) Auto-scaling",
        "中文题目与选项": "云计算的性质及其运行方式使得遵守数据发现和披露命令变得更加困难。根据法律规定，以下哪个概念在数据收集方面面临最大的挑战？\n(A) 可移植性\n(B) 多租户\n(C) 可逆性\n(D) 自动伸缩",
        "答案": "B",
        "来源页码": 64
    },
    {
        "题号": "199",
        "英文题目与选项": "What does static application security testing (SAST) offer as a tool to the testers that makes it unique compared to other common security testing methodologies?\n(A) Live testing\n(B) Source code access\n(C) Production system scanning\n(D) Injection attempts",
        "中文题目与选项": "静态应用程序安全测试 (SAST) 为测试人员提供了什么工具，使其与其他常见的安全测试方法相比具有独特性？\n(A) 现场测试\n(B) 源代码访问\n(C) 生产系统扫描\n(D) 注入尝试",
        "答案": "B",
        "来源页码": 65
    },
    {
        "题号": "200",
        "英文题目与选项": "All of the following are techniques to enhance the portability of cloud data, in order to minimize the potential of vendor lock-in except:\n(A) Ensure there are no physical limitations to moving\n(B) Use DRM and DLP solutions widely throughout the cloud operation\n(C) Ensure favorable contract terms to support portability\n(D) Avoid proprietary data formats",
        "中文题目与选项": "以下所有技术都是增强云数据可移植性的技术，以最大限度地减少供应商锁定的可能性，以下情况除外：\n(A) 确保迁移没有物理限制\n(B) 在整个云运营中广泛使用 DRM 和 DLP 解决方案\n(C) 确保有利的合同条款以支持可移植性\n(D) 避免专有数据格式",
        "答案": "B",
        "来源页码": 65
    },
    {
        "题号": "202",
        "英文题目与选项": "Which type of threat is often used in conjunction with phishing attempts and is often viewed as greatly increasing the likeliness of success?\n(A) Unvalidated redirects and forwards\n(B) Cross-site request forgery\n(C) Cross-site scripting\n(D) Insecure direct object references",
        "中文题目与选项": "哪种类型的威胁通常与钓鱼尝试一起使用，并且通常被视为极大地增加了成功的可能性？\n(A) 未验证的重定向和转发\n(B) 跨站请求伪造\n(C) 跨站脚本\n(D) 不安全的直接对象引用",
        "答案": "A",
        "来源页码": 66
    },
    {
        "题号": "203",
        "英文题目与选项": "How many additional DNS queries are needed when DNSSEC integrity checks are added?\n(A) 3\n(B) 0\n(C) 1\n(D) 2",
        "中文题目与选项": "添加 DNSSEC 完整性检查时，需要多少次额外的 DNS 查询？\n(A) 3\n(B) 0\n(C) 1\n(D) 2",
        "答案": "B",
        "来源页码": 66
    },
    {
        "题号": "204",
        "英文题目与选项": "Log data should be protected:\n(A) One level below the sensitivity level of the systems from which it was collected\n(B) At least at the same sensitivity level as the systems from which it was collected\n(C) With encryption in transit, at rest, and in use\n(D) According to NIST guidelines",
        "中文题目与选项": "日志数据应受到保护：\n(A) 低于采集数据的系统的敏感度等级一级\n(B) 至少与采集该数据的系统保持相同的敏感度等级\n(C) 在传输、静止和使用中进行加密\n(D) 根据 NIST 指南",
        "答案": "B",
        "来源页码": 66
    },
    {
        "题号": "205",
        "英文题目与选项": "With a federated identity system, where would a user perform their authentication when requesting services or application access?\n(A) Cloud provider\n(B) The application\n(C) Their home organization\n(D) Third-party authentication system",
        "中文题目与选项": "对于联合身份系统，当请求服务或应用程序访问时，用户将在何处执行身份验证？\n(A) 云提供商\n(B) 应用程序\n(C) 用户的原组织\n(D) 第三方认证系统",
        "答案": "C",
        "来源页码": 67
    },
    {
        "题号": "206",
        "英文题目与选项": "From a legal perspective, what is the most important first step after an eDiscovery order has been received by the cloud provider?\n(A) Notification\n(B) Key identification\n(C) Data collection\n(D) Virtual image snapshots",
        "中文题目与选项": "从法律角度来看，云提供商收到 eDiscovery 订单后最重要的第一步是什么？\n(A) 通知\n(B) 密钥标识\n(C) 数据收集\n(D) 虚拟映像快照",
        "答案": "A",
        "来源页码": 67
    },
    {
        "题号": "207",
        "英文题目与选项": "Which of the following tasks within a SaaS environment would NOT be something the cloud customer would be responsible for?\n(A) Authentication mechanism\n(B) Branding\n(C) Training\n(D) User access",
        "中文题目与选项": "SaaS 环境中的以下哪些任务不是云客户应负责的？\n(A) 身份验证机制\n(B) 品牌创建\n(C) 培训\n(D) 用户访问权限",
        "答案": "A",
        "来源页码": 68
    },
    {
        "题号": "208",
        "英文题目与选项": "Which of the following tools might be useful in data discovery efforts that are based on content analysis?\n(A) DLP\n(B) Digital Rights Management (DRM)\n(C) iSCSI\n(D) Fibre Channel over Ethernet (FCOE)",
        "中文题目与选项": "以下哪些工具可能对基于内容分析的数据发现工作有用？\n(A) DLP\n(B) 数字版权管理 (DRM)\n(C) iSCSI\n(D) 以太网光纤信道 (FCoE)",
        "答案": "A",
        "来源页码": 68
    },
    {
        "题号": "209",
        "英文题目与选项": "Being in a cloud environment, cloud customers lose a lot of insight and knowledge as to how their data is stored and their systems are deployed. Which concept from the ISO/IEC cloud standards relates to the necessity of the cloud provider to inform the cloud customer on these issues?\n(A) Disclosure\n(B) Transparency\n(C) Openness\n(D) Documentation",
        "中文题目与选项": "在云环境中，云客户对其数据的存储方式和系统的部署方式失去了很多洞察力和了解。ISO/IEC 云标准中的哪个概念与云提供商有必要就这些问题告知云客户有关？\n(A) 披露\n(B) 透明度\n(C) 开放性\n(D) 文档化",
        "答案": "B",
        "来源页码": 68
    },
    {
        "题号": "210",
        "英文题目与选项": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally.\nYour company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes.\nYour company has decided to expand its business to include selling and monitoring life-support equipment for medical providers.\nWhat characteristic do you need to ensure is offered by your cloud provider?\n(A) Full automation of security controls within the cloud data center\n(B) Tier 4 of the Uptime Institute certifications\n(C) Global remote access\n(D) Prevention of ransomware infections",
        "中文题目与选项": "您是一家小型零售企业的安全经理，主要从事与个人客户（公众成员）的直接电子商务交易。您的市场大部分在亚洲，但您确实在全球范围内完成订单。\n贵公司在香港总部大楼内拥有自己的数据中心，但也使用公共云环境进行应急备份和归档。\n贵公司已决定扩大业务，包括为医疗提供商销售和监控生命支持设备。\n您需要确保云提供商提供哪些特性？\n(A) 云数据中心内安全控制的完全自动化\n(B) Uptime Institute 认证的第 4 级\n(C) 全球远程访问\n(D) 防止勒索软件感染",
        "答案": "B",
        "来源页码": 69
    },
    {
        "题号": "211",
        "英文题目与选项": "Which aspect of SaaS will alleviate much of the time and energy organizations spend on compliance (specifically baselines)?\n(A) Maintenance\n(B) Licensing\n(C) Standardization\n(D) Development",
        "中文题目与选项": "SaaS 的哪个方面将减少组织在合规（特别是基线）方面花费的大量时间和精力？\n(A) 维护\n(B) 许可\n(C) 标准化\n(D) 开发",
        "答案": "C",
        "来源页码": 69
    },
    {
        "题号": "212",
        "英文题目与选项": "A main objective for an organization when utilizing cloud services is to avoid vendor lock-in so as to ensure flexibility and maintain independence.\nWhich core concept of cloud computing is most related to vendor lock-in?\n(A) Scalability\n(B) Interoperability\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "组织在使用云服务时的主要目标是避免供应商锁定，以确保灵活性和保持独立性。\n云计算的哪个核心概念与供应商锁定最相关？\n(A) 可扩展性\n(B) 互操作性\n(C) 可移植性\n(D) 可逆性",
        "答案": "C",
        "来源页码": 70
    },
    {
        "题号": "213",
        "英文题目与选项": "When using an Infrastructure as a Service solution, what is a key benefit provided to the customer?\n(A) Usage is metered and priced on the basis of units consumed.\n(B) The ability to scale up infrastructure services based on projected usage.\n(C) Increased energy and cooling system efficiencies.\n(D) Cost of ownership is transferred.",
        "中文题目与选项": "当使用基础架构即服务（IaaS）解决方案时，为客户提供的关键好处是什么？\n(A) 使用量根据消耗的单位进行计量和定价。\n(B) 能够根据预计使用情况扩展基础设施服务。\n(C) 提高能源和冷却系统效率。\n(D) 所有权成本转移。",
        "答案": "A",
        "来源页码": 70
    },
    {
        "题号": "214",
        "英文题目与选项": "Which cloud service category is MOST likely to use a client-side key management system?\n(A) IaaS\n(B) SaaS\n(C) PaaS\n(D) DaaS",
        "中文题目与选项": "哪个云服务类别最可能使用客户端密钥管理系统？\n(A) 基础设施即服务（IaaS）\n(B) 软件即服务（SaaS）\n(C) 平台即服务（PaaS）\n(D) 数据即服务（DaaS）",
        "答案": "A",
        "来源页码": 70
    },
    {
        "题号": "215",
        "英文题目与选项": "What category of PII data can carry potential fines or even criminal charges for its improper use or disclosure?\n(A) Protected\n(B) Legal\n(C) Regulated\n(D) Contractual",
        "中文题目与选项": "什么类型的 PII 数据可能因其不当使用或披露而受到罚款甚至刑事指控？\n(A) 受保护的\n(B) 合法的\n(C) 受监管的\n(D) 合同的",
        "答案": "C",
        "来源页码": 71
    },
    {
        "题号": "216",
        "英文题目与选项": "Halon is now illegal to use for data center fire suppression. What is the reason it was outlawed?\n(A) It poses a threat to health and human safety when deployed.\n(B) It can harm the environment.\n(C) It does not adequately suppress fires.\n(D) It causes undue damage to electronic systems.",
        "中文题目与选项": "哈龙现在被禁止用于数据中心灭火。它被取缔的原因是什么？\n(A) 它在部署时对健康和人身安全构成威胁。\n(B) 它会危害环境。\n(C) 它不能充分抑制火灾。\n(D) 它会对电子系统造成不必要的损坏。",
        "答案": "B",
        "来源页码": 71
    },
    {
        "题号": "217",
        "英文题目与选项": "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business. Which concept pertains to the amount of data and services needed to reach the predetermined level of operations?\n(A) SRE\n(B) RPO\n(C) RSL\n(D) RTO",
        "中文题目与选项": "BCDR 策略通常不涉及组织的全部运营，而只涉及那些被认为对其业务至关重要的运营。哪个概念与达到预定操作水平所需的数据量和服务量有关？\n(A) SRE\n(B) RPO\n(C) RSL\n(D) RTO",
        "答案": "B",
        "来源页码": 71
    },
    {
        "题号": "218",
        "英文题目与选项": "Which type of testing uses the same strategies and toolsets that hackers would use?\n(A) Static\n(B) Malicious\n(C) Penetration\n(D) Dynamic",
        "中文题目与选项": "哪种类型的测试使用与黑客相同的策略和工具集？\n(A) 静态测试\n(B) 恶意测试\n(C) 渗透测试\n(D) 动态测试",
        "答案": "C",
        "来源页码": 72
    },
    {
        "题号": "219",
        "英文题目与选项": "Which of the following statements best describes a Type 1 hypervisor?\n(A) The hypervisor software runs within an operating system tied to the hardware.\n(B) The hypervisor software runs as a client on a server and needs an external service to administer it.\n(C) The hypervisor software runs on top of an application layer.\n(D) The hypervisor software runs directly on bare metal without an intermediary.",
        "中文题目与选项": "以下哪项陈述最能描述类型 1 虚拟机监控程序？\n(A) 管理程序软件在与硬件绑定的操作系统中运行。\n(B) 管理程序软件作为服务器上的客户端运行，需要外部服务来管理它。\n(C) 管理程序软件运行在应用程序层之上。\n(D) 管理程序软件直接在裸机上运行，没有中介层。",
        "答案": "D",
        "来源页码": 72
    },
    {
        "题号": "220",
        "英文题目与选项": "Which of the following service categories entails the least amount of support needed on the part of the cloud customer?\n(A) SaaS\n(B) IaaS\n(C) DaaS\n(D) PaaS",
        "中文题目与选项": "以下哪种服务类别需要云客户提供的支持最少？\n(A) 软件即服务（SaaS）\n(B) 基础设施即服务（IaaS）\n(C) 桌面即服务（DaaS）\n(D) 平台即服务（PaaS）",
        "答案": "A",
        "来源页码": 73
    },
    {
        "题号": "221",
        "英文题目与选项": "In which of the following situations does the data owner have to administer the OS?\n(A) IaaS\n(B) PaaS\n(C) Offsite archive\n(D) SaaS",
        "中文题目与选项": "在以下哪种情况下，数据所有者必须管理操作系统？\n(A) 基础设施即服务（IaaS）\n(B) 平台即服务（PaaS）\n(C) 异地存档\n(D) 软件即服务（SaaS）",
        "答案": "A",
        "来源页码": 73
    },
    {
        "题号": "222",
        "英文题目与选项": "The Brewer-Nash security model is also known as which of the following?\n(A) MAC\n(B) The Chinese Wall model\n(C) Preventive measures\n(D) RBAC",
        "中文题目与选项": "Brewer-Nash 安全模型也称为以下哪一种？\n(A) MAC\n(B) 中国墙模型\n(C) 预防控制\n(D) RBAC",
        "答案": "B",
        "来源页码": 73
    },
    {
        "题号": "223",
        "英文题目与选项": "As part of the audit process, obtaining a report about differences between expected configurations and actual configurations is usually critical to the organization. Which term is associated with the process of generating such a report?\n(A) Deficiencies\n(B) Findings\n(C) Gap analysis\n(D) Errors",
        "中文题目与选项": "作为审计过程的一部分，获得有关预期配置与实际策略之间差异的报告对组织来说通常至关重要。哪一个术语与生成此类报告的过程相关？\n(A) 缺陷\n(B) 调查发现\n(C) 差距分析\n(D) 错误",
        "答案": "C",
        "来源页码": 74
    },
    {
        "题号": "224",
        "英文题目与选项": "You are performing an audit of the security controls used in a cloud environment. Which of the following would best serve your purpose?\n(A) The business impact analysis (BIA)\n(B) A copy of the VM baseline configuration\n(C) The latest version of the company's financial records\n(D) A SOC 3 report from another (external) auditor",
        "中文题目与选项": "您正在对云环境中使用的安全控制进行审计。以下哪项最能满足您的目的？\n(A) 业务影响分析 (BIA)\n(B) VM 基线配置的副本\n(C) 公司财务记录的最新版本\n(D) 来自另一位（外部）审计员的 SOC 3 报告",
        "答案": "B",
        "来源页码": 74
    },
    {
        "题号": "225",
        "英文题目与选项": "Many activities within a cloud environment are performed via programmatic means where complex and distributed operations are handled without the need to perform each step individually. Which of the following concepts does this describe?\n(A) Orchestration\n(B) Provisioning\n(C) Automation\n(D) Allocation",
        "中文题目与选项": "云环境中的许多活动都是通过编程方式执行的，其中复杂且分布式的操作无需单独执行每个步骤。以下哪个概念描述了这种情况？\n(A) 编排\n(B) 资源调配\n(C) 自动化\n(D) 分配",
        "答案": "A",
        "来源页码": 74
    },
    {
        "题号": "226",
        "英文题目与选项": "Countermeasures for protecting cloud operations against internal threats include all of the following except:\n(A) Extensive and comprehensive training programs, including initial, recurring and refresher sessions\n(B) Skills and knowledge testing\n(C) Hardened perimeter devices\n(D) Aggressive background checks",
        "中文题目与选项": "保护云运营免受内部威胁的对策包括以下所有方面，但不包括：\n(A) 广泛而全面的培训计划，包括初始、定期和复习课程\n(B) 技能和知识测试\n(C) 加固的边界设备\n(D) 积极的背景调查",
        "答案": "C",
        "来源页码": 75
    },
    {
        "题号": "227",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Confidentiality level\n(B) Distribution limitations\n(C) Access restrictions\n(D) Multifactor authentication",
        "中文题目与选项": "数据标签可以包括以下所有内容，但不包括：\n(A) 保密级别\n(B) 分配限制\n(C) 访问限制\n(D) 多因素认证",
        "答案": "D",
        "来源页码": 75
    },
    {
        "题号": "228",
        "英文题目与选项": "Which technology is most associated with tunneling?\n(A) IPSec\n(B) GRE\n(C) IaaS\n(D) XML",
        "中文题目与选项": "哪种技术与隧道最相关？\n(A) IPSec\n(B) GRE\n(C) IaaS\n(D) XML",
        "答案": "B",
        "来源页码": 75
    },
    {
        "题号": "229",
        "英文题目与选项": "Which of the following roles involves testing, monitoring, and securing cloud services for an organization?\n(A) Cloud service integrator\n(B) Cloud service business manager\n(C) Cloud service user\n(D) Cloud service administrator",
        "中文题目与选项": "以下哪个角色涉及为组织测试、监控和保护云服务？\n(A) 云服务集成商\n(B) 云服务业务经理\n(C) 云服务用户\n(D) 云服务管理员",
        "答案": "D",
        "来源页码": 76
    },
    {
        "题号": "230",
        "英文题目与选项": "What is the risk to the organization posed by dashboards that display data discovery results?\n(A) Increased chance of external penetration\n(B) Flawed management decisions based on messaged displays\n(C) Higher likelihood of inadvertent disclosure\n(D) Raised incidence of physical theft",
        "中文题目与选项": "显示数据发现结果的仪表板给组织带来了什么风险？\n(A) 增加外部渗透的机会\n(B) 基于信息显示的错误管理决策\n(C) 意外泄露的可能性更高\n(D) 物理盗窃事件增加",
        "答案": "B",
        "来源页码": 76
    },
    {
        "题号": "231",
        "英文题目与选项": "The Restatement (Second) Conflict of Law refers to which of the following?\n(A) The basis for deciding which laws are most appropriate in a situation where conflicting laws exist\n(B) When judges restate the law in an opinion\n(C) How jurisdictional disputes are settled\n(D) Whether local or federal laws apply in a situation",
        "中文题目与选项": "重述（第二次）法律冲突指的是以下哪一项？\n(A) 在存在冲突法律的情况下，用于决定哪些法律最合适的依据\n(B) 当法官在意见中重述法律时\n(C) 如何解决管辖权争议\n(D) 地方或联邦法律是否适用于某一情况",
        "答案": "A",
        "来源页码": 76
    },
    {
        "题号": "232",
        "英文题目与选项": "Which is the most commonly used standard for information exchange within a federated identity system?\n(A) OAuth\n(B) OpenID\n(C) SAML\n(D) WS-Federation",
        "中文题目与选项": "联合身份系统中最常用的信息交换标准是什么？\n(A) OAuth\n(B) OpenID\n(C) SAML\n(D) WS-Federation",
        "答案": "C",
        "来源页码": 77
    },
    {
        "题号": "233",
        "英文题目与选项": "Within an IaaS implementation, which of the following would NOT be a metric used to quantify service charges for the cloud customer?\n(A) Memory\n(B) Number of users\n(C) Storage\n(D) CPU",
        "中文题目与选项": "在 IaaS 实现中，以下哪项不是用于量化云客户服务费用的指标？\n(A) 内存\n(B) 用户数量\n(C) 存储\n(D) CPU",
        "答案": "B",
        "来源页码": 77
    },
    {
        "题号": "234",
        "英文题目与选项": "Many different common threats exist against web-exposed services and applications. One attack involves attempting to leverage input fields to execute queries in a nested fashion that is unintended by the developers. What type of attack is this?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "针对 Web 公开的服务和应用程序存在许多不同的常见威胁。一种攻击涉及试图利用输入字段以嵌套的方式执行查询，而这并非开发人员预期的行为。这是什么类型的攻击？\n(A) 注入\n(B) 缺少功能级别访问控制\n(C) 跨站点脚本\n(D) 跨站点请求伪造",
        "答案": "A",
        "来源页码": 77
    },
    {
        "题号": "235",
        "英文题目与选项": "You are the security policy lead for your organization, which is considering migrating from your on-premises, legacy environment into the cloud. You are reviewing the Cloud Security Alliance Cloud Controls Matrix (CSA CCM) as a tool for your organization. What is probably the best benefit offered by the CCM?\n(A) The low cost of the tool\n(B) Allowing your organization to leverage existing controls across multiple frameworks so as not to duplicate effort\n(C) Simplicity of control selection from the list of approved choices\n(D) Ease of implementation by choosing controls from the list of qualified vendors",
        "中文题目与选项": "您是您所在组织的安全策略负责人，该组织正在考虑从本地传统环境迁移到云端。您正在审查云安全联盟（CSA）云控制矩阵（CCM），将其作为组织的工具。CCM 可能提供的最大好处是什么？\n(A) 工具成本低\n(B) 允许您的组织在多个框架中利用现有的控制措施，以避免重复工作\n(C) 从批准的选项列表中选择控制措施的简易性\n(D) 通过从合格供应商列表中选择控制措施来简化实施",
        "答案": "B",
        "来源页码": 78
    },
    {
        "题号": "236",
        "英文题目与选项": "What is the correct order of the phases of the data life cycle?\n(A) Create, Use, Store, Share, Archive, Destroy\n(B) Create, Archive, Store, Share, Use, Destroy\n(C) Create, Store, Use, Archive, Share, Destroy\n(D) Create, Store, Use, Share, Archive, Destroy",
        "中文题目与选项": "数据生命周期各阶段的正确顺序是什么？\n(A) 创建、使用、存储、共享、存档、销毁\n(B) 创建、归档、存储、共享、使用、销毁\n(C) 创建、存储、使用、归档、共享、销毁\n(D) 创建、存储、使用、共享、存档、销毁",
        "答案": "D",
        "来源页码": 78
    },
    {
        "题号": "237",
        "英文题目与选项": "Which of the following storage types is most closely associated with a traditional file system and tree structure?\n(A) Volume\n(B) Unstructured\n(C) Object\n(D) Structured",
        "中文题目与选项": "以下哪种存储类型与传统的文件系统和树结构最密切相关？\n(A) 卷\n(B) 非结构化\n(C) 对象\n(D) 结构化的",
        "答案": "A",
        "来源页码": 79
    },
    {
        "题号": "238",
        "英文题目与选项": "In order to comply with regulatory requirements, which of the following secure erasure methods would be available to a cloud customer using volume storage within the IaaS service model?\n(A) Demagnetizing\n(B) Shredding\n(C) Degaussing\n(D) Cryptographic erasure",
        "中文题目与选项": "为了遵守法规要求，在 IaaS 服务模型中使用卷存储的云客户可以使用以下哪种安全擦除方法？\n(A) 去磁\n(B) 粉碎\n(C) 消磁\n(D) 加密擦除",
        "答案": "D",
        "来源页码": 79
    },
    {
        "题号": "239",
        "英文题目与选项": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing.\nAccording to the CSA, what is one reason the threat of insecure interfaces and APIs is so prevalent in cloud computing?\n(A) Cloud customers and third parties are continually enhancing and modifying APIs.\n(B) APIs can have automated settings.\n(C) It is impossible to uninstall APIs.\n(D) APls are a form of malware ",
        "中文题目与选项": "云安全联盟（CSA）发布了“九大臭名昭著威胁”，这是一个关于参与云计算的组织常见威胁的列表。\n根据 CSA 的说法，不安全接口和 API 的威胁在云计算中普遍存在的原因之一是什么？\n(A) 云客户和第三方不断增强和修改 API。\n(B) API 可以具有自动化设置。\n(C) 不可能卸载 API。\n(D) API是一种恶意软件。",
        "答案": "A",
        "来源页码": 79
    },
    {
        "题号": "240",
        "英文题目与选项": "Which of the following could be used as a second component of multifactor authentication if a user has an RSA token?\n(A) Access card\n(B) USB thumb drive\n(C) Retina scan\n(D) RFID",
        "中文题目与选项": "如果用户具有RSA令牌，以下哪项可以用作多因素身份验证的第二个组成部分？\n(A) 门禁卡\n(B) USB拇指驱动器\n(C) 视网膜扫描\n(D) 射频识别",
        "答案": "C",
        "来源页码": 80
    },
    {
        "题号": "241",
        "英文题目与选项": "With IaaS, what is responsible for handling the security and control over the volume storage space?\n(A) Management plane\n(B) Operating system\n(C) Application\n(D) Hypervisor",
        "中文题目与选项": "使用IaaS，什么负责处理卷存储空间的安全性和控制？\n(A) 管理平面\n(B) 操作系统\n(C) 应用程序\n(D) 管理程序",
        "答案": "B",
        "来源页码": 80
    },
    {
        "题号": "242",
        "英文题目与选项": "Which ISO standard refers to addressing security risks in a supply chain?\n(A) ISO 27001 Standard\n(B) ISO/IEC 28000:2007 Standard\n(C) ISO 18799 Standard\n(D) ISO 31000:2009 Standard",
        "中文题目与选项": "哪个 ISO 标准涉及解决供应链中的安全风险？\n(A) ISO 27001 标准\n(B) ISO/IEC 28000:2007 标准\n(C) ISO 18799 标准\n(D) ISO 31000:2009 标准",
        "答案": "B",
        "来源页码": 81
    },
    {
        "题号": "243",
        "英文题目与选项": "One of the main components of system audits is the ability to track changes over time and to match these changes with continued compliance and internal processes.\nWhich aspect of cloud computing makes this particular component more challenging than in a traditional data center?\n(A) Portability\n(B) Virtualization\n(C) Elasticity\n(D) Resource pooling",
        "中文题目与选项": "系统审计的主要组成部分之一是跟踪随时间变化的能力，并将这些变化与持续的合规性和内部流程相匹配。云计算的哪个方面使这个特定组建比传统数据中心更具挑战性？\n(A) 可移植性\n(B) 虚拟化\n(C) 弹性\n(D) 资源池化",
        "答案": "B",
        "来源页码": 81
    },
    {
        "题号": "244",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the requirements placed on the cloud provider by the cloud customer for minimum performance standards and requirements that must be met?\n(A) Regulatory requirements\n(B) SLAs\n(C) Auditability\n(D) Governance",
        "中文题目与选项": "哪些云交叉方面与云客户对云提供商提出的最低性能标准和必须满足的要求有关？\n(A) 监管要求\n(B) 服务水平协议\n(C) 可审计性\n(D) 治理",
        "答案": "B",
        "来源页码": 81
    },
    {
        "题号": "245",
        "英文题目与选项": "What are the objectives of change management? (Choose all that apply.)\n(A) Respond to a customer's changing business requirements while maximizing value and reducing incidents, disruption, and rework\n(B) Ensure that changes are recorded and evaluated\n(C) Respond to business and IT requests for change that will disassociate services with business needs\n(D) Ensure that all changes are prioritized, planned, tested, implemented, documented, and reviewed in a controlled manner",
        "中文题目与选项": "变更管理的目标是什么？（选择所有适用的选项）\n(A) 响应客户不断变化的业务需求，同时最大化价值并减少事故、中断和返工\n(B) 确保记录和评估变更\n(C) 响应将服务与业务需求分离的业务和 IT 变更请求\n(D) 确保以受控的方式对所有变更进行优先级排序、计划、测试、实施、记录和审查",
        "答案": "A,B,D",
        "来源页码": 82
    },
    {
        "题号": "246",
        "英文题目与选项": "What principle must always be included with an SOC 2 report?\n(A) Confidentiality\n(B) Security\n(C) Privacy\n(D) Processing integrity",
        "中文题目与选项": "SOC 2 报告必须始终包含什么原则？\n(A) 保密\n(B) 安全\n(C) 隐私\n(D) 处理完整性",
        "答案": "B",
        "来源页码": 82
    },
    {
        "题号": "248",
        "英文题目与选项": "Which of the following represents a control on the maximum amount of resources that a single customer, virtual machine, or application can consume within a cloud environment?\n(A) Share\n(B) Reservation\n(C) Provision\n(D) Limit",
        "中文题目与选项": "以下哪项表示对单个客户、虚拟机或应用程序在云环境中可以消耗的最大资源量的控制？\n(A) 共享\n(B) 预订\n(C) 提供\n(D) 限制",
        "答案": "D",
        "来源页码": 83
    },
    {
        "题号": "249",
        "英文题目与选项": "What type of PII is controlled based on laws and carries legal penalties for noncompliance with requirements?\n(A) Contractual\n(B) Regulated\n(C) Specific\n(D) Jurisdictional",
        "中文题目与选项": "什么类型的PII是根据法律进行控制的，并对不符合要求的行为进行法律处罚？\n(A) 合同的\n(B) 受监管的\n(C) 具体的\n(D) 司法管辖区的",
        "答案": "B",
        "来源页码": 83
    },
    {
        "题号": "250",
        "英文题目与选项": "Cloud systems are increasingly used for BCDR solutions for organizations.\nWhat aspect of cloud computing makes their use for BCDR the most attractive?\n(A) On-demand self-service\n(B) Measured service\n(C) Portability\n(D) Broad network access",
        "中文题目与选项": "云系统越来越多地用于组织的 BCDR 解决方案。云计算的哪个方面使它们对 BCDR 的使用最具吸引力？\n(A) 按需自助服务\n(B) 可测量的服务\n(C) 可移植性\n(D) 广泛的网络接入",
        "答案": "B",
        "来源页码": 84
    },
    {
        "题号": "251",
        "英文题目与选项": "Which of the following is a method for apportioning resources that involves prioritizing resource requests to resolve contention situations?\n(A) Reservations\n(B) Limits\n(C) Cancellations\n(D) Shares",
        "中文题目与选项": "以下哪一项是分配资源的方法，涉及对资源请求进行优先级排序以解决争用情况？\n(A) 预订\n(B) 限制\n(C) 取消\n(D) 共享",
        "答案": "D",
        "来源页码": 84
    },
    {
        "题号": "252",
        "英文题目与选项": "What type of software is often considered secured and validated via community knowledge?\n(A) Proprietary\n(B) Object-oriented\n(C) Open source\n(D) Scripting",
        "中文题目与选项": "什么类型的软件通常被认为是通过社区知识进行安全和验证的？\n(A) 专有的\n(B) 面向对象的\n(C) 开源\n(D) 脚本",
        "答案": "C",
        "来源页码": 84
    },
    {
        "题号": "253",
        "英文题目与选项": "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business.\nWhich concept pertains to the required amount of time to restore services to the predetermined level?\n(A) RPO\n(B) RSL\n(C) RTO\n(D) SRE",
        "中文题目与选项": "BCDR 战略通常不涉及组织的整个运营，而只涉及那些被认为对其业务至关重要的运作。\n哪个概念与将服务恢复到预定水平所需的时间有关？\n(A) RPO\n(B) RSL\n(C) RTO\n(D) SRE",
        "答案": "C",
        "来源页码": 85
    },
    {
        "题号": "254",
        "英文题目与选项": "Which of the following would probably best aid an organization in deciding whether to migrate from a legacy environment to a particular cloud provider?\n(A) Rate sheets comparing a cloud provider to other cloud providers\n(B) Cloud provider offers to provide engineering assistance during the migration\n(C) The cost/benefit measure of closing the organization's relocation site (hot site/warm site) and using the cloud for disaster recovery instead\n(D) SLA satisfaction surveys from other (current and past) cloud customers",
        "中文题目与选项": "以下哪项可能最有助于组织决定是否从传统环境迁移到特定的云提供商？\n(A) 将云提供商与其他云提供商进行比较的价目表\n(B) 云提供商在迁移期间提供工程协助的提议\n(C) 关闭组织的迁移站点（热站/温站）并改用云进行灾难恢复的成本/效益评估\n(D) 来自其他（当前和过去）云客户的 SLA 满意度调查",
        "答案": "C",
        "来源页码": 85
    },
    {
        "题号": "255",
        "英文题目与选项": "Which of the following is NOT one of the three components of a federated identity system transaction?\n(A) Relying party\n(B) Identity provider\n(C) User\n(D) Proxy relay",
        "中文题目与选项": "以下哪一项不是联合身份系统事务的三个组成部分之一？\n(A) 依赖方\n(B) 身份提供者\n(C) 用户\n(D) 代理中继",
        "答案": "D",
        "来源页码": 85
    },
    {
        "题号": "256",
        "英文题目与选项": "Which of the following areas of responsibility would be shared between the cloud customer and cloud provider within the Software as a Service (SaaS) category?\n(A) Data\n(B) Governance\n(C) Application\n(D) Physical",
        "中文题目与选项": "在软件即服务（SaaS）类别中，云客户和云提供商将共同分担以下哪个职责项？\n(A) 数据\n(B) 治理\n(C) 应用\n(D) 物理",
        "答案": "C",
        "来源页码": 86
    },
    {
        "题号": "257",
        "英文题目与选项": "Which of the following standards primarily pertains to cabling designs and setups in a data center?\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "中文题目与选项": "以下哪项标准主要与数据中心的布线设计和设置有关？\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "答案": "B",
        "来源页码": 86
    },
    {
        "题号": "258",
        "英文题目与选项": "Which aspects of cloud cross-cutting concerns relate to requirements for systems or applications imposed by law, policy, or standards?\n(A) Regulatory requirements\n(B) Auditability\n(C) Service-level agreements\n(D) Governance",
        "中文题目与选项": "云交叉方面的哪些方面与法律、政策或标准要求对系统或应用程序的要求相关？\n(A) 法规要求\n(B) 可审计性\n(C) 服务级别协议\n(D) 治理",
        "答案": "A",
        "来源页码": 87
    },
    {
        "题号": "259",
        "英文题目与选项": "SOX was enacted because of which of the following?\n(A) Poor BOD oversight\n(B) Lack of independent audits\n(C) Poor financial controls\n(D) All of the above",
        "中文题目与选项": "SOX的制定是因为以下哪一项？\n(A) 董事会监督不力\n(B) 缺乏独立审计\n(C) 财务控制不力\n(D) 以上所有内容",
        "答案": "D",
        "来源页码": 87
    },
    {
        "题号": "260",
        "英文题目与选项": "Designers making applications for the cloud have to take into consideration risks and operational constraints that did not exist or were not as pronounced in the legacy environment. Which of the following is an element cloud app designers may have to consider incorporating in software for the cloud that might not have been as important in the legacy environment?\n(A) IAM capability\n(B) DDoS resistance\n(C) Encryption for data at rest and in motion\n(D) Field validation",
        "中文题目与选项": "为云设计应用程序的设计师必须考虑到在传统环境中不存在或不明显的风险和操作限制。以下哪一项是在传统环境中可能不那么重要，但云应用程序设计者可能需要在云软件中考虑的一个因素？\n(A) IAM功能\n(B) DDoS抵抗能力\n(C) 静态和动态数据加密\n(D) 字段验证",
        "答案": "C",
        "来源页码": 87
    },
    {
        "题号": "261",
        "英文题目与选项": "Which of the following items is a risk associated with manual patching, especially in cloud environments?\n(A) No notice before the impact is realized\n(B) Lack of applicability to the environment\n(C) Patches may or may not address the vulnerability they were designed to fix\n(D) The possibility for human error",
        "中文题目与选项": "以下选项是与手动补丁相关的风险，尤其是在云环境中？\n(A) 在影响实现之前无通知\n(B) 对环境缺乏适用性\n(C) 补丁程序可能会或可能不会解决其设计用于修复的漏洞\n(D) 人为错误的可能性",
        "答案": "D",
        "来源页码": 88
    },
    {
        "题号": "262",
        "英文题目与选项": "With an API, various features and optimizations are highly desirable to scalability, reliability, and security. What does the REST API support that the SOAP API does NOT support?\n(A) Acceleration\n(B) Caching\n(C) Redundancy\n(D) Encryption",
        "中文题目与选项": "使用 API，各种特性和优化对于可扩展性、可靠性和安全性都是非常理想的。REST API 支持而 SOAP API 不支持的内容是什么？\n(A) 加速\n(B) 缓存\n(C) 冗余\n(D) 加密",
        "答案": "B",
        "来源页码": 88
    },
    {
        "题号": "263",
        "英文题目与选项": "Data transformation in a cloud environment should be of great concern to organizations considering cloud migration because it could affect data classification processes/implementations.\n(A) Multitenancy\n(B) Virtualization\n(C) Remote access\n(D) Physical distance",
        "中文题目与选项": "考虑云迁移的组织应非常关注云环境中的数据转换，因为可能会影响数据分类过程/实施。\n(A) 多租户技术\n(B) 虚拟化\n(C) 远程访问\n(D) 物理距离",
        "答案": "B",
        "来源页码": 88
    },
    {
        "题号": "264",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes 'injection.' In most cases, what is the method for reducing the risk of an injection attack?\n(A) User training\n(B) Hardening the OS\n(C) Input validation/bounds checking\n(D) Physical locks",
        "中文题目与选项": "开放式 Web 应用程序安全项目（OWASP）十大威胁是由应用程序开发专家组成的成员驱动的 OWASP 委员会制定的网络应用程序安全威胁列表，大约每 24 个月发布一次。2013 年 OWASP 十大榜单包括“注入”。在大多数情况下，降低注入攻击风险的方法是什么？\n(A) 用户培训\n(B) 加固操作系统\n(C) 输入验证/边界检查\n(D) 物理锁",
        "答案": "C",
        "来源页码": 89
    },
    {
        "题号": "265",
        "英文题目与选项": "Which cloud deployment model is MOST likely to offer free or very cheap services to users?\n(A) Hybrid\n(B) Community\n(C) Public\n(D) Private",
        "中文题目与选项": "哪种云部署模型最可能向用户提供免费或非常廉价的服务？\n(A) 混合云\n(B) 社区云\n(C) 公有云\n(D) 私有云",
        "答案": "C",
        "来源页码": 89
    },
    {
        "题号": "266",
        "英文题目与选项": "Which of the following is the recommended operating range for temperature and humidity in a data center?\n(A) Between 62°F–81°F and 40%–65% relative humidity\n(B) Between 64°F–81°F and 40%–60% relative humidity\n(C) Between 64°F–84°F and 30%–60% relative humidity\n(D) Between 60°F–85°F and 40%–60% relative humidity",
        "中文题目与选项": "以下哪项是数据中心温度和湿度的建议工作范围？\n(A) 温度 62°F–81°F，湿度 40%–65%\n(B) 温度 64°F–81°F，湿度 40%–60%\n(C) 温度 64°F–84°F，湿度 30%–60%\n(D) 温度 60°F–85°F，湿度 40%–60%",
        "答案": "B",
        "来源页码": 89
    },
    {
        "题号": "267",
        "英文题目与选项": "Which of the following is the best way to reduce the risk that a specific application will not provide the appropriate level of functionality and performance when it is moved from the legacy environment into the cloud?\n(A) Remove the application from the organization's production environment, and replace it with something else.\n(B) Negotiate and conduct a trial run in the cloud environment for that application before permanently migrating.\n(C) Make sure the application is fully updated and patched according to all vendor specifications.\n(D) Run the application in an emulator.",
        "中文题目与选项": "以下哪一项可能是降低特定应用程序从传统环境迁移到云时无法提供适当级别的功能和性能风险的最佳方法？\n(A) 从组织的生产环境中删除该应用程序，并用其他程序替换它。\n(B) 在正式迁移之前，协商并在云环境中为该应用程序进行试运行。\n(C) 确保应用程序已根据所有供应商规范完全更新和修补。\n(D) 在模拟器中运行该应用程序。",
        "答案": "B",
        "来源页码": 90
    },
    {
        "题号": "268",
        "英文题目与选项": "Which kind of SSAE audit reviews controls dealing with the organization's controls for assuring the confidentiality, integrity, and availability of data?\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "中文题目与选项": "哪种 SSAE 审计会审查与组织确保数据的机密性、完整性和可用性相关的控制措施？\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "答案": "B",
        "来源页码": 90
    },
    {
        "题号": "269",
        "英文题目与选项": "Which of the following top security threats involves attempting to send invalid commands to an application in an attempt to get the application to execute the code?\n(A) Cross-site scripting\n(B) Injection\n(C) Insecure direct object references\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种安全威胁涉及试图向应用程序发送无效命令以使应用程序执行代码？\n(A) 跨站点脚本攻击\n(B) 注入攻击\n(C) 不安全的直接对象引用\n(D) 跨站请求伪造",
        "答案": "B",
        "来源页码": 90
    },
    {
        "题号": "270",
        "英文题目与选项": "Every cloud service provider that opts to join the CSA STAR program registry must complete a\n(A) SOC 2, Type 2 audit report\n(B) Consensus Assessment Initiative Questionnaire (CAIQ)\n(C) NIST 800-37 RMF audit\n(D) ISO 27001 ISMS review",
        "中文题目与选项": "每个选择加入 CSA STAR 计划注册的云服务提供商必须完成：\n(A) SOC 2 第二类审计报告\n(B) 共识评估倡议问卷 (CAIQ)\n(C) NIST 800-37 风险管理框架审计\n(D) ISO 27001 信息安全管理体系评审",
        "答案": "B",
        "来源页码": 90
    },
    {
        "题号": "271",
        "英文题目与选项": "TLS uses ______ to authenticate a connection and create a shared secret for the duration of the session.\n(A) SAML 2.0\n(B) X.509 certificates\n(C) 802.11x\n(D) The Diffie-Hellman process",
        "中文题目与选项": "TLS 使用 ______ 来验证连接并在会话期间创建共享密钥。\n(A) SAML 2.0\n(B) X.509 证书\n(C) 802.11x 标准\n(D) Diffie-Hellman 过程",
        "答案": "B",
        "来源页码": 91
    },
    {
        "题号": "272",
        "英文题目与选项": "The European Union is often considered the world leader in regard to the privacy of personal data and has declared privacy to be a \"human right.\" In what year did the EU first assert this principle?\n(A) 1995\n(B) 2000\n(C) 2010\n(D) 1999",
        "中文题目与选项": "欧盟经常被认为是个人数据隐私方面的世界领导者，并宣布隐私是一项“人权”。欧盟在何年首次提出这一原则？\n(A) 1995\n(B) 2000\n(C) 2010\n(D) 1999",
        "答案": "A",
        "来源页码": 91
    },
    {
        "题号": "273",
        "英文题目与选项": "Software-defined networking (SDN) is intended to separate different network capabilities and allow for the granting of granular configurations, permissions, and features to non-network staff or customers. Which network capability is separated from the forwarding of traffic?\n(A) Routing\n(B) Firewalling\n(C) Filtering\n(D) IPS",
        "中文题目与选项": "软件定义网络（SDN）旨在分离不同的网络功能，并允许向非网络人员或客户授予细粒度的配置、权限和功能。哪种网络功能与流量转发分离？\n(A) 路由功能\n(B) 防火墙功能\n(C) 过滤功能\n(D) 入侵防护系统（IPS）",
        "答案": "A",
        "来源页码": 91
    },
    {
        "题号": "274",
        "英文题目与选项": "Which of the following is NOT a component of access control?\n(A) Accounting\n(B) Federation\n(C) Authorization\n(D) Authentication",
        "中文题目与选项": "以下哪项不是访问控制的组成部分？\n(A) 记账\n(B) 联合\n(C) 授权\n(D) 验证",
        "答案": "B",
        "来源页码": 92
    },
    {
        "题号": "275",
        "英文题目与选项": "Which data sanitation method is also commonly referred to as \"zeroing\"?\n(A) Overwriting\n(B) Nullification\n(C) Blanking\n(D) Deleting",
        "中文题目与选项": "哪种数据清理方法也通常称为“清零”？\n(A) 覆写\n(B) 置空\n(C) 清空\n(D) 删除",
        "答案": "A",
        "来源页码": 92
    },
    {
        "题号": "276",
        "英文题目与选项": "Which of the following components are part of what a CCSP should review when looking at contracting with a cloud service provider?\n(A) Redundant uplink grafts\n(B) Background checks for the provider's personnel\n(C) The physical layout of the datacenter\n(D) Use of subcontractors",
        "中文题目与选项": "在考虑与云服务提供商签订合同时，CCSP应审查以下哪些组件？\n(A) 冗余上行链路配置\n(B) 供应商人员的背景调查\n(C) 数据中心的物理布局\n(D) 分包商的使用",
        "答案": "D",
        "来源页码": 92
    },
    {
        "题号": "277",
        "英文题目与选项": "In which cloud service model is the customer required to maintain the operating system?\n(A) IaaS\n(B) CaaS\n(C) PaaS\n(D) SaaS",
        "中文题目与选项": "在哪种云服务模式下，客户需要维护操作系统？\n(A) 基础设施即服务（IaaS）\n(B) 容器即服务（CaaS）\n(C) 平台即服务（PaaS）\n(D) 软件即服务（SaaS）",
        "答案": "A",
        "来源页码": 93
    },
    {
        "题号": "278",
        "英文题目与选项": "The cloud customer will have the most control of their data and systems, and the cloud provider will have the least amount of responsibility, in which cloud computing arrangement?\n(A) IaaS\n(B) SaaS\n(C) Community cloud\n(D) PaaS",
        "中文题目与选项": "在哪种云计算模式下，云客户将对其数据和系统拥有最大的控制权，而云提供商将承担最少的责任？\n(A) 基础设施即服务（IaaS）\n(B) 软件即服务（SaaS）\n(C) 社区云\n(D) 平台即服务（PaaS）",
        "答案": "A",
        "来源页码": 93
    },
    {
        "题号": "279",
        "英文题目与选项": "Without the large financial resources of major corporations, small companies can obtain which of the following impressive and cost-effective services by moving to a cloud environment?\n(A) Regulatory\n(B) Security\n(C) Testing\n(D) Development",
        "中文题目与选项": "如果没有大型公司的大量资金，小型公司可以通过迁移到云环境来获得以下哪些显著且经济高效的服务？\n(A) 监管\n(B) 安全\n(C) 测试\n(D) 开发",
        "答案": "B",
        "来源页码": 94
    },
    {
        "题号": "280",
        "英文题目与选项": "When using an IaaS solution, what is a key benefit provided to the customer?\n(A) Metered and priced on the basis of units consumed\n(B) Increased energy and cooling system efficiencies\n(C) Transferred cost of ownership\n(D) The ability to scale up infrastructure services based on projected usage",
        "中文题目与选项": "使用 IaaS 解决方案时，为客户提供的关键好处是什么？\n(A) 根据消耗单位计量和定价\n(B) 提高能源和冷却系统效率\n(C) 所有权转移成本\n(D) 能够根据预计使用情况扩展基础架构服务",
        "答案": "A",
        "来源页码": 94
    },
    {
        "题号": "281",
        "英文题目与选项": "On large distributed systems with pooled resources cloud computing relies on extensive orchestration to maintain the environment and the constant provisioning of resources.\nWhich of the following is crucial to the orchestration and automation of networking resources within a cloud?\n(A) DNSSEC\n(B) DNS\n(C) DCOM\n(D) DHCP",
        "中文题目与选项": "在具有集群资源的大型分布式系统上，云计算依赖广泛的协调来维护环境并持续提供资源。\n以下哪项对云中网络资源的协调和自动化至关重要？\n(A) DNSSEC\n(B) DNS\n(C) DCOM\n(D) DHCP",
        "答案": "D",
        "来源页码": 95
    },
    {
        "题号": "282",
        "英文题目与选项": "User access to the cloud environment can be administered in all of the following ways except:\n(A) Customer directly administers access\n(B) Customer provides administration on behalf of the provider\n(C) Provider provides administration on behalf of the customer\n(D) Third party provides administration on behalf of the customer",
        "中文题目与选项": "用户对云环境的访问可以通过以下所有方式进行管理，除了：\n(A) 客户直接管理访问\n(B) 客户代表提供商进行管理\n(C) 提供商代表客户进行管理\n(D) 第三方代表客户进行管理",
        "答案": "B",
        "来源页码": 95
    },
    {
        "题号": "283",
        "英文题目与选项": "What type of solution is at the core of virtually all directory services?\n(A) WS\n(B) LDAP\n(C) ADFS\n(D) PKI",
        "中文题目与选项": "几乎所有目录服务的核心是什么类型的解决方案？\n(A) WS\n(B) LDAP\n(C) ADFS\n(D) PKI",
        "答案": "B",
        "来源页码": 95
    },
    {
        "题号": "284",
        "英文题目与选项": "Who will determine data classifications for the cloud customer?\n(A) The cloud provider\n(B) NIST\n(C) Regulators\n(D) The cloud customer",
        "中文题目与选项": "谁将为云客户确定数据分类？\n(A) 云提供商\n(B) NIST\n(C) 监管机构\n(D) 云客户",
        "答案": "D",
        "来源页码": 96
    },
    {
        "题号": "285",
        "英文题目与选项": "Implementing baselines on systems would take an enormous amount of time and resources if the staff had to apply them to each server, and over time it would be almost impossible to keep all the systems in sync on an ongoing basis.\nWhich of the following is NOT a package that can be used for implementing and maintaining baselines across an enterprise?\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "中文题目与选项": "如果工作人员必须将基线应用于每台服务器，那么在系统上实施基线将花费大量时间和资源，随着时间推移几乎不可能持续保持所有系统的同步。\n以下哪个选项不是可用于在整个企业中实施和维护基线的软件包？\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "答案": "D",
        "来源页码": 96
    },
    {
        "题号": "286",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes \"using components with known vulnerabilities.\" Why would an organization ever use components with known vulnerabilities to create software?\n(A) The organization is insured.\n(B) The particular vulnerabilities only exist in a context not being used by developers.\n(C) Some vulnerabilities only exist in foreign countries.\n(D) A component might have a hidden vulnerability.",
        "中文题目与选项": "开放式 Web 应用程序安全项目（OWASP）十大威胁是由应用程序开发专家组成的成员驱动的 OWASP 委员会列出的网络应用程序安全威胁列表，大约每 24 个月发布一次。2013 年 OWASP 十大名单包括“使用具有已知漏洞的组件”。为什么一个组织会使用具有已知缺陷的组件来创建软件？\n(A) 该组织已投保。\n(B) 特定漏洞仅存在于开发人员未使用的环境中。\n(C) 一些漏洞只存在于外国。\n(D) 组件可能存在隐藏的漏洞。",
        "答案": "B",
        "来源页码": 97
    },
    {
        "题号": "287",
        "英文题目与选项": "With finite resources available within a cloud, even the largest cloud providers will at times need to determine which customers will receive additional resources first. What is the term associated with this determination?\n(A) Weighting\n(B) Prioritization\n(C) Shares\n(D) Scoring",
        "中文题目与选项": "由于云内可用的资源有限，即使是最大的云提供商有时也需要确定哪些客户将首先获得额外的资源。与此决定相关的术语是什么？\n(A) 权重\n(B) 优先级\n(C) 共享\n(D) 评分",
        "答案": "C",
        "来源页码": 97
    },
    {
        "题号": "288",
        "英文题目与选项": "Which of the following vulnerability types involves an application not being able to verify its own authorization when the user first inputs?\n(A) Cross-site request forgery\n(B) Missing function-level access control\n(C) Injection\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种漏洞类型涉及的应用程序在用户首次输入时无法验证其自身部分的授权？\n(A) 跨站请求伪造\n(B) 缺少功能级别访问控制\n(C) 注入\n(D) 跨站脚本",
        "答案": "B",
        "来源页码": 98
    },
    {
        "题号": "289",
        "英文题目与选项": "Which document will enforce uptime and availability requirements between the cloud customer and cloud provider?\n(A) Contract\n(B) Operational level agreement\n(C) Service level agreement\n(D) Regulation",
        "中文题目与选项": "哪个文档将在云客户和云提供商之间强制执行正常运行时间和可用性要求？\n(A) 合同\n(B) 运作水平协议\n(C) 服务水平协议\n(D) 规章",
        "答案": "C",
        "来源页码": 98
    },
    {
        "题号": "290",
        "英文题目与选项": "According to the (ISC)² Cloud Secure Data Life Cycle, which phase comes soon after (or at the same time as) the Create phase?\n(A) Store\n(B) Use\n(C) Deploy\n(D) Archive",
        "中文题目与选项": "根据 (ISC)² 云安全数据生命周期，哪个阶段在创建阶段之后（或同时）？\n(A) 存储\n(B) 使用\n(C) 部署\n(D) 归档",
        "答案": "A",
        "来源页码": 98
    },
    {
        "题号": "291",
        "英文题目与选项": "Which of the following pertains to a macro-level approach to data center design rather than the traditional tiered approach to data centers?\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "中文题目与选项": "以下哪项与数据中心设计的宏观方法相关，而不是传统的数据中心分层方法？\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime研究所",
        "答案": "A",
        "来源页码": 99
    },
    {
        "题号": "292",
        "英文题目与选项": "You are the security manager for a software development firm. Your company is interested in using a managed cloud service provider for hosting its testing environment. Previous releases have shipped with major flaws that were not detected in the testing phase; leadership wants to avoid repeating that problem.\nWhat tool/technique/technology might you suggest to aid in identifying programming errors?\n(A) Vulnerability scans\n(B) Open source review\n(C) SOC audits\n(D) Regulatory review",
        "中文题目与选项": "你是一家软件开发公司的安全经理。贵公司有兴趣使用托管云服务提供商来托管测试环境。以前的版本在测试阶段未能发现重大缺陷，领导层希望避免重蹈覆辙。\n您建议使用什么工具/技术/工艺来帮助识别编程错误？\n(A) 漏洞扫描\n(B) 开源审查\n(C) SOC审计\n(D) 监管审查",
        "答案": "B",
        "来源页码": 99
    },
    {
        "题号": "293",
        "英文题目与选项": "Which of the following is the least challenging with regard to eDiscovery in the cloud?\n(A) Identifying roles such as data owner, controller and processor\n(B) Decentralization of data storage\n(C) Forensic analysis\n(D) Complexities of international law",
        "中文题目与选项": "以下哪项在云中的电子取证中挑战最小？\n(A) 识别角色，如数据所有者、控制者和处理者\n(B) 数据存储的去中心化\n(C) 取证分析\n(D) 国际法律的复杂性",
        "答案": "C",
        "来源页码": 99
    },
    {
        "题号": "294",
        "英文题目与选项": "Which of the following methods for the safe disposal of electronic records can always be used in a cloud environment?\n(A) Physical destruction\n(B) Encryption\n(C) Overwriting\n(D) Degaussing",
        "中文题目与选项": "以下哪种安全处理电子记录的方法始终可以在云环境中使用？\n(A) 物理破坏\n(B) 加密\n(C) 覆盖\n(D) 消磁",
        "答案": "B",
        "来源页码": 100
    },
    {
        "题号": "295",
        "英文题目与选项": "Which of the following is NOT part of a retention policy?\n(A) Format\n(B) Costs\n(C) Accessibility\n(D) Duration",
        "中文题目与选项": "以下哪项不是保留策略的一部分？\n(A) 格式\n(B) 成本\n(C) 可访问性\n(D) 保存时间",
        "答案": "B",
        "来源页码": 100
    },
    {
        "题号": "296",
        "英文题目与选项": "Regarding roles and responsibilities, what concept and operational process should be clearly defined between the cloud provider and the cloud customer to alleviate any issues or security incidents?\n(A) Incident response\n(B) Problem management\n(C) Change management\n(D) Conflict response",
        "中文题目与选项": "就角色和责任而言，云提供商和云客户之间应明确规定什么概念和操作流程，以缓解任何问题或安全事件？\n(A) 事件响应\n(B) 问题管理\n(C) 变更管理\n(D) 冲突响应",
        "答案": "A",
        "来源页码": 101
    },
    {
        "题号": "297",
        "英文题目与选项": "At which layer does the IPSec protocol operate to encrypt and protect communications between two parties?\n(A) Network\n(B) Application\n(C) Transport\n(D) Data link",
        "中文题目与选项": "IPSec 协议在何一层操作以加密和保护双方之间的通信？\n(A) 网络层\n(B) 应用层\n(C) 传输层\n(D) 数据链路层",
        "答案": "A",
        "来源页码": 101
    },
    {
        "题号": "298",
        "英文题目与选项": "Which regulatory system pertains to the protection of healthcare data?\n(A) HIPAA\n(B) HAS\n(C) HITECH\n(D) HFCA",
        "中文题目与选项": "哪个监管体系与医疗数据保护相关？\n(A) HIPAA\n(B) HAS\n(C) HITECH\n(D) HFCA",
        "答案": "A",
        "来源页码": 101
    },
    {
        "题号": "299",
        "英文题目与选项": "Cryptographic keys should ______.\n(A) Attain at least the same level as the data they can decrypt\n(B) Be kept in a vault\n(C) Be protected by two-person integrity\n(D) Be guarded by security officers",
        "中文题目与选项": "加密密钥应该______。\n(A) 达到至少与它们可以解密的数据一样高的级别\n(B) 存放在金库中\n(C) 由双人分段保护\n(D) 由安全警卫看守",
        "答案": "A",
        "来源页码": 102
    },
    {
        "题号": "300",
        "英文题目与选项": "Who operates the management plane?\n(A) Regulators\n(B) End consumers\n(C) Privileged users\n(D) Privacy data subjects",
        "中文题目与选项": "谁负责操作管理平面？\n(A) 监管者\n(B) 最终消费者\n(C) 特权用户\n(D) 隐私数据主体",
        "答案": "C",
        "来源页码": 102
    },
    {
        "题号": "301",
        "英文题目与选项": "Using one cloud provider for your operational environment and another for your BCDR backup will also give you the additional benefit of ______.\n(A) Allowing any custom VM builds you use to be instantly ported to another environment\n(B) Avoiding vendor lock-in/lockout\n(C) Increased performance\n(D) Lower cost",
        "中文题目与选项": "将一个云提供商用于您的运行环境，而另一个用于BCDR备份，将为您带来______方面的额外好处。\n(A) 允许您使用的任何自定义VM构建立即迁移到另一个环境\n(B) 避免供应商锁定/锁出\n(C) 提高性能\n(D) 降低成本",
        "答案": "B",
        "来源页码": 102
    },
    {
        "题号": "302",
        "英文题目与选项": "If the cloud provider is compromised and causes a data breach, including personally identifiable information (PII), who is ultimately responsible?\n(A) User\n(B) Data subject\n(C) Cloud provider\n(D) Cloud customer",
        "中文题目与选项": "如果云提供商被攻破，导致包括个人身份信息（PII）在内的数据泄露，最终由谁负责？\n(A) 用户\n(B) 数据主体\n(C) 云提供商\n(D) 云客户",
        "答案": "D",
        "来源页码": 103
    },
    {
        "题号": "303",
        "英文题目与选项": "Which of the following best describes the purpose and scope of ISO/IEC 27034-1?\n(A) Describes international privacy standards for cloud computing\n(B) Serves as a newer replacement for NIST 800-52-4\n(C) Provides an overview of network and infrastructure security designed to secure cloud applications\n(D) Provides an overview of application security that introduces definitive concepts, principles, and processes involved in application security",
        "中文题目与选项": "以下哪个选项最能描述 ISO/IEC 27034-1 的目的和范围？\n(A) 说明云计算的国际隐私标准\n(B) 作为 NIST 800-52-4 的更新替代版本\n(C) 提供保护云应用程序的网络和基础设施安全的概述\n(D) 提供应用程序安全的概述，介绍应用程序安全所涉及的明确概念、原则和过程",
        "答案": "D",
        "来源页码": 103
    },
    {
        "题号": "304",
        "英文题目与选项": "You have been tasked by management to offload processing and validation of incoming encoded data from your application servers and their associated APIs. Which of the following would be the most appropriate device or software to consider?\n(A) XML accelerator\n(B) XML firewall\n(C) Web application firewall\n(D) Firewall",
        "中文题目与选项": "管理层要求你将应用程序服务器及其相关 API 的传入编码数据的处理和验证卸载出去。以下哪项是最适合考虑的设备或软件？\n(A) XML 加速器\n(B) XML 防火墙\n(C) Web 应用防火墙\n(D) 防火墙",
        "答案": "A",
        "来源页码": 103
    },
    {
        "题号": "305",
        "英文题目与选项": "When using transparent encryption of a database, where does the encryption engine reside?\n(A) At the application using the database\n(B) On the instance(s) attached to the volume\n(C) In a key management system\n(D) Within the database",
        "中文题目与选项": "使用数据库的透明加密时，加密引擎位于何处？\n(A) 在使用数据库的应用程序中\n(B) 位于连接到卷的实例上\n(C) 位于密钥管理系统中\n(D) 位于数据库内部",
        "答案": "D",
        "来源页码": 103
    },
    {
        "题号": "306",
        "英文题目与选项": "You are the IT security manager for a video game software development company. Which of the following is most likely to be your primary concern on a daily basis?\n(A) Health and human safety\n(B) Security flaws in your products\n(C) Security flaws in your organization\n(D) Regulatory compliance",
        "中文题目与选项": "您是一家视频游戏软件开发公司的IT安全经理。以下哪一项最可能是您日常关注的主要问题？\n(A) 健康和人身安全\n(B) 产品中的安全缺陷\n(C) 组织中的安全漏洞\n(D) 法规遵从性",
        "答案": "C",
        "来源页码": 104
    },
    {
        "题号": "307",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes 'security misconfiguration.' Which of these is a technique to reduce the potential for a security misconfiguration?\n(A) Get regulatory approval for major configuration modifications\n(B) Update the BCDR plan on a timely basis\n(C) Train all users on proper security procedures\n(D) Perform periodic scans and audits of the environment",
        "中文题目与选项": "开放式Web应用程序安全项目（OWASP）十大威胁是由应用程序开发专家组成的成员驱动型OWASP委员会制定的网络应用程序安全威胁列表，大约每24个月发布一次。2013年OWASP十大威胁列表包括“安全错误配置”。以下哪一项是降低安全错误配置可能性的技术？\n(A) 获得监管部门对主要配置修改的批准\n(B) 及时更新BCDR计划\n(C) 培训所有用户正确的安全操作程序\n(D) 对环境进行定期扫描和审计",
        "答案": "D",
        "来源页码": 104
    },
    {
        "题号": "308",
        "英文题目与选项": "A comprehensive BCDR plan will include many or most of the traditional concerns of any data center operations. However, what factor is often overlooked when developing a BCDR plan?\n(A) Availability of staff\n(B) Capacity of the BCDR site\n(C) Recovery of services\n(D) Change management processes",
        "中文题目与选项": "一个全面的 BCDR 计划将包含在任何数据中心操作系统中的许多或大部分传统问题。然而，在制定 BCDR 计划时，经常被忽略的一个考虑因素是什么？\n(A) 员工的可用性\n(B) BCDR 现场的容量\n(C) 恢复服务\n(D) 变更管理流程",
        "答案": "C",
        "来源页码": 105
    },
    {
        "题号": "309",
        "英文题目与选项": "Your company has just been served with an eDiscovery order to collect event data and other pertinent information from your application during a specific period of time, to be used as potential evidence for a court proceeding. Which of the following, apart from ensuring that you collect all pertinent data, would be the MOST important consideration?\n(A) Encryption\n(B) Chain of custody\n(C) Compression\n(D) Confidentiality",
        "中文题目与选项": "您的公司刚收到一份 eDiscovery 法令，要求在特定时间段内从您的应用程序中收集事件数据和其他相关信息，以作为法庭诉讼的潜在证据。除了确保您收集所有相关数据外，以下哪项是最重要的考虑因素？\n(A) 加密\n(B) 证据链\n(C) 压缩\n(D) 机密性",
        "答案": "B",
        "来源页码": 105
    },
    {
        "题号": "310",
        "英文题目与选项": "Which technology is NOT commonly used for security with data in transit?\n(A) DNSSEC\n(B) IPsec\n(C) VPN\n(D) HTTPS",
        "中文题目与选项": "哪种技术不常用于传输数据的安全？\n(A) DNSSEC\n(B) IPsec\n(C) VPN\n(D) HTTPS",
        "答案": "A",
        "来源页码": 105
    },
    {
        "题号": "311",
        "英文题目与选项": "Your IT steering committee has, at a high level, approved your project to begin using cloud services. However, the committee is concerned with getting locked into a single cloud provider and has flagged the ability to easily move between cloud providers as a top priority. It also wants to save costs by reusing components.\nWhich cross-cutting aspect of cloud computing would be your primary focus as your project plan continues to develop and you begin to evaluate cloud providers?\n(A) Interoperability\n(B) Resiliency\n(C) Scalability\n(D) Portability",
        "中文题目与选项": "您的 IT 指导委员会已在高层批准您的项目开始使用云服务。然而，该委员会担心被锁定在单个云提供商中，并将能够在云提供商之间轻松迁移的能力列为首要任务。同时，它还希望通过重用组件来节省成本。\n随着项目计划的进一步制定以及您开始评估云提供商，云计算的哪个交叉方面将成为您的主要关注点？\n(A) 互操作性\n(B) 弹性\n(C) 可扩展性\n(D) 可移植性",
        "答案": "A",
        "来源页码": 106
    },
    {
        "题号": "312",
        "英文题目与选项": "The final phase of the cloud data lifecycle is the destroy phase, where data is ultimately deleted and done so in a secure manner to ensure it cannot be recovered or reconstructed. Which cloud service category poses the most challenges to data destruction for the cloud customer?\n(A) Platform\n(B) Software\n(C) Infrastructure\n(D) Desktop",
        "中文题目与选项": "云数据生命周期的最后一个阶段是销毁阶段，在这个阶段，数据会被最终删除，并以安全的方式进行，以确保无法恢复或重建。哪一种云服务类别对数据销毁对云客户构成最大的挑战？\n(A) 平台\n(B) 软件\n(C) 基础设施\n(D) 桌面",
        "答案": "A",
        "来源页码": 106
    },
    {
        "题号": "313",
        "英文题目与选项": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing.\nAccording to the CSA, what aspect of managed cloud services makes the threat of malicious insiders so alarming?\n(A) Scalability\n(B) Multitenancy\n(C) Metered service\n(D) Flexibility",
        "中文题目与选项": "云安全联盟 (CSA) 发布了“臭名昭著的九项”，这是针对参与云计算的组织的常见威胁列表。\n根据 CSA 的说法，托管云服务的哪个方面使得恶意内部人员的威胁如此令人担忧？\n(A) 可扩展性\n(B) 多租户技术\n(C) 计量服务\n(D) 灵活性",
        "答案": "B",
        "来源页码": 107
    },
    {
        "题号": "314",
        "英文题目与选项": "When is a virtual machine susceptible to attacks while a physical server in the same state would not be?\n(A) When it is behind a WAF\n(B) When it is behind an IPS\n(C) When it is not patched\n(D) When it is powered off",
        "中文题目与选项": "什么时候虚拟机会受到攻击，而处于相同状态的物理服务器不会受到攻击？\n(A) 当它在 WAF 后面时\n(B) 当它在 IPS 后面时\n(C) 当它未修补时\n(D) 当它关闭电源时",
        "答案": "D",
        "来源页码": 107
    },
    {
        "题号": "315",
        "英文题目与选项": "If a cloud provider goes out of business and its customers did not perform sufficient due diligence, they may be harmed. What do we call this issue?\n(A) Vendor lock-in\n(B) Vendor lock-out\n(C) Vendor inability\n(D) Unsealed",
        "中文题目与选项": "如果云提供商倒闭，而其客户未进行充分的尽职调查，他们可能会受到损害。我们怎么称呼这个问题？\n(A) 供应商锁定\n(B) 供应商锁出\n(C) 供应商无能力\n(D) 未密封的",
        "答案": "B",
        "来源页码": 108
    },
    {
        "题号": "316",
        "英文题目与选项": "What type of PII is regulated based on the type of application or per the conditions of the specific hosting agreement?\n(A) Specific\n(B) Contractual\n(C) Regulated\n(D) Jurisdictional",
        "中文题目与选项": "什么类型的 PII 是根据应用程序类型或特定托管协议的条件进行管理的？\n(A) 具体的\n(B) 契约的\n(C) 受管制的\n(D) 司法管辖区的",
        "答案": "B",
        "来源页码": 108
    },
    {
        "题号": "317",
        "英文题目与选项": "At which stage of the BCDR plan creation phase should security be included in discussions?\n(A) Define scope\n(B) Analyze\n(C) Assess risk\n(D) Gather requirements",
        "中文题目与选项": "在 BCDR 计划创建阶段的哪个阶段，应将安全性纳入讨论？\n(A) 定义范围\n(B) 分析\n(C) 评估风险\n(D) 收集需求",
        "答案": "A",
        "来源页码": 108
    },
    {
        "题号": "318",
        "英文题目与选项": "Which of the following aspects of security is solely the responsibility of the cloud provider?\n(A) Regulatory compliance\n(B) Physical security\n(C) Operating system auditing\n(D) Personal security of developers",
        "中文题目与选项": "以下哪项安全方面完全由云服务提供商负责？\n(A) 法规合规性\n(B) 物理安全性\n(C) 操作系统审计\n(D) 开发者的个人安全",
        "答案": "B",
        "来源页码": 109
    },
    {
        "题号": "319",
        "英文题目与选项": "Which protocol allows a system to use block-level storage as if it was a SAN, but over TCP network traffic instead?\n(A) SATA\n(B) iSCSI\n(C) SAS\n(D) SCST",
        "中文题目与选项": "哪种协议允许系统像使用 SAN 一样使用块级存储，但通过 TCP 网络通信？\n(A) SATA\n(B) iSCSI\n(C) SAS\n(D) SCST",
        "答案": "B",
        "来源页码": 109
    },
    {
        "题号": "320",
        "英文题目与选项": "Which of the following methods of addressing risk is most associated with insurance?\n(A) Mitigation\n(B) Transference\n(C) Avoidance\n(D) Acceptance",
        "中文题目与选项": "以下哪种解决风险的方法与保险最相关？\n(A) 缓解\n(B) 转移\n(C) 避免\n(D) 接受",
        "答案": "B",
        "来源页码": 109
    },
    {
        "题号": "321",
        "英文题目与选项": "Which of the following are cloud computing roles?\n(A) Cloud service broker and user\n(B) Cloud customer and financial auditor\n(C) CSP and backup service provider\n(D) Cloud service auditor and object",
        "中文题目与选项": "以下哪些是云计算角色？\n(A) 云服务代理和用户\n(B) 云客户和财务审计员\n(C) CSP 和备份服务提供商\n(D) 云服务审计员和对象",
        "答案": "C",
        "来源页码": 110
    },
    {
        "题号": "322",
        "英文题目与选项": "With software-defined networking (SDN), which two types of network operations are segregated to allow for granularity and delegation of administrative access and functions?\n(A) Filtering and forwarding\n(B) Filtering and firewalling\n(C) Firewalling and forwarding\n(D) Forwarding and protocol",
        "中文题目与选项": "对于软件定义网络（SDN），哪两种类型的网络操作是分开的，以允许管理访问和功能的粒度和委派？\n(A) 过滤和转发\n(B) 过滤和防火墙\n(C) 防火墙和转发\n(D) 转发和协议",
        "答案": "A",
        "来源页码": 110
    },
    {
        "题号": "323",
        "英文题目与选项": "Because cloud providers will not give detailed information out about their infrastructures and practices to the general public, they will often use established auditing reports to ensure public trust where the reputation of the auditors serves for assurance.\nWhich type of audit reports can be used for general public trust assurances?\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "中文题目与选项": "由于云提供商不会向公众提供有关其基础设施和实践的详细信息，他们通常会使用已建立的审计报告来确保公众的信任，而审计员的声誉则起到保证作用。\n哪种类型的审计报告可用于一般公众信任保证？\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "答案": "C",
        "来源页码": 111
    },
    {
        "题号": "324",
        "英文题目与选项": "An audit against the ______ will demonstrate that an organization has a holistic, comprehensive security program.\n(A) SAS 70 standard\n(B) SSAE 16 standard\n(C) SOC 2, Type 2 report matrix\n(D) ISO 27001 certification requirements",
        "中文题目与选项": "对 ______ 的审计将证明一个组织有一个全面、综合的安全计划。\n(A) SAS 70 标准\n(B) SSAE 16 标准\n(C) SOC 2，类型 2 报告矩阵\n(D) ISO 27001 认证要求",
        "答案": "D",
        "来源页码": 111
    },
    {
        "题号": "325",
        "英文题目与选项": "In order to ensure ongoing compliance with regulatory requirements, which phase of the cloud data lifecycle must be tested regularly?\n(A) Archive\n(B) Share\n(C) Store\n(D) Destroy",
        "中文题目与选项": "为了确保持续遵守法规要求，必须定期测试云数据生命周期的哪个阶段？\n(A) 存档\n(B) 共享\n(C) 存储\n(D) 销毁",
        "答案": "A",
        "来源页码": 111
    },
    {
        "题号": "326",
        "英文题目与选项": "Which of the following best describes the Organizational Normative Framework (ONF)?\n(A) A set of application security and best practices catalogued and leveraged by the organization\n(B) A container for components of an application's security and best practices catalogued and leveraged by the organization\n(C) A framework of containers for some of the components of application security and best practices catalogued and leveraged by the organization\n(D) A framework of containers for all components of application security and best practices catalogued and leveraged by the organization",
        "中文题目与选项": "以下哪项最能描述组织规范框架 (ONF)?\n(A) 由组织编目并使用的一组应用程序安全性和最佳实践\n(B) 用于组织编目并使用的应用程序安全组件和最佳实践的容器\n(C) 一个容器框架，用于组织编目并使用应用程序安全性和最佳实践的一些组件\n(D) 一个容器框架，用于组织编目并使用应用程序安全性和最佳实践的所有组件",
        "答案": "D",
        "来源页码": 112
    },
    {
        "题号": "327",
        "英文题目与选项": "Tokenization requires two distinct:\n(A) Authentication factors\n(B) Databases\n(C) Encryption keys\n(D) Personnel",
        "中文题目与选项": "标记化需要两个不同的：\n(A) 身份验证因子\n(B) 数据库\n(C) 加密密钥\n(D) 人员",
        "答案": "C",
        "来源页码": 112
    },
    {
        "题号": "328",
        "英文题目与选项": "With an application hosted in a cloud environment, who could be the recipient of an eDiscovery order?\n(A) Users\n(B) Both the cloud provider and cloud customer\n(C) The cloud customer\n(D) The cloud provider",
        "中文题目与选项": "对于托管在云环境中的应用程序，谁可能是 eDiscovery 令的接收者？\n(A) 用户\n(B) 云提供商和云客户\n(C) 云客户\n(D) 云提供商",
        "答案": "B",
        "来源页码": 113
    },
    {
        "题号": "329",
        "英文题目与选项": "There is a large gap between the privacy laws of the United States and those of the European Union. Bridging this gap is necessary for American companies to do business with European companies and in European markets in many situations, as the American companies are required to comply with the stricter requirements. Which US program was designed to help companies overcome these differences?\n(A) SOX\n(B) HIPAA\n(C) GLBA\n(D) Safe Harbor",
        "中文题目与选项": "美国的隐私法与欧盟的隐私法之间存在很大差距。在许多情况下，美国公司要与欧洲公司及欧洲市场开展业务，必须遵守更严格的要求。哪项美国计划旨在帮助企业克服这些差异？\n(A) SOX 法案\n(B) HIPAA 法案\n(C) GLBA 法案\n(D) 安全港计划（Safe Harbor）",
        "答案": "D",
        "来源页码": 113
    },
    {
        "题号": "330",
        "英文题目与选项": "Which of the following technologies is NOT commonly used for accessing systems and services in a cloud environment in a secure manner?\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "中文题目与选项": "以下哪种技术不常用于以安全方式访问云环境中的系统和服务？\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "答案": "A",
        "来源页码": 114
    },
    {
        "题号": "331",
        "英文题目与选项": "Best practices for key management include all of the following, except:\n(A) Ensure multifactor authentication\n(B) Pass keys out of band\n(C) Have key recovery processes\n(D) Maintain key security",
        "中文题目与选项": "密钥管理的最佳实践包括以下所有内容，但不包括：\n(A) 确保多因素身份验证\n(B) 将密钥通过带外传递\n(C) 具有密钥恢复流程\n(D) 维护密钥安全",
        "答案": "A",
        "来源页码": 114
    },
    {
        "题号": "332",
        "英文题目与选项": "Cloud environments are based entirely on virtual machines and virtual devices, and those images are also in need of storage within the environment. What type of storage is typically used for virtual images?\n(A) Volume\n(B) Structured\n(C) Unstructured\n(D) Object",
        "中文题目与选项": "云环境完全基于虚拟机和虚拟设备，这些映像也需要在环境中进行存储。虚拟映像通常使用哪种类型的存储？\n(A) 卷\n(B) 结构化的\n(C) 非结构化的\n(D) 对象",
        "答案": "D",
        "来源页码": 114
    },
    {
        "题号": "333",
        "英文题目与选项": "Which of the following represents a prioritization of applications or cloud customers for the allocation of additional requested resources when there is a limitation on available resources?\n(A) Provision\n(B) Limit\n(C) Reservation\n(D) Share",
        "中文题目与选项": "当可用资源受到限制时，以下哪项代表应用程序或云客户在分配额外请求资源时的优先级？\n(A) 提供\n(B) 限度\n(C) 预订\n(D) 共享",
        "答案": "D",
        "来源页码": 115
    },
    {
        "题号": "334",
        "英文题目与选项": "To protect data on user devices in a BYOD environment, the organization should consider requiring all the following, except:\n(A) Multifactor authentication\n(B) DLP agents\n(C) Two-person integrity\n(D) Local encryption",
        "中文题目与选项": "为了在 BYOD 环境中保护用户设备上的数据，组织应考虑以下所有要求，但不包括：\n(A) 多因素认证\n(B) DLP 代理\n(C) 双人完整性\n(D) 本地加密",
        "答案": "C",
        "来源页码": 115
    },
    {
        "题号": "335",
        "英文题目与选项": "Firewalls can detect attack traffic by using all these methods except\n(A) Known past behavior in the environment\n(B) Identity of the malicious user\n(C) Point of origination\n(D) Signature matching",
        "中文题目与选项": "防火墙可以使用除以下以外的所有这些方法检测攻击流量\n(A) 环境中已知的过去行为\n(B) 恶意用户的身份\n(C) 起始点\n(D) 签名匹配",
        "答案": "B",
        "来源页码": 116
    },
    {
        "题号": "336",
        "英文题目与选项": "Many of the traditional concepts of systems and services for a traditional data center also apply to the cloud. Both are built around key computing concepts.\nWhich of the following comprise the two facets of computing?\n(A) CPU and software\n(B) CPU and storage\n(C) CPU and memory\n(D) Memory and networking",
        "中文题目与选项": "传统数据中心的系统和服务的许多传统概念也适用于云。两者都是围绕关键计算概念构建的。\n以下哪一项构成了计算的两个方面？\n(A) CPU 和软件\n(B) CPU 和存储\n(C) CPU 和内存\n(D) 内存和网络",
        "答案": "C",
        "来源页码": 116
    },
    {
        "题号": "337",
        "英文题目与选项": "Which of the following is NOT a commonly used communications method within cloud environments to secure data in transit?\n(A) IPSec\n(B) HTTPS\n(C) VPN\n(D) DNSSEC",
        "中文题目与选项": "以下哪一项不是云环境中用于保护传输数据的常用通信方法？\n(A) IPSec\n(B) HTTPS\n(C) VPN\n(D) DNSSEC",
        "答案": "D",
        "来源页码": 116
    },
    {
        "题号": "338",
        "英文题目与选项": "All of the following are identity federation standards commonly found in use today except:\n(A) WS-Federation\n(B) OpenID\n(C) OAuth\n(D) PGP",
        "中文题目与选项": "以下所有标准都是当今常用的身份联合标准，但有一个除外：\n(A) WS-Federation\n(B) OpenID\n(C) OAuth\n(D) PGP",
        "答案": "D",
        "来源页码": 117
    },
    {
        "题号": "339",
        "英文题目与选项": "Which of the following is NOT a common component of a DLP implementation process?\n(A) Discovery\n(B) Monitoring\n(C) Revision\n(D) Enforcement",
        "中文题目与选项": "以下哪项不是 DLP 实施过程的常见组件？\n(A) 发现\n(B) 监测\n(C) 修订\n(D) 执行",
        "答案": "C",
        "来源页码": 117
    },
    {
        "题号": "340",
        "英文题目与选项": "Which security concept would business continuity and disaster recovery fall under?\n(A) Confidentiality\n(B) Availability\n(C) Fault tolerance\n(D) Integrity",
        "中文题目与选项": "业务连续性和灾难恢复属于哪种安全概念？\n(A) 机密性\n(B) 可用性\n(C) 容错性\n(D) 完整性",
        "答案": "B",
        "来源页码": 117
    },
    {
        "题号": "341",
        "英文题目与选项": "Different types of cloud deployment models use different types of storage from traditional data centers along with many new types of software platforms for deploying applications and configurations. Which of the following is NOT a storage type used within a cloud environment?\n(A) Docker\n(B) Object\n(C) Structured\n(D) Volume",
        "中文题目与选项": "不同类型的云部署模型使用不同于传统数据中心的存储类型，以及用于部署应用程序和配置的许多新型软件平台。以下哪项不是云环境中使用的存储类型？\n(A) Docker\n(B) 对象存储\n(C) 结构化存储\n(D) 卷存储",
        "答案": "A",
        "来源页码": 118
    },
    {
        "题号": "342",
        "英文题目与选项": "Which phase of the cloud data lifecycle would be the MOST appropriate for the use of DLP technologies to protect the data?\n(A) Use\n(B) Store\n(C) Share\n(D) Create",
        "中文题目与选项": "云数据生命周期的哪个阶段最适合使用 DLP 技术来保护数据？\n(A) 使用\n(B) 存储\n(C) 共享\n(D) 创建",
        "答案": "C",
        "来源页码": 118
    },
    {
        "题号": "343",
        "英文题目与选项": "What type of data does Digital Rights Management (DRM) protect?\n(A) Consumer\n(B) Personal\n(C) Financial\n(D) Healthcare",
        "中文题目与选项": "数据权限管理（DRM）保护什么类型的数据？\n(A) 消费者\n(B) 个人\n(C) 财务\n(D) 健康",
        "答案": "A",
        "来源页码": 119
    },
    {
        "题号": "344",
        "英文题目与选项": "Which of the following roles is responsible for gathering metrics on cloud services and managing cloud deployments and the deployment processes?\n(A) Cloud service business manager\n(B) Cloud service operations manager\n(C) Cloud service manager\n(D) Cloud service deployment manager",
        "中文题目与选项": "以下哪个角色负责收集云服务的指标，并管理云部署和部署过程？\n(A) 云服务业务经理\n(B) 云服务运营经理\n(C) 云服务经理\n(D) 云服务部署经理",
        "答案": "D",
        "来源页码": 119
    },
    {
        "题号": "345",
        "英文题目与选项": "Which of the following is considered a physical control?\n(A) Fences\n(B) Ceilings\n(C) Carpets\n(D) Doors",
        "中文题目与选项": "以下哪项被视为物理控制？\n(A) 围栏\n(B) 天花板\n(C) 地毯\n(D) 门",
        "答案": "A",
        "来源页码": 119
    },
    {
        "题号": "346",
        "英文题目与选项": "For service provisioning and support what is the ideal amount of interaction between a cloud customer and cloud provider?\n(A) Half\n(B) Full\n(C) Minimal\n(D) Depends on the contract",
        "中文题目与选项": "对于服务供应和支持，云客户和云提供商之间的理想交互量是多少？\n(A) 一半\n(B) 全部\n(C) 最小的\n(D) 取决于合同",
        "答案": "C",
        "来源页码": 120
    },
    {
        "题号": "347",
        "英文题目与选项": "Which kind of SSAE audit report is a cloud customer most likely to receive from a cloud provider?\n(A) SOC 1 Type 1\n(B) SOC 2 Type 2\n(C) SOC 3\n(D) SOC 1 Type 2",
        "中文题目与选项": "云客户最可能从云提供商那里收到哪种 SSAE 审计报告？\n(A) SOC 1 类型 1\n(B) SOC 2 类型 2\n(C) SOC 3\n(D) SOC 1 类型 2",
        "答案": "C",
        "来源页码": 120
    },
    {
        "题号": "348",
        "英文题目与选项": "Which of the following storage types would a customer use in an Infrastructure as a Service (IaaS) cloud offering?\n(A) File and database\n(B) Volume and object\n(C) Cache and database\n(D) Structured and unstructured",
        "中文题目与选项": "在基础架构即服务 (IaaS) 云产品中，客户将使用以下哪种存储类型？\n(A) 文件和数据库\n(B) 卷和对象\n(C) 缓存和数据库\n(D) 结构化和非结构化",
        "答案": "B",
        "来源页码": 121
    },
    {
        "题号": "349",
        "英文题目与选项": "Which of the following is a possible negative aspect of bit-splitting?\n(A) Greater chance of physical theft of assets\n(B) Loss of public image\n(C) Some risk to availability, depending on the implementation\n(D) A small fire hazard",
        "中文题目与选项": "以下哪一项可能是比特分割的负面方面？\n(A) 资产被盗的可能性更大\n(B) 公共形象的丧失\n(C) 对可用性存在一些风险，取决于实施情况\n(D) 小火灾隐患",
        "答案": "C",
        "来源页码": 121
    },
    {
        "题号": "350",
        "英文题目与选项": "Federation allows across organizations.\n(A) Role replication\n(B) Encryption\n(C) Policy\n(D) Access",
        "中文题目与选项": "联合 (Federation) 允许在组织之间进行以下哪项操作？\n(A) 角色复制\n(B) 加密\n(C) 策略\n(D) 访问",
        "答案": "D",
        "来源页码": 121
    },
    {
        "题号": "351",
        "英文题目与选项": "Which process is focused on identifying and mitigating known problems and deficiencies before they occur, as well as on minimizing the impact of incidents that cannot be prevented?\n(A) Availability management\n(B) Continuity management\n(C) Configuration management\n(D) Problem management",
        "中文题目与选项": "哪个过程侧重于在问题发生之前识别和减少已知问题和缺陷，并尽量减少无法预防的事件影响？\n(A) 可用性管理\n(B) 连续性管理\n(C) 配置管理\n(D) 问题管理",
        "答案": "D",
        "来源页码": 122
    },
    {
        "题号": "352",
        "英文题目与选项": "Clustered systems can be used to ensure high availability and load balancing across individual systems through a variety of methodologies.\nWhat process is used within a clustered system to ensure proper load balancing and to maintain the health of the overall system to provide high availability?\n(A) Distributed clustering\n(B) Distributed balancing\n(C) Distributed optimization\n(D) Distributed resource scheduling",
        "中文题目与选项": "集群系统可用于通过各种方法确保各个系统之间的高可用性和负载均衡。\n在集群系统中，使用什么过程来确保适当的负载平衡，并保持整个系统的运行健康以提供高可用性？\n(A) 分布式集群\n(B) 分布式平衡\n(C) 分布式优化\n(D) 分布式资源调度",
        "答案": "D",
        "来源页码": 122
    },
    {
        "题号": "353",
        "英文题目与选项": "A loosely coupled storage cluster will have performance and capacity limitations based on the\n(A) Physical backplane connecting it\n(B) Total number of nodes in the cluster\n(C) Amount of usage demanded\n(D) The performance and capacity in each node",
        "中文题目与选项": "松耦合存储集群的性能和容量限制取决于以下哪项？\n(A) 连接它的物理背板\n(B) 集群中的节点总数\n(C) 所要求的使用量\n(D) 每个节点的性能和容量",
        "答案": "D",
        "来源页码": 122
    },
    {
        "题号": "354",
        "英文题目与选项": "In a Lightweight Directory Access Protocol (LDAP) environment, each entry in a directory server is identified by a _.\n(A) Domain name (DN)\n(B) Distinguished name (DN)\n(C) Directory name (DN)\n(D) Default name (DN)",
        "中文题目与选项": "在轻型目录访问协议（LDAP）环境中，目录服务器中的每个条目都由 _ 标识。\n(A) 域名 (DN)\n(B) 可分辨名称 (DN)\n(C) 目录名称 (DN)\n(D) 默认名称 (DN)",
        "答案": "B",
        "来源页码": 123
    },
    {
        "题号": "355",
        "英文题目与选项": "The management plane is used to administer a cloud environment and perform administrative tasks across a variety of systems, but most specifically it's used with the hypervisors. What does the management plane typically leverage for this orchestration?\n(A) APIs\n(B) Scripts\n(C) TLS\n(D) XML",
        "中文题目与选项": "管理平面用于管理云环境，并跨各种系统执行管理任务，但最具体地说，它与管理程序一起使用。管理平面通常利用什么来实现此编排？\n(A) API\n(B) 脚本\n(C) TLS\n(D) XML",
        "答案": "A",
        "来源页码": 123
    },
    {
        "题号": "356",
        "英文题目与选项": "Deviations from the baseline should be investigated and _.\n(A) Revealed\n(B) Documented\n(C) Encouraged\n(D) Enforced",
        "中文题目与选项": "应调查与基线的偏差，并 _。\n(A) 披露\n(B) 记录在案\n(C) 鼓励\n(D) 强制执行",
        "答案": "B",
        "来源页码": 123
    },
    {
        "题号": "357",
        "英文题目与选项": "The WS-Security standards are built around all of the following standards except which one?\n(A) SAML\n(B) WSDL\n(C) XML\n(D) SOAP",
        "中文题目与选项": "WS-Security 标准是围绕以下所有标准构建的，除了哪一个？\n(A) SAML\n(B) WSDL\n(C) XML\n(D) SOAP",
        "答案": "A",
        "来源页码": 124
    },
    {
        "题号": "358",
        "英文题目与选项": "Which of the following is considered an administrative control?\n(A) Access control process\n(B) Keystroke logging\n(C) Door locks\n(D) Biometric authentication",
        "中文题目与选项": "以下哪项被视为管理控制？\n(A) 访问控制流程\n(B) 键盘记录\n(C) 门锁\n(D) 生物特征认证",
        "答案": "A",
        "来源页码": 124
    },
    {
        "题号": "359",
        "英文题目与选项": "A process for ______ can aid in protecting against data disclosure due to lost devices.\n(A) User punishment\n(B) Credential revocation\n(C) Law enforcement notification\n(D) Device tracking",
        "中文题目与选项": "________ 的流程有助于防止设备丢失导致的数据泄露。\n(A) 用户惩罚\n(B) 凭据吊销\n(C) 执法通知\n(D) 设备跟踪",
        "答案": "B",
        "来源页码": 124
    },
    {
        "题号": "360",
        "英文题目与选项": "Which of the following threat types involves the sending of commands or arbitrary data through input fields in an application in an attempt to get that code executed as part of normal processing?\n(A) Cross-site scripting\n(B) Missing function-level access control\n(C) Injection\n(D) Cross-site forgery",
        "中文题目与选项": "以下哪种威胁类型涉及通过应用程序中的输入字段发送命令或任意数据，试图将代码作为正常处理的一部分执行？\n(A) 跨站点脚本\n(B) 缺少功能级别访问控制\n(C) 注入\n(D) 跨站点伪造",
        "答案": "C",
        "来源页码": 125
    },
    {
        "题号": "361",
        "英文题目与选项": "Which of the following areas of responsibility always falls completely under the purview of the cloud provider, regardless of which cloud service category is used?\n(A) Infrastructure\n(B) Data\n(C) Physical\n(D) Governance",
        "中文题目与选项": "无论使用何种云服务类别，以下哪个责任领域始终完全属于云提供商的权限范围？\n(A) 基础设施\n(B) 数据\n(C) 物理\n(D) 治理",
        "答案": "C",
        "来源页码": 125
    },
    {
        "题号": "362",
        "英文题目与选项": "Which ITIL component is focused on making sure that system resources, processes, and personnel are properly allocated to meet SLA requirements?\n(A) Continuity management\n(B) Availability management\n(C) Configuration management\n(D) Problem management",
        "中文题目与选项": "哪个 ITIL 组件侧重于确保系统资源、流程和人员得到适当分配以满足 SLA 要求？\n(A) 连续性管理\n(B) 可用性管理\n(C) 配置管理\n(D) 问题管理",
        "答案": "B",
        "来源页码": 126
    },
    {
        "题号": "363",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the assigning of jobs, tasks, and roles, as well as to ensuring they are successful and properly performed?\n(A) Service level agreements\n(B) Governance\n(C) Regulatory requirements\n(D) Auditability",
        "中文题目与选项": "云交叉方面中的哪一个与分配工作、任务和角色以及确保其成功和正确执行有关？\n(A) 服务水平协议\n(B) 治理\n(C) 监管要求\n(D) 可审计性",
        "答案": "B",
        "来源页码": 126
    },
    {
        "题号": "364",
        "英文题目与选项": "Which protocol operates at the network layer and provides for full point-to-point encryption of all communications and transmissions?\n(A) IPSec\n(B) VPN\n(C) SSL\n(D) TLS",
        "中文题目与选项": "哪种协议在网络层运行，并为所有通信和传输提供完全的点对点加密？\n(A) IPSec\n(B) VPN\n(C) SSL\n(D) TLS",
        "答案": "A",
        "来源页码": 126
    },
    {
        "题号": "365",
        "英文题目与选项": "The share phase of the cloud data lifecycle involves allowing data to leave the application to be shared with external systems, services, or even other vendors/contractors.\nWhat technology would be useful for protecting data at this point?\n(A) IDS\n(B) DLP\n(C) IPS\n(D) WAF",
        "中文题目与选项": "云数据生命周期的共享阶段包括允许数据离开应用程序，与外部系统、服务甚至其他供应商/承包商共享。此时，什么技术对保护数据有用？\n(A) 入侵检测系统（IDS）\n(B) 数据丢失防护（DLP）\n(C) 入侵防御系统（IPS）\n(D) Web 应用防火墙（WAF）",
        "答案": "B",
        "来源页码": 127
    },
    {
        "题号": "366",
        "英文题目与选项": "Which of the following types of organizations is most likely to make use of open source software technologies?\n(A) Government agencies\n(B) Corporations\n(C) Universities\n(D) Military",
        "中文题目与选项": "以下哪种类型的组织最可能使用开源软件技术？\n(A) 政府机构\n(B) 公司\n(C) 大学\n(D) 军事",
        "答案": "C",
        "来源页码": 127
    },
    {
        "题号": "367",
        "英文题目与选项": "Which type of security certification is applicable to any type of system or application as a general framework?\n(A) ISO/IEC 27001\n(B) PCI DSS\n(C) FIPS 140-2\n(D) NIST SP 800-53",
        "中文题目与选项": "哪种安全认证是可应用于任何类型系统或应用程序的通用框架？\n(A) ISO/IEC 27001\n(B) PCI DSS\n(C) FIPS 140-2\n(D) NIST SP 800-53",
        "答案": "A",
        "来源页码": 128
    },
    {
        "题号": "368",
        "英文题目与选项": "What process is used within a cloud environment to maintain resource balancing and ensure that resources are available where and when needed?\n(A) Dynamic clustering\n(B) Dynamic balancing\n(C) Dynamic resource scheduling\n(D) Dynamic optimization",
        "中文题目与选项": "在云环境中使用什么流程来保持资源平衡并确保资源在需要时可用？\n(A) 动态集群\n(B) 动态平衡\n(C) 动态资源调度\n(D) 动态优化",
        "答案": "D",
        "来源页码": 128
    },
    {
        "题号": "369",
        "英文题目与选项": "Why does the physical location of your data backup and/or BCDR failover environment matter?\n(A) It may affect regulatory compliance\n(B) Lack of physical security\n(C) Environmental factors such as humidity\n(D) It doesn't matter. Data can be saved anywhere without consequence",
        "中文题目与选项": "为什么数据备份和/或BCDR故障切换环境的物理位置很重要？\n(A) 它可能会影响法规遵从性\n(B) 缺乏物理安全\n(C) 环境因素，如湿度\n(D) 没关系。数据可以保存在任何地方而不会造成后果",
        "答案": "A",
        "来源页码": 128
    },
    {
        "题号": "370",
        "英文题目与选项": "In a cloud environment, which type of data point is often difficult to provide to auditors?\n(A) Access policy\n(B) Systems architecture\n(C) Baseline\n(D) Privacy statement",
        "中文题目与选项": "在云环境中，向审计员提供哪种类型的数据点通常非常困难？\n(A) 访问策略\n(B) 系统体系结构\n(C) 基线\n(D) 隐私声明",
        "答案": "B",
        "来源页码": 129
    },
    {
        "题号": "371",
        "英文题目与选项": "Which of these characteristics of a virtualized network adds risks to the cloud environment?\n(A) Redundancy\n(B) Scalability\n(C) Pay-per-use\n(D) Self-service",
        "中文题目与选项": "虚拟化网络的以下哪些特征会给云环境带来风险？\n(A) 冗余\n(B) 可扩展性\n(C) 按次付费\n(D) 自助服务",
        "答案": "D",
        "来源页码": 129
    },
    {
        "题号": "372",
        "英文题目与选项": "Which concept BEST describes the capability for a cloud environment to automatically scale a system or application based on its current resource demands?\n(A) On-demand self-service\n(B) Resource pooling\n(C) Measured service\n(D) Rapid elasticity",
        "中文题目与选项": "哪个概念最能描述云环境根据其当前资源需求自动扩展系统或应用程序的能力？\n(A) 按需自助服务\n(B) 资源池化\n(C) 可度量的服务\n(D) 快速弹性",
        "答案": "D",
        "来源页码": 129
    },
    {
        "题号": "373",
        "英文题目与选项": "With software-defined networking, what aspect of networking is abstracted from the forwarding of traffic?\n(A) Routing\n(B) Session\n(C) Filtering\n(D) Firewalling",
        "中文题目与选项": "对于软件定义的网络，网络的哪个方面是从流量转发中抽象出来的？\n(A) 路由\n(B) 会话\n(C) 过滤\n(D) 防火墙",
        "答案": "C",
        "来源页码": 130
    },
    {
        "题号": "374",
        "英文题目与选项": "Which of the following actions will NOT make data part of the create phase of the cloud data lifecycle?\n(A) Modify data\n(B) Modify metadata\n(C) New data\n(D) Import data",
        "中文题目与选项": "以下哪项操作不会使数据成为云数据生命周期创建阶段的一部分？\n(A) 修改数据\n(B) 修改元数据\n(C) 新数据\n(D) 导入数据",
        "答案": "B",
        "来源页码": 130
    },
    {
        "题号": "375",
        "英文题目与选项": "Which of the following represents a minimum guaranteed resource within a cloud environment for the cloud customer?\n(A) Reservation\n(B) Share\n(C) Limit\n(D) Provision",
        "中文题目与选项": "以下哪项代表云客户在云环境中的最小保证资源？\n(A) 保留资源\n(B) 共享\n(C) 限制\n(D) 供应",
        "答案": "A",
        "来源页码": 130
    },
    {
        "题号": "376",
        "英文题目与选项": "Which United States law is focused on data related to health records and privacy?\n(A) Safe Harbor\n(B) SOX\n(C) GLBA\n(D) HIPAA",
        "中文题目与选项": "美国哪项法律关注与健康记录和隐私相关的数据？\n(A) 安全港\n(B) SOX 法案\n(C) GLBA 法案\n(D) HIPAA 法案",
        "答案": "D",
        "来源页码": 131
    },
    {
        "题号": "377",
        "英文题目与选项": "Which United States program was designed to enable organizations to bridge the gap between privacy laws and requirements of the United States and the European Union?\n(A) GLBA\n(B) HIPAA\n(C) Safe Harbor\n(D) SOX",
        "中文题目与选项": "美国哪个项目旨在使组织能够弥合美国与欧盟隐私法律和要求之间的差距？\n(A) GLBA\n(B) HIPAA\n(C) 安全港\n(D) SOX",
        "答案": "C",
        "来源页码": 131
    },
    {
        "题号": "378",
        "英文题目与选项": "What is the major difference between authentication and authorization?\n(A) Code verification/code implementation\n(B) Identity validation/access permission\n(C) Inverse incantation/obverse instantiation\n(D) User access/privileged access",
        "中文题目与选项": "身份验证与授权之间的主要区别是什么？\n(A) 代码验证/代码实现\n(B) 身份确认/访问许可\n(C) 反向调用/正向实例化\n(D) 用户访问/特权访问",
        "答案": "B",
        "来源页码": 131
    },
    {
        "题号": "379",
        "英文题目与选项": "Unlike SOC Type 1 reports, which are based on a specific point in time, SOC Type 2 reports are done over a period of time. What is the minimum span of time for a SOC Type 2 report?\n(A) Six months\n(B) One month\n(C) One year\n(D) One week",
        "中文题目与选项": "与基于特定时间点的 SOC 类型 1 报告不同，SOC 类型 2 报告是在一段时间内完成的。SOC 类型 2 报告的最小时长跨度是多少？\n(A) 六个月\n(B) 一个月\n(C) 一年\n(D) 一周",
        "答案": "A",
        "来源页码": 132
    },
    {
        "题号": "380",
        "英文题目与选项": "Which of the following statements about Type 1 hypervisors is true?\n(A) The hardware vendor and software vendor are different.\n(B) The hardware vendor and software vendor are the same.\n(C) The hardware vendor provides an open platform for software vendors.\n(D) The hardware vendor and software vendor should always be different for the sake of security.",
        "中文题目与选项": "以下关于类型 1 管理程序的陈述中哪一项是正确的？\n(A) 硬件供应商和软件供应商不同\n(B) 硬件供应商和软件供应商相同\n(C) 硬件供应商为软件供应商提供了一个开放平台\n(D) 出于安全考虑，硬件供应商和软件供应商应始终不同",
        "答案": "B",
        "来源页码": 132
    },
    {
        "题号": "381",
        "英文题目与选项": "Wfthub Training\n(A) Scripts\n(B) RDP\n(C) API\n(D) XML",
        "中文题目与选项": "Wfthub 培训\n(A) 脚本\n(B) 远程桌面协议 (RDP)\n(C) API\n(D) XML",
        "答案": "C",
        "来源页码": 133
    },
    {
        "题号": "382",
        "英文题目与选项": "Proper need to be assigned to each data classification/category.\n(A) Dollar values\n(B) Metadata\n(C) Security controls\n(D) Policies",
        "中文题目与选项": "应为每个数据分类/类别分配适当的要素。\n(A) 美元价值\n(B) 元数据\n(C) 安全控制\n(D) 政策",
        "答案": "C",
        "来源页码": 133
    },
    {
        "题号": "383",
        "英文题目与选项": "Which of the following in a federated environment is responsible for consuming authentication tokens?\n(A) Relying party\n(B) Identity provider\n(C) Cloud services broker\n(D) Authentication provider",
        "中文题目与选项": "在联合环境中，下列哪一项负责使用身份验证令牌？\n(A) 依赖方\n(B) 身份提供者\n(C) 云服务经纪人\n(D) 身份验证提供者",
        "答案": "A",
        "来源页码": 133
    },
    {
        "题号": "384",
        "英文题目与选项": "(A) USB connectivity\n(B) Data encryption\n(C) Accurate data classification\n(D) Physical presence",
        "中文题目与选项": "(A) USB 连接\n(B) 数据加密\n(C) 准确的数据分类\n(D) 物理存在性",
        "答案": "C",
        "来源页码": 134
    },
    {
        "题号": "385",
        "英文题目与选项": "Which of the following does NOT fall under the IT aspect of quality of service (QoS)?\n(A) Applications\n(B) Key performance indicators (KPIs)\n(C) Services\n(D) Security",
        "中文题目与选项": "以下哪项不属于服务质量 (QoS) 的 “IT” 方面？\n(A) 应用\n(B) 关键绩效指标 (KPI)\n(C) 服务\n(D) 安全",
        "答案": "B",
        "来源页码": 134
    },
    {
        "题号": "386",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud provider, regardless of which cloud model is used?\n(A) Platform\n(B) Data\n(C) Physical environment\n(D) Infrastructure",
        "中文题目与选项": "无论使用哪种云模型，以下哪一项都是云提供商的唯一责任？\n(A) 平台\n(B) 数据\n(C) 物理环境\n(D) 基础设施",
        "答案": "C",
        "来源页码": 134
    },
    {
        "题号": "387",
        "英文题目与选项": "Other than cost savings achieved through measured service, what is another aspect of cloud computing that can save an organization a significant amount of time and money in the event of a disaster?\n(A) Broad network access\n(B) Interoperability\n(C) Resource pooling\n(D) Portability",
        "中文题目与选项": "除了通过可度量服务实现的成本节约外，云计算的另一个方面是什么，在发生灾难时可以为组织节省大量的时间和金钱成本？\n(A) 广泛的网络接入\n(B) 互操作性\n(C) 资源池化\n(D) 可移植性",
        "答案": "A",
        "来源页码": 135
    },
    {
        "题号": "388",
        "英文题目与选项": "What concept does the \"I\" represent with the STRIDE threat model?\n(A) Integrity\n(B) Information disclosure\n(C) IT security\n(D) Insider threat",
        "中文题目与选项": "在 STRIDE 威胁模型中，“I”代表什么概念？\n(A) 完整性\n(B) 信息泄露\n(C) IT 安全\n(D) 内部威胁",
        "答案": "B",
        "来源页码": 135
    },
    {
        "题号": "389",
        "英文题目与选项": "Maintenance mode requires all of these actions except:\n(A) Remove all active production instances\n(B) Ensure logging continues\n(C) Initiate enhanced security controls\n(D) Prevent new logins",
        "中文题目与选项": "维护模式需要执行以下所有操作，但以下哪项除外？\n(A) 删除所有活动的生产实例\n(B) 确保继续日志记录\n(C) 启动增强的安全控制\n(D) 阻止新的登录",
        "答案": "B",
        "来源页码": 135
    },
    {
        "题号": "390",
        "英文题目与选项": "All of the following are activities that should be performed when capturing and maintaining an accurate, secure system baseline, except\n(A) Audit the baseline to ensure that all configuration items have been included and applied correctly\n(B) Impose the baseline throughout the environment\n(C) Capture an image of the baseline system for future reference/versioning/rollback purposes\n(D) Document all baseline configuration elements and versioning data",
        "中文题目与选项": "以下所有活动都是在捕获和维护准确、安全的系统基线时应该执行的活动，但除外。\n(A) 审核基线，以确保所有配置项已被包含并正确应用\n(B) 在整个环境中实施基线\n(C) 捕获基线系统的映像，以供将来参考/版本控制/回滚\n(D) 记录所有基线配置元素和版本控制数据",
        "答案": "B",
        "来源页码": 136
    },
    {
        "题号": "391",
        "英文题目与选项": "Which technique involves replacing values within a specific data field to protect sensitive data?\n(A) Anonymization\n(B) Masking\n(C) Tokenization\n(D) Obfuscation",
        "中文题目与选项": "哪种技术涉及替换特定数据字段中的值以保护敏感数据？\n(A) 匿名化\n(B) 掩码\n(C) 标记化\n(D) 混淆",
        "答案": "B",
        "来源页码": 136
    },
    {
        "题号": "392",
        "英文题目与选项": "Which of the following should NOT be part of the requirement analysis phase of the software development lifecycle?\n(A) Functionality\n(B) Programming languages\n(C) Software platform\n(D) Security requirements",
        "中文题目与选项": "以下哪项不应该是软件开发生命周期需求分析阶段的一部分？\n(A) 功能性\n(B) 编程语言\n(C) 软件平台\n(D) 安全需求",
        "答案": "D",
        "来源页码": 136
    },
    {
        "题号": "393",
        "英文题目与选项": "Which of the following is the correct name for Tier II of the Uptime Institute Data Center Site Infrastructure Tier Standard Topology?\n(A) Concurrently Maintainable Site Infrastructure\n(B) Fault-Tolerant Site Infrastructure\n(C) Basic Site Infrastructure\n(D) Redundant Site Infrastructure Capacity Components",
        "中文题目与选项": "以下哪一项是 Uptime Institute 数据中心站点基础设施第二层标准拓扑的正确名称？\n(A) 可同时维护的站点基础设施\n(B) 故障容错站点基础设施\n(C) 基本站点基础设施\n(D) 冗余站点基础设施容量组件",
        "答案": "A",
        "来源页码": 137
    },
    {
        "题号": "394",
        "英文题目与选项": "The tasks performed by the hypervisor in the virtual environment can most be likened to the tasks of the ____ in the legacy environment.\n(A) Central processing unit (CPU)\n(B) Security team\n(C) OS\n(D) PGP",
        "中文题目与选项": "在虚拟环境中由虚拟机管理程序执行的任务最类似于传统环境中 ____ 的任务。\n(A) 中央处理器 (CPU)\n(B) 安全团队\n(C) 操作系统 (OS)\n(D) PGP",
        "答案": "A",
        "来源页码": 137
    },
    {
        "题号": "395",
        "英文题目与选项": "With the rapid emergence of cloud computing, very few regulations were in place that pertained to it specifically, and organizations often had to resort to using a collection of regulations that were not specific to cloud in order to drive audits and policies. Which standard from the ISO/IEC was designed specifically for cloud computing?\n(A) ISO/IEC 27001\n(B) ISO/IEC 19889\n(C) ISO/IEC 27001:2015\n(D) ISO/IEC 27018",
        "中文题目与选项": "随着云计算的迅速出现，专门针对云计算的法规很少，组织往往不得不使用一系列不针对云的法规来推动审计和政策。ISO/IEC 中哪一个标准是专门为云计算设计的？\n(A) ISO/IEC 27001\n(B) ISO/IEC 19889\n(C) ISO/IEC 27001:2015\n(D) ISO/IEC 27018",
        "答案": "D",
        "来源页码": 137
    },
    {
        "题号": "396",
        "英文题目与选项": "The BC/DR kit should include all of the following except:\n(A) Annotated asset inventory\n(B) Flashlight\n(C) Hard drives\n(D) Documentation equipment",
        "中文题目与选项": "BC/DR 套件应包括以下所有内容，但不包括：\n(A) 注释资产清单\n(B) 手电筒\n(C) 硬盘驱动器\n(D) 文件编制设备",
        "答案": "C",
        "来源页码": 138
    },
    {
        "题号": "397",
        "英文题目与选项": "Which of the following is NOT a regulatory system from the United States federal government?\n(A) PCI DSS\n(B) FISMA\n(C) SOX\n(D) HIPAA",
        "中文题目与选项": "以下哪项不是美国联邦政府的监管系统？\n(A) PCI DSS\n(B) FISMA\n(C) SOX\n(D) HIPAA",
        "答案": "A",
        "来源页码": 138
    },
    {
        "题号": "398",
        "英文题目与选项": "Which of the following would NOT be a reason to activate a BCDR strategy?\n(A) Staffing loss\n(B) Terrorism attack\n(C) Utility disruptions\n(D) Natural disaster",
        "中文题目与选项": "以下哪项不是激活 BCDR 策略的理由？\n(A) 人员流失\n(B) 恐怖主义袭击\n(C) 公用事业中断\n(D) 自然灾害",
        "答案": "A",
        "来源页码": 138
    },
    {
        "题号": "399",
        "英文题目与选项": "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?\n(A) UPS\n(B) Generators\n(C) Joint operating agreements\n(D) Strict adherence to applicable regulations",
        "中文题目与选项": "可以通过以下哪一项以经济高效的方式解决局部事件或灾难？\n(A) 不间断电源\n(B) 发电机\n(C) 联合运营协议\n(D) 严格遵守适用法规",
        "答案": "C",
        "来源页码": 139
    },
    {
        "题号": "400",
        "英文题目与选项": "Which cloud service category most commonly uses client-side key management systems?\n(A) Software as a Service\n(B) Infrastructure as a Service\n(C) Platform as a Service\n(D) Desktop as a Service",
        "中文题目与选项": "哪个云服务类别最常使用客户端密钥管理系统？\n(A) 软件即服务\n(B) 基础设施即服务\n(C) 平台即服务\n(D) 桌面即服务",
        "答案": "A",
        "来源页码": 139
    },
    {
        "题号": "401",
        "英文题目与选项": "Which of the following data sanitization methods would be the MOST effective if you needed to securely remove data as quickly as possible in a cloud environment?\n(A) Zeroing\n(B) Cryptographic erasure\n(C) Overwriting\n(D) Degaussing",
        "中文题目与选项": "如果您需要在云环境中尽快安全地删除数据，以下哪种数据清理方法最有效？\n(A) 归零\n(B) 加密擦除\n(C) 覆写\n(D) 消磁",
        "答案": "B",
        "来源页码": 140
    },
    {
        "题号": "402",
        "英文题目与选项": "Which of the following service capabilities gives the cloud customer the least amount of control over configurations and deployments?\n(A) Platform\n(B) Infrastructure\n(C) Software\n(D) Desktop",
        "中文题目与选项": "以下哪项服务功能使云客户对配置和部署的控制最少？\n(A) 平台\n(B) 基础设施\n(C) 软件\n(D) 桌面",
        "答案": "C",
        "来源页码": 140
    },
    {
        "题号": "403",
        "英文题目与选项": "Which of the cloud deployment models is used by popular services such as iCloud, Dropbox, and OneDrive?\n(A) Hybrid\n(B) Public\n(C) Private\n(D) Community",
        "中文题目与选项": "iCloud、Dropbox 和 OneDrive 等流行服务使用哪种云部署模型？\n(A) 混合云\n(B) 公有云\n(C) 私有云\n(D) 社区云",
        "答案": "B",
        "来源页码": 140
    },
    {
        "题号": "404",
        "英文题目与选项": "Which SSAE 16 audit report is simply an attestation of audit results?\n(A) SOC 1\n(B) SOC 2, Type 1\n(C) SOC 2, Type 2\n(D) SOC 3",
        "中文题目与选项": "哪一种 SSAE 16 审计报告仅仅是审计结果的证明？\n(A) SOC 1\n(B) SOC 2，类型 1\n(C) SOC 2，类型 2\n(D) SOC 3",
        "答案": "D",
        "来源页码": 141
    },
    {
        "题号": "405",
        "英文题目与选项": "Which United States law is focused on PII as it relates to the financial industry?\n(A) HIPAA\n(B) SOX\n(C) Safe Harbor\n(D) GLBA",
        "中文题目与选项": "哪一项美国法律关注与金融业相关的个人可识别信息（PII）？\n(A) HIPAA 医疗保险携带与责任法案\n(B) SOX 萨班斯-奥克斯利法案\n(C) 安全港原则\n(D) GLBA 格雷姆-里奇-布莱利法案",
        "答案": "D",
        "来源页码": 141
    },
    {
        "题号": "406",
        "英文题目与选项": "In attempting to provide a layered defense, the security practitioner should convince senior management to include security controls of which type?\n(A) Physical\n(B) All of the above\n(C) Technological\n(D) Administrative",
        "中文题目与选项": "在试图提供分层防御时，安全从业者应说服高级管理层包含哪种类型的安全控制？\n(A) 物理的\n(B) 以上所有类型\n(C) 技术的\n(D) 管理的",
        "答案": "B",
        "来源页码": 141
    },
    {
        "题号": "407",
        "英文题目与选项": "Cryptographic keys for encrypted data stored in the cloud should be\n(A) At least 128 bits long\n(B) Not stored with the cloud provider\n(C) Split into groups\n(D) Generated with redundancy",
        "中文题目与选项": "存储在云中的加密数据的加密密钥应当是：\n(A) 至少 128 位长\n(B) 不与云服务提供商一起存储\n(C) 拆分成多个组\n(D) 生成时包含冗余",
        "答案": "B",
        "来源页码": 142
    },
    {
        "题号": "408",
        "英文题目与选项": "Bob is staging an attack against Alice's website. He is able to embed a link on her site that will execute malicious code on a visitor's machine if the visitor clicks on the link. This is an example of which type of attack?\n(A) Cross-site scripting\n(B) Broken authentication/session management\n(C) Security misconfiguration\n(D) Insecure cryptographic storage",
        "中文题目与选项": "Bob 正在对 Alice 的网站发起攻击。他能够在她的网站上嵌入一个链接，如果访问者点击该链接，链接将在访问者的计算机上执行恶意代码。这是哪种类型的攻击示例？\n(A) 跨站点脚本攻击\n(B) 破坏身份验证/会话管理\n(C) 安全配置错误\n(D) 不安全的加密存储",
        "答案": "A",
        "来源页码": 142
    },
    {
        "题号": "409",
        "英文题目与选项": "What type of masking strategy involves making a separate and distinct copy of data with masking in place?\n(A) Dynamic\n(B) Replication\n(C) Static\n(D) Duplication",
        "中文题目与选项": "哪种类型的数据屏蔽策略涉及创建一个已经完成屏蔽的、独立且不同的数据副本？\n(A) 动态屏蔽\n(B) 复制\n(C) 静态屏蔽\n(D) 重复",
        "答案": "C",
        "来源页码": 142
    },
    {
        "题号": "410",
        "英文题目与选项": "Which of the following types of storage is associated with PaaS?\n(A) Structured and free form\n(B) Volume and object\n(C) Structured and unstructured\n(D) Database and file system",
        "中文题目与选项": "以下哪种是与 PaaS 相关的存储类型？\n(A) 结构化和自由形式\n(B) 卷和对象\n(C) 结构化和非结构化\n(D) 数据库和文件系统",
        "答案": "C",
        "来源页码": 143
    },
    {
        "题号": "411",
        "英文题目与选项": "A firewall can use all of the following techniques for controlling traffic except:\n(A) Rule sets\n(B) Behavior analysis\n(C) Content filtering\n(D) Randomization",
        "中文题目与选项": "防火墙可以使用以下所有技术来控制流量，但以下技术除外：\n(A) 规则集\n(B) 行为分析\n(C) 内容过滤\n(D) 随机化",
        "答案": "D",
        "来源页码": 143
    },
    {
        "题号": "412",
        "英文题目与选项": "Which of the following is a method for apportioning resources that involves setting guaranteed minimums for all tenants/customers within the environment?\n(A) Reservations\n(B) Shares\n(C) Cancellations\n(D) Limits",
        "中文题目与选项": "以下哪一项是分配资源的方法，其中为环境中的所有租户/客户设置最小保证值？\n(A) 预订\n(B) 共享\n(C) 取消\n(D) 限制",
        "答案": "A",
        "来源页码": 143
    },
    {
        "题号": "413",
        "英文题目与选项": "Your organization has made it a top priority that any cloud environment being considered to host production systems have guarantees that resources will always be available for allocation when needed. Which of the following concepts will you need to ensure is part of the contract and SLA?\n(A) Limits\n(B) Shares\n(C) Resource pooling\n(D) Reservations",
        "中文题目与选项": "贵组织已将以下事项列为首要任务：任何用于承载生产系统的云环境都必须保证在需要时资源始终可用于分配。以下哪个概念需要确保包含在合同和SLA中？\n(A) 限制\n(B) 共享\n(C) 资源池化\n(D) 预留",
        "答案": "D",
        "来源页码": 143
    },
    {
        "题号": "414",
        "英文题目与选项": "During the course of an audit, which of the following would NOT be an input into the control requirements used as part of a gap analysis?\n(A) Contractual requirements\n(B) Regulations\n(C) Vendor recommendations\n(D) Corporate policy",
        "中文题目与选项": "在审计过程中，以下哪一项不是作为差距分析一部分的控制要求输入？\n(A) 合同要求\n(B) 法规\n(C) 供应商建议\n(D) 公司政策",
        "答案": "C",
        "来源页码": 144
    },
    {
        "题号": "415",
        "英文题目与选项": "You are the security policy lead for your organization, which is considering migrating from your on-premises, legacy environment into the cloud. You are reviewing the Cloud Security Alliance Cloud Controls Matrix (CSA CCM) as a tool for your organization. Which of the following benefits will the CSA CCM offer your organization?\n(A) Simplifying regulatory compliance\n(B) Collecting multiple data streams from your log files\n(C) Ensuring that the baseline configuration is applied to all systems\n(D) Enforcing contract terms between your organization and the cloud provider",
        "中文题目与选项": "您是所在组织的安全策略负责人，组织正在考虑从本地旧环境迁移到云端。您正在审查云安全联盟的云控制矩阵（CSA CCM），将其作为组织的工具。CSA CCM将为您的组织提供以下哪项益处？\n(A) 简化法规合规性\n(B) 从日志文件中收集多个数据流\n(C) 确保基线配置适用于所有系统\n(D) 在您的组织与云提供商之间强制执行合同条款",
        "答案": "A",
        "来源页码": 144
    },
    {
        "题号": "416",
        "英文题目与选项": "Which type of data is associated with information rights management (IRM)?\n(A) Personnel data\n(B) Security profiles\n(C) Publications\n(D) Financial records",
        "中文题目与选项": "以下哪种类型的数据属于数据权限管理 (DRM) 而不是信息权限管理 (IRM)?\n(A) 人员数据\n(B) 安全配置文件\n(C) 出版物\n(D) 财务记录",
        "答案": "C",
        "来源页码": 145
    },
    {
        "题号": "417",
        "英文题目与选项": "You are the security manager for a small application development company. Your company is considering the use of the cloud for software testing purposes. Which cloud service model is most likely to suit your needs?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) LaaS",
        "中文题目与选项": "您是一家小型应用程序开发公司的安全经理。您的公司正在考虑将云用于软件测试目的。哪种云服务模型最适合您的需求?\n(A) 基础设施即服务\n(B) 平台即服务\n(C) 软件即服务\n(D) LaaS",
        "答案": "B",
        "来源页码": 145
    },
    {
        "题号": "418",
        "英文题目与选项": "Which of the following is NOT something that an HIDS will monitor?\n(A) Configurations\n(B) User logins\n(C) Critical system files\n(D) Network traffic",
        "中文题目与选项": "以下哪项不是 HIDS 将监视的内容?\n(A) 配置\n(B) 用户登录\n(C) 关键系统文件\n(D) 网络流量",
        "答案": "B",
        "来源页码": 145
    },
    {
        "题号": "419",
        "英文题目与选项": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the Internet). In a typical TLS session, who initiates the protocol?\n(A) The server\n(B) The client\n(C) The certifying authority\n(D) The ISP",
        "中文题目与选项": "传输层安全 (TLS) 协议在公共媒介（如互联网）上创建一个安全的通信信道。在典型的 TLS 会话中，谁发起该协议？\n(A) 服务器\n(B) 客户端\n(C) 认证机构\n(D) 互联网服务提供商",
        "答案": "B",
        "来源页码": 146
    },
    {
        "题号": "420",
        "英文题目与选项": "Administrative penalties for violating the General Data Protection Regulation (GDPR) can range up to\n(A) US$100,000\n(B) 500,000 euros\n(C) 20,000,000 euros\n(D) 1,000,000 euros",
        "中文题目与选项": "违反《通用数据保护条例》(GDPR) 的行政处罚最高可达：\n(A) 100,000 美元\n(B) 500,000 欧元\n(C) 20,000,000 欧元\n(D) 1,000,000 欧元",
        "答案": "C",
        "来源页码": 146
    },
    {
        "题号": "421",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to easily move services and applications between different cloud providers?\n(A) Reversibility\n(B) Availability\n(C) Portability\n(D) Interoperability",
        "中文题目与选项": "哪个云的横切方面与在不同云服务提供商之间轻松迁移服务和应用程序的能力相关？\n(A) 可逆性\n(B) 可用性\n(C) 可移植性\n(D) 互操作性",
        "答案": "C",
        "来源页码": 146
    },
    {
        "题号": "422",
        "英文题目与选项": "Which of the following storage types are used with an Infrastructure as a Service (IaaS) solution?\n(A) Volume and block\n(B) Structured and object\n(C) Unstructured and ephemeral\n(D) Volume and object",
        "中文题目与选项": "以下哪种存储类型用于基础架构即服务（IaaS）解决方案？\n(A) 卷和块\n(B) 结构化和对象\n(C) 非结构化和短暂性\n(D) 卷和对象",
        "答案": "D",
        "来源页码": 147
    },
    {
        "题号": "423",
        "英文题目与选项": "Which cloud storage type resembles a virtual hard drive and can be utilized in the same manner and with the same type of features and capabilities?\n(A) Volume\n(B) Unstructured\n(C) Structured\n(D) Object",
        "中文题目与选项": "哪种云存储类型类似于虚拟硬盘，可以以相同的方式使用，并具备相同类型的特性和功能？\n(A) 卷\n(B) 非结构化\n(C) 结构化\n(D) 对象",
        "答案": "A",
        "来源页码": 147
    },
    {
        "题号": "424",
        "英文题目与选项": "Which of the following is a possible negative aspect of bit-splitting?\n(A) It may require trust in additional third parties beyond the primary cloud service provider.\n(B) There may be cause for management concern that the technology will violate internal policy.\n(C) Users will have far greater difficulty understanding the implementation.\n(D) Limited vendors make acquisition and support challenging.",
        "中文题目与选项": "以下哪一项可能是比特分割的负面方面？\n(A) 它可能需要信任主要云服务提供商之外的其他第三方\n(B) 管理层可能担心该技术违反内部政策\n(C) 用户在理解实现时会遇到更大困难\n(D) 供应商有限使获取和支持变得困难",
        "答案": "A",
        "来源页码": 147
    },
    {
        "题号": "425",
        "英文题目与选项": "When data discovery is undertaken, three main approaches or strategies are commonly used to determine what the type of data, its format, and composition are for the purposes of classification. Which of the following is NOT one of the three main approaches to data discovery?\n(A) Content analysis\n(B) Hashing\n(C) Labels\n(D) Metadata",
        "中文题目与选项": "在进行数据发现时，通常使用三种主要方法或策略来确定数据的类型、格式和组成，以便于分类。以下哪一项不是数据发现的三种主要方法之一？\n(A) 内容分析\n(B) 哈希\n(C) 标签\n(D) 元数据",
        "答案": "B",
        "来源页码": 148
    },
    {
        "题号": "426",
        "英文题目与选项": "When using a SaaS solution, what is the capability provided to the customer?\n(A) To use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.\n(B) To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.\n(C) To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client...",
        "中文题目与选项": "在使用 SaaS 解决方案时，向客户提供的能力是什么？\n(A) 使用运行在云基础设施上的提供商应用程序。这些应用可以通过各种客户端设备访问，例如通过瘦客户端接口（如网页浏览器，例如基于 Web 的电子邮件）或程序接口。使用者不管理或控制底层云基础设施，包括网络、服务器、操作系统、存储或单个应用程序的功能，但可能可以进行有限的用户特定应用配置设置。\n(B) 使用运行在云基础设施上的消费者应用程序。这些应用可以通过各种客户端设备访问，例如通过瘦客户端接口（如网页浏览器，例如基于 Web 的电子邮件）或程序接口。使用者不管理或控制底层云基础设施，包括网络、服务器、操作系统、存储或单个应用程序的功能，但可能可以进行有限的用户特定应用配置设置。\n(C) 使用运行在云基础设施上的消费者应用程序。这些应用可以通过各种客户端……",
        "答案": "D",
        "来源页码": 148
    },
    {
        "题号": "427",
        "英文题目与选项": "Which of the following is considered an external redundancy for a data center?\n(A) Power feeds to rack\n(B) Generators\n(C) Power distribution units\n(D) Storage systems",
        "中文题目与选项": "以下哪项被视为数据中心的外部冗余？\n(A) 机架供电\n(B) 发电机\n(C) 配电装置\n(D) 存储系统",
        "答案": "B",
        "来源页码": 149
    },
    {
        "题号": "428",
        "英文题目与选项": "What type of redundancy can we expect to find in a datacenter of any tier?\n(A) All operational components\n(B) All infrastructure\n(C) Emergency egress\n(D) Full power capabilities",
        "中文题目与选项": "我们期望在任何级别的数据中心中都能找到什么类型的冗余？\n(A) 所有操作组件\n(B) 所有基础设施\n(C) 紧急出口\n(D) 全功率能力",
        "答案": "C",
        "来源页码": 150
    },
    {
        "题号": "429",
        "英文题目与选项": "Hardening the operating system refers to all of the following except:\n(A) Limiting administrator access\n(B) Closing unused ports\n(C) Removing antimalware agents\n(D) Removing unnecessary services and libraries",
        "中文题目与选项": "强化操作系统指以下所有内容，但不包括：\n(A) 限制管理员访问\n(B) 关闭未使用的端口\n(C) 删除反恶意软件代理\n(D) 删除不必要的服务和库",
        "答案": "C",
        "来源页码": 150
    },
    {
        "题号": "430",
        "英文题目与选项": "Which type of cloud model typically presents the most challenges to a cloud customer during the 'destroy' phase of the cloud data lifecycle?\n(A) IaaS\n(B) DaaS\n(C) SaaS\n(D) PaaS",
        "中文题目与选项": "在云数据生命周期的“销毁”阶段，哪种类型的云模型通常会给云客户带来最大的挑战？\n(A) IaaS\n(B) DaaS\n(C) SaaS\n(D) PaaS",
        "答案": "C",
        "来源页码": 150
    },
    {
        "题号": "431",
        "英文题目与选项": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the Internet). In a typical TLS session, what is the usual means for establishing trust between the parties?\n(A) Out-of-band authentication\n(B) Multifactor authentication\n(C) PKI certificates\n(D) Preexisting knowledge of each other",
        "中文题目与选项": "传输层安全 (TLS) 协议在公共媒体（如互联网）上创建一个安全的通信信道。在典型的 TLS 会话中，双方建立信任的通常方法是什么？\n(A) 带外身份验证\n(B) 多因素认证\n(C) PKI 证书\n(D) 彼此已有的知识",
        "答案": "C",
        "来源页码": 151
    },
    {
        "题号": "432",
        "英文题目与选项": "Before deploying a specific brand of virtualization toolset, it is important to configure it according to\n(A) Industry standards\n(B) Prevailing law of that jurisdiction\n(C) Vendor guidance\n(D) Expert opinion",
        "中文题目与选项": "在部署特定品牌的虚拟化工具集之前，必须根据以下哪项进行配置？\n(A) 行业标准\n(B) 该管辖区的现行法律\n(C) 供应商指南\n(D) 专家意见",
        "答案": "C",
        "来源页码": 151
    },
    {
        "题号": "433",
        "英文题目与选项": "The various models generally available for cloud BC/DR activities include all of the following except:\n(A) Private architecture, cloud backup\n(B) Cloud provider, backup from another cloud provider\n(C) Cloud provider, backup from same provider\n(D) Cloud provider, backup from private provider",
        "中文题目与选项": "通常可用于云 BC/DR（业务连续性/灾难恢复）活动的各种模型包括以下所有模型，但不包括哪一项？\n(A) 私有架构，云备份\n(B) 云提供商，从另一个云提供商备份\n(C) 云提供商，从同一提供商的备份\n(D) 云提供商，从私有提供商的备份",
        "答案": "D",
        "来源页码": 151
    },
    {
        "题号": "434",
        "英文题目与选项": "Which component of ITIL involves the creation of an RFC ticket and obtaining official approvals for it?\n(A) Problem management\n(B) Release management\n(C) Deployment management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件涉及创建 RFC 凭据并获得其正式批准？\n(A) 问题管理\n(B) 发布管理\n(C) 部署管理\n(D) 变更管理",
        "答案": "D",
        "来源页码": 152
    },
    {
        "题号": "435",
        "英文题目与选项": "Which of the following is not a way to manage risk?\n(A) Enveloping\n(B) Mitigating\n(C) Accepting\n(D) Transferring",
        "中文题目与选项": "以下哪项不是管理风险的方法？\n(A) 包容\n(B) 缓解\n(C) 接受\n(D) 转移",
        "答案": "A",
        "来源页码": 152
    },
    {
        "题号": "436",
        "英文题目与选项": "What is the only data format permitted with the SOAP API?\n(A) HTML\n(B) SAML\n(C) XSML\n(D) XML",
        "中文题目与选项": "SOAP API 允许的唯一数据格式是什么？\n(A) HTML\n(B) SAML\n(C) XSML\n(D) XML",
        "答案": "D",
        "来源页码": 152
    },
    {
        "题号": "437",
        "英文题目与选项": "Access should be based on\n(A) Regulatory mandates\n(B) Business needs and acceptable risk\n(C) User requirements and management requests\n(D) Optimum performance and security provision",
        "中文题目与选项": "访问应基于\n(A) 监管规定\n(B) 业务需求和可接受的风险\n(C) 用户需求和管理要求\n(D) 最佳性能和安全保障",
        "答案": "B",
        "来源页码": 153
    },
    {
        "题号": "438",
        "英文题目与选项": "Which OSI layer does IPsec operate at?\n(A) Network\n(B) Transport\n(C) Application\n(D) Presentation",
        "中文题目与选项": "IPsec运行在第几层OSI层？\n(A) 网络层\n(B) 传输层\n(C) 应用层\n(D) 表示层",
        "答案": "A",
        "来源页码": 153
    },
    {
        "题号": "439",
        "英文题目与选项": "What are SOC I / SOC II / SOC III?\n(A) Risk management frameworks\n(B) Access controls\n(C) Audit reports\n(D) Software development phases",
        "中文题目与选项": "什么是 SOC I / SOC II / SOC III？\n(A) 风险管理框架\n(B) 访问控制\n(C) 审计报告\n(D) 软件开发阶段",
        "答案": "C",
        "来源页码": 153
    },
    {
        "题号": "440",
        "英文题目与选项": "SOC Type 1 reports are considered \"restricted use,\" in that they are intended only for limited audiences and purposes.\nWhich of the following is NOT a population that would be appropriate for a SOC Type 1 report?\n(A) Current clients\n(B) Auditors\n(C) Potential clients\n(D) The service organization",
        "中文题目与选项": "SOC 类型 1 报告被视为“受限使用”，因为它们仅用于有限的受众和目的。\n以下哪项不是适用于 SOC 类型 1 报告的人群？\n(A) 当前客户\n(B) 审计师\n(C) 潜在客户\n(D) 服务机构",
        "答案": "C",
        "来源页码": 154
    },
    {
        "题号": "441",
        "英文题目与选项": "In addition to whatever audit results the provider shares with the customer, what other mechanism does the customer have to ensure trust in the provider's performance and duties?\n(A) HIPAA\n(B) The contract\n(C) Statutes\n(D) Security control matrix",
        "中文题目与选项": "除了供应商与客户共享的审计结果之外，客户还有什么其他机制可以确保对供应商的绩效和职责的信任？\n(A) HIPAA\n(B) 合同\n(C) 法规\n(D) 安全控制矩阵",
        "答案": "B",
        "来源页码": 154
    },
    {
        "题号": "442",
        "英文题目与选项": "How is an object stored within an object storage system?\n(A) Key value\n(B) Database\n(C) LDAP\n(D) Tree structure",
        "中文题目与选项": "对象存储系统中对象是如何存储的？\n(A) 键值\n(B) 数据库\n(C) LDAP\n(D) 树结构",
        "答案": "A",
        "来源页码": 154
    },
    {
        "题号": "443",
        "英文题目与选项": "You are the security manager for a small surgical center. Your organization is reviewing upgrade options for its current on-premises data center. In order to best meet your needs, which one of the following options would you recommend to senior management?\n(A) Building a completely new data center\n(B) Leasing a data center that is currently owned by another firm\n(C) Renting private cloud space in a Tier 2 data center\n(D) Staying with the current data center",
        "中文题目与选项": "你是一家小型外科中心的安全经理。您的组织正在审查其当前内部部署数据中心的升级选项。为了最好地满足您的需求，您会向高级管理层推荐以下哪个选项？\n(A) 建立一个全新的数据中心\n(B) 租赁当前由另一家公司拥有的数据中心\n(C) 租用具有私有云空间的二级数据中心\n(D) 保留当前的数据中心",
        "答案": "C",
        "来源页码": 155
    },
    {
        "题号": "444",
        "英文题目与选项": "What type of masking would you employ to produce a separate data set for testing purposes based on production data without any sensitive information?\n(A) Dynamic\n(B) Tokenized\n(C) Replicated\n(D) Static",
        "中文题目与选项": "您将使用哪种类型的屏蔽来基于没有任何敏感信息的生产数据生成用于测试的独立数据集？\n(A) 动态\n(B) 标记化\n(C) 复制\n(D) 静态",
        "答案": "D",
        "来源页码": 155
    },
    {
        "题号": "445",
        "英文题目与选项": "Which of the following aspects of cloud computing would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?\n(A) Regulation\n(B) Multitenancy\n(C) Virtualization\n(D) Resource pooling",
        "中文题目与选项": "云计算的以下哪个方面会使云提供商更可能不愿意满足特定的认证要求？\n(A) 监管\n(B) 多租户技术\n(C) 虚拟化\n(D) 资源池化",
        "答案": "B",
        "来源页码": 156
    },
    {
        "题号": "446",
        "英文题目与选项": "What concept does the \"D\" represent with the STRIDE threat model?\n(A) Data loss\n(B) Denial of service\n(C) Data breach\n(D) Distributed",
        "中文题目与选项": "在 STRIDE 威胁模型中，“D”代表什么概念？\n(A) 数据丢失\n(B) 拒绝服务\n(C) 数据泄露\n(D) 分布式",
        "答案": "B",
        "来源页码": 156
    },
    {
        "题号": "447",
        "英文题目与选项": "Setting thermostat controls by measuring the temperature will result in the highest energy costs.\n(A) Server inlet\n(B) Return air\n(C) Under-floor\n(D) External ambient",
        "中文题目与选项": "通过测量温度设置恒温器控制将导致最高的能源成本。\n(A) 服务器入口\n(B) 回风\n(C) 地板下\n(D) 外部环境",
        "答案": "B",
        "来源页码": 157
    },
    {
        "题号": "448",
        "英文题目与选项": "In a data retention policy, what is perhaps the most crucial element?\n(A) Location of the data archive\n(B) Frequency of backups\n(C) Security controls in long-term storage\n(D) Data recovery procedures",
        "中文题目与选项": "在数据保留策略中，什么可能是最关键的因素？\n(A) 数据存档的位置\n(B) 备份频率\n(C) 长期存储中的安全控制\n(D) 数据恢复流程",
        "答案": "D",
        "来源页码": 157
    },
    {
        "题号": "449",
        "英文题目与选项": "Which of the following is a risk in the cloud environment that is not existing or as prevalent in the legacy environment?\n(A) Legal liability in multiple jurisdictions\n(B) Loss of productivity due to DDoS\n(C) Ability of users to gain access to their physical workplace\n(D) Fire",
        "中文题目与选项": "以下哪项是云环境中存在的风险，但在传统环境中并不常见？\n(A) 多个司法管辖区的法律责任\n(B) DDoS 导致的生产力损失\n(C) 用户访问其物理工作场所的能力\n(D) 火灾",
        "答案": "A",
        "来源页码": 157
    },
    {
        "题号": "450",
        "英文题目与选项": "DNSSEC primarily ensures which aspect?\n(A) Integrity\n(B) Authentication\n(C) Availability\n(D) Confidentiality",
        "中文题目与选项": "DNSSEC 主要确保哪一方面？\n(A) 完整性\n(B) 身份验证\n(C) 可用性\n(D) 机密性",
        "答案": "A",
        "来源页码": 158
    },
    {
        "题号": "451",
        "英文题目与选项": "What concept does the 'R' represent in the DREAD model?\n(A) Reproducibility\n(B) Repudiation\n(C) Risk\n(D) Residual",
        "中文题目与选项": "DREAD 模型中的 “R” 代表什么概念？\n(A) 再现性\n(B) 否认\n(C) 风险\n(D) 剩余",
        "答案": "A",
        "来源页码": 158
    },
    {
        "题号": "452",
        "英文题目与选项": "What type of device is often leveraged to assist legacy applications that may not have the programmatic capability to process assertions from modern web services?\n(A) Web application firewall\n(B) XML accelerator\n(C) Relying party\n(D) XML firewall",
        "中文题目与选项": "通常使用哪种类型的设备来帮助可能没有编程能力处理来自现代 Web 服务断言的旧有应用程序？\n(A) Web 应用防火墙\n(B) XML 加速器\n(C) 信赖方\n(D) XML 防火墙",
        "答案": "B",
        "来源页码": 158
    },
    {
        "题号": "453",
        "英文题目与选项": "What strategy involves replacing sensitive data with opaque values usually with a means of mapping it back to the original value?\n(A) Masking\n(B) Anonymization\n(C) Tokenization\n(D) Obfuscation",
        "中文题目与选项": "什么策略涉及用不透明的值替代敏感数据，通常可以将其映射回原始值？\n(A) 掩蔽\n(B) 匿名化\n(C) 标记化\n(D) 混淆",
        "答案": "C",
        "来源页码": 159
    },
    {
        "题号": "454",
        "英文题目与选项": "You need to gain approval to begin moving your company’s data and systems into a cloud environment. However, your CEO has mandated the ability to easily remove your IT assets from the cloud provider as a precondition. Which of the following cloud concepts would this pertain to?\n(A) Removability\n(B) Extraction\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "您需要获得批准才能将公司数据和系统迁移到云环境中。然而，您的首席执行官要求能够轻松地从云提供商处移除您的IT资产，作为一个先决条件。这与以下哪个云概念相关？\n(A) 可拆卸性\n(B) 提取性\n(C) 可移植性\n(D) 可逆性",
        "答案": "D",
        "来源页码": 159
    },
    {
        "题号": "455",
        "英文题目与选项": "What is a form of cloud storage where data is stored as objects, arranged in a hierarchical structure like a file tree?\n(A) Volume storage\n(B) Databases\n(C) Content delivery network (CDN)\n(D) Object storage",
        "中文题目与选项": "什么是云存储的一种形式，其中数据存储为对象，以层次结构排列，如同文件树？\n(A) 卷存储\n(B) 数据库\n(C) 内容分发网络（CDN）\n(D) 对象存储",
        "答案": "D",
        "来源页码": 160
    },
    {
        "题号": "456",
        "英文题目与选项": "Although much of the attention given to data security is focused on keeping data private and only accessible by authorized individuals, of equal importance is the trustworthiness of the data. Which concept encapsulates this?\n(A) Validity\n(B) Integrity\n(C) Accessibility\n(D) Confidentiality",
        "中文题目与选项": "尽管对数据安全的大部分关注都集中在保持数据的隐私，并且只有授权的个人才能访问，但同样重要的是数据的可信度。哪个概念概括了这一点？\n(A) 有效性\n(B) 完整性\n(C) 可访问性\n(D) 机密性",
        "答案": "B",
        "来源页码": 160
    },
    {
        "题号": "457",
        "英文题目与选项": "Audit engagements can be conducted based on the state of a system or application at a specified point in time, or as an examination of changes and processes over a period of time. Match the audit type that is completed over a period of time with the minimum time span required.\n(A) SOC Type 2, one year\n(B) SOC Type 1, one year\n(C) SOC Type 2, one month\n(D) SOC Type 2, six months",
        "中文题目与选项": "审计可以根据系统或应用程序在特定时间的状态进行，也可以作为一段时间内考虑变化和过程的研究执行。以下哪一项是与在一段时间内完成的审计类型相匹配，并说明所需的最短时间跨度。\n(A) SOC 类型 2，一年\n(B) SOC 类型 1，一年\n(C) SOC 类型 2，一个月\n(D) SOC 类型 2，六个月",
        "答案": "D",
        "来源页码": 161
    },
    {
        "题号": "458",
        "英文题目与选项": "Which of the following BCDR testing methodologies is least intrusive?\n(A) Walk-through\n(B) Simulation\n(C) Tabletop\n(D) Full test",
        "中文题目与选项": "以下哪种 BCDR 测试方法的侵入性最小？\n(A) 演练\n(B) 模拟\n(C) 桌面演练\n(D) 完全测试",
        "答案": "C",
        "来源页码": 161
    },
    {
        "题号": "459",
        "英文题目与选项": "You are developing a new process for data discovery for your organization and are charged with ensuring that all applicable data is included. Which of the following is NOT one of the three methods of data discovery?\n(A) Metadata\n(B) Content analysis\n(C) Labels\n(D) Classification",
        "中文题目与选项": "您正在为组织开发一个新的数据发现流程，并负责确保包含所有适用的数据。以下哪一项不是三种数据发现方法之一？\n(A) 元数据\n(B) 内容分析\n(C) 标签\n(D) 分类",
        "答案": "D",
        "来源页码": 161
    },
    {
        "题号": "460",
        "英文题目与选项": "The cloud customer's trust in the cloud provider can be enhanced by all of the following except:\n(A) SLAs\n(B) Shared administration\n(C) Audits\n(D) Real-time video surveillance",
        "中文题目与选项": "云客户对云提供商的信任可以通过以下所有方式增强，但不包括：\n(A) SLA协议\n(B) 共享管理\n(C) 审计\n(D) 实时视频监控",
        "答案": "D",
        "来源页码": 162
    },
    {
        "题号": "461",
        "英文题目与选项": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing. According to the CSA, what is one reason the threat of insecure interfaces and APIs is so prevalent in cloud computing?\n(A) Most of the cloud customer's interaction with resources will be performed through APIs.\n(B) APIs are inherently insecure.\n(C) Attackers have already published vulnerabilities for all known APIs.\n(D) APIs are known carcinogens.",
        "中文题目与选项": "云安全联盟（CSA）发布了“臭名昭著的九大威胁”，这是一份针对参与云计算组织的常见威胁列表。根据CSA，不安全接口和API在云计算中如此普遍的原因之一是什么？\n(A) 云客户与资源的大部分交互将通过API执行。\n(B) API本质上是不安全的。\n(C) 攻击者已经发布了所有已知API的漏洞。\n(D) API是已知的致癌物。",
        "答案": "A",
        "来源页码": 162
    },
    {
        "题号": "462",
        "英文题目与选项": "What is the intellectual property protection for the logo of a new video game?\n(A) Copyright\n(B) Patent\n(C) Trademark\n(D) Trade secret",
        "中文题目与选项": "新电子游戏标志的知识产权保护是什么？\n(A) 版权\n(B) 专利\n(C) 商标\n(D) 商业秘密",
        "答案": "C",
        "来源页码": 162
    },
    {
        "题号": "463",
        "英文题目与选项": "Which of the following threat types can occur when encryption is not properly applied or insecure transport mechanisms are used?\n(A) Security misconfiguration\n(B) Insecure direct object references\n(C) Sensitive data exposure\n(D) Unvalidated redirects and forwards",
        "中文题目与选项": "当未正确应用加密或使用不安全的传输机制时，会出现以下哪种威胁类型？\n(A) 安全配置错误\n(B) 不安全的直接对象引用\n(C) 敏感数据泄露\n(D) 未验证的重定向和转发",
        "答案": "C",
        "来源页码": 163
    },
    {
        "题号": "464",
        "英文题目与选项": "Which of the following is essential for getting full security value from your system baseline?\n(A) Capturing and storing an image of the baseline\n(B) Keeping a copy of upcoming suggested modifications to the baseline\n(C) Having the baseline vetted by an objective third party\n(D) Using a baseline from another industry member so as not to engage in repetitious efforts",
        "中文题目与选项": "以下哪项对于从系统基线中获得充分的安全价值至关重要？\n(A) 获取并存储基线映像\n(B) 保留即将对基线进行的建议修改的副本\n(C) 由客观的第三方审查基线\n(D) 使用另一位行业成员的基线以避免重复工作",
        "答案": "A",
        "来源页码": 163
    },
    {
        "题号": "465",
        "英文题目与选项": "Within clustering systems, which process is used to provide high availability and load balancing?\n(A) Dynamic balancing\n(B) Dynamic clustering\n(C) Dynamic optimization\n(D) Dynamic resource scheduling",
        "中文题目与选项": "集群系统中使用什么流程来提供高可用性和负载平衡？\n(A) 动态平衡\n(B) 动态聚类\n(C) 动态优化\n(D) 动态资源调度",
        "答案": "D",
        "来源页码": 164
    },
    {
        "题号": "466",
        "英文题目与选项": "Within an Infrastructure as a Service model, which of the following would NOT be a measured service?\n(A) CPU\n(B) Storage\n(C) Number of users\n(D) Memory",
        "中文题目与选项": "在“基础设施即服务”模型中，以下哪项不是可度量的服务？\n(A) 中央处理器\n(B) 存储\n(C) 用户数量\n(D) 内存",
        "答案": "C",
        "来源页码": 164
    },
    {
        "题号": "467",
        "英文题目与选项": "APIs are defined as which of the following?\n(A) A set of protocols and tools for building software applications to access a web-based software application or tool\n(B) A set of routines, standards, protocols and tools for building software applications to access a web-based software application or tool\n(C) A set of standards for building software applications to access a web-based software application or tool\n(D) A set of routines and tools for building software applications to access web-based software applications",
        "中文题目与选项": "API定义为以下哪一项？\n(A) 一组用于构建软件应用程序以访问基于Web的软件应用程序或工具的协议和工具\n(B) 一组用于构建软件应用程序以访问基于Web的软件应用程序或工具的例程、标准、协议和工具\n(C) 一组用于构建软件应用程序以访问基于Web的软件应用程序或工具的标准\n(D) 一组用于构建软件应用程序以访问基于Web的软件应用程序的例程和工具",
        "答案": "B",
        "来源页码": 164
    },
    {
        "题号": "468",
        "英文题目与选项": "Which of the following is NOT a function performed by the record protocol of TLS?\n(A) Encryption\n(B) Acceleration\n(C) Authentication\n(D) Compression",
        "中文题目与选项": "以下哪项不是 TLS 记录协议执行的功能？\n(A) 加密\n(B) 加速\n(C) 身份验证\n(D) 压缩",
        "答案": "B",
        "来源页码": 165
    },
    {
        "题号": "469",
        "英文题目与选项": "Which of the following roles is responsible for creating cloud components and the testing and validation of services?\n(A) Cloud auditor\n(B) Inter-cloud provider\n(C) Cloud service broker\n(D) Cloud service developer",
        "中文题目与选项": "以下哪个角色负责创建云组件以及服务的测试和验证？\n(A) 云审核员\n(B) 云间提供者\n(C) 云服务代理\n(D) 云服务开发者",
        "答案": "D",
        "来源页码": 165
    },
    {
        "题号": "470",
        "英文题目与选项": "Which of the cloud deployment models requires the cloud customer to be part of a specific group or organization in order to host cloud services within it?\n(A) Community\n(B) Hybrid\n(C) Private\n(D) Public",
        "中文题目与选项": "哪种云部署模型要求云客户成为特定群体或组织的一部分，以便在其中托管云服务？\n(A) 社区云\n(B) 混合云\n(C) 私有云\n(D) 公有云",
        "答案": "A",
        "来源页码": 165
    },
    {
        "题号": "471",
        "英文题目与选项": "Which is the appropriate phase of the cloud data lifecycle for determining the data's classification?\n(A) Create\n(B) Use\n(C) Share\n(D) Store",
        "中文题目与选项": "云数据生命周期的哪个阶段适合确定数据的分类？\n(A) 创建\n(B) 使用\n(C) 共享\n(D) 存储",
        "答案": "A",
        "来源页码": 166
    },
    {
        "题号": "472",
        "英文题目与选项": "Which of the following methods of addressing risk is most associated with insurance?\n(A) Transference\n(B) Avoidance\n(C) Acceptance\n(D) Mitigation",
        "中文题目与选项": "以下哪种解决风险的方法与保险最相关？\n(A) 转移\n(B) 避免\n(C) 接受\n(D) 缓解",
        "答案": "A",
        "来源页码": 166
    },
    {
        "题号": "473",
        "英文题目与选项": "Which European Union directive pertains to personal data privacy and an individual's control over their personal data?\n(A) 99/9/EC\n(B) 95/46/EC\n(C) 2000/1/EC",
        "中文题目与选项": "哪个欧盟指令涉及个人数据隐私以及个人对其个人数据的控制？\n(A) 99/9/EC\n(B) 95/46/EC\n(C) 2000/1/EC",
        "答案": "B",
        "来源页码": 166
    },
    {
        "题号": "474",
        "英文题目与选项": "Which aspect of cloud computing will be most negatively impacted by vendor lock-in?\n(A) Elasticity\n(B) Reversibility\n(C) Interoperability\n(D) Portability",
        "中文题目与选项": "供应商锁定对云计算的哪个方面影响最大？\n(A) 弹性\n(B) 可逆性\n(C) 互操作性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 167
    },
    {
        "题号": "475",
        "英文题目与选项": "Which of the following is not an example of a highly regulated environment?\n(A) Financial services\n(B) Healthcare\n(C) Public companies\n(D) Wholesale or distribution",
        "中文题目与选项": "以下哪项不是高度监管环境的示例？\n(A) 金融服务\n(B) 医疗健康\n(C) 上市公司\n(D) 批发或分销",
        "答案": "D",
        "来源页码": 167
    },
    {
        "题号": "477",
        "英文题目与选项": "What is the first stage of the cloud data lifecycle where security controls can be implemented?\n(A) Use\n(B) Store\n(C) Share\n(D) Create",
        "中文题目与选项": "可以实施安全控制的云数据生命周期的第一个阶段是什么？\n(A) 使用\n(B) 存储\n(C) 共享\n(D) 创建",
        "答案": "B",
        "来源页码": 168
    },
    {
        "题号": "478",
        "英文题目与选项": "A poorly negotiated cloud service contract could result in all the following detrimental effects except:\n(A) Vendor lock-in\n(B) Lack of necessary services\n(C) Unfavorable terms\n(D) Malware",
        "中文题目与选项": "协商不佳的云服务合同可能导致以下所有不利影响，但以下情况除外：\n(A) 厂商锁定\n(B) 缺乏必要的服务\n(C) 不利条款\n(D) 恶意软件",
        "答案": "D",
        "来源页码": 168
    },
    {
        "题号": "479",
        "英文题目与选项": "Which of the cloud deployment models involves spanning multiple cloud environments or a mix of cloud hosting models?\n(A) Community\n(B) Public\n(C) Hybrid\n(D) Private",
        "中文题目与选项": "以下哪种云部署模型涉及跨多个云环境或混合多种云托管模型？\n(A) 社区云\n(B) 公有云\n(C) 混合云\n(D) 私有云",
        "答案": "C",
        "来源页码": 168
    },
    {
        "题号": "480",
        "英文题目与选项": "There are many situations when testing a BCDR plan is appropriate or mandated. Which of the following would not be a necessary time to test a BCDR plan?\n(A) After software updates\n(B) After regulatory changes\n(C) After major configuration changes\n(D) Annually",
        "中文题目与选项": "在许多情况下，测试 BCDR 计划是适当的或强制性的。以下哪项不是测试 BCDR 计划的必要时间？\n(A) 软件更新后\n(B) 法规变更后\n(C) 主要配置更改后\n(D) 每年",
        "答案": "B",
        "来源页码": 169
    },
    {
        "题号": "481",
        "英文题目与选项": "Which of the following are considered to be the building blocks of cloud computing?\n(A) Data, access control, virtualization, and services\n(B) Storage, networking, printing, and virtualization\n(C) CPU, RAM, storage, and networking\n(D) Data, CPU, RAM, and access control",
        "中文题目与选项": "以下哪一项被认为是云计算的基石？\n(A) 数据、访问控制、虚拟化和服务\n(B) 存储、网络、打印和虚拟化\n(C) CPU、RAM、存储和网络\n(D) 数据、CPU、RAM 和访问控制",
        "答案": "C",
        "来源页码": 169
    },
    {
        "题号": "482",
        "英文题目与选项": "With cloud computing crossing many jurisdictional boundaries, it is a virtual certainty that conflicts will arise between differing regulations. What is the major impediment to resolving conflicts between multiple jurisdictions to form an overall policy?\n(A) Language differences\n(B) Technologies used\n(C) Licensing issues\n(D) Lack of international authority",
        "中文题目与选项": "随着云计算跨越许多管辖边界，不同法规之间的冲突几乎是可以肯定的。解决多个司法管辖区之间的冲突以形成整体政策的主要障碍是什么？\n(A) 语言差异\n(B) 所使用的技术\n(C) 许可问题\n(D) 缺乏国际权威",
        "答案": "D",
        "来源页码": 170
    },
    {
        "题号": "483",
        "英文题目与选项": "What is the biggest concern with hosting a key management system outside of the cloud environment?\n(A) Confidentiality\n(B) Portability\n(C) Availability\n(D) Integrity",
        "中文题目与选项": "在云环境之外托管密钥管理系统最大的顾虑是什么？\n(A) 机密性\n(B) 可移植性\n(C) 可用性\n(D) 完整性",
        "答案": "C",
        "来源页码": 170
    },
    {
        "题号": "484",
        "英文题目与选项": "Which of the following is the dominant driver behind the regulations to which a system or application must adhere?\n(A) Data source\n(B) Locality\n(C) Contract\n(D) SLA",
        "中文题目与选项": "以下哪项是系统或应用程序必须遵守的法规背后的主要驱动因素？\n(A) 数据来源\n(B) 地点\n(C) 合同\n(D) 服务级别协议（SLA）",
        "答案": "B",
        "来源页码": 170
    },
    {
        "题号": "485",
        "英文题目与选项": "What is the biggest challenge to data discovery in a cloud environment?\n(A) Format\n(B) Ownership\n(C) Location\n(D) Multitenancy",
        "中文题目与选项": "云环境中数据发现的最大挑战是什么？\n(A) 格式\n(B) 所有权\n(C) 位置\n(D) 多租户技术",
        "答案": "C",
        "来源页码": 171
    },
    {
        "题号": "486",
        "英文题目与选项": "What is the term used to describe loss of access to data because the cloud provider has ceased operation?\n(A) Closing\n(B) Vendor lock-out\n(C) Vendor lock-in\n(D) Masking",
        "中文题目与选项": "用于描述由于云提供商停止运营而失去数据访问的术语是什么？\n(A) 关闭\n(B) 供应商锁出\n(C) 供应商锁定\n(D) 屏蔽",
        "答案": "B",
        "来源页码": 171
    },
    {
        "题号": "487",
        "英文题目与选项": "Which type of cloud-based storage is IRM typically associated with?\n(A) Volume\n(B) Unstructured\n(C) Structured\n(D) Object",
        "中文题目与选项": "IRM 通常与哪种类型的云存储相关联？\n(A) 卷存储\n(B) 非结构化存储\n(C) 结构化存储\n(D) 对象存储",
        "答案": "D",
        "来源页码": 171
    },
    {
        "题号": "488",
        "英文题目与选项": "SOC 2 reports were intended to be\n(A) Released to the public\n(B) Only technical assessments\n(C) Retained for internal use\n(D) Nonbinding",
        "中文题目与选项": "SOC 2 报告旨在\n(A) 向公众发布\n(B) 仅用于技术评估\n(C) 保留供内部使用\n(D) 无约束力",
        "答案": "C",
        "来源页码": 172
    },
    {
        "题号": "489",
        "英文题目与选项": "Each of the following is an element of the Identification phase of the identity and access management (IAM) process except\n(A) Provisioning\n(B) Inversion\n(C) Management\n(D) Deprovisioning",
        "中文题目与选项": "以下各项都是身份和访问管理 (IAM) 过程的标识阶段的要素，但除外的是：\n(A) 供应\n(B) 反转\n(C) 管理\n(D) 撤销供应",
        "答案": "B",
        "来源页码": 172
    },
    {
        "题号": "490",
        "英文题目与选项": "During which stage of the SDLC process should security be consulted and begin its initial involvement?\n(A) Testing\n(B) Design\n(C) Development\n(D) Requirement gathering",
        "中文题目与选项": "在 SDLC（系统开发生命周期）过程的哪个阶段，应咨询安全部门并开始其初始参与？\n(A) 测试\n(B) 设计\n(C) 开发\n(D) 需求收集",
        "答案": "D",
        "来源页码": 172
    },
    {
        "题号": "491",
        "英文题目与选项": "Which of the following is usually not included in the basic phases of the software development life cycle?\n(A) Define\n(B) Design\n(C) Describe\n(D) Develop",
        "中文题目与选项": "以下哪一项通常不包括在软件开发生命周期的基本阶段？\n(A) 定义\n(B) 设计\n(C) 叙述\n(D) 开发",
        "答案": "C",
        "来源页码": 173
    },
    {
        "题号": "492",
        "英文题目与选项": "The Cloud Security Alliance (CSA) Security, Trust, and Assurance Registry (STAR) program has how many tiers?\n(A) Two\n(B) Three\n(C) Four\n(D) Eight",
        "中文题目与选项": "云安全联盟（CSA）安全、信任和保证注册（STAR）计划有多少个层级？\n(A) 两个\n(B) 三个\n(C) 四个\n(D) 八个",
        "答案": "B",
        "来源页码": 173
    },
    {
        "题号": "493",
        "英文题目与选项": "Humidity levels for a data center are a primary concern for maintaining electrical and computing resources properly as well as ensuring that conditions are optimal for top performance. Which of the following is the optimal humidity level, as established by ASHRAE?\n(A) 20 to 40 percent relative humidity\n(B) 50 to 75 percent relative humidity\n(C) 40 to 60 percent relative humidity\n(D) 30 to 50 percent relative humidity",
        "中文题目与选项": "数据中心的湿度水平是正确维护电气和计算资源以及确保实现最佳性能的首要因素。以下哪一项是ASHRAE确定的最佳湿度范围？\n(A) 20% 至 40% 相对湿度\n(B) 50% 至 75% 相对湿度\n(C) 40% 至 60% 相对湿度\n(D) 30% 至 50% 相对湿度",
        "答案": "C",
        "来源页码": 173
    },
    {
        "题号": "494",
        "英文题目与选项": "Withub' training\n(A) Memory and networking\n(B) CPU and software\n(C) CPU and storage\n(D) CPU and memory",
        "中文题目与选项": "培训内容\n(A) 内存和网络\n(B) CPU 和软件\n(C) CPU 和存储\n(D) CPU 和内存",
        "答案": "D",
        "来源页码": 174
    },
    {
        "题号": "495",
        "英文题目与选项": "Which protocol, as a part of TLS, handles the actual secure communications and transmission of data?\n(A) Negotiation\n(B) Handshake\n(C) Transfer\n(D) Record",
        "中文题目与选项": "作为 TLS 的一部分，哪个协议处理实际的安全通信和数据传输？\n(A) 协商\n(B) 握手\n(C) 传输\n(D) 记录",
        "答案": "D",
        "来源页码": 174
    },
    {
        "题号": "496",
        "英文题目与选项": "SOC Type 1 reports are focused specifically on which type of controls?\n(A) Integrity\n(B) Personal Information\n(C) Financial\n(D) Privacy",
        "中文题目与选项": "SOC 类型 1 报告特别关注哪种类型的控制？\n(A) 完整性\n(B) 个人信息\n(C) 财务\n(D) 隐私",
        "答案": "C",
        "来源页码": 175
    },
    {
        "题号": "497",
        "英文题目与选项": "Which value refers to the percentage of production level restoration needed to meet BCDR objectives?\n(A) RPO\n(B) RTO\n(C) RSL\n(D) SRE",
        "中文题目与选项": "哪个值是指满足 BCDR 目标所需的生产水平恢复百分比？\n(A) RPO\n(B) RTO\n(C) RSL\n(D) SRE",
        "答案": "C",
        "来源页码": 175
    },
    {
        "题号": "498",
        "英文题目与选项": "Within a federated identity system, which of the following would you be MOST likely to use for sending information for consumption by a relying party?\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "中文题目与选项": "在联合身份系统中，以下哪一项最可能被用于向依赖方发送信息？\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "答案": "D",
        "来源页码": 175
    },
    {
        "题号": "499",
        "英文题目与选项": "When deciding whether to migrate to a cloud environment, which of the following is NOT a factor that a company might include in its cost-benefit analysis?\n(A) Understanding legal requirements\n(B) Shifting from capital expenditures to support IT investment to operational expenditures\n(C) The time savings and efficiencies offered by the cloud service\n(D) Branding associated with which cloud provider might be selected",
        "中文题目与选项": "在决定是否迁移到云环境时，以下哪一项不是组织在成本效益分析中可能采用的因素？\n(A) 理解法律要求\n(B) 从支持 IT 投资的资本支出转向运营支出\n(C) 云服务提供的时间节约和效率\n(D) 与可能选择的云提供商相关的品牌",
        "答案": "D",
        "来源页码": 176
    },
    {
        "题号": "500",
        "英文题目与选项": "There are two general types of smoke detectors. Which type uses a small portion of radioactive material?\n(A) Photoelectric\n(B) Ionization\n(C) Electron pulse\n(D) Integral field",
        "中文题目与选项": "烟雾探测器有两种通用类型。哪一种类型使用少量放射性物质？\n(A) 光电式\n(B) 电离式\n(C) 电子脉冲式\n(D) 积分场式",
        "答案": "B",
        "来源页码": 176
    },
    {
        "题号": "501",
        "英文题目与选项": "The BCDR plan/process should be written and documented in such a way that it can be used by:\n(A) Users\n(B) Essential BCDR team members\n(C) Regulators\n(D) Someone with the requisite skills",
        "中文题目与选项": "BCDR 计划/流程应以可供以下人员使用的方式编写和记录：\n(A) 用户\n(B) 核心 BCDR 团队成员\n(C) 监管机构\n(D) 具备必要技能的人",
        "答案": "D",
        "来源页码": 176
    },
    {
        "题号": "502",
        "英文题目与选项": "Although indirect identifiers cannot alone point to an individual, the more of them known can lead to a specific identity. Which strategy can be used to avoid such a connection being made?\n(A) Masking\n(B) Anonymization\n(C) Obfuscation\n(D) Encryption",
        "中文题目与选项": "虽然间接标识符无法单独指向个人，但已知的间接标识符越多，就越可能确定特定身份。可以使用哪种策略来避免这种关联的产生？\n(A) 掩码处理\n(B) 匿名化\n(C) 混淆\n(D) 加密",
        "答案": "B",
        "来源页码": 176
    },
    {
        "题号": "503",
        "英文题目与选项": "Which cloud service category would be most ideal for a cloud customer that is developing software to test its applications among multiple hosting providers to determine the best option for its needs?\n(A) DaaS\n(B) PaaS\n(C) IaaS\n(D) SaaS",
        "中文题目与选项": "对于正在开发软件以在多个托管提供商之间测试其应用程序，以确定最符合其需求的最佳选项的云用户来说，哪种云服务类别最理想？\n(A) DaaS\n(B) PaaS\n(C) IaaS\n(D) SaaS",
        "答案": "B",
        "来源页码": 177
    },
    {
        "题号": "504",
        "英文题目与选项": "Which cloud storage type is typically used to house virtual machine images that are used throughout the environment?\n(A) Structured\n(B) Unstructured\n(C) Volume\n(D) Object",
        "中文题目与选项": "哪种云存储类型通常用于存放整个环境中使用的虚拟机映像？\n(A) 结构化的\n(B) 非结构化的\n(C) 卷存储\n(D) 对象存储",
        "答案": "D",
        "来源页码": 177
    },
    {
        "题号": "505",
        "英文题目与选项": "Upon completing a risk analysis, a company has four different approaches to addressing risk. Which approach it takes will be based on costs, available options, and adherence to any regulatory requirements from independent audits.\nWhich of the following groupings correctly represents the four possible approaches?\n(A) Accept, avoid, transfer, mitigate\n(B) Accept, deny, transfer, mitigate\n(C) Accept, deny, mitigate, revise\n(D) Accept, dismiss, transfer, mitigate",
        "中文题目与选项": "完成风险分析后，公司有四种不同的方法来应对风险。所采取的方法将基于成本、可用选项以及对独立审计的任何监管要求的遵守。\n以下哪种分组正确地表示了四种可能的方法？\n(A) 接受、避免、转移、缓解\n(B) 接受、拒绝、转移、缓解\n(C) 接受、拒绝、缓解、修订\n(D) 接受、取消、转移、缓解",
        "答案": "A",
        "来源页码": 178
    },
    {
        "题号": "506",
        "英文题目与选项": "With a federated identity system, what does the identity provider send information to after a successful authentication?\n(A) Relying party\n(B) Service originator\n(C) Service relay\n(D) Service relay",
        "中文题目与选项": "对于联合身份系统，身份验证成功后，身份提供者会将信息发送给什么？\n(A) 依赖方\n(B) 服务发起者\n(C) 服务中继\n(D) 服务中继",
        "答案": "A",
        "来源页码": 178
    },
    {
        "题号": "507",
        "英文题目与选项": "Which phase of the cloud data lifecycle also typically entails the process of data classification?\n(A) Use\n(B) Store\n(C) Create\n(D) Archive",
        "中文题目与选项": "云数据生命周期的哪个阶段通常还需要进行数据分类过程？\n(A) 使用\n(B) 存储\n(C) 创建\n(D) 归档",
        "答案": "C",
        "来源页码": 179
    },
    {
        "题号": "508",
        "英文题目与选项": "Which cloud service category brings with it the most expensive startup costs but also the lowest costs for ongoing support and maintenance staff?\n(A) IaaS\n(B) SaaS\n(C) PaaS\n(D) DaaS",
        "中文题目与选项": "哪种云服务类别带来了最高的启动成本，同时也为持续支持和维护人员带来了最低的成本？\n(A) IaaS\n(B) SaaS\n(C) PaaS\n(D) DaaS",
        "答案": "B",
        "来源页码": 179
    },
    {
        "题号": "509",
        "英文题目与选项": "What concept does the D represent within the STRIDE threat model?\n(A) Denial of service\n(B) Distributed\n(C) Data breach\n(D) Data loss",
        "中文题目与选项": "在 STRIDE 威胁模型中，字母 D 代表的概念是什么？\n(A) 拒绝服务\n(B) 分布式\n(C) 数据泄露\n(D) 数据丢失",
        "答案": "A",
        "来源页码": 179
    },
    {
        "题号": "510",
        "英文题目与选项": "Which of the following publishes the most commonly used and widely known standard on data center tiers and topologies?\n(A) IDCA\n(B) Uptime Institute\n(C) NFPA\n(D) BICSI",
        "中文题目与选项": "下列哪项发布了数据中心设计中最常用的分层和拓扑标准？\n(A) IDCA\n(B) Uptime Institute\n(C) NFPA\n(D) BICSI",
        "答案": "B",
        "来源页码": 180
    },
    {
        "题号": "511",
        "英文题目与选项": "Gathering business requirements can aid the organization in determining all of this information about organizational assets, except:\n(A) Full inventory\n(B) Criticality\n(C) Value\n(D) Usefulness",
        "中文题目与选项": "收集业务需求可以帮助组织确定有关组织资产的所有信息，但以下情况除外：\n(A) 完整的库存\n(B) 关键性\n(C) 价值\n(D) 有用性",
        "答案": "D",
        "来源页码": 180
    },
    {
        "题号": "512",
        "英文题目与选项": "Which of the following would NOT be included as input into the requirements gathering for an application or system?\n(A) Users\n(B) Management\n(C) Regulators\n(D) Auditors",
        "中文题目与选项": "以下哪一项不会作为应用程序或系统需求收集的输入？\n(A) 用户\n(B) 管理层\n(C) 监管机构\n(D) 审计师",
        "答案": "D",
        "来源页码": 180
    },
    {
        "题号": "513",
        "英文题目与选项": "Because of multitenancy, specific risks in the public cloud that don't exist in the other cloud service models include all the following except:\n(A) DoS/DDoS\n(B) Information bleed\n(C) Risk of loss/disclosure due to legal seizures\n(D) Escalation of privilege",
        "中文题目与选项": "由于多租户特性，公共云中存在的特定风险在其他云服务模型中并不存在，但以下除外：\n(A) DoS/DDoS 攻击\n(B) 信息泄漏\n(C) 因合法扣押而造成的损失或泄露风险\n(D) 特权升级",
        "答案": "A",
        "来源页码": 181
    },
    {
        "题号": "514",
        "英文题目与选项": "Under EU law, a cloud customer who gives sensitive data to a cloud provider is still legally responsible for the damages resulting from a data breach caused by the provider; the EU would say that it is the cloud customer's fault for choosing the wrong provider. This is an example of insufficient:\n(A) Proof\n(B) Evidence\n(C) Due diligence\n(D) Application of reasonableness",
        "中文题目与选项": "根据欧盟法律，将敏感数据提供给云服务商的云客户，即使数据泄露是由云服务商造成的，仍需对由此造成的损害承担法律责任。欧盟认为这是云客户选择了错误提供商的过错。这是不足的一个例子：\n(A) 证明\n(B) 证据\n(C) 尽职调查\n(D) 合理性应用",
        "答案": "C",
        "来源页码": 181
    },
    {
        "题号": "516",
        "英文题目与选项": "What is the term we use to describe the general ease and efficiency of moving data from one cloud provider to another cloud provider or down from the cloud?\n(A) Obfuscation\n(B) Elasticity\n(C) Mobility\n(D) Portability",
        "中文题目与选项": "我们使用什么术语来描述将数据从一个云提供商移动到另一个云提供商或从云中向下移动的一般方便性和效率？\n(A) 混淆\n(B) 弹性\n(C) 流动性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 182
    },
    {
        "题号": "517",
        "英文题目与选项": "Which of the following aspects of the BC/DR process poses a risk to the organization?\n(A) Threat intelligence gathering\n(B) Preplacement of response assets\n(C) Budgeting for disaster\n(D) Full testing of the plan",
        "中文题目与选项": "BC/DR（业务连续性/灾难恢复）流程的以下哪个方面对组织构成风险？\n(A) 威胁情报收集\n(B) 预先部署响应资产\n(C) 灾难预算编制\n(D) 计划的全面测试",
        "答案": "D",
        "来源页码": 182
    },
    {
        "题号": "518",
        "英文题目与选项": "When a system needs to be exposed to the public Internet, what type of secure system would be used to perform only the desired operations?\n(A) Firewall\n(B) Proxy\n(C) Honeypot\n(D) Bastion",
        "中文题目与选项": "当系统需要暴露在公共互联网时，会使用哪种安全系统来仅执行所需的操作？\n(A) 防火墙\n(B) 代理服务器\n(C) 蜜罐\n(D) 堡垒机",
        "答案": "D",
        "来源页码": 182
    },
    {
        "题号": "519",
        "英文题目与选项": "What strategy involves hiding data in a data set to prevent someone from identifying specific individuals based on other data fields present?\n(A) Anonymization\n(B) Tokenization\n(C) Masking\n(D) Obfuscation",
        "中文题目与选项": "什么策略涉及在数据集中隐藏数据，以防止他人根据现有的其他数据字段识别特定个人？\n(A) 匿名化\n(B) 标记化\n(C) 掩码\n(D) 混淆",
        "答案": "A",
        "来源页码": 183
    },
    {
        "题号": "520",
        "英文题目与选项": "Which of the following service capabilities gives the cloud customer an established and maintained framework to deploy code and applications?\n(A) Software\n(B) Desktop\n(C) Platform\n(D) Infrastructure",
        "中文题目与选项": "以下哪种服务能力为云客户提供了一个已建立并维护的框架，以便部署代码和应用程序？\n(A) 软件\n(B) 桌面\n(C) 平台\n(D) 基础设施",
        "答案": "C",
        "来源页码": 183
    },
    {
        "题号": "521",
        "英文题目与选项": "You are the security manager of a small firm that has just purchased a DLP solution to implement in your cloud-based production environment.\nWhat should you not expect the tool to address?\n(A) Sensitive data sent inadvertently in user emails\n(B) Sensitive data captured by screen shots\n(C) Sensitive data moved to external devices\n(D) Sensitive data in the contents of files sent via FTP",
        "中文题目与选项": "您是一家小型公司的安全经理，该公司刚购买了一个 DLP 解决方案，以在基于云的生产环境中实施。您不指望该工具解决什么问题？\n(A) 用户电子邮件中无意发送的敏感数据\n(B) 屏幕截图捕获的敏感数据\n(C) 敏感数据移动到外部设备\n(D) 通过 FTP 发送的文件内容中的敏感数据",
        "答案": "B",
        "来源页码": 184
    },
    {
        "题号": "522",
        "英文题目与选项": "Which of the following types of software is a Type 2 hypervisor dependent on that a Type 1 hypervisor isn't?\n(A) VPN\n(B) Firewall\n(C) Operating system\n(D) IDS",
        "中文题目与选项": "以下哪种类型的软件是类型 2 管理程序所依赖的，而类型 1 管理程序不依赖？\n(A) 虚拟专用网\n(B) 防火墙\n(C) 操作系统\n(D) 入侵检测系统",
        "答案": "C",
        "来源页码": 184
    },
    {
        "题号": "523",
        "英文题目与选项": "Which of the following best describes a sandbox?\n(A) An isolated space where untested code and experimentation can safely occur separate from the production environment.\n(B) A space where you can safely execute malicious code to see what it does.\n(C) An isolated space where transactions are protected from malicious software\n(D) An isolated space where untested code and experimentation can safely occur within the production environment.",
        "中文题目与选项": "以下哪项最能描述沙盒？\n(A) 一个独立的空间，未经过测试的代码和实验可以安全地与生产环境分离进行。\n(B) 一个可以安全地执行恶意代码以查看其行为的空间。\n(C) 一个独立的空间，在其中事务受到恶意软件的保护。\n(D) 一个独立的空间，未经过测试的代码和实验可以在生产环境中安全地进行。",
        "答案": "A",
        "来源页码": 184
    },
    {
        "题号": "524",
        "英文题目与选项": "Which of the following is a commonly used tool for maintaining system configurations?\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "中文题目与选项": "以下哪项是维护系统配置的常用工具？\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "答案": "C",
        "来源页码": 185
    },
    {
        "题号": "525",
        "英文题目与选项": "What is the primary reason that makes resolving jurisdictional conflicts complicated?\n(A) Different technology standards\n(B) Costs\n(C) Language barriers\n(D) Lack of international authority",
        "中文题目与选项": "使解决管辖权冲突变得复杂的主要原因是什么？\n(A) 不同的技术标准\n(B) 成本\n(C) 语言障碍\n(D) 缺乏国际权威",
        "答案": "D",
        "来源页码": 185
    },
    {
        "题号": "526",
        "英文题目与选项": "________ is the legal concept whereby a cloud customer is held to a reasonable expectation for providing security of its users and clients' privacy data.\n(A) Due care\n(B) Due diligence\n(C) Liability\n(D) Reciprocity",
        "中文题目与选项": "________是一种法律概念，云客户对其用户和客户隐私数据的安全性负有合理的保障期望。\n(A) 尽职照管（Due care）\n(B) 尽职调查（Due diligence）\n(C) 责任（Liability）\n(D) 互惠（Reciprocity）",
        "答案": "A",
        "来源页码": 185
    },
    {
        "题号": "527",
        "英文题目与选项": "Every security program and process should have which of the following?\n(A) Severe penalties\n(B) Multifactor authentication\n(C) Foundational policy\n(D) Homomorphic encryption",
        "中文题目与选项": "每个安全程序和流程都应具备以下哪一项？\n(A) 严厉处罚\n(B) 多因素认证\n(C) 基础政策\n(D) 同态加密",
        "答案": "C",
        "来源页码": 186
    },
    {
        "题号": "528",
        "英文题目与选项": "Which of the following best describes SAML?\n(A) A standard for developing secure application management logistics\n(B) A standard for exchanging authentication and authorization data between security domains\n(C) A standard for exchanging usernames and passwords across devices\n(D) A standard used for directory synchronization",
        "中文题目与选项": "以下哪项最能描述 SAML？\n(A) 用于开发安全应用程序管理物流的标准\n(B) 用于安全域之间交换身份验证和授权数据的标准\n(C) 用于跨设备交换用户名和密码的标准\n(D) 用于目录同步的标准",
        "答案": "B",
        "来源页码": 186
    },
    {
        "题号": "529",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to reuse or move components of an application or service?\n(A) Availability\n(B) Interoperability\n(C) Reversibility\n(D) Portability",
        "中文题目与选项": "哪个云的交叉方面与重用或移动应用程序或服务组件的能力有关？\n(A) 可用性\n(B) 互操作性\n(C) 可逆性\n(D) 可移植性",
        "答案": "B",
        "来源页码": 186
    },
    {
        "题号": "530",
        "英文题目与选项": "Which component of ITIL pertains to planning, coordinating, executing, and validating changes and rollouts to production environments?\n(A) Release management\n(B) Availability management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件与规划、协调、执行和验证生产环境的更改和发布有关？\n(A) 发布管理\n(B) 可用性管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 187
    },
    {
        "题号": "531",
        "英文题目与选项": "What's a potential problem when object storage versus volume storage is used within IaaS for application use and dependency?\n(A) Object storage is only optimized for small files.\n(B) Object storage is its own system, and data consistency depends on replication.\n(C) Object storage may have availability issues.\n(D) Object storage is dependent on access control from the host server",
        "中文题目与选项": "在 IaaS 中使用对象存储与卷存储来实现应用程序使用和依赖时，潜在的问题是什么？\n(A) 对象存储仅针对小文件进行了优化\n(B) 对象存储是其自己的系统，数据一致性取决于复制\n(C) 对象存储可能存在可用性问题\n(D) 对象存储依赖于主机服务器的访问控制",
        "答案": "B",
        "来源页码": 187
    },
    {
        "题号": "532",
        "英文题目与选项": "Having a reservation in a cloud environment can ensure operations continue in the event of high utilization across the cloud.\nWhich of the following would NOT be a capability covered by reservations?\n(A) Performing business operations\n(B) Starting virtual machines\n(C) Running applications\n(D) Auto-scaling",
        "中文题目与选项": "在云环境中进行预订可以确保在云端高利用率情况下操作能够持续进行。\n以下哪项不是预订所涵盖的功能？\n(A) 执行业务操作\n(B) 启动虚拟机\n(C) 运行应用程序\n(D) 自动缩放",
        "答案": "D",
        "来源页码": 188
    },
    {
        "题号": "533",
        "英文题目与选项": "A UPS should have enough power to last how long?\n(A) One day\n(B) 12 hours\n(C) Long enough for graceful shutdown\n(D) 10 minutes",
        "中文题目与选项": "UPS 应该具有足够的电力可以持续多长时间？\n(A) 一天\n(B) 12 小时\n(C) 足够长的时间，以便正常关机\n(D) 10 分钟",
        "答案": "C",
        "来源页码": 188
    },
    {
        "题号": "534",
        "英文题目与选项": "Which concept pertains to cloud customers paying only for the resources they use and consume and only for the duration they are using them?\n(A) Measured service\n(B) Auto-scaling\n(C) Portability\n(D) Elasticity",
        "中文题目与选项": "哪个概念涉及云客户只为其使用和消耗的资源付费，并且只在使用这些资源的时间内付费？\n(A) 计量服务\n(B) 自动缩放\n(C) 可移植性\n(D) 弹性",
        "答案": "A",
        "来源页码": 188
    },
    {
        "题号": "535",
        "英文题目与选项": "Which ITIL component is an ongoing, iterative process of tracking all deployed and configured resources that an organization uses and depends on, whether they are hosted in a traditional data center or a cloud?\n(A) Problem management\n(B) Continuity management\n(C) Availability management\n(D) Configuration management",
        "中文题目与选项": "哪个 ITIL 组件是一个持续不断的迭代过程，用于跟踪组织使用和依赖的所有已部署和配置的资源，无论这些资源托管在传统数据中心还是云中？\n(A) 问题管理\n(B) 连续性管理\n(C) 可用性管理\n(D) 配置管理",
        "答案": "D",
        "来源页码": 189
    },
    {
        "题号": "536",
        "英文题目与选项": "Which phase of the cloud data lifecycle involves processing by a user or application?\n(A) Create\n(B) Share\n(C) Store\n(D) Use",
        "中文题目与选项": "云数据生命周期的哪个阶段涉及用户或应用程序的处理？\n(A) 创建\n(B) 共享\n(C) 存储\n(D) 使用",
        "答案": "D",
        "来源页码": 189
    },
    {
        "题号": "537",
        "英文题目与选项": "Although the United States does not have a single comprehensive privacy and regulatory framework, certain specific regulations are related to types of data or populations. Which of the following is NOT part of the U.S. federal regulatory system?\n(A) HIPAA\n(B) SOX\n(C) FISMA\n(D) PCI DSS",
        "中文题目与选项": "尽管美国没有一个单一、全面的隐私和监管框架，但一些具体的法规与数据类型或人群有关。以下哪项不是美国联邦政府的监管体系？\n(A) HIPAA\n(B) SOX\n(C) FISMA\n(D) PCI DSS",
        "答案": "D",
        "来源页码": 190
    },
    {
        "题号": "538",
        "英文题目与选项": "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats that is composed by a member-driven OWASP committee of application development experts and published approximately every 24 months. The 2013 OWASP Top Ten list includes 'sensitive data exposure.' Which of these is a technique to reduce the potential for a sensitive data exposure?\n(A) Extensive user training on proper data handling techniques\n(B) Advanced firewalls inspecting all inbound traffic, to include content-based screening\n(C) Ensuring the use of utility backup power supplies\n(D) Roving security guards",
        "中文题目与选项": "开放式 Web 应用程序安全项目（OWASP）十大威胁是由应用程序开发专家组成的成员驱动的 OWASP 委员会制定的 Web 应用程序安全威胁列表，大约每 24 个月发布一次。2013 年 OWASP 十大列表包括“敏感数据暴露”。以下哪一项是降低敏感数据暴露可能性的技术？\n(A) 关于正确数据处理技术的广泛用户培训\n(B) 检查所有入站流量的高级防火墙，包括基于内容的筛选\n(C) 确保使用公用备份电源\n(D) 流动保安",
        "答案": "A",
        "来源页码": 190
    },
    {
        "题号": "539",
        "英文题目与选项": "Which of the following should occur at each stage of the SDLC?\n(A) Added functionality\n(B) Management review\n(C) Verification and validation\n(D) Repurposing of any newly developed components",
        "中文题目与选项": "SDLC 的每个阶段都应该发生以下哪一项？\n(A) 添加的功能\n(B) 管理审查\n(C) 验证与确认\n(D) 对任何新开发组件的重新用途",
        "答案": "C",
        "来源页码": 190
    },
    {
        "题号": "540",
        "英文题目与选项": "What are the U.S. Commerce Department controls on technology exports known as?\n(A) ITAR\n(B) DRM\n(C) EAR\n(D) EAL",
        "中文题目与选项": "美国商务部对技术出口的控制叫什么？\n(A) ITAR\n(B) DRM\n(C) EAR\n(D) EAL",
        "答案": "C",
        "来源页码": 191
    },
    {
        "题号": "541",
        "英文题目与选项": "Which concept of cloud computing pertains to the ability to reuse components and services of an application for other purposes?\n(A) Portability\n(B) Interoperability\n(C) Resource pooling\n(D) Elasticity",
        "中文题目与选项": "云计算的哪个概念与将应用程序的组件和服务重新用于其他目的的能力有关？\n(A) 可移植性\n(B) 互操作性\n(C) 资源池化\n(D) 弹性",
        "答案": "B",
        "来源页码": 191
    },
    {
        "题号": "542",
        "英文题目与选项": "What is the experimental technology that might lead to the possibility of processing encrypted data without having to decrypt it first?\n(A) AES\n(B) Link encryption\n(C) Homomorphic encryption\n(D) One-time pads",
        "中文题目与选项": "哪种实验性技术可能实现对加密数据进行处理而无需先解密？\n(A) AES 加密\n(B) 链路加密\n(C) 同态加密\n(D) 一次性密码本",
        "答案": "C",
        "来源页码": 191
    },
    {
        "题号": "543",
        "英文题目与选项": "You are the security manager of a small firm that has just purchased a DLP solution to implement in your cloud-based production environment. In order to get truly holistic coverage of your environment, you should be sure to include as a step in the deployment process:\n(A) Getting signed user agreements from all users\n(B) Installation of the solution on all assets in the cloud data center\n(C) Adoption of the tool in all routers between your users and the cloud provider\n(D) All of your customers to install the tool",
        "中文题目与选项": "您是一家小型公司的安全经理，该公司刚购买了一个 DLP 解决方案，用于在基于云的生产环境中实施。为了真正全面地覆盖您的环境，您应该确保将以下哪一项作为部署过程中的一个步骤：\n(A) 从所有用户获取已签名的用户协议\n(B) 在云数据中心的所有资产上安装解决方案\n(C) 在用户与云提供商之间的所有路由器上采用该工具\n(D) 让所有客户都安装该工具",
        "答案": "B",
        "来源页码": 192
    },
    {
        "题号": "544",
        "英文题目与选项": "Which jurisdiction lacks specific and comprehensive privacy laws at a national or top level of legal authority?\n(A) European Union\n(B) Germany\n(C) Russia\n(D) United States",
        "中文题目与选项": "哪个司法管辖区在国家或最高级别法律权威层面缺乏具体和全面的隐私法？\n(A) 欧洲联盟\n(B) 德国\n(C) 俄罗斯联邦\n(D) 美国",
        "答案": "D",
        "来源页码": 192
    },
    {
        "题号": "545",
        "英文题目与选项": "What concept does the 'A' represent within the DREAD model?\n(A) Affected users\n(B) Authorization\n(C) Authentication\n(D) Affinity",
        "中文题目与选项": "在 DREAD 模型中，字母 A 代表什么概念？\n(A) 受影响的用户\n(B) 授权\n(C) 身份验证\n(D) 关联度",
        "答案": "A",
        "来源页码": 192
    },
    {
        "题号": "546",
        "英文题目与选项": "Which of the following is not typically included in the list of critical assets specified for continuity during BCDR contingency operations?\n(A) Systems\n(B) Data\n(C) Cash\n(D) Personnel",
        "中文题目与选项": "以下哪项通常不包括在 BCDR 应急操作期间连续性所规定的关键资产列表中？\n(A) 系统\n(B) 数据\n(C) 现金\n(D) 全体人员",
        "答案": "C",
        "来源页码": 193
    },
    {
        "题号": "547",
        "英文题目与选项": "Which of the following is not included in the OWASP Top Ten web application security threats?\n(A) Injection\n(B) Cross-site scripting\n(C) Internal theft\n(D) Sensitive data exposure",
        "中文题目与选项": "以下哪项不包括在 OWASP 十大 Web 应用程序安全威胁中？\n(A) 注入\n(B) 跨站脚本\n(C) 内部盗窃\n(D) 敏感数据泄露",
        "答案": "C",
        "来源页码": 193
    },
    {
        "题号": "548",
        "英文题目与选项": "When an organization is considering a cloud environment for hosting BCDR solutions, which of the following would be the greatest concern?\n(A) Self-service\n(B) Resource pooling\n(C) Availability\n(D) Location",
        "中文题目与选项": "当一个组织在考虑托管 BCDR 解决方案的云环境时，以下哪一项是最值得关注的？\n(A) 自助服务\n(B) 资源池化\n(C) 可用性\n(D) 地点",
        "答案": "D",
        "来源页码": 193
    },
    {
        "题号": "549",
        "英文题目与选项": "What are the phases of a software development lifecycle process model?\n(A) Planning and requirements analysis, define, design, develop, testing, and maintenance\n(B) Define, planning and requirements analysis, design, develop, testing, and maintenance\n(C) Planning and requirements analysis, define design, testing, develop, and maintenance\n(D) Planning and requirements analysis, design, define, develop, testing, and maintenance",
        "中文题目与选项": "软件开发生命周期过程模型的阶段是什么？\n(A) 规划和需求分析、定义、设计、开发、测试和维护\n(B) 定义、规划和需求分析、设计、开发、测试和维护\n(C) 规划和需求分析、定义、设计、测试、开发和维护\n(D) 规划和需求分析、设计、定义、开发、测试和维护",
        "答案": "A",
        "来源页码": 194
    },
    {
        "题号": "550",
        "英文题目与选项": "Many aspects of cloud computing bring enormous benefits over a traditional data center, but also introduce new challenges unique to cloud computing.\nWhich of the following aspects of cloud computing makes appropriate data classification of high importance?\n(A) Multitenancy\n(B) Interoperability\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "云计算的许多方面比传统数据中心带来了巨大的好处，但也带来了云计算特有的新挑战。\n以下哪一个云计算方面使得适当的数据分类具有高度重要性？\n(A) 多租户技术\n(B) 互操作性\n(C) 可移植性\n(D) 可逆性",
        "答案": "A",
        "来源页码": 194
    },
    {
        "题号": "551",
        "英文题目与选项": "Which type of audit report does many cloud providers use to instill confidence in their policies, practices, and procedures to current and potential customers?\n(A) SAS-70\n(B) SOC 2\n(C) SOC 1\n(D) SOC X",
        "中文题目与选项": "许多云提供商使用哪种类型的审计报告来向当前和潜在客户灌输对其政策、实践和程序的信心？\n(A) SAS-70\n(B) SOC 2\n(C) SOC 1\n(D) SOC X",
        "答案": "B",
        "来源页码": 195
    },
    {
        "题号": "552",
        "英文题目与选项": "Which protocol does the REST API depend on?\n(A) HTTP\n(B) XML\n(C) SAML\n(D) SSH",
        "中文题目与选项": "REST API 依赖于哪个协议？\n(A) HTTP\n(B) XML\n(C) SAML\n(D) SSH",
        "答案": "A",
        "来源页码": 195
    },
    {
        "题号": "553",
        "英文题目与选项": "The ISO/IEC 27001:2013 security standard contains 14 different domains that cover virtually all areas of IT operations and procedures. Which of the following is NOT one of the domains listed in the standard?\n(A) Legal\n(B) Management\n(C) Assets\n(D) Supplier Relationships",
        "中文题目与选项": "ISO/IEC 27001:2013 安全标准包含 14 个不同的域，几乎涵盖 IT 操作和程序的所有领域。以下哪项不是标准中列出的域之一？\n(A) 合法\n(B) 管理\n(C) 资产\n(D) 供应商关系",
        "答案": "B",
        "来源页码": 195
    },
    {
        "题号": "554",
        "英文题目与选项": "Which of the following is the biggest concern or challenge with using encryption?\n(A) Dependence on keys\n(B) Cipher strength\n(C) Efficiency\n(D) Protocol standards",
        "中文题目与选项": "以下哪项是使用加密时最大的顾虑或挑战？\n(A) 依赖于密钥\n(B) 密码强度\n(C) 效率\n(D) 协议标准",
        "答案": "A",
        "来源页码": 196
    },
    {
        "题号": "555",
        "英文题目与选项": "Tokenization requires at least ___ database(s).\n(A) One\n(B) Two\n(C) Three\n(D) Four",
        "中文题目与选项": "令牌化至少需要多少个数据库？\n(A) 一个\n(B) 两个\n(C) 三个\n(D) 四个",
        "答案": "B",
        "来源页码": 196
    },
    {
        "题号": "556",
        "英文题目与选项": "Egress monitoring solutions usually include a function that\n(A) Uses biometrics to scan users\n(B) Inspects incoming packets\n(C) Resides on client machines\n(D) Uses stateful inspection",
        "中文题目与选项": "出口监控解决方案通常包括哪项功能？\n(A) 使用生物特征扫描用户\n(B) 检查传入数据包\n(C) 驻留在客户端计算机上\n(D) 使用状态检测",
        "答案": "C",
        "来源页码": 196
    },
    {
        "题号": "557",
        "英文题目与选项": "There are two reasons to conduct a test of the organization's recovery from backup in an environment other than the primary production environment. Which of the following is one of them?\n(A) It is good to invest in more than one community.\n(B) You want to approximate contingency conditions, which includes not operating in the primary location.\n(C) It is good for your personnel to see other places occasionally.\n(D) Your regulators won't follow you offsite, so you'll be unobserved during your test.",
        "中文题目与选项": "有两个原因可以在主生产环境以外的环境中测试组织的备份恢复能力。以下哪一项是其中之一？\n(A) 投资多个社区是好事。\n(B) 您需要模拟应急条件，包括不在主要位置操作。\n(C) 您的员工偶尔看看其他地方是好的。\n(D) 您的监管机构不会在场外跟踪您，所以您在测试过程中会被忽视。",
        "答案": "B",
        "来源页码": 197
    },
    {
        "题号": "558",
        "英文题目与选项": "Gap analysis is performed for what reason?\n(A) To begin the benchmarking process\n(B) To assure proper accounting practices are being used\n(C) To provide assurances to cloud customers\n(D) To ensure all controls are in place and working properly.",
        "中文题目与选项": "执行差距分析的原因是什么？\n(A) 开始基准测试过程\n(B) 确保使用正确的会计惯例\n(C) 为云客户提供保证\n(D) 确保所有控制措施到位并正常工作。",
        "答案": "A",
        "来源页码": 197
    },
    {
        "题号": "559",
        "英文题目与选项": "Which of the following is NOT one of the official risk rating categories?\n(A) Critical\n(B) Low\n(C) Catastrophic\n(D) Minimal.",
        "中文题目与选项": "以下哪一项不是官方风险评级类别？\n(A) 严重\n(B) 低\n(C) 灾难\n(D) 最低。",
        "答案": "C",
        "来源页码": 197
    },
    {
        "题号": "560",
        "英文题目与选项": "Dynamic application security testing (DAST) is usually considered a form of testing.\n(A) White-box\n(B) Black-box\n(C) Gray-box\n(D) Parched field",
        "中文题目与选项": "动态应用程序安全测试 (DAST) 通常被认为是一种测试形式。\n(A) 白盒\n(B) 黑盒\n(C) 灰盒\n(D) Parched field",
        "答案": "B",
        "来源页码": 198
    },
    {
        "题号": "561",
        "英文题目与选项": "An audit scope statement defines the limits and outcomes from an audit. Which of the following would NOT be included as part of an audit scope statement?\n(A) Reports\n(B) Certification\n(C) Billing\n(D) Exclusions",
        "中文题目与选项": "审计范围声明定义了审计的限制和结果。以下哪项不属于审计范围声明的一部分？\n(A) 报告\n(B) 证明\n(C) 账单\n(D) 例外条款",
        "答案": "C",
        "来源页码": 198
    },
    {
        "题号": "562",
        "英文题目与选项": "If bit-splitting is used to store data sets across multiple jurisdictions, how may this enhance security?\n(A) By making seizure of data by law enforcement more difficult\n(B) By hiding it from attackers in a specific jurisdiction\n(C) By ensuring that users can only accidentally disclose data to one geographic area\n(D) By restricting privileged user access",
        "中文题目与选项": "如果使用位分割技术在多个司法管辖区存储数据集，这将如何增强安全性？\n(A) 通过使执法部门更难扣押数据\n(B) 通过在特定司法管辖区隐藏数据以防攻击者\n(C) 通过确保用户只能意外地向一个地理区域泄露数据\n(D) 通过限制特权用户访问",
        "答案": "A",
        "来源页码": 198
    },
    {
        "题号": "563",
        "英文题目与选项": "Which of the following systems is used to employ a variety of different techniques to discover and alert on threats and potential threats to systems and networks?\n(A) IDS\n(B) IPS\n(C) Firewall\n(D) WAF",
        "中文题目与选项": "以下哪种系统用于使用各种不同的技术来发现并警告系统和网络的威胁和潜在威胁？\n(A) IDS 入侵检测系统\n(B) IPS 入侵防御系统\n(C) 防火墙\n(D) WAF Web应用防火墙",
        "答案": "A",
        "来源页码": 199
    },
    {
        "题号": "564",
        "英文题目与选项": "When reviewing the BIA after a cloud migration, the organization should take into account new factors related to data breach impacts. One of these new factors is:\n(A) Many states have data breach notification laws.\n(B) Breaches can cause the loss of proprietary data.\n(C) Breaches can cause the loss of intellectual property.\n(D) Legal liability can't be transferred to the cloud provider.",
        "中文题目与选项": "在云迁移后审查 BIA 时，组织应考虑与数据泄露影响相关的新因素。其中一个新因素是：\n(A) 许多州都有数据泄露通知法。\n(B) 泄露可能导致专有数据的丢失。\n(C) 泄露可能导致知识产权的丧失。\n(D) 法律责任不能转移给云服务提供商。",
        "答案": "D",
        "来源页码": 199
    },
    {
        "题号": "565",
        "英文题目与选项": "What concept does the \"T\" represent in the STRIDE threat model?\n(A) TLS\n(B) Testing\n(C) Tampering with data\n(D) Transport",
        "中文题目与选项": "“T”在 STRIDE 威胁模型中代表什么概念？\n(A) TLS\n(B) 测试\n(C) 数据篡改\n(D) 传输",
        "答案": "C",
        "来源页码": 199
    },
    {
        "题号": "566",
        "英文题目与选项": "Which technology can be useful during the “share” phase of the cloud data lifecycle to continue to protect data as it leaves the original system and security controls?\n(A) IPS\n(B) WAF\n(C) DLP\n(D) IDS",
        "中文题目与选项": "在云数据生命周期的“共享”阶段，哪种技术可以在数据离开原始系统和安全控制时继续保护数据？\n(A) 入侵防御系统（IPS）\n(B) 网络应用防火墙（WAF）\n(C) 数据丢失防护（DLP）\n(D) 入侵检测系统（IDS）",
        "答案": "C",
        "来源页码": 200
    },
    {
        "题号": "567",
        "英文题目与选项": "Why does a Type 2 hypervisor typically offer less security control than a Type 1 hypervisor?\n(A) A Type 2 hypervisor runs on top of another operating system and is dependent on the security of the OS for its own security.\n(B) A Type 2 hypervisor allows users to directly perform some functions with their own access.\n(C) A Type 2 hypervisor is open source so attackers can more easily find exploitable vulnerabilities with that access.\n(D) A Type 2 hypervisor is always exposed to the public Internet for federated identity access.",
        "中文题目与选项": "为什么类型 2 虚拟机监控程序（Hypervisor）通常提供的安全控制少于类型 1 虚拟机监控程序？\n(A) 类型 2 管理程序运行在另一个操作系统之上，并且依赖于操作系统本身的安全性。\n(B) 类型 2 管理程序允许用户使用自己的访问权限直接执行某些功能。\n(C) 类型 2 管理程序是开源的，因此攻击者可以更容易利用该访问发现可利用的漏洞。\n(D) 类型 2 虚拟机监控程序始终暴露在公共 Internet 上以进行联合身份访问。",
        "答案": "A",
        "来源页码": 200
    },
    {
        "题号": "568",
        "英文题目与选项": "Which of the following are contractual components that the CSP should review and understand fully when contracting with a cloud service provider (Choose two.)\n(A) Concurrently maintainable site infrastructure\n(B) Use of subcontractors\n(C) Redundant site infrastructure capacity components\n(D) Scope of processing",
        "中文题目与选项": "以下哪些是在与云服务提供商签订合同时，CSP应全面审查和理解的合同要素（选择两个。）\n(A) 可同时维护的站点基础设施\n(B) 分包商的使用\n(C) 冗余站点基础架构容量组件\n(D) 处理范围",
        "答案": "B,D",
        "来源页码": 201
    },
    {
        "题号": "569",
        "英文题目与选项": "What is the intellectual property protection for a confidential recipe for muffins?\n(A) Patent\n(B) Trademark\n(C) Trade secret\n(D) Copyright",
        "中文题目与选项": "松饼配方的知识产权保护是什么？\n(A) 专利\n(B) 商标\n(C) 商业秘密\n(D) 版权",
        "答案": "C",
        "来源页码": 201
    },
    {
        "题号": "570",
        "英文题目与选项": "What is a key capability or characteristic of PaaS?\n(A) Support for a homogenous environment\n(B) Support for a single programming language\n(C) Ability to reduce lock-in\n(D) Ability to manually scale",
        "中文题目与选项": "PaaS的关键功能或特点是什么？\n(A) 支持同质环境\n(B) 支持单一编程语言\n(C) 减少锁定的能力\n(D) 能够手动扩展",
        "答案": "C",
        "来源页码": 201
    },
    {
        "题号": "571",
        "英文题目与选项": "Who should be the only entity allowed to declare that an organization can return to normal following contingency or BCDR operations?\n(A) Regulators\n(B) Law enforcement\n(C) The incident manager\n(D) Senior management",
        "中文题目与选项": "谁应该是唯一被允许宣布组织在应急或BCDR操作后可以恢复正常的实体？\n(A) 监管机构\n(B) 执法机构\n(C) 事件经理\n(D) 高级管理层",
        "答案": "D",
        "来源页码": 202
    },
    {
        "题号": "572",
        "英文题目与选项": "Which of the following features is a main benefit of PaaS over IaaS?\n(A) Location independence\n(B) High availability\n(C) Physical security requirements\n(D) Auto-scaling",
        "中文题目与选项": "以下哪个功能是PaaS优于IaaS的主要优势？\n(A) 位置独立性\n(B) 高可用性\n(C) 物理安全要求\n(D) 自动缩放",
        "答案": "D",
        "来源页码": 202
    },
    {
        "题号": "573",
        "英文题目与选项": "Which of the following is NOT an objective of SIEM solution implementation?\n(A) Dashboarding\n(B) Performance enhancement\n(C) Trend analysis\n(D) Centralization of log streams",
        "中文题目与选项": "SIEM 解决方案实施的目标包括以下所有内容，但不包括：\n(A) 仪表板\n(B) 性能增强\n(C) 趋势分析\n(D) 日志流集中化",
        "答案": "B",
        "来源页码": 203
    },
    {
        "题号": "574",
        "英文题目与选项": "What does nonrepudiation mean?\n(A) Prohibiting certain parties from a private conversation\n(B) Ensuring that a transaction is completed before saving the results\n(C) Ensuring that someone cannot turn off auditing capabilities while performing a function\n(D) Preventing any party that participates in a transaction from claiming that it did not",
        "中文题目与选项": "不可否认性（nonrepudiation）是什么意思？\n(A) 禁止某些方进行私人对话\n(B) 确保在保存结果之前完成事务\n(C) 确保某人在执行某项功能时无法关闭审计功能\n(D) 防止参与交易的任何一方声称自己未参与",
        "答案": "D",
        "来源页码": 203
    },
    {
        "题号": "575",
        "英文题目与选项": "The goals of DLP solution implementation include all of the following, except:\n(A) Elasticity\n(B) Policy enforcement\n(C) Data discovery\n(D) Loss mitigation",
        "中文题目与选项": "DLP 解决方案实施的目标包括以下所有内容，但不包括：\n(A) 弹性\n(B) 策略执行\n(C) 数据发现\n(D) 损失缓解",
        "答案": "A",
        "来源页码": 203
    },
    {
        "题号": "576",
        "英文题目与选项": "Which area of responsibility is associated with the cloud customer regarding the software used?\n(A) Maintenance\n(B) Licensing\n(C) Development\n(D) Purchasing",
        "中文题目与选项": "在 SaaS 环境中，云客户在所用软件方面的责任是什么？\n(A) 维护\n(B) 许可\n(C) 开发\n(D) 购买",
        "答案": "B",
        "来源页码": 204
    },
    {
        "题号": "577",
        "英文题目与选项": "Which type of cloud service category would having a vendor-neutral encryption scheme for data at rest (DAR) be the MOST important?\n(A) Public\n(B) Hybrid\n(C) Private\n(D) Community",
        "中文题目与选项": "哪种类型的云服务类别对静止数据 (DAR) 采用与供应商无关的加密方案最为重要？\n(A) 公有\n(B) 混合\n(C) 私有\n(D) 社区",
        "答案": "B",
        "来源页码": 204
    },
    {
        "题号": "578",
        "英文题目与选项": "DLP can be combined with what other security technology to enhance data controls?\n(A) DRM\n(B) SIEM\n(C) Kerberos\n(D) Hypervisors",
        "中文题目与选项": "DLP 可以与哪些其他安全技术相结合，以增强数据控制？\n(A) DRM\n(B) SIEM\n(C) Kerberos\n(D) 虚拟机管理程序",
        "答案": "A",
        "来源页码": 204
    },
    {
        "题号": "579",
        "英文题目与选项": "Tokenization requires two different ___.\n(A) Personnel\n(B) Authentication factors\n(C) Encryption keys\n(D) Databases",
        "中文题目与选项": "令牌化（标记化）需要两个不同的___。\n(A) 人员\n(B) 身份验证因素\n(C) 加密密钥\n(D) 数据库",
        "答案": "D",
        "来源页码": 205
    },
    {
        "题号": "580",
        "英文题目与选项": "Which audit type has been largely replaced by newer approaches since 2011?\n(A) SOC Type 1\n(B) SSAE-16\n(C) SAS-70\n(D) SOC Type 2",
        "中文题目与选项": "自 2011 年以来，哪种审计类型基本上被更新的方法所取代？\n(A) SOC Type 1\n(B) SSAE-16\n(C) SAS-70\n(D) SOC Type 2",
        "答案": "C",
        "来源页码": 205
    },
    {
        "题号": "581",
        "英文题目与选项": "Which of the following frameworks focuses specifically on design implementation and management?\n(A) ISO 31000:2009\n(B) ISO 27017\n(C) NIST 800-92\n(D) HIPAA",
        "中文题目与选项": "以下哪个框架特别关注设计、实施和管理？\n(A) ISO 31000:2009 标准\n(B) ISO 27017 标准\n(C) NIST 800-92 标准\n(D) HIPAA",
        "答案": "A",
        "来源页码": 205
    },
    {
        "题号": "582",
        "英文题目与选项": "When an API is utilized, it encapsulates its data to transmit back to the requester or service. What is the term used for data encapsulation in the SOAP protocol?\n(A) Packet\n(B) Payload\n(C) Object\n(D) Envelope",
        "中文题目与选项": "当 API 被利用时，它将封装其数据以传输回请求方或服务。SOAP 协议使用的数据封装称为什么？\n(A) 数据包\n(B) 有效载荷\n(C) 对象\n(D) 信封",
        "答案": "D",
        "来源页码": 206
    },
    {
        "题号": "583",
        "英文题目与选项": "The use of which of the following technologies will NOT require the security dependency of an operating system, other than its own?\n(A) Management plane\n(B) Type 1 hypervisor\n(C) Type 2 hypervisor\n(D) Virtual machine",
        "中文题目与选项": "以下哪种技术不需要除自身之外的操作系统安全依赖性？\n(A) 管理平面\n(B) 类型 1 管理程序\n(C) 类型 2 管理程序\n(D) 虚拟机",
        "答案": "B",
        "来源页码": 206
    },
    {
        "题号": "584",
        "英文题目与选项": "Data centers have enormous power resources that are distributed and consumed throughout the entire facility. Which of the following standards pertains to the proper fire safety standards within that scope?\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "中文题目与选项": "数据中心拥有庞大的电力资源，这些资源在整个设施中分配和消耗。以下哪项标准与该范围内的适当消防安全标准有关？\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "答案": "C",
        "来源页码": 206
    },
    {
        "题号": "585",
        "英文题目与选项": "When a data center is configured such that the backs of the devices face each other and the ambient temperature in the work area is cool, it is called:\n(A) Hot aisle containment\n(B) Cold aisle containment\n(C) Thermo-optimized\n(D) HVAC modulated",
        "中文题目与选项": "当数据中心的设备被放置为背对背摆放，并且工作区域的环境温度较低时，这种配置称为：\n(A) 热通道封闭\n(B) 冷通道封闭\n(C) 热优化\n(D) HVAC 调制",
        "答案": "B",
        "来源页码": 207
    },
    {
        "题号": "586",
        "英文题目与选项": "When using an IaaS solution, what is the capability provided to the customer?\n(A) To provision processing, storage, networks, and other fundamental computing resources when the consumer is able to deploy and run arbitrary software, which can include OSs and applications.\n(B) To provision processing, storage, networks, and other fundamental computing resources when the auditor is able to deploy and run arbitrary software, which can include OSs and applications.\n(C) To provision processing, storage, networks, and other fundamental computing resources when the provider is able to deploy and run arbitrary software, which can include OSs and applications.\n(D) To provision processing, storage, networks, and other fundamental computing resources when the consumer is not able to deploy and run arbitrary software, which can include OSs and applications.",
        "中文题目与选项": "使用 IaaS 解决方案时，向客户提供的能力是什么？\n(A) 当用户能够部署和运行任意软件（包括操作系统和应用程序）时，提供处理、存储、网络和其他基本计算资源。\n(B) 当审计员能够部署和运行任意软件（包括操作系统和应用程序）时，提供处理、存储、网络和其他基本计算资源。\n(C) 当提供商能够部署和运行任意软件（包括操作系统和应用程序）时，提供处理、存储、网络和其他基本计算资源。\n(D) 当用户无法部署和运行任意软件（包括操作系统和应用程序）时，提供处理、存储、网络和其他基本计算资源。",
        "答案": "A",
        "来源页码": 207
    },
    {
        "题号": "587",
        "英文题目与选项": "determination of who has ownership of the logo?\n(A) Whoever first used the logo\n(B) The jurisdiction where both businesses are using the logo simultaneously\n(C) Whoever first applied for legal protection of the logo\n(D) Whichever entity has the most customers that recognize the logo",
        "中文题目与选项": "你是多个州汽车维修中心连锁店的安全总监。您的公司使用云服务提供商来实现多个设施位置的业务功能，例如：1)订购零件 2)物流和库存 3)计费 和 4)市场销售。你最新的一个地点的经理报告说，有一家竞争对手的汽车维修公司，其标志看起来几乎与你公司使用的标志一模一样。什么最有可能影响标志的所有权？\n(A) 第一次使用该标志的人\n(B) 两个企业同时使用该标志的司法管辖区\n(C) 首先申请商标法律保护的人\n(D) 无论哪个实体的客户最多，都可以识别该标志",
        "答案": "C",
        "来源页码": 208
    },
    {
        "题号": "588",
        "英文题目与选项": "Which of the following best describes data masking?\n(A) A method where the last few numbers in a dataset are not obscured. These are often used for authentication.\n(B) A method for creating similar but inauthentic datasets used for software testing and user training.\n(C) A method used to protect prying eyes from data such as social security numbers and credit card data.\n(D) Data masking involves stripping out all similar digits in a string of numbers so as to obscure the original number.",
        "中文题目与选项": "以下哪项最能描述数据屏蔽？\n(A) 一种方法，其中数据集中最后几个数字不会被遮挡，这些通常用于身份验证。\n(B) 一种创建类似但不真实的数据集的方法，用于软件测试和用户培训。\n(C) 一种用于保护数据（例如社会安全号码和信用卡数据）免受窥探者的眼睛侵害的方法。\n(D) 数据屏蔽包括去除一串数字中所有相似的数字，以掩盖原始数字。",
        "答案": "B",
        "来源页码": 208
    },
    {
        "题号": "589",
        "英文题目与选项": "What is the term that describes the situation when a malicious user/attacker can exit the restrictions of a single host and access other nodes on the network?\n(A) Host escape\n(B) Guest escape\n(C) Provider exit\n(D) Escalation of privileges",
        "中文题目与选项": "描述恶意用户/攻击者可以退出单个主机的限制并访问网络上其他节点的情况的术语是什么？\n(A) 主机逃逸\n(B) 客体逃逸\n(C) 提供者退出\n(D) 特权提升",
        "答案": "A",
        "来源页码": 208
    },
    {
        "题号": "590",
        "英文题目与选项": "Which of the following operations would NOT make data part of the \"create\" phase of the cloud data lifecycle?\n(A) Modifying metadata\n(B) Migrating data\n(C) Modifying data\n(D) Constructing new data",
        "中文题目与选项": "以下哪项操作不会使数据成为云数据生命周期“创建”阶段的一部分？\n(A) 修改元数据\n(B) 迁移数据\n(C) 修改数据\n(D) 构建新数据",
        "答案": "A",
        "来源页码": 209
    },
    {
        "题号": "591",
        "英文题目与选项": "Key maintenance and security are paramount within a cloud environment due to the widespread use of encryption for both data and transmissions.\nWhich of the following key-management systems would provide the most robust control over and ownership of the key-management processes for the cloud customer?\n(A) Remote key management service\n(B) Local key management service\n(C) Client key management service\n(D) Internal key management service",
        "中文题目与选项": "由于加密在数据和传输中的广泛使用，密钥维护和安全在云环境中至关重要。\n以下哪个关键管理系统将为云客户提供对关键管理流程的最可靠控制和所有权？\n(A) 远程密钥管理服务\n(B) 本地密钥管理服务\n(C) 客户端密钥管理服务\n(D) 内部密钥管理服务",
        "答案": "A",
        "来源页码": 209
    },
    {
        "题号": "592",
        "英文题目与选项": "Which of the following vulnerability types involves sending unauthorized and manipulated requests through a user's client to execute commands on an application using their own credentials?\n(A) Injection\n(B) Cross-site request forgery\n(C) Missing function-level access control\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种漏洞类型涉及通过用户的客户端发送无效和被操纵的请求，以在应用程序上使用自己的凭据执行命令？\n(A) 注入\n(B) 跨站请求伪造\n(C) 缺少功能级别访问控制\n(D) 跨站点脚本",
        "答案": "B",
        "来源页码": 210
    },
    {
        "题号": "593",
        "英文题目与选项": "All of these are methods of data discovery, except:\n(A) Label-based\n(B) User-based\n(C) Content-based\n(D) Metadata-based",
        "中文题目与选项": "所有这些都是数据发现的方法，除了：\n(A) 基于标签\n(B) 基于用户\n(C) 基于内容\n(D) 基于元数据",
        "答案": "B",
        "来源页码": 210
    },
    {
        "题号": "594",
        "英文题目与选项": "Which of the following aids in the ability to demonstrate due diligence efforts?\n(A) Redundant power lines\n(B) HVAC placement\n(C) Security training documentation\n(D) Bollards",
        "中文题目与选项": "以下哪项有助于证明尽职调查的能力？\n(A) 冗余电源线\n(B) HVAC放置\n(C) 安全培训文档\n(D) 防护柱",
        "答案": "C",
        "来源页码": 210
    },
    {
        "题号": "595",
        "英文题目与选项": "What type of masking strategy involves replacing data on a system while it passes between the data and application layers?\n(A) Dynamic\n(B) Static\n(C) Replication\n(D) Duplication",
        "中文题目与选项": "什么类型的屏蔽策略涉及在数据和应用程序层之间传递时替换系统上的数据？\n(A) 动态\n(B) 静态\n(C) 复制\n(D) 重复",
        "答案": "A",
        "来源页码": 211
    },
    {
        "题号": "596",
        "英文题目与选项": "When an organization is considering the use of cloud services for BCDR planning and solutions, which of the following cloud concepts would be the most important?\n(A) Reversibility\n(B) Elasticity\n(C) Interoperability\n(D) Portability",
        "中文题目与选项": "当组织考虑将云服务用于 BCDR 规划和解决方案时，以下哪种云概念最重要？\n(A) 可逆性\n(B) 弹性\n(C) 互操作性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 211
    },
    {
        "题号": "597",
        "英文题目与选项": "Following cloud migration, all of the following should be considered as dependencies when reviewing the BIA, EXCEPT:\n(A) The cloud provider's suppliers\n(B) The cloud provider's vendors\n(C) The cloud provider's utilities\n(D) The cloud provider's resellers",
        "中文题目与选项": "在云迁移后审查业务影响分析 (BIA) 时，以下每一项都需要作为依赖项考虑，除了：\n(A) 云提供商的供应商\n(B) 云提供商的供应商\n(C) 云提供商的公用设施\n(D) 云提供商的经销商",
        "答案": "D",
        "来源页码": 212
    },
    {
        "题号": "598",
        "英文题目与选项": "Different security testing methodologies offer different strategies and approaches to testing systems, requiring security personnel to determine the best type to use for their specific circumstances.\nWhat does dynamic application security testing (DAST) NOT entail that SAST does?\n(A) Discovery\n(B) Knowledge of the system\n(C) Scanning\n(D) Probing",
        "中文题目与选项": "不同的安全测试方法为系统测试提供了不同的策略和方法，要求安全人员根据特定的环境确定最合适的测试类型。\n动态应用程序安全测试 (DAST) 不需要，而静态应用程序安全测试 (SAST) 需要的是：\n(A) 发现\n(B) 系统知识\n(C) 扫描\n(D) 探测",
        "答案": "B",
        "来源页码": 212
    },
    {
        "题号": "599",
        "英文题目与选项": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations.\nInstead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization's specific storage resources.\nIn order to pass the user IDs and authenticating credentials of each user among the organizations, what protocol/language/motif will you most likely utilize?\n(A) Representational State Transfer (REST)\n(B) Security Assertion Markup Language (SAML)\n(C) Simple Object Access Protocol (SOAP)\n(D) OAuth",
        "中文题目与选项": "你在政府科研机构工作。你的组织经常与其他政府科研机构共享数据。你希望为这些组织创建一个单点登录体验，使每个组织的用户都可以使用该组织颁发的用户 ID/身份验证登录，然后访问其他所有组织的研究数据。\n你不打算在每个组织中复制其他组织的数据存储（这是实现此目标的一种方式），而是希望每个用户都能访问每个组织特定的存储资源。\n为了在这些组织之间传递每个用户的用户 ID 和身份验证凭据，你最有可能使用以下哪种协议/语言/机制？\n(A) 表述性状态传递（REST）\n(B) 安全断言标记语言（SAML）\n(C) 简单对象访问协议（SOAP）\n(D) OAuth",
        "答案": "B",
        "来源页码": 212
    },
    {
        "题号": "600",
        "英文题目与选项": "Which of the following is a restriction that can be enforced by information rights management (IRM) that is not possible for traditional file system controls?\n(A) Delete\n(B) Modify\n(C) Read\n(D) Print",
        "中文题目与选项": "以下哪项限制可以由信息权限管理（IRM）强制实施，而传统的文件系统控制无法实现？\n(A) 删除\n(B) 修改\n(C) 阅读\n(D) 打印",
        "答案": "D",
        "来源页码": 213
    },
    {
        "题号": "601",
        "英文题目与选项": "Although the REST API supports a wide variety of data formats for communication and exchange, which data formats are the most commonly used?\n(A) SAML and HTML\n(B) XML and SAML\n(C) XML and JSON\n(D) JSON and SAML",
        "中文题目与选项": "尽管 REST API 支持多种数据格式用于通信和交换，但最常用的数据格式是什么？\n(A) SAML 和 HTML\n(B) XML 和 SAML\n(C) XML 和 JSON\n(D) JSON 和 SAML",
        "答案": "C",
        "来源页码": 213
    },
    {
        "题号": "602",
        "英文题目与选项": "What is the Cloud Security Alliance Cloud Controls Matrix (CCM)?\n(A) A set of software development life cycle requirements for cloud service providers\n(B) An inventory of cloud services security controls that are arranged into 3 hierarchy of security domains\n(C) An inventory of cloud service security controls that are arranged into separate security domains\n(D) A set of regulatory requirements for cloud service providers",
        "中文题目与选项": "什么是云安全联盟云控制矩阵 (CCM)?\n(A) 云服务提供商的一组软件开发生命周期要求\n(B) 云服务安全控制的清单，这些控制被排列成安全域的层次结构\n(C) 云服务安全控制的清单，这些控制被安排到单独的安全域中\n(D) 云服务提供商的一系列监管要求",
        "答案": "C",
        "来源页码": 214
    },
    {
        "题号": "603",
        "英文题目与选项": "Which of the following is not a security concern related to archiving data for long-term storage?\n(A) Long-term storage of the related cryptographic keys\n(B) Format of the data\n(C) Media the data resides on\n(D) Underground depth of the storage facility",
        "中文题目与选项": "以下哪一项不是与归档数据以供长期存储有关的安全问题?\n(A) 相关加密密钥的长期存储\n(B) 数据的格式\n(C) 数据所在的介质\n(D) 存储设施的地下深度",
        "答案": "D",
        "来源页码": 214
    },
    {
        "题号": "604",
        "英文题目与选项": "Which of the following is NOT a domain of the Cloud Controls Matrix (CCM)?\n(A) Data center security\n(B) Human resources\n(C) Mobile security\n(D) Budgetary and cost controls",
        "中文题目与选项": "以下哪一项不是云控制矩阵 (CCM) 的域?\n(A) 数据中心安全\n(B) 人力资源\n(C) 移动安全\n(D) 预算和成本控制",
        "答案": "D",
        "来源页码": 214
    },
    {
        "题号": "605",
        "英文题目与选项": "Limits for resource utilization can be set at different levels within a cloud environment to ensure that no particular entity can consume a level of resources that impacts other cloud customers.\nWhich of the following is NOT a unit covered by limits?\n(A) Hypervisor\n(B) Cloud customer\n(C) Virtual machine\n(D) Service",
        "中文题目与选项": "可以在云环境中的不同级别设置资源利用率限制，以确保任何特定实体都不能消耗会影响其他云客户的资源级别。\n以下哪一项不是限制范围内的单位？\n(A) 管理程序\n(B) 云客户\n(C) 虚拟机\n(D) 服务",
        "答案": "A",
        "来源页码": 215
    },
    {
        "题号": "606",
        "英文题目与选项": "Many tools and technologies are available for securing or monitoring data in transit within a data center, whether it is a traditional data center or a cloud.\nWhich of the following is NOT a technology for securing data in transit?\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "中文题目与选项": "许多工具和技术可用于保护或监控数据中心内传输中的数据，无论是传统数据中心还是云环境。\n以下哪一项不是用于保护传输中数据的技术？\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "答案": "C",
        "来源页码": 215
    },
    {
        "题号": "607",
        "英文题目与选项": "Which report type is considered a 'restricted use' report and intended only for management, stakeholders, clients of the service organization, and auditors?\n(A) Withub' raining\n(B) SSAE-16\n(C) SOC Type 1\n(D) SOC Type 2",
        "中文题目与选项": "哪种报告被视为“限制用途”报告，仅适用于组织的管理层、利益相关者、服务组织的客户和审计员？\n(A) Withub' raining\n(B) SSAE-16\n(C) SOC 类型 1\n(D) SOC 类型 2",
        "答案": "C",
        "来源页码": 216
    },
    {
        "题号": "608",
        "英文题目与选项": "Which Common Criteria Evaluation Assurance Level (EAL) is granted to those products that are formally verified in terms of design and tested by an independent third party?\n(A) 1\n(B) 3\n(C) 5\n(D) 7",
        "中文题目与选项": "哪一通用准则评估保证级别（EAL）授予那些在设计方面经过正式验证并由独立第三方测试的产品？\n(A) 1\n(B) 3\n(C) 5\n(D) 7",
        "答案": "D",
        "来源页码": 216
    },
    {
        "题号": "609",
        "英文题目与选项": "The application normative framework is best described as which of the following?\n(A) A superset of the ONF\n(B) A stand-alone framework for storing security practices for the ONF\n(C) The complete ONF\n(D) A subnet of the ONF",
        "中文题目与选项": "应用程序规范框架（ANF）最恰当的描述是下列哪一项？\n(A) ONF 的超集\n(B) 用于存储 ONF 安全实践的独立框架\n(C) 完整的 ONF\n(D) ONF 的子网",
        "答案": "D",
        "来源页码": 216
    },
    {
        "题号": "610",
        "英文题目与选项": "You are in charge of creating the BCDR plan and procedures for your organization. Your organization has its production environment hosted by a cloud provider, and you have appropriate protections in place. Which of the following is a significant consideration for your BCDR backup?\n(A) Enough personnel at the BCDR recovery site to ensure proper operations\n(B) Good cryptographic key management\n(C) Access to the servers where the BCDR backup is stored\n(D) Forensic analysis capabilities",
        "中文题目与选项": "你负责为你的组织制定业务连续性与灾难恢复（BCDR）计划和流程。你的组织的生产环境托管在云服务提供商处，并且已经具备适当的保护措施。以下哪项是你在 BCDR 备份中需要重点考虑的重要因素？\n(A) 恢复站点上有足够人员以确保正确运行\n(B) 良好的加密密钥管理\n(C) 访问存放 BCDR 备份的服务器\n(D) 取证分析能力",
        "答案": "B",
        "来源页码": 216
    },
    {
        "题号": "611",
        "英文题目与选项": "Which of the following characteristics is associated with digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM)?\n(A) Mapping to existing access control lists (ACLs)\n(B) Delineating biometric catalogs\n(C) Preventing multifactor authentication\n(D) Prohibiting unauthorized transposition",
        "中文题目与选项": "以下哪些特征与数字版权管理 (DRM) 解决方案（有时称为信息权限管理或 IRM）相关？\n(A) 映射到现有访问控制列表 (ACL)\n(B) 描绘生物特征目录\n(C) 防止多因素身份验证\n(D) 禁止未经授权的转置",
        "答案": "A",
        "来源页码": 217
    },
    {
        "题号": "612",
        "英文题目与选项": "The president of your company has tasked you with implementing cloud services as the most efficient way of obtaining a robust disaster recovery configuration for your production services. Which of the cloud deployment models would you MOST likely be exploring?\n(A) Hybrid\n(B) Private\n(C) Community\n(D) Public",
        "中文题目与选项": "您公司的总裁已指派您实施云服务，这是一种为您的生产服务获得强健灾难恢复配置的最有效方式。您最有可能探索哪种云部署模型？\n(A) 混合\n(B) 私有\n(C) 社区\n(D) 公共",
        "答案": "A",
        "来源页码": 217
    },
    {
        "题号": "613",
        "英文题目与选项": "Which of the following is not one of the types of controls?\n(A) Transitional\n(B) Administrative\n(C) Technical\n(D) Physical",
        "中文题目与选项": "以下哪项不是控制类型之一？\n(A) 过渡的\n(B) 管理的\n(C) 技术的\n(D) 物理的",
        "答案": "A",
        "来源页码": 218
    },
    {
        "题号": "614",
        "英文题目与选项": "When using a PaaS solution, what is the capability provided to the customer?\n(A) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The provider does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(B) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(C) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the consumer supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(D) To deploy onto the cloud infrastructure provider-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.",
        "中文题目与选项": "使用 PaaS 解决方案时，向客户提供的能力是什么？\n(A) 部署到云基础设施上，消费者使用提供商支持的编程语言、库、服务和工具创建或获取的应用程序。提供商不管理或控制底层云基础设施，包括网络、服务器、操作系统或存储，但可以控制部署的应用程序以及应用程序托管环境的配置设置。\n(B) 部署到云基础设施上，消费者使用提供商支持的编程语言、库、服务和工具创建或获取的应用程序。消费者不管理或控制底层云基础设施，包括网络、服务器、操作系统或存储，但可以控制部署的应用程序以及应用程序托管环境的配置设置。\n(C) 将消费者使用其支持的编程语言、库、服务和工具创建或获取的应用程序部署到云基础设施上。消费者不管理或控制底层云基础设施，包括网络、服务器、操作系统或存储，但可以控制部署的应用程序以及应用程序托管环境的配置设置。\n(D) 部署到云基础设施上，提供商使用其支持的编程语言、库、服务和工具创建或获取的应用程序。消费者不管理或控制底层云基础设施，包括网络、服务器、操作系统或存储，但可以控制部署的应用程序以及应用程序托管环境的配置设置。",
        "答案": "B",
        "来源页码": 218
    },
    {
        "题号": "615",
        "英文题目与选项": "Which phase of the cloud data lifecycle represents the first instance where security controls can be implemented?\n(A) Use\n(B) Share\n(C) Store\n(D) Create",
        "中文题目与选项": "云数据生命周期的哪个阶段代表了可以实施安全控制的第一个实例？\n(A) 使用\n(B) 共享\n(C) 存储\n(D) 创建",
        "答案": "C",
        "来源页码": 219
    },
    {
        "题号": "616",
        "英文题目与选项": "Which of the following is a widely used tool for code development, branching, and collaboration?\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "中文题目与选项": "以下哪一项是广泛用于代码开发、分支和协作的工具？\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "答案": "A",
        "来源页码": 219
    },
    {
        "题号": "617",
        "英文题目与选项": "From a security perspective, what component of a cloud computing infrastructure represents the biggest concern?\n(A) Hypervisor\n(B) Management plane\n(C) Object storage\n(D) Encryption",
        "中文题目与选项": "从安全角度来看，云计算基础设施的哪个组件代表了最大的关注点？\n(A) 虚拟机监控程序（Hypervisor）\n(B) 管理平面\n(C) 对象存储\n(D) 加密",
        "答案": "B",
        "来源页码": 219
    },
    {
        "题号": "618",
        "英文题目与选项": "With data in transit, which of the following will be the MOST major concern in order for a DLP solution to properly work?\n(A) Scalability\n(B) Encryption\n(C) Redundancy\n(D) Integrity",
        "中文题目与选项": "在数据传输过程中，为了使 DLP 解决方案能够正常工作，下列哪项是最主要的关注点？\n(A) 可扩展性\n(B) 加密\n(C) 冗余\n(D) 完整性",
        "答案": "B",
        "来源页码": 220
    },
    {
        "题号": "619",
        "英文题目与选项": "You are the security manager for an online retail sales company with 100 employees and a production environment hosted in a PaaS model with a major cloud provider. Your company policies have allowed for a BYOD workforce that works equally from the company offices and their own homes or other locations. The policies also allow users to select which APIs they install and use on their own devices in order to access and manipulate company data.\nOf the following, what is a security control you'd like to implement to offset the risk(s) incurred by this practice?\n(A) Regular and widespread integrity checks on sampled data throughout the managed environment\n(B) More extensive and granular background checks on all employees, particularly new hires\n(C) Inclusion of references to all applicable regulations in the policy documents\n(D) Increased enforcement of separation of duties for all workflows",
        "中文题目与选项": "您是一家拥有 100 名员工的在线零售销售公司的安全经理，该公司的生产环境采用主要云提供商托管的 PaaS 模式。公司的政策允许 BYOD 员工在公司办公室、自己家中或其他地点灵活工作。这些策略还允许用户在自己的设备上选择安装和使用哪些 API，以便访问和操作公司数据。\n在以下选项中，您希望实施哪种安全控制来抵消这种做法带来的风险？\n(A) 在整个受管环境中对抽样数据执行定期且广泛的完整性检查\n(B) 对所有员工，特别是新员工，进行更深入和更细化的背景调查\n(C) 在政策文件中加入所有适用法规的引用\n(D) 对所有工作流加强职责分离的执行",
        "答案": "A",
        "来源页码": 220
    },
    {
        "题号": "620",
        "英文题目与选项": "Which of the following pertains to fire safety standards within a data center, specifically with their enormous electrical consumption?\n(A) NFPA\n(B) BICSI\n(C) IDCA\n(D) Uptime Institute",
        "中文题目与选项": "以下哪项与数据中心内的消防安全标准有关，特别是其巨大的电力消耗？\n(A) NFPA（美国国家消防协会）\n(B) BICSI\n(C) IDCA\n(D) Uptime Institute",
        "答案": "A",
        "来源页码": 221
    },
    {
        "题号": "621",
        "英文题目与选项": "What is the biggest benefit to leasing space in a data center versus building or maintaining your own?\n(A) Certification\n(B) Costs\n(C) Regulation\n(D) Control",
        "中文题目与选项": "在数据中心租赁空间与建造或维护自有空间相比，最大的好处是什么？\n(A) 认证\n(B) 成本\n(C) 监管\n(D) 控制",
        "答案": "B",
        "来源页码": 221
    },
    {
        "题号": "622",
        "英文题目与选项": "In a federated identity arrangement using a trusted third-party model, who is the identity provider and who is the relying party?\n(A) The users of the various organizations within the federation / a CASB\n(B) Each member organization / a trusted third party\n(C) Each member organization / each member organization\n(D) A contracted third party / the various member organizations of the federation",
        "中文题目与选项": "在使用可信第三方模型的联合身份管理安排中，谁是身份提供者，谁是依赖方？\n(A) 联盟内各组织的用户 / CASB\n(B) 各成员组织 / 可信的第三方\n(C) 各成员组织 / 各成员组织\n(D) 签约的第三方 / 联盟的各成员组织",
        "答案": "D",
        "来源页码": 221
    },
    {
        "题号": "623",
        "英文题目与选项": "Security is a critical yet often overlooked consideration for BCDR planning. At which stage of the planning process should security be involved?\n(A) Scope definition\n(B) Requirements gathering\n(C) Analysis\n(D) Risk assessment",
        "中文题目与选项": "安全性是 BCDR 规划中一个关键但经常被忽视的考虑因素。在规划过程中的哪个阶段应该涉及安全？\n(A) 范围定义\n(B) 需求收集\n(C) 分析\n(D) 风险评估",
        "答案": "A",
        "来源页码": 222
    },
    {
        "题号": "624",
        "英文题目与选项": "What is the data encapsulation used with the SOAP protocol referred to?\n(A) Packet\n(B) Envelope\n(C) Payload\n(D) Object",
        "中文题目与选项": "SOAP 协议所使用的数据封装称为什么？\n(A) 数据包\n(B) 信封\n(C) 负载\n(D) 对象",
        "答案": "B",
        "来源页码": 222
    },
    {
        "题号": "625",
        "英文题目与选项": "Which of the following is a method for apportioning resources that involves setting maximum usage amounts for all tenants/customers within the environment?\n(A) Reservations\n(B) Shares\n(C) Cancellations\n(D) Limits",
        "中文题目与选项": "以下哪项是分配资源的方法，涉及为环境中的所有租户/客户设置最大使用量？\n(A) 预订\n(B) 共享\n(C) 取消\n(D) 限制",
        "答案": "D",
        "来源页码": 223
    },
    {
        "题号": "626",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data in use?\n(A) Application server\n(B) Database server\n(C) Network perimeter\n(D) User's client",
        "中文题目与选项": "用于监控使用中数据时，DLP 解决方案通常安装在何处？\n(A) 应用程序服务器\n(B) 数据库服务器\n(C) 网络边界\n(D) 用户的客户端",
        "答案": "D",
        "来源页码": 223
    },
    {
        "题号": "627",
        "英文题目与选项": "When beginning an audit, both the system owner and the auditors must agree on various aspects of the final audit report. Which of the following would NOT be something that is predefined as part of the audit agreement?\n(A) Size\n(B) Format\n(C) Structure\n(D) Audience",
        "中文题目与选项": "开始审计时，系统所有者和审计员必须就最终审计报告的各个方面达成一致。以下哪项不是审计协议中预先定义的内容？\n(A) 大小\n(B) 格式\n(C) 结构\n(D) 受众",
        "答案": "A",
        "来源页码": 223
    },
    {
        "题号": "628",
        "英文题目与选项": "The physical layout of a cloud data center campus should include redundancies of all the following except:\n(A) Generators\n(B) HVAC units\n(C) Generator fuel storage\n(D) Points of personnel ingress",
        "中文题目与选项": "云数据中心园区的物理布局应包括以下所有冗余，但不包括：\n(A) 发电机\n(B) 暖通空调装置\n(C) 发电机燃料储存\n(D) 人员进入点",
        "答案": "D",
        "来源页码": 224
    },
    {
        "题号": "629",
        "英文题目与选项": "Within a federated identity system, which entity accepts tokens from the identity provider?\n(A) Assertion manager\n(B) Servicing party\n(C) Proxy party\n(D) Relying party",
        "中文题目与选项": "在联合身份系统中，哪个实体接受来自身份提供者的令牌？\n(A) 断言管理方\n(B) 服务方\n(C) 代理方\n(D) 依赖方",
        "答案": "D",
        "来源页码": 224
    },
    {
        "题号": "630",
        "英文题目与选项": "Your company operates in a highly competitive market and possesses high-value data assets. Senior management wants to move to a cloud environment but is concerned that providers may not meet the company's security requirements. Which deployment model would probably best suit the company's needs?\n(A) Public\n(B) Private\n(C) Community\n(D) Hybrid",
        "中文题目与选项": "您的公司在竞争激烈的市场中运营，拥有极高价值的数据资产。高级管理层希望迁移到云环境，但担心提供商无法满足公司的安全需求。哪种部署模型可能最适合公司的需求？\n(A) 公有云\n(B) 私有云\n(C) 社区云\n(D) 混合云",
        "答案": "B",
        "来源页码": 225
    },
    {
        "题号": "631",
        "英文题目与选项": "DAST checks software functionality in:\n(A) The production environment\n(B) A runtime state\n(C) The cloud\n(D) An IaaS configuration",
        "中文题目与选项": "DAST 检查软件功能的环境是：\n(A) 生产环境\n(B) 运行状态\n(C) 云环境\n(D) IaaS 配置",
        "答案": "B",
        "来源页码": 225
    },
    {
        "题号": "632",
        "英文题目与选项": "DLP solutions can aid in deterring loss due to which of the following?\n(A) Inadvertent disclosure\n(B) Natural disaster\n(C) Randomization\n(D) Device failure",
        "中文题目与选项": "DLP 解决方案有助于防止以下哪一项造成的数据丢失？\n(A) 不经意的泄露\n(B) 自然灾害\n(C) 随机化\n(D) 设备故障",
        "答案": "A",
        "来源页码": 225
    },
    {
        "题号": "633",
        "英文题目与选项": "All of these are reasons an organization may want to consider cloud migration except:\n(A) Reduced personnel costs\n(B) Elimination of risks\n(C) Reduced operational expenses\n(D) Increased efficiency",
        "中文题目与选项": "所有这些都是组织可能希望考虑云迁移的原因，除了：\n(A) 降低人员成本\n(B) 消除风险\n(C) 减少运营成本\n(D) 提高效率",
        "答案": "B",
        "来源页码": 226
    },
    {
        "题号": "634",
        "英文题目与选项": "Why does a Type 1 hypervisor typically offer tighter security controls than a Type 2 hypervisor?\n(A) A Type 1 hypervisor also controls patching of its hosted virtual machines to ensure they are always secure.\n(B) A Type 1 hypervisor is tied directly to the bare metal and only runs with code necessary to perform its specific mission.\n(C) A Type 1 hypervisor performs hardware-level encryption for tighter security and efficiency.\n(D) A Type 1 hypervisor only hosts virtual machines with the same operating systems as the hypervisor.",
        "中文题目与选项": "为什么类型 1 虚拟机管理程序通常比类型 2 虚拟机管理程序提供更严格的安全控制？\n(A) 类型 1 虚拟机管理程序还控制其托管虚拟机的修补，以确保它们始终安全。\n(B) 类型 1 虚拟机管理程序直接绑定到裸机，只运行执行其特定任务所需的代码。\n(C) 类型 1 管理程序执行硬件级加密，以提高安全性和效率。\n(D) 类型 1 虚拟机管理程序仅托管与管理程序具有相同操作系统的虚拟机。",
        "答案": "B",
        "来源页码": 226
    },
    {
        "题号": "635",
        "英文题目与选项": "What is the biggest negative to leasing space in a data center versus building or maintaining your own?\n(A) Costs\n(B) Control\n(C) Certification\n(D) Regulation",
        "中文题目与选项": "在数据中心租赁空间与建造或维护自己的空间相比，最大的负面影响是什么？\n(A) 成本\n(B) 控制\n(C) 认证\n(D) 监管",
        "答案": "B",
        "来源页码": 226
    },
    {
        "题号": "636",
        "英文题目与选项": "You are the security manager for a company that is considering cloud migration to an IaaS environment. You are assisting your company's IT architects in constructing the environment. Which of the following options do you recommend?\n(A) Unrestricted public access\n(B) Use of a Type I hypervisor\n(C) Use of a Type II hypervisor\n(D) Enhanced productivity without encryption",
        "中文题目与选项": "您是一家正在考虑云迁移到 IaaS 环境的公司的安全经理。您正在协助公司的 IT 架构师构建该环境。您推荐以下哪种选项？\n(A) 不受限制的公共访问\n(B) 使用 Type I 型管理程序\n(C) 使用 Type II 型管理程序\n(D) 无需加密即可提高生产效率",
        "答案": "B",
        "来源页码": 227
    },
    {
        "题号": "637",
        "英文题目与选项": "What must SOAP rely on for security since it does not provide security as a built-in capability?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "既然 SOAP 不能作为内置功能提供安全性，那么它必须依靠什么来实现安全性？\n(A) 加密\n(B) 令牌化\n(C) TLS\n(D) SSL",
        "答案": "A",
        "来源页码": 227
    },
    {
        "题号": "638",
        "英文题目与选项": "The Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) addresses all of the following security architecture elements except:\n(A) Physical security\n(B) Infrastructure as a Service\n(C) Application security\n(D) Business drivers",
        "中文题目与选项": "云安全联盟（CSA）的云控制矩阵（CCM）解决以下所有安全架构要素，除了：\n(A) 物理安全性\n(B) 基础设施即服务\n(C) 应用程序安全\n(D) 业务驱动因素",
        "答案": "D",
        "来源页码": 228
    },
    {
        "题号": "639",
        "英文题目与选项": "All of the following are terms used to describe the practice of obscuring original raw data so that only a portion is displayed for operational purposes, except:\n(A) Tokenization\n(B) Data discovery\n(C) Obfuscation\n(D) Masking",
        "中文题目与选项": "以下所有术语均用于描述遮蔽原始数据的做法，以便仅显示一部分用于操作目的，以下情况除外：\n(A) 令牌化\n(B) 数据发现\n(C) 混淆\n(D) 掩蔽",
        "答案": "B",
        "来源页码": 228
    },
    {
        "题号": "640",
        "英文题目与选项": "DNSSEC was designed to add a layer of security to the DNS protocol. Which type of attack was the DNSSEC extension designed to mitigate?\n(A) Account hijacking\n(B) Snooping\n(C) Spoofing\n(D) Data exposure",
        "中文题目与选项": "DNSSEC 旨在为 DNS 协议增加一层安全性。DNSSEC 扩展旨在缓解哪种类型的攻击？\n(A) 账户劫持\n(B) 窥探\n(C) 欺骗\n(D) 数据泄露",
        "答案": "C",
        "来源页码": 228
    },
    {
        "题号": "641",
        "英文题目与选项": "Which of the following methods is often used to obscure data from production systems for use in test or development environments?\n(A) Tokenization\n(B) Encryption\n(C) Masking\n(D) Classification",
        "中文题目与选项": "以下哪种方法通常用于隐藏生产系统中的数据以供测试或开发环境使用？\n(A) 令牌化\n(B) 加密\n(C) 掩蔽\n(D) 分类",
        "答案": "C",
        "来源页码": 229
    },
    {
        "题号": "642",
        "英文题目与选项": "Which of the following terms is NOT a commonly used category of risk acceptance?\n(A) Moderate\n(B) Critical\n(C) Minimal\n(D) Accepted",
        "中文题目与选项": "以下哪个术语不是风险接受的常用类别？\n(A) 中等\n(B) 关键\n(C) 最低\n(D) 可接受",
        "答案": "D",
        "来源页码": 229
    },
    {
        "题号": "643",
        "英文题目与选项": "Which of the following is NOT a key area for performance monitoring as far as an SLA is concerned?\n(A) CPU\n(B) Users\n(C) Memory\n(D) Network",
        "中文题目与选项": "就 SLA 而言，以下哪一项不是性能监控的关键领域？\n(A) 中央处理器\n(B) 用户\n(C) 内存\n(D) 网络",
        "答案": "B",
        "来源页码": 229
    },
    {
        "题号": "644",
        "英文题目与选项": "When designing a cloud data center, which of the following aspects is NOT necessary for ensuring operational continuity during emergency operations?\n(A) — (missing due to OCR)\n(B) Broadband data connection\n(C) Extended battery backup\n(D) Physical access to the data center",
        "中文题目与选项": "在设计云数据中心时，以下哪一方面对于确保应急操作期间的操作连续性不是必要的？\n(A) — （缺失）\n(B) 宽带数据连接\n(C) 延长备用电源\n(D) 对数据中心的物理访问",
        "答案": "C",
        "来源页码": 230
    },
    {
        "题号": "645",
        "英文题目与选项": "Many aspects and features of cloud computing can make eDiscovery compliance more difficult or costly. Which aspect of cloud computing would be the MOST complicating factor?\n(A) Measured service\n(B) Broad network access\n(C) Multitenancy\n(D) Portability",
        "中文题目与选项": "云计算的许多方面和功能可能会使 eDiscovery 法规遵从性变得更加困难或成本更高。云计算的哪个方面是最复杂的因素？\n(A) 可计量的服务\n(B) 广泛的网络接入\n(C) 多租户技术\n(D) 可移植性",
        "答案": "C",
        "来源页码": 230
    },
    {
        "题号": "646",
        "英文题目与选项": "If you are using iSCSI in a cloud environment, what must come from an external protocol or application?\n(A) Kerberos support\n(B) CHAP support\n(C) Authentication\n(D) Encryption",
        "中文题目与选项": "如果您在云环境中使用 iSCSI，那么什么必须来自外部协议或应用程序？\n(A) Kerberos 支持\n(B) CHAP 支持\n(C) 身份验证\n(D) 加密",
        "答案": "D",
        "来源页码": 231
    },
    {
        "题号": "647",
        "英文题目与选项": "Which cloud service category offers the most customization options and control to the cloud customer?\n(A) PaaS\n(B) IaaS\n(C) SaaS\n(D) DaaS",
        "中文题目与选项": "哪个云服务类别为云客户提供了最多的自定义选项和控制？\n(A) PaaS\n(B) IaaS\n(C) SaaS\n(D) DaaS",
        "答案": "B",
        "来源页码": 231
    },
    {
        "题号": "648",
        "英文题目与选项": "Which of the following threat types can occur when an application does not properly validate input and can be leveraged to send users to malicious sites that appear to be legitimate?\n(A) Unvalidated redirects and forwards\n(B) Insecure direct object references\n(C) Security misconfiguration\n(D) Sensitive data exposure",
        "中文题目与选项": "当应用程序未正确验证输入时，可能会发生以下哪种威胁类型，并可利用该漏洞将用户发送到看似合法的恶意网站？\n(A) 未验证的重定向和转发\n(B) 不安全的直接对象引用\n(C) 安全配置错误\n(D) 敏感数据泄露",
        "答案": "A",
        "来源页码": 231
    },
    {
        "题号": "649",
        "英文题目与选项": "Your application has been a continued target for SQL injection attempts. Which of the following technologies would be best used to combat the likeliness of a successful SQL injection exploit from occurring?\n(A) XML accelerator\n(B) WAF\n(C) Sandbox\n(D) Firewall",
        "中文题目与选项": "您的应用程序一直是 SQL 注入攻击的目标。以下哪种技术最适合用于防止 SQL 注入攻击成功发生？\n(A) XML 加速器\n(B) WAF\n(C) 沙箱\n(D) 防火墙",
        "答案": "B",
        "来源页码": 232
    },
    {
        "题号": "650",
        "英文题目与选项": "Application virtualization can typically be used for:\n(A) Denying access to untrusted users\n(B) Detecting and mitigating DDoS attacks\n(C) Replacing encryption as a necessary control\n(D) Running an application on an endpoint without installing it",
        "中文题目与选项": "应用程序虚拟化通常可用于：\n(A) 拒绝不受信任的用户访问\n(B) 检测和缓解 DDoS 攻击\n(C) 将加密替换为必要的控制措施\n(D) 在终端上运行应用程序而无需安装",
        "答案": "D",
        "来源页码": 232
    },
    {
        "题号": "651",
        "英文题目与选项": "Security best practices in a virtualized network environment would include which of the following?\n(A) Using distinct ports and port groups for various VLANs on a virtual switch rather than running them through the same port\n(B) Running iSCSI traffic unencrypted in order to have it observed and monitored by NIDS\n(C) Adding HIDS to all virtual guests\n(D) Hardening all outward-facing firewalls in order to make them resistant to attack",
        "中文题目与选项": "虚拟化网络环境中的安全最佳实践包括以下哪项？\n(A) 为虚拟交换机上的各种 VLAN 使用不同的端口和端口组，而不是通过同一端口运行它们\n(B) 运行未加密的 iSCSI 流量，以便 NIDS 对其进行观察和监控\n(C) 向所有虚拟主机添加 HIDS\n(D) 加固所有外部防火墙，使其具备抵御攻击的能力",
        "答案": "A",
        "来源页码": 232
    },
    {
        "题号": "652",
        "英文题目与选项": "An organization could have many reasons that are common throughout the industry to activate a BCDR situation. Which of the following is NOT a typical reason to activate a BCDR plan?\n(A) Natural disaster\n(B) Utility outage\n(C) Staff loss\n(D) Terrorist attack",
        "中文题目与选项": "一个组织可能有许多在整个行业中常见的原因来激活 BCDR 情况。以下哪项不是激活 BCDR 计划的典型原因？\n(A) 自然灾害\n(B) 公用设施中断\n(C) 员工流失\n(D) 恐怖袭击",
        "答案": "C",
        "来源页码": 233
    },
    {
        "题号": "653",
        "英文题目与选项": "Which of the following can be useful for protecting cloud customers from a denial-of-service (DoS) attack against another customer hosted in the same cloud?\n(A) Reservations\n(B) Measured service\n(C) Limits\n(D) Shares",
        "中文题目与选项": "以下哪项对于保护云客户免受针对同一云中托管的另一个客户的拒绝服务（DoS）攻击有用？\n(A) 预留\n(B) 可计量服务\n(C) 限制\n(D) 共享",
        "答案": "A",
        "来源页码": 233
    },
    {
        "题号": "654",
        "英文题目与选项": "Web application firewalls (WAFs) are designed primarily to protect applications from common attacks like:\n(A) SYN floods\n(B) Ransomware\n(C) XSS and SQL injection\n(D) Password cracking",
        "中文题目与选项": "Web 应用防火墙（WAF）主要用于保护应用程序免受常见攻击，如：\n(A) SYN 洪泛\n(B) 勒索软件\n(C) XSS 和 SQL 注入\n(D) 密码破解",
        "答案": "C",
        "来源页码": 233
    },
    {
        "题号": "655",
        "英文题目与选项": "The BIA can be used to provide information about all the following, except:\n(A) BC/DR planning\n(B) Risk analysis\n(C) Secure acquisition\n(D) Selection of security controls",
        "中文题目与选项": "BIA可用于提供以下所有信息，但以下哪个信息除外：\n(A) BC/DR规划\n(B) 风险分析\n(C) 安全收购/采购\n(D) 安全控制的选择",
        "答案": "C",
        "来源页码": 234
    },
    {
        "题号": "656",
        "英文题目与选项": "Which ISO/IEC standards set documents the cloud definitions for staffing and official roles?\n(A) ISO/IEC 27001\n(B) ISO/IEC 17788\n(C) ISO/IEC 17789\n(D) ISO/IEC 27040",
        "中文题目与选项": "哪个ISO/IEC标准集记录了人员和官方角色的云定义？\n(A) ISO/IEC 27001标准\n(B) ISO/IEC 17788标准\n(C) ISO/IEC 17789标准\n(D) ISO/IEC 27040标准",
        "答案": "B",
        "来源页码": 234
    },
    {
        "题号": "657",
        "英文题目与选项": "From a security perspective, which of the following is a major concern when evaluating possible BCDR solutions?\n(A) Access provisioning\n(B) Auditing\n(C) Jurisdictions\n(D) Authorization",
        "中文题目与选项": "从安全角度来看，在评估可能的BCDR解决方案时，以下哪一项是主要关注的问题？\n(A) 访问资源调配\n(B) 审计\n(C) 司法管辖区\n(D) 批准",
        "答案": "C",
        "来源页码": 234
    },
    {
        "题号": "658",
        "英文题目与选项": "When considering the option to migrate from an on-premises environment to a hosted cloud service, an organization should weigh the risks of allowing external entities to access the cloud data for collaborative purposes against\n(A) Not securing the data in the legacy environment\n(B) Disclosing the data publicly\n(C) Inviting external personnel into the legacy workspace in order to enhance collaboration\n(D) Sending the data outside the legacy environment for collaborative purposes",
        "中文题目与选项": "在考虑从本地环境迁移到托管云服务的选项时，组织应权衡允许外部实体访问云数据以实现协作目的的风险，与以下哪项风险相比：\n(A) 未保护旧环境中的数据\n(B) 公开披露数据\n(C) 邀请外部人员进入旧工作区以加强协作\n(D) 出于协作目的将数据发送到传统环境之外",
        "答案": "D",
        "来源页码": 235
    },
    {
        "题号": "659",
        "英文题目与选项": "Data masking can be used to provide all of the following functionality, except:\n(A) Secure remote access\n(B) Test data in sandboxed environments\n(C) Authentication of privileged users\n(D) Enforcing least privilege",
        "中文题目与选项": "数据屏蔽可用于提供以下所有功能，但以下功能除外：\n(A) 安全远程访问\n(B) 沙盒环境中的测试数据\n(C) 特权用户的身份验证\n(D) 强制执行最小权限",
        "答案": "C",
        "来源页码": 235
    },
    {
        "题号": "660",
        "英文题目与选项": "Which cloud deployment model would be ideal for a group of universities looking to work together, where each university can gain benefits according to its specific needs?\n(A) Private\n(B) Public\n(C) Hybrid\n(D) Community",
        "中文题目与选项": "对于希望合作的一组大学来说，哪种云部署模型最为理想，使每所大学都可以根据其具体需求获得收益？\n(A) 私有云\n(B) 公有云\n(C) 混合云\n(D) 社区云",
        "答案": "D",
        "来源页码": 235
    },
    {
        "题号": "661",
        "英文题目与选项": "_____ is the most prevalent protocol used in identity federation.\n(A) HTTP\n(B) SAML\n(C) LDAP\n(D) WS-Federation",
        "中文题目与选项": "_____ 是身份联合中最常用的协议。\n(A) HTTP\n(B) SAML\n(C) LDAP\n(D) WS-Federation",
        "答案": "B",
        "来源页码": 236
    },
    {
        "题号": "662",
        "英文题目与选项": "Which security concept, if implemented correctly, will protect the data on a system even if a malicious actor gains access to the actual system?\n(A) Sandboxing\n(B) Encryption\n(C) Firewalls\n(D) Access control",
        "中文题目与选项": "哪种安全概念如果实现正确，即使恶意行为者获得了对实际系统的访问权，也能保护系统上的数据？\n(A) 沙箱\n(B) 加密\n(C) 防火墙\n(D) 访问控制",
        "答案": "B",
        "来源页码": 236
    },
    {
        "题号": "663",
        "英文题目与选项": "Which of the following may unilaterally deem a cloud hosting model inappropriate for a system or application?\n(A) Multitenancy\n(B) Certification\n(C) Regulation\n(D) Virtualization",
        "中文题目与选项": "以下哪项可能单方面认为云托管模型不适合某个系统或应用程序？\n(A) 多租户技术\n(B) 认证\n(C) 监管\n(D) 虚拟化",
        "答案": "C",
        "来源页码": 237
    },
    {
        "题号": "664",
        "英文题目与选项": "Digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM) often protect unauthorized distribution of what type of intellectual property?\n(A) Patents\n(B) Trademarks\n(C) Personally identifiable information (PII)\n(D) Copyright",
        "中文题目与选项": "数字版权管理（DRM）解决方案（有时称为信息权限管理或IRM）通常保护哪种类型的知识产权，以防止未经授权的分发？\n(A) 专利\n(B) 商标\n(C) 个人身份信息（PII）\n(D) 版权",
        "答案": "D",
        "来源页码": 237
    },
    {
        "题号": "665",
        "英文题目与选项": "Which networking concept in a cloud environment allows for network segregation and isolation of IP spaces?\n(A) PAN\n(B) WAN\n(C) LAN\n(D) VLAN",
        "中文题目与选项": "在云环境中，哪种网络概念允许进行网络隔离和IP空间的分离？\n(A) 个域网（PAN）\n(B) 广域网（WAN）\n(C) 局域网（LAN）\n(D) 虚拟局域网（VLAN）",
        "答案": "D",
        "来源页码": 237
    },
    {
        "题号": "666",
        "英文题目与选项": "Which of the following best describes a cloud service that is delivered and billed in a way that the customer only pays for what they actually use and for the duration they use it?\n(A) Consumable service\n(B) Measured service\n(C) Billable service\n(D) Metered service",
        "中文题目与选项": "以下哪项最能描述一种云服务，该服务以客户实际使用的数量和时间进行交付和计费？\n(A) 消耗型服务\n(B) 可测量的服务\n(C) 收费服务\n(D) 计量服务",
        "答案": "B",
        "来源页码": 238
    },
    {
        "题号": "667",
        "英文题目与选项": "DLP can be combined with what other security technology to enhance data controls?\n(A) DRM\n(B) Hypervisor\n(C) SIEM\n(D) Kerberos",
        "中文题目与选项": "DLP 可以与哪些其他安全技术相结合，以增强数据控制？\n(A) DRM\n(B) Hypervisor 管理程序\n(C) SIEM\n(D) Kerberos",
        "答案": "A",
        "来源页码": 238
    },
    {
        "题号": "668",
        "英文题目与选项": "From a security perspective, automation of configuration aids in:\n(A) Enhancing performance\n(B) Reducing potential attack vectors\n(C) Increasing ease of use of the systems\n(D) Reducing need for administrative personnel",
        "中文题目与选项": "从安全角度来看，配置自动化有助于：\n(A) 提高性能\n(B) 减少潜在攻击向量\n(C) 提高系统的易用性\n(D) 减少对管理人员的需求",
        "答案": "B",
        "来源页码": 238
    },
    {
        "题号": "669",
        "英文题目与选项": "The SOC Type 2 reports are divided into five principles. Which of the five principles must also be included when auditing any of the other four principles?\n(A) Confidentiality\n(B) Privacy\n(C) Security\n(D) Availability",
        "中文题目与选项": "SOC 类型 2 报告分为五个原则。在审计其他四项原则时，五项原则中的哪一项也必须包括在内？\n(A) 保密性 / 机密性\n(B) 隐私\n(C) 安全\n(D) 可用性",
        "答案": "C",
        "来源页码": 239
    },
    {
        "题号": "670",
        "英文题目与选项": "You are the security manager of a small firm that has just purchased a DLP solution to implement in your cloud-based production environment. Which of these activities should you perform before deploying the tool?\n(A) Survey your company's departments about the data under their control\n(B) Reconstruct your firewalls\n(C) Harden all your routers\n(D) Adjust the hypervisors",
        "中文题目与选项": "您是一家小型公司的安全经理，该公司刚刚购买了一个 DLP 解决方案，以在基于云的生产环境中实施。在部署该工具之前，您应该执行以下哪些活动？\n(A) 调查公司各部门在其控制下的数据\n(B) 重建防火墙\n(C) 加固所有路由器\n(D) 调整管理程序",
        "答案": "A",
        "来源页码": 239
    },
    {
        "题号": "671",
        "英文题目与选项": "Vulnerability scans are dependent on ______ in order to function.\n(A) Privileged access\n(B) Vulnerability signatures\n(C) Malware libraries\n(D) Forensic analysis",
        "中文题目与选项": "漏洞扫描依赖于 ______ 才能有效运行。\n(A) 特权访问\n(B) 漏洞特征\n(C) 恶意软件库\n(D) 取证分析",
        "答案": "B",
        "来源页码": 239
    },
    {
        "题号": "672",
        "英文题目与选项": "Which of the following is an example of useful and sufficient data masking of the string \"CCSP\"?\n(A) XCSP\n(B) PSCC\n(C) CLTtp\n(D) 3x91",
        "中文题目与选项": "以下哪一项是字符串“CCSP”的有用且充分的数据屏蔽示例？\n(A) XCSP\n(B) PSCC\n(C) CLTtp\n(D) 3x91",
        "答案": "C",
        "来源页码": 240
    },
    {
        "题号": "673",
        "英文题目与选项": "What does SDN stand for within a cloud environment?\n(A) Software-dynamic networking\n(B) Software-defined networking\n(C) Software-dependent networking\n(D) System-dynamic nodes",
        "中文题目与选项": "SDN在云环境中代表什么？\n(A) 软件动态联网\n(B) 软件定义网络\n(C) 软件相关网络\n(D) 系统动态节点",
        "答案": "B",
        "来源页码": 240
    },
    {
        "题号": "674",
        "英文题目与选项": "When an organization considers cloud migrations, the organization's software developers will need to know which _____ and which _____ the organization will be using, in order to properly and securely create suitable applications.\n(A) Geographic location, native language\n(B) Legal restrictions, specific ISP\n(C) Service model, deployment model\n(D) Available bandwidth, telecommunications country code",
        "中文题目与选项": "当组织考虑云迁移时，组织的软件开发人员需要知道组织将使用哪些_____和_____，以便正确、安全地创建合适的应用程序。\n(A) 地理位置、母语\n(B) 法律限制、特定ISP\n(C) 服务模型、部署模型\n(D) 可用带宽、电信国家代码",
        "答案": "C",
        "来源页码": 240
    },
    {
        "题号": "675",
        "英文题目与选项": "Which of the following security measures traditionally implemented at the network layer in data centers are also applicable to a cloud environment?\n(A) Dedicated switches\n(B) Trust zones\n(C) Redundant network circuits\n(D) Direct connections",
        "中文题目与选项": "在传统数据中心的网络层实施的以下哪些安全措施也适用于云环境？\n(A) 专用交换机\n(B) 信任区域\n(C) 冗余网络电路\n(D) 直接连接",
        "答案": "B",
        "来源页码": 241
    },
    {
        "题号": "676",
        "英文题目与选项": "A data custodian is responsible for which of the following?\n(A) Data context\n(B) Data content\n(C) The safe custody, transport, and storage of the data, and implementation of business rules\n(D) Logging access and alerts",
        "中文题目与选项": "数据保管人负责以下哪一项？\n(A) 数据上下文\n(B) 数据内容\n(C) 数据的安全保管、传输、存储和业务规则的实施\n(D) 记录访问和警报",
        "答案": "C",
        "来源页码": 241
    },
    {
        "题号": "677",
        "英文题目与选项": "Which of the following is a method for apportioning resources that involves prioritizing resource requests to resolve contention situations?\n(A) Reservations\n(B) Shares\n(C) Cancellations\n(D) Limits",
        "中文题目与选项": "以下哪一项是分配资源的方法，涉及对资源请求进行优先级排序以解决争用情况？\n(A) 预订\n(B) 共享\n(C) 取消\n(D) 限制",
        "答案": "B",
        "来源页码": 241
    },
    {
        "题号": "678",
        "英文题目与选项": "What controls the formatting and security settings of a volume storage system within a cloud environment?\n(A) Management plane\n(B) SAN host controller\n(C) Hypervisor\n(D) Operating system of the host",
        "中文题目与选项": "什么控制云环境中卷存储系统的格式化和安全设置？\n(A) 管理平面\n(B) SAN 主机控制器\n(C) 管理程序\n(D) 主机操作系统",
        "答案": "C",
        "来源页码": 242
    },
    {
        "题号": "679",
        "英文题目与选项": "Which aspect of cloud computing pertains to cloud customers only paying for the resources and services they actually use?\n(A) Metered service\n(B) Measured billing\n(C) Metered billing\n(D) Measured service",
        "中文题目与选项": "云计算的哪个方面与云客户只为他们实际使用的资源和服务付费有关？\n(A) 计量服务\n(B) 测量计费\n(C) 计量计费\n(D) 测量服务",
        "答案": "D",
        "来源页码": 242
    },
    {
        "题号": "680",
        "英文题目与选项": "Which data state would be most likely to use TLS as a protection mechanism?\n(A) Data in use\n(B) Data at rest\n(C) Archived\n(D) Data in transit",
        "中文题目与选项": "哪个数据状态最可能使用 TLS 作为保护机制？\n(A) 使用中的数据\n(B) 静止数据\n(C) 已归档数据\n(D) 传输中的数据",
        "答案": "D",
        "来源页码": 242
    },
    {
        "题号": "681",
        "英文题目与选项": "Fiber-optic lines are considered part of which layer of the OSI model?\n(A) 1\n(B) 3\n(C) 5\n(D) 7",
        "中文题目与选项": "光纤线路被视为OSI模型中的哪一层的一部分？\n(A) 第1层\n(B) 第3层\n(C) 第5层\n(D) 第7层",
        "答案": "A",
        "来源页码": 243
    },
    {
        "题号": "682",
        "英文题目与选项": "Above and beyond general regulations for data privacy and protection, certain types of data are subjected to more rigorous regulations and oversight. Which of the following is not a regulatory framework for more sensitive or specialized data?\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "中文题目与选项": "除了有关数据隐私和保护的一般法规之外，某些类型的数据还受到更严格的法规和监管。以下哪一项不是针对更敏感或更专业数据的监管框架？\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "答案": "A",
        "来源页码": 243
    },
    {
        "题号": "683",
        "英文题目与选项": "Which of the following is the optimal humidity level for a data center per the guidelines established by the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE)?\n(A) 30-50 percent relative humidity\n(B) 50-75 percent relative humidity\n(C) 20-40 percent relative humidity\n(D) 40-60 percent relative humidity",
        "中文题目与选项": "根据美国供暖、制冷和空调工程师协会（ASHRAE）制定的指南，以下哪一项是数据中心的最佳湿度水平？\n(A) 30-50% 相对湿度\n(B) 50-75% 相对湿度\n(C) 20-40% 相对湿度\n(D) 40-60% 相对湿度",
        "答案": "D",
        "来源页码": 243
    },
    {
        "题号": "684",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data at rest?\n(A) Network firewall\n(B) Host system\n(C) Application server\n(D) Database server",
        "中文题目与选项": "当用于监控静止数据时，DLP 解决方案通常安装在何处？\n(A) 网络防火墙\n(B) 主机系统\n(C) 应用程序服务器\n(D) 数据库服务器",
        "答案": "B",
        "来源页码": 244
    },
    {
        "题号": "685",
        "英文题目与选项": "_____ is perhaps the main external factor driving IAM efforts.\n(A) Regulation\n(B) Business need\n(C) The evolving threat landscape\n(D) Monetary value",
        "中文题目与选项": "_____ 也许是推动 IAM 工作的主要外部因素。\n(A) 监管\n(B) 业务需求\n(C) 不断演变的威胁形势\n(D) 货币价值",
        "答案": "A",
        "来源页码": 244
    },
    {
        "题号": "686",
        "英文题目与选项": "Which ISO/IEC standard has been established to provide a framework for the eDiscovery process?\n(A) ISO/IEC 27001 standard\n(B) ISO/IEC 27002 standard\n(C) ISO/IEC 27040 standard\n(D) ISO/IEC 27050 standard",
        "中文题目与选项": "已建立哪一项 ISO/IEC 标准以提供处理 eDiscovery 流程的框架？\n(A) ISO/IEC 27001 标准\n(B) ISO/IEC 27002 标准\n(C) ISO/IEC 27040 标准\n(D) ISO/IEC 27050 标准",
        "答案": "D",
        "来源页码": 245
    },
    {
        "题号": "687",
        "英文题目与选项": "Which of the following are attributes of cloud computing?\n(A) Minimal management effort and shared resources\n(B) High cost and unique resources\n(C) Rapid provisioning and slow release of resources\n(D) Limited access and service provider interaction",
        "中文题目与选项": "以下哪些是云计算的属性？\n(A) 最少的管理工作量和共享资源\n(B) 高成本和独特的资源\n(C) 资源的快速调配和缓慢释放\n(D) 有限的访问和服务提供商交互",
        "答案": "A",
        "来源页码": 245
    },
    {
        "题号": "688",
        "英文题目与选项": "All of the following are activities that should be performed when capturing and maintaining an accurate, secure system baseline except:\n(A) Remove all nonessential programs from the baseline image\n(B) Exclude the target system you intend to baseline from any scheduled updates/patching used in production systems\n(C) Include the baseline image in the asset inventory/configuration management database\n(D) Configure the host OS according to the baseline requirements",
        "中文题目与选项": "以下所有活动都是在捕获和维护准确、安全的系统基线时应执行的活动，但以下除外：\n(A) 从基准映像中删除所有不重要的程序\n(B) 从生产系统中使用的任何计划更新/修补程序中排除要作为基准的目标系统\n(C) 在资产库存/配置管理数据库中包括基线映像\n(D) 根据基线要求配置主机操作系统",
        "答案": "B",
        "来源页码": 245
    },
    {
        "题号": "689",
        "英文题目与选项": "You are a consultant performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire, but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. In order to establish the true annualized loss expectancy (ALE), you would need all of the following information except:\n(A) The amount of revenue generated by the plant\n(B) The rate at which the plant generates revenue\n(C) The length of time it would take to rebuild the plant\n(D) The amount of product the plant creates",
        "中文题目与选项": "您是一名顾问，正在对一家大型制造公司进行外部安全审查。你确定耗资2400万美元的最新组装工厂可能会被大火完全摧毁，但灭火系统可以有效地保护工厂。灭火系统耗资1500万美元。一份覆盖工厂全部重置成本的保险单每月花费100万美元。为了确定真实的年化损失预期（ALE），您需要以下所有信息，除外：\n(A) 工厂产生的收入金额\n(B) 工厂产生收入的速率\n(C) 重建工厂所需的时间长度\n(D) 工厂生产的产品数量",
        "答案": "D",
        "来源页码": 246
    },
    {
        "题号": "690",
        "英文题目与选项": "Cloud vendors are held to contractual obligations with specified metrics by:\n(A) SLAs\n(B) Regulations\n(C) Law\n(D) Discipline",
        "中文题目与选项": "云供应商通过以下方式承担规定指标的合同义务：\n(A) SLAs 服务水平协议\n(B) 法规\n(C) 法律\n(D) 纪律",
        "答案": "A",
        "来源页码": 246
    },
    {
        "题号": "691",
        "英文题目与选项": "Different types of audits are intended for different audiences such as internal, external, regulatory, and so on. Which of the following audits are considered “restricted use” versus being for a more broad audience?\n(A) SOC Type 2\n(B) SOC Type 1\n(C) SOC Type 3\n(D) SAS-70",
        "中文题目与选项": "不同类型的审计针对不同的受众，如内部、外部、监管等。以下哪种审计被视为“限制使用”，而不是面向更广泛的受众？\n(A) SOC Type 2\n(B) SOC Type 1\n(C) SOC Type 3\n(D) SAS-70",
        "答案": "B",
        "来源页码": 246
    },
    {
        "题号": "692",
        "英文题目与选项": "What is the minimum regularity for testing a BCDR plan to meet best practices?\n(A) Once a year\n(B) Once a month\n(C) Every six months\n(D) When the budget allows it",
        "中文题目与选项": "测试 BCDR 计划以满足最佳实践的最低频率是什么？\n(A) 每年一次\n(B) 每月一次\n(C) 每六个月一次\n(D) 当预算允许时",
        "答案": "A",
        "来源页码": 247
    },
    {
        "题号": "693",
        "英文题目与选项": "A cloud provider is looking to provide a higher level of assurance to current and potential cloud customers about the design and effectiveness of their security controls. Which of the following audit reports would the cloud provider choose as the most appropriate to accomplish this goal?\n(A) SAS 70\n(B) SOC 1\n(C) SOC 2\n(D) SOC 3",
        "中文题目与选项": "云服务提供商希望为当前和潜在的云客户在其安全控制的设计和有效性方面提供更高水平的保证。云服务提供商会选择以下哪种审计报告最适合实现这一目标？\n(A) SAS 70\n(B) SOC 1\n(C) SOC 2\n(D) SOC 3",
        "答案": "D",
        "来源页码": 247
    },
    {
        "题号": "694",
        "英文题目与选项": "An SLA contains the official requirements for contract performance and satisfaction between the cloud provider and cloud customer. Which of the following would NOT be a component with measurable metrics and requirements as part of an SLA?\n(A) Network\n(B) Users\n(C) Memory\n(D) CPU",
        "中文题目与选项": "SLA（服务级别协议）包含云服务提供商与云客户之间关于合同绩效和满意度的官方要求。以下哪一项不会是 SLA 中具有可衡量指标和要求的组成部分？\n(A) 网络\n(B) 用户\n(C) 内存\n(D) CPU",
        "答案": "B",
        "来源页码": 247
    },
    {
        "题号": "695",
        "英文题目与选项": "Which of the following practices can enhance both operational capabilities and configuration management efforts?\n(A) Regular backups\n(B) Constant uptime\n(C) Multifactor authentication\n(D) File hashes",
        "中文题目与选项": "以下哪种做法可以增强运营能力和配置管理工作？\n(A) 定期备份\n(B) 持续运行时间\n(C) 多因素认证\n(D) 文件哈希",
        "答案": "D",
        "来源页码": 248
    },
    {
        "题号": "696",
        "英文题目与选项": "Which of the following is essential for getting full security value from your system baseline?\n(A) Capturing and storing an image of the baseline\n(B) Keeping a copy of upcoming suggested modifications to the baseline\n(C) Having the baseline vetted by an objective third party\n(D) Using a baseline from another industry member so as not to engage in repetitious efforts",
        "中文题目与选项": "以下哪项对于从系统基线中获得充分的安全价值至关重要？\n(A) 捕获并存储基线映像\n(B) 保留即将对基线进行的建议修改的副本\n(C) 由客观的第三方审查基线\n(D) 使用另一行业成员的基线以避免重复工作",
        "答案": "A",
        "来源页码": 248
    },
    {
        "题号": "697",
        "英文题目与选项": "The Infinity Paradigm of the International Data Center Authority (IDCA) takes a macro-level approach to data center design. The IDCA does not use a specific, focused approach on specific components to achieve tier status. Building Industry Consulting Services International (BICSI) issues certifications for data center cabling. The National Fire Protection Association (NFPA) publishes a broad range of fire safety and design standards for many different types of facilities. The Uptime Institute publishes the most widely known and used standard for data center topologies and tiers.\n(A) IDCA\n(B) BICSI\n(C) Uptime Institute\n(D) NFPA",
        "中文题目与选项": "国际数据中心管理局（IDCA）的无限范式采用宏观层面的数据中心设计方法。IDCA不使用特定的、针对特定组件的方法来实现层级状态。建筑行业咨询服务国际组织（BICSI）颁发数据中心布线认证。美国国家消防协会（NFPA）为许多不同类型的设施发布了广泛的消防安全和设计标准。Uptime Institute发布了数据中心拓扑和层级的最广为人知且使用最广泛的标准。\n(A) IDCA\n(B) BICSI\n(C) Uptime Institute\n(D) NFPA",
        "答案": "A",
        "来源页码": 249
    },
    {
        "题号": "698",
        "英文题目与选项": "What is the most secure form of code testing and review?\n(A) Open source\n(B) Proprietary/internal\n(C) Neither open source nor proprietary\n(D) Combination of open source and proprietary",
        "中文题目与选项": "什么是最安全的代码测试和审查形式？\n(A) 开源\n(B) 专有/内部\n(C) 既不是开源的也不是专有的\n(D) 开源和专有的结合",
        "答案": "D",
        "来源页码": 249
    },
    {
        "题号": "699",
        "英文题目与选项": "What is the federal agency that accepts applications for new patents?\n(A) USDA\n(B) USPTO\n(C) OSHA\n(D) SEC",
        "中文题目与选项": "接受新专利申请的联邦机构是什么？\n(A) 美国农业部（USDA）\n(B) 美国专利商标局（USPTO）\n(C) 职业安全与健康管理局（OSHA）\n(D) 证券交易委员会（SEC）",
        "答案": "B",
        "来源页码": 249
    },
    {
        "题号": "700",
        "英文题目与选项": "Which publication from the United States National Institute of Standards and Technology pertains to defining cloud concepts and definitions for the various core components of cloud computing?\n(A) SP 800-153\n(B) SP 800-145\n(C) SP 800-53\n(D) SP 800-40",
        "中文题目与选项": "美国国家标准与技术研究所（NIST）的哪一份出版物涉及定义云计算各种核心组件的云概念和定义？\n(A) SP 800-153\n(B) SP 800-145\n(C) SP 800-53\n(D) SP 800-40",
        "答案": "B",
        "来源页码": 249
    },
    {
        "题号": "701",
        "英文题目与选项": "Which of the following is considered an internal redundancy for a data center?\n(A) Power distribution units\n(B) Network circuits\n(C) Power substations\n(D) Generators",
        "中文题目与选项": "以下哪项被视为数据中心的内部冗余？\n(A) 配电装置\n(B) 网络电路\n(C) 变电站\n(D) 发电机",
        "答案": "A",
        "来源页码": 250
    },
    {
        "题号": "702",
        "英文题目与选项": "Devices in the cloud data center should be secure against attack. All the following are means of hardening devices, except:\n(A) Using a strong password policy\n(B) Removing default passwords\n(C) Strictly limiting physical access\n(D) Removing all admin accounts",
        "中文题目与选项": "云数据中心中的设备应当是安全的，不受攻击。以下均为强化设备安全的方法，但以下情况除外：\n(A) 使用强密码策略\n(B) 删除默认密码\n(C) 严格限制物理访问\n(D) 删除所有管理员账户",
        "答案": "D",
        "来源页码": 250
    },
    {
        "题号": "703",
        "英文题目与选项": "When a user accesses a system, what process determines the roles and privileges that user is granted within the application?\n(A) Authorization\n(B) Authentication\n(C) Provisioning\n(D) Privilege",
        "中文题目与选项": "当用户访问系统时，哪个过程决定用户在应用程序中被授予的角色和权限？\n(A) 授权\n(B) 认证\n(C) 资源调配\n(D) 特权",
        "答案": "A",
        "来源页码": 250
    },
    {
        "题号": "704",
        "英文题目与选项": "Whereas a contract articulates overall priorities and requirements for a business relationship, which artifact enumerates specific compliance requirements, metrics, and response times?\n(A) Service level agreement\n(B) Service level contract\n(C) Service compliance contract\n(D) Service level amendment",
        "中文题目与选项": "尽管合同明确了业务关系的总体优先级和要求，但哪个工件列举了具体的合规要求、度量指标和响应时间？\n(A) 服务水平协议\n(B) 服务级别合同\n(C) 服务合规合同\n(D) 服务级别修正",
        "答案": "A",
        "来源页码": 251
    },
    {
        "题号": "705",
        "英文题目与选项": "GAAPs are created and maintained by which organization?\n(A) ISO/IEC\n(B) AICPA\n(C) PCI Council\n(D) ISO",
        "中文题目与选项": "GAAP 由哪个组织创建和维护？\n(A) ISO/IEC 标准\n(B) 美国注册会计师协会\n(C) PCI 委员会\n(D) 国际标准化组织",
        "答案": "B",
        "来源页码": 251
    },
    {
        "题号": "706",
        "英文题目与选项": "Which of the following security technologies is commonly used to give administrators access into trust zones within an environment?\n(A) VPN\n(B) WAF\n(C) IPsec\n(D) HTTPS",
        "中文题目与选项": "以下哪种安全技术通常用于让管理员访问环境中的信任区域？\n(A) VPN\n(B) WAF\n(C) IPsec\n(D) HTTPS",
        "答案": "A",
        "来源页码": 251
    },
    {
        "题号": "707",
        "英文题目与选项": "Which of the following best describes SAML?\n(A) A standard used for directory synchronization\n(B) A standard for developing secure application management logistics\n(C) A standard for exchanging usernames and passwords across devices\n(D) A standard for exchanging authentication and authorization data between security domains",
        "中文题目与选项": "以下哪个选项最能描述 SAML？\n(A) 用于目录同步的标准\n(B) 用于开发安全应用程序管理逻辑的标准\n(C) 跨设备交换用户名和密码的标准\n(D) 用于在安全域之间交换身份验证和授权数据的标准",
        "答案": "D",
        "来源页码": 252
    },
    {
        "题号": "708",
        "英文题目与选项": "Which of the following is NOT a focus or consideration of an internal audit?\n(A) Certification\n(B) Design\n(C) Costs\n(D) Operational efficiency",
        "中文题目与选项": "以下哪个选项不是内部审计的重点或考虑因素？\n(A) 认证\n(B) 设计\n(C) 成本\n(D) 运营效率",
        "答案": "A",
        "来源页码": 252
    },
    {
        "题号": "709",
        "英文题目与选项": "What process entails taking sensitive data and removing the indirect identifiers from each data object so that the identification of a single entity would not be possible?\n(A) Tokenization\n(B) Encryption\n(C) Anonymization\n(D) Masking",
        "中文题目与选项": "什么过程需要获取敏感数据并从每个数据对象中删除间接标识符，从而无法识别单个实体？\n(A) 标记化\n(B) 加密\n(C) 匿名化\n(D) 掩码处理",
        "答案": "C",
        "来源页码": 252
    },
    {
        "题号": "710",
        "英文题目与选项": "Which of the following roles involves the connection and integration of existing systems and services to a cloud environment?\n(A) Cloud service business manager\n(B) Cloud service user\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪个角色涉及现有系统和服务与云环境的连接和集成？\n(A) 云服务业务经理\n(B) 云服务用户\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "D",
        "来源页码": 253
    },
    {
        "题号": "711",
        "英文题目与选项": "What could be the result of failure of the cloud provider to secure the hypervisor in such a way that one user on a virtual machine can see the resource calls of another user's virtual machine?\n(A) Unauthorized data disclosure\n(B) Inference attacks\n(C) Social engineering\n(D) Physical intrusion",
        "中文题目与选项": "如果云提供商未能妥善保护虚拟机管理程序，导致一个虚拟机上的用户可以看到另一个用户虚拟机的资源调用，这可能会造成什么结果？\n(A) 未经授权的数据泄露\n(B) 推理攻击\n(C) 社会工程学\n(D) 物理入侵",
        "答案": "B",
        "来源页码": 253
    },
    {
        "题号": "712",
        "英文题目与选项": "Which of the following is the best example of a key component of regulated programs that should be implemented?\n(A) Items that should be implemented\n(B) Mandatory breach reporting\n(C) Audit rights of subcontractors\n(D) PCI DSS",
        "中文题目与选项": "以下哪一项是受监管计划中应实施的关键组成部分的最佳示例？\n(A) 应实施的项目\n(B) 强制性泄露报告\n(C) 分包商的审计权\n(D) PCI 决策支持系统",
        "答案": "B",
        "来源页码": 254
    },
    {
        "题号": "713",
        "英文题目与选项": "Jurisdictions have a broad range of privacy requirements pertaining to the handling of personal data and information. Which jurisdiction requires all storage and processing of data that pertains to its citizens to be done on hardware that is physically located within its borders?\n(A) Japan\n(B) United States\n(C) European Union\n(D) Russia",
        "中文题目与选项": "司法管辖区在处理个人数据和信息方面有广泛的隐私要求。哪个司法管辖区要求与其公民相关的所有数据必须在其边界内的硬件上存储和处理？\n(A) 日本\n(B) 美国\n(C) 欧盟\n(D) 俄罗斯联邦",
        "答案": "D",
        "来源页码": 254
    },
    {
        "题号": "714",
        "英文题目与选项": "Which key storage solution would be the BEST choice in a situation where availability might be of particular concern?\n(A) Internal\n(B) External\n(C) Hosted\n(D) Embedded",
        "中文题目与选项": "在可能特别关注可用性的情况下，哪种密钥存储解决方案是最佳选择？\n(A) 内部的\n(B) 外部的\n(C) 托管的\n(D) 嵌入的",
        "答案": "A",
        "来源页码": 254
    },
    {
        "题号": "715",
        "英文题目与选项": "Which of the following is NOT one of the main intended goals of a DLP solution?\n(A) Showing due diligence\n(B) Preventing malicious insiders\n(C) Regulatory compliance\n(D) Managing and minimizing risk",
        "中文题目与选项": "以下哪项不是 DLP 解决方案的主要预期目标之一？\n(A) 显示尽职调查\n(B) 防止恶意内部人员\n(C) 法规遵从性\n(D) 管理和最小化风险",
        "答案": "B",
        "来源页码": 255
    },
    {
        "题号": "716",
        "英文题目与选项": "Countermeasures for protecting cloud operations against external attackers include all of the following except:\n(A) Continual monitoring for anomalous activity\n(B) Detailed and extensive background checks\n(C) Regular and detailed configuration/change management activities\n(D) Hardened devices and systems including servers, hosts, hypervisors, and virtual machines",
        "中文题目与选项": "保护云操作免受外部攻击者攻击的对策包括以下所有方面，但不包括：\n(A) 持续监测异常活动\n(B) 详细而广泛的背景调查\n(C) 定期和详细的配置/变更管理活动\n(D) 加固的设备和系统，包括服务器、主机、管理程序和虚拟机",
        "答案": "B",
        "来源页码": 255
    },
    {
        "题号": "717",
        "英文题目与选项": "Besides the fact that cloud customers may not be able to locate or contact the cloud provider’s physical storage assets, and that erasing the entire storage space would affect other customers, why might destruction not be an effective method of cloud data sanitization?\n(A) Degaussing may not affect cloud data storage\n(B) Federal law prohibits it in the United States\n(C) The blast radius is too wide\n(D) Other customers’ data may be impacted",
        "中文题目与选项": "除了云客户可能无法定位或联系到云提供商的物理存储资产，并且擦除整个存储空间会影响其他客户之外，为什么销毁可能不是云安全消毒的有效方法？\n(A) 消磁可能不会影响云数据存储\n(B) 美国联邦法律禁止这种行为\n(C) 爆炸半径太大\n(D) 其他客户的数据可能受到影响",
        "答案": "B",
        "来源页码": 256
    },
    {
        "题号": "718",
        "英文题目与选项": "Which theoretical technology would allow superposition of physical states to increase both computing capacity and encryption keyspace?\n(A) All-or-nothing-transform with Reed-Solomon (AONT-RS)\n(B) Quantum computing\n(C) Filigree investment\n(D) Sharding",
        "中文题目与选项": "哪种理论技术允许物理状态的叠加从而增加计算能力和加密密钥空间？\n(A) 使用 Reed-Solomon (AONT-RS) 实现全或无变换\n(B) 量子计算\n(C) Filigree 投资\n(D) 分片",
        "答案": "B",
        "来源页码": 256
    },
    {
        "题号": "719",
        "英文题目与选项": "A web application firewall (WAF) can understand and act on ____ traffic.\n(A) Malicious\n(B) SMTP\n(C) ICMP\n(D) HTTP",
        "中文题目与选项": "Web 应用程序防火墙 (WAF) 可以理解并对以下流量采取行动：\n(A) 恶意流量\n(B) SMTP\n(C) ICMP\n(D) HTTP",
        "答案": "D",
        "来源页码": 256
    },
    {
        "题号": "720",
        "英文题目与选项": "If you are running an application that has strict legal requirements that the data cannot reside on systems that contain other applications or systems, which aspect of cloud computing would be prohibitive in this case?\n(A) Multitenancy\n(B) Broad network access\n(C) Portability\n(D) Elasticity",
        "中文题目与选项": "如果您运行的应用程序具有严格的法律要求，即数据不能驻留在包含其他应用程序或系统的系统上，那么在这种情况下，云计算的哪个方面是禁止的？\n(A) 多租户技术\n(B) 广泛的网络接入\n(C) 可移植性\n(D) 弹性",
        "答案": "A",
        "来源页码": 256
    },
    {
        "题号": "721",
        "英文题目与选项": "Why might an organization choose to comply with the ISO 27001 standard?\n(A) Price\n(B) Ease of implementation\n(C) International acceptance\n(D) Speed",
        "中文题目与选项": "为什么组织会选择遵守 ISO 27001 标准？\n(A) 价格\n(B) 易于实施\n(C) 国际接受度\n(D) 速度",
        "答案": "C",
        "来源页码": 257
    },
    {
        "题号": "722",
        "英文题目与选项": "Which security concept is focused on the trustworthiness of data?\n(A) Integrity\n(B) Availability\n(C) Nonrepudiation\n(D) Confidentiality",
        "中文题目与选项": "哪种安全概念侧重于数据的可信度？\n(A) 完整性\n(B) 可用性\n(C) 不可否认性\n(D) 机密性",
        "答案": "A",
        "来源页码": 257
    },
    {
        "题号": "723",
        "英文题目与选项": "Which of the following storage types is most closely associated with a database-type storage implementation?\n(A) Object\n(B) Unstructured\n(C) Volume\n(D) Structured",
        "中文题目与选项": "以下哪种存储类型与数据库类型存储实现最密切相关？\n(A) 对象\n(B) 非结构化\n(C) 卷\n(D) 结构化的",
        "答案": "D",
        "来源页码": 258
    },
    {
        "题号": "724",
        "英文题目与选项": "Which of the following is characterized by a set maximum capacity?\n(A) A secret-sharing-made-short (SSM) bit-splitting implementation\n(B) A tightly coupled cloud storage cluster\n(C) A loosely coupled cloud storage cluster\n(D) A public-key infrastructure",
        "中文题目与选项": "以下哪一项具有设定的最大容量？\n(A) 一种密钥共享简化（SSM）位拆分实现\n(B) 紧密耦合的云存储集群\n(C) 松散耦合的云存储集群\n(D) 公钥基础设施",
        "答案": "B",
        "来源页码": 258
    },
    {
        "题号": "725",
        "英文题目与选项": "What does the REST API use to protect data transmissions?\n(A) NetBIOS\n(B) VPN\n(C) Encapsulation\n(D) TLS",
        "中文题目与选项": "REST API 使用什么来保护数据传输？\n(A) NetBIOS\n(B) VPN 虚拟专用网\n(C) 封装\n(D) TLS",
        "答案": "D",
        "来源页码": 258
    },
    {
        "题号": "726",
        "英文题目与选项": "Which of the following terms is not associated with cloud forensics?\n(A) eDiscovery\n(B) Chain of custody\n(C) Analysis\n(D) Plausibility",
        "中文题目与选项": "以下哪个术语与云取证无关？\n(A) 电子数据展示\n(B) 证据链\n(C) 分析\n(D) 合理性（可信度）",
        "答案": "D",
        "来源页码": 259
    },
    {
        "题号": "727",
        "英文题目与选项": "You are the security manager of a small firm that has just purchased a DLP solution to implement in your cloud-based production environment.\nIn order to increase the security value of the DLP, you should consider combining it with\n(A) Digital rights management (DRM) and security event and incident management (SIEM) tools\n(B) An investment in upgraded project management software\n(C) Digital insurance policies\n(D) The Uptime Institute's Tier certification",
        "中文题目与选项": "您是一家小型公司的安全经理，该公司刚刚购买了一个 DLP 解决方案，以在基于云的生产环境中实施。为了提高 DLP 的安全性，您应该考虑将其与以下哪项结合使用：\n(A) 数字版权管理 (DRM) 和安全事件与事件管理 (SIEM) 工具\n(B) 对升级项目管理软件的投资\n(C) 数字保险政策\n(D) Uptime Institute 的 Tier 认证",
        "答案": "A",
        "来源页码": 259
    },
    {
        "题号": "728",
        "英文题目与选项": "What must SOAP rely on for security?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "SOAP 必须依赖什么来实现安全？\n(A) 加密\n(B) 标记化\n(C) TLS\n(D) SSL",
        "答案": "A",
        "来源页码": 259
    },
    {
        "题号": "729",
        "英文题目与选项": "Which of the following is NOT considered a type of data loss?\n(A) Data corruption\n(B) Stolen by hackers\n(C) Accidental deletion\n(D) Lost or destroyed encryption keys",
        "中文题目与选项": "以下选项不属于数据丢失类型：\n(A) 数据损坏\n(B) 被黑客窃取\n(C) 意外删除\n(D) 加密密钥丢失或损坏",
        "答案": "B",
        "来源页码": 260
    },
    {
        "题号": "730",
        "英文题目与选项": "Which of the following is NOT one of the components of multifactor authentication?\n(A) Something the user knows\n(B) Something the user has\n(C) Something the user sends\n(D) Something the user is",
        "中文题目与选项": "以下选项不是多因素身份验证的组成部分之一：\n(A) 用户知道的事情\n(B) 用户拥有的东西\n(C) 用户发送的内容\n(D) 用户是什么",
        "答案": "C",
        "来源页码": 260
    },
    {
        "题号": "731",
        "英文题目与选项": "Impact resulting from risk being realized is often measured in terms of\n(A) Amount of data lost\n(B) Money\n(C) Amount of property lost\n(D) Number of people affected",
        "中文题目与选项": "实现风险产生的影响通常用以下指标衡量：\n(A) 丢失的数据量\n(B) 金钱\n(C) 丢失的财产数量\n(D) 受影响的人数",
        "答案": "B",
        "来源页码": 260
    },
    {
        "题号": "732",
        "英文题目与选项": "As a result of scandals involving publicly traded corporations such as Enron, WorldCom, and Adelphi, Congress passed legislation known as:\n(A) SOX\n(B) HIPAA\n(C) FERPA\n(D) GLBA",
        "中文题目与选项": "由于涉及安然（Enron）、世通（WorldCom）和阿德尔菲（Adelphi）等上市公司的丑闻，国会通过了以下立法：\n(A) 《萨班斯-奥克斯利法案》（SOX）\n(B) 《健康保险可携性与责任法案》（HIPAA）\n(C) 《家庭教育权利和隐私法案》（FERPA）\n(D) 《格雷姆-里奇-布莱利法案》（GLBA）",
        "答案": "A",
        "来源页码": 261
    },
    {
        "题号": "733",
        "英文题目与选项": "While an audit is being conducted, which of the following could cause management and the auditors to change the original plan in order to continue with the audit?\n(A) Cost overruns\n(B) Impact on systems\n(C) Regulatory changes\n(D) Software version changes",
        "中文题目与选项": "在进行审计时，以下哪一项可能导致管理层和审计员更改原始计划以继续审计？\n(A) 成本超支\n(B) 对系统的影响\n(C) 法规变更\n(D) 软件版本更改",
        "答案": "C",
        "来源页码": 261
    },
    {
        "题号": "734",
        "英文题目与选项": "Your organization is considering a move to a cloud environment and is looking for certifications or audit reports from cloud providers to ensure adequate security controls and processes. Which of the following is NOT a security certification or audit report that would be pertinent?\n(A) FedRAMP\n(B) PCI DSS\n(C) FIPS 140-2\n(D) SOC Type 2",
        "中文题目与选项": "您的组织正在考虑迁移到云环境，并正在寻找云服务提供商的认证或审计报告，以确保充足的安全控制和流程。以下哪一项不是相关的安全认证或审计报告？\n(A) FedRAMP\n(B) PCI DSS\n(C) FIPS 140-2\n(D) SOC Type 2",
        "答案": "C",
        "来源页码": 261
    },
    {
        "题号": "735",
        "英文题目与选项": "You have been tasked with creating an audit scope statement and are making your project outline. Which of the following is NOT typically included in an audit scope statement?\n(A) Statement of purpose\n(B) Deliverables\n(C) Classification\n(D) Costs",
        "中文题目与选项": "您的任务是创建审计范围声明，并正在制定项目大纲。以下哪项通常不包含在审计范围声明中？\n(A) 目的声明\n(B) 交付物\n(C) 分类\n(D) 成本",
        "答案": "D",
        "来源页码": 262
    },
    {
        "题号": "736",
        "英文题目与选项": "Which standards body depends heavily on contributions and input from its open membership base?\n(A) NIST\n(B) ISO\n(C) ICANN\n(D) CSA",
        "中文题目与选项": "哪个标准机构在很大程度上依赖其开放成员基础的贡献和投入？\n(A) NIST（美国国家标准与技术研究院）\n(B) ISO（国际标准化组织）\n(C) ICANN（互联网名称与数字地址分配机构）\n(D) CSA（云安全联盟）",
        "答案": "D",
        "来源页码": 262
    },
    {
        "题号": "737",
        "英文题目与选项": "Which of the following jurisdictions lacks a comprehensive national policy on data privacy and the protection of personally identifiable information (PII)?\n(A) European Union\n(B) Asian-Pacific Economic Cooperation\n(C) United States\n(D) Russia",
        "中文题目与选项": "以下哪个司法管辖区缺乏关于数据隐私和个人可识别信息（PII）保护的全面国家政策？\n(A) 欧洲联盟\n(B) 亚太经济合作组织\n(C) 美国\n(D) 俄罗斯联邦",
        "答案": "C",
        "来源页码": 262
    },
    {
        "题号": "738",
        "英文题目与选项": "Which of the following is NOT one of the three common types of threat modeling techniques?\n(A) Focused on assets\n(B) Focused on attackers\n(C) Focused on software\n(D) Focused on social engineering",
        "中文题目与选项": "以下哪一项不是三种常见的威胁建模技术之一？\n(A) 专注于资产\n(B) 专注于攻击者\n(C) 专注于软件\n(D) 专注于社会工程",
        "答案": "D",
        "来源页码": 263
    },
    {
        "题号": "739",
        "英文题目与选项": "What is the concept of segregating information or processes, within the same system or application, for security reasons?\n(A) Fencing\n(B) Sandboxing\n(C) Cellblocking\n(D) Pooling",
        "中文题目与选项": "出于安全原因，在同一系统或应用程序中隔离信息或过程的概念是什么？\n(A) 隔离防护\n(B) 沙箱\n(C) 单元阻隔\n(D) 资源池化",
        "答案": "B",
        "来源页码": 263
    },
    {
        "题号": "740",
        "英文题目与选项": "Which of the following contract terms most incentivizes the cloud provider to meet the requirements listed in the SLA?\n(A) Regulatory oversight\n(B) Financial penalties\n(C) Performance details\n(D) Desire to maintain customer satisfaction",
        "中文题目与选项": "以下哪项合同条款最能激励云提供商满足 SLA 中列出的要求？\n(A) 监管监督\n(B) 财务处罚\n(C) 性能详细信息\n(D) 希望保持客户满意度",
        "答案": "B",
        "来源页码": 263
    },
    {
        "题号": "741",
        "英文题目与选项": "When developing a data archiving plan and strategy, we should consider all of the following except:\n(A) Backup processes\n(B) Technology timeliness\n(C) Archive location\n(D) The format of the data",
        "中文题目与选项": "在制定数据归档计划和策略时，我们应考虑以下所有内容，但不包括：\n(A) 备份过程\n(B) 技术的即时性\n(C) 存档位置\n(D) 数据的格式",
        "答案": "D",
        "来源页码": 264
    },
    {
        "题号": "742",
        "英文题目与选项": "Which type of testing tends to produce the best and most comprehensive results for discovering system vulnerabilities?\n(A) Static\n(B) Dynamic\n(C) Penetration\n(D) Vulnerability",
        "中文题目与选项": "哪种类型的测试通常能在发现系统漏洞方面产生最佳和最全面的结果？\n(A) 静态\n(B) 动态\n(C) 渗透\n(D) 漏洞",
        "答案": "A",
        "来源页码": 264
    },
    {
        "题号": "743",
        "英文题目与选项": "Which is the lowest level of the CSA STAR program?\n(A) Attestation\n(B) Self-assessment\n(C) Hybridization\n(D) Continuous monitoring",
        "中文题目与选项": "CSA STAR 计划的最低级别是什么？\n(A) 证明\n(B) 自我评估\n(C) 混合\n(D) 持续监测",
        "答案": "B",
        "来源页码": 264
    },
    {
        "题号": "744",
        "英文题目与选项": "Who is the entity identified by personal data?\n(A) The data owner\n(B) The data processor\n(C) The data custodian\n(D) The data subject",
        "中文题目与选项": "由个人数据标识的实体是谁？\n(A) 数据所有者\n(B) 数据处理者\n(C) 数据保管人\n(D) 数据主体",
        "答案": "D",
        "来源页码": 264
    },
    {
        "题号": "745",
        "英文题目与选项": "You work for a government research facility. Your organization often shares data with other government research organizations.\nYou would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations.\nInstead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization's specific storage resources.\nIf you don't use cross-certification, what other model can you implement for this purpose?\n(A) Third-party identity broker\n(B) Cloud reseller\n(C) Intractable nuanced variance\n(D) Mandatory access control (MAC)",
        "中文题目与选项": "您在政府研究机构工作。您的组织经常与其他政府研究机构共享数据。\n您希望在整个组织间创建单一登录体验，每个组织的用户可以使用该组织颁发的用户ID/身份验证登录，然后访问所有其他组织的研究数据。\n您不希望每个组织将数据复制到其他组织中（尽管这是实现这一目标的一种方式），而是希望每个用户都能访问各组织的特定存储资源。\n如果您不使用交叉认证，为此还可以实现哪种模型？\n(A) 第三方身份代理人\n(B) 云经销商\n(C) 难以控制的细微差异\n(D) 强制访问控制 (MAC)",
        "答案": "A",
        "来源页码": 265
    },
    {
        "题号": "746",
        "英文题目与选项": "Which of the following threat types involves an application that does not validate authorization for portions of itself after the initial checks?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site request forgery\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种威胁类型涉及应用程序在初始检查后未验证自身部分的授权？\n(A) 注入\n(B) 缺少功能级别访问控制\n(C) 跨站请求伪造\n(D) 跨站脚本",
        "答案": "B",
        "来源页码": 265
    },
    {
        "题号": "747",
        "英文题目与选项": "Which data formats are most commonly used with the REST API?\n(A) JSON and SAML\n(B) XML and SAML\n(C) XML and JSON\n(D) SAML and HTML",
        "中文题目与选项": "REST API 最常用的数据格式是什么？\n(A) JSON 和 SAML\n(B) XML 和 SAML\n(C) XML 和 JSON\n(D) SAML 和 HTML",
        "答案": "C",
        "来源页码": 266
    },
    {
        "题号": "748",
        "英文题目与选项": "Which of the following threat types involves the sending of untrusted data to a user's browser to be executed with their own credentials and access?\n(A) Missing function level access control\n(B) Cross-site scripting\n(C) Cross-site request forgery\n(D) Injection",
        "中文题目与选项": "以下哪种威胁类型涉及将不受信任的数据发送到用户的浏览器，以用户自己的凭据和访问权限执行？\n(A) 缺少功能级访问控制\n(B) 跨站脚本\n(C) 跨站请求伪造\n(D) 注入攻击",
        "答案": "B",
        "来源页码": 266
    },
    {
        "题号": "749",
        "英文题目与选项": "Alice is the Chief Executive Officer of a software company. She is considering migrating operations from the current on-premises environment to the cloud. To protect the company's intellectual property, Alice may want to consider implementing all of these technologies/solutions except:\n(A) Export control\n(B) Encryption\n(C) Turnstiles\n(D) Digital watermarking",
        "中文题目与选项": "Alice 是一家软件公司的首席执行官；她正在考虑将操作从当前的本地环境迁移到云端。为了保护公司的知识产权，Alice 可能想要考虑实施除以下其中之一之外的所有技术/解决方案。\n(A) 出口监控\n(B) 加密\n(C) 旋转门\n(D) 数字水印",
        "答案": "C",
        "来源页码": 267
    },
    {
        "题号": "750",
        "英文题目与选项": "Which of the following report is most aligned with financial control audits?\n(A) SSAE 16\n(B) SOC 2\n(C) SOC 1\n(D) SOC 3",
        "中文题目与选项": "以下哪项报告最符合财务控制审计？\n(A) SSAE 16\n(B) SOC 2\n(C) SOC 1\n(D) SOC 3",
        "答案": "C",
        "来源页码": 267
    },
    {
        "题号": "751",
        "英文题目与选项": "Which of the following would NOT be used to determine the classification of data?\n(A) Metadata\n(B) Type of data\n(C) Creator\n(D) Future use",
        "中文题目与选项": "以下哪项不会用于确定数据的分类？\n(A) 元数据\n(B) 数据类型\n(C) 生成者\n(D) 将来的用途",
        "答案": "D",
        "来源页码": 267
    },
    {
        "题号": "752",
        "英文题目与选项": "You are the security subject matter expert (SME) for an organization considering a transition from the legacy environment into a hosted cloud provider's data center. One of the challenges you're facing is whether the provider will have undue control over your data once it is within the provider's data center. Will the provider be able to hold your organization hostage because they have your data? This is a(n) _____ issue.\n(A) Interoperability\n(B) Portability\n(C) Availability",
        "中文题目与选项": "你是一家组织的安全主题专家 (SME)，该组织正在考虑从传统环境迁移到托管的云服务提供商数据中心。你面临的挑战之一是：一旦数据进入提供商的数据中心，提供商是否会对你的数据拥有过度的控制权？提供商是否可能因为掌握你的数据而使你的组织陷入被动？这是一个 ____ 问题。\n(A) 互操作性\n(B) 可移植性\n(C) 可用性",
        "答案": "B",
        "来源页码": 267
    },
    {
        "题号": "753",
        "英文题目与选项": "Which aspect of archiving must be tested regularly for the duration of retention requirements?\n(A) Availability\n(B) Recoverability\n(C) Auditability\n(D) Portability",
        "中文题目与选项": "在保留期要求期间，必须定期测试归档的哪个方面？\n(A) 可用性\n(B) 可恢复性\n(C) 可审计性\n(D) 可移植性",
        "答案": "B",
        "来源页码": 268
    },
    {
        "题号": "754",
        "英文题目与选项": "Firewalls are used to provide network security throughout an enterprise and to control what information can be accessed—and, to a certain extent, through what means. Which of the following is NOT something that firewalls are concerned with?\n(A) IP address\n(B) Encryption\n(C) Port\n(D) Protocol",
        "中文题目与选项": "防火墙用于在整个企业中提供网络安全，并控制可以访问哪些信息，以及在一定程度上通过何种方式访问。以下哪一项不是防火墙所关注的？\n(A) IP 地址\n(B) 加密\n(C) 端口\n(D) 协议",
        "答案": "B",
        "来源页码": 268
    },
    {
        "题号": "755",
        "英文题目与选项": "All of the following methods can be used to attenuate the harm caused by escalation of privilege except:\n(A) Extensive access control and authentication tools and techniques\n(B) Analysis and review of all log data by trained, skilled personnel on a frequent basis\n(C) Periodic and effective use of cryptographic sanitization tools\n(D) The use of automated analysis tools such as SIM, SIEM, and SEM solutions",
        "中文题目与选项": "以下所有方法均可用于减轻特权升级造成的危害，但以下方法除外：\n(A) 广泛的访问控制和身份验证工具与技术\n(B) 由训练有素的专业人员定期分析和审查所有日志数据\n(C) 定期有效地使用密码清除工具\n(D) 使用SIM、SIEM和SEM解决方案等自动化分析工具",
        "答案": "C",
        "来源页码": 269
    },
    {
        "题号": "756",
        "英文题目与选项": "Anonymization is the process of removing ________ from data sets.\n(A) Access\n(B) Cryptographic keys\n(C) Numeric values\n(D) Identifying information",
        "中文题目与选项": "匿名化是从数据集中移除________的过程。\n(A) 访问权限\n(B) 加密密钥\n(C) 数值\n(D) 识别信息",
        "答案": "D",
        "来源页码": 269
    },
    {
        "题号": "757",
        "英文题目与选项": "In attempting to provide a layered defense, the security practitioner should convince senior management to include security controls of which type?\n(A) Technological\n(B) Physical\n(C) Administrative\n(D) All of the above",
        "中文题目与选项": "在试图提供分层防御时，安全从业者应说服高层管理人员包括哪种类型的安全控制？\n(A) 技术的\n(B) 物理的\n(C) 管理的\n(D) 以上所有",
        "答案": "D",
        "来源页码": 269
    },
    {
        "题号": "758",
        "英文题目与选项": "Which of the following represents a threat unique to the cloud environment?\n(A) Cloud provider also managing the organization's keys\n(B) Lack of physical access to the environment\n(C) External attackers\n(D) Lack of user training and awareness",
        "中文题目与选项": "以下哪项代表云环境中特有的威胁？\n(A) 云提供商还管理组织的密钥\n(B) 无法实际进入环境\n(C) 外部攻击者\n(D) 缺乏用户培训和意识",
        "答案": "A",
        "来源页码": 270
    },
    {
        "题号": "759",
        "英文题目与选项": "Your company is in the planning stages of moving applications that have large data sets to a cloud environment. What strategy for data removal would be the MOST appropriate for you to recommend if costs and speed are primary considerations?\n(A) Shredding\n(B) Media destruction\n(C) Cryptographic erasure\n(D) Overwriting",
        "中文题目与选项": "您的公司正处于将具有大型数据集的应用程序迁移到云环境的规划阶段。如果成本和速度是主要考虑因素，您最适合推荐什么样的数据删除策略？\n(A) 切碎\n(B) 介质销毁\n(C) 加密擦除\n(D) 覆写",
        "答案": "C",
        "来源页码": 270
    },
    {
        "题号": "760",
        "英文题目与选项": "All the following are data analytics modes, except:\n(A) Data mining\n(B) Agile business intelligence\n(C) Refractory iterations\n(D) Real-time analytics",
        "中文题目与选项": "以下所有模式均为数据分析模式，但以下模式除外：\n(A) 数据挖掘\n(B) 敏捷商业智能\n(C) 抗拒迭代\n(D) 实时分析",
        "答案": "C",
        "来源页码": 270
    },
    {
        "题号": "761",
        "英文题目与选项": "Which aspect of cloud computing makes data classification even more vital than in a traditional data center?\n(A) Interoperability\n(B) Virtualization\n(C) Multitenancy\n(D) Portability",
        "中文题目与选项": "云计算的哪个方面使数据分类比传统数据中心更重要？\n(A) 互操作性\n(B) 虚拟化\n(C) 多租户技术\n(D) 可移植性",
        "答案": "C",
        "来源页码": 271
    },
    {
        "题号": "762",
        "英文题目与选项": "Your company maintains an on-premises data center for daily production activities but wants to use a cloud service to augment this capability during times of increased demand (cloud bursting). Which deployment model would probably best suit the company's needs?\n(A) Public\n(B) Private\n(C) Community\n(D) Hybrid",
        "中文题目与选项": "您的公司维护一个用于日常生产活动的本地数据中心，但希望在需求增加（云爆发）时使用云服务来增强这一能力。哪种部署模式可能最适合公司的需求？\n(A) 公有的\n(B) 私有的\n(C) 社区\n(D) 混合的",
        "答案": "D",
        "来源页码": 271
    },
    {
        "题号": "763",
        "英文题目与选项": "(D). The cloud access security broker",
        "中文题目与选项": "在云环境中，数据处理者通常是：\n(A) 分配访问权限的一方\n(B) 云客户\n(C) 委托处理者\n(D) 云访问安全代理",
        "答案": "C",
        "来源页码": 272
    },
    {
        "题号": "764",
        "英文题目与选项": "Which of the following best describes a cloud carrier?\n(A) The intermediary who provides connectivity and transport of cloud providers and cloud consumers\n(B) A person or entity responsible for making a cloud service available to consumers\n(C) The person or entity responsible for transporting data across the Internet\n(D) The person or entity responsible for keeping cloud services running for customers",
        "中文题目与选项": "以下哪项最能描述云运营商？\n(A) 为云提供商和云消费者提供连接和传输的中介\n(B) 负责向消费者提供云服务的个人或实体\n(C) 负责通过互联网传输数据的个人或实体\n(D) 负责为客户保持云服务运行的人员或实体",
        "答案": "A",
        "来源页码": 272
    },
    {
        "题号": "765",
        "英文题目与选项": "For optimal security, trust zones are used for network segmentation and isolation. They allow for the separation of various systems and tiers, each with its own security level.\nWhich of the following is typically used to allow administrative personnel access to trust zones?\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "中文题目与选项": "为了实现最佳安全性，信任区域用于网络分割和隔离。它们允许不同系统和层级的分离，每个系统和层级都有自己的安全级别。\n以下哪项通常用于允许管理人员访问信任区域？\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "答案": "C",
        "来源页码": 272
    },
    {
        "题号": "766",
        "英文题目与选项": "Which of the following is NOT a factor that is part of a firewall configuration?\n(A) Encryption\n(B) Port\n(C) Protocol\n(D) Source IP",
        "中文题目与选项": "以下选项中哪一项不是防火墙配置的一部分？\n(A) 加密\n(B) 端口\n(C) 协议\n(D) 源IP",
        "答案": "A",
        "来源页码": 273
    },
    {
        "题号": "767",
        "英文题目与选项": "Which of the following is not a feature of SAST?\n(A) Source code review\n(B) Team-building efforts\n(C) \"White-box\" testing\n(D) Highly skilled, often expensive outside consultants",
        "中文题目与选项": "以下选项中哪一项不是SAST的功能？\n(A) 源代码审查\n(B) 团队建设工作\n(C) “白盒”测试\n(D) 高技能、成本高昂的外部顾问",
        "答案": "B",
        "来源页码": 273
    },
    {
        "题号": "768",
        "英文题目与选项": "IRM solutions allow an organization to place different restrictions on data usage than would otherwise be possible through traditional security controls. Which of the following controls would be possible with IRM that would not with traditional security controls?\n(A) Copy\n(B) Read\n(C) Delete\n(D) Print",
        "中文题目与选项": "IRM解决方案允许组织对数据使用施加不同的限制，而不是仅依赖传统的安全控制。以下哪项控制是IRM可以实现而传统安全控制无法实现的？\n(A) 复制\n(B) 阅读\n(C) 删除\n(D) 打印",
        "答案": "D",
        "来源页码": 273
    },
    {
        "题号": "769",
        "英文题目与选项": "Virtual machine (VM) configuration management (CM) tools should probably include\n(A) Biometric recognition\n(B) Anti-tampering mechanisms\n(C) Log file generation\n(D) Hackback capabilities",
        "中文题目与选项": "虚拟机 (VM) 配置管理 (CM) 工具可能包括：\n(A) 生物特征识别\n(B) 防篡改机制\n(C) 日志文件生成\n(D) 黑客反击功能",
        "答案": "C",
        "来源页码": 274
    },
    {
        "题号": "770",
        "英文题目与选项": "What masking strategy involves the replacing of sensitive data at the time it is accessed and used as it flows between the data and application layers of a service?\n(A) Active\n(B) Static\n(C) Dynamic\n(D) Transactional",
        "中文题目与选项": "当敏感数据在服务的数据层和应用层之间流动时，在哪种屏蔽策略下会在访问和使用的同时替换敏感数据？\n(A) 主动的\n(B) 静态的\n(C) 动态的\n(D) 事务式的",
        "答案": "C",
        "来源页码": 274
    },
    {
        "题号": "771",
        "英文题目与选项": "Which of the following management risks could render an organization's cloud environment unsustainable?\n(A) Insider trading\n(B) VM sprawl\n(C) Hostile takeover\n(D) Improper personnel selection",
        "中文题目与选项": "以下哪种管理风险会使组织的云环境无法生存？\n(A) 内幕交易\n(B) 虚拟机散乱现象\n(C) 恶意收购\n(D) 人员选择不当",
        "答案": "B",
        "来源页码": 275
    },
    {
        "题号": "772",
        "英文题目与选项": "A cloud data encryption situation where the cloud customer retains control of the encryption keys and the cloud provider only processes and stores the data could be considered a:\n(A) Threat\n(B) Risk\n(C) Hybrid cloud deployment model\n(D) Case of infringing on the rights of the provider",
        "中文题目与选项": "在云数据加密情况下，云客户保留对加密密钥的控制权，而云提供商仅处理和存储数据，这种情况可被视为：\n(A) 威胁\n(B) 风险\n(C) 混合云部署模型\n(D) 侵犯提供者权利的情况",
        "答案": "C",
        "来源页码": 275
    },
    {
        "题号": "773",
        "英文题目与选项": "What is a key component of GLBA?\n(A) The right to be forgotten\n(B) EU Data Directives\n(C) The information security program\n(D) The right to audit",
        "中文题目与选项": "GLBA 的关键组成部分是什么？\n(A) 被遗忘权\n(B) 欧盟数据指令\n(C) 信息安全计划\n(D) 审计权",
        "答案": "C",
        "来源页码": 275
    },
    {
        "题号": "774",
        "英文题目与选项": "Static application security testing (SAST) is conducted with knowledge of the system, including source code, and is done against offline systems.\n(A) Dynamic testing\n(B) Injection attempt\n(C) Source code access\n(D) Real testing",
        "中文题目与选项": "静态应用程序安全测试 (SAST) 是在了解系统（包括源代码）的情况下进行的，并针对离线系统进行。\n(A) 动态测试\n(B) 注入尝试\n(C) 源代码访问\n(D) 实际测试",
        "答案": "C",
        "来源页码": 276
    },
    {
        "题号": "775",
        "英文题目与选项": "The cloud deployment model that features joint ownership of assets among an affinity group is known as:\n(A) Private\n(B) Public\n(C) Hybrid\n(D) Community",
        "中文题目与选项": "云部署模型的特点是在亲和组中联合拥有资产，被称为：\n(A) 私有的\n(B) 公有的\n(C) 混合的\n(D) 社区的",
        "答案": "D",
        "来源页码": 276
    },
    {
        "题号": "776",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability for a cloud customer to easily remove their applications and data from a cloud environment?\n(A) Reversibility\n(B) Availability\n(C) Portability\n(D) Interoperability",
        "中文题目与选项": "云交叉方面中，哪个与云客户能够轻松地从云环境中移除其应用程序和数据的能力有关？\n(A) 可逆性\n(B) 可用性\n(C) 可移植性\n(D) 互操作性",
        "答案": "A",
        "来源页码": 276
    },
    {
        "题号": "777",
        "英文题目与选项": "The main problem when it comes to data discovery is related to which data attribute?\n(A) Labeling\n(B) Quality\n(C) Volume\n(D) Format",
        "中文题目与选项": "数据发现过程中最大的挑战与哪种数据属性有关？\n(A) 标签\n(B) 质量\n(C) 容量\n(D) 格式",
        "答案": "B",
        "来源页码": 277
    },
    {
        "题号": "778",
        "英文题目与选项": "A truly air-gapped machine selector will\n(A) Terminate a connection before creating a new connection\n(B) Be made of composites and not metal\n(C) Have total Faraday properties\n(D) Not be portable",
        "中文题目与选项": "真正的气隙机器选择器将会——\n(A) 在创建新连接之前终止连接\n(B) 由复合材料而非金属制成\n(C) 具有完全的法拉第特性\n(D) 不可携带",
        "答案": "A",
        "来源页码": 277
    },
    {
        "题号": "779",
        "英文题目与选项": "Which one of the following threat types to applications and services involves the sending of requests that are invalid and manipulated through a user's client to execute commands on the application under the user’s own credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪一种针对应用程序和服务的威胁类型涉及通过用户客户端发送无效的请求，以在用户自己的凭据下在应用程序中执行命令？\n(A) 注入\n(B) 缺少功能级别访问控制\n(C) 跨站脚本\n(D) 跨站请求伪造",
        "答案": "D",
        "来源页码": 277
    },
    {
        "题号": "780",
        "英文题目与选项": "What type of host is exposed to the public Internet for a specific reason and hardened to perform only that function for authorized users?\n(A) Proxy\n(B) Bastion\n(C) Honeypot\n(D) WAF",
        "中文题目与选项": "什么类型的主机因特定原因而暴露在公共互联网中，并被加固为仅为授权用户执行该功能？\n(A) 代理\n(B) 堡垒机\n(C) 蜜罐\n(D) WAF",
        "答案": "B",
        "来源页码": 278
    },
    {
        "题号": "781",
        "英文题目与选项": "A honeypot should contain ______ data.\n(A) Raw\n(B) Production\n(C) Useless\n(D) Sensitive",
        "中文题目与选项": "蜜罐应包含______数据。\n(A) 未经加工的原始\n(B) 生产\n(C) 无用的\n(D) 敏感的",
        "答案": "C",
        "来源页码": 278
    },
    {
        "题号": "782",
        "英文题目与选项": "Which of the following is not a component of contractual processing?\n(A) Scope of processing\n(B) Value of data\n(C) Location of data\n(D) Use of subcontractors",
        "中文题目与选项": "以下哪项不是合同的组成部分？\n(A) 处理范围\n(B) 数据的价值\n(C) 数据的位置\n(D) 分包商的使用",
        "答案": "B",
        "来源页码": 278
    },
    {
        "题号": "783",
        "英文题目与选项": "Which value refers to the amount of data an organization would need to recover in the event of a BCDR situation in order to reach an acceptable level of operations?\n(A) SRE\n(B) RTO\n(C) RPO\n(D) RSL",
        "中文题目与选项": "哪个指标是指在 BCDR 情况下，为了达到可接受的操作水平，组织需要恢复的数据量？\n(A) SRE\n(B) RTO\n(C) RPO\n(D) RSL",
        "答案": "C",
        "来源页码": 279
    },
    {
        "题号": "784",
        "英文题目与选项": "When dealing with PII, which category pertains to those requirements that can carry legal sanctions or penalties for failure to adequately safeguard the data and address compliance requirements?\n(A) Contractual\n(B) Jurisdictional\n(C) Regulated\n(D) Legal",
        "中文题目与选项": "在处理 PII 时，哪一类要求可能因未能充分保护数据和满足合规要求而受到法律制裁或处罚？\n(A) 契约的\n(B) 司法管辖的\n(C) 受监管的\n(D) 法律的",
        "答案": "C",
        "来源页码": 279
    },
    {
        "题号": "786",
        "英文题目与选项": "Which of the following is NOT a criterion for data within the scope of eDiscovery?\n(A) Possession\n(B) Custody\n(C) Control\n(D) Archive",
        "中文题目与选项": "以下哪项不是 eDiscovery 范围内数据的标准？\n(A) 拥有\n(B) 保管\n(C) 控制\n(D) 归档",
        "答案": "D",
        "来源页码": 280
    },
    {
        "题号": "787",
        "英文题目与选项": "Which of the following is a valid risk management metric?\n(A) KPI\n(B) KRI\n(C) SOC\n(D) SLA",
        "中文题目与选项": "以下哪项是有效的风险管理指标？\n(A) KPI\n(B) KRI\n(C) SOC\n(D) SLA",
        "答案": "B",
        "来源页码": 280
    },
    {
        "题号": "788",
        "英文题目与选项": "Database activity monitoring (DAM) can be:\n(A) Host-based or network-based\n(B) Server-based or client-based\n(C) Used in the place of encryption\n(D) Used in place of data masking",
        "中文题目与选项": "数据库活动监视（DAM）可以是：\n(A) 基于主机或基于网络\n(B) 基于服务器或基于客户端\n(C) 用于代替加密\n(D) 用于代替数据屏蔽",
        "答案": "A",
        "来源页码": 280
    },
    {
        "题号": "789",
        "英文题目与选项": "When an organization implements an SIEM solution and begins aggregating event data, the configured event sources are only valid at the time it was configured. Application modifications, patching, and other upgrades will change the events generated and how they are represented over time.\nWhat process is necessary to ensure events are collected and processed with this in mind?\n(A) Continual review\n(B) Continuous optimization\n(C) Aggregation updates\n(D) Event elasticity",
        "中文题目与选项": "当组织实施 SIEM 解决方案并开始聚合事件数据时，配置的事件源仅在配置时有效。应用程序修改、修补和其他升级将改变生成的事件以及它们随时间推移的表现方式。\n为了确保事件被收集和处理，需要什么流程？\n(A) 持续审查\n(B) 持续优化\n(C) 聚合更新\n(D) 事件弹性",
        "答案": "A",
        "来源页码": 281
    },
    {
        "题号": "790",
        "英文题目与选项": "In addition to battery backup, a UPS can offer which capability?\n(A) Breach alert\n(B) Confidentiality\n(C) Communication redundancy\n(D) Line conditioning",
        "中文题目与选项": "除了备用电池之外，UPS 还可以提供哪些功能？\n(A) 违规警报\n(B) 保密性\n(C) 通信冗余\n(D) 线路调节",
        "答案": "D",
        "来源页码": 281
    },
    {
        "题号": "791",
        "英文题目与选项": "(A). Privacy, security\n(B). Security, optimization\n(C). Privacy, integrity\n(D). Enhanced functionality, privacy",
        "中文题目与选项": "(A) 隐私、安全性\n(B) 安全性、优化\n(C) 隐私、完整性\n(D) 增强功能、隐私",
        "答案": "A",
        "来源页码": 282
    },
    {
        "题号": "792",
        "英文题目与选项": "You are working for a cloud service provider and receive an eDiscovery order pertaining to one of your customers. Which of the following would be the most appropriate action to take first?\n(A) Take a snapshot of the virtual machines\n(B) Escrow the encryption keys\n(C) Copy the data\n(D) Notify the customer",
        "中文题目与选项": "您正在为云服务提供商工作，并收到与您的某位客户相关的 eDiscovery（电子取证）订单。以下哪项是最适合首先采取的行动？\n(A) 对虚拟机进行快照\n(B) 托管加密密钥\n(C) 复制数据\n(D) 通知客户",
        "答案": "D",
        "来源页码": 282
    },
    {
        "题号": "793",
        "英文题目与选项": "Which of the following are not examples of personnel controls?\n(A) Background checks\n(B) Reference checks\n(C) Strict access control mechanisms\n(D) Continuous security training",
        "中文题目与选项": "以下哪项不是人员控制的示例？\n(A) 背景检查\n(B) 推荐资料检查\n(C) 严格的访问控制机制\n(D) 持续的安全培训",
        "答案": "C",
        "来源页码": 282
    },
    {
        "题号": "794",
        "英文题目与选项": "A honeypot can be used for all the following purposes except\n(A) Gathering threat intelligence\n(B) Luring attackers\n(C) Distracting attackers\n(D) Delaying attackers",
        "中文题目与选项": "蜜罐可用于以下所有目的，除了：\n(A) 收集威胁情报\n(B) 引诱攻击者\n(C) 分散攻击者的注意力\n(D) 延迟攻击者",
        "答案": "A",
        "来源页码": 283
    },
    {
        "题号": "795",
        "英文题目与选项": "Although performing BCDR tests at regular intervals is a best practice to ensure processes and documentation are still relevant and efficient, which of the following represents a reason to conduct a BCDR review outside of the regular interval?\n(A) Staff changes\n(B) Application changes\n(C) Regulatory changes\n(D) Management changes",
        "中文题目与选项": "尽管定期执行 BCDR 测试是确保流程和文档仍然相关且有效的最佳实践，但以下哪一项代表了在常规间隔之外进行 BCDR 审查的理由？\n(A) 人员变动\n(B) 应用变化\n(C) 法规变化\n(D) 管理变化",
        "答案": "B",
        "来源页码": 283
    },
    {
        "题号": "796",
        "英文题目与选项": "What is the intellectual property protection for the tangible expression of a creative idea?\n(A) Trade secret\n(B) Copyright\n(C) Trademark\n(D) Patent",
        "中文题目与选项": "对创意的有形表达的知识产权保护是什么？\n(A) 商业秘密\n(B) 版权\n(C) 商标\n(D) 专利",
        "答案": "B",
        "来源页码": 283
    },
    {
        "题号": "797",
        "英文题目与选项": "Which of the following is mainly used for physical access control in data centers?\n(A) Mantraps\n(B) Sequestered channels\n(C) Heat sinks\n(D) Tight gaskets",
        "中文题目与选项": "以下哪一项主要用于数据中心的物理访问控制？\n(A) 人体陷阱（双门结构）\n(B) 隔离通道\n(C) 散热器\n(D) 密封垫圈",
        "答案": "A",
        "来源页码": 284
    },
    {
        "题号": "798",
        "英文题目与选项": "Resolving resource contentions in the cloud will most likely be the job of the:\n(A) Router\n(B) Emulator\n(C) Regulator\n(D) Hypervisor",
        "中文题目与选项": "解决云中的资源争用最可能是以下哪一项的工作？\n(A) 路由器\n(B) 仿真器\n(C) 监管者\n(D) 管理程序",
        "答案": "D",
        "来源页码": 284
    },
    {
        "题号": "799",
        "英文题目与选项": "In a cloud environment, encryption should be used for all the following except:\n(A) Long-term storage of data\n(B) Near-term storage of virtualized images\n(C) Secure sessions/VPN\n(D) Profile formatting",
        "中文题目与选项": "在云环境中，加密应应用于以下所有内容，但不包括：\n(A) 数据的长期存储\n(B) 虚拟化映像的短期存储\n(C) 安全会话/VPN\n(D) 配置文件格式化",
        "答案": "D",
        "来源页码": 284
    },
    {
        "题号": "801",
        "英文题目与选项": "Which type of report is considered for \"general” use and does not contain any sensitive information?\n(A) SOC1\n(B) SAS-70\n(C) SOC3\n(D) SOC2",
        "中文题目与选项": "哪种类型的报告被视为“一般”用途，并且不包含任何敏感信息？\n(A) SOC1\n(B) SAS-70\n(C) SOC3\n(D) SOC2",
        "答案": "C",
        "来源页码": 285
    },
    {
        "题号": "802",
        "英文题目与选项": "Identity and access management (IAM) is a security discipline that ensures which of the following?\n(A) That all users are properly authorized\n(B) That the right individual gets access to the right resources at the right time for the right reasons\n(C) That all users are properly authenticated\n(D) That unauthorized users will get access to the right resources at the right time for the right reasons",
        "中文题目与选项": "身份和访问管理（IAM）是一项安全规范，确保以下哪一项？\n(A) 所有用户都得到了适当的授权\n(B) 正确的个人在正确的时间、基于正确的理由访问正确的资源\n(C) 所有用户都经过了正确的身份验证\n(D) 未经授权的用户将在正确的时间、基于正确的原因访问正确的资源",
        "答案": "B",
        "来源页码": 285
    },
    {
        "题号": "803",
        "英文题目与选项": "BCDR strategies do not typically involve the entire operations of an organization, but only those deemed critical to their business. Which concept pertains to the amount of services that need to be recovered to meet BCDR objectives?\n(A) RSL\n(B) RTO\n(C) RPO\n(D) SRE",
        "中文题目与选项": "BCDR（业务连续性与灾难恢复）策略通常不涉及组织的全部运营，而只涉及被认为对业务至关重要的运营。哪个概念与需要恢复的服务量有关，以满足BCDR目标？\n(A) RSL\n(B) RTO\n(C) RPO\n(D) SRE",
        "答案": "A",
        "来源页码": 285
    },
    {
        "题号": "804",
        "英文题目与选项": "What is the concept of isolating an application from the underlying operating system for testing purposes?\n(A) Abstracting\n(B) Application virtualization\n(C) Hosting\n(D) Sandboxing",
        "中文题目与选项": "出于测试目的，将应用程序与底层操作系统隔离是什么概念？\n(A) 抽象化\n(B) 应用虚拟化\n(C) 托管\n(D) 沙箱",
        "答案": "B",
        "来源页码": 286
    },
    {
        "题号": "805",
        "英文题目与选项": "All of the following entities are required to use FedRAMP-accredited Cloud Service Providers except\n(A) The US Post Office\n(B) The Department of Homeland Security\n(C) Federal Express\n(D) The CIA",
        "中文题目与选项": "除以下之一外，所有机构都必须使用通过 FedRAMP 认证的云服务提供商：\n(A) 美国邮政局\n(B) 国土安全部\n(C) 联邦快递\n(D) 中央情报局",
        "答案": "C",
        "来源页码": 286
    },
    {
        "题号": "806",
        "英文题目与选项": "Which team should participate in the review and maintenance of user accounts/access?\n(A) User manager\n(B) Security manager\n(C) Accounting department\n(D) Incident response team",
        "中文题目与选项": "哪一个团队应参与用户账户/访问的审查和维护？\n(A) 用户经理\n(B) 安全经理\n(C) 会计部门\n(D) 事件响应团队",
        "答案": "A",
        "来源页码": 287
    },
    {
        "题号": "807",
        "英文题目与选项": "Which component of IT involves handling anything that can impact services for either internal or public users?\n(A) Incident management\n(B) Deployment management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "以下哪个 IT 组件涉及处理可能影响内部或公众用户服务的任何事项？\n(A) 事件管理\n(B) 部署管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 287
    },
    {
        "题号": "808",
        "英文题目与选项": "The baseline should cover which of the following?\n(A) Data breach alerting and reporting\n(B) All regulatory compliance requirements\n(C) As many systems throughout the organization as possible\n(D) A process for version control",
        "中文题目与选项": "基线应涵盖以下哪一项？\n(A) 数据泄露警报和报告\n(B) 所有法规合规要求\n(C) 尽可能涵盖整个组织中的更多系统\n(D) 版本控制流程",
        "答案": "C",
        "来源页码": 287
    },
    {
        "题号": "809",
        "英文题目与选项": "In general, a cloud BCDR solution will be\n(A) Slower\n(B) Less expensive\n(C) Larger\n(D) More difficult to engineer",
        "中文题目与选项": "通常，云 BCDR 解决方案比物理解决方案要：\n(A) 更慢\n(B) 更便宜\n(C) 更大\n(D) 更难设计",
        "答案": "B",
        "来源页码": 288
    },
    {
        "题号": "810",
        "英文题目与选项": "Which of the following threat types involves leveraging a user's browser to send untrusted data to be executed with legitimate access via the user's valid credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种威胁类型涉及利用用户的浏览器发送不受信任的数据，以便通过用户的有效凭据以合法身份执行访问？\n(A) 注入攻击\n(B) 缺少功能级别访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "D",
        "来源页码": 288
    },
    {
        "题号": "811",
        "英文题目与选项": "According to the OWASP Top Ten, which threat is the most difficult for organizations to defend against?\n(A) Advanced persistent threats\n(B) Account compromise\n(C) Malicious insiders\n(D) Denial of service",
        "中文题目与选项": "根据 OWASP 十大漏洞，组织最难防范的威胁是什么？\n(A) 高级持续性威胁\n(B) 账号泄露\n(C) 恶意的内部人员\n(D) 拒绝服务攻击",
        "答案": "C",
        "来源页码": 289
    },
    {
        "题号": "812",
        "英文题目与选项": "What expectation of data custodians is made much more challenging by a cloud implementation, especially with PaaS or SaaS?\n(A) Data classification\n(B) Knowledge of systems\n(C) Access to data\n(D) Encryption requirements",
        "中文题目与选项": "云实现（尤其是 PaaS 或 SaaS）使数据保管人的哪项期望变得更具挑战性？\n(A) 数据分类\n(B) 系统知识\n(C) 访问数据\n(D) 加密要求",
        "答案": "B",
        "来源页码": 289
    },
    {
        "题号": "813",
        "英文题目与选项": "Which of the following roles is responsible for overseeing customer relationships and the processing of financial transactions?\n(A) Cloud service manager\n(B) Cloud service deployment\n(C) Cloud service business manager\n(D) Cloud service operations manager",
        "中文题目与选项": "以下哪个角色负责监督客户关系和财务交易的处理？\n(A) 云服务经理\n(B) 云服务部署\n(C) 云服务业务经理\n(D) 云服务运营经理",
        "答案": "C",
        "来源页码": 289
    },
    {
        "题号": "814",
        "英文题目与选项": "The guidelines from ASHRAE establish what temperature range as optimal for a data center?\n(A) 69.8-86.0°F (21-30°C)\n(B) 64.4-80.6°F (18-27°C)\n(C) 51.8-66.2°F (11-19°C)\n(D) 44.6-60.8°F (7-16°C)",
        "中文题目与选项": "ASHRAE 的指南将哪个温度范围确认为数据中心的最佳温度？\n(A) 69.8-86.0 华氏度 (21-30 摄氏度)\n(B) 64.4-80.6 华氏度 (18-27 摄氏度)\n(C) 51.8-66.2 华氏度 (11-19 摄氏度)\n(D) 44.6-60.8 华氏度 (7-16 摄氏度)",
        "答案": "B",
        "来源页码": 290
    },
    {
        "题号": "815",
        "英文题目与选项": "Which United States law is focused on accounting and financial practices of organizations?\n(A) Safe Harbor\n(B) GLBA\n(C) SOX\n(D) HIPAA",
        "中文题目与选项": "哪一部美国法律侧重于组织的会计和财务实践？\n(A) 安全港法案\n(B) GLBA 法案\n(C) 萨班斯-奥克斯利法案 (SOX)\n(D) HIPAA 法案",
        "答案": "C",
        "来源页码": 290
    },
    {
        "题号": "816",
        "英文题目与选项": "What is one of the reasons a baseline might be changed?\n(A) Numerous change requests\n(B) To reduce redundancy\n(C) Natural disaster\n(D) Power fluctuation",
        "中文题目与选项": "基线可能更改的原因之一是什么？\n(A) 众多变更请求\n(B) 减少冗余\n(C) 自然灾害\n(D) 功率波动",
        "答案": "A",
        "来源页码": 290
    },
    {
        "题号": "817",
        "英文题目与选项": "When customers conduct penetration testing in the cloud, why is the test not the best simulation of attack conditions?\n(A) Attackers do not use remote access to conduct cloud operations\n(B) Advanced notice removes the element of surprise\n(C) When cloud customers use malware, it's not the same as when attackers use malware\n(D) Regulator involvement changes the attack surface",
        "中文题目与选项": "当客户在云中执行渗透测试时，为什么测试不是攻击条件的最佳模拟？\n(A) 攻击者不使用远程访问进行云操作\n(B) 提前通知消除了意外因素\n(C) 当云客户使用恶意软件时，这与攻击者使用恶意软件的情况不同\n(D) 监管机构的介入改变了攻击面",
        "答案": "B",
        "来源页码": 291
    },
    {
        "题号": "818",
        "英文题目与选项": "During the assessment phase of a risk evaluation, what are the two types of tests that are performed?\n(A) Internal and external\n(B) Technical and managerial\n(C) Physical and logical\n(D) Qualitative and quantitative",
        "中文题目与选项": "在风险评估的评估阶段，执行的两种测试是什么？\n(A) 内部和外部\n(B) 技术和管理\n(C) 物理和逻辑\n(D) 定性和定量",
        "答案": "D",
        "来源页码": 291
    },
    {
        "题号": "819",
        "英文题目与选项": "Which of the following is not an enforceable governmental request?\n(A) Warrant\n(B) Subpoena\n(C) Court order\n(D) Affidavit",
        "中文题目与选项": "以下哪项不是可执行的政府请求？\n(A) 搜查令\n(B) 传票\n(C) 法院命令\n(D) 宣誓书",
        "答案": "D",
        "来源页码": 291
    },
    {
        "题号": "820",
        "英文题目与选项": "In order to prevent cloud customers from potentially consuming enormous amounts of resources within a cloud environment and thus having a negative impact on other customers, what concept is commonly used by a cloud provider?\n(A) Limit\n(B) Cap\n(C) Throttle\n(D) Reservation",
        "中文题目与选项": "为了防止云客户在云环境中潜在地消耗大量资源，从而对其他客户产生负面影响，云服务提供商通常使用什么概念？\n(A) 限制\n(B) 上限\n(C) 节流\n(D) 保留",
        "答案": "A",
        "来源页码": 291
    },
    {
        "题号": "821",
        "英文题目与选项": "At which phase of the SDLC process should security begin participating?\n(A) Requirements gathering\n(B) Requirements analysis\n(C) Design\n(D) Testing",
        "中文题目与选项": "安全应该在 SDLC 过程的哪个阶段开始参与？\n(A) 需求收集\n(B) 需求分析\n(C) 设计\n(D) 测试",
        "答案": "A",
        "来源页码": 292
    },
    {
        "题号": "822",
        "英文题目与选项": "Which kind of SSAE audit report is most beneficial for a cloud customer even though it's unlikely the cloud provider will share it?\n(A) SOC 3\n(B) SOC 1 Type 2\n(C) SOC 2 Type 2\n(D) SOC 1 Type 1",
        "中文题目与选项": "哪种 SSAE 审计报告对云客户最有利，即使云提供商不太可能共享它？\n(A) SOC 3\n(B) SOC 1 类型 2\n(C) SOC 2 类型 2\n(D) SOC 1 类型 1",
        "答案": "C",
        "来源页码": 292
    },
    {
        "题号": "823",
        "英文题目与选项": "The GAPP framework was developed through a joint effort between the major Canadian and American professional accounting associations in order to assist their members with managing and preventing risks to the privacy of their data and customers. Which of the following is the meaning of GAPP?\n(A) General accounting personal privacy\n(B) Generally accepted privacy practices\n(C) Generally accepted privacy principles\n(D) General accounting privacy policies",
        "中文题目与选项": "GAPP 框架由加拿大和美国的主要专业会计协会共同开发，以帮助其成员管理和防止与数据和客户隐私相关的风险。以下哪一项是 GAPP 的含义？\n(A) 一般会计个人隐私\n(B) 普遍接受的隐私做法\n(C) 公认的隐私原则\n(D) 一般会计隐私政策",
        "答案": "C",
        "来源页码": 293
    },
    {
        "题号": "824",
        "英文题目与选项": "What aspect of data center planning occurs first?\n(A) Logical design\n(B) Physical design\n(C) Audit\n(D) Policy revision",
        "中文题目与选项": "数据中心规划的哪个方面首先发生？\n(A) 逻辑设计\n(B) 物理设计\n(C) 审计\n(D) 政策修订",
        "答案": "A",
        "来源页码": 293
    },
    {
        "题号": "825",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud customer regardless of which cloud model is used?\n(A) Platform\n(B) Infrastructure\n(C) Governance\n(D) Application",
        "中文题目与选项": "无论使用哪种云模型，以下哪一项都是云客户的唯一责任？\n(A) 平台\n(B) 基础设施\n(C) 治理\n(D) 应用",
        "答案": "C",
        "来源页码": 293
    },
    {
        "题号": "826",
        "英文题目与选项": "DLP solutions can aid all of the following security-related efforts except\n(A) Access control\n(B) Egress monitoring\n(C) e-discovery/forensics\n(D) Data categorization/classification",
        "中文题目与选项": "DLP解决方案可以帮助以下所有安全相关工作，但不包括：\n(A) 访问控制\n(B) 出口监控\n(C) 电子发现/取证\n(D) 数据分类/分级",
        "答案": "A",
        "来源页码": 294
    },
    {
        "题号": "827",
        "英文题目与选项": "What is a cloud storage architecture that manages the data in caches of copied content close to locations of high demand?\n(A) Object-based storage\n(B) File-based storage\n(C) Database\n(D) CDN",
        "中文题目与选项": "什么是云存储体系结构，可以管理靠近高需求位置的复制内容缓存中的数据？\n(A) 基于对象的存储\n(B) 基于文件的存储\n(C) 数据库\n(D) CDN",
        "答案": "D",
        "来源页码": 294
    }
]
