const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "Which of the following is considered a physical control?\n(A) Fences\n(B) Ceilings\n(C) Carpets\n(D) Doors",
        "中文题目与选项": "以下哪一项被认为是物理控制？\n(A) 围栏\n(B) 天花板\n(C) 地毯\n(D) 门",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "2",
        "英文题目与选项": "The cloud customer will have the most control of their data and systems, and the cloud provider will have the least amount of responsibility, in which cloud computing arrangement?\n(A) IaaS\n(B) SaaS\n(C) Community cloud\n(D) PaaS",
        "中文题目与选项": "在以下哪种云计算模式中，云客户对其数据和系统拥有最大控制权，而云服务提供商承担的责任最少？\n(A) IaaS（基础设施即服务）\n(B) SaaS（软件即服务）\n(C) 社区云\n(D) PaaS（平台即服务）",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "3",
        "英文题目与选项": "Which of the following areas of responsibility always falls completely under the purview of the cloud provider, regardless of which cloud service category is used?\n(A) Infrastructure\n(B) Data\n(C) Physical\n(D) Governance",
        "中文题目与选项": "无论使用哪种云服务类别，下列哪个职责领域始终完全归云服务提供商负责？\n(A) 基础设施\n(B) 数据\n(C) 物理环境\n(D) 治理",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "4",
        "英文题目与选项": "When data discovery is undertaken, three main approaches or strategies are commonly used to determine what the type of data, its format, and composition are for the purposes of classification. Which of the following is NOT one of the three main approaches to data discovery?\n(A) Content analysis\n(B) Hashing\n(C) Labels\n(D) Metadata",
        "中文题目与选项": "在进行数据发现时，通常采用三种主要方法或策略来确定数据的类型、格式和组成以便分类。以下哪一项不是数据发现的三种主要方法之一？\n(A) 内容分析\n(B) 哈希算法\n(C) 标签\n(D) 元数据",
        "答案": "B",
        "来源页码": 2
    },
    {
        "题号": "5",
        "英文题目与选项": "Web application firewalls (WAFs) are designed primarily to protect applications from common attacks like:\n(A) Ransomware\n(B) Syn floods\n(C) XSS and SQL injection\n(D) Password cracking",
        "中文题目与选项": "Web应用防火墙（WAF）主要用于保护应用程序免受以下常见攻击：\n(A) 勒索软件\n(B) SYN洪泛攻击\n(C) XSS与SQL注入\n(D) 密码破解",
        "答案": "C",
        "来源页码": 3
    },
    {
        "题号": "6",
        "英文题目与选项": "A data custodian is responsible for which of the following?\n(A) Data context\n(B) Data content\n(C) The safe custody, transport, storage of the data, and implementation of business rules\n(D) Logging access and alerts",
        "中文题目与选项": "数据保管人负责以下哪项？\n(A) 数据上下文\n(B) 数据内容\n(C) 数据的安全保管、传输、存储以及业务规则的实施\n(D) 访问日志和警报记录",
        "答案": "C",
        "来源页码": 3
    },
    {
        "题号": "7",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Data value\n(B) Date of scheduled destruction\n(C) Date data was created\n(D) Data owner",
        "中文题目与选项": "数据标签可能包括以下所有内容，除了：\n(A) 数据值\n(B) 计划销毁日期\n(C) 数据创建日期\n(D) 数据所有者",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "8",
        "英文题目与选项": "Tokenization requires two distinct ________.\n(A) Personnel\n(B) Authentication factors\n(C) Encryption keys\n(D) Databases",
        "中文题目与选项": "令牌化过程需要两个不同的________。\n(A) 人员\n(B) 认证因素\n(C) 加密密钥\n(D) 数据库",
        "答案": "D",
        "来源页码": 3
    },
    {
        "题号": "9",
        "英文题目与选项": "Which of the following can inspect traffic and detect suspicious activity, but can also actively block such traffic?\n(A) IDS\n(B) IPS\n(C) Proxy\n(D) Firewall",
        "中文题目与选项": "以下哪一项可以检测流量并发现可疑活动，同时能够主动阻止此类流量？\n(A) 入侵检测系统（IDS）\n(B) 入侵防御系统（IPS）\n(C) 代理服务器（Proxy）\n(D) 防火墙（Firewall）",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "10",
        "英文题目与选项": "In addition to battery backup, a UPS can offer which capability?\n(A) Breach alert\n(B) Confidentiality\n(C) Communication redundancy\n(D) Line conditioning",
        "中文题目与选项": "除了电池备份之外，UPS（不间断电源）还可以提供以下哪项功能？\n(A) 入侵警报\n(B) 机密性\n(C) 通信冗余\n(D) 电力调节",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "11",
        "英文题目与选项": "Which of the following best describes the Organizational Normative Framework (ONF)?\n(A) A set of application security, and best practices, catalogued and leveraged by the organization\n(B) A container for components of an application’s security, best practices catalogued and leveraged by the organization\n(C) A framework of containers for some of the components of application security, best practices, catalogued and leveraged by the organization\n(D) A framework of containers for all components of application security, best practices, catalogued and leveraged by the organization",
        "中文题目与选项": "以下哪项最能描述组织规范框架（ONF）？\n(A) 一套由组织编目并利用的应用安全和最佳实践集合\n(B) 一个包含应用安全组件的容器，由组织编目和利用\n(C) 一个包含部分应用安全组件的容器框架，由组织编目和利用\n(D) 一个包含所有应用安全组件的容器框架，由组织编目和利用",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "12",
        "英文题目与选项": "What is the Cloud Security Alliance Cloud Controls Matrix (CCM)?\n(A) A set of software development life cycle requirements for cloud service providers\n(B) An inventory of cloud services security controls that are arranged into a hierarchy of security domains\n(C) An inventory of cloud service security controls that are arranged into separate security domains\n(D) A set of regulatory requirements for cloud service providers",
        "中文题目与选项": "云安全联盟的云控制矩阵（CCM）是什么？\n(A) 云服务提供商的软件开发生命周期要求集合\n(B) 按安全域层次结构排列的云服务安全控制清单\n(C) 按独立安全域排列的云服务安全控制清单\n(D) 云服务提供商的合规性要求集合",
        "答案": "C",
        "来源页码": 4
    },
    {
        "题号": "13",
        "英文题目与选项": "Cloud systems are increasingly used for BCDR solutions for organizations. What aspect of cloud computing makes their use for BCDR the most attractive?\n(A) On-demand self-service\n(B) Measured service\n(C) Portability\n(D) Broad network access",
        "中文题目与选项": "云系统越来越多地被组织用于业务连续性和灾难恢复（BCDR）解决方案。云计算的哪个特性使其在用于BCDR方面最具吸引力？\n(A) 按需自助服务\n(B) 可计量服务\n(C) 可移植性\n(D) 广泛的网络访问",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "14",
        "英文题目与选项": "What is an experimental technology that is intended to create the possibility of processing encrypted data without having to decrypt it first?\n(A) Quantum-state\n(B) Polyinstantiation\n(C) Homomorphic\n(D) Gastronomic",
        "中文题目与选项": "哪种实验性技术旨在使得无需先解密即可处理加密数据？\n(A) 量子态\n(B) 多重实例化\n(C) 同态\n(D) 美食学",
        "答案": "C",
        "来源页码": 5
    },
    {
        "题号": "15",
        "英文题目与选项": "Database activity monitoring (DAM) can be:\n(A) Host-based or network-based\n(B) Server-based or client-based\n(C) Used in the place of encryption\n(D) Used in place of data masking",
        "中文题目与选项": "数据库活动监控（DAM）可以是：\n(A) 基于主机或基于网络的\n(B) 基于服务器或基于客户端的\n(C) 用来替代加密的\n(D) 用来替代数据掩码的",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "16",
        "英文题目与选项": "Which component of ITIL involves handling anything that can impact services for either internal or public users?\n(A) Incident management\n(B) Deployment management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组成部分涉及处理任何可能影响内部或公共用户服务的事项？\n(A) 事件管理\n(B) 部署管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "17",
        "英文题目与选项": "Which of the following technologies is NOT commonly used for accessing systems and services in a cloud environment in a secure manner?\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "中文题目与选项": "以下哪种技术通常**不**用于在云环境中以安全方式访问系统和服务？\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "18",
        "英文题目与选项": "As a result of scandals involving publicly traded corporations such as Enron, WorldCom, and Adelphi, Congress passed legislation known as:\n(A) SOX\n(B) HIPAA\n(C) FERPA\n(D) GLBA",
        "中文题目与选项": "由于涉及安然（Enron）、世通（WorldCom）和阿德尔菲（Adelphi）等上市公司的丑闻，国会通过了被称为以下哪项的立法：\n(A) 《萨班斯-奥克斯利法案》（SOX）\n(B) 《健康保险可携性和责任法案》（HIPAA）\n(C) 《家庭教育权利和隐私法案》（FERPA）\n(D) 《格雷姆-里奇-布莱利法案》（GLBA）",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "19",
        "英文题目与选项": "Deviations from the baseline should be investigated and _______.\n(A) Revealed\n(B) Documented\n(C) Encouraged\n(D) Enforced",
        "中文题目与选项": "与基线的偏差应被调查并且________。\n(A) 披露\n(B) 记录\n(C) 鼓励\n(D) 强制执行",
        "答案": "B",
        "来源页码": 6
    },
    {
        "题号": "20",
        "英文题目与选项": "All the following are data analytics modes, except:\n(A) Data mining\n(B) Agile business intelligence\n(C) Refractory iterations\n(D) Real-time analytics",
        "中文题目与选项": "以下所有选项都是数据分析模式，除了：\n(A) 数据挖掘\n(B) 敏捷商业智能\n(C) 难以理解的迭代（虚构术语）\n(D) 实时分析",
        "答案": "C",
        "来源页码": 6
    },
    {
        "题号": "21",
        "英文题目与选项": "Gap analysis is performed for what reason?\n(A) To begin the benchmarking process\n(B) To assure proper accounting practices are being used\n(C) To provide assurances to cloud customers\n(D) To ensure all controls are in place and working properly",
        "中文题目与选项": "进行差距分析的原因是什么？\n(A) 开始基准化过程\n(B) 确保使用了适当的会计做法\n(C) 向云客户提供保证\n(D) 确保所有控制措施到位并正常运行",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "22",
        "英文题目与选项": "The different cloud service models have varying levels of responsibilities for functions and operations depending on the model's level of service. In which of the following models would the responsibility for patching lie predominantly with the cloud customer?\n(A) DaaS\n(B) SaaS\n(C) PaaS\n(D) IaaS",
        "中文题目与选项": "不同的云服务模型根据其服务级别，对功能和操作的责任程度各不相同。以下哪种模型中，打补丁的责任主要由云客户承担？\n(A) DaaS（桌面即服务）\n(B) SaaS（软件即服务）\n(C) PaaS（平台即服务）\n(D) IaaS（基础设施即服务）",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "23",
        "英文题目与选项": "The cloud customer’s trust in the cloud provider can be enhanced by all of the following except:\n(A) SLAs\n(B) Shared administration\n(C) Audits\n(D) Real-time video surveillance",
        "中文题目与选项": "以下哪项不会增强云客户对云服务提供商的信任？\n(A) 服务级别协议（SLA）\n(B) 共享管理\n(C) 审计\n(D) 实时视频监控",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "24",
        "英文题目与选项": "IRM solutions allow an organization to place different restrictions on data usage than would otherwise be possible through traditional security controls.\nWhich of the following controls would be possible with IRM that would not with traditional security controls?\n(A) Copy\n(B) Read\n(C) Delete\n(D) Print",
        "中文题目与选项": "IRM（信息权限管理）解决方案允许组织在数据使用上施加不同于传统安全控制的限制。\n以下哪一种控制是 IRM 可以实现而传统安全控制无法实现的？\n(A) 复制\n(B) 读取\n(C) 删除\n(D) 打印",
        "答案": "D",
        "来源页码": 7
    },
    {
        "题号": "25",
        "英文题目与选项": "Hardening the operating system refers to all of the following except:\n(A) Limiting administrator access\n(B) Closing unused ports\n(C) Removing antimalware agents\n(D) Removing unnecessary services and libraries",
        "中文题目与选项": "操作系统加固包括以下所有措施，除了：\n(A) 限制管理员访问\n(B) 关闭未使用的端口\n(C) 移除反恶意软件代理\n(D) 删除不必要的服务和库",
        "答案": "C",
        "来源页码": 7
    },
    {
        "题号": "26",
        "英文题目与选项": "What does static application security testing (SAST) offer as a tool to the testers that makes it unique compared to other common security testing methodologies?\n(A) Live testing\n(B) Source code access\n(C) Production system scanning\n(D) Injection attempts",
        "中文题目与选项": "相比其他常见的安全测试方法，静态应用安全测试（SAST）为测试人员提供了哪种独特的工具特性？\n(A) 实时测试\n(B) 源代码访问\n(C) 生产系统扫描\n(D) 注入尝试",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "27",
        "英文题目与选项": "Which of the following is NOT a major regulatory framework?\n(A) PCI DSS\n(B) HIPAA\n(C) SOX\n(D) FIPS 140-2",
        "中文题目与选项": "以下哪一项不是主要的监管框架？\n(A) PCI DSS 支付卡行业数据安全标准\n(B) HIPAA 健康保险可携性与责任法案\n(C) SOX 萨班斯-奥克斯利法案\n(D) FIPS 140-2 联邦信息处理标准第140-2号",
        "答案": "D",
        "来源页码": 7
    },
    {
        "题号": "28",
        "英文题目与选项": "Different security testing methodologies offer different strategies and approaches to testing systems, requiring security personnel to determine the best type to use for their specific circumstances.\nWhat does dynamic application security testing (DAST) NOT entail that SAST does?\n(A) Discovery\n(B) Knowledge of the system\n(C) Scanning\n(D) Probing",
        "中文题目与选项": "不同的安全测试方法在测试系统时提供不同的策略和方法，安全人员需要根据具体情况选择最佳类型。\n动态应用安全测试（DAST）不包括而静态应用安全测试（SAST）包含的是什么？\n(A) 发现\n(B) 系统内部知识\n(C) 扫描\n(D) 探测",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "29",
        "英文题目与选项": "Data masking can be used to provide all of the following functionality, except:\n(A) Test data in sandboxed environments\n(B) Authentication of privileged users\n(C) Enforcing least privilege\n(D) Secure remote access",
        "中文题目与选项": "数据脱敏可用于实现以下所有功能，但不包括：\n(A) 在沙盒环境中测试数据\n(B) 特权用户的身份验证\n(C) 强制执行最小特权原则\n(D) 安全的远程访问",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "30",
        "英文题目与选项": "The GAPP framework was developed through a joint effort between the major Canadian and American professional accounting associations in order to assist their members with managing and preventing risks to the privacy of their data and customers. Which of the following is the meaning of GAPP?\n(A) General accounting personal privacy\n(B) Generally accepted privacy practices\n(C) Generally accepted privacy principles\n(D) General accounting privacy policies",
        "中文题目与选项": "GAPP 框架是由加拿大和美国主要会计专业协会共同开发的，旨在帮助其成员管理和防止数据和客户隐私风险。以下哪一项是 GAPP 的含义？\n(A) 一般会计个人隐私\n(B) 公认的隐私实践\n(C) 公认的隐私原则\n(D) 一般会计隐私政策",
        "答案": "C",
        "来源页码": 8
    },
    {
        "题号": "31",
        "英文题目与选项": "Your new CISO is placing increased importance and focus on regulatory compliance as your applications and systems move into cloud environments. Which of the following would NOT be a major focus of yours as you develop a project plan to focus on regulatory compliance?\n(A) Data in transit\n(B) Data in use\n(C) Data at rest\n(D) Data custodian",
        "中文题目与选项": "随着应用程序和系统迁移到云环境，你的新任首席信息安全官（CISO）更加重视法规合规性。在制定以法规合规为重点的项目计划时，下列哪一项不应是你主要关注的重点？\n(A) 传输中的数据\n(B) 使用中的数据\n(C) 静态存储的数据\n(D) 数据保管人",
        "答案": "D",
        "来源页码": 8
    },
    {
        "题号": "32",
        "英文题目与选项": "What masking strategy involves the replacing of sensitive data at the time it is accessed and used as it flows between the data and application layers of a service?\n(A) Active\n(B) Static\n(C) Dynamic\n(D) Transactional",
        "中文题目与选项": "哪种数据脱敏策略是在服务的数据层与应用层之间传输时，在访问和使用时替换敏感数据？\n(A) 活跃脱敏\n(B) 静态脱敏\n(C) 动态脱敏\n(D) 事务性脱敏",
        "答案": "C",
        "来源页码": 8
    },
    {
        "题号": "33",
        "英文题目与选项": "Because cloud providers will not give detailed information out about their infrastructures and practices to the general public, they will often use established auditing reports to ensure public trust, where the reputation of the auditors serves for assurance. Which type of audit reports can be used for general public trust assurances?\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "中文题目与选项": "由于云服务提供商不会向公众披露其基础设施和操作实践的详细信息，他们通常会使用已有的审计报告来确保公众信任，其中审计方的声誉起到保证作用。下列哪种审计报告可用于公共信任保证？\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "答案": "C",
        "来源页码": 8
    },
    {
        "题号": "34",
        "英文题目与选项": "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?\n(A) UPS\n(B) Generators\n(C) Joint operating agreements\n(D) Strict adherence to applicable regulations",
        "中文题目与选项": "使用以下哪项可以以具有成本效益的方式应对局部事故或灾害？\n(A) 不间断电源（UPS）\n(B) 发电机\n(C) 联合运营协议\n(D) 严格遵守相关法规",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "35",
        "英文题目与选项": "You need to gain approval to begin moving your company's data and systems into a cloud environment. However, your CEO has mandated the ability to easily remove your IT assets from the cloud provider as a precondition.\nWhich of the following cloud concepts would this pertain to?\n(A) Removability\n(B) Extraction\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "你需要获得批准，以开始将公司数据和系统迁移到云环境。然而，你的首席执行官要求具备能够轻松从云服务提供商处移除IT资产的能力作为前提条件。以下哪个云概念与此相关？\n(A) 可移除性\n(B) 提取性\n(C) 可移植性\n(D) 可逆性",
        "答案": "D",
        "来源页码": 9
    },
    {
        "题号": "36",
        "英文题目与选项": "Which of the following are cloud computing roles?\n(A) Cloud service broker and user\n(B) Cloud customer and financial auditor\n(C) CSP and backup service provider\n(D) Cloud service auditor and object",
        "中文题目与选项": "以下哪些是云计算角色？\n(A) 云服务经纪人和用户\n(B) 云客户和财务审计员\n(C) 云服务提供商（CSP）和备份服务提供商\n(D) 云服务审计员和对象",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "37",
        "英文题目与选项": "The goals of DLP solution implementation include all of the following, except:\n(A) Elasticity\n(B) Policy enforcement\n(C) Data discovery\n(D) Loss mitigation",
        "中文题目与选项": "以下所有都是实施DLP（数据泄露防护）解决方案的目标，除了：\n(A) 弹性\n(B) 策略执行\n(C) 数据发现\n(D) 损失缓解",
        "答案": "A",
        "来源页码": 9
    },
    {
        "题号": "38",
        "英文题目与选项": "What is a key capability or characteristic of PaaS?\n(A) Support for a homogenous environment\n(B) Support for a single programming language\n(C) Ability to reduce lock-in\n(D) Ability to manually scale",
        "中文题目与选项": "PaaS 的关键能力或特征是什么？\n(A) 支持同质化环境\n(B) 支持单一编程语言\n(C) 能够减少锁定风险\n(D) 能够手动扩展",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "39",
        "英文题目与选项": "Which of the following could be used as a second component of multifactor authentication if a user has an RSA token?\n(A) Access card\n(B) USB thumb drive\n(C) Retina scan\n(D) RFID",
        "中文题目与选项": "如果用户拥有一个 RSA 令牌，下列哪一项可以作为多因素认证的第二个组件？\n(A) 门禁卡\n(B) USB 闪存驱动器\n(C) 视网膜扫描\n(D) RFID",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "40",
        "英文题目与选项": "The application normative framework is best described as which of the following?\n(A) A superset of the ONF\n(B) A stand-alone framework for storing security practices for the ONF\n(C) The complete ONF\n(D) A subnet of the ONF",
        "中文题目与选项": "下列哪项最能描述应用规范框架（ANF）？\n(A) 是 ONF 的超集\n(B) 一个独立的框架，用于存储 ONF 的安全实践\n(C) 完整的 ONF\n(D) ONF 的子集",
        "答案": "D",
        "来源页码": 10
    },
    {
        "题号": "41",
        "英文题目与选项": "Above and beyond general regulations for data privacy and protection, certain types of data are subjected to more rigorous regulations and oversight. Which of the following is not a regulatory framework for more sensitive or specialized data?\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "中文题目与选项": "除了针对数据隐私和保护的一般性法规外，某些类型的数据还会受到更严格的监管和监督。以下哪一项不是针对敏感或专业数据的监管框架？\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "答案": "A",
        "来源页码": 10
    },
    {
        "题号": "42",
        "英文题目与选项": "Which protocol, as a part of TLS, handles negotiating and establishing a connection between two parties?\n(A) Record\n(B) Binding\n(C) Negotiation\n(D) Handshake",
        "中文题目与选项": "作为 TLS 一部分的哪种协议负责在双方之间协商并建立连接？\n(A) 记录协议（Record）\n(B) 绑定协议（Binding）\n(C) 协商协议（Negotiation）\n(D) 握手协议（Handshake）",
        "答案": "D",
        "来源页码": 11
    },
    {
        "题号": "43",
        "英文题目与选项": "Many activities within a cloud environment are performed via programmatic means, where complex and distributed operations are handled without the need to perform each step individually. Which of the following concepts does this describe?\n(A) Orchestration\n(B) Provisioning\n(C) Automation\n(D) Allocation",
        "中文题目与选项": "云环境中的许多活动通过编程方式执行，复杂且分布式的操作可在无需逐步手动执行的情况下完成。以下哪个概念描述了这种方式？\n(A) 编排（Orchestration）\n(B) 供应（Provisioning）\n(C) 自动化（Automation）\n(D) 分配（Allocation）",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "44",
        "英文题目与选项": "Each of the following are dependencies that must be considered when reviewing the BIA after cloud migration except:\n(A) The cloud provider’s utilities\n(B) The cloud provider’s suppliers\n(C) The cloud provider’s resellers\n(D) The cloud provider’s vendors",
        "中文题目与选项": "在云迁移后审查业务影响分析（BIA）时，以下哪些依赖应被考虑，除了：\n(A) 云服务提供商的基础设施与公用设施\n(B) 云服务提供商的供应商\n(C) 云服务提供商的经销商\n(D) 云服务提供商的厂商",
        "答案": "C",
        "来源页码": 11
    },
    {
        "题号": "45",
        "英文题目与选项": "Key maintenance and security are paramount within a cloud environment due to the widespread use of encryption for both data and transmissions. Which of the following key-management systems would provide the most robust control over and ownership of the key-management processes for the cloud customer?\n(A) Remote key management service\n(B) Local key management service\n(C) Client key management service\n(D) Internal key management service",
        "中文题目与选项": "由于数据和传输中普遍使用加密，密钥维护和安全在云环境中至关重要。以下哪种密钥管理系统能为云客户提供最强的控制权与过程所有权？\n(A) 远程密钥管理服务\n(B) 本地密钥管理服务\n(C) 客户密钥管理服务\n(D) 内部密钥管理服务",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "46",
        "英文题目与选项": "What are third-party providers of IAM functions for the cloud environment?\n(A) AESs\n(B) SIEMs\n(C) DLPs\n(D) CASBs",
        "中文题目与选项": "云环境中负责提供身份和访问管理（IAM）功能的第三方供应商通常是什么？\n(A) AESs\n(B) SIEMs\n(C) DLPs\n(D) CASBs",
        "答案": "D",
        "来源页码": 11
    },
    {
        "题号": "47",
        "英文题目与选项": "Proper implementation of DLP solutions for successful function requires which of the following?\n(A) Physical access limitations\n(B) USB connectivity\n(C) Accurate data categorization\n(D) Physical presence",
        "中文题目与选项": "为了让DLP（数据丢失防护）解决方案能够成功运行，正确的实施需要以下哪一项？\n(A) 物理访问限制\n(B) USB 连接\n(C) 准确的数据分类\n(D) 实体在场",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "48",
        "英文题目与选项": "What concept and operational process must be spelled out clearly, as far as roles and responsibilities go, between the cloud provider and cloud customer for the mitigation of any problems or security events?\n(A) Incident response\n(B) Problem management\n(C) Change management\n(D) Conflict response",
        "中文题目与选项": "在云提供商与云客户之间，为了减轻任何问题或安全事件的影响，就职责和责任而言，必须明确规定的概念和运行过程是哪个？\n(A) 事件响应\n(B) 问题管理\n(C) 变更管理\n(D) 冲突响应",
        "答案": "A",
        "来源页码": 12
    },
    {
        "题号": "49",
        "英文题目与选项": "Which of the following is NOT one of the components of multifactor authentication?\n(A) Something the user knows\n(B) Something the user has\n(C) Something the user sends\n(D) Something the user is",
        "中文题目与选项": "以下哪项不是多因素认证的组成部分之一？\n(A) 用户知道的东西\n(B) 用户拥有的东西\n(C) 用户发送的东西\n(D) 用户本身的特征",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "50",
        "英文题目与选项": "Which of the following statements about Type 1 hypervisors is true?\n(A) The hardware vendor and software vendor are different.\n(B) The hardware vendor and software vendor are the same.\n(C) The hardware vendor provides an open platform for software vendors.\n(D) The hardware vendor and software vendor should always be different for the sake of security.",
        "中文题目与选项": "以下关于 Type 1（类型1）虚拟机监控程序的描述中，哪一项是正确的？\n(A) 硬件供应商和软件供应商是不同的。\n(B) 硬件供应商和软件供应商是相同的。\n(C) 硬件供应商为软件供应商提供开放平台。\n(D) 出于安全考虑，硬件供应商和软件供应商应始终不同。",
        "答案": "B",
        "来源页码": 12
    },
    {
        "题号": "51",
        "英文题目与选项": "When reviewing the BIA after a cloud migration, the organization should take into account new factors related to data breach impacts. One of these new factors is:\n(A) Many states have data breach notification laws.\n(B) Breaches can cause the loss of proprietary data.\n(C) Breaches can cause the loss of intellectual property.\n(D) Legal liability can’t be transferred to the cloud provider.",
        "中文题目与选项": "在完成云迁移后审查业务影响分析（BIA）时，组织应考虑与数据泄露影响相关的新因素。其中一个新因素是：\n(A) 许多州都有数据泄露通知法。\n(B) 泄露可能导致专有数据丢失。\n(C) 泄露可能导致知识产权丢失。\n(D) 法律责任不能转移给云服务提供商。",
        "答案": "D",
        "来源页码": 12
    },
    {
        "题号": "52",
        "英文题目与选项": "Gathering business requirements can aid the organization in determining all of this information about organizational assets, except:\n(A) Full inventory\n(B) Criticality\n(C) Value\n(D) Usefulness",
        "中文题目与选项": "收集业务需求可以帮助组织确定有关组织资产的以下所有信息，但不包括：\n(A) 完整的清单\n(B) 关键性\n(C) 价值\n(D) 有用性",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "53",
        "英文题目与选项": "Identity and access management (IAM) is a security discipline that ensures which of the following?\n(A) That all users are properly authorized\n(B) That the right individual gets access to the right resources at the right time for the right reasons.\n(C) That all users are properly authenticated\n(D) That unauthorized users will get access to the right resources at the right time for the right reasons",
        "中文题目与选项": "身份与访问管理 (IAM) 是一项安全学科，用于确保以下哪一项？\n(A) 所有用户都被正确授权\n(B) 正确的个人能在正确的时间出于正确的原因访问正确的资源\n(C) 所有用户都得到正确的身份验证\n(D) 未授权的用户能在正确的时间出于正确的原因访问正确的资源",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "54",
        "英文题目与选项": "In a cloud environment, encryption should be used for all the following, except:\n(A) Secure sessions/VPN\n(B) Long-term storage of data\n(C) Near-term storage of virtualized images\n(D) Profile formatting",
        "中文题目与选项": "在云环境中，加密应应用于以下所有内容，但不包括：\n(A) 安全会话/VPN\n(B) 数据的长期存储\n(C) 虚拟化映像的短期存储\n(D) 配置文件格式化",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "55",
        "英文题目与选项": "All of these are methods of data discovery, except:\n(A) Label-based\n(B) User-based\n(C) Content-based\n(D) Metadata-based",
        "中文题目与选项": "以下都是数据发现的方法，但不包括：\n(A) 基于标签\n(B) 基于用户\n(C) 基于内容\n(D) 基于元数据",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "56",
        "英文题目与选项": "Which of the following terms is not associated with cloud forensics?\n(A) eDiscovery\n(B) Chain of custody\n(C) Analysis\n(D) Plausibility",
        "中文题目与选项": "以下哪一个术语与云取证无关？\n(A) 电子发现 (eDiscovery)\n(B) 保管链 (Chain of custody)\n(C) 分析\n(D) 可信性",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "57",
        "英文题目与选项": "To provision processing, storage, networks, and other fundamental computing resources when the consumer is able to deploy and run arbitrary software, which can include OSs and applications.\n(A) To provision processing, storage, networks, and other fundamental computing resources when the consumer is able to deploy and run arbitrary software, which can include OSs and applications.\n(B) To provision processing, storage, networks, and other fundamental computing resources when the auditor is able to deploy and run arbitrary software, which can include OSs and applications.\n(C) To provision processing, storage, networks, and other fundamental computing resources when the provider is able to deploy and run arbitrary software, which can include OSs and applications.\n(D) To provision processing, storage, networks, and other fundamental computing resources when the consumer is not able to deploy and run arbitrary software, which can include OSs and applications.",
        "中文题目与选项": "为了提供处理、存储、网络及其他基本计算资源，使消费者能够部署并运行任意软件，包括操作系统和应用程序。\n(A) 为消费者提供处理、存储、网络及其他基本计算资源，使其能够部署并运行任意软件，包括操作系统和应用程序。\n(B) 为审计人员提供处理、存储、网络及其他基本计算资源，使其能够部署并运行任意软件，包括操作系统和应用程序。\n(C) 为提供商提供处理、存储、网络及其他基本计算资源，使其能够部署并运行任意软件，包括操作系统和应用程序。\n(D) 为消费者提供处理、存储、网络及其他基本计算资源，但消费者不能部署并运行任意软件，包括操作系统和应用程序。",
        "答案": "A",
        "来源页码": 14
    },
    {
        "题号": "58",
        "英文题目与选项": "Best practices for key management include all of the following, except:\n(A) Ensure multifactor authentication\n(B) Pass keys out of band\n(C) Have key recovery processes\n(D) Maintain key security",
        "中文题目与选项": "密钥管理的最佳实践包括以下所有内容，除了：\n(A) 确保多因素认证\n(B) 通过带外方式传递密钥\n(C) 建立密钥恢复流程\n(D) 保持密钥安全",
        "答案": "A",
        "来源页码": 14
    },
    {
        "题号": "59",
        "英文题目与选项": "Upon completing a risk analysis, a company has four different approaches to addressing risk. Which approach it takes will be based on costs, available options, and adherence to any regulatory requirements from independent audits.\nWhich of the following groupings correctly represents the four possible approaches?\n(A) Accept, avoid, transfer, mitigate\n(B) Accept, deny, transfer, mitigate\n(C) Accept, deny, mitigate, revise\n(D) Accept, dismiss, transfer, mitigate",
        "中文题目与选项": "在完成风险分析后，公司有四种不同的风险处理方法。采取哪种方法将基于成本、可用选项以及遵守独立审计中的法规要求。\n以下哪一组正确表示四种可能的风险处理方法？\n(A) 接受、避免、转移、缓解\n(B) 接受、拒绝、转移、缓解\n(C) 接受、拒绝、缓解、修订\n(D) 接受、忽视、转移、缓解",
        "答案": "A",
        "来源页码": 14
    },
    {
        "题号": "60",
        "英文题目与选项": "DLP can be combined with what other security technology to enhance data controls?\n(A) SIEM\n(B) Hypervisors\n(C) DRM\n(D) Kerberos",
        "中文题目与选项": "为了增强数据控制，DLP（数据泄露防护）可以与以下哪种安全技术结合使用？\n(A) 安全信息与事件管理（SIEM）\n(B) 虚拟机管理程序（Hypervisors）\n(C) 数字版权管理（DRM）\n(D) 认证协议（Kerberos）",
        "答案": "C",
        "来源页码": 14
    },
    {
        "题号": "61",
        "英文题目与选项": "Without the extensive funds of a large corporation, a small-sized company could gain considerable and cost-effective services for which of the following concepts by moving to a cloud environment?\n(A) Regulatory\n(B) Security\n(C) Testing\n(D) Development",
        "中文题目与选项": "在没有大型企业充足资金的情况下，中小型公司通过迁移到云环境，在哪个方面可以获得显著且具有成本效益的服务？\n(A) 合规监管\n(B) 安全\n(C) 测试\n(D) 开发",
        "答案": "B",
        "来源页码": 14
    },
    {
        "题号": "62",
        "英文题目与选项": "Which of the following would be considered an example of insufficient due diligence leading to security or operational problems when moving to a cloud?\n(A) Monitoring\n(B) Use of a remote key management system\n(C) Programming languages used\n(D) Reliance on physical network controls",
        "中文题目与选项": "以下哪一项被认为是在迁移到云时由于尽职调查不足而导致安全或操作问题的示例？\n(A) 监控\n(B) 使用远程密钥管理系统\n(C) 使用的编程语言\n(D) 依赖物理网络控制",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "63",
        "英文题目与选项": "The BIA can be used to provide information about all the following, except:\n(A) BC/DR planning\n(B) Risk analysis\n(C) Secure acquisition\n(D) Selection of security controls",
        "中文题目与选项": "业务影响分析（BIA）可用于提供以下所有信息，但不包括：\n(A) 业务连续性/灾难恢复规划（BC/DR）\n(B) 风险分析\n(C) 安全采购\n(D) 安全控制的选择",
        "答案": "C",
        "来源页码": 15
    },
    {
        "题号": "64",
        "英文题目与选项": "Many aspects of cloud computing bring enormous benefits over a traditional data center, but also introduce new challenges unique to cloud computing. Which of the following aspects of cloud computing makes appropriate data classification of high importance?\n(A) Multitenancy\n(B) Interoperability\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "云计算的许多方面与传统数据中心相比带来了巨大的好处，但也引入了云计算特有的新挑战。以下哪一项使得数据分类变得至关重要？\n(A) 多租户\n(B) 互操作性\n(C) 可移植性\n(D) 可逆性",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "65",
        "英文题目与选项": "Which of the following components are part of what a CCSP should review when looking at contracting with a cloud service provider?\n(A) Redundant uplink grafts\n(B) Background checks for the provider’s personnel\n(C) The physical layout of the datacenter\n(D) Use of subcontractors",
        "中文题目与选项": "在与云服务提供商签订合同时，CCSP 应该审查以下哪些组成部分？\n(A) 冗余上行连接结构\n(B) 供应商人员的背景调查\n(C) 数据中心的物理布局\n(D) 分包商的使用",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "66",
        "英文题目与选项": "Which of the following is the dominant driver behind the regulations to which a system or application must adhere?\n(A) Data source\n(B) Locality\n(C) Contract\n(D) SLA",
        "中文题目与选项": "以下哪项是系统或应用程序必须遵守的法规背后的主要驱动力？\n(A) 数据来源\n(B) 地理位置\n(C) 合同\n(D) 服务级别协议（SLA）",
        "答案": "B",
        "来源页码": 16
    },
    {
        "题号": "67",
        "英文题目与选项": "User access to the cloud environment can be administered in all of the following ways except:\n(A) Provider provides administration on behalf of the customer\n(B) Customer directly administers access\n(C) Third party provides administration on behalf of the customer\n(D) Customer provides administration on behalf of the provider",
        "中文题目与选项": "用户对云环境的访问可以通过以下所有方式进行管理，除了：\n(A) 由服务提供商代表客户进行管理\n(B) 客户直接管理访问权限\n(C) 第三方代表客户进行管理\n(D) 客户代表服务提供商进行管理",
        "答案": "D",
        "来源页码": 16
    },
    {
        "题号": "68",
        "英文题目与选项": "Which protocol, as a part of TLS, handles the actual secure communications and transmission of data?\n(A) Negotiation\n(B) Handshake\n(C) Transfer\n(D) Record",
        "中文题目与选项": "在 TLS 协议中，哪一个协议处理实际的安全通信与数据传输？\n(A) 协商协议\n(B) 握手协议\n(C) 传输协议\n(D) 记录协议",
        "答案": "D",
        "来源页码": 16
    },
    {
        "题号": "69",
        "英文题目与选项": "Which component of ITIL pertains to planning, coordinating, executing, and validating changes and rollouts to production environments?\n(A) Release management\n(B) Availability management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件与规划、协调、执行和验证对生产环境的变更和发布相关？\n(A) 发布管理\n(B) 可用性管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "70",
        "英文题目与选项": "BCDR strategies do not typically involve the entire operations of an organization, but only those deemed critical to their business.\nWhich concept pertains to the amount of services that need to be recovered to meet BCDR objectives?\n(A) RSL\n(B) RTO\n(C) RPO\n(D) SRE",
        "中文题目与选项": "业务连续性和灾难恢复（BCDR）策略通常不涉及组织的全部运营，而仅包括对其业务至关重要的部分。\n以下哪个概念与为满足BCDR目标所需恢复的服务量相关？\n(A) RSL（恢复服务级别）\n(B) RTO（恢复时间目标）\n(C) RPO（恢复点目标）\n(D) SRE（网站可靠性工程）",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "71",
        "英文题目与选项": "In the cloud motif, the data processor is usually:\n(A) The cloud customer\n(B) The cloud provider\n(C) The cloud access security broker\n(D) The party that assigns access rights",
        "中文题目与选项": "在云服务模型中，数据处理者通常是：\n(A) 云客户\n(B) 云服务提供商\n(C) 云访问安全代理（CASB）\n(D) 分配访问权限的一方",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "72",
        "英文题目与选项": "What must SOAP rely on for security since it does not provide security as a built-in capability?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "由于SOAP本身不提供内置的安全功能，它必须依赖以下哪种方式来确保安全？\n(A) 加密\n(B) 令牌化\n(C) TLS\n(D) SSL",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "73",
        "英文题目与选项": "Which of the following is a valid risk management metric?\n(A) KPI\n(B) KRI\n(C) SOC\n(D) SLA",
        "中文题目与选项": "以下哪一项是有效的风险管理指标？\n(A) KPI（关键绩效指标）\n(B) KRI（关键风险指标）\n(C) SOC（系统与组织控制）\n(D) SLA（服务级别协议）",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "74",
        "英文题目与选项": "Which of the following types of data would fall under data rights management (DRM) rather than information rights management (IRM)?\n(A) Personnel data\n(B) Security profiles\n(C) Publications\n(D) Financial records",
        "中文题目与选项": "以下哪种类型的数据属于数据权限管理（DRM），而不是信息权限管理（IRM）的范畴？\n(A) 人员数据\n(B) 安全配置文件\n(C) 出版物\n(D) 财务记录",
        "答案": "C",
        "来源页码": 17
    },
    {
        "题号": "75",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "以下哪一个不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "76",
        "英文题目与选项": "Your IT steering committee has, at a high level, approved your project to begin using cloud services. However, the committee is concerned with getting locked into a single cloud provider and has flagged the ability to easily move between cloud providers as a top priority. It also wants to save costs by reusing components.\nWhich cross-cutting aspect of cloud computing would be your primary focus as your project plan continues to develop and you begin to evaluate cloud providers?\n(A) Interoperability\n(B) Resiliency\n(C) Scalability\n(D) Portability",
        "中文题目与选项": "你的 IT 指导委员会已经在高层批准了你开始使用云服务的项目。然而，委员会担心会被单一云服务提供商锁定，并将能够在不同云提供商之间轻松迁移列为首要任务。它还希望通过重用组件来节省成本。\n在你的项目计划继续发展并开始评估云服务提供商时，你应主要关注云计算的哪个跨领域特性？\n(A) 互操作性\n(B) 弹性\n(C) 可伸缩性\n(D) 可移植性",
        "答案": "A",
        "来源页码": 18
    },
    {
        "题号": "77",
        "英文题目与选项": "Being in a cloud environment, cloud customers lose a lot of insight and knowledge as to how their data is stored and their systems are deployed.\nWhich concept from the ISO/IEC cloud standards relates to the necessity of the cloud provider to inform the cloud customer on these issues?\n(A) Disclosure\n(B) Transparency\n(C) Openness\n(D) Documentation",
        "中文题目与选项": "处于云环境中时，云客户会失去关于其数据存储方式和系统部署方式的很多了解。\n根据 ISO/IEC 云标准，哪个概念与云服务提供商有义务向云客户告知这些问题相关？\n(A) 信息披露\n(B) 透明度\n(C) 开放性\n(D) 文档化",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "78",
        "英文题目与选项": "Every security program and process should have which of the following?\n(A) Severe penalties\n(B) Multifactor authentication\n(C) Foundational policy\n(D) Homomorphic encryption",
        "中文题目与选项": "每个安全计划和过程都应该具备以下哪个要素？\n(A) 严厉的处罚\n(B) 多因素认证\n(C) 基础性政策\n(D) 同态加密",
        "答案": "C",
        "来源页码": 18
    },
    {
        "题号": "79",
        "英文题目与选项": "Which of the following terms is NOT a commonly used category of risk acceptance?\n(A) Moderate\n(B) Critical\n(C) Minimal\n(D) Accepted",
        "中文题目与选项": "以下哪个术语不是常用的风险接受类别？\n(A) 中等\n(B) 严重\n(C) 最小\n(D) 接受",
        "答案": "D",
        "来源页码": 19
    },
    {
        "题号": "80",
        "英文题目与选项": "Whereas a contract articulates overall priorities and requirements for a business relationship, which artifact enumerates specific compliance requirements, metrics, and response times?\n(A) Service level agreement\n(B) Service level contract\n(C) Service compliance contract\n(D) Service level amendment",
        "中文题目与选项": "合同规定了业务关系的总体优先事项和要求，那么哪种文件会列出具体的合规要求、指标和响应时间？\n(A) 服务级别协议 (SLA)\n(B) 服务级别合同\n(C) 服务合规合同\n(D) 服务级别修订",
        "答案": "A",
        "来源页码": 19
    },
    {
        "题号": "81",
        "英文题目与选项": "Which of the following is the primary purpose of an SOC 3 report?\n(A) HIPAA compliance\n(B) Absolute assurances\n(C) Seal of approval\n(D) Compliance with PCI/DSS",
        "中文题目与选项": "以下哪项是 SOC 3 报告的主要目的？\n(A) 符合 HIPAA 规范\n(B) 提供绝对保证\n(C) 认可印章（证明标志）\n(D) 符合 PCI/DSS 要求",
        "答案": "C",
        "来源页码": 19
    },
    {
        "题号": "82",
        "英文题目与选项": "Which of the following best describes a sandbox?\n(A) An isolated space where untested code and experimentation can safely occur separate from the production environment.\n(B) A space where you can safely execute malicious code to see what it does.\n(C) An isolated space where transactions are protected from malicious software.\n(D) An isolated space where untested code and experimentation can safely occur within the production environment.",
        "中文题目与选项": "以下哪项最能描述沙箱（sandbox）？\n(A) 一个与生产环境隔离的空间，用于安全地执行未经测试的代码和实验。\n(B) 一个可以安全地执行恶意代码以观察其行为的空间。\n(C) 一个隔离的空间，用于保护交易免受恶意软件的影响。\n(D) 一个在生产环境中进行未经测试的代码和实验的安全隔离空间。",
        "答案": "A",
        "来源页码": 19
    },
    {
        "题号": "83",
        "英文题目与选项": "What is a serious complication an organization faces from the compliance perspective with international operations?\n(A) Multiple jurisdictions\n(B) Different certifications\n(C) Different operational procedures\n(D) Different capabilities",
        "中文题目与选项": "在国际运营的合规角度上，组织面临的一个严重复杂问题是什么？\n(A) 多重司法管辖区\n(B) 不同的认证\n(C) 不同的操作流程\n(D) 不同的能力",
        "答案": "A",
        "来源页码": 20
    },
    {
        "题号": "84",
        "英文题目与选项": "Which of the following is considered an internal redundancy for a data center?\n(A) Power feeds\n(B) Chillers\n(C) Network circuits\n(D) Generators",
        "中文题目与选项": "以下哪一项被认为是数据中心的内部冗余？\n(A) 电源馈线\n(B) 冷却装置\n(C) 网络电路\n(D) 发电机",
        "答案": "B",
        "来源页码": 20
    },
    {
        "题号": "85",
        "英文题目与选项": "With finite resources available within a cloud, even the largest cloud providers will at times need to determine which customers will receive additional resources first. What is the term associated with this determination?\n(A) Weighting\n(B) Prioritization\n(C) Shares\n(D) Scoring",
        "中文题目与选项": "在云环境中资源有限的情况下，即使是最大的云服务提供商也有时需要确定哪些客户将优先获得额外资源。与这种决策过程相关的术语是什么？\n(A) 权重分配\n(B) 优先级划分\n(C) 份额（Shares）\n(D) 评分（Scoring）",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "86",
        "英文题目与选项": "An SLA contains the official requirements for contract performance and satisfaction between the cloud provider and cloud customer. Which of the following would NOT be a component with measurable metrics and requirements as part of an SLA?\n(A) Network\n(B) Users\n(C) Memory\n(D) CPU",
        "中文题目与选项": "服务级别协议（SLA）包含云服务提供商与云客户之间合同履行和满意度的正式要求。以下哪一项通常不会作为 SLA 中可度量的指标和要求组成部分？\n(A) 网络\n(B) 用户\n(C) 内存\n(D) CPU",
        "答案": "B",
        "来源页码": 20
    },
    {
        "题号": "87",
        "英文题目与选项": "Which of the following systems is used to employ a variety of different techniques to discover and alert on threats and potential threats to systems and networks?\n(A) IDS\n(B) IPS\n(C) Firewall\n(D) WAF",
        "中文题目与选项": "以下哪种系统用于采用多种不同的技术来发现并警报系统和网络中的威胁和潜在威胁？\n(A) 入侵检测系统 (IDS)\n(B) 入侵防御系统 (IPS)\n(C) 防火墙\n(D) Web 应用防火墙 (WAF)",
        "答案": "A",
        "来源页码": 21
    },
    {
        "题号": "88",
        "英文题目与选项": "A DLP solution/implementation has three main components. Which of the following is NOT one of the three main components?\n(A) Monitoring\n(B) Enforcement\n(C) Auditing\n(D) Discovery and classification",
        "中文题目与选项": "DLP（数据防泄露）解决方案/实现具有三个主要组成部分。以下哪一项不是这三个主要组成部分之一？\n(A) 监控\n(B) 执行\n(C) 审计\n(D) 发现与分类",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "89",
        "英文题目与选项": "Which cloud deployment model is MOST likely to offer free or very cheap services to users?\n(A) Hybrid\n(B) Community\n(C) Public\n(D) Private",
        "中文题目与选项": "以下哪种云部署模型最有可能向用户提供免费或非常廉价的服务？\n(A) 混合云\n(B) 社区云\n(C) 公有云\n(D) 私有云",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "90",
        "英文题目与选项": "Where is an XML firewall most commonly and effectively deployed in the environment?\n(A) Between the application and data layers\n(B) Between the presentation and application layers\n(C) Between the IPS and firewall\n(D) Between the firewall and application server",
        "中文题目与选项": "在环境中，XML 防火墙最常见且最有效的部署位置是哪里？\n(A) 位于应用层和数据层之间\n(B) 位于表示层和应用层之间\n(C) 位于入侵防御系统 (IPS) 和防火墙之间\n(D) 位于防火墙与应用服务器之间",
        "答案": "D",
        "来源页码": 21
    },
    {
        "题号": "91",
        "英文题目与选项": "Which cloud storage type is typically used to house virtual machine images that are used throughout the environment?\n(A) Structured\n(B) Unstructured\n(C) Volume\n(D) Object",
        "中文题目与选项": "哪种云存储类型通常用于存放在整个环境中使用的虚拟机镜像？\n(A) 结构化存储\n(B) 非结构化存储\n(C) 卷存储\n(D) 对象存储",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "92",
        "英文题目与选项": "In order to prevent cloud customers from potentially consuming enormous amounts of resources within a cloud environment and thus having a negative impact on other customers, what concept is commonly used by a cloud provider?\n(A) Limit\n(B) Cap\n(C) Throttle\n(D) Reservation",
        "中文题目与选项": "为了防止云客户在云环境中可能消耗大量资源，从而对其他客户产生负面影响，云服务提供商通常使用哪种概念？\n(A) 限制\n(B) 上限\n(C) 节流\n(D) 预留",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "93",
        "英文题目与选项": "If a key feature of cloud computing that your organization desires is the ability to scale and expand without limit or concern about available resources, which cloud deployment model would you MOST likely be considering?\n(A) Public\n(B) Hybrid\n(C) Private\n(D) Community",
        "中文题目与选项": "如果贵组织希望云计算的关键特征是能够无限制地扩展和扩容，而不必担心可用资源，您最可能考虑哪种云部署模型？\n(A) 公有云\n(B) 混合云\n(C) 私有云\n(D) 社区云",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "94",
        "英文题目与选项": "Within a federated identity system, which of the following would you be MOST likely to use for sending information for consumption by a relying party?\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "中文题目与选项": "在一个联合身份系统中，以下哪种方式最常用于向信赖方发送可供其使用的信息？\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "95",
        "英文题目与选项": "Which data state would be most likely to use digital signatures as a security protection mechanism?\n(A) Data in use\n(B) Data in transit\n(C) Archived\n(D) Data at rest",
        "中文题目与选项": "哪种数据状态最有可能使用数字签名作为安全保护机制？\n(A) 使用中的数据\n(B) 传输中的数据\n(C) 归档的数据\n(D) 静止的数据",
        "答案": "B",
        "来源页码": 23
    },
    {
        "题号": "96",
        "英文题目与选项": "With software-defined networking (SDN), which two types of network operations are segregated to allow for granularity and delegation of administrative access and functions?\n(A) Filtering and forwarding\n(B) Filtering and firewalling\n(C) Firewalling and forwarding\n(D) Forwarding and protocol",
        "中文题目与选项": "在软件定义网络（SDN）中，为了实现细粒度和管理访问权限的委派，哪两种网络操作被分离？\n(A) 过滤和转发\n(B) 过滤和防火墙\n(C) 防火墙和转发\n(D) 转发和协议",
        "答案": "A",
        "来源页码": 23
    },
    {
        "题号": "97",
        "英文题目与选项": "DNSSEC was designed to add a layer of security to the DNS protocol. Which type of attack was the DNSSEC extension designed to mitigate?\n(A) Account hijacking\n(B) Snooping\n(C) Spoofing\n(D) Data exposure",
        "中文题目与选项": "DNSSEC旨在为DNS协议增加一层安全保护。DNSSEC扩展设计是为了缓解哪种类型的攻击？\n(A) 账户劫持\n(B) 窥探\n(C) 欺骗攻击\n(D) 数据泄露",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "98",
        "英文题目与选项": "Which of the following actions will NOT make data part of the create phase of the cloud data lifecycle?\n(A) Modify data\n(B) Modify metadata\n(C) New data\n(D) Import data",
        "中文题目与选项": "以下哪项操作不会使数据成为云数据生命周期创建阶段的一部分？\n(A) 修改数据\n(B) 修改元数据\n(C) 新数据\n(D) 导入数据",
        "答案": "B",
        "来源页码": 23
    },
    {
        "题号": "99",
        "英文题目与选项": "Which cloud storage type requires special consideration on the part of the cloud customer to ensure they do not program themselves into a vendor lock-in situation?\n(A) Unstructured\n(B) Object\n(C) Volume\n(D) Structured",
        "中文题目与选项": "哪种云存储类型需要云客户特别注意，以确保他们不会在编程时陷入供应商锁定的情况？\n(A) 非结构化\n(B) 对象\n(C) 卷\n(D) 结构化",
        "答案": "D",
        "来源页码": 24
    },
    {
        "题号": "100",
        "英文题目与选项": "Most APIs will support a variety of different data formats or structures. However, the SOAP API will only support which one of the following data formats?\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "中文题目与选项": "大多数 API 支持多种不同的数据格式或结构。然而，SOAP API 仅支持以下哪种数据格式？\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "答案": "A",
        "来源页码": 24
    },
    {
        "题号": "101",
        "英文题目与选项": "Which data state would be most likely to use TLS as a protection mechanism?\n(A) Data in use\n(B) Data at rest\n(C) Archived\n(D) Data in transit",
        "中文题目与选项": "以下哪种数据状态最有可能使用 TLS 作为保护机制？\n(A) 使用中的数据\n(B) 静态数据\n(C) 存档数据\n(D) 传输中的数据",
        "答案": "D",
        "来源页码": 24
    },
    {
        "题号": "102",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "以下哪一个不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 24
    },
    {
        "题号": "103",
        "英文题目与选项": "With IaaS, what is responsible for handling the security and control over the volume storage space?\n(A) Management plane\n(B) Operating system\n(C) Application\n(D) Hypervisor",
        "中文题目与选项": "在 IaaS 模型中，哪一个组件负责处理卷存储空间的安全和控制？\n(A) 管理平面\n(B) 操作系统\n(C) 应用程序\n(D) 虚拟机管理程序（Hypervisor）",
        "答案": "B",
        "来源页码": 25
    },
    {
        "题号": "104",
        "英文题目与选项": "Which one of the following threat types to applications and services involves the sending of requests that are invalid and manipulated through a user's client to execute commands on the application under the user's own credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种对应用程序和服务的威胁类型涉及通过用户客户端发送经过篡改的无效请求，以在应用程序中使用用户自己的凭据执行命令？\n(A) 注入攻击\n(B) 缺少函数级访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "D",
        "来源页码": 25
    },
    {
        "题号": "105",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data in use?\n(A) Application server\n(B) Database server\n(C) Network perimeter\n(D) User’s client",
        "中文题目与选项": "当用于监控使用中的数据时，DLP（数据泄露防护）解决方案通常安装在哪里？\n(A) 应用服务器\n(B) 数据库服务器\n(C) 网络边界\n(D) 用户终端",
        "答案": "D",
        "来源页码": 25
    },
    {
        "题号": "106",
        "英文题目与选项": "Three central concepts define what type of data and information an organization is responsible for pertaining to eDiscovery.\nWhich of the following are the three components that comprise required disclosure?\n(A) Possession, ownership, control\n(B) Ownership, use, creation\n(C) Control, custody, use\n(D) Possession, custody, control",
        "中文题目与选项": "针对电子证据发现（eDiscovery），有三个核心概念定义了一个组织所需承担的数据和信息责任。\n以下哪项是构成“必须披露”要求的三个要素？\n(A) 占有、所有权、控制\n(B) 所有权、使用、创建\n(C) 控制、保管、使用\n(D) 占有、保管、控制",
        "答案": "D",
        "来源页码": 26
    },
    {
        "题号": "107",
        "英文题目与选项": "Many different common threats exist against web-exposed services and applications. One attack involves attempting to leverage input fields to execute queries in a nested fashion that is unintended by the developers.\nWhat type of attack is this?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "许多常见威胁针对开放在网络上的服务和应用程序存在。其中一种攻击尝试利用输入字段执行开发者未预期到的嵌套查询。\n这种攻击类型是什么？\n(A) 注入攻击\n(B) 缺失功能级访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "A",
        "来源页码": 26
    },
    {
        "题号": "108",
        "英文题目与选项": "Which of the following threat types involves the sending of invalid and manipulated requests through a user's client to execute commands on the application under their own credentials?\n(A) Injection\n(B) Cross-site request forgery\n(C) Missing function-level access control\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种威胁类型涉及通过用户的客户端发送无效或被操纵的请求，在应用程序中以该用户的身份执行命令？\n(A) 注入攻击\n(B) 跨站请求伪造\n(C) 缺失功能级访问控制\n(D) 跨站脚本攻击",
        "答案": "B",
        "来源页码": 26
    },
    {
        "题号": "109",
        "英文题目与选项": "With a cloud service category where the cloud customer is responsible for deploying all services, systems, and components needed for their applications, which of the following storage types are MOST likely to be available to them?\n(A) Structured and hierarchical\n(B) Volume and object\n(C) Volume and database\n(D) Structured and unstructured",
        "中文题目与选项": "在一种云服务类别中，云客户需要自行部署其应用所需的全部服务、系统和组件，以下哪种存储类型最有可能可供他们使用？\n(A) 结构化和分层存储\n(B) 卷存储和对象存储\n(C) 卷存储和数据库存储\n(D) 结构化和非结构化存储",
        "答案": "B",
        "来源页码": 26
    },
    {
        "题号": "110",
        "英文题目与选项": "Data center and operations design traditionally takes a tiered, topological approach.\nWhich of the following standards is focused on that approach and is prevalently used throughout the industry?\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "中文题目与选项": "数据中心和运营设计传统上采用分层的拓扑方法。\n以下哪一个标准专注于这种方法，并在整个行业中广泛应用？\n(A) 国际数据中心管理局 (IDCA)\n(B) 美国国家消防协会 (NFPA)\n(C) 建筑行业咨询服务国际组织 (BICSI)\n(D) Uptime Institute",
        "答案": "D",
        "来源页码": 27
    },
    {
        "题号": "111",
        "英文题目与选项": "When dealing with PII, which category pertains to those requirements that can carry legal sanctions or penalties for failure to adequately safeguard the data and address compliance requirements?\n(A) Contractual\n(B) Jurisdictional\n(C) Regulated\n(D) Legal",
        "中文题目与选项": "在处理个人可识别信息 (PII) 时，以下哪一类别涉及在未能充分保护数据和满足合规要求时可能受到法律制裁或处罚的要求？\n(A) 合同性\n(B) 司法管辖性\n(C) 受监管的\n(D) 法律性",
        "答案": "C",
        "来源页码": 27
    },
    {
        "题号": "112",
        "英文题目与选项": "Which aspect of cloud computing pertains to cloud customers only paying for the resources and services they actually use?\n(A) Metered service\n(B) Measured billing\n(C) Metered billing\n(D) Measured service",
        "中文题目与选项": "云计算的哪个方面与云客户仅为实际使用的资源和服务付费有关？\n(A) 计量服务\n(B) 测量计费\n(C) 计量计费\n(D) 可度量服务",
        "答案": "D",
        "来源页码": 27
    },
    {
        "题号": "113",
        "英文题目与选项": "When an API is being leveraged, it will encapsulate its data for transmission back to the requesting party or service.\nWhat is the data encapsulation used with the SOAP protocol referred to as?\n(A) Packet\n(B) Payload\n(C) Object\n(D) Envelope",
        "中文题目与选项": "当使用 API 时，它会封装数据以传输回请求方或服务。\nSOAP 协议中用于数据封装的术语是什么？\n(A) 数据包\n(B) 载荷\n(C) 对象\n(D) 信封",
        "答案": "D",
        "来源页码": 27
    },
    {
        "题号": "114",
        "英文题目与选项": "Which of the following terms refers to the application of scientific methods and protocols to the investigation of crimes?\n(A) Scientific\n(B) Investigative\n(C) Methodological\n(D) Forensics",
        "中文题目与选项": "以下哪个术语是指将科学方法和程序应用于犯罪调查？\n(A) 科学的\n(B) 调查的\n(C) 方法的\n(D) 取证的",
        "答案": "D",
        "来源页码": 28
    },
    {
        "题号": "115",
        "英文题目与选项": "ISO/IEC has established international standards for many aspects of computing and for any processes or procedures related to information technology.\nWhich ISO/IEC standard has been established to provide a framework for handling eDiscovery processes?\n(A) ISO/IEC 27001\n(B) ISO/IEC 27002\n(C) ISO/IEC 27040\n(D) ISO/IEC 27050",
        "中文题目与选项": "ISO/IEC 已经针对计算的许多方面以及与信息技术相关的任何过程或程序建立了国际标准。\n以下哪个 ISO/IEC 标准被制定用于为处理电子发现（eDiscovery）流程提供框架？\n(A) ISO/IEC 27001\n(B) ISO/IEC 27002\n(C) ISO/IEC 27040\n(D) ISO/IEC 27050",
        "答案": "D",
        "来源页码": 28
    },
    {
        "题号": "116",
        "英文题目与选项": "Humidity levels for a data center are a prime concern for maintaining electrical and computing resources properly as well as ensuring that conditions are optimal for top performance.\nWhich of the following is the optimal humidity level, as established by ASHRAE?\n(A) 20 to 40 percent relative humidity\n(B) 50 to 75 percent relative humidity\n(C) 40 to 60 percent relative humidity\n(D) 30 to 50 percent relative humidity",
        "中文题目与选项": "数据中心的湿度水平是保持电气和计算资源正常运行并确保最佳性能条件的主要关注点。\n根据 ASHRAE 的规定，以下哪一项是最佳相对湿度范围？\n(A) 20% 到 40% 相对湿度\n(B) 50% 到 75% 相对湿度\n(C) 40% 到 60% 相对湿度\n(D) 30% 到 50% 相对湿度",
        "答案": "C",
        "来源页码": 28
    },
    {
        "题号": "117",
        "英文题目与选项": "Which of the following is NOT one of the main intended goals of a DLP solution?\n(A) Showing due diligence\n(B) Preventing malicious insiders\n(C) Regulatory compliance\n(D) Managing and minimizing risk",
        "中文题目与选项": "以下哪一项不是数据泄露防护（DLP）解决方案的主要目标之一？\n(A) 展示尽职调查\n(B) 防止恶意内部人员\n(C) 符合监管合规要求\n(D) 管理和最小化风险",
        "答案": "B",
        "来源页码": 28
    },
    {
        "题号": "118",
        "英文题目与选项": "Which of the following tasks within a SaaS environment would NOT be something the cloud customer would be responsible for?\n(A) Authentication mechanism\n(B) Branding\n(C) Training\n(D) User access",
        "中文题目与选项": "在 SaaS 环境中，以下哪项任务不是云客户的责任？\n(A) 认证机制\n(B) 品牌定制\n(C) 培训\n(D) 用户访问",
        "答案": "A",
        "来源页码": 28
    },
    {
        "题号": "119",
        "英文题目与选项": "Implementing baselines on systems would take an enormous amount of time and resources if the staff had to apply them to each server, and over time, it would be almost impossible to keep all the systems in sync on an ongoing basis.\nWhich of the following is NOT a package that can be used for implementing and maintaining baselines across an enterprise?\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "中文题目与选项": "在系统上实施基线需要大量的时间和资源，如果工作人员必须将其应用到每一台服务器上，那么随着时间的推移，几乎不可能使所有系统保持一致。\n以下哪一个不是可用于在整个企业中实施和维护基线的软件包？\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "答案": "D",
        "来源页码": 29
    },
    {
        "题号": "120",
        "英文题目与选项": "With an API, various features and optimizations are highly desirable to scalability, reliability, and security. What does the REST API support that the SOAP API does NOT support?\n(A) Acceleration\n(B) Caching\n(C) Redundancy\n(D) Encryption",
        "中文题目与选项": "在 API 的使用中，为了提高可扩展性、可靠性和安全性，各种功能和优化都是非常理想的。REST API 支持哪些 SOAP API 不支持的功能？\n(A) 加速\n(B) 缓存\n(C) 冗余\n(D) 加密",
        "答案": "B",
        "来源页码": 29
    },
    {
        "题号": "121",
        "英文题目与选项": "Many tools and technologies are available for securing or monitoring data in transit within a data center, whether it is a traditional data center or a cloud.\nWhich of the following is NOT a technology for securing data in transit?\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "中文题目与选项": "在数据中心（无论是传统数据中心还是云环境）中，有许多可用于保护或监控传输中数据的工具和技术。\n以下哪一项不是用于保护传输中数据的技术？\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "答案": "C",
        "来源页码": 29
    },
    {
        "题号": "122",
        "英文题目与选项": "Configurations and policies for a system can come from a variety of sources and take a variety of formats. Which concept pertains to the application of a set of configurations and policies that is applied to all systems or a class of systems?\n(A) Hardening\n(B) Leveling\n(C) Baselines\n(D) Standards",
        "中文题目与选项": "系统的配置和策略可以来自多种来源，并以多种格式存在。下列哪个概念涉及应用于所有系统或某类系统的一组配置和策略？\n(A) 加固\n(B) 分层\n(C) 基线\n(D) 标准",
        "答案": "C",
        "来源页码": 29
    },
    {
        "题号": "123",
        "英文题目与选项": "Which phase of the cloud data lifecycle would be the MOST appropriate for the use of DLP technologies to protect the data?\n(A) Use\n(B) Store\n(C) Share\n(D) Create",
        "中文题目与选项": "云数据生命周期的哪个阶段最适合使用 DLP 技术来保护数据？\n(A) 使用\n(B) 存储\n(C) 共享\n(D) 创建",
        "答案": "C",
        "来源页码": 30
    },
    {
        "题号": "124",
        "英文题目与选项": "From the perspective of compliance, what is the most important consideration when it comes to data center location?\n(A) Natural disasters\n(B) Utility access\n(C) Jurisdiction\n(D) Personnel access",
        "中文题目与选项": "从合规性的角度来看，选择数据中心位置时最重要的考虑因素是什么？\n(A) 自然灾害\n(B) 公用设施的接入\n(C) 司法管辖区\n(D) 人员访问",
        "答案": "C",
        "来源页码": 30
    },
    {
        "题号": "125",
        "英文题目与选项": "Which of the following aspects of cloud computing would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?\n(A) Regulation\n(B) Multitenancy\n(C) Virtualization\n(D) Resource pooling",
        "中文题目与选项": "以下哪一项云计算特性最有可能导致云服务提供商不愿意满足特定的认证要求？\n(A) 法规\n(B) 多租户\n(C) 虚拟化\n(D) 资源池化",
        "答案": "B",
        "来源页码": 30
    },
    {
        "题号": "126",
        "英文题目与选项": "Which of the following is a widely used tool for code development, branching, and collaboration?\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "中文题目与选项": "以下哪一个是广泛用于代码开发、分支和协作的工具？\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "答案": "A",
        "来源页码": 30
    },
    {
        "题号": "127",
        "英文题目与选项": "Which OSI layer does IPsec operate at?\n(A) Network\n(B) Transport\n(C) Application\n(D) Presentation",
        "中文题目与选项": "IPsec 运行在 OSI 模型的哪一层？\n(A) 网络层\n(B) 传输层\n(C) 应用层\n(D) 表示层",
        "答案": "A",
        "来源页码": 31
    },
    {
        "题号": "128",
        "英文题目与选项": "What changes are necessary to application code in order to implement DNSSEC?\n(A) Adding encryption modules\n(B) Implementing certificate validations\n(C) Additional DNS lookups\n(D) No changes are needed.",
        "中文题目与选项": "为实现 DNSSEC，需要对应用程序代码进行哪些更改？\n(A) 添加加密模块\n(B) 实现证书验证\n(C) 增加 DNS 查询\n(D) 不需要任何更改",
        "答案": "D",
        "来源页码": 31
    },
    {
        "题号": "129",
        "英文题目与选项": "What does the \"SOC\" acronym refer to with audit reports?\n(A) Service Origin Confidentiality\n(B) System Organization Confidentiality\n(C) Service Organizational Control\n(D) System Organization Control",
        "中文题目与选项": "在审计报告中，“SOC” 这一缩写代表什么？\n(A) 服务来源机密性\n(B) 系统组织机密性\n(C) 服务组织控制\n(D) 系统组织控制",
        "答案": "C",
        "来源页码": 31
    },
    {
        "题号": "130",
        "英文题目与选项": "What concept does the \"I\" represent with the STRIDE threat model?\n(A) Integrity\n(B) Information disclosure\n(C) IT security\n(D) Insider threat",
        "中文题目与选项": "在 STRIDE 威胁模型中，字母 “I” 表示哪个概念？\n(A) 完整性\n(B) 信息泄露\n(C) 信息技术安全\n(D) 内部威胁",
        "答案": "B",
        "来源页码": 31
    },
    {
        "题号": "131",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the requirements placed on a system or application by law, policy, or requirements from standards?\n(A) Regulatory requirements\n(B) Auditability\n(C) Service-level agreements\n(D) Governance",
        "中文题目与选项": "下列哪一项云计算的跨领域要素与法律、政策或标准对系统或应用设定的要求有关？\n(A) 法规要求\n(B) 可审计性\n(C) 服务级别协议\n(D) 治理",
        "答案": "A",
        "来源页码": 31
    },
    {
        "题号": "132",
        "英文题目与选项": "Which type of audit report is considered a \"restricted use\" report for its intended audience?\n(A) SAS-70\n(B) SSAE-16\n(C) SOC Type 1\n(D) SOC Type 2",
        "中文题目与选项": "以下哪种类型的审计报告被认为是针对特定受众的“限制使用”报告？\n(A) SAS-70\n(B) SSAE-16\n(C) SOC 类型 1\n(D) SOC 类型 2",
        "答案": "",
        "来源页码": 31
    },
    {
        "题号": "133",
        "英文题目与选项": "Which approach is typically the most efficient method to use for data discovery?\n(A) Metadata\n(B) Content analysis\n(C) Labels\n(D) ACLs",
        "中文题目与选项": "哪种方法通常是进行数据发现时最有效的方式？\n(A) 元数据\n(B) 内容分析\n(C) 标签\n(D) 访问控制列表（ACLs）",
        "答案": "A",
        "来源页码": 32
    },
    {
        "题号": "134",
        "英文题目与选项": "What concept does the \"T\" represent in the STRIDE threat model?\n(A) TLS\n(B) Testing\n(C) Tampering with data\n(D) Transport",
        "中文题目与选项": "在 STRIDE 威胁模型中，“T”代表的概念是什么？\n(A) 传输层安全协议（TLS）\n(B) 测试\n(C) 数据篡改\n(D) 传输",
        "答案": "C",
        "来源页码": 32
    },
    {
        "题号": "135",
        "英文题目与选项": "Which of the following is a commonly used tool for maintaining system configurations?\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "中文题目与选项": "以下哪一个是用于维护系统配置的常用工具？\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "答案": "C",
        "来源页码": 32
    },
    {
        "题号": "136",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?\n(A) Platform\n(B) Infrastructure\n(C) Governance\n(D) Application",
        "中文题目与选项": "无论使用哪种云模型，下列哪项始终是云客户的唯一责任？\n(A) 平台\n(B) 基础设施\n(C) 治理\n(D) 应用程序",
        "答案": "C",
        "来源页码": 32
    },
    {
        "题号": "137",
        "英文题目与选项": "Which of the following is NOT a function performed by the record protocol of TLS?\n(A) Encryption\n(B) Acceleration\n(C) Authentication\n(D) Compression",
        "中文题目与选项": "以下哪项不是 TLS 记录协议所执行的功能？\n(A) 加密\n(B) 加速\n(C) 认证\n(D) 压缩",
        "答案": "B",
        "来源页码": 32
    },
    {
        "题号": "138",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the requirements placed on the cloud provider by the cloud customer for minimum performance standards and requirements that must be met?\n(A) Regulatory requirements\n(B) SLAs\n(C) Auditability\n(D) Governance",
        "中文题目与选项": "以下哪一项云计算跨领域方面与云客户对云服务提供商提出的最低性能标准和必须满足的要求有关？\n(A) 合规要求\n(B) 服务级别协议（SLA）\n(C) 可审计性\n(D) 治理",
        "答案": "B",
        "来源页码": 33
    },
    {
        "题号": "139",
        "英文题目与选项": "Which of the following is NOT a factor that is part of a firewall configuration?\n(A) Encryption\n(B) Port\n(C) Protocol\n(D) Source IP",
        "中文题目与选项": "以下哪一项不是防火墙配置的一部分？\n(A) 加密\n(B) 端口\n(C) 协议\n(D) 源 IP 地址",
        "答案": "A",
        "来源页码": 33
    },
    {
        "题号": "140",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the assigning of jobs, tasks, and roles, as well as to ensuring they are successful and properly performed?\n(A) Service-level agreements\n(B) Governance\n(C) Regulatory requirements\n(D) Auditability",
        "中文题目与选项": "以下哪一项云计算跨领域方面与工作、任务和角色的分配以及确保它们被成功且正确地执行有关？\n(A) 服务级别协议（SLA）\n(B) 治理\n(C) 合规要求\n(D) 可审计性",
        "答案": "B",
        "来源页码": 33
    },
    {
        "题号": "141",
        "英文题目与选项": "Other than cost savings realized due to measured service, what is another facet of cloud computing that will typically save substantial costs in time and money for an organization in the event of a disaster?\n(A) Broad network access\n(B) Interoperability\n(C) Resource pooling\n(D) Portability",
        "中文题目与选项": "除了由于可计量服务而实现的成本节约外，在灾难发生时，云计算的哪一特性还能为组织节省大量时间和资金成本？\n(A) 广泛的网络访问\n(B) 互操作性\n(C) 资源池化\n(D) 可移植性",
        "答案": "A",
        "来源页码": 33
    },
    {
        "题号": "142",
        "英文题目与选项": "What provides the information to an application to make decisions about the authorization level appropriate when granting access?\n(A) User\n(B) Relying party\n(C) Federation\n(D) Identity Provider",
        "中文题目与选项": "在授予访问权限时，哪个实体向应用程序提供信息以帮助其做出相应授权级别的决策？\n(A) 用户\n(B) 依赖方\n(C) 联邦\n(D) 身份提供者",
        "答案": "D",
        "来源页码": 33
    },
    {
        "题号": "143",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to easily move services and applications between different cloud providers?\n(A) Reversibility\n(B) Availability\n(C) Portability\n(D) Interoperability",
        "中文题目与选项": "以下哪项云的跨领域特性与能够轻松地在不同云服务提供商之间迁移服务和应用有关？\n(A) 可逆性\n(B) 可用性\n(C) 可移植性\n(D) 互操作性",
        "答案": "C",
        "来源页码": 34
    },
    {
        "题号": "144",
        "英文题目与选项": "Which of the following is the MOST important requirement and guidance for testing during an audit?\n(A) Stakeholders\n(B) Shareholders\n(C) Management\n(D) Regulations",
        "中文题目与选项": "在审计过程中，以下哪项是测试中最重要的要求和指导依据？\n(A) 利益相关者\n(B) 股东\n(C) 管理层\n(D) 法规",
        "答案": "D",
        "来源页码": 34
    },
    {
        "题号": "145",
        "英文题目与选项": "Over time, what is a primary concern for data archiving?\n(A) Size of archives\n(B) Format of archives\n(C) Recoverability\n(D) Regulatory changes",
        "中文题目与选项": "随着时间推移，数据归档的主要关注点是什么？\n(A) 归档的大小\n(B) 归档的格式\n(C) 可恢复性\n(D) 法规变化",
        "答案": "C",
        "来源页码": 34
    },
    {
        "题号": "146",
        "英文题目与选项": "At which stage of the BCDR plan creation phase should security be included in discussions?\n(A) Define scope\n(B) Analyze\n(C) Assess risk\n(D) Gather requirements",
        "中文题目与选项": "在制定业务连续性与灾难恢复（BCDR）计划的哪个阶段，应当将安全性纳入讨论？\n(A) 定义范围\n(B) 分析阶段\n(C) 评估风险\n(D) 收集需求",
        "答案": "A",
        "来源页码": 34
    },
    {
        "题号": "147",
        "英文题目与选项": "What process is used within a clustered system to provide high availability and load balancing?\n(A) Dynamic balancing\n(B) Dynamic clustering\n(C) Dynamic optimization\n(D) Dynamic resource scheduling",
        "中文题目与选项": "在集群系统中，用于提供高可用性和负载均衡的过程是什么？\n(A) 动态平衡\n(B) 动态集群\n(C) 动态优化\n(D) 动态资源调度",
        "答案": "D",
        "来源页码": 34
    },
    {
        "题号": "148",
        "英文题目与选项": "Which of the following can be useful for protecting cloud customers from a denial-of-service (DoS) attack against another customer hosted in the same cloud?\n(A) Reservations\n(B) Measured service\n(C) Limits\n(D) Shares",
        "中文题目与选项": "以下哪项可用于在同一云中防止针对另一位客户的拒绝服务（DoS）攻击，以保护云客户？\n(A) 资源预留\n(B) 可计量服务\n(C) 限制\n(D) 共享",
        "答案": "A",
        "来源页码": 35
    },
    {
        "题号": "149",
        "英文题目与选项": "Which of the cloud deployment models offers the most control and input to the cloud customer as to how the overall cloud environment is implemented and configured?\n(A) Public\n(B) Community\n(C) Hybrid\n(D) Private",
        "中文题目与选项": "以下哪种云部署模型为云客户在整体云环境的实施和配置方面提供了最大的控制权和参与度？\n(A) 公有云\n(B) 社区云\n(C) 混合云\n(D) 私有云",
        "答案": "D",
        "来源页码": 35
    },
    {
        "题号": "150",
        "英文题目与选项": "Which entity requires all collection and storing of data on their citizens to be done on hardware that resides within their borders?\n(A) Russia\n(B) France\n(C) Germany\n(D) United States",
        "中文题目与选项": "以下哪个国家要求对其公民的数据收集和存储必须在其国境内的硬件上进行？\n(A) 俄罗斯\n(B) 法国\n(C) 德国\n(D) 美国",
        "答案": "A",
        "来源页码": 35
    },
    {
        "题号": "151",
        "英文题目与选项": "Which of the following is NOT one of five principles of SOC Type 2 audits?\n(A) Privacy\n(B) Processing integrity\n(C) Financial\n(D) Security",
        "中文题目与选项": "以下哪项不是 SOC Type 2 审计的五项原则之一？\n(A) 隐私\n(B) 处理完整性\n(C) 财务\n(D) 安全",
        "答案": "C",
        "来源页码": 35
    },
    {
        "题号": "152",
        "英文题目与选项": "What does static application security testing (SAST) offer as a tool to the testers?\n(A) Production system scanning\n(B) Injection attempts\n(C) Source code access\n(D) Live testing",
        "中文题目与选项": "静态应用安全测试（SAST）为测试人员提供了什么工具？\n(A) 生产系统扫描\n(B) 注入尝试\n(C) 源代码访问\n(D) 在线测试",
        "答案": "C",
        "来源页码": 35
    },
    {
        "题号": "153",
        "英文题目与选项": "What must SOAP rely on for security?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "SOAP 在安全性方面必须依赖于什么？\n(A) 加密\n(B) 令牌化\n(C) 传输层安全协议（TLS）\n(D) 安全套接字层协议（SSL）",
        "答案": "A",
        "来源页码": 36
    },
    {
        "题号": "154",
        "英文题目与选项": "Which data point that auditors always desire is very difficult to provide within a cloud environment?\n(A) Access policy\n(B) Systems architecture\n(C) Baselines\n(D) Privacy statement",
        "中文题目与选项": "在云环境中，审计人员总是希望获得但却很难提供的哪一项数据点？\n(A) 访问策略\n(B) 系统架构\n(C) 基线\n(D) 隐私声明",
        "答案": "B",
        "来源页码": 36
    },
    {
        "题号": "155",
        "英文题目与选项": "Which of the following would NOT be a reason to activate a BCDR strategy?\n(A) Staffing loss\n(B) Terrorism attack\n(C) Utility disruptions\n(D) Natural disaster",
        "中文题目与选项": "以下哪一项不是启动业务连续性与灾难恢复（BCDR）策略的原因？\n(A) 人员流失\n(B) 恐怖袭击\n(C) 公用事业中断\n(D) 自然灾害",
        "答案": "A",
        "来源页码": 36
    },
    {
        "题号": "156",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to reuse or move components of an application or service?\n(A) Availability\n(B) Interoperability\n(C) Reversibility\n(D) Portability",
        "中文题目与选项": "以下哪一个云计算的跨领域特性与复用或迁移应用或服务组件的能力有关？\n(A) 可用性\n(B) 互操作性\n(C) 可逆性\n(D) 可移植性",
        "答案": "B",
        "来源页码": 36
    },
    {
        "题号": "157",
        "英文题目与选项": "What is the minimum regularity for testing a BCDR plan to meet best practices?\n(A) Once a year\n(B) Once a month\n(C) Every six months\n(D) When the budget allows it",
        "中文题目与选项": "为了符合最佳实践，对业务连续性与灾难恢复（BCDR）计划进行测试的最小频率应是多少？\n(A) 每年一次\n(B) 每月一次\n(C) 每六个月一次\n(D) 当预算允许时",
        "答案": "A",
        "来源页码": 36
    },
    {
        "题号": "158",
        "英文题目与选项": "Which aspect of cloud computing makes data classification even more vital than in a traditional data center?\n(A) Interoperability\n(B) Virtualization\n(C) Multitenancy\n(D) Portability",
        "中文题目与选项": "云计算的哪个方面使得数据分类比传统数据中心更为重要？\n(A) 互操作性\n(B) 虚拟化\n(C) 多租户\n(D) 可移植性",
        "答案": "C",
        "来源页码": 37
    },
    {
        "题号": "159",
        "英文题目与选项": "What type of PII is controlled based on laws and carries legal penalties for noncompliance with requirements?\n(A) Contractual\n(B) Regulated\n(C) Specific\n(D) Jurisdictional",
        "中文题目与选项": "哪种类型的个人可识别信息（PII）是根据法律进行控制的，并且对不遵守要求的行为有法律惩罚？\n(A) 合同性\n(B) 法规性\n(C) 特定性\n(D) 司法辖区性",
        "答案": "B",
        "来源页码": 37
    },
    {
        "题号": "160",
        "英文题目与选项": "The most pragmatic option for data disposal in the cloud is which of the following?\n(A) Cryptoshredding\n(B) Overwriting\n(C) Cold fusion\n(D) Melting",
        "中文题目与选项": "在云环境中，数据销毁最实用的选项是以下哪一项？\n(A) 加密粉碎（Cryptoshredding）\n(B) 覆写\n(C) 冷核聚变（干扰项）\n(D) 熔毁",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "161",
        "英文题目与选项": "For optimal security, trust zones are used for network segmentation and isolation. They allow for the separation of various systems and tiers, each with its own security level.\nWhich of the following is typically used to allow administrative personnel access to trust zones?\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "中文题目与选项": "为了实现最佳安全性，信任区（Trust Zone）用于网络分段和隔离，允许不同系统和层级按各自的安全级别分离。\n以下哪项通常用于允许管理人员访问信任区？\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "答案": "C",
        "来源页码": 15
    },
    {
        "题号": "162",
        "英文题目与选项": "In addition to whatever audit results the provider shares with the customer, what other mechanism does the customer have to ensure trust in the provider's performance and duties?\n(A) HIPAA\n(B) The contract\n(C) Statutes\n(D) Security control matrix",
        "中文题目与选项": "除了提供商与客户共享的审计结果之外，客户还可以通过哪种机制来确保对提供商履行职责的信任？\n(A) HIPAA（健康保险可携性与责任法案）\n(B) 合同\n(C) 法规\n(D) 安全控制矩阵",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "163",
        "英文题目与选项": "Tokenization requires two distinct ________.\n(A) Authentication factors\n(B) Personnel\n(C) Databases\n(D) Encryption",
        "中文题目与选项": "令牌化过程需要两个不同的________。\n(A) 认证因素\n(B) 人员\n(C) 数据库\n(D) 加密",
        "答案": "C",
        "来源页码": 19
    },
    {
        "题号": "164",
        "英文题目与选项": "During which phase of the cloud data lifecycle is it possible for the classification of data to change?\n(A) Use\n(B) Archive\n(C) Create\n(D) Share",
        "中文题目与选项": "在云数据生命周期的哪个阶段，数据的分类有可能发生变化？\n(A) 使用阶段\n(B) 归档阶段\n(C) 创建阶段\n(D) 共享阶段",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "165",
        "英文题目与选项": "Which of the following roles would be responsible for managing memberships in federations and the use and integration of federated services?\n(A) Inter-cloud provider\n(B) Cloud service business manager\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪种角色负责管理联邦成员资格以及联邦服务的使用与集成？\n(A) 跨云提供商（Inter-cloud provider）\n(B) 云服务业务经理\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "A",
        "来源页码": 23
    },
    {
        "题号": "166",
        "英文题目与选项": "Which of the following threat types involves leveraging a user's browser to send untrusted data to be executed with legitimate access via the user's valid credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种威胁类型涉及利用用户的浏览器，通过用户的有效凭据以合法访问权限发送不受信任的数据并执行？\n(A) 注入攻击\n(B) 缺少功能级别访问控制\n(C) 跨站脚本攻击（XSS）\n(D) 跨站请求伪造（CSRF）",
        "答案": "D",
        "来源页码": 24
    },
    {
        "题号": "167",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data at rest?\n(A) Network firewall\n(B) Host system\n(C) Application server\n(D) Database server",
        "中文题目与选项": "当DLP（数据丢失防护）解决方案用于监控静态数据时，通常安装在哪里？\n(A) 网络防火墙\n(B) 主机系统\n(C) 应用服务器\n(D) 数据库服务器",
        "答案": "B",
        "来源页码": 25
    },
    {
        "题号": "168",
        "英文题目与选项": "Which aspect of SaaS will alleviate much of the time and energy organizations spend on compliance (specifically baselines)?\n(A) Maintenance\n(B) Licensing\n(C) Standardization\n(D) Development",
        "中文题目与选项": "SaaS 的哪个方面将大大减少组织在合规性（特别是基线方面）上花费的时间和精力？\n(A) 维护\n(B) 许可授权\n(C) 标准化\n(D) 开发",
        "答案": "C",
        "来源页码": 29
    }
]
