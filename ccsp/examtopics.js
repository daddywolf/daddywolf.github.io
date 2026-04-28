const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "Which of the following roles is responsible for creating cloud components and the testing and validation of services?\n(A) Cloud auditor\n(B) Inter-cloud provider\n(C) Cloud service broker\n(D) Cloud service developer",
        "中文题目与选项": "下列哪种角色负责创建云组件以及进行服务的测试和验证？\n(A) 云审计员\n(B) 跨云提供者\n(C) 云服务经纪人\n(D) 云服务开发人员",
        "答案": "D",
        "来源页码": 1
    },
    {
        "题号": "2",
        "英文题目与选项": "What is the best source for information about securing a physical asset's BIOS?\n(A) Security policies\n(B) Manual pages\n(C) Vendor documentation\n(D) Regulations",
        "中文题目与选项": "关于保护物理资产 BIOS 安全性的最佳信息来源是什么？\n(A) 安全策略\n(B) 手册页\n(C) 供应商文档\n(D) 法规",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "3",
        "英文题目与选项": "Which of the following is not a component of contractual PII?\n(A) Scope of processing\n(B) Value of data\n(C) Location of data\n(D) Use of subcontractors",
        "中文题目与选项": "以下哪一项不是合同规定的个人可识别信息 (PII) 的组成部分？\n(A) 处理范围\n(B) 数据价值\n(C) 数据位置\n(D) 分包商的使用",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "4",
        "英文题目与选项": "Which of the following concepts refers to a cloud customer paying only for the resources and offerings they use within a cloud environment, and only for the duration that they are consuming them?\n(A) Consumable service\n(B) Measured service\n(C) Billable service\n(D) Metered service",
        "中文题目与选项": "以下哪种概念指的是云客户只为其在云环境中实际使用的资源和服务付费，并且仅在使用期间付费？\n(A) 可消耗服务\n(B) 可测量服务\n(C) 计费服务\n(D) 计量服务",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "5",
        "英文题目与选项": "Which of the following roles involves testing, monitoring, and securing cloud services for an organization?\n(A) Cloud service integrator\n(B) Cloud service business manager\n(C) Cloud service user\n(D) Cloud service administrator",
        "中文题目与选项": "以下哪种角色负责为组织测试、监控和保护云服务？\n(A) 云服务集成商\n(B) 云服务业务经理\n(C) 云服务使用者\n(D) 云服务管理员",
        "答案": "D",
        "来源页码": 5
    },
    {
        "题号": "6",
        "英文题目与选项": "What is the only data format permitted with the SOAP API?\n(A) HTML\n(B) SAML\n(C) XSML\n(D) XML",
        "中文题目与选项": "SOAP API 唯一允许的数据格式是什么？\n(A) HTML\n(B) SAML\n(C) XSML\n(D) XML",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "7",
        "英文题目与选项": "Which data formats are most commonly used with the REST API?\n(A) JSON and SAML\n(B) XML and SAML\n(C) XML and JSON\n(D) SAML and HTML",
        "中文题目与选项": "以下哪种数据格式最常用于 REST API？\n(A) JSON 和 SAML\n(B) XML 和 SAML\n(C) XML 和 JSON\n(D) SAML 和 HTML",
        "答案": "C",
        "来源页码": 7
    },
    {
        "题号": "8",
        "英文题目与选项": "Which of the following threat types involves an application that does not validate authorization for portions of itself after the initial checks?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site request forgery\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种威胁类型涉及应用程序在初始检查之后未对自身部分再次验证授权？\n(A) 注入攻击\n(B) 缺少功能级访问控制\n(C) 跨站请求伪造\n(D) 跨站脚本攻击",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "9",
        "英文题目与选项": "Which of the following roles involves overseeing billing, purchasing, and requesting audit reports for an organization within a cloud environment?\n(A) Cloud service user\n(B) Cloud service business manager\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "在云环境中，以下哪种角色负责监督组织的计费、采购以及请求审计报告？\n(A) 云服务用户\n(B) 云服务业务经理\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "B",
        "来源页码": 9
    },
    {
        "题号": "10",
        "英文题目与选项": "What is the biggest concern with hosting a key management system outside of the cloud environment?\n(A) Confidentiality\n(B) Portability\n(C) Availability\n(D) Integrity",
        "中文题目与选项": "在云环境之外托管密钥管理系统时，最大的担忧是什么？\n(A) 机密性\n(B) 可移植性\n(C) 可用性\n(D) 完整性",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "11",
        "英文题目与选项": "Which of the following approaches would NOT be considered sufficient to meet the requirements of secure data destruction within a cloud environment?\n(A) Cryptographic erasure\n(B) Zeroing\n(C) Overwriting\n(D) Deletion",
        "中文题目与选项": "以下哪种方法不被认为足以满足云环境中安全数据销毁的要求？\n(A) 加密擦除\n(B) 归零处理\n(C) 覆盖写入\n(D) 删除",
        "答案": "D",
        "来源页码": 11
    },
    {
        "题号": "12",
        "英文题目与选项": "Which of the following cloud aspects complicates eDiscovery?\n(A) Resource pooling\n(B) On-demand self-service\n(C) Multitenancy\n(D) Measured service",
        "中文题目与选项": "以下哪项云计算特性会使电子取证（eDiscovery）更加复杂？\n(A) 资源池化\n(B) 按需自助服务\n(C) 多租户\n(D) 计量服务",
        "答案": "C",
        "来源页码": 12
    },
    {
        "题号": "13",
        "英文题目与选项": "What does the management plane typically utilize to perform administrative functions on the hypervisors that it has access to?\n(A) Scripts\n(B) RDP\n(C) APIs\n(D) XML",
        "中文题目与选项": "管理平面通常使用什么来在其可访问的虚拟机管理程序上执行管理功能？\n(A) 脚本\n(B) 远程桌面协议（RDP）\n(C) 应用程序接口（API）\n(D) 可扩展标记语言（XML）",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "14",
        "英文题目与选项": "What is a serious complication an organization faces from the perspective of compliance with international operations?\n(A) Different certifications\n(B) Multiple jurisdictions\n(C) Different capabilities\n(D) Different operational procedures",
        "中文题目与选项": "从国际运营合规性的角度来看，组织面临的一个严重复杂因素是什么？\n(A) 不同的认证\n(B) 多个司法管辖区\n(C) 不同的能力\n(D) 不同的操作程序",
        "答案": "B",
        "来源页码": 14
    },
    {
        "题号": "15",
        "英文题目与选项": "Which networking concept in a cloud environment allows for network segregation and isolation of IP spaces?\n(A) PLAN\n(B) WAN\n(C) LAN\n(D) VLAN",
        "中文题目与选项": "在云环境中，哪个网络概念可以实现网络的分隔和 IP 空间的隔离？\n(A) 物理局域网（PLAN）\n(B) 广域网（WAN）\n(C) 局域网（LAN）\n(D) 虚拟局域网（VLAN）",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "16",
        "英文题目与选项": "Which of the following standards primarily pertains to cabling designs and setups in a data center?\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "中文题目与选项": "以下哪一项标准主要涉及数据中心的布线设计和安装？\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "答案": "B",
        "来源页码": 16
    },
    {
        "题号": "17",
        "英文题目与选项": "Which of the following publishes the most commonly used standard for data center design in regard to tiers and topologies?\n(A) IDCA\n(B) Uptime Institute\n(C) NFPA\n(D) BICSI",
        "中文题目与选项": "以下哪个机构发布了关于数据中心分级和拓扑结构的最常用设计标准？\n(A) 国际数据中心管理协会（IDCA）\n(B) Uptime研究院\n(C) 美国国家消防协会（NFPA）\n(D) 建筑业通信系统协会（BICSI）",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "18",
        "英文题目与选项": "What type of segregation and separation of resources is needed within a cloud environment for multitenancy purposes versus a traditional data center model?\n(A) Virtual\n(B) Security\n(C) Physical\n(D) Logical",
        "中文题目与选项": "在云环境中，为了实现多租户，与传统数据中心模型相比，需要哪种类型的资源隔离和分离？\n(A) 虚拟的\n(B) 安全的\n(C) 物理的\n(D) 逻辑的",
        "答案": "D",
        "来源页码": 18
    },
    {
        "题号": "19",
        "英文题目与选项": "Which United States law is focused on data related to health records and privacy?\n(A) Safe Harbor\n(B) SOX\n(C) GLBA\n(D) HIPAA",
        "中文题目与选项": "以下哪一项美国法律专注于与健康记录和隐私相关的数据？\n(A) 安全港法案\n(B) 萨班斯-奥克斯利法案（SOX）\n(C) 格雷姆-里奇-布莱利法案（GLBA）\n(D) 健康保险可携性和责任法案（HIPAA）",
        "答案": "D",
        "来源页码": 19
    },
    {
        "题号": "20",
        "英文题目与选项": "What is used for local, physical access to hardware within a data center?\n(A) SSH\n(B) KVM\n(C) VPN\n(D) RDP",
        "中文题目与选项": "在数据中心中，用于本地、物理访问硬件的是哪一种？\n(A) SSH\n(B) KVM\n(C) VPN\n(D) RDP",
        "答案": "B",
        "来源页码": 20
    },
    {
        "题号": "21",
        "英文题目与选项": "Within an Infrastructure as a Service model, which of the following would NOT be a measured service?\n(A) CPU\n(B) Storage\n(C) Number of users\n(D) Memory",
        "中文题目与选项": "在基础设施即服务（IaaS）模型中，以下哪项不是可计量的服务？\n(A) CPU\n(B) 存储\n(C) 用户数量\n(D) 内存",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "22",
        "英文题目与选项": "Which of the following is NOT a criterion for data within the scope of eDiscovery?\n(A) Possession\n(B) Custody\n(C) Control\n(D) Archive",
        "中文题目与选项": "以下哪一项不是电子发现（eDiscovery）范围内数据的判定标准？\n(A) 占有\n(B) 保管\n(C) 控制\n(D) 归档",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "23",
        "英文题目与选项": "Which United States law is focused on accounting and financial practices of organizations?\n(A) Safe Harbor\n(B) GLBA\n(C) SOX\n(D) HIPAA",
        "中文题目与选项": "以下哪部美国法律主要关注组织的会计与财务操作？\n(A) 安全港法案\n(B) GLBA（格雷姆-里奇-布莱利法案）\n(C) SOX（萨班斯-奥克斯利法案）\n(D) HIPAA（健康保险可携性与责任法案）",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "24",
        "英文题目与选项": "What type of masking strategy involves making a separate and distinct copy of data with masking in place?\n(A) Dynamic\n(B) Replication\n(C) Static\n(D) Duplication",
        "中文题目与选项": "哪种类型的遮蔽（掩码）策略涉及在应用遮蔽后创建数据的独立副本？\n(A) 动态\n(B) 复制\n(C) 静态\n(D) 重复",
        "答案": "C",
        "来源页码": 24
    },
    {
        "题号": "25",
        "英文题目与选项": "Which of the following storage types is most closely associated with a database-type storage implementation?\n(A) Object\n(B) Unstructured\n(C) Volume\n(D) Structured",
        "中文题目与选项": "以下哪种存储类型与数据库类型的存储实现最密切相关？\n(A) 对象存储\n(B) 非结构化存储\n(C) 卷存储\n(D) 结构化存储",
        "答案": "D",
        "来源页码": 25
    },
    {
        "题号": "26",
        "英文题目与选项": "Which of the following roles is responsible for overseeing customer relationships and the processing of financial transactions?\n(A) Cloud service manager\n(B) Cloud service deployment\n(C) Cloud service business manager\n(D) Cloud service operations manager",
        "中文题目与选项": "以下哪种角色负责监督客户关系和财务交易的处理？\n(A) 云服务经理\n(B) 云服务部署\n(C) 云服务业务经理\n(D) 云服务运营经理",
        "答案": "C",
        "来源页码": 26
    },
    {
        "题号": "27",
        "英文题目与选项": "Which protocol does the REST API depend on?\n(A) HTTP\n(B) XML\n(C) SAML\n(D) SSH",
        "中文题目与选项": "REST API 依赖于哪种协议？\n(A) HTTP\n(B) XML\n(C) SAML\n(D) SSH",
        "答案": "A",
        "来源页码": 27
    },
    {
        "题号": "28",
        "英文题目与选项": "Which United States program was designed to enable organizations to bridge the gap between privacy laws and requirements of the United States and the European Union?\n(A) GLBA\n(B) HIPAA\n(C) Safe Harbor\n(D) SOX",
        "中文题目与选项": "哪个美国项目旨在使组织能够弥合美国和欧盟之间隐私法及合规要求的差距？\n(A) GLBA《格雷姆-里奇-布莱利法案》\n(B) HIPAA《健康保险携带与责任法案》\n(C) Safe Harbor《安全港协议》\n(D) SOX《萨班斯-奥克斯利法案》",
        "答案": "C",
        "来源页码": 28
    },
    {
        "题号": "29",
        "英文题目与选项": "What is the biggest benefit to leasing space in a data center versus building or maintaining your own?\n(A) Certification\n(B) Costs\n(C) Regulation\n(D) Control",
        "中文题目与选项": "与自行建设或维护数据中心相比，租赁数据中心空间最大的好处是什么？\n(A) 认证\n(B) 成本\n(C) 合规\n(D) 控制",
        "答案": "B",
        "来源页码": 29
    },
    {
        "题号": "30",
        "英文题目与选项": "Which of the following security measures done at the network layer in a traditional data center are also applicable to a cloud environment?\n(A) Dedicated switches\n(B) Trust zones\n(C) Redundant network circuits\n(D) Direct connections",
        "中文题目与选项": "以下哪项在传统数据中心网络层实施的安全措施同样适用于云环境？\n(A) 专用交换机\n(B) 信任区域\n(C) 冗余网络线路\n(D) 直接连接",
        "答案": "B",
        "来源页码": 30
    },
    {
        "题号": "31",
        "英文题目与选项": "Which aspect of cloud computing will be most negatively impacted by vendor lock-in?\n(A) Elasticity\n(B) Reversibility\n(C) Interoperability\n(D) Portability",
        "中文题目与选项": "云计算的哪个方面会受到供应商锁定（vendor lock-in）最严重的负面影响？\n(A) 弹性\n(B) 可逆性\n(C) 互操作性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 31
    },
    {
        "题号": "32",
        "英文题目与选项": "Which of the following APIs are most commonly used within a cloud environment?\n(A) REST and SAML\n(B) SOAP and REST\n(C) REST and XML\n(D) XML and SAML",
        "中文题目与选项": "以下哪种 API 在云环境中最常被使用？\n(A) REST 和 SAML\n(B) SOAP 和 REST\n(C) REST 和 XML\n(D) XML 和 SAML",
        "答案": "B",
        "来源页码": 32
    },
    {
        "题号": "33",
        "英文题目与选项": "Which of the following attempts to establish an international standard for eDiscovery processes and best practices?\n(A) ISO/IEC 31000\n(B) ISO/IEC 27050\n(C) ISO/IEC 19888\n(D) ISO/IEC 27001",
        "中文题目与选项": "以下哪一项试图为电子取证（eDiscovery）流程和最佳实践建立国际标准？\n(A) ISO/IEC 31000\n(B) ISO/IEC 27050\n(C) ISO/IEC 19888\n(D) ISO/IEC 27001",
        "答案": "B",
        "来源页码": 33
    },
    {
        "题号": "34",
        "英文题目与选项": "Which of the following roles is responsible for obtaining new customers and securing contracts and agreements?\n(A) Inter-cloud provider\n(B) Cloud service broker\n(C) Cloud auditor\n(D) Cloud service developer",
        "中文题目与选项": "以下哪一个角色负责获取新客户并签订合同与协议？\n(A) 跨云提供商\n(B) 云服务经纪人\n(C) 云审计员\n(D) 云服务开发人员",
        "答案": "B",
        "来源页码": 34
    },
    {
        "题号": "35",
        "英文题目与选项": "Which term relates to the application of scientific methods and practices to evidence?\n(A) Forensics\n(B) Methodical\n(C) Theoretical\n(D) Measured",
        "中文题目与选项": "哪个术语与将科学方法和实践应用于证据有关？\n(A) 法医学\n(B) 有条理的\n(C) 理论的\n(D) 可测量的",
        "答案": "A",
        "来源页码": 35
    },
    {
        "题号": "36",
        "英文题目与选项": "Which of the following roles involves the provisioning and delivery of cloud services?\n(A) Cloud service deployment manager\n(B) Cloud service business manager\n(C) Cloud service manager\n(D) Cloud service operations manager",
        "中文题目与选项": "以下哪项角色负责云服务的配置和交付？\n(A) 云服务部署经理\n(B) 云服务业务经理\n(C) 云服务经理\n(D) 云服务运营经理",
        "答案": "C",
        "来源页码": 36
    },
    {
        "题号": "37",
        "英文题目与选项": "What is the primary reason that makes resolving jurisdictional conflicts complicated?\n(A) Different technology standards\n(B) Costs\n(C) Language barriers\n(D) Lack of international authority",
        "中文题目与选项": "使解决司法管辖冲突变得复杂的主要原因是什么？\n(A) 不同的技术标准\n(B) 费用\n(C) 语言障碍\n(D) 缺乏国际权威机构",
        "答案": "D",
        "来源页码": 37
    },
    {
        "题号": "38",
        "英文题目与选项": "GAAPs are created and maintained by which organization?\n(A) ISO/IEC\n(B) AICPA\n(C) PCI Council\n(D) ISO",
        "中文题目与选项": "GAAP（一般公认会计原则）是由哪个组织创建和维护的？\n(A) ISO/IEC\n(B) AICPA（美国注册会计师协会）\n(C) PCI 委员会\n(D) ISO",
        "答案": "B",
        "来源页码": 38
    },
    {
        "题号": "39",
        "英文题目与选项": "Which of the following roles is responsible for preparing systems for the cloud, administering and monitoring services, and managing inventory and assets?\n(A) Cloud service business manager\n(B) Cloud service deployment manager\n(C) Cloud service operations manager\n(D) Cloud service manager",
        "中文题目与选项": "以下哪一个角色负责为云做好系统准备、管理和监控服务，以及管理库存和资产？\n(A) 云服务业务经理\n(B) 云服务部署经理\n(C) 云服务运营经理\n(D) 云服务经理",
        "答案": "C",
        "来源页码": 39
    },
    {
        "题号": "40",
        "英文题目与选项": "Which protocol allows a system to use block-level storage as if it was a SAN, but over TCP network traffic instead?\n(A) SATA\n(B) iSCSI\n(C) TLS\n(D) SCSI",
        "中文题目与选项": "哪种协议允许系统通过 TCP 网络流量使用块级存储，就像使用存储区域网络 (SAN) 一样？\n(A) SATA\n(B) iSCSI\n(C) TLS\n(D) SCSI",
        "答案": "B",
        "来源页码": 40
    },
    {
        "题号": "41",
        "英文题目与选项": "Which of the cloud deployment models is used by popular services such as iCloud, Dropbox, and OneDrive?\n(A) Hybrid\n(B) Public\n(C) Private\n(D) Community",
        "中文题目与选项": "以下哪种云部署模型被 iCloud、Dropbox 和 OneDrive 等常用服务采用？\n(A) 混合云\n(B) 公有云\n(C) 私有云\n(D) 社区云",
        "答案": "B",
        "来源页码": 41
    },
    {
        "题号": "42",
        "英文题目与选项": "Why does a Type 2 hypervisor typically offer less security control than a Type 1 hypervisor?\n(A) A Type 2 hypervisor runs on top of another operating system and is dependent on the security of the OS for its own security.\n(B) A Type 2 hypervisor allows users to directly perform some functions with their own access.\n(C) A Type 2 hypervisor is open source, so attackers can more easily find exploitable vulnerabilities with that access.\n(D) A Type 2 hypervisor is always exposed to the public Internet for federated identity access.",
        "中文题目与选项": "为什么类型 2 虚拟机监控程序通常比类型 1 虚拟机监控程序提供的安全控制更少？\n(A) 类型 2 虚拟机监控程序运行在另一个操作系统之上，并依赖该操作系统的安全性来保障自身安全。\n(B) 类型 2 虚拟机监控程序允许用户使用自己的访问权限直接执行某些功能。\n(C) 类型 2 虚拟机监控程序是开源的，因此攻击者更容易利用该访问权限发现可利用的漏洞。\n(D) 类型 2 虚拟机监控程序始终暴露于公共互联网以进行联合身份访问。",
        "答案": "A",
        "来源页码": 42
    },
    {
        "题号": "43",
        "英文题目与选项": "Which is the appropriate phase of the cloud data lifecycle for determining the data's classification?\n(A) Create\n(B) Use\n(C) Share\n(D) Store",
        "中文题目与选项": "在云数据生命周期中，用于确定数据分类的适当阶段是？\n(A) 创建\n(B) 使用\n(C) 共享\n(D) 存储",
        "答案": "A",
        "来源页码": 43
    },
    {
        "题号": "44",
        "英文题目与选项": "Which of the following is the optimal temperature for a data center, per the guidelines established by the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE)?\n(A) 69.8–86.0°F (21–30°C)\n(B) 64.4–80.6°F (18–27°C)\n(C) 51.8–66.2°F (11–19°C)\n(D) 44.6–60.8°F (7–16°C)",
        "中文题目与选项": "根据美国供暖、制冷与空调工程师学会（ASHRAE）制定的指南，下列哪一选项是数据中心的最佳温度？\n(A) 69.8–86.0°F（21–30°C）\n(B) 64.4–80.6°F（18–27°C）\n(C) 51.8–66.2°F（11–19°C）\n(D) 44.6–60.8°F（7–16°C）",
        "答案": "B",
        "来源页码": 44
    },
    {
        "题号": "45",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "下列哪一项不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 45
    },
    {
        "题号": "46",
        "英文题目与选项": "Which of the following threat types involves the sending of untrusted data to a user's browser to be executed with their own credentials and access?\n(A) Missing function level access control\n(B) Cross-site scripting\n(C) Cross-site request forgery\n(D) Injection",
        "中文题目与选项": "以下哪种威胁类型涉及将不可信的数据发送到用户的浏览器中，并以用户自己的凭证和访问权限执行？\n(A) 缺少功能级访问控制\n(B) 跨站脚本攻击\n(C) 跨站请求伪造\n(D) 注入攻击",
        "答案": "B",
        "来源页码": 46
    },
    {
        "题号": "47",
        "英文题目与选项": "How is an object stored within an object storage system?\n(A) Key value\n(B) Database\n(C) LDAP\n(D) Tree structure",
        "中文题目与选项": "对象在对象存储系统中是如何被存储的？\n(A) 键值\n(B) 数据库\n(C) LDAP\n(D) 树形结构",
        "答案": "A",
        "来源页码": 47
    },
    {
        "题号": "48",
        "英文题目与选项": "Which of the following is NOT a regulatory system from the United States federal government?\n(A) PCI DSS\n(B) FISMA\n(C) SOX\n(D) HIPAA",
        "中文题目与选项": "以下哪一项不是美国联邦政府的监管体系？\n(A) PCI DSS（支付卡行业数据安全标准）\n(B) FISMA（联邦信息安全管理法）\n(C) SOX（萨班斯-奥克斯利法案）\n(D) HIPAA（健康保险携带与责任法案）",
        "答案": "A",
        "来源页码": 48
    },
    {
        "题号": "49",
        "英文题目与选项": "Which jurisdiction lacks specific and comprehensive privacy laws at a national or top level of legal authority?\n(A) European Union\n(B) Germany\n(C) Russia\n(D) United States",
        "中文题目与选项": "以下哪个司法管辖区在国家或最高法律层级缺乏具体且全面的隐私法？\n(A) 欧盟\n(B) 德国\n(C) 俄罗斯\n(D) 美国",
        "答案": "D",
        "来源页码": 49
    },
    {
        "题号": "50",
        "英文题目与选项": "Which United States law is focused on PII as it relates to the financial industry?\n(A) HIPAA\n(B) SOX\n(C) Safe Harbor\n(D) GLBA",
        "中文题目与选项": "哪一部美国法律关注与金融行业相关的个人可识别信息（PII）？\n(A) 健康保险携带与责任法案（HIPAA）\n(B) 萨班斯–奥克斯利法案（SOX）\n(C) 安全港协议（Safe Harbor）\n(D) 格雷姆–里奇–布莱雷法案（GLBA）",
        "答案": "D",
        "来源页码": 50
    },
    {
        "题号": "51",
        "英文题目与选项": "Which of the following threat types can occur when encryption is not properly applied or insecure transport mechanisms are used?\n(A) Security misconfiguration\n(B) Insecure direct object references\n(C) Sensitive data exposure\n(D) Unvalidated redirects and forwards",
        "中文题目与选项": "当加密未正确应用或传输机制不安全时，下列哪种威胁类型可能发生？\n(A) 安全配置错误\n(B) 不安全的直接对象引用\n(C) 敏感数据泄露\n(D) 未验证的重定向和转发",
        "答案": "C",
        "来源页码": 51
    },
    {
        "题号": "52",
        "英文题目与选项": "What is the best approach for dealing with services or utilities that are installed on a system but not needed to perform their desired function?\n(A) Remove\n(B) Monitor\n(C) Disable\n(D) Stop",
        "中文题目与选项": "对于那些安装在系统上但执行所需功能却不需要的服务或工具，最佳的处理方法是什么？\n(A) 移除\n(B) 监控\n(C) 禁用\n(D) 停止",
        "答案": "A",
        "来源页码": 52
    },
    {
        "题号": "53",
        "英文题目与选项": "Which of the following actions will NOT make data part of the 'create' phase of the cloud data lifecycle?\n(A) Modifying metadata\n(B) Importing data\n(C) Modifying data\n(D) Constructing new data",
        "中文题目与选项": "以下哪项操作不会使数据成为云数据生命周期“创建”阶段的一部分？\n(A) 修改元数据\n(B) 导入数据\n(C) 修改数据\n(D) 构建新数据",
        "答案": "A",
        "来源页码": 53
    },
    {
        "题号": "54",
        "英文题目与选项": "What are the two protocols that TLS uses?\n(A) Handshake and record\n(B) Transport and initiate\n(C) Handshake and transport\n(D) Record and transmit",
        "中文题目与选项": "TLS 使用的两个协议是什么？\n(A) 握手协议和记录协议\n(B) 传输协议和启动协议\n(C) 握手协议和传输协议\n(D) 记录协议和传输协议",
        "答案": "A",
        "来源页码": 54
    },
    {
        "题号": "55",
        "英文题目与选项": "Which type of cloud model typically presents the most challenges to a cloud customer during the 'destroy' phase of the cloud data lifecycle?\n(A) IaaS\n(B) DaaS\n(C) SaaS\n(D) PaaS",
        "中文题目与选项": "在云数据生命周期的“销毁”阶段，哪种类型的云模型通常会给云客户带来最大的挑战？\n(A) IaaS（基础设施即服务）\n(B) DaaS（数据即服务）\n(C) SaaS（软件即服务）\n(D) PaaS（平台即服务）",
        "答案": "C",
        "来源页码": 55
    },
    {
        "题号": "56",
        "英文题目与选项": "Which of the following may unilaterally deem a cloud hosting model inappropriate for a system or application?\n(A) Multitenancy\n(B) Certification\n(C) Regulation\n(D) Virtualization",
        "中文题目与选项": "下列哪一项可能单方面认定云托管模型不适合某个系统或应用？\n(A) 多租户\n(B) 认证\n(C) 法规\n(D) 虚拟化",
        "答案": "C",
        "来源页码": 56
    },
    {
        "题号": "57",
        "英文题目与选项": "Which of the following is considered an internal redundancy for a data center?\n(A) Power distribution units\n(B) Network circuits\n(C) Power substations\n(D) Generators",
        "中文题目与选项": "以下哪一项被认为是数据中心的内部冗余？\n(A) 配电单元\n(B) 网络电路\n(C) 变电站\n(D) 发电机",
        "答案": "A",
        "来源页码": 57
    },
    {
        "题号": "58",
        "英文题目与选项": "Which of the following represents a control on the maximum amount of resources that a single customer, virtual machine, or application can consume within a cloud environment?\n(A) Share\n(B) Reservation\n(C) Provision\n(D) Limit",
        "中文题目与选项": "以下哪一项表示在云环境中控制单个客户、虚拟机或应用程序所能消耗的最大资源量的机制？\n(A) 共享\n(B) 保留\n(C) 供应\n(D) 限制",
        "答案": "D",
        "来源页码": 58
    },
    {
        "题号": "59",
        "英文题目与选项": "Which of the following roles is responsible for peering with other cloud services and providers?\n(A) Cloud auditor\n(B) Inter-cloud provider\n(C) Cloud service broker\n(D) Cloud service developer",
        "中文题目与选项": "以下哪个角色负责与其他云服务和提供商进行对等连接？\n(A) 云审计员\n(B) 跨云提供商\n(C) 云服务经纪人\n(D) 云服务开发人员",
        "答案": "B",
        "来源页码": 59
    },
    {
        "题号": "60",
        "英文题目与选项": "Which of the following does NOT relate to the hiding of sensitive data from data sets?\n(A) Obfuscation\n(B) Federation\n(C) Masking\n(D) Anonymization",
        "中文题目与选项": "以下哪一项与从数据集中隐藏敏感数据无关？\n(A) 混淆\n(B) 联邦化\n(C) 掩码\n(D) 匿名化",
        "答案": "B",
        "来源页码": 60
    },
    {
        "题号": "61",
        "英文题目与选项": "Which of the following are the storage types associated with IaaS?\n(A) Volume and object\n(B) Volume and label\n(C) Volume and container\n(D) Object and target",
        "中文题目与选项": "以下哪项是与 IaaS 相关的存储类型？\n(A) 卷存储和对象存储\n(B) 卷存储和标签存储\n(C) 卷存储和容器存储\n(D) 对象存储和目标存储",
        "答案": "A",
        "来源页码": 61
    },
    {
        "题号": "62",
        "英文题目与选项": "Which technology can be useful during the \"share\" phase of the cloud data lifecycle to continue to protect data as it leaves the original system and security controls?\n(A) IPS\n(B) WAF\n(C) DLP\n(D) IDS",
        "中文题目与选项": "在云数据生命周期的“共享”阶段，哪种技术有助于在数据离开原始系统和安全控制时继续保护数据？\n(A) 入侵防御系统（IPS）\n(B) Web 应用防火墙（WAF）\n(C) 数据泄漏防护（DLP）\n(D) 入侵检测系统（IDS）",
        "答案": "C",
        "来源页码": 62
    },
    {
        "题号": "63",
        "英文题目与选项": "Which of the following storage types is most closely associated with a traditional file system and tree structure?\n(A) Volume\n(B) Unstructured\n(C) Object\n(D) Structured",
        "中文题目与选项": "以下哪种存储类型与传统文件系统和树状结构最密切相关？\n(A) 卷存储\n(B) 非结构化存储\n(C) 对象存储\n(D) 结构化存储",
        "答案": "A",
        "来源页码": 63
    },
    {
        "题号": "64",
        "英文题目与选项": "Which of the following represents a prioritization of applications or cloud customers for the allocation of additional requested resources when there is a limitation on available resources?\n(A) Provision\n(B) Limit\n(C) Reservation\n(D) Share",
        "中文题目与选项": "以下哪一项表示在可用资源有限的情况下，为分配额外请求的资源而对应用程序或云客户进行的优先级排序？\n(A) 供应\n(B) 限制\n(C) 保留\n(D) 共享",
        "答案": "D",
        "来源页码": 64
    },
    {
        "题号": "65",
        "英文题目与选项": "Which type of audit report does many cloud providers use to instill confidence in their policies, practices, and procedures to current and potential customers?\n(A) SAS-70\n(B) SOC 2\n(C) SOC 1\n(D) SOX",
        "中文题目与选项": "许多云服务提供商为了让现有和潜在客户对其政策、实践和程序产生信任，会使用哪种类型的审计报告？\n(A) SAS-70\n(B) SOC 2\n(C) SOC 1\n(D) SOX",
        "答案": "B",
        "来源页码": 65
    },
    {
        "题号": "66",
        "英文题目与选项": "Which of the following statements accurately describes VLANs?\n(A) They are not restricted to the same data center or the same racks.\n(B) They are not restricted to the same rack but restricted to the same data center.\n(C) They are restricted to the same racks and data centers.\n(D) They are not restricted to the same rack but restricted to the same switches.",
        "中文题目与选项": "下列哪项描述准确地说明了 VLAN 的特性？\n(A) 它们不受限于同一个数据中心或同一个机架。\n(B) 它们不受限于同一个机架，但受限于同一个数据中心。\n(C) 它们受限于同一个机架和数据中心。\n(D) 它们不受限于同一个机架，但受限于同一个交换机。",
        "答案": "A",
        "来源页码": 66
    },
    {
        "题号": "67",
        "英文题目与选项": "What must be secured on physical hardware to prevent unauthorized access to systems?\n(A) BIOS\n(B) SSH\n(C) RDP\n(D) ALOM",
        "中文题目与选项": "为了防止未经授权的系统访问，必须在物理硬件上保护哪项？\n(A) BIOS\n(B) SSH\n(C) RDP\n(D) ALOM",
        "答案": "A",
        "来源页码": 67
    },
    {
        "题号": "68",
        "英文题目与选项": "What type of PII is regulated based on the type of application or per the conditions of the specific hosting agreement?\n(A) Specific\n(B) Contractual\n(C) Regulated\n(D) Jurisdictional",
        "中文题目与选项": "根据应用类型或特定托管协议的条件而受到监管的PII类型是什么？\n(A) 特定型\n(B) 合同型\n(C) 受监管型\n(D) 司法管辖型",
        "答案": "B",
        "来源页码": 68
    },
    {
        "题号": "69",
        "英文题目与选项": "Which of the following security technologies is commonly used to give administrators access into trust zones within an environment?\n(A) VPN\n(B) WAF\n(C) IPSec\n(D) HTTPS",
        "中文题目与选项": "以下哪种安全技术通常用于使管理员能够访问环境中的信任区域？\n(A) VPN\n(B) WAF\n(C) IPSec\n(D) HTTPS",
        "答案": "A",
        "来源页码": 69
    },
    {
        "题号": "70",
        "英文题目与选项": "Which concept BEST describes the capability for a cloud environment to automatically scale a system or application, based on its current resource demands?\n(A) On-demand self-service\n(B) Resource pooling\n(C) Measured service\n(D) Rapid elasticity",
        "中文题目与选项": "以下哪个概念最能描述云环境根据当前资源需求自动扩展系统或应用程序的能力？\n(A) 按需自助服务\n(B) 资源池化\n(C) 可计量服务\n(D) 快速弹性",
        "答案": "D",
        "来源页码": 70
    },
    {
        "题号": "71",
        "英文题目与选项": "If you're using iSCSI in a cloud environment, what must come from an external protocol or application?\n(A) Kerberos support\n(B) CHAP support\n(C) Authentication\n(D) Encryption",
        "中文题目与选项": "在云环境中使用 iSCSI 时，哪项必须来自外部协议或应用程序？\n(A) Kerberos 支持\n(B) CHAP 支持\n(C) 认证\n(D) 加密",
        "答案": "D",
        "来源页码": 71
    },
    {
        "题号": "72",
        "英文题目与选项": "Which of the following pertains to a macro level approach to data center design rather than the traditional tiered approach to data centers?\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "中文题目与选项": "以下哪一项与数据中心设计的宏观方法有关，而不是传统的分层数据中心设计方法？\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "答案": "A",
        "来源页码": 72
    },
    {
        "题号": "73",
        "英文题目与选项": "What does the REST API support that SOAP does NOT support?\n(A) Caching\n(B) Encryption\n(C) Acceleration\n(D) Redundancy",
        "中文题目与选项": "REST API 支持而 SOAP 不支持的是什么？\n(A) 缓存\n(B) 加密\n(C) 加速\n(D) 冗余",
        "答案": "A",
        "来源页码": 73
    },
    {
        "题号": "74",
        "英文题目与选项": "Why does a Type 1 hypervisor typically offer tighter security controls than a Type 2 hypervisor?\n(A) A Type 1 hypervisor also controls patching of its hosted virtual machines to ensure they are always secure.\n(B) A Type 1 hypervisor is tied directly to the bare metal and only runs with code necessary to perform its specific mission.\n(C) A Type 1 hypervisor performs hardware-level encryption for tighter security and efficiency.\n(D) A Type 1 hypervisor only hosts virtual machines with the same operating systems as the hypervisor.",
        "中文题目与选项": "为什么 Type 1 虚拟机监控程序通常比 Type 2 虚拟机监控程序提供更严格的安全控制？\n(A) Type 1 虚拟机监控程序还控制其所托管虚拟机的补丁，确保它们始终安全。\n(B) Type 1 虚拟机监控程序直接与裸机绑定，只运行完成其特定任务所需的代码。\n(C) Type 1 虚拟机监控程序执行硬件级加密以实现更高的安全性和效率。\n(D) Type 1 虚拟机监控程序仅托管与其操作系统相同的虚拟机。",
        "答案": "B",
        "来源页码": 74
    },
    {
        "题号": "75",
        "英文题目与选项": "Which of the following are the storage types associated with PaaS?\n(A) Structured and freeform\n(B) Volume and object\n(C) Structured and unstructured\n(D) Database and file system",
        "中文题目与选项": "以下哪项是与 PaaS 相关的存储类型？\n(A) 结构化和自由格式\n(B) 卷存储和对象存储\n(C) 结构化和非结构化\n(D) 数据库和文件系统",
        "答案": "C",
        "来源页码": 75
    },
    {
        "题号": "76",
        "英文题目与选项": "Which of the following threat types can occur when baselines are not appropriately applied or unauthorized changes are made?\n(A) Insecure direct object references\n(B) Unvalidated redirects and forwards\n(C) Security misconfiguration\n(D) Sensitive data exposure",
        "中文题目与选项": "当基线未被正确应用或发生未经授权的更改时，可能会出现以下哪种威胁类型？\n(A) 不安全的直接对象引用\n(B) 未验证的重定向和转发\n(C) 安全配置错误\n(D) 敏感数据泄露",
        "答案": "C",
        "来源页码": 76
    },
    {
        "题号": "77",
        "英文题目与选项": "What is the data encapsulation used with the SOAP protocol referred to?\n(A) Packet\n(B) Envelope\n(C) Payload\n(D) Object",
        "中文题目与选项": "在 SOAP 协议中使用的数据封装称为什么？\n(A) 数据包\n(B) 信封\n(C) 负载\n(D) 对象",
        "答案": "B",
        "来源页码": 77
    },
    {
        "题号": "78",
        "英文题目与选项": "Which of the following threat types can occur when an application does not properly validate input and can be leveraged to send users to malicious sites that appear to be legitimate?\n(A) Unvalidated redirects and forwards\n(B) Insecure direct object references\n(C) Security misconfiguration\n(D) Sensitive data exposure",
        "中文题目与选项": "当应用程序未能正确验证输入且可能被利用将用户引导至看似合法的恶意网站时，下列哪种威胁类型可能发生？\n(A) 未验证的重定向和转发\n(B) 不安全的直接对象引用\n(C) 安全配置错误\n(D) 敏感数据泄露",
        "答案": "A",
        "来源页码": 78
    },
    {
        "题号": "79",
        "英文题目与选项": "Which publication from the United States National Institute of Standards and Technology pertains to defining cloud concepts and definitions for the various core components of cloud computing?\n(A) SP 800-153\n(B) SP 800-145\n(C) SP 800-53\n(D) SP 800-40",
        "中文题目与选项": "美国国家标准与技术研究院（NIST）哪一份出版物涉及定义云计算核心组件的概念和术语？\n(A) SP 800-153\n(B) SP 800-145\n(C) SP 800-53\n(D) SP 800-40",
        "答案": "B",
        "来源页码": 79
    },
    {
        "题号": "80",
        "英文题目与选项": "What is the biggest negative to leasing space in a data center versus building or maintaining your own?\n(A) Costs\n(B) Control\n(C) Certification\n(D) Regulation",
        "中文题目与选项": "与自行建设或维护数据中心相比，租赁数据中心空间的最大缺点是什么？\n(A) 成本\n(B) 控制权\n(C) 认证\n(D) 合规性",
        "答案": "B",
        "来源页码": 80
    },
    {
        "题号": "81",
        "英文题目与选项": "Which aspect of archiving must be tested regularly for the duration of retention requirements?\n(A) Availability\n(B) Recoverability\n(C) Auditability\n(D) Portability",
        "中文题目与选项": "在保留期限内，必须定期测试归档的哪个方面？\n(A) 可用性\n(B) 可恢复性\n(C) 可审计性\n(D) 可移植性",
        "答案": "B",
        "来源页码": 81
    },
    {
        "题号": "82",
        "英文题目与选项": "Which of the following represents a minimum guaranteed resource within a cloud environment for the cloud customer?\n(A) Reservation\n(B) Share\n(C) Limit\n(D) Provision",
        "中文题目与选项": "以下哪项代表云环境中为云客户提供的最低保证资源？\n(A) 保留量\n(B) 共享\n(C) 限制\n(D) 供应",
        "答案": "A",
        "来源页码": 82
    },
    {
        "题号": "83",
        "英文题目与选项": "When is a virtual machine susceptible to attacks while a physical server in the same state would not be?\n(A) When it is behind a WAF\n(B) When it is behind an IPS\n(C) When it is not patched\n(D) When it is powered off",
        "中文题目与选项": "当虚拟机在与物理服务器相同状态下容易受到攻击，而物理服务器则不会时，是在什么情况下？\n(A) 当它位于 Web 应用防火墙（WAF）之后\n(B) 当它位于入侵防护系统（IPS）之后\n(C) 当它没有打补丁时\n(D) 当它处于关闭状态时",
        "答案": "D",
        "来源页码": 83
    },
    {
        "题号": "84",
        "英文题目与选项": "Which of the following threat types involves an application developer leaving references to internal information and configurations in code that is exposed to the client?\n(A) Sensitive data exposure\n(B) Security misconfiguration\n(C) Insecure direct object references\n(D) Unvalidated redirect and forwards",
        "中文题目与选项": "以下哪种威胁类型涉及应用程序开发人员在暴露给客户端的代码中留下对内部信息和配置的引用？\n(A) 敏感数据暴露\n(B) 安全配置错误\n(C) 不安全的直接对象引用\n(D) 未验证的重定向和转发",
        "答案": "D",
        "来源页码": 84
    },
    {
        "题号": "85",
        "英文题目与选项": "Which of the following is the biggest concern or challenge with using encryption?\n(A) Dependence on keys\n(B) Cipher strength\n(C) Efficiency\n(D) Protocol standards",
        "中文题目与选项": "以下哪一项是使用加密时最大的问题或挑战？\n(A) 对密钥的依赖\n(B) 密码强度\n(C) 效率\n(D) 协议标准",
        "答案": "A",
        "来源页码": 85
    },
    {
        "题号": "86",
        "英文题目与选项": "Which of the following would NOT be considered part of resource pooling with an Infrastructure as a Service implementation?\n(A) Storage\n(B) Application\n(C) Memory\n(D) CPU",
        "中文题目与选项": "以下哪一项不被视为基础设施即服务（IaaS）实现中资源池化的一部分？\n(A) 存储\n(B) 应用程序\n(C) 内存\n(D) CPU",
        "答案": "B",
        "来源页码": 86
    },
    {
        "题号": "87",
        "英文题目与选项": "Which technology is NOT commonly used for security with data in transit?\n(A) DNSSEC\n(B) IPsec\n(C) VPN\n(D) HTTPS",
        "中文题目与选项": "以下哪种技术通常不用于传输中数据的安全保护？\n(A) DNSSEC\n(B) IPsec\n(C) VPN\n(D) HTTPS",
        "答案": "A",
        "来源页码": 87
    },
    {
        "题号": "88",
        "英文题目与选项": "Which of the following roles is responsible for gathering metrics on cloud services and managing cloud deployments and the deployment processes?\n(A) Cloud service business manager\n(B) Cloud service operations manager\n(C) Cloud service manager\n(D) Cloud service deployment manager",
        "中文题目与选项": "以下哪一个角色负责收集云服务的指标，并管理云部署及部署过程？\n(A) 云服务业务经理\n(B) 云服务运营经理\n(C) 云服务经理\n(D) 云服务部署经理",
        "答案": "D",
        "来源页码": 88
    },
    {
        "题号": "89",
        "英文题目与选项": "Which of the following is considered an external redundancy for a data center?\n(A) Power feeds to rack\n(B) Generators\n(C) Power distribution units\n(D) Storage systems",
        "中文题目与选项": "以下哪一项被认为是数据中心的外部冗余？\n(A) 机架电源供给\n(B) 发电机\n(C) 电源分配单元\n(D) 存储系统",
        "答案": "B",
        "来源页码": 89
    },
    {
        "题号": "90",
        "英文题目与选项": "Which of the following is the optimal humidity level for a data center, per the guidelines established by the American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE)?\n(A) 30-50 percent relative humidity\n(B) 50-75 percent relative humidity\n(C) 20-40 percent relative humidity\n(D) 40-60 percent relative humidity",
        "中文题目与选项": "根据美国供暖、制冷与空调工程师学会（ASHRAE）制定的指导方针，以下哪一项是数据中心的最佳湿度水平？\n(A) 30-50% 相对湿度\n(B) 50-75% 相对湿度\n(C) 20-40% 相对湿度\n(D) 40-60% 相对湿度",
        "答案": "D",
        "来源页码": 90
    },
    {
        "题号": "91",
        "英文题目与选项": "What is the first stage of the cloud data lifecycle where security controls can be implemented?\n(A) Use\n(B) Store\n(C) Share\n(D) Create",
        "中文题目与选项": "云数据生命周期中可以实施安全控制的第一个阶段是什么？\n(A) 使用\n(B) 存储\n(C) 共享\n(D) 创建",
        "答案": "D",
        "来源页码": 91
    },
    {
        "题号": "92",
        "英文题目与选项": "What controls the formatting and security settings of a volume storage system within a cloud environment?\n(A) Management plane\n(B) SAN host controller\n(C) Hypervisor\n(D) Operating system of the host",
        "中文题目与选项": "在云环境中，哪个组件控制卷存储系统的格式化和安全设置？\n(A) 管理平面\n(B) SAN主机控制器\n(C) 虚拟机监控程序（Hypervisor）\n(D) 主机操作系统",
        "答案": "D",
        "来源页码": 92
    },
    {
        "题号": "93",
        "英文题目与选项": "What does SDN stand for within a cloud environment?\n(A) Software-dynamic networking\n(B) Software-defined networking\n(C) Software-dependent networking\n(D) System-dynamic nodes",
        "中文题目与选项": "在云环境中，SDN 代表什么？\n(A) 软件动态网络\n(B) 软件定义网络\n(C) 软件依赖网络\n(D) 系统动态节点",
        "答案": "B",
        "来源页码": 93
    },
    {
        "题号": "94",
        "英文题目与选项": "From a legal perspective, what is the most important first step after an eDiscovery order has been received by the cloud provider?\n(A) Notification\n(B) Key identification\n(C) Data collection\n(D) Virtual image snapshots",
        "中文题目与选项": "从法律角度来看，云服务提供商收到电子取证（eDiscovery）命令后，最重要的第一步是什么？\n(A) 通知\n(B) 关键标识\n(C) 数据收集\n(D) 虚拟镜像快照",
        "答案": "A",
        "来源页码": 94
    },
    {
        "题号": "95",
        "英文题目与选项": "Which of the following would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?\n(A) Resource pooling\n(B) Virtualization\n(C) Multitenancy\n(D) Regulation",
        "中文题目与选项": "以下哪一项更可能导致云服务提供商不愿满足特定的认证要求？\n(A) 资源池化\n(B) 虚拟化\n(C) 多租户\n(D) 法规",
        "答案": "C",
        "来源页码": 95
    },
    {
        "题号": "96",
        "英文题目与选项": "Which of the following pertains to fire safety standards within a data center, specifically with their enormous electrical consumption?\n(A) NFPA\n(B) BICSI\n(C) IDCA\n(D) Uptime Institute",
        "中文题目与选项": "以下哪一项涉及数据中心的消防安全标准，特别是其巨大的电力消耗？\n(A) NFPA\n(B) BICSI\n(C) IDCA\n(D) Uptime Institute",
        "答案": "A",
        "来源页码": 96
    },
    {
        "题号": "97",
        "英文题目与选项": "Which of the following roles involves the connection and integration of existing systems and services to a cloud environment?\n(A) Cloud service business manager\n(B) Cloud service user\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪种角色负责将现有系统和服务连接并集成到云环境中？\n(A) 云服务业务经理\n(B) 云服务用户\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "D",
        "来源页码": 97
    },
    {
        "题号": "98",
        "英文题目与选项": "Which technique involves replacing values within a specific data field to protect sensitive data?\n(A) Anonymization\n(B) Masking\n(C) Tokenization\n(D) Obfuscation",
        "中文题目与选项": "以下哪种技术通过替换特定数据字段中的值来保护敏感数据？\n(A) 匿名化\n(B) 数据掩码\n(C) 令牌化\n(D) 混淆",
        "答案": "B",
        "来源页码": 98
    },
    {
        "题号": "99",
        "英文题目与选项": "What expectation of data custodians is made much more challenging by a cloud implementation, especially with PaaS or SaaS?\n(A) Data classification\n(B) Knowledge of systems\n(C) Access to data\n(D) Encryption requirements",
        "中文题目与选项": "在云实现中，尤其是使用 PaaS 或 SaaS 时，哪一项对数据保管人的期望变得更加具有挑战性？\n(A) 数据分类\n(B) 系统知识\n(C) 数据访问\n(D) 加密要求",
        "答案": "B",
        "来源页码": 99
    },
    {
        "题号": "100",
        "英文题目与选项": "What type of PII is controlled based on laws and carries legal penalties for noncompliance with requirements?\n(A) Contractual\n(B) Regulated\n(C) Specific\n(D) Jurisdictional",
        "中文题目与选项": "哪种类型的个人身份信息（PII）是依据法律进行控制的，并且在不遵守相关要求时会受到法律处罚？\n(A) 合同类\n(B) 受法规约束的\n(C) 特定的\n(D) 基于司法管辖的",
        "答案": "B",
        "来源页码": 100
    },
    {
        "题号": "101",
        "英文题目与选项": "Which of the following is NOT one of the three components of a federated identity system transaction?\n(A) Relying party\n(B) Identity provider\n(C) User\n(D) Proxy relay",
        "中文题目与选项": "以下哪一项不是联合身份系统事务的三个组成部分之一？\n(A) 依赖方\n(B) 身份提供者\n(C) 用户\n(D) 代理中继",
        "答案": "D",
        "来源页码": 101
    },
    {
        "题号": "102",
        "英文题目与选项": "Which value refers to the amount of time it takes to recover operations in a BCDR situation to meet management's objectives?\n(A) RSL\n(B) RPO\n(C) SRE\n(D) RTO",
        "中文题目与选项": "哪一个数值表示在业务连续性与灾难恢复（BCDR）情境下，为实现管理层目标而恢复操作所需的时间？\n(A) RSL\n(B) RPO\n(C) SRE\n(D) RTO",
        "答案": "D",
        "来源页码": 102
    },
    {
        "题号": "103",
        "英文题目与选项": "Which of the cloud deployment models requires the cloud customer to be part of a specific group or organization in order to host cloud services within it?\n(A) Community\n(B) Hybrid\n(C) Private\n(D) Public",
        "中文题目与选项": "以下哪种云部署模型要求云客户必须属于特定的群体或组织，才能在其中托管云服务？\n(A) 社区云\n(B) 混合云\n(C) 私有云\n(D) 公有云",
        "答案": "A",
        "来源页码": 103
    },
    {
        "题号": "104",
        "英文题目与选项": "What provides the information to an application to make decisions about the authorization level appropriate when granting access?\n(A) User\n(B) Relying party\n(C) Federation\n(D) Identity Provider",
        "中文题目与选项": "在授予访问权限时，向应用程序提供信息以决定适当授权级别的是哪一项？\n(A) 用户\n(B) 依赖方\n(C) 联合体\n(D) 身份提供者",
        "答案": "D",
        "来源页码": 104
    },
    {
        "题号": "105",
        "英文题目与选项": "What is a standard configuration and policy set that is applied to systems and virtual machines called?\n(A) Standardization\n(B) Baseline\n(C) Hardening\n(D) Redline",
        "中文题目与选项": "应用于系统和虚拟机的标准配置和策略集称为什么？\n(A) 标准化\n(B) 基线\n(C) 加固\n(D) 红线",
        "答案": "B",
        "来源页码": 105
    },
    {
        "题号": "106",
        "英文题目与选项": "Which entity requires all collection and storing of data on their citizens to be done on hardware that resides within their borders?\n(A) Russia\n(B) France\n(C) Germany\n(D) United States",
        "中文题目与选项": "哪个国家要求所有关于其公民的数据收集和存储都必须在其境内的硬件上进行？\n(A) 俄罗斯\n(B) 法国\n(C) 德国\n(D) 美国",
        "答案": "A",
        "来源页码": 106
    },
    {
        "题号": "107",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to easily move services and applications between different cloud providers?\n(A) Reversibility\n(B) Availability\n(C) Portability\n(D) Interoperability",
        "中文题目与选项": "以下哪项云的跨领域特性与能够轻松地在不同云服务提供商之间迁移服务和应用程序的能力相关？\n(A) 可逆性\n(B) 可用性\n(C) 可移植性\n(D) 互操作性",
        "答案": "C",
        "来源页码": 107
    },
    {
        "题号": "108",
        "英文题目与选项": "Which type of audit report is considered a \"restricted use\" report for its intended audience?\n(A) SAS-70\n(B) SSAE-16\n(C) SOC Type 1\n(D) SOC Type 2",
        "中文题目与选项": "哪种类型的审计报告被认为是针对特定受众的“限制使用”报告？\n(A) SAS-70\n(B) SSAE-16\n(C) SOC 类型 1\n(D) SOC 类型 2",
        "答案": "D",
        "来源页码": 108
    },
    {
        "题号": "109",
        "英文题目与选项": "What is the concept of segregating information or processes, within the same system or application, for security reasons?\n(A) Fencing\n(B) Sandboxing\n(C) Cellblocking\n(D) Pooling",
        "中文题目与选项": "在同一系统或应用程序中，为了安全原因而对信息或进程进行隔离的概念是什么？\n(A) 隔离区（Fencing）\n(B) 沙盒（Sandboxing）\n(C) 单元阻断（Cellblocking）\n(D) 池化（Pooling）",
        "答案": "B",
        "来源页码": 109
    },
    {
        "题号": "110",
        "英文题目与选项": "The European Union passed the first major regulation declaring data privacy to be a human right. In what year did it go into effect?\n(A) 2010\n(B) 2000\n(C) 1995\n(D) 1990",
        "中文题目与选项": "欧盟通过了首个将数据隐私视为人权的主要法规。该法规于哪一年生效？\n(A) 2010年\n(B) 2000年\n(C) 1995年\n(D) 1990年",
        "答案": "C",
        "来源页码": 110
    },
    {
        "题号": "111",
        "英文题目与选项": "Which of the following is NOT a key area for performance monitoring as far as an SLA is concerned?\n(A) CPU\n(B) Users\n(C) Memory\n(D) Network",
        "中文题目与选项": "以下哪一项在服务级别协议（SLA）中不属于性能监控的关键领域？\n(A) CPU\n(B) 用户\n(C) 内存\n(D) 网络",
        "答案": "B",
        "来源页码": 111
    },
    {
        "题号": "112",
        "英文题目与选项": "Which of the following is the MOST important requirement and guidance for testing during an audit?\n(A) Stakeholders\n(B) Shareholders\n(C) Management\n(D) Regulations",
        "中文题目与选项": "在审计过程中，下列哪一项是测试最重要的要求和指导？\n(A) 利益相关者\n(B) 股东\n(C) 管理层\n(D) 法规",
        "答案": "D",
        "来源页码": 112
    },
    {
        "题号": "113",
        "英文题目与选项": "Which value refers to the amount of data an organization would need to recover in the event of a BCDR situation in order to reach an acceptable level of operations?\n(A) SRE\n(B) RTO\n(C) RPO\n(D) RSL",
        "中文题目与选项": "在发生业务持续性与灾难恢复（BCDR）情况下，为了达到可接受的运行水平，组织需要恢复的数据量对应的是哪个指标？\n(A) SRE\n(B) RTO（恢复时间目标）\n(C) RPO（恢复点目标）\n(D) RSL（恢复服务级别）",
        "答案": "C",
        "来源页码": 113
    },
    {
        "题号": "114",
        "英文题目与选项": "What must SOAP rely on for security?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "SOAP 在安全性方面必须依赖于什么？\n(A) 加密\n(B) 令牌化\n(C) 传输层安全协议（TLS）\n(D) 安全套接字层（SSL）",
        "答案": "C",
        "来源页码": 114
    },
    {
        "题号": "115",
        "英文题目与选项": "Which of the following is a commonly used tool for maintaining system configurations?\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "中文题目与选项": "以下哪一项是常用于维护系统配置的工具？\n(A) Maestro\n(B) Orchestrator\n(C) Puppet\n(D) Conductor",
        "答案": "C",
        "来源页码": 115
    },
    {
        "题号": "116",
        "英文题目与选项": "What type of data does data rights management (DRM) protect?\n(A) Consumer\n(B) PII\n(C) Financial\n(D) Healthcare",
        "中文题目与选项": "数据权限管理（DRM）保护哪种类型的数据？\n(A) 消费者数据\n(B) 个人可识别信息（PII）\n(C) 财务数据\n(D) 医疗数据",
        "答案": "B",
        "来源页码": 116
    },
    {
        "题号": "117",
        "英文题目与选项": "Which type of testing uses the same strategies and toolsets that hackers would use?\n(A) Penetration\n(B) Dynamic\n(C) Static\n(D) Malicious",
        "中文题目与选项": "哪种测试使用与黑客相同的策略和工具集？\n(A) 渗透测试\n(B) 动态测试\n(C) 静态测试\n(D) 恶意测试",
        "答案": "A",
        "来源页码": 117
    },
    {
        "题号": "118",
        "英文题目与选项": "From a security perspective, which of the following is a major concern when evaluating possible BCDR solutions?\n(A) Access provisioning\n(B) Auditing\n(C) Jurisdictions\n(D) Authorization",
        "中文题目与选项": "从安全角度来看，在评估可能的业务连续性和灾难恢复（BCDR）解决方案时，下列哪项是主要关注点？\n(A) 访问授权\n(B) 审计\n(C) 司法管辖区\n(D) 授权",
        "答案": "C",
        "来源页码": 118
    },
    {
        "题号": "119",
        "英文题目与选项": "Which of the following is NOT a focus or consideration of an internal audit?\n(A) Certification\n(B) Design\n(C) Costs\n(D) Operational efficiency",
        "中文题目与选项": "下列哪一项不是内部审计的重点或考虑因素？\n(A) 认证\n(B) 设计\n(C) 成本\n(D) 运营效率",
        "答案": "A",
        "来源页码": 119
    },
    {
        "题号": "120",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?\n(A) Infrastructure\n(B) Platform\n(C) Application\n(D) Data",
        "中文题目与选项": "以下哪项是云客户在任何云模型下唯一的责任？\n(A) 基础设施\n(B) 平台\n(C) 应用程序\n(D) 数据",
        "答案": "D",
        "来源页码": 120
    },
    {
        "题号": "121",
        "英文题目与选项": "What process is used within a clustered system to provide high availability and load balancing?\n(A) Dynamic balancing\n(B) Dynamic clustering\n(C) Dynamic optimization\n(D) Dynamic resource scheduling",
        "中文题目与选项": "在集群系统中，用于提供高可用性和负载均衡的过程是什么？\n(A) 动态平衡\n(B) 动态集群\n(C) 动态优化\n(D) 动态资源调度",
        "答案": "D",
        "来源页码": 121
    },
    {
        "题号": "122",
        "英文题目与选项": "Which of the following is NOT a function performed by the handshake protocol of TLS?\n(A) Key exchange\n(B) Encryption\n(C) Negotiation of connection\n(D) Establish session ID",
        "中文题目与选项": "以下哪一项不是TLS握手协议执行的功能？\n(A) 密钥交换\n(B) 加密\n(C) 连接协商\n(D) 建立会话ID",
        "答案": "B",
        "来源页码": 122
    },
    {
        "题号": "123",
        "英文题目与选项": "Unlike SOC Type 1 reports, which are based on a specific point in time, SOC Type 2 reports are done over a period of time. What is the minimum span of time for a SOC Type 2 report?\n(A) Six months\n(B) One month\n(C) One year\n(D) One week",
        "中文题目与选项": "与基于特定时间点的 SOC 类型 1 报告不同，SOC 类型 2 报告是在一段时间内进行的。SOC 类型 2 报告的最短时间跨度是多少？\n(A) 六个月\n(B) 一个月\n(C) 一年\n(D) 一周",
        "答案": "A",
        "来源页码": 123
    },
    {
        "题号": "124",
        "英文题目与选项": "What changes are necessary to application code in order to implement DNSSEC?\n(A) Adding encryption modules\n(B) Implementing certificate validations\n(C) Additional DNS lookups\n(D) No changes are needed.",
        "中文题目与选项": "为了实现 DNSSEC，应用程序代码需要进行哪些更改？\n(A) 添加加密模块\n(B) 实施证书验证\n(C) 进行额外的 DNS 查询\n(D) 不需要任何更改。",
        "答案": "D",
        "来源页码": 124
    },
    {
        "题号": "125",
        "英文题目与选项": "Which type of controls are the SOC Type 1 reports specifically focused on?\n(A) Integrity\n(B) PII\n(C) Financial\n(D) Privacy",
        "中文题目与选项": "SOC Type 1 报告主要关注哪一类控制？\n(A) 完整性\n(B) 个人可识别信息（PII）\n(C) 财务\n(D) 隐私",
        "答案": "C",
        "来源页码": 125
    },
    {
        "题号": "126",
        "英文题目与选项": "Which security concept is based on preventing unauthorized access to data while also ensuring that it is accessible to those authorized to use it?\n(A) Integrity\n(B) Availability\n(C) Confidentiality\n(D) Nonrepudiation",
        "中文题目与选项": "哪个安全概念基于防止未经授权访问数据，同时确保授权用户可以访问数据？\n(A) 完整性\n(B) 可用性\n(C) 机密性\n(D) 不可否认性",
        "答案": "C",
        "来源页码": 126
    },
    {
        "题号": "127",
        "英文题目与选项": "Which of the following is NOT a domain of the Cloud Controls Matrix (CCM)?\n(A) Data center security\n(B) Human resources\n(C) Mobile security\n(D) Budgetary and cost controls",
        "中文题目与选项": "以下哪项不是云控制矩阵（CCM）的域？\n(A) 数据中心安全\n(B) 人力资源\n(C) 移动安全\n(D) 预算和成本控制",
        "答案": "D",
        "来源页码": 127
    },
    {
        "题号": "128",
        "英文题目与选项": "Which security concept, if implemented correctly, will protect the data on a system, even if a malicious actor gains access to the actual system?\n(A) Sandboxing\n(B) Encryption\n(C) Firewalls\n(D) Access control",
        "中文题目与选项": "如果某个安全概念被正确实施，即使恶意行为者获得了系统的实际访问权限，它仍能保护系统中的数据。这个概念是：\n(A) 沙盒\n(B) 加密\n(C) 防火墙\n(D) 访问控制",
        "答案": "B",
        "来源页码": 128
    },
    {
        "题号": "129",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud provider, regardless of which cloud model is used?\n(A) Platform\n(B) Data\n(C) Physical environment\n(D) Infrastructure",
        "中文题目与选项": "以下哪项是云服务提供商在任何云模型中唯一的责任？\n(A) 平台\n(B) 数据\n(C) 物理环境\n(D) 基础设施",
        "答案": "C",
        "来源页码": 129
    },
    {
        "题号": "130",
        "英文题目与选项": "Which of the following is NOT a factor that is part of a firewall configuration?\n(A) Encryption\n(B) Port\n(C) Protocol\n(D) Source IP",
        "中文题目与选项": "以下哪一项不是防火墙配置中的组成因素？\n(A) 加密\n(B) 端口\n(C) 协议\n(D) 源IP地址",
        "答案": "A",
        "来源页码": 130
    },
    {
        "题号": "131",
        "英文题目与选项": "Which of the cloud deployment models involves spanning multiple cloud environments or a mix of cloud hosting models?\n(A) Community\n(B) Public\n(C) Hybrid\n(D) Private",
        "中文题目与选项": "哪一种云部署模型涉及跨多个云环境或混合云托管模型？\n(A) 社区云\n(B) 公有云\n(C) 混合云\n(D) 私有云",
        "答案": "C",
        "来源页码": 131
    },
    {
        "题号": "132",
        "英文题目与选项": "Which of the following is NOT one of five principles of SOC Type 2 audits?\n(A) Privacy\n(B) Processing integrity\n(C) Financial\n(D) Security",
        "中文题目与选项": "以下哪一项不是 SOC Type 2 审计的五项原则之一？\n(A) 隐私\n(B) 处理完整性\n(C) 财务\n(D) 安全",
        "答案": "C",
        "来源页码": 132
    },
    {
        "题号": "133",
        "英文题目与选项": "Which aspect of cloud computing makes data classification even more vital than in a traditional data center?\n(A) Interoperability\n(B) Virtualization\n(C) Multitenancy\n(D) Portability",
        "中文题目与选项": "云计算的哪个方面使得数据分类比在传统数据中心中更加重要？\n(A) 互操作性\n(B) 虚拟化\n(C) 多租户\n(D) 可移植性",
        "答案": "C",
        "来源页码": 133
    },
    {
        "题号": "134",
        "英文题目与选项": "What concept does the \"T\" represent in the STRIDE threat model?\n(A) TLS\n(B) Testing\n(C) Tampering with data\n(D) Transport",
        "中文题目与选项": "在 STRIDE 威胁模型中，字母 “T” 代表的概念是什么？\n(A) TLS\n(B) 测试\n(C) 篡改数据\n(D) 传输",
        "答案": "C",
        "来源页码": 134
    },
    {
        "题号": "135",
        "英文题目与选项": "Which of the following would be a reason to undertake a BCDR test?\n(A) Functional change of the application\n(B) Change in staff\n(C) User interface overhaul of the application\n(D) Change in regulations",
        "中文题目与选项": "以下哪项是进行业务连续性与灾难恢复（BCDR）测试的原因？\n(A) 应用程序功能发生变更\n(B) 员工变动\n(C) 应用程序的用户界面重新设计\n(D) 法规变化",
        "答案": "A",
        "来源页码": 135
    },
    {
        "题号": "136",
        "英文题目与选项": "What is the biggest challenge to data discovery in a cloud environment?\n(A) Format\n(B) Ownership\n(C) Location\n(D) Multitenancy",
        "中文题目与选项": "在云环境中，数据发现面临的最大挑战是什么？\n(A) 格式\n(B) 所有权\n(C) 位置\n(D) 多租户",
        "答案": "C",
        "来源页码": 136
    },
    {
        "题号": "137",
        "英文题目与选项": "Which crucial aspect of cloud computing can be most threatened by insecure APIs?\n(A) Automation\n(B) Redundancy\n(C) Resource pooling\n(D) Elasticity",
        "中文题目与选项": "云计算中的哪个关键方面最容易受到不安全API的威胁？\n(A) 自动化\n(B) 冗余性\n(C) 资源池化\n(D) 弹性",
        "答案": "A",
        "来源页码": 137
    },
    {
        "题号": "138",
        "英文题目与选项": "Which of the following should NOT be part of the requirement analysis phase of the software development lifecycle?\n(A) Functionality\n(B) Programming languages\n(C) Software platform\n(D) Security requirements",
        "中文题目与选项": "以下哪一项不应属于软件开发生命周期的需求分析阶段？\n(A) 功能性\n(B) 编程语言\n(C) 软件平台\n(D) 安全需求",
        "答案": "B",
        "来源页码": 138
    },
    {
        "题号": "139",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the assigning of jobs, tasks, and roles, as well as to ensuring they are successful and properly performed?\n(A) Service-level agreements\n(B) Governance\n(C) Regulatory requirements\n(D) Auditability",
        "中文题目与选项": "以下哪项云计算的跨领域要素与分配工作、任务和角色，以及确保这些工作成功并正确执行有关？\n(A) 服务级别协议\n(B) 治理\n(C) 监管要求\n(D) 可审计性",
        "答案": "B",
        "来源页码": 139
    },
    {
        "题号": "140",
        "英文题目与选项": "Which regulatory system pertains to the protection of healthcare data?\n(A) HIPAA\n(B) HAS\n(C) HITECH\n(D) HFCA",
        "中文题目与选项": "以下哪一监管体系与医疗数据保护有关？\n(A) HIPAA\n(B) HAS\n(C) HITECH\n(D) HFCA",
        "答案": "A",
        "来源页码": 140
    },
    {
        "题号": "141",
        "英文题目与选项": "Which aspect of cloud computing makes it very difficult to perform repeat audits over time to track changes and compliance?\n(A) Virtualization\n(B) Multitenancy\n(C) Resource pooling\n(D) Dynamic optimization",
        "中文题目与选项": "云计算的哪个方面使得随着时间进行重复审计以跟踪变化和合规性变得非常困难？\n(A) 虚拟化\n(B) 多租户\n(C) 资源池化\n(D) 动态优化",
        "答案": "D",
        "来源页码": 141
    },
    {
        "题号": "142",
        "英文题目与选项": "Which security concept would business continuity and disaster recovery fall under?\n(A) Confidentiality\n(B) Availability\n(C) Fault tolerance\n(D) Integrity",
        "中文题目与选项": "业务连续性和灾难恢复属于哪一种安全概念？\n(A) 机密性\n(B) 可用性\n(C) 故障容忍\n(D) 完整性",
        "答案": "B",
        "来源页码": 142
    },
    {
        "题号": "143",
        "英文题目与选项": "Which of the following is NOT an application or utility to apply and enforce baselines on a system?\n(A) Chef\n(B) GitHub\n(C) Puppet\n(D) Active Directory",
        "中文题目与选项": "以下哪一项不是用于在系统上应用和执行基线的应用程序或工具？\n(A) Chef\n(B) GitHub\n(C) Puppet\n(D) Active Directory",
        "答案": "B",
        "来源页码": 143
    },
    {
        "题号": "144",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability for a cloud customer to easily remove their applications and data from a cloud environment?\n(A) Reversibility\n(B) Availability\n(C) Portability\n(D) Interoperability",
        "中文题目与选项": "以下哪一项云计算的跨领域特性与云客户能够轻松从云环境中移除其应用程序和数据的能力相关？\n(A) 可逆性\n(B) 可用性\n(C) 可移植性\n(D) 互操作性",
        "答案": "A",
        "来源页码": 144
    },
    {
        "题号": "145",
        "英文题目与选项": "Which of the following is NOT a function performed by the record protocol of TLS?\n(A) Encryption\n(B) Acceleration\n(C) Authentication\n(D) Compression",
        "中文题目与选项": "以下哪一项不是TLS记录协议执行的功能？\n(A) 加密\n(B) 加速\n(C) 认证\n(D) 压缩",
        "答案": "B",
        "来源页码": 145
    },
    {
        "题号": "146",
        "英文题目与选项": "What concept does the \"R\" represent with the DREAD model?\n(A) Reproducibility\n(B) Repudiation\n(C) Risk\n(D) Residual",
        "中文题目与选项": "在 DREAD 模型中，“R” 代表哪个概念？\n(A) 可再现性\n(B) 否认\n(C) 风险\n(D) 残余",
        "答案": "A",
        "来源页码": 146
    },
    {
        "题号": "147",
        "英文题目与选项": "The SOC Type 2 reports are divided into five principles. Which of the five principles must also be included when auditing any of the other four principles?\n(A) Confidentiality\n(B) Privacy\n(C) Security\n(D) Availability",
        "中文题目与选项": "SOC Type 2 报告分为五个原则。在审计其他四个原则中的任何一个时，以下哪一个原则也必须包括在内？\n(A) 机密性\n(B) 隐私\n(C) 安全性\n(D) 可用性",
        "答案": "C",
        "来源页码": 147
    },
    {
        "题号": "148",
        "英文题目与选项": "How many additional DNS queries are needed when DNSSEC integrity checks are added?\n(A) Three\n(B) Zero\n(C) One\n(D) Two",
        "中文题目与选项": "当添加 DNSSEC 完整性检查时，需要多少额外的 DNS 查询？\n(A) 三个\n(B) 零个\n(C) 一个\n(D) 两个",
        "答案": "B",
        "来源页码": 148
    },
    {
        "题号": "149",
        "英文题目与选项": "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?\n(A) Platform\n(B) Infrastructure\n(C) Governance\n(D) Application",
        "中文题目与选项": "无论使用哪种云模型，下列哪一项是云客户唯一需要负责的内容？\n(A) 平台\n(B) 基础设施\n(C) 治理\n(D) 应用程序",
        "答案": "C",
        "来源页码": 149
    },
    {
        "题号": "150",
        "英文题目与选项": "Which of the following service categories entails the least amount of support needed on the part of the cloud customer?\n(A) SaaS\n(B) IaaS\n(C) DaaS\n(D) PaaS",
        "中文题目与选项": "以下哪种服务类别需要云客户提供的支持最少？\n(A) SaaS（软件即服务）\n(B) IaaS（基础设施即服务）\n(C) DaaS（桌面即服务）\n(D) PaaS（平台即服务）",
        "答案": "A",
        "来源页码": 150
    },
    {
        "题号": "151",
        "英文题目与选项": "Which of the following would NOT be a reason to activate a BCDR strategy?\n(A) Staffing loss\n(B) Terrorism attack\n(C) Utility disruptions\n(D) Natural disaster",
        "中文题目与选项": "下列哪一项不是启动业务连续性与灾难恢复（BCDR）策略的原因？\n(A) 员工流失\n(B) 恐怖袭击\n(C) 公用设施中断\n(D) 自然灾害",
        "答案": "A",
        "来源页码": 151
    },
    {
        "题号": "152",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the oversight of processes and systems, as well as to ensuring their compliance with specific policies and regulations?\n(A) Governance\n(B) Regulatory requirements\n(C) Service-level agreements\n(D) Auditability",
        "中文题目与选项": "以下哪项云的跨领域方面涉及对流程和系统的监督，以及确保其符合特定的政策和法规？\n(A) 治理\n(B) 法规要求\n(C) 服务级别协议\n(D) 可审计性",
        "答案": "A",
        "来源页码": 152
    },
    {
        "题号": "153",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the ability to reuse or move components of an application or service?\n(A) Availability\n(B) Interoperability\n(C) Reversibility\n(D) Portability",
        "中文题目与选项": "以下哪项云计算的跨领域特性与能够重用或迁移应用程序或服务组件的能力有关？\n(A) 可用性\n(B) 互操作性\n(C) 可逆性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 153
    },
    {
        "题号": "154",
        "英文题目与选项": "Which of the following is a restriction that can be enforced by information rights management (IRM) that is not possible for traditional file system controls?\n(A) Delete\n(B) Modify\n(C) Read\n(D) Print",
        "中文题目与选项": "以下哪一项是信息权限管理（IRM）可以强制执行、而传统文件系统控制无法实现的限制？\n(A) 删除\n(B) 修改\n(C) 读取\n(D) 打印",
        "答案": "D",
        "来源页码": 154
    },
    {
        "题号": "155",
        "英文题目与选项": "What strategy involves hiding data in a data set to prevent someone from identifying specific individuals based on other data fields present?\n(A) Anonymization\n(B) Tokenization\n(C) Masking\n(D) Obfuscation",
        "中文题目与选项": "哪种策略通过在数据集中隐藏数据，以防止他人根据其他数据字段来识别特定个人？\n(A) 匿名化\n(B) 令牌化\n(C) 脱敏\n(D) 混淆",
        "答案": "A",
        "来源页码": 155
    },
    {
        "题号": "156",
        "英文题目与选项": "What type of security threat is DNSSEC designed to prevent?\n(A) Account hijacking\n(B) Snooping\n(C) Spoofing\n(D) Injection",
        "中文题目与选项": "DNSSEC旨在防止哪种类型的安全威胁？\n(A) 账户劫持\n(B) 窃听\n(C) 欺骗\n(D) 注入",
        "答案": "C",
        "来源页码": 156
    },
    {
        "题号": "157",
        "英文题目与选项": "Which European Union directive pertains to personal data privacy and an individual's control over their personal data?\n(A) 99/9/EC\n(B) 95/46/EC\n(C) 2000/1/EC\n(D) 2013/27001/EC",
        "中文题目与选项": "哪一项欧盟指令涉及个人数据隐私以及个人对其个人数据的控制权？\n(A) 99/9/EC\n(B) 95/46/EC\n(C) 2000/1/EC\n(D) 2013/27001/EC",
        "答案": "B",
        "来源页码": 157
    },
    {
        "题号": "158",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the requirements placed on a system or application by law, policy, or requirements from standards?\n(A) Regulatory requirements\n(B) Auditability\n(C) Service-level agreements\n(D) Governance",
        "中文题目与选项": "以下哪项云计算的跨领域方面与由法律、政策或标准要求对系统或应用程序施加的要求相关？\n(A) 法规要求\n(B) 可审计性\n(C) 服务级别协议\n(D) 治理",
        "答案": "A",
        "来源页码": 158
    },
    {
        "题号": "159",
        "英文题目与选项": "Which data point that auditors always desire is very difficult to provide within a cloud environment?\n(A) Access policy\n(B) Systems architecture\n(C) Baselines\n(D) Privacy statement",
        "中文题目与选项": "在云环境中，审计人员始终希望获得但非常难以提供的哪一类数据点？\n(A) 访问策略\n(B) 系统架构\n(C) 基线\n(D) 隐私声明",
        "答案": "C",
        "来源页码": 159
    },
    {
        "题号": "160",
        "英文题目与选项": "What type of host is exposed to the public Internet for a specific reason and hardened to perform only that function for authorized users?\n(A) Proxy\n(B) Bastion\n(C) Honeypot\n(D) WAF",
        "中文题目与选项": "哪种类型的主机会为了特定目的暴露在公共互联网中，并经过加固以便仅为授权用户执行该功能？\n(A) 代理服务器\n(B) 堡垒主机\n(C) 蜜罐\n(D) Web 应用防火墙",
        "答案": "B",
        "来源页码": 160
    },
    {
        "题号": "161",
        "英文题目与选项": "Which security concept is focused on the trustworthiness of data?\n(A) Integrity\n(B) Availability\n(C) Nonrepudiation\n(D) Confidentiality",
        "中文题目与选项": "哪个安全概念关注数据的可信度？\n(A) 完整性\n(B) 可用性\n(C) 不可否认性\n(D) 机密性",
        "答案": "A",
        "来源页码": 161
    },
    {
        "题号": "162",
        "英文题目与选项": "Which OSI layer does IPsec operate at?\n(A) Network\n(B) Transport\n(C) Application\n(D) Presentation",
        "中文题目与选项": "IPsec 工作在 OSI 模型的哪一层？\n(A) 网络层\n(B) 传输层\n(C) 应用层\n(D) 表示层",
        "答案": "A",
        "来源页码": 162
    },
    {
        "题号": "163",
        "英文题目与选项": "Which of the cloud cross-cutting aspects relates to the requirements placed on the cloud provider by the cloud customer for minimum performance standards and requirements that must be met?\n(A) Regulatory requirements\n(B) SLAs\n(C) Auditability\n(D) Governance",
        "中文题目与选项": "以下哪个云的跨领域方面与云客户对云服务提供商设定的最低性能标准和必须满足的要求有关？\n(A) 法规要求\n(B) 服务级别协议 (SLA)\n(C) 可审计性\n(D) 治理",
        "答案": "B",
        "来源页码": 163
    },
    {
        "题号": "164",
        "英文题目与选项": "Which of the following service capabilities gives the cloud customer the most control over resources and configurations?\n(A) Desktop\n(B) Platform\n(C) Infrastructure\n(D) Software",
        "中文题目与选项": "以下哪项服务能力让云客户对资源和配置拥有最大的控制权？\n(A) 桌面\n(B) 平台\n(C) 基础设施\n(D) 软件",
        "答案": "C",
        "来源页码": 164
    },
    {
        "题号": "165",
        "英文题目与选项": "What concept does the \"I\" represent with the STRIDE threat model?\n(A) Integrity\n(B) Information disclosure\n(C) IT security\n(D) Insider threat",
        "中文题目与选项": "在 STRIDE 威胁模型中，“I” 代表的概念是什么？\n(A) 完整性\n(B) 信息泄露\n(C) IT 安全\n(D) 内部威胁",
        "答案": "B",
        "来源页码": 165
    },
    {
        "题号": "166",
        "英文题目与选项": "At which stage of the BCDR plan creation phase should security be included in discussions?\n(A) Define scope\n(B) Analyze\n(C) Assess risk\n(D) Gather requirements",
        "中文题目与选项": "在制定业务连续性和灾难恢复（BCDR）计划的哪个阶段，应将安全性纳入讨论？\n(A) 定义范围\n(B) 分析\n(C) 评估风险\n(D) 收集需求",
        "答案": "A",
        "来源页码": 166
    },
    {
        "题号": "167",
        "英文题目与选项": "Which approach is typically the most efficient method to use for data discovery?\n(A) Metadata\n(B) Content analysis\n(C) Labels\n(D) ACLs",
        "中文题目与选项": "以下哪种方法通常是用于数据发现的最高效方法？\n(A) 元数据\n(B) 内容分析\n(C) 标签\n(D) 访问控制列表（ACLs）",
        "答案": "A",
        "来源页码": 167
    },
    {
        "题号": "168",
        "英文题目与选项": "Which of the following features is a main benefit of PaaS over IaaS?\n(A) Location independence\n(B) High availability\n(C) Physical security requirements\n(D) Auto-scaling",
        "中文题目与选项": "以下哪项特性是 PaaS 相对于 IaaS 的主要优势？\n(A) 位置独立性\n(B) 高可用性\n(C) 物理安全要求\n(D) 自动扩展",
        "答案": "D",
        "来源页码": 168
    },
    {
        "题号": "169",
        "英文题目与选项": "Which audit type has been largely replaced by newer approaches since 2011?\n(A) SOC Type 1\n(B) SSAE-16\n(C) SAS-70\n(D) SOC Type 2",
        "中文题目与选项": "自2011年以来，哪种审计类型已被新的方法所取代？\n(A) SOC 类型 1\n(B) SSAE-16\n(C) SAS-70\n(D) SOC 类型 2",
        "答案": "C",
        "来源页码": 169
    },
    {
        "题号": "170",
        "英文题目与选项": "Which of the following can be useful for protecting cloud customers from a denial-of-service (DoS) attack against another customer hosted in the same cloud?\n(A) Reservations\n(B) Measured service\n(C) Limits\n(D) Shares",
        "中文题目与选项": "以下哪项有助于保护云客户，使其免受托管在同一云中的其他客户发起的拒绝服务（DoS）攻击的影响？\n(A) 预留资源\n(B) 可计量服务\n(C) 限制\n(D) 共享",
        "答案": "C",
        "来源页码": 170
    },
    {
        "题号": "171",
        "英文题目与选项": "Which of the following service capabilities gives the cloud customer the least amount of control over configurations and deployments?\n(A) Platform\n(B) Infrastructure\n(C) Software\n(D) Desktop",
        "中文题目与选项": "以下哪种服务能力使云客户对配置和部署的控制最少？\n(A) 平台\n(B) 基础设施\n(C) 软件\n(D) 桌面",
        "答案": "C",
        "来源页码": 171
    },
    {
        "题号": "172",
        "英文题目与选项": "What does the \"SOC\" acronym refer to with audit reports?\n(A) Service Origin Confidentiality\n(B) System Organization Confidentiality\n(C) Service Organizational Control\n(D) System Organization Control",
        "中文题目与选项": "在审计报告中，“SOC”这个缩写指的是什么？\n(A) 服务来源机密性\n(B) 系统组织机密性\n(C) 服务组织控制\n(D) 系统组织控制",
        "答案": "D",
        "来源页码": 172
    },
    {
        "题号": "173",
        "英文题目与选项": "What does the REST API use to protect data transmissions?\n(A) NetBIOS\n(B) VPN\n(C) Encapsulation\n(D) TLS",
        "中文题目与选项": "REST API 使用什么来保护数据传输？\n(A) NetBIOS\n(B) VPN\n(C) 封装\n(D) TLS",
        "答案": "D",
        "来源页码": 173
    },
    {
        "题号": "174",
        "英文题目与选项": "What strategy involves replacing sensitive data with opaque values, usually with a means of mapping it back to the original value?\n(A) Masking\n(B) Anonymization\n(C) Tokenization\n(D) Obfuscation",
        "中文题目与选项": "哪种策略涉及将敏感数据替换为不透明的值，通常有一种方法可以将其映射回原始值？\n(A) 数据掩码\n(B) 匿名化\n(C) 代币化\n(D) 混淆",
        "答案": "C",
        "来源页码": 174
    },
    {
        "题号": "175",
        "英文题目与选项": "With software-defined networking, what aspect of networking is abstracted from the forwarding of traffic?\n(A) Routing\n(B) Session\n(C) Filtering\n(D) Firewalling",
        "中文题目与选项": "在软件定义网络中，哪一项网络功能被从流量转发中抽象出来？\n(A) 路由\n(B) 会话\n(C) 过滤\n(D) 防火墙",
        "答案": "A",
        "来源页码": 175
    },
    {
        "题号": "176",
        "英文题目与选项": "Which of the following does NOT fall under the \"IT\" aspect of quality of service (QoS)?\n(A) Applications\n(B) Key performance indicators (KPIs)\n(C) Services\n(D) Security",
        "中文题目与选项": "以下哪一项不属于服务质量（QoS）的“IT”方面？\n(A) 应用程序\n(B) 关键绩效指标（KPI）\n(C) 服务\n(D) 安全性",
        "答案": "B",
        "来源页码": 176
    },
    {
        "题号": "177",
        "英文题目与选项": "What does dynamic application security testing (DAST) NOT entail?\n(A) Scanning\n(B) Probing\n(C) Discovery\n(D) Knowledge of the system",
        "中文题目与选项": "动态应用程序安全测试（DAST）不包含以下哪项内容？\n(A) 扫描\n(B) 探测\n(C) 发现\n(D) 对系统的了解",
        "答案": "D",
        "来源页码": 177
    },
    {
        "题号": "178",
        "英文题目与选项": "Where is an XML firewall most commonly deployed in the environment?\n(A) Between the application and data layers\n(B) Between the IPS and firewall\n(C) Between the presentation and application layers\n(D) Between the firewall and application server",
        "中文题目与选项": "XML 防火墙最常部署在环境中的哪个位置？\n(A) 应用层与数据层之间\n(B) 入侵防御系统与防火墙之间\n(C) 表现层与应用层之间\n(D) 防火墙与应用服务器之间",
        "答案": "D",
        "来源页码": 178
    },
    {
        "题号": "179",
        "英文题目与选项": "What type of masking strategy involves replacing data on a system while it passes between the data and application layers?\n(A) Dynamic\n(B) Static\n(C) Replication\n(D) Duplication",
        "中文题目与选项": "哪种类型的数据遮罩策略是在数据通过数据层和应用层之间时替换系统上的数据？\n(A) 动态遮罩\n(B) 静态遮罩\n(C) 复制\n(D) 重复",
        "答案": "A",
        "来源页码": 179
    },
    {
        "题号": "180",
        "英文题目与选项": "Which of the following is a widely used tool for code development, branching, and collaboration?\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "中文题目与选项": "以下哪一个是广泛用于代码开发、分支和协作的工具？\n(A) GitHub\n(B) Maestro\n(C) Orchestrator\n(D) Conductor",
        "答案": "A",
        "来源页码": 180
    },
    {
        "题号": "181",
        "英文题目与选项": "Which aspect of security is DNSSEC designed to ensure?\n(A) Integrity\n(B) Authentication\n(C) Availability\n(D) Confidentiality",
        "中文题目与选项": "DNSSEC旨在确保安全性的哪个方面？\n(A) 完整性\n(B) 认证\n(C) 可用性\n(D) 机密性",
        "答案": "A",
        "来源页码": 181
    },
    {
        "题号": "182",
        "英文题目与选项": "Which process serves to prove the identity and credentials of a user requesting access to an application or data?\n(A) Repudiation\n(B) Authentication\n(C) Identification\n(D) Authorization",
        "中文题目与选项": "哪个过程用于证明请求访问应用程序或数据的用户的身份和凭证？\n(A) 否认\n(B) 认证\n(C) 标识\n(D) 授权",
        "答案": "B",
        "来源页码": 182
    },
    {
        "题号": "183",
        "英文题目与选项": "Who would be responsible for implementing IPsec to secure communications for an application?\n(A) Developers\n(B) Systems staff\n(C) Auditors\n(D) Cloud customer",
        "中文题目与选项": "谁负责实施 IPsec 以保护应用程序的通信安全？\n(A) 开发人员\n(B) 系统工作人员\n(C) 审计人员\n(D) 云客户",
        "答案": "B",
        "来源页码": 183
    },
    {
        "题号": "184",
        "英文题目与选项": "What is the minimum regularity for testing a BCDR plan to meet best practices?\n(A) Once a year\n(B) Once a month\n(C) Every six months\n(D) When the budget allows it",
        "中文题目与选项": "为了符合最佳实践，测试业务连续性与灾难恢复（BCDR）计划的最低频率是什么？\n(A) 每年一次\n(B) 每月一次\n(C) 每六个月一次\n(D) 根据预算情况决定",
        "答案": "A",
        "来源页码": 184
    },
    {
        "题号": "185",
        "英文题目与选项": "Other than cost savings realized due to measured service, what is another facet of cloud computing that will typically save substantial costs in time and money for an organization in the event of a disaster?\n(A) Broad network access\n(B) Interoperability\n(C) Resource pooling\n(D) Portability",
        "中文题目与选项": "除了通过可计量服务实现的成本节约之外，云计算的另一个特点是什么，可以在发生灾难时为组织节省大量时间和金钱？\n(A) 广泛的网络访问\n(B) 互操作性\n(C) 资源池化\n(D) 可移植性",
        "答案": "C",
        "来源页码": 185
    },
    {
        "题号": "186",
        "英文题目与选项": "Which of the following is NOT part of a retention policy?\n(A) Format\n(B) Costs\n(C) Accessibility\n(D) Duration",
        "中文题目与选项": "以下哪一项不属于保留策略的一部分？\n(A) 格式\n(B) 成本\n(C) 可访问性\n(D) 保留期限",
        "答案": "B",
        "来源页码": 186
    },
    {
        "题号": "187",
        "英文题目与选项": "Which aspect of cloud computing would make the use of a cloud the most attractive as a BCDR solution?\n(A) Interoperability\n(B) Resource pooling\n(C) Portability\n(D) Measured service",
        "中文题目与选项": "云计算的哪个方面使其作为业务连续性和灾难恢复（BCDR）解决方案最具吸引力？\n(A) 互操作性\n(B) 资源池化\n(C) 可移植性\n(D) 可计量服务",
        "答案": "D",
        "来源页码": 187
    },
    {
        "题号": "188",
        "英文题目与选项": "Which of the cloud deployment models offers the easiest initial setup and access for the cloud customer?\n(A) Hybrid\n(B) Community\n(C) Private\n(D) Public",
        "中文题目与选项": "以下哪种云部署模型为云客户提供了最简单的初始设置和访问？\n(A) 混合云\n(B) 社区云\n(C) 私有云\n(D) 公有云",
        "答案": "D",
        "来源页码": 188
    },
    {
        "题号": "189",
        "英文题目与选项": "Which of the following is NOT something that an HIDS will monitor?\n(A) Configurations\n(B) User logins\n(C) Critical system files\n(D) Network traffic",
        "中文题目与选项": "以下哪项不是HIDS（主机入侵检测系统）会监控的内容？\n(A) 配置\n(B) 用户登录\n(C) 关键系统文件\n(D) 网络流量",
        "答案": "D",
        "来源页码": 189
    },
    {
        "题号": "190",
        "英文题目与选项": "Which of the following technologies is used to monitor network traffic and notify if any potential threats or attacks are noticed?\n(A) IPS\n(B) WAF\n(C) Firewall\n(D) IDS",
        "中文题目与选项": "以下哪种技术用于监控网络流量，并在检测到潜在威胁或攻击时发出通知？\n(A) 入侵防御系统（IPS）\n(B) Web应用防火墙（WAF）\n(C) 防火墙\n(D) 入侵检测系统（IDS）",
        "答案": "D",
        "来源页码": 190
    },
    {
        "题号": "191",
        "英文题目与选项": "What concept does the \"A\" represent in the DREAD model?\n(A) Affected users\n(B) Authentication\n(C) Affinity\n(D) Authorization",
        "中文题目与选项": "在 DREAD 模型中，“A” 代表什么概念？\n(A) 受影响的用户\n(B) 认证\n(C) 亲和性\n(D) 授权",
        "答案": "A",
        "来源页码": 191
    },
    {
        "题号": "192",
        "英文题目与选项": "Which attribute of data poses the biggest challenge for data discovery?\n(A) Labels\n(B) Quality\n(C) Volume\n(D) Format",
        "中文题目与选项": "数据的哪个属性对数据发现构成最大的挑战？\n(A) 标签\n(B) 质量\n(C) 体量\n(D) 格式",
        "答案": "C",
        "来源页码": 192
    },
    {
        "题号": "193",
        "英文题目与选项": "What does static application security testing (SAST) offer as a tool to the testers?\n(A) Production system scanning\n(B) Injection attempts\n(C) Source code access\n(D) Live testing",
        "中文题目与选项": "静态应用程序安全测试（SAST）为测试人员提供了哪种工具？\n(A) 生产系统扫描\n(B) 注入尝试\n(C) 源代码访问\n(D) 实时测试",
        "答案": "C",
        "来源页码": 193
    },
    {
        "题号": "194",
        "英文题目与选项": "Which of the following service capabilities gives the cloud customer an established and maintained framework to deploy code and applications?\n(A) Software\n(B) Desktop\n(C) Platform\n(D) Infrastructure",
        "中文题目与选项": "以下哪项服务功能为云客户提供用于部署代码和应用程序的已建立和维护的框架？\n(A) 软件\n(B) 桌面\n(C) 平台\n(D) 基础设施",
        "答案": "C",
        "来源页码": 194
    },
    {
        "题号": "195",
        "英文题目与选项": "What process is used within a cloud environment to maintain resource balancing and ensure that resources are available where and when needed?\n(A) Dynamic clustering\n(B) Dynamic balancing\n(C) Dynamic resource scheduling\n(D) Dynamic optimization",
        "中文题目与选项": "在云环境中使用哪种过程来保持资源平衡，并确保在需要的时间和地点资源可用？\n(A) 动态集群\n(B) 动态平衡\n(C) 动态资源调度\n(D) 动态优化",
        "答案": "C",
        "来源页码": 195
    },
    {
        "题号": "196",
        "英文题目与选项": "Which value refers to the percentage of production level restoration needed to meet BCDR objectives?\n(A) RPO\n(B) RTO\n(C) RSL\n(D) SRE",
        "中文题目与选项": "哪个数值表示为满足 BCDR 目标所需的生产水平恢复百分比？\n(A) RPO（恢复点目标）\n(B) RTO（恢复时间目标）\n(C) RSL（恢复服务级别）\n(D) SRE（服务恢复事件）",
        "答案": "C",
        "来源页码": 196
    },
    {
        "题号": "197",
        "英文题目与选项": "Over time, what is a primary concern for data archiving?\n(A) Size of archives\n(B) Format of archives\n(C) Recoverability\n(D) Regulatory changes",
        "中文题目与选项": "随着时间推移，数据归档的主要关注点是什么？\n(A) 归档的大小\n(B) 归档的格式\n(C) 可恢复性\n(D) 法规变化",
        "答案": "C",
        "来源页码": 197
    },
    {
        "题号": "198",
        "英文题目与选项": "What is an often overlooked concept that is essential to protecting the confidentiality of data?\n(A) Strong password\n(B) Training\n(C) Security controls\n(D) Policies",
        "中文题目与选项": "哪一个经常被忽视但对保护数据机密性至关重要的概念？\n(A) 强密码\n(B) 培训\n(C) 安全控制\n(D) 策略",
        "答案": "B",
        "来源页码": 198
    },
    {
        "题号": "199",
        "英文题目与选项": "Which of the cloud deployment models offers the most control and input to the cloud customer as to how the overall cloud environment is implemented and configured?\n(A) Public\n(B) Community\n(C) Hybrid\n(D) Private",
        "中文题目与选项": "以下哪种云部署模型为云客户在整体云环境的实现和配置方面提供了最多的控制和输入？\n(A) 公有云\n(B) 社区云\n(C) 混合云\n(D) 私有云",
        "答案": "D",
        "来源页码": 199
    },
    {
        "题号": "200",
        "英文题目与选项": "What concept does the \"D\" represent with the STRIDE threat model?\n(A) Data loss\n(B) Denial of service\n(C) Data breach\n(D) Distributed",
        "中文题目与选项": "在 STRIDE 威胁模型中，“D”代表的概念是什么？\n(A) 数据丢失\n(B) 拒绝服务\n(C) 数据泄露\n(D) 分布式",
        "答案": "B",
        "来源页码": 200
    },
    {
        "题号": "201",
        "英文题目与选项": "Your boss has tasked your team with getting your legacy systems and applications connected with new cloud-based services that management has decided are crucial to customer service and offerings. Which role would you be assuming under this directive?\n(A) Cloud service administrator\n(B) Cloud service user\n(C) Cloud service integrator\n(D) Cloud service business manager",
        "中文题目与选项": "你的上司要求你的团队将现有的传统系统和应用程序与管理层认为对客户服务和产品至关重要的新云端服务连接起来。在此任务下，你将承担哪种角色？\n(A) 云服务管理员\n(B) 云服务用户\n(C) 云服务集成商\n(D) 云服务业务经理",
        "答案": "C",
        "来源页码": 201
    },
    {
        "题号": "202",
        "英文题目与选项": "One of the main components of system audits is the ability to track changes over time and to match these changes with continued compliance and internal processes. Which aspect of cloud computing makes this particular component more challenging than in a traditional data center?\n(A) Portability\n(B) Virtualization\n(C) Elasticity\n(D) Resource pooling",
        "中文题目与选项": "系统审计的主要组成部分之一是能够随着时间跟踪变更，并将这些变更与持续的合规性和内部流程相匹配。与传统数据中心相比，云计算的哪个特性使该组件更具挑战性？\n(A) 可移植性\n(B) 虚拟化\n(C) 弹性\n(D) 资源池化",
        "答案": "C",
        "来源页码": 202
    },
    {
        "题号": "203",
        "英文题目与选项": "In the wake of many scandals with major corporations involving fraud and the deception of investors and regulators, which of the following laws was passed to govern accounting and financial records and disclosures?\n(A) GLBA\n(B) Safe Harbor\n(C) HIPAA\n(D) SOX",
        "中文题目与选项": "在多家大型公司卷入涉及欺诈以及欺骗投资者和监管机构的丑闻之后，下列哪项法律被颁布以规范会计和财务记录及披露？\n(A) GLBA（格雷姆-里奇-布利利法案）\n(B) 安全港协议\n(C) HIPAA（健康保险携带与责任法案）\n(D) SOX（萨班斯-奥克斯利法案）",
        "答案": "D",
        "来源页码": 203
    },
    {
        "题号": "204",
        "英文题目与选项": "Which one of the following threat types to applications and services involves the sending of requests that are invalid and manipulated through a user's client to execute commands on the application under the user's own credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种针对应用程序和服务的威胁类型涉及通过用户的客户端发送无效且被篡改的请求，从而利用用户自己的凭据在应用程序上执行命令？\n(A) 注入攻击\n(B) 缺少功能级访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "D",
        "来源页码": 204
    },
    {
        "题号": "205",
        "英文题目与选项": "Which cloud service category would be most ideal for a cloud customer that is developing software to test its applications among multiple hosting providers to determine the best option for its needs?\n(A) DaaS\n(B) PaaS\n(C) IaaS\n(D) SaaS",
        "中文题目与选项": "对于一个正在开发软件以在多个托管服务提供商之间测试其应用程序，以确定最合适选项的云客户，哪个云服务类别最理想？\n(A) DaaS（桌面即服务）\n(B) PaaS（平台即服务）\n(C) IaaS（基础架构即服务）\n(D) SaaS（软件即服务）",
        "答案": "C",
        "来源页码": 205
    },
    {
        "题号": "206",
        "英文题目与选项": "You just hired an outside developer to modernize some applications with new web services and functionality. In order to implement a comprehensive test platform for validation, the developer needs a data set that resembles a production data set in both size and composition. In order to accomplish this, what type of masking would you use?\n(A) Development\n(B) Replicated\n(C) Static\n(D) Dynamic",
        "中文题目与选项": "你刚刚雇用了一名外部开发人员，用新的网络服务和功能对一些应用程序进行现代化改造。为了实现可验证的综合测试平台，开发人员需要一个在规模和组成上都与生产数据集相似的数据集。为了实现这一目标，你应使用哪种类型的数据屏蔽？\n(A) 开发型\n(B) 复制型\n(C) 静态型\n(D) 动态型",
        "答案": "C",
        "来源页码": 206
    },
    {
        "题号": "207",
        "英文题目与选项": "In order to prevent cloud customers from potentially consuming enormous amounts of resources within a cloud environment and thus having a negative impact on other customers, what concept is commonly used by a cloud provider?\n(A) Limit\n(B) Cap\n(C) Throttle\n(D) Reservation",
        "中文题目与选项": "为了防止云客户在云环境中可能消耗大量资源，从而对其他客户造成负面影响，云服务提供商通常会使用哪种概念？\n(A) 限制\n(B) 上限\n(C) 节流\n(D) 预留",
        "答案": "A",
        "来源页码": 207
    },
    {
        "题号": "208",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data at rest?\n(A) Network firewall\n(B) Host system\n(C) Application server\n(D) Database server",
        "中文题目与选项": "当用于监控静态数据时，DLP（数据防泄漏）解决方案通常安装在什么位置？\n(A) 网络防火墙\n(B) 主机系统\n(C) 应用服务器\n(D) 数据库服务器",
        "答案": "B",
        "来源页码": 208
    },
    {
        "题号": "209",
        "英文题目与选项": "Which of the following aspects of security is solely the responsibility of the cloud provider?\n(A) Regulatory compliance\n(B) Physical security\n(C) Operating system auditing\n(D) Personal security of developers",
        "中文题目与选项": "以下哪些安全方面完全由云服务提供商负责？\n(A) 合规性监管\n(B) 物理安全\n(C) 操作系统审计\n(D) 开发人员的人身安全",
        "答案": "B",
        "来源页码": 209
    },
    {
        "题号": "210",
        "英文题目与选项": "Humidity levels for a data center are a prime concern for maintaining electrical and computing resources properly as well as ensuring that conditions are optimal for top performance. Which of the following is the optimal humidity level, as established by ASHRAE?\n(A) 20 to 40 percent relative humidity\n(B) 50 to 75 percent relative humidity\n(C) 40 to 60 percent relative humidity\n(D) 30 to 50 percent relative humidity",
        "中文题目与选项": "数据中心的湿度水平对于正确维护电气与计算资源，以及确保环境条件达到最佳性能至关重要。根据 ASHRAE 的规定，下列哪一项是最佳湿度范围？\n(A) 相对湿度 20%–40%\n(B) 相对湿度 50%–75%\n(C) 相对湿度 40%–60%\n(D) 相对湿度 30%–50%",
        "答案": "C",
        "来源页码": 210
    },
    {
        "题号": "211",
        "英文题目与选项": "Within a SaaS environment, what is the responsibility on the part of the cloud customer in regard to procuring the software used?\n(A) Maintenance\n(B) Licensing\n(C) Development\n(D) Purchasing",
        "中文题目与选项": "在 SaaS 环境中，云客户在获取所使用软件方面的责任是什么？\n(A) 维护\n(B) 授权\n(C) 开发\n(D) 采购",
        "答案": "B",
        "来源页码": 211
    },
    {
        "题号": "212",
        "英文题目与选项": "Implementing baselines on systems would take an enormous amount of time and resources if the staff had to apply them to each server, and over time, it would be almost impossible to keep all the systems in sync on an ongoing basis. Which of the following is NOT a package that can be used for implementing and maintaining baselines across an enterprise?\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "中文题目与选项": "在各系统上实施基线将耗费大量的时间和资源，如果工作人员必须将其应用到每一台服务器，随着时间的推移，几乎不可能使所有系统持续保持同步。以下哪一个不是可用于在企业范围内实施和维护基线的工具包？\n(A) Puppet\n(B) SCCM\n(C) Chef\n(D) GitHub",
        "答案": "D",
        "来源页码": 212
    },
    {
        "题号": "213",
        "英文题目与选项": "From the perspective of compliance, what is the most important consideration when it comes to data center location?\n(A) Natural disasters\n(B) Utility access\n(C) Jurisdiction\n(D) Personnel access",
        "中文题目与选项": "从合规性的角度来看，在选择数据中心位置时，最重要的考虑因素是什么？\n(A) 自然灾害\n(B) 公共设施接入\n(C) 司法管辖权\n(D) 人员访问",
        "答案": "C",
        "来源页码": 213
    },
    {
        "题号": "214",
        "英文题目与选项": "Different certifications and standards take different approaches to data center design and operations. Although many traditional approaches use a tiered methodology, which of the following utilizes a macro-level approach to data center design?\n(A) IDCA\n(B) BICSI\n(C) Uptime Institute\n(D) NFPA",
        "中文题目与选项": "不同的认证和标准对数据中心的设计和运营采用了不同的方法。虽然许多传统方法采用分级方法论，但以下哪一个采用宏观层面的数据中心设计方法？\n(A) IDCA\n(B) BICSI\n(C) Uptime Institute\n(D) NFPA",
        "答案": "A",
        "来源页码": 214
    },
    {
        "题号": "215",
        "英文题目与选项": "The European Union is often considered the world leader in regard to the privacy of personal data and has declared privacy to be a \"human right.\" In what year did the EU first assert this principle?\n(A) 1995\n(B) 2000\n(C) 2010\n(D) 1999",
        "中文题目与选项": "欧盟通常被认为是全球在个人数据隐私方面的领导者，并已将隐私宣告为“人权”。欧盟首次提出这一原则是在哪一年？\n(A) 1995\n(B) 2000\n(C) 2010\n(D) 1999",
        "答案": "A",
        "来源页码": 215
    },
    {
        "题号": "216",
        "英文题目与选项": "A DLP solution/implementation has three main components. Which of the following is NOT one of the three main components?\n(A) Monitoring\n(B) Enforcement\n(C) Auditing\n(D) Discovery and classification",
        "中文题目与选项": "DLP（数据泄露防护）解决方案/实施包含三个主要组件。以下哪项不是这三个主要组件之一？\n(A) 监控\n(B) 执行\n(C) 审计\n(D) 发现与分类",
        "答案": "C",
        "来源页码": 216
    },
    {
        "题号": "217",
        "英文题目与选项": "What type of storage structure does object storage employ to maintain files?\n(A) Directory\n(B) Hierarchical\n(C) Tree\n(D) Flat",
        "中文题目与选项": "对象存储使用哪种存储结构来管理文件？\n(A) 目录结构\n(B) 层次结构\n(C) 树形结构\n(D) 扁平结构",
        "答案": "D",
        "来源页码": 217
    },
    {
        "题号": "218",
        "英文题目与选项": "Which cloud storage type requires special consideration on the part of the cloud customer to ensure they do not program themselves into a vendor lock-in situation?\n(A) Unstructured\n(B) Object\n(C) Volume\n(D) Structured",
        "中文题目与选项": "哪种云存储类型需要云客户特别注意，以确保他们不会在程序开发时陷入厂商锁定的情况？\n(A) 非结构化\n(B) 对象存储\n(C) 卷存储\n(D) 结构化存储",
        "答案": "B",
        "来源页码": 218
    },
    {
        "题号": "219",
        "英文题目与选项": "Which cloud deployment model would be ideal for a group of universities looking to work together, where each university can gain benefits according to its specific needs?\n(A) Private\n(B) Public\n(C) Hybrid\n(D) Community",
        "中文题目与选项": "一组希望共同合作的大学，哪种云部署模型最理想，以便每个大学都能根据其特定需求获得相应的收益？\n(A) 私有云\n(B) 公有云\n(C) 混合云\n(D) 社区云",
        "答案": "D",
        "来源页码": 219
    },
    {
        "题号": "220",
        "英文题目与选项": "Data centers have enormous power resources that are distributed and consumed throughout the entire facility. Which of the following standards pertains to the proper fire safety standards within that scope?\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime Institute",
        "中文题目与选项": "数据中心在整个设施中分配和消耗大量电力资源。以下哪项标准涉及该范围内的适当消防安全标准？\n(A) IDCA\n(B) BICSI\n(C) NFPA\n(D) Uptime研究所",
        "答案": "C",
        "来源页码": 220
    },
    {
        "题号": "221",
        "英文题目与选项": "Which of the following threat types involves an application that does not validate authorization for portions of itself beyond when the user first enters it?\n(A) Cross-site request forgery\n(B) Missing function-level access control\n(C) Injection\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种威胁类型涉及一个应用程序在用户首次进入后未对其内部各部分进行授权验证？\n(A) 跨站请求伪造\n(B) 缺少功能级访问控制\n(C) 注入攻击\n(D) 跨站脚本攻击",
        "答案": "B",
        "来源页码": 221
    },
    {
        "题号": "222",
        "英文题目与选项": "Clustered systems can be used to ensure high availability and load balancing across individual systems through a variety of methodologies. What process is used within a clustered system to ensure proper load balancing and to maintain the health of the overall system to provide high availability?\n(A) Distributed clustering\n(B) Distributed balancing\n(C) Distributed optimization\n(D) Distributed resource scheduling",
        "中文题目与选项": "集群系统可用于通过多种方法确保高可用性和跨单个系统的负载均衡。集群系统中使用哪种过程来确保适当的负载均衡，并维护整个系统的健康状态以实现高可用性？\n(A) 分布式集群\n(B) 分布式平衡\n(C) 分布式优化\n(D) 分布式资源调度",
        "答案": "D",
        "来源页码": 222
    },
    {
        "题号": "223",
        "英文题目与选项": "Although the REST API supports a wide variety of data formats for communications and exchange, which data formats are the most commonly used?\n(A) SAML and HTML\n(B) XML and SAML\n(C) XML and JSON\n(D) JSON and SAML",
        "中文题目与选项": "虽然 REST API 支持多种数据格式用于通信和交换，但最常用的数据格式是哪两种？\n(A) SAML 和 HTML\n(B) XML 和 SAML\n(C) XML 和 JSON\n(D) JSON 和 SAML",
        "答案": "C",
        "来源页码": 223
    },
    {
        "题号": "224",
        "英文题目与选项": "The share phase of the cloud data lifecycle involves allowing data to leave the application, to be shared with external systems, services, or even other vendors/contractors. What technology would be useful for protecting data at this point?\n(A) IDS\n(B) DLP\n(C) IPS\n(D) WAF",
        "中文题目与选项": "云数据生命周期的共享阶段涉及允许数据离开应用程序，与外部系统、服务甚至其他供应商或承包商共享。在此阶段，哪种技术可用于保护数据？\n(A) 入侵检测系统（IDS）\n(B) 数据泄露防护（DLP）\n(C) 入侵防御系统（IPS）\n(D) Web应用防火墙（WAF）",
        "答案": "B",
        "来源页码": 224
    },
    {
        "题号": "225",
        "英文题目与选项": "When an API is being leveraged, it will encapsulate its data for transmission back to the requesting party or service. What is the data encapsulation used with the SOAP protocol referred to as?\n(A) Packet\n(B) Payload\n(C) Object\n(D) Envelope",
        "中文题目与选项": "当使用 API 时，它会封装数据以传输回请求方或服务端。SOAP 协议中所使用的数据封装称为什么？\n(A) 数据包\n(B) 有效载荷\n(C) 对象\n(D) 封套",
        "答案": "D",
        "来源页码": 225
    },
    {
        "题号": "226",
        "英文题目与选项": "From a security perspective, what component of a cloud computing infrastructure represents the biggest concern?\n(A) Hypervisor\n(B) Management plane\n(C) Object storage\n(D) Encryption",
        "中文题目与选项": "从安全角度来看，云计算基础设施中哪个组件代表最大的安全隐患？\n(A) 虚拟机监控器（Hypervisor）\n(B) 管理平面\n(C) 对象存储\n(D) 加密",
        "答案": "B",
        "来源页码": 226
    },
    {
        "题号": "227",
        "英文题目与选项": "Which of the following is NOT one of the main intended goals of a DLP solution?\n(A) Showing due diligence\n(B) Preventing malicious insiders\n(C) Regulatory compliance\n(D) Managing and minimizing risk",
        "中文题目与选项": "以下哪项不是数据泄露防护（DLP）解决方案的主要预期目标？\n(A) 展示尽职调查\n(B) 防止恶意内部人员\n(C) 合规监管要求\n(D) 管理和最小化风险",
        "答案": "B",
        "来源页码": 227
    },
    {
        "题号": "228",
        "英文题目与选项": "Data center and operations design traditionally takes a tiered, topological approach. Which of the following standards is focused on that approach and is prevalently used throughout the industry?\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "中文题目与选项": "数据中心和运营设计传统上采用分层拓扑结构的方式。以下哪项标准专注于这种方法，并且在整个行业中被广泛使用？\n(A) IDCA\n(B) NFPA\n(C) BICSI\n(D) Uptime Institute",
        "答案": "D",
        "来源页码": 228
    },
    {
        "题号": "229",
        "英文题目与选项": "Jurisdictions have a broad range of privacy requirements pertaining to the handling of personal data and information. Which jurisdiction requires all storage and processing of data that pertains to its citizens to be done on hardware that is physically located within its borders?\n(A) Japan\n(B) United States\n(C) European Union\n(D) Russia",
        "中文题目与选项": "不同司法管辖区在处理个人数据和信息方面有广泛的隐私要求。以下哪个司法辖区要求与其公民有关的所有数据存储和处理必须在物理上位于其境内的硬件上进行？\n(A) 日本\n(B) 美国\n(C) 欧盟\n(D) 俄罗斯",
        "答案": "D",
        "来源页码": 229
    },
    {
        "题号": "230",
        "英文题目与选项": "The management plane is used to administer a cloud environment and perform administrative tasks across a variety of systems, but most specifically it's used with the hypervisors. What does the management plane typically leverage for this orchestration?\n(A) APIs\n(B) Scripts\n(C) TLS\n(D) XML",
        "中文题目与选项": "管理平面用于管理云环境，并在各种系统上执行管理任务，尤其是与虚拟机管理程序（hypervisor）一起使用。管理平面通常利用什么来实现这种编排？\n(A) API\n(B) 脚本\n(C) TLS\n(D) XML",
        "答案": "A",
        "来源页码": 230
    },
    {
        "题号": "231",
        "英文题目与选项": "When dealing with PII, which category pertains to those requirements that can carry legal sanctions or penalties for failure to adequately safeguard the data and address compliance requirements?\n(A) Contractual\n(B) Jurisdictional\n(C) Regulated\n(D) Legal",
        "中文题目与选项": "在处理个人可识别信息（PII）时，哪一类要求涉及在未能充分保护数据并满足合规要求时可能受到法律制裁或处罚？\n(A) 合同性\n(B) 司法管辖性\n(C) 受监管的\n(D) 法律性",
        "答案": "C",
        "来源页码": 231
    },
    {
        "题号": "232",
        "英文题目与选项": "Although the United States does not have a single, comprehensive privacy and regulatory framework, a number of specific regulations pertain to types of data or populations. Which of the following is NOT a regulatory system from the United States federal government?\n(A) HIPAA\n(B) SOX\n(C) FISMA\n(D) PCI DSS",
        "中文题目与选项": "虽然美国没有单一的、全面的隐私和监管框架，但有若干针对特定数据类型或人群的具体法规。以下哪一项不是来自美国联邦政府的监管体系？\n(A) 健康保险可携性与责任法案（HIPAA）\n(B) 萨班斯-奥克斯利法案（SOX）\n(C) 联邦信息安全管理法案（FISMA）\n(D) 支付卡行业数据安全标准（PCI DSS）",
        "答案": "D",
        "来源页码": 232
    },
    {
        "题号": "233",
        "英文题目与选项": "The president of your company has tasked you with implementing cloud services as the most efficient way of obtaining a robust disaster recovery configuration for your production services. Which of the cloud deployment models would you MOST likely be exploring?\n(A) Hybrid\n(B) Private\n(C) Community\n(D) Public",
        "中文题目与选项": "你公司的总裁委托你实施云服务，以最有效的方式为公司的生产服务获得一个稳健的灾难恢复配置。你最可能考虑的是哪种云部署模型？\n(A) 混合云\n(B) 私有云\n(C) 社区云\n(D) 公有云",
        "答案": "D",
        "来源页码": 233
    },
    {
        "题号": "234",
        "英文题目与选项": "If you are running an application that has strict legal requirements that the data cannot reside on systems that contain other applications or systems, which aspect of cloud computing would be prohibitive in this case?\n(A) Multitenancy\n(B) Broad network access\n(C) Portability\n(D) Elasticity",
        "中文题目与选项": "如果您运行的应用程序有严格的法律要求，数据不能与其他应用程序或系统共存于同一系统上，那么在这种情况下，云计算的哪个特性会成为障碍？\n(A) 多租户性\n(B) 广泛的网络访问\n(C) 可移植性\n(D) 弹性",
        "答案": "A",
        "来源页码": 234
    },
    {
        "题号": "235",
        "英文题目与选项": "The REST API is a widely used standard for communications of web-based services between clients and the servers hosting them. Which protocol does the REST API depend on?\n(A) HTTP\n(B) SSH\n(C) SAML\n(D) XML",
        "中文题目与选项": "REST API 是一种广泛使用的标准，用于在客户端和托管它们的服务器之间进行基于网络的服务通信。REST API 依赖于哪种协议？\n(A) HTTP\n(B) SSH\n(C) SAML\n(D) XML",
        "答案": "A",
        "来源页码": 235
    },
    {
        "题号": "236",
        "英文题目与选项": "Which of the following actions will NOT make data part of the create phase of the cloud data lifecycle?\n(A) Modify data\n(B) Modify metadata\n(C) New data\n(D) Import data",
        "中文题目与选项": "以下哪项操作不会使数据成为云数据生命周期创建阶段的一部分？\n(A) 修改数据\n(B) 修改元数据\n(C) 新数据\n(D) 导入数据",
        "答案": "B",
        "来源页码": 236
    },
    {
        "题号": "237",
        "英文题目与选项": "Most APIs will support a variety of different data formats or structures. However, the SOAP API will only support which one of the following data formats?\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "中文题目与选项": "大多数 API 支持多种不同的数据格式或结构。然而，SOAP API 只支持以下哪一种数据格式？\n(A) XML\n(B) XSLT\n(C) JSON\n(D) SAML",
        "答案": "A",
        "来源页码": 237
    },
    {
        "题号": "238",
        "英文题目与选项": "Which cloud storage type is typically used to house virtual machine images that are used throughout the environment?\n(A) Structured\n(B) Unstructured\n(C) Volume\n(D) Object",
        "中文题目与选项": "哪种云存储类型通常用于存放在整个环境中使用的虚拟机镜像？\n(A) 结构化\n(B) 非结构化\n(C) 卷存储\n(D) 对象存储",
        "答案": "D",
        "来源页码": 238
    },
    {
        "题号": "239",
        "英文题目与选项": "With an API, various features and optimizations are highly desirable to scalability, reliability, and security. What does the REST API support that the SOAP API does NOT support?\n(A) Acceleration\n(B) Caching\n(C) Redundancy\n(D) Encryption",
        "中文题目与选项": "在 API 中，各种功能和优化对于可扩展性、可靠性和安全性都非常重要。REST API 支持而 SOAP API 不支持的是什么？\n(A) 加速\n(B) 缓存\n(C) 冗余\n(D) 加密",
        "答案": "B",
        "来源页码": 239
    },
    {
        "题号": "240",
        "英文题目与选项": "Although much of the attention given to data security is focused on keeping data private and only accessible by authorized individuals, of equal importance is the trustworthiness of the data. Which concept encapsulates this?\n(A) Validity\n(B) Integrity\n(C) Accessibility\n(D) Confidentiality",
        "中文题目与选项": "尽管在数据安全中，人们往往关注如何确保数据的隐私性和仅由授权人员访问，但同样重要的是数据的可靠性。哪个概念能够体现这一点？\n(A) 有效性\n(B) 完整性\n(C) 可访问性\n(D) 机密性",
        "答案": "B",
        "来源页码": 240
    },
    {
        "题号": "241",
        "英文题目与选项": "Three central concepts define what type of data and information an organization is responsible for pertaining to eDiscovery. Which of the following are the three components that comprise required disclosure?\n(A) Possession, ownership, control\n(B) Ownership, use, creation\n(C) Control, custody, use\n(D) Possession, custody, control",
        "中文题目与选项": "有三个核心概念定义了一个组织在电子取证（eDiscovery）中所应负责的数据和信息类型。以下哪一项是构成所需披露的三个要素？\n(A) 占有、所有权、控制\n(B) 所有权、使用、创建\n(C) 控制、保管、使用\n(D) 占有、保管、控制",
        "答案": "D",
        "来源页码": 241
    },
    {
        "题号": "242",
        "英文题目与选项": "Which of the following threat types involves the sending of commands or arbitrary data through input fields in an application in an attempt to get that code executed as part of normal processing?\n(A) Cross-site scripting\n(B) Missing function-level access control\n(C) Injection\n(D) Cross-site forgery",
        "中文题目与选项": "以下哪种威胁类型涉及通过应用程序中的输入字段发送命令或任意数据，试图让该代码作为正常处理的一部分执行？\n(A) 跨站脚本攻击\n(B) 缺少函数级访问控制\n(C) 注入攻击\n(D) 跨站请求伪造",
        "答案": "C",
        "来源页码": 242
    },
    {
        "题号": "243",
        "英文题目与选项": "With a cloud service category where the cloud customer is responsible for deploying all services, systems, and components needed for their applications, which of the following storage types are MOST likely to be available to them?\n(A) Structured and hierarchical\n(B) Volume and object\n(C) Volume and database\n(D) Structured and unstructured",
        "中文题目与选项": "在一种云服务类别中，云客户负责为其应用程序部署所有服务、系统和组件。以下哪种存储类型最有可能可供他们使用？\n(A) 结构化和分层型\n(B) 卷和对象存储\n(C) 卷和数据库存储\n(D) 结构化和非结构化存储",
        "答案": "B",
        "来源页码": 243
    },
    {
        "题号": "244",
        "英文题目与选项": "Which of the following roles would be responsible for managing memberships in federations and the use and integration of federated services?\n(A) Inter-cloud provider\n(B) Cloud service business manager\n(C) Cloud service administrator\n(D) Cloud service integrator",
        "中文题目与选项": "以下哪种角色负责在联合体中管理成员资格以及联合服务的使用和集成？\n(A) 跨云服务提供者\n(B) 云服务业务经理\n(C) 云服务管理员\n(D) 云服务集成商",
        "答案": "D",
        "来源页码": 244
    },
    {
        "题号": "245",
        "英文题目与选项": "Which data state would be most likely to use TLS as a protection mechanism?\n(A) Data in use\n(B) Data at rest\n(C) Archived\n(D) Data in transit",
        "中文题目与选项": "哪个数据状态最有可能使用 TLS 作为保护机制？\n(A) 使用中的数据\n(B) 静态数据\n(C) 存档数据\n(D) 传输中的数据",
        "答案": "D",
        "来源页码": 245
    },
    {
        "题号": "246",
        "英文题目与选项": "You are working for a cloud service provider and receive an eDiscovery order pertaining to one of your customers. Which of the following would be the most appropriate action to take first?\n(A) Take a snapshot of the virtual machines\n(B) Escrow the encryption keys\n(C) Copy the data\n(D) Notify the customer",
        "中文题目与选项": "你在一家云服务提供商工作，并收到与某个客户相关的电子取证（eDiscovery）命令。以下哪一项是首先应采取的最合适行动？\n(A) 对虚拟机进行快照\n(B) 托管加密密钥\n(C) 复制数据\n(D) 通知客户",
        "答案": "D",
        "来源页码": 246
    },
    {
        "题号": "247",
        "英文题目与选项": "If a cloud computing customer wishes to guarantee that a minimum level of resources will always be available, which of the following set of services would comprise the reservation?\n(A) Memory and networking\n(B) CPU and software\n(C) CPU and storage\n(D) CPU and memory",
        "中文题目与选项": "如果云计算客户希望保证始终可用的最低资源水平，下列哪组服务将构成该资源预留？\n(A) 内存和网络\n(B) CPU 和软件\n(C) CPU 和存储\n(D) CPU 和内存",
        "答案": "D",
        "来源页码": 247
    },
    {
        "题号": "248",
        "英文题目与选项": "Which of the following threat types can occur when baselines are not appropriately applied or when unauthorized changes are made?\n(A) Security misconfiguration\n(B) Insecure direct object references\n(C) Unvalidated redirects and forwards\n(D) Sensitive data exposure",
        "中文题目与选项": "当未正确应用基线或出现未经授权的更改时，以下哪种威胁类型可能发生？\n(A) 安全配置错误\n(B) 不安全的直接对象引用\n(C) 未验证的重定向和转发\n(D) 敏感数据泄露",
        "答案": "A",
        "来源页码": 248
    },
    {
        "题号": "249",
        "英文题目与选项": "Which of the following is considered an internal redundancy for a data center?\n(A) Power feeds\n(B) Chillers\n(C) Network circuits\n(D) Generators",
        "中文题目与选项": "以下哪一项被认为是数据中心的内部冗余？\n(A) 电力馈线\n(B) 冷水机组\n(C) 网络线路\n(D) 发电机",
        "答案": "B",
        "来源页码": 249
    },
    {
        "题号": "250",
        "英文题目与选项": "Which of the following threat types involves the sending of invalid and manipulated requests through a user's client to execute commands on the application under their own credentials?\n(A) Injection\n(B) Cross-site request forgery\n(C) Missing function-level access control\n(D) Cross-site scripting",
        "中文题目与选项": "以下哪种威胁类型涉及通过用户的客户端发送无效和被操纵的请求，以其自己的凭证在应用程序上执行命令？\n(A) 注入攻击\n(B) 跨站请求伪造\n(C) 缺失功能级访问控制\n(D) 跨站脚本攻击",
        "答案": "B",
        "来源页码": 250
    },
    {
        "题号": "251",
        "英文题目与选项": "With finite resources available within a cloud, even the largest cloud providers will at times need to determine which customers will receive additional resources first. What is the term associated with this determination?\n(A) Weighting\n(B) Prioritization\n(C) Shares\n(D) Scoring",
        "中文题目与选项": "在云环境中，资源是有限的，即使是最大的云服务提供商也需要在某些时候决定哪些客户能够优先获得额外资源。与这种决策相关的术语是什么？\n(A) 加权\n(B) 优先级划分\n(C) 份额\n(D) 评分",
        "答案": "C",
        "来源页码": 251
    },
    {
        "题号": "252",
        "英文题目与选项": "In order to comply with regulatory requirements, which of the following secure erasure methods would be available to a cloud customer using volume storage within the IaaS service model?\n(A) Demagnetizing\n(B) Shredding\n(C) Degaussing\n(D) Cryptographic erasure",
        "中文题目与选项": "为了遵守监管要求，对于在 IaaS 服务模型中使用卷存储的云客户，以下哪种安全擦除方法是可用的？\n(A) 去磁\n(B) 粉碎\n(C) 消磁\n(D) 加密擦除",
        "答案": "D",
        "来源页码": 252
    },
    {
        "题号": "253",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data in use?\n(A) Application server\n(B) Database server\n(C) Network perimeter\n(D) User's client",
        "中文题目与选项": "当用于监控使用中的数据时，DLP 解决方案通常安装在哪里？\n(A) 应用服务器\n(B) 数据库服务器\n(C) 网络边界\n(D) 用户客户端",
        "答案": "D",
        "来源页码": 253
    },
    {
        "题号": "254",
        "英文题目与选项": "Which of the following aspects of cloud computing would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?\n(A) Regulation\n(B) Multitenancy\n(C) Virtualization\n(D) Resource pooling",
        "中文题目与选项": "以下哪项云计算特性更可能导致云服务提供商不愿意满足特定的认证要求？\n(A) 法规\n(B) 多租户\n(C) 虚拟化\n(D) 资源池化",
        "答案": "B",
        "来源页码": 254
    },
    {
        "题号": "255",
        "英文题目与选项": "Which phase of the cloud data lifecycle would be the MOST appropriate for the use of DLP technologies to protect the data?\n(A) Use\n(B) Store\n(C) Share\n(D) Create",
        "中文题目与选项": "云数据生命周期的哪个阶段最适合使用数据泄露防护（DLP）技术来保护数据？\n(A) 使用\n(B) 存储\n(C) 共享\n(D) 创建",
        "答案": "C",
        "来源页码": 255
    },
    {
        "题号": "256",
        "英文题目与选项": "During which phase of the cloud data lifecycle is it possible for the classification of data to change?\n(A) Use\n(B) Archive\n(C) Create\n(D) Share",
        "中文题目与选项": "在云数据生命周期的哪个阶段，数据的分类可能会发生变化？\n(A) 使用\n(B) 存档\n(C) 创建\n(D) 共享",
        "答案": "A",
        "来源页码": 256
    },
    {
        "题号": "257",
        "英文题目与选项": "If a key feature of cloud computing that your organization desires is the ability to scale and expand without limit or concern about available resources, which cloud deployment model would you MOST likely be considering?\n(A) Public\n(B) Hybrid\n(C) Private\n(D) Community",
        "中文题目与选项": "如果您的组织希望云计算的关键特性是能够无限制地扩展，而不必担心可用资源，那么您最有可能考虑哪种云部署模型？\n(A) 公有云\n(B) 混合云\n(C) 私有云\n(D) 社区云",
        "答案": "A",
        "来源页码": 257
    },
    {
        "题号": "258",
        "英文题目与选项": "What is a serious complication an organization faces from the compliance perspective with international operations?\n(A) Multiple jurisdictions\n(B) Different certifications\n(C) Different operational procedures\n(D) Different capabilities",
        "中文题目与选项": "从合规角度来看，拥有国际业务的组织面临的一个严重复杂问题是什么？\n(A) 多重管辖区\n(B) 不同的认证\n(C) 不同的操作程序\n(D) 不同的能力",
        "答案": "A",
        "来源页码": 258
    },
    {
        "题号": "259",
        "英文题目与选项": "ISO/IEC has established international standards for many aspects of computing and any processes or procedures related to information technology. Which ISO/IEC standard has been established to provide a framework for handling eDiscovery processes?\n(A) ISO/IEC 27001\n(B) ISO/IEC 27002\n(C) ISO/IEC 27040\n(D) ISO/IEC 27050",
        "中文题目与选项": "ISO/IEC 已经为计算机的多个方面以及与信息技术相关的任何流程或程序建立了国际标准。哪一项 ISO/IEC 标准旨在为处理电子取证（eDiscovery）流程提供框架？\n(A) ISO/IEC 27001\n(B) ISO/IEC 27002\n(C) ISO/IEC 27040\n(D) ISO/IEC 27050",
        "答案": "D",
        "来源页码": 259
    },
    {
        "题号": "260",
        "英文题目与选项": "If a company needed to guarantee through contract and SLAs that a cloud provider would always have available sufficient resources to start their services and provide a certain level of provisioning, what would the contract need to refer to?\n(A) Limit\n(B) Reservation\n(C) Assurance\n(D) Guarantee",
        "中文题目与选项": "如果一家公司需要通过合同和服务水平协议 (SLA) 来保证云服务提供商始终具备足够的资源，以便启动其服务并提供一定水平的资源供给，那么合同应该引用哪一项？\n(A) 限制\n(B) 预留\n(C) 保证\n(D) 担保",
        "答案": "B",
        "来源页码": 260
    },
    {
        "题号": "261",
        "英文题目与选项": "Many aspects and features of cloud computing can make eDiscovery compliance more difficult or costly. Which aspect of cloud computing would be the MOST complicating factor?\n(A) Measured service\n(B) Broad network access\n(C) Multitenancy\n(D) Portability",
        "中文题目与选项": "云计算的许多方面和特性可能使电子取证合规变得更加困难或昂贵。哪个云计算的特性是最复杂的因素？\n(A) 可计量服务\n(B) 广泛的网络访问\n(C) 多租户\n(D) 可移植性",
        "答案": "C",
        "来源页码": 261
    },
    {
        "题号": "262",
        "英文题目与选项": "A crucial decision any company must make is in regard to where it hosts the data systems it depends on. A debate exists as to whether it's best to lease space in a data center or build your own data center -- and now with cloud computing, whether to purchase resources within a cloud. What is the biggest advantage to leasing space in a data center versus procuring cloud services?\n(A) Regulations\n(B) Control\n(C) Security\n(D) Costs",
        "中文题目与选项": "任何公司都必须做出的一个关键决策是确定其依赖的数据系统的托管位置。目前存在这样的争论：是租用数据中心空间更好，还是建立自己的数据中心——而随着云计算的兴起，是否应在云中购买资源。与采购云服务相比，租用数据中心空间的最大优势是什么？\n(A) 合规要求\n(B) 控制权\n(C) 安全性\n(D) 成本",
        "答案": "B",
        "来源页码": 262
    },
    {
        "题号": "263",
        "英文题目与选项": "Which of the following systems is used to employ a variety of different techniques to discover and alert on threats and potential threats to systems and networks?\n(A) IDS\n(B) IPS\n(C) Firewall\n(D) WAF",
        "中文题目与选项": "以下哪种系统用于采用多种不同的技术来发现并警示系统和网络中的威胁及潜在威胁？\n(A) 入侵检测系统（IDS）\n(B) 入侵防御系统（IPS）\n(C) 防火墙\n(D) Web应用防火墙（WAF）",
        "答案": "A",
        "来源页码": 263
    },
    {
        "题号": "264",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "以下哪一个不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 264
    },
    {
        "题号": "265",
        "英文题目与选项": "In order to ensure ongoing compliance with regulatory requirements, which phase of the cloud data lifecycle must be tested regularly?\n(A) Archive\n(B) Share\n(C) Store\n(D) Destroy",
        "中文题目与选项": "为了确保持续符合监管要求，云数据生命周期的哪个阶段必须定期进行测试？\n(A) 归档\n(B) 共享\n(C) 存储\n(D) 销毁",
        "答案": "A",
        "来源页码": 265
    },
    {
        "题号": "266",
        "英文题目与选项": "Which of the following threat types involves leveraging a user's browser to send untrusted data to be executed with legitimate access via the user's valid credentials?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "以下哪种威胁类型涉及利用用户的浏览器发送不受信任的数据，并通过用户的有效凭证以合法访问权限执行该数据？\n(A) 注入攻击\n(B) 缺少功能级访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "D",
        "来源页码": 266
    },
    {
        "题号": "267",
        "英文题目与选项": "Digital investigations have adopted many of the same methodologies and protocols as other types of criminal or scientific inquiries. What term pertains to the application of scientific norms and protocols to digital investigations?\n(A) Scientific\n(B) Investigative\n(C) Methodological\n(D) Forensics",
        "中文题目与选项": "数字调查采用了与其他类型的刑事或科学调查相同的许多方法和协议。哪个术语涉及将科学规范和协议应用于数字调查？\n(A) 科学的\n(B) 调查的\n(C) 方法的\n(D) 法医的",
        "答案": "D",
        "来源页码": 267
    },
    {
        "题号": "268",
        "英文题目与选项": "Within a federated identity system, which entity accepts tokens from the identity provider?\n(A) Assertion manager\n(B) Servicing party\n(C) Proxy party\n(D) Relying party",
        "中文题目与选项": "在联合身份认证系统中，哪个实体接收来自身份提供者的令牌？\n(A) 断言管理器\n(B) 服务方\n(C) 代理方\n(D) 依赖方",
        "答案": "D",
        "来源页码": 268
    },
    {
        "题号": "269",
        "英文题目与选项": "Different types of audits are intended for different audiences, such as internal, external, regulatory, and so on. Which of the following audits are considered 'restricted use' versus being for a more broad audience?\n(A) SOC Type 2\n(B) SOC Type 1\n(C) SOC Type 3\n(D) SAS-70",
        "中文题目与选项": "不同类型的审计面向不同的受众，例如内部、外部、监管机构等。以下哪种审计被认为是“限制使用”的，而不是面向更广泛受众的？\n(A) SOC Type 2\n(B) SOC Type 1\n(C) SOC Type 3\n(D) SAS-70",
        "答案": "A",
        "来源页码": 269
    },
    {
        "题号": "270",
        "英文题目与选项": "Although host-based and network-based IDSs perform similar functions and have similar capabilities, which of the following is an advantage of a network-based IDS over a host-based IDS, assuming all capabilities are equal?\n(A) Segregated from host systems\n(B) Network access\n(C) Scalability\n(D) External to system patching",
        "中文题目与选项": "尽管主机型和网络型入侵检测系统（IDS）具有类似的功能和能力，但在假设两者能力相同的情况下，下列哪一项是网络型 IDS 相对于主机型 IDS 的优势？\n(A) 与主机系统隔离\n(B) 网络访问\n(C) 可扩展性\n(D) 不受系统补丁影响",
        "答案": "A",
        "来源页码": 270
    },
    {
        "题号": "271",
        "英文题目与选项": "DNSSEC was designed to add a layer of security to the DNS protocol. Which type of attack was the DNSSEC extension designed to mitigate?\n(A) Account hijacking\n(B) Snooping\n(C) Spoofing\n(D) Data exposure",
        "中文题目与选项": "DNSSEC 旨在为 DNS 协议增加一层安全性。DNSSEC 扩展旨在缓解哪种类型的攻击？\n(A) 账户劫持\n(B) 窃听\n(C) 欺骗\n(D) 数据泄露",
        "答案": "C",
        "来源页码": 271
    },
    {
        "题号": "272",
        "英文题目与选项": "Which aspect of cloud computing pertains to cloud customers only paying for the resources and services they actually use?\n(A) Metered service\n(B) Measured billing\n(C) Metered billing\n(D) Measured service",
        "中文题目与选项": "云计算的哪个方面涉及到云客户只需为其实际使用的资源和服务付费？\n(A) 计量服务\n(B) 测量计费\n(C) 计量计费\n(D) 测量服务",
        "答案": "D",
        "来源页码": 272
    },
    {
        "题号": "273",
        "英文题目与选项": "Many of the traditional concepts of systems and services for a traditional data center also apply to the cloud. Both are built around key computing concepts. Which of the following comprise the two facets of computing?\n(A) CPU and software\n(B) CPU and storage\n(C) CPU and memory\n(D) Memory and networking",
        "中文题目与选项": "许多传统数据中心的系统和服务的概念同样适用于云环境。二者都基于关键的计算概念。以下哪一项是计算的两个基本方面？\n(A) CPU 和软件\n(B) CPU 和存储\n(C) CPU 和内存\n(D) 内存 和 网络",
        "答案": "C",
        "来源页码": 273
    },
    {
        "题号": "274",
        "英文题目与选项": "With a cloud service category where the cloud customer is provided a full application framework into which to deploy their code and services, which storage types are MOST likely to be available to them?\n(A) Structured and unstructured\n(B) Structured and hierarchical\n(C) Volume and database\n(D) Volume and object",
        "中文题目与选项": "在一种云服务类别中，云客户被提供了一个完整的应用程序框架，可以在其中部署其代码和服务，那么他们最可能可用的存储类型是哪些？\n(A) 结构化与非结构化\n(B) 结构化与层次化\n(C) 卷存储与数据库\n(D) 卷存储与对象存储",
        "答案": "A",
        "来源页码": 274
    },
    {
        "题号": "275",
        "英文题目与选项": "Firewalls are used to provide network security throughout an enterprise and to control what information can be accessed—and to a certain extent, through what means. Which of the following is NOT something that firewalls are concerned with?\n(A) IP address\n(B) Encryption\n(C) Port\n(D) Protocol",
        "中文题目与选项": "防火墙用于在整个企业范围内提供网络安全，并控制可以访问哪些信息，以及在某种程度上通过何种方式访问。以下哪一项不是防火墙所关注的内容？\n(A) IP 地址\n(B) 加密\n(C) 端口\n(D) 协议",
        "答案": "B",
        "来源页码": 275
    },
    {
        "题号": "276",
        "英文题目与选项": "Within an IaaS implementation, which of the following would NOT be a metric used to quantify service charges for the cloud customer?\n(A) Memory\n(B) Number of users\n(C) Storage\n(D) CPU",
        "中文题目与选项": "在 IaaS 实现中，以下哪项不是用于量化云客户服务收费的指标？\n(A) 内存\n(B) 用户数量\n(C) 存储\n(D) CPU",
        "答案": "B",
        "来源页码": 276
    },
    {
        "题号": "277",
        "英文题目与选项": "Many different common threats exist against web-exposed services and applications. One attack involves attempting to leverage input fields to execute queries in a nested fashion that is unintended by the developers. What type of attack is this?\n(A) Injection\n(B) Missing function-level access control\n(C) Cross-site scripting\n(D) Cross-site request forgery",
        "中文题目与选项": "许多常见的威胁存在于对外暴露的 Web 服务和应用程序中。其中一种攻击方式是试图利用输入字段以开发人员未预期的嵌套方式执行查询。这是哪种类型的攻击？\n(A) 注入攻击\n(B) 缺少函数级访问控制\n(C) 跨站脚本攻击\n(D) 跨站请求伪造",
        "答案": "A",
        "来源页码": 277
    },
    {
        "题号": "278",
        "英文题目与选项": "For service provisioning and support, what is the ideal amount of interaction between a cloud customer and cloud provider?\n(A) Half\n(B) Full\n(C) Minimal\n(D) Depends on the contract",
        "中文题目与选项": "在进行服务供应和支持时，云客户与云服务提供商之间的理想交互量是多少？\n(A) 一半\n(B) 全部\n(C) 最少\n(D) 取决于合同",
        "答案": "C",
        "来源页码": 278
    },
    {
        "题号": "279",
        "英文题目与选项": "What does a cloud customer purchase or obtain from a cloud provider?\n(A) Services\n(B) Hosting\n(C) Servers\n(D) Customers",
        "中文题目与选项": "云客户从云服务提供商处购买或获得的是什么？\n(A) 服务\n(B) 托管\n(C) 服务器\n(D) 客户",
        "答案": "A",
        "来源页码": 279
    },
    {
        "题号": "280",
        "英文题目与选项": "Which phase of the cloud data lifecycle represents the first instance where security controls can be implemented?\n(A) Use\n(B) Share\n(C) Store\n(D) Create",
        "中文题目与选项": "云数据生命周期的哪个阶段代表首次可以实施安全控制的环节？\n(A) 使用\n(B) 共享\n(C) 存储\n(D) 创建",
        "答案": "D",
        "来源页码": 280
    },
    {
        "题号": "281",
        "英文题目与选项": "You were recently hired as a project manager at a major university to implement cloud services for the academic and administrative systems. Because the load and demand for services at a university are very cyclical in nature, commensurate with the academic calendar, which of the following aspects of cloud computing would NOT be a primary benefit to you?\n(A) Measured service\n(B) Broad network access\n(C) Resource pooling\n(D) On-demand self-service",
        "中文题目与选项": "你最近被聘为一所大型大学的项目经理，负责为学术和行政系统实施云服务。由于大学的服务负载和需求具有与学年周期相吻合的周期性特征，以下哪一项云计算特性对你来说**不会**是主要的好处？\n(A) 可计量服务\n(B) 广泛的网络访问\n(C) 资源池化\n(D) 按需自助服务",
        "答案": "B",
        "来源页码": 281
    },
    {
        "题号": "282",
        "英文题目与选项": "Which cloud deployment model is MOST likely to offer free or very cheap services to users?\n(A) Hybrid\n(B) Community\n(C) Public\n(D) Private",
        "中文题目与选项": "哪种云部署模型最有可能向用户提供免费或非常廉价的服务？\n(A) 混合云\n(B) 社区云\n(C) 公有云\n(D) 私有云",
        "答案": "C",
        "来源页码": 282
    },
    {
        "题号": "283",
        "英文题目与选项": "Where is a DLP solution generally installed when utilized for monitoring data in transit?\n(A) Network perimeter\n(B) Database server\n(C) Application server\n(D) Web server",
        "中文题目与选项": "当用于监控传输中的数据时，DLP（数据泄露防护）解决方案通常安装在哪里？\n(A) 网络边界\n(B) 数据库服务器\n(C) 应用服务器\n(D) Web服务器",
        "答案": "A",
        "来源页码": 283
    },
    {
        "题号": "284",
        "英文题目与选项": "With IaaS, what is responsible for handling the security and control over the volume storage space?\n(A) Management plane\n(B) Operating system\n(C) Application\n(D) Hypervisor",
        "中文题目与选项": "在 IaaS 模式下，哪个组件负责处理卷存储空间的安全和控制？\n(A) 管理平面\n(B) 操作系统\n(C) 应用程序\n(D) 虚拟机管理程序（Hypervisor）",
        "答案": "B",
        "来源页码": 284
    },
    {
        "题号": "285",
        "英文题目与选项": "Configurations and policies for a system can come from a variety of sources and take a variety of formats. Which concept pertains to the application of a set of configurations and policies that is applied to all systems or a class of systems?\n(A) Hardening\n(B) Leveling\n(C) Baselines\n(D) Standards",
        "中文题目与选项": "一个系统的配置和策略可以来自多种来源，并采用多种格式。以下哪个概念与将一组配置和策略应用于所有系统或某一类系统有关？\n(A) 加固\n(B) 分级\n(C) 基线\n(D) 标准",
        "答案": "C",
        "来源页码": 285
    },
    {
        "题号": "286",
        "英文题目与选项": "Which of the following tasks within a SaaS environment would NOT be something the cloud customer would be responsible for?\n(A) Authentication mechanism\n(B) Branding\n(C) Training\n(D) User access",
        "中文题目与选项": "在以下关于 SaaS 环境的任务中，哪一项不是云客户需要负责的？\n(A) 身份验证机制\n(B) 品牌定制\n(C) 培训\n(D) 用户访问",
        "答案": "A",
        "来源页码": 286
    },
    {
        "题号": "287",
        "英文题目与选项": "An SLA contains the official requirements for contract performance and satisfaction between the cloud provider and cloud customer. Which of the following would NOT be a component with measurable metrics and requirements as part of an SLA?\n(A) Network\n(B) Users\n(C) Memory\n(D) CPU",
        "中文题目与选项": "SLA（服务等级协议）包含云服务提供商与云客户之间关于合同绩效和满意度的正式要求。以下哪项不会作为SLA中具有可度量指标和要求的组成部分？\n(A) 网络\n(B) 用户\n(C) 内存\n(D) CPU",
        "答案": "B",
        "来源页码": 287
    },
    {
        "题号": "288",
        "英文题目与选项": "Within a federated identity system, which of the following would you be MOST likely to use for sending information for consumption by a relying party?\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "中文题目与选项": "在联合身份系统中，以下哪一项最有可能用于向依赖方发送可供其使用的信息？\n(A) XML\n(B) HTML\n(C) WS-Federation\n(D) SAML",
        "答案": "D",
        "来源页码": 288
    },
    {
        "题号": "289",
        "英文题目与选项": "Which data state would be most likely to use digital signatures as a security protection mechanism?\n(A) Data in use\n(B) Data in transit\n(C) Archived\n(D) Data at rest",
        "中文题目与选项": "哪一种数据状态最有可能使用数字签名作为安全防护机制？\n(A) 使用中的数据\n(B) 传输中的数据\n(C) 存档数据\n(D) 静止数据",
        "答案": "B",
        "来源页码": 289
    },
    {
        "题号": "290",
        "英文题目与选项": "There is a large gap between the privacy laws of the United States and those of the European Union. Bridging this gap is necessary for American companies to do business with European companies and in European markets in many situations, as the American companies are required to comply with the stricter requirements. Which US program was designed to help companies overcome these differences?\n(A) SOX\n(B) HIPAA\n(C) GLBA\n(D) Safe Harbor",
        "中文题目与选项": "美国与欧盟的隐私法之间存在很大的差距。为了使美国公司能够在许多情况下与欧洲公司开展业务并进入欧洲市场，弥合这一差距是必要的，因为美国公司必须遵守更严格的要求。哪一个美国项目旨在帮助公司克服这些差异？\n(A) SOX 法案\n(B) HIPAA 法案\n(C) GLBA 法案\n(D) 安全港（Safe Harbor）",
        "答案": "D",
        "来源页码": 290
    },
    {
        "题号": "291",
        "英文题目与选项": "Audits are either done based on the status of a system or application at a specific time or done as a study over a period of time that takes into account changes and processes. Which of the following pairs matches an audit type that is done over time, along with the minimum span of time necessary for it?\n(A) SOC Type 2, one year\n(B) SOC Type 1, one year\n(C) SOC Type 2, one month\n(D) SOC Type 2, six months",
        "中文题目与选项": "审计可以基于系统或应用程序在某一特定时间的状态进行，也可以作为一个研究，在一段时间内考虑到变化和过程。以下哪一项匹配的是一种在时间段内进行的审计类型，以及其所需的最短时间跨度？\n(A) SOC 类型 2， 一年\n(B) SOC 类型 1， 一年\n(C) SOC 类型 2， 一个月\n(D) SOC 类型 2， 六个月",
        "答案": "D",
        "来源页码": 291
    },
    {
        "题号": "292",
        "英文题目与选项": "With software-defined networking (SDN), which two types of network operations are segregated to allow for granularity and delegation of administrative access and functions?\n(A) Filtering and forwarding\n(B) Filtering and firewalling\n(C) Firewalling and forwarding\n(D) Forwarding and protocol",
        "中文题目与选项": "在软件定义网络（SDN）中，为了实现更精细的管理和管理访问权限的委派，哪两种类型的网络操作被分离？\n(A) 过滤与转发\n(B) 过滤与防火墙\n(C) 防火墙与转发\n(D) 转发与协议",
        "答案": "A",
        "来源页码": 292
    },
    {
        "题号": "293",
        "英文题目与选项": "Along with humidity, temperature is crucial to a data center for optimal operations and protection of equipment. Which of the following is the optimal temperature range as set by ASHRAE?\n(A) 69.8 to 86.0 degrees Fahrenheit (21 to 30 degrees Celsius)\n(B) 51.8 to 66.2 degrees Fahrenheit (11 to 19 degrees Celsius)\n(C) 64.4 to 80.6 degrees Fahrenheit (18 to 27 degrees Celsius)\n(D) 44.6 to 60.8 degrees Fahrenheit (7 to 16 degrees Celsius)",
        "中文题目与选项": "除了湿度之外，温度对于数据中心的最佳运行和设备保护也至关重要。根据 ASHRAE 的规定，下列哪个是最佳的温度范围？\n(A) 69.8 至 86.0 华氏度（21 至 30 摄氏度）\n(B) 51.8 至 66.2 华氏度（11 至 19 摄氏度）\n(C) 64.4 至 80.6 华氏度（18 至 27 摄氏度）\n(D) 44.6 至 60.8 华氏度（7 至 16 摄氏度）",
        "答案": "C",
        "来源页码": 293
    },
    {
        "题号": "294",
        "英文题目与选项": "Which of the following statements best describes a Type 1 hypervisor?\n(A) The hypervisor software runs within an operating system tied to the hardware.\n(B) The hypervisor software runs as a client on a server and needs an external service to administer it.\n(C) The hypervisor software runs on top of an application layer.\n(D) The hypervisor software runs directly on bare metal without an intermediary.",
        "中文题目与选项": "以下哪项陈述最能描述 Type 1 型虚拟机管理程序？\n(A) 虚拟机管理程序软件在与硬件绑定的操作系统中运行。\n(B) 虚拟机管理程序软件作为客户端在服务器上运行，并需要外部服务来管理它。\n(C) 虚拟机管理程序软件运行在应用层之上。\n(D) 虚拟机管理程序软件直接运行在物理硬件上，没有中间层。",
        "答案": "D",
        "来源页码": 294
    },
    {
        "题号": "295",
        "英文题目与选项": "Which cloud storage type resembles a virtual hard drive and can be utilized in the same manner and with the same type of features and capabilities?\n(A) Volume\n(B) Unstructured\n(C) Structured\n(D) Object",
        "中文题目与选项": "哪种云存储类型类似于虚拟硬盘，并且可以以相同的方式和相同类型的特性与功能来使用？\n(A) 卷存储\n(B) 非结构化存储\n(C) 结构化存储\n(D) 对象存储",
        "答案": "A",
        "来源页码": 295
    },
    {
        "题号": "296",
        "英文题目与选项": "Which aspect of SaaS will alleviate much of the time and energy organizations spend on compliance (specifically baselines)?\n(A) Maintenance\n(B) Licensing\n(C) Standardization\n(D) Development",
        "中文题目与选项": "SaaS 的哪个方面能够减轻组织在合规性（特别是基线）上花费的大量时间和精力？\n(A) 维护\n(B) 许可\n(C) 标准化\n(D) 开发",
        "答案": "C",
        "来源页码": 296
    },
    {
        "题号": "297",
        "英文题目与选项": "Many tools and technologies are available for securing or monitoring data in transit within a data center, whether it is a traditional data center or a cloud. Which of the following is NOT a technology for securing data in transit?\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "中文题目与选项": "在数据中心（无论是传统数据中心还是云环境）中，有许多工具和技术可用于保护或监控传输中的数据。以下哪项不是用于保护传输中数据的技术？\n(A) VPN\n(B) TLS\n(C) DNSSEC\n(D) HTTPS",
        "答案": "C",
        "来源页码": 297
    },
    {
        "题号": "298",
        "英文题目与选项": "With a federated identity system, where would a user perform their authentication when requesting services or application access?\n(A) Cloud provider\n(B) The application\n(C) Their home organization\n(D) Third-party authentication system",
        "中文题目与选项": "在联合身份系统中，当用户请求服务或应用访问时，他们会在哪里进行身份验证？\n(A) 云服务提供商\n(B) 应用程序\n(C) 其所属组织\n(D) 第三方身份验证系统",
        "答案": "C",
        "来源页码": 298
    },
    {
        "题号": "299",
        "英文题目与选项": "Where is an XML firewall most commonly and effectively deployed in the environment?\n(A) Between the application and data layers\n(B) Between the presentation and application layers\n(C) Between the IPS and firewall\n(D) Between the firewall and application server",
        "中文题目与选项": "在环境中，XML 防火墙最常见且最有效的部署位置是哪里？\n(A) 位于应用层与数据层之间\n(B) 位于表示层与应用层之间\n(C) 位于入侵防御系统 (IPS) 与防火墙之间\n(D) 位于防火墙与应用服务器之间",
        "答案": "D",
        "来源页码": 299
    },
    {
        "题号": "300",
        "英文题目与选项": "Modern web service systems are designed for high availability and resiliency. Which concept pertains to the ability to detect problems within a system, environment, or application and programmatically invoke redundant systems or processes for mitigation?\n(A) Elasticity\n(B) Redundancy\n(C) Fault tolerance\n(D) Automation",
        "中文题目与选项": "现代 Web 服务系统旨在实现高可用性和弹性。以下哪个概念涉及在系统、环境或应用程序中检测问题，并以编程方式调用冗余系统或流程进行缓解？\n(A) 弹性\n(B) 冗余\n(C) 故障容忍\n(D) 自动化",
        "答案": "C",
        "来源页码": 300
    },
    {
        "题号": "301",
        "英文题目与选项": "On large distributed systems with pooled resources, cloud computing relies on extensive orchestration to maintain the environment and the constant provisioning of resources. Which of the following is crucial to the orchestration and automation of networking resources within a cloud?\n(A) DNSSEC\n(B) DNS\n(C) DCOM\n(D) DHCP",
        "中文题目与选项": "在具有资源池的大型分布式系统中，云计算依靠广泛的编排来维护环境并持续配置资源。以下哪项对于云中网络资源的编排和自动化至关重要？\n(A) DNSSEC\n(B) DNS\n(C) DCOM\n(D) DHCP",
        "答案": "D",
        "来源页码": 301
    },
    {
        "题号": "302",
        "英文题目与选项": "BCDR strategies do not typically involve the entire operations of an organization, but only those deemed critical to their business. Which concept pertains to the amount of services that need to be recovered to meet BCDR objectives?\n(A) RSL\n(B) RTO\n(C) RPO\n(D) SRE",
        "中文题目与选项": "BCDR 策略通常不涉及组织的全部运营，而只包括被认为对其业务至关重要的部分。以下哪一概念与为了满足 BCDR 目标而需要恢复的服务数量相关？\n(A) RSL\n(B) RTO\n(C) RPO\n(D) SRE",
        "答案": "A",
        "来源页码": 302
    },
    {
        "题号": "303",
        "英文题目与选项": "During the course of an audit, which of the following would NOT be an input into the control requirements used as part of a gap analysis?\n(A) Contractual requirements\n(B) Regulations\n(C) Vendor recommendations\n(D) Corporate policy",
        "中文题目与选项": "在审计过程中，以下哪一项不会作为差距分析中控制要求的输入？\n(A) 合同要求\n(B) 法规\n(C) 供应商建议\n(D) 公司政策",
        "答案": "C",
        "来源页码": 303
    },
    {
        "题号": "304",
        "英文题目与选项": "The GAPP framework was developed through a joint effort between the major Canadian and American professional accounting associations in order to assist their members with managing and preventing risks to the privacy of their data and customers. Which of the following is the meaning of GAPP?\n(A) General accounting personal privacy\n(B) Generally accepted privacy practices\n(C) Generally accepted privacy principles\n(D) General accounting privacy policies",
        "中文题目与选项": "GAPP 框架是由加拿大和美国主要的专业会计协会共同开发的，旨在帮助其成员管理和防止与其数据及客户隐私相关的风险。以下哪一项是 GAPP 的含义？\n(A) 一般会计个人隐私\n(B) 一般公认的隐私实践\n(C) 一般公认的隐私原则\n(D) 一般会计隐私政策",
        "答案": "C",
        "来源页码": 304
    },
    {
        "题号": "305",
        "英文题目与选项": "Which protocol operates at the network layer and provides for full point-to-point encryption of all communications and transmissions?\n(A) IPSec\n(B) VPN\n(C) SSL\n(D) TLS",
        "中文题目与选项": "哪种协议在网络层运行，并为所有通信和传输提供完整的点对点加密？\n(A) IPSec\n(B) VPN\n(C) SSL\n(D) TLS",
        "答案": "A",
        "来源页码": 305
    },
    {
        "题号": "306",
        "英文题目与选项": "When data discovery is undertaken, three main approaches or strategies are commonly used to determine what the type of data, its format, and composition are for the purposes of classification. Which of the following is NOT one of the three main approaches to data discovery?\n(A) Content analysis\n(B) Hashing\n(C) Labels\n(D) Metadata",
        "中文题目与选项": "在进行数据发现时，通常使用三种主要方法或策略来确定数据的类型、格式和组成，以便进行分类。以下哪一项不是数据发现的三种主要方法之一？\n(A) 内容分析\n(B) 哈希\n(C) 标签\n(D) 元数据",
        "答案": "B",
        "来源页码": 306
    },
    {
        "题号": "307",
        "英文题目与选项": "There are many situations when testing a BCDR plan is appropriate or mandated. Which of the following would not be a necessary time to test a BCDR plan?\n(A) After software updates\n(B) After regulatory changes\n(C) After major configuration changes\n(D) Annually",
        "中文题目与选项": "在许多情况下，测试业务连续性与灾难恢复（BCDR）计划是适当或被要求的。以下哪种情况不需要测试BCDR计划？\n(A) 软件更新后\n(B) 法规变更后\n(C) 进行重大配置更改后\n(D) 每年一次",
        "答案": "A",
        "来源页码": 307
    },
    {
        "题号": "308",
        "英文题目与选项": "Key maintenance and security are paramount within a cloud environment due to the widespread use of encryption for both data and transmissions. Which of the following key-management systems would provide the most robust control over and ownership of the key-management processes for the cloud customer?\n(A) Remote key management service\n(B) Local key management service\n(C) Client key management service\n(D) Internal key management service",
        "中文题目与选项": "在云环境中，由于加密在数据和传输中被广泛使用，密钥维护和安全至关重要。以下哪种密钥管理系统能为云客户提供对密钥管理过程的最强控制和所有权？\n(A) 远程密钥管理服务\n(B) 本地密钥管理服务\n(C) 客户端密钥管理服务\n(D) 内部密钥管理服务",
        "答案": "C",
        "来源页码": 308
    },
    {
        "题号": "309",
        "英文题目与选项": "Security is a critical yet often overlooked consideration for BCDR planning. At which stage of the planning process should security be involved?\n(A) Scope definition\n(B) Requirements gathering\n(C) Analysis\n(D) Risk assessment",
        "中文题目与选项": "安全性是业务持续性与灾难恢复（BCDR）规划中至关重要但经常被忽视的因素。安全应在规划流程的哪个阶段介入？\n(A) 范围定义\n(B) 需求收集\n(C) 分析\n(D) 风险评估",
        "答案": "A",
        "来源页码": 309
    },
    {
        "题号": "310",
        "英文题目与选项": "Which type of testing uses the same strategies and toolsets that hackers would use?\n(A) Static\n(B) Malicious\n(C) Penetration\n(D) Dynamic",
        "中文题目与选项": "哪种测试类型使用与黑客相同的策略和工具集？\n(A) 静态测试\n(B) 恶意测试\n(C) 渗透测试\n(D) 动态测试",
        "答案": "C",
        "来源页码": 310
    },
    {
        "题号": "311",
        "英文题目与选项": "Which of the following statements about Type 1 hypervisors is true?\n(A) The hardware vendor and software vendor are different.\n(B) The hardware vendor and software vendor are the same.\n(C) The hardware vendor provides an open platform for software vendors.\n(D) The hardware vendor and software vendor should always be different for the sake of security.",
        "中文题目与选项": "以下关于类型 1 虚拟机管理程序的说法中哪一项是正确的？\n(A) 硬件供应商和软件供应商是不同的。\n(B) 硬件供应商和软件供应商是相同的。\n(C) 硬件供应商为软件供应商提供开放的平台。\n(D) 为了安全考虑，硬件供应商和软件供应商应始终不同。",
        "答案": "B",
        "来源页码": 311
    },
    {
        "题号": "312",
        "英文题目与选项": "Which format is the most commonly used standard for exchanging information within a federated identity system?\n(A) XML\n(B) HTML\n(C) SAML\n(D) JSON",
        "中文题目与选项": "在联合身份系统中，哪种格式是用于交换信息的最常用标准？\n(A) XML\n(B) HTML\n(C) SAML\n(D) JSON",
        "答案": "C",
        "来源页码": 312
    },
    {
        "题号": "313",
        "英文题目与选项": "Which ITIL component is focused on anticipating predictable problems and ensuring that configurations and operations are in place to prevent these problems from ever occurring?\n(A) Availability management\n(B) Continuity management\n(C) Configuration management\n(D) Problem management",
        "中文题目与选项": "哪个 ITIL 组件专注于预测可预见的问题，并确保配置和操作已到位以防止这些问题的发生？\n(A) 可用性管理\n(B) 连续性管理\n(C) 配置管理\n(D) 问题管理",
        "答案": "D",
        "来源页码": 313
    },
    {
        "题号": "314",
        "英文题目与选项": "Which of the following areas of responsibility would be shared between the cloud customer and cloud provider within the Software as a Service (SaaS) category?\n(A) Data\n(B) Governance\n(C) Application\n(D) Physical",
        "中文题目与选项": "在软件即服务（SaaS）类别中，以下哪一项责任领域是云客户与云服务提供商共同承担的？\n(A) 数据\n(B) 治理\n(C) 应用程序\n(D) 物理设施",
        "答案": "A",
        "来源页码": 314
    },
    {
        "题号": "315",
        "英文题目与选项": "When a system needs to be exposed to the public Internet, what type of secure system would be used to perform only the desired operations?\n(A) Firewall\n(B) Proxy\n(C) Honeypot\n(D) Bastion",
        "中文题目与选项": "当一个系统需要暴露在公共互联网时，应该使用哪种安全系统来仅执行所需的操作？\n(A) 防火墙\n(B) 代理\n(C) 蜜罐\n(D) 堡垒主机",
        "答案": "D",
        "来源页码": 315
    },
    {
        "题号": "316",
        "英文题目与选项": "With the rapid emergence of cloud computing, very few regulations were in place that pertained to it specifically, and organizations often had to resort to using a collection of regulations that were not specific to cloud in order to drive audits and policies. Which standard from the ISO/IEC was designed specifically for cloud computing?\n(A) ISO/IEC 27001\n(B) ISO/IEC 19889\n(C) ISO/IEC 27001:2015\n(D) ISO/IEC 27018",
        "中文题目与选项": "随着云计算的快速发展，专门针对云计算的法规很少，组织往往不得不依靠一系列并非专门针对云的法规来推动审计和政策。哪个 ISO/IEC 标准是专门为云计算设计的？\n(A) ISO/IEC 27001\n(B) ISO/IEC 19889\n(C) ISO/IEC 27001:2015\n(D) ISO/IEC 27018",
        "答案": "D",
        "来源页码": 316
    },
    {
        "题号": "317",
        "英文题目与选项": "Which of the following is NOT considered a type of data loss?\n(A) Data corruption\n(B) Stolen by hackers\n(C) Accidental deletion\n(D) Lost or destroyed encryption keys",
        "中文题目与选项": "以下哪一项不被认为是数据丢失的类型？\n(A) 数据损坏\n(B) 被黑客窃取\n(C) 意外删除\n(D) 加密密钥丢失或销毁",
        "答案": "B",
        "来源页码": 317
    },
    {
        "题号": "318",
        "英文题目与选项": "Which of the following jurisdictions lacks a comprehensive national policy on data privacy and the protection of personally identifiable information (PII)?\n(A) European Union\n(B) Asia-Pacific Economic Cooperation\n(C) United States\n(D) Russia",
        "中文题目与选项": "以下哪个司法辖区缺乏关于数据隐私和个人可识别信息（PII）保护的全面国家政策？\n(A) 欧盟\n(B) 亚太经济合作组织（APEC）\n(C) 美国\n(D) 俄罗斯",
        "答案": "C",
        "来源页码": 318
    },
    {
        "题号": "319",
        "英文题目与选项": "Which component of ITIL involves planning for the restoration of services after an unexpected outage or incident?\n(A) Continuity management\n(B) Problem management\n(C) Configuration management\n(D) Availability management",
        "中文题目与选项": "ITIL 的哪个组成部分涉及在意外中断或事故后规划服务恢复？\n(A) 连续性管理\n(B) 问题管理\n(C) 配置管理\n(D) 可用性管理",
        "答案": "A",
        "来源页码": 319
    },
    {
        "题号": "320",
        "英文题目与选项": "Which component of ITIL pertains to planning, coordinating, executing, and validating changes and rollouts to production environments?\n(A) Release management\n(B) Availability management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件涉及计划、协调、执行和验证对生产环境的更改与发布？\n(A) 发布管理\n(B) 可用性管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 320
    },
    {
        "题号": "321",
        "英文题目与选项": "What process entails taking sensitive data and removing the indirect identifiers from each data object so that the identification of a single entity would not be possible?\n(A) Tokenization\n(B) Encryption\n(C) Anonymization\n(D) Masking",
        "中文题目与选项": "哪种过程涉及获取敏感数据并从每个数据对象中删除间接标识符，从而无法识别单个实体？\n(A) 令牌化\n(B) 加密\n(C) 匿名化\n(D) 掩码",
        "答案": "C",
        "来源页码": 321
    },
    {
        "题号": "322",
        "英文题目与选项": "Because cloud providers will not give detailed information about their infrastructures and practices to the general public, they will often use established auditing reports to ensure public trust, where the reputation of the auditors serves for assurance. Which type of audit reports can be used for general public trust assurances?\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "中文题目与选项": "由于云服务提供商不会向公众提供其基础设施和实践的详细信息，他们通常会使用已建立的审计报告来确保公众信任，其中审计员的声誉起到保证作用。哪种类型的审计报告可用于公众信任保证？\n(A) SOC 2\n(B) SAS-70\n(C) SOC 3\n(D) SOC 1",
        "答案": "C",
        "来源页码": 322
    },
    {
        "题号": "323",
        "英文题目与选项": "Which of the following concepts is NOT one of the core components to an encryption system architecture?\n(A) Software\n(B) Network\n(C) Keys\n(D) Data",
        "中文题目与选项": "以下哪个概念不是加密系统架构的核心组成部分？\n(A) 软件\n(B) 网络\n(C) 密钥\n(D) 数据",
        "答案": "B",
        "来源页码": 323
    },
    {
        "题号": "324",
        "英文题目与选项": "For optimal security, trust zones are used for network segmentation and isolation. They allow for the separation of various systems and tiers, each with its own security level. Which of the following is typically used to allow administrative personnel access to trust zones?\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "中文题目与选项": "为了获得最佳的安全性，信任区用于网络分段和隔离。它们允许将不同的系统和层分别设置，每个都有自己的安全级别。以下哪种方式通常用于允许管理人员访问信任区？\n(A) IPSec\n(B) SSH\n(C) VPN\n(D) TLS",
        "答案": "C",
        "来源页码": 324
    },
    {
        "题号": "325",
        "英文题目与选项": "Which of the following is NOT a major regulatory framework?\n(A) PCI DSS\n(B) HIPAA\n(C) SOX\n(D) FIPS 140-2",
        "中文题目与选项": "下列哪一项不是主要的监管框架？\n(A) 支付卡行业数据安全标准（PCI DSS）\n(B) 健康保险携带与责任法案（HIPAA）\n(C) 萨班斯-奥克斯法案（SOX）\n(D) 联邦信息处理标准140-2（FIPS 140-2）",
        "答案": "D",
        "来源页码": 325
    },
    {
        "题号": "326",
        "英文题目与选项": "As part of the auditing process, getting a report on the deviations between intended configurations and actual policy is often crucial for an organization. What term pertains to the process of generating such a report?\n(A) Deficiencies\n(B) Findings\n(C) Gap analysis\n(D) Errors",
        "中文题目与选项": "作为审计过程的一部分，为组织获取关于预期配置与实际策略之间偏差的报告通常至关重要。用于描述生成此类报告过程的术语是什么？\n(A) 缺陷\n(B) 发现\n(C) 差距分析\n(D) 错误",
        "答案": "C",
        "来源页码": 326
    },
    {
        "题号": "327",
        "英文题目与选项": "An audit scope statement defines the limits and outcomes from an audit. Which of the following would NOT be included as part of an audit scope statement?\n(A) Reports\n(B) Certification\n(C) Billing\n(D) Exclusions",
        "中文题目与选项": "审计范围声明定义了审计的边界和结果。以下哪一项不应包含在审计范围声明中？\n(A) 报告\n(B) 认证\n(C) 计费\n(D) 排除项",
        "答案": "C",
        "来源页码": 327
    },
    {
        "题号": "328",
        "英文题目与选项": "What concept and operational process must be spelled out clearly, as far as roles and responsibilities go, between the cloud provider and cloud customer for the mitigation of any problems or security events?\n(A) Incident response\n(B) Problem management\n(C) Change management\n(D) Conflict response",
        "中文题目与选项": "在云服务提供商与云客户之间，为减轻任何问题或安全事件，必须明确规定的概念和操作流程（涉及角色与职责）是以下哪一项？\n(A) 事件响应\n(B) 问题管理\n(C) 变更管理\n(D) 冲突响应",
        "答案": "A",
        "来源页码": 328
    },
    {
        "题号": "329",
        "英文题目与选项": "Your new CISO is placing increased importance and focus on regulatory compliance as your applications and systems move into cloud environments. Which of the following would NOT be a major focus of yours as you develop a project plan to focus on regulatory compliance?\n(A) Data in transit\n(B) Data in use\n(C) Data at rest\n(D) Data custodian",
        "中文题目与选项": "新的首席信息安全官（CISO）在您的应用程序和系统迁移到云环境时，越来越重视并关注合规性。以下哪一项在您制定专注于法规遵从性的项目计划时**不会**成为重点？\n(A) 传输中的数据\n(B) 使用中的数据\n(C) 静止的数据\n(D) 数据保管人",
        "答案": "D",
        "来源页码": 329
    },
    {
        "题号": "330",
        "英文题目与选项": "Cloud systems are increasingly used for BCDR solutions for organizations. What aspect of cloud computing makes their use for BCDR the most attractive?\n(A) On-demand self-service\n(B) Measured service\n(C) Portability\n(D) Broad network access",
        "中文题目与选项": "云系统越来越多地被组织用于业务连续性与灾难恢复（BCDR）解决方案。云计算的哪个特性使其在 BCDR 方面最具吸引力？\n(A) 按需自助服务\n(B) 可测量的服务\n(C) 可移植性\n(D) 广泛的网络访问",
        "答案": "B",
        "来源页码": 330
    },
    {
        "题号": "331",
        "英文题目与选项": "What's a potential problem when object storage versus volume storage is used within IaaS for application use and dependency?\n(A) Object storage is only optimized for small files.\n(B) Object storage is its own system, and data consistency depends on replication.\n(C) Object storage may have availability issues.\n(D) Object storage is dependent on access control from the host server.",
        "中文题目与选项": "在 IaaS 中，为应用程序使用对象存储与卷存储时，可能出现的潜在问题是什么？\n(A) 对象存储仅针对小文件进行了优化。\n(B) 对象存储是独立的系统，其数据一致性取决于复制机制。\n(C) 对象存储可能存在可用性问题。\n(D) 对象存储依赖于主机服务器的访问控制。",
        "答案": "B",
        "来源页码": 331
    },
    {
        "题号": "332",
        "英文题目与选项": "Many aspects of cloud computing bring enormous benefits over a traditional data center, but also introduce new challenges unique to cloud computing. Which of the following aspects of cloud computing makes appropriate data classification of high importance?\n(A) Multitenancy\n(B) Interoperability\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "云计算的许多方面相比传统数据中心带来了巨大的优势，但也引入了云计算特有的新挑战。以下哪一个云计算特性使得进行适当的数据分类变得极其重要？\n(A) 多租户\n(B) 互操作性\n(C) 可移植性\n(D) 可逆性",
        "答案": "A",
        "来源页码": 332
    },
    {
        "题号": "333",
        "英文题目与选项": "Without the extensive funds of a large corporation, a small-sized company could gain considerable and cost-effective services for which of the following concepts by moving to a cloud environment?\n(A) Regulatory\n(B) Security\n(C) Testing\n(D) Development",
        "中文题目与选项": "在缺乏大型公司的充足资金情况下，小型公司可以通过迁移到云环境，为以下哪个概念获得显著且高性价比的服务？\n(A) 合规\n(B) 安全\n(C) 测试\n(D) 开发",
        "答案": "D",
        "来源页码": 333
    },
    {
        "题号": "334",
        "英文题目与选项": "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business. Which concept pertains to the amount of data and services needed to reach the predetermined level of operations?\n(A) SRE\n(B) RPO\n(C) RSL\n(D) RTO",
        "中文题目与选项": "BCDR 策略通常并不涉及组织的全部运营，而仅涉及被视为对其业务至关重要的部分。以下哪个概念与为达到预定运营水平所需的数据量和服务量有关？\n(A) SRE\n(B) RPO\n(C) RSL\n(D) RTO",
        "答案": "C",
        "来源页码": 334
    },
    {
        "题号": "335",
        "英文题目与选项": "Which of the following is NOT a commonly used communications method within cloud environments to secure data in transit?\n(A) IPSec\n(B) HTTPS\n(C) VPN\n(D) DNSSEC",
        "中文题目与选项": "以下哪一项不是在云环境中常用于保护传输中数据的通信方法？\n(A) IPSec\n(B) HTTPS\n(C) VPN\n(D) DNSSEC",
        "答案": "D",
        "来源页码": 335
    },
    {
        "题号": "336",
        "英文题目与选项": "Which crucial aspect of cloud computing can be most threatened by insecure APIs?\n(A) Automation\n(B) Resource pooling\n(C) Elasticity\n(D) Redundancy",
        "中文题目与选项": "云计算中哪个关键方面最容易受到不安全 API 的威胁？\n(A) 自动化\n(B) 资源池化\n(C) 弹性\n(D) 冗余",
        "答案": "A",
        "来源页码": 336
    },
    {
        "题号": "337",
        "英文题目与选项": "The WS-Security standards are built around all of the following standards except which one?\n(A) SAML\n(B) WDSL\n(C) XML\n(D) SOAP",
        "中文题目与选项": "WS-Security 标准以以下所有标准为基础，除了哪一个？\n(A) SAML\n(B) WDSL\n(C) XML\n(D) SOAP",
        "答案": "B",
        "来源页码": 337
    },
    {
        "题号": "338",
        "英文题目与选项": "Which protocol, as a part of TLS, handles negotiating and establishing a connection between two parties?\n(A) Record\n(B) Binding\n(C) Negotiation\n(D) Handshake",
        "中文题目与选项": "在 TLS 的组成部分中，哪个协议负责在双方之间协商并建立连接？\n(A) 记录\n(B) 绑定\n(C) 协商\n(D) 握手",
        "答案": "D",
        "来源页码": 338
    },
    {
        "题号": "339",
        "英文题目与选项": "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business. Which concept pertains to the required amount of time to restore services to the predetermined level?\n(A) RPO\n(B) RSL\n(C) RTO\n(D) SRE",
        "中文题目与选项": "BCDR（业务连续性与灾难恢复）策略通常不涉及组织的全部运营，而仅针对被认为对其业务至关重要的部分。以下哪个概念与恢复服务到预定水平所需的时间有关？\n(A) RPO（恢复点目标）\n(B) RSL（服务水平恢复）\n(C) RTO（恢复时间目标）\n(D) SRE（服务可靠性工程）",
        "答案": "C",
        "来源页码": 339
    },
    {
        "题号": "340",
        "英文题目与选项": "Your company is in the planning stages of moving applications that have large data sets to a cloud environment. What strategy for data removal would be the MOST appropriate for you to recommend if costs and speed are primary considerations?\n(A) Shredding\n(B) Media destruction\n(C) Cryptographic erasure\n(D) Overwriting",
        "中文题目与选项": "您的公司正在规划将包含大型数据集的应用程序迁移到云环境中。如果成本和速度是主要考虑因素，您建议采用哪种数据删除策略最为合适？\n(A) 粉碎\n(B) 介质销毁\n(C) 密码擦除\n(D) 覆盖写入",
        "答案": "C",
        "来源页码": 340
    },
    {
        "题号": "341",
        "英文题目与选项": "Which of the following is a management role, versus a technical role, as it pertains to data management and oversight?\n(A) Data owner\n(B) Data processor\n(C) Database administrator\n(D) Data custodian",
        "中文题目与选项": "以下哪一项是与数据管理和监督相关的管理角色，而不是技术角色？\n(A) 数据所有者\n(B) 数据处理者\n(C) 数据库管理员\n(D) 数据保管人",
        "答案": "A",
        "来源页码": 341
    },
    {
        "题号": "342",
        "英文题目与选项": "IRM solutions allow an organization to place different restrictions on data usage than would otherwise be possible through traditional security controls. Which of the following controls would be possible with IRM that would not with traditional security controls?\n(A) Copy\n(B) Read\n(C) Delete\n(D) Print",
        "中文题目与选项": "IRM 解决方案使组织能够对数据使用施加不同的限制，这是传统安全控制无法实现的。以下哪项控制可以通过 IRM 实现，而传统安全控制无法实现？\n(A) 复制\n(B) 读取\n(C) 删除\n(D) 打印",
        "答案": "D",
        "来源页码": 342
    },
    {
        "题号": "343",
        "英文题目与选项": "Which data protection strategy would be useful for a situation where the ability to remove sensitive data from a set is needed, but a requirement to retain the ability to map back to the original values is also present?\n(A) Masking\n(B) Tokenization\n(C) Encryption\n(D) Anonymization",
        "中文题目与选项": "在需要从数据集中删除敏感数据，但仍需要保留能够映射回原始值的能力的情况下，哪种数据保护策略最有用？\n(A) 掩码处理\n(B) 代币化（标记化）\n(C) 加密\n(D) 匿名化",
        "答案": "B",
        "来源页码": 343
    },
    {
        "题号": "344",
        "英文题目与选项": "A comprehensive BCDR plan will encapsulate many or most of the traditional concerns of operating a system in any datacenter. However, what is one consideration that is often overlooked with the formulation of a BCDR plan?\n(A) Availability of staff\n(B) Capacity at the BCDR site\n(C) Restoration of services\n(D) Change management processes",
        "中文题目与选项": "一份全面的 BCDR（业务连续性与灾难恢复）计划将涵盖在任何数据中心中操作系统时的许多或大部分传统关注点。然而，在制定 BCDR 计划时，经常被忽视的一个因素是什么？\n(A) 员工可用性\n(B) BCDR 站点的容量\n(C) 服务恢复\n(D) 变更管理流程",
        "答案": "A",
        "来源页码": 344
    },
    {
        "题号": "345",
        "英文题目与选项": "Which of the following is NOT one of the components of multifactor authentication?\n(A) Something the user knows\n(B) Something the user has\n(C) Something the user sends\n(D) Something the user is",
        "中文题目与选项": "以下哪一项不是多因素认证的组成部分？\n(A) 用户知道的东西\n(B) 用户拥有的东西\n(C) 用户发送的东西\n(D) 用户本身的特征",
        "答案": "C",
        "来源页码": 345
    },
    {
        "题号": "346",
        "英文题目与选项": "Topic 1 Question #346\nAbove and beyond general regulations for data privacy and protection, certain types of data are subjected to more rigorous regulations and oversight. Which of the following is not a regulatory framework for more sensitive or specialized data?\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "中文题目与选项": "在一般数据隐私和保护法规之外，某些类型的数据需遵守更严格的法规和监督。以下哪一项不是针对更敏感或专业数据的监管框架？\n(A) FIPS 140-2\n(B) FedRAMP\n(C) PCI DSS\n(D) HIPAA",
        "答案": "A",
        "来源页码": 346
    },
    {
        "题号": "347",
        "英文题目与选项": "Which data sanitation method is also commonly referred to as \"zeroing\"?\n(A) Overwriting\n(B) Nullification\n(C) Blanking\n(D) Deleting",
        "中文题目与选项": "哪种数据清理方法通常被称为“归零”？\n(A) 覆写\n(B) 置空\n(C) 清空\n(D) 删除",
        "答案": "A",
        "来源页码": 347
    },
    {
        "题号": "348",
        "英文题目与选项": "What is the concept of isolating an application from the underlying operating system for testing purposes?\n(A) Abstracting\n(B) Application virtualization\n(C) Hosting\n(D) Sandboxing",
        "中文题目与选项": "将应用程序与底层操作系统隔离开来以便进行测试的概念是什么？\n(A) 抽象化\n(B) 应用虚拟化\n(C) 托管\n(D) 沙盒隔离",
        "答案": "D",
        "来源页码": 348
    },
    {
        "题号": "349",
        "英文题目与选项": "Which of the following could be used as a second component of multifactor authentication if a user has an RSA token?\n(A) Access card\n(B) USB thumb drive\n(C) Retina scan\n(D) RFID",
        "中文题目与选项": "如果用户拥有一个 RSA 令牌，下列哪一项可以用作多因素认证的第二个组件？\n(A) 门禁卡\n(B) USB 闪存驱动器\n(C) 视网膜扫描\n(D) 射频识别（RFID）",
        "答案": "C",
        "来源页码": 349
    },
    {
        "题号": "350",
        "英文题目与选项": "Which of the following is NOT one of the official risk rating categories?\n(A) Critical\n(B) Low\n(C) Catastrophic\n(D) Minimal",
        "中文题目与选项": "以下哪项不是官方风险评级类别之一？\n(A) 严重\n(B) 低\n(C) 灾难性\n(D) 最小",
        "答案": "C",
        "来源页码": 350
    },
    {
        "题号": "351",
        "英文题目与选项": "SOC Type 1 reports are considered \"restricted use,\" in that they are intended only for limited audiences and purposes. Which of the following is NOT a population that would be appropriate for a SOC Type 1 report?\n(A) Current clients\n(B) Auditors\n(C) Potential clients\n(D) The service organization",
        "中文题目与选项": "SOC 类型 1 报告被视为“限制使用”，仅适用于特定的受众和目的。以下哪一类人群不适合接收 SOC 类型 1 报告？\n(A) 现有客户\n(B) 审计人员\n(C) 潜在客户\n(D) 服务组织",
        "答案": "C",
        "来源页码": 351
    },
    {
        "题号": "352",
        "英文题目与选项": "Having a reservation in a cloud environment can ensure operations continue in the event of high utilization across the cloud. Which of the following would NOT be a capability covered by reservations?\n(A) Performing business operations\n(B) Starting virtual machines\n(C) Running applications\n(D) Auto-scaling",
        "中文题目与选项": "在云环境中拥有预留资源可以确保在云高负载情况下操作能够继续进行。以下哪一项不是预留资源所涵盖的功能？\n(A) 执行业务操作\n(B) 启动虚拟机\n(C) 运行应用程序\n(D) 自动扩展",
        "答案": "D",
        "来源页码": 352
    },
    {
        "题号": "353",
        "英文题目与选项": "What must SOAP rely on for security since it does not provide security as a built-in capability?\n(A) Encryption\n(B) Tokenization\n(C) TLS\n(D) SSL",
        "中文题目与选项": "由于SOAP本身并不提供内置的安全功能，它必须依赖于什么来实现安全性？\n(A) 加密\n(B) 令牌化\n(C) TLS\n(D) SSL",
        "答案": "C",
        "来源页码": 353
    },
    {
        "题号": "354",
        "英文题目与选项": "With a federated identity system, what does the identity provider send information to after a successful authentication?\n(A) Relying party\n(B) Service originator\n(C) Service relay\n(D) Service relay",
        "中文题目与选项": "在联合身份系统中，身份提供者在成功认证后会将信息发送给什么？\n(A) 依赖方\n(B) 服务发起方\n(C) 服务中继\n(D) 服务中继",
        "答案": "A",
        "来源页码": 354
    },
    {
        "题号": "355",
        "英文题目与选项": "Which of the following technologies is NOT commonly used for accessing systems and services in a cloud environment in a secure manner?\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "中文题目与选项": "以下哪种技术通常不用于在云环境中以安全的方式访问系统和服务？\n(A) KVM\n(B) HTTPS\n(C) VPN\n(D) TLS",
        "答案": "A",
        "来源页码": 355
    },
    {
        "题号": "356",
        "英文题目与选项": "Which component of ITIL involves handling anything that can impact services for either internal or public users?\n(A) Incident management\n(B) Deployment management\n(C) Problem management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件涉及处理任何可能影响内部或公众用户服务的事项？\n(A) 事件管理\n(B) 部署管理\n(C) 问题管理\n(D) 变更管理",
        "答案": "A",
        "来源页码": 356
    },
    {
        "题号": "357",
        "英文题目与选项": "Which protocol, as a part of TLS, handles the actual secure communications and transmission of data?\n(A) Negotiation\n(B) Handshake\n(C) Transfer\n(D) Record",
        "中文题目与选项": "作为 TLS 的一部分，哪个协议负责实际的安全通信和数据传输？\n(A) 协商协议\n(B) 握手协议\n(C) 传输协议\n(D) 记录协议",
        "答案": "D",
        "来源页码": 357
    },
    {
        "题号": "358",
        "英文题目与选项": "Which of the following terms is NOT a commonly used category of risk acceptance?\n(A) Moderate\n(B) Critical\n(C) Minimal\n(D) Accepted",
        "中文题目与选项": "以下哪一项术语不是常用的风险接受类别？\n(A) 中等\n(B) 严重\n(C) 最小\n(D) 已接受",
        "答案": "D",
        "来源页码": 358
    },
    {
        "题号": "359",
        "英文题目与选项": "Many activities within a cloud environment are performed via programmatic means, where complex and distributed operations are handled without the need to perform each step individually. Which of the following concepts does this describe?\n(A) Orchestration\n(B) Provisioning\n(C) Automation\n(D) Allocation",
        "中文题目与选项": "在云环境中，许多活动是通过编程方式执行的，复杂且分布式的操作无需逐步手动执行。以下哪个概念描述了这种情况？\n(A) 编排\n(B) 资源供应\n(C) 自动化\n(D) 分配",
        "答案": "A",
        "来源页码": 359
    },
    {
        "题号": "360",
        "英文题目与选项": "Being in a cloud environment, cloud customers lose a lot of insight and knowledge as to how their data is stored and their systems are deployed. Which concept from the ISO/IEC cloud standards relates to the necessity of the cloud provider to inform the cloud customer on these issues?\n(A) Disclosure\n(B) Transparency\n(C) Openness\n(D) Documentation",
        "中文题目与选项": "在云环境中，云客户会失去对其数据存储方式和系统部署情况的了解。根据 ISO/IEC 云标准，哪个概念与云服务提供商有义务向云客户告知这些情况有关？\n(A) 披露\n(B) 透明性\n(C) 开放性\n(D) 文档化",
        "答案": "B",
        "来源页码": 360
    },
    {
        "题号": "361",
        "英文题目与选项": "Your IT steering committee has, at a high level, approved your project to begin using cloud services. However, the committee is concerned with getting locked into a single cloud provider and has flagged the ability to easily move between cloud providers as a top priority. It also wants to save costs by reusing components. Which cross-cutting aspect of cloud computing would be your primary focus as your project plan continues to develop and you begin to evaluate cloud providers?\n(A) Interoperability\n(B) Resiliency\n(C) Scalability\n(D) Portability",
        "中文题目与选项": "贵公司的 IT 指导委员会在高层次上批准了您开始使用云服务的项目。然而，该委员会担心被锁定在单一的云服务提供商上，并将能够在云服务提供商之间轻松迁移作为首要任务。它还希望通过复用组件来节省成本。在您的项目计划继续制定并开始评估云服务提供商时，您应重点关注云计算的哪个跨领域方面？\n(A) 互操作性\n(B) 弹性\n(C) 可扩展性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 361
    },
    {
        "题号": "362",
        "英文题目与选项": "Which of the following provides assurance, to a predetermined acceptable level of certainty, that an entity is indeed who they claim to be?\n(A) Authentication\n(B) Identification\n(C) Proofing\n(D) Authorization",
        "中文题目与选项": "下列哪一项可以在预先设定的可接受置信水平上，确保一个实体确实是其声称的身份？\n(A) 认证\n(B) 标识\n(C) 身份验证\n(D) 授权",
        "答案": "A",
        "来源页码": 362
    },
    {
        "题号": "363",
        "英文题目与选项": "Whereas a contract articulates overall priorities and requirements for a business relationship, which artifact enumerates specific compliance requirements, metrics, and response times?\n(A) Service level agreement\n(B) Service level contract\n(C) Service compliance contract\n(D) Service level amendment",
        "中文题目与选项": "合同阐明业务关系的总体优先事项和要求，那么哪种文件列出了具体的合规要求、指标和响应时间？\n(A) 服务级别协议\n(B) 服务级别合同\n(C) 服务合规合同\n(D) 服务级别修正案",
        "答案": "A",
        "来源页码": 363
    },
    {
        "题号": "364",
        "英文题目与选项": "When an organization is considering the use of cloud services for BCDR planning and solutions, which of the following cloud concepts would be the most important?\n(A) Reversibility\n(B) Elasticity\n(C) Interoperability\n(D) Portability",
        "中文题目与选项": "当一个组织在考虑使用云服务进行业务连续性与灾难恢复（BCDR）规划和解决方案时，下列哪一个云计算概念是最重要的？\n(A) 可逆性\n(B) 弹性\n(C) 互操作性\n(D) 可移植性",
        "答案": "B",
        "来源页码": 364
    },
    {
        "题号": "365",
        "英文题目与选项": "What masking strategy involves the replacing of sensitive data at the time it is accessed and used as it flows between the data and application layers of a service?\n(A) Active\n(B) Static\n(C) Dynamic\n(D) Transactional",
        "中文题目与选项": "哪种脱敏策略涉及在访问敏感数据时以及数据在服务的数据层和应用层之间流动时，对其进行替换？\n(A) 活动式\n(B) 静态式\n(C) 动态式\n(D) 事务式",
        "答案": "C",
        "来源页码": 365
    },
    {
        "题号": "366",
        "英文题目与选项": "Which of the following would be considered an example of insufficient due diligence leading to security or operational problems when moving to a cloud?\n(A) Monitoring\n(B) Use of a remote key management system\n(C) Programming languages used\n(D) Reliance on physical network controls",
        "中文题目与选项": "以下哪一项被认为是在迁移到云时，由于尽职调查不足而导致安全或操作问题的示例？\n(A) 监控\n(B) 使用远程密钥管理系统\n(C) 所使用的编程语言\n(D) 依赖物理网络控制",
        "答案": "D",
        "来源页码": 366
    },
    {
        "题号": "367",
        "英文题目与选项": "Which aspect of cloud computing serves as the biggest challenge to using DLP to protect data at rest?\n(A) Portability\n(B) Resource pooling\n(C) Interoperability\n(D) Reversibility",
        "中文题目与选项": "云计算的哪个特性在使用DLP保护静态数据时构成最大的挑战？\n(A) 可移植性\n(B) 资源池化\n(C) 互操作性\n(D) 可逆性",
        "答案": "B",
        "来源页码": 367
    },
    {
        "题号": "368",
        "英文题目与选项": "What category of PII data can carry potential fines or even criminal charges for its improper use or disclosure?\n(A) Protected\n(B) Legal\n(C) Regulated\n(D) Contractual",
        "中文题目与选项": "哪一类 PII（个人可识别信息）数据在被不当使用或泄露时可能导致罚款甚至刑事指控？\n(A) 受保护的\n(B) 法律的\n(C) 受监管的\n(D) 合同的",
        "答案": "C",
        "来源页码": 368
    },
    {
        "题号": "369",
        "英文题目与选项": "A variety of security systems can be integrated within a network—some that just monitor for threats and issue alerts, and others that take action based on signatures, behavior, and other types of rules to actively stop potential threats. Which of the following types of technologies is best described here?\n(A) IDS\n(B) IPS\n(C) Proxy\n(D) Firewall",
        "中文题目与选项": "各种安全系统可以集成到网络中——有些仅监控威胁并发出警报，另一些则根据特征、行为及其他类型的规则主动采取行动以阻止潜在威胁。以下哪种技术最符合上述描述？\n(A) 入侵检测系统（IDS）\n(B) 入侵防御系统（IPS）\n(C) 代理服务器（Proxy）\n(D) 防火墙（Firewall）",
        "答案": "B",
        "来源页码": 369
    },
    {
        "题号": "370",
        "英文题目与选项": "Upon completing a risk analysis, a company has four different approaches to addressing risk. Which approach it takes will be based on costs, available options, and adherence to any regulatory requirements from independent audits. Which of the following groupings correctly represents the four possible approaches?\n(A) Accept, avoid, transfer, mitigate\n(B) Accept, deny, transfer, mitigate\n(C) Accept, deny, mitigate, revise\n(D) Accept, dismiss, transfer, mitigate",
        "中文题目与选项": "在完成风险分析后，公司有四种不同的方式来应对风险。选择哪种方式将取决于成本、可行选项以及对独立审计所提出的监管要求的遵循情况。以下哪一组正确代表了四种可能的应对方式？\n(A) 接受、规避、转移、减轻\n(B) 接受、否认、转移、减轻\n(C) 接受、否认、减轻、修订\n(D) 接受、忽视、转移、减轻",
        "答案": "A",
        "来源页码": 370
    },
    {
        "题号": "371",
        "英文题目与选项": "Which of the following is NOT a component of access control?\n(A) Accounting\n(B) Federation\n(C) Authorization\n(D) Authentication",
        "中文题目与选项": "以下哪一项不是访问控制的组成部分？\n(A) 记账\n(B) 联合认证\n(C) 授权\n(D) 身份验证",
        "答案": "B",
        "来源页码": 371
    },
    {
        "题号": "372",
        "英文题目与选项": "What concept does the A represent within the DREAD model?\n(A) Affected users\n(B) Authorization\n(C) Authentication\n(D) Affinity",
        "中文题目与选项": "在 DREAD 模型中，字母 A 表示的概念是什么？\n(A) 受影响的用户\n(B) 授权\n(C) 认证\n(D) 亲和力",
        "答案": "A",
        "来源页码": 372
    },
    {
        "题号": "373",
        "英文题目与选项": "With an application hosted in a cloud environment, who could be the recipient of an eDiscovery order?\n(A) Users\n(B) Both the cloud provider and cloud customer\n(C) The cloud customer\n(D) The cloud provider",
        "中文题目与选项": "在云环境中托管应用程序的情况下，谁可能是电子取证令的接收者？\n(A) 用户\n(B) 云服务提供商和云客户双方\n(C) 云客户\n(D) 云服务提供商",
        "答案": "B",
        "来源页码": 373
    },
    {
        "题号": "374",
        "英文题目与选项": "Which ITIL component focuses on ensuring that system resources, processes, and personnel are properly allocated to meet SLA requirements?\n(A) Continuity management\n(B) Availability management\n(C) Configuration management\n(D) Problem management",
        "中文题目与选项": "哪个 ITIL 组件专注于确保系统资源、流程和人员得到适当分配以满足 SLA 要求？\n(A) 连续性管理\n(B) 可用性管理\n(C) 配置管理\n(D) 问题管理",
        "答案": "B",
        "来源页码": 374
    },
    {
        "题号": "375",
        "英文题目与选项": "Which ITIL component is an ongoing, iterative process of tracking all deployed and configured resources that an organization uses and depends on, whether they are hosted in a traditional data center or a cloud?\n(A) Problem management\n(B) Continuity management\n(C) Availability management\n(D) Configuration management",
        "中文题目与选项": "哪个 ITIL 组件是一个持续的、迭代的过程，用于跟踪组织使用并依赖的所有已部署和配置的资源，无论它们托管在传统数据中心还是云中？\n(A) 问题管理\n(B) 连续性管理\n(C) 可用性管理\n(D) 配置管理",
        "答案": "D",
        "来源页码": 375
    },
    {
        "题号": "376",
        "英文题目与选项": "When beginning an audit, both the system owner and the auditors must agree on various aspects of the final audit report. Which of the following would NOT be something that is predefined as part of the audit agreement?\n(A) Size\n(B) Format\n(C) Structure\n(D) Audience",
        "中文题目与选项": "在开始审计时，系统所有者和审计人员必须就最终审计报告的各个方面达成一致。以下哪一项不是作为审计协议的一部分预先定义的内容？\n(A) 报告的大小\n(B) 报告的格式\n(C) 报告的结构\n(D) 报告的受众",
        "答案": "A",
        "来源页码": 376
    },
    {
        "题号": "377",
        "英文题目与选项": "What concept does the D represent within the STRIDE threat model?\n(A) Denial of service\n(B) Distributed\n(C) Data breach\n(D) Data loss",
        "中文题目与选项": "在 STRIDE 威胁模型中，字母 D 表示的概念是什么？\n(A) 拒绝服务\n(B) 分布式\n(C) 数据泄露\n(D) 数据丢失",
        "答案": "A",
        "来源页码": 377
    },
    {
        "题号": "378",
        "英文题目与选项": "Which of the following is the concept of segregating information or processes, within the same system or application, for security reasons?\n(A) Cell blocking\n(B) Sandboxing\n(C) Pooling\n(D) Fencing",
        "中文题目与选项": "以下哪一项是出于安全原因在同一系统或应用程序中隔离信息或进程的概念？\n(A) 单元阻断\n(B) 沙箱机制\n(C) 资源池化\n(D) 围栏隔离",
        "答案": "B",
        "来源页码": 378
    },
    {
        "题号": "379",
        "英文题目与选项": "Which cloud service category most commonly uses client-side key management systems?\n(A) Software as a Service\n(B) Infrastructure as a Service\n(C) Platform as a Service\n(D) Desktop as a Service",
        "中文题目与选项": "哪一种云服务类别最常使用客户端密钥管理系统？\n(A) 软件即服务\n(B) 基础设施即服务\n(C) 平台即服务\n(D) 桌面即服务",
        "答案": "B",
        "来源页码": 379
    },
    {
        "题号": "380",
        "英文题目与选项": "Apart from using encryption at the file system level, what technology is the most widely used to protect data stored in an object storage system?\n(A) TLS\n(B) HTTPS\n(C) VPN\n(D) IRM",
        "中文题目与选项": "除了在文件系统级别使用加密之外，哪种技术最广泛用于保护存储在对象存储系统中的数据？\n(A) TLS\n(B) HTTPS\n(C) VPN\n(D) IRM",
        "答案": "D",
        "来源页码": 380
    },
    {
        "题号": "381",
        "英文题目与选项": "Which of the following types of data would fall under data rights management (DRM) rather than information rights management (IRM)?\n(A) Personnel data\n(B) Security profiles\n(C) Publications\n(D) Financial records",
        "中文题目与选项": "下列哪种类型的数据属于数据版权管理（DRM）的范畴，而不是信息权限管理（IRM）？\n(A) 人事数据\n(B) 安全配置文件\n(C) 出版物\n(D) 财务记录",
        "答案": "C",
        "来源页码": 381
    },
    {
        "题号": "382",
        "英文题目与选项": "Different security testing methodologies offer different strategies and approaches to testing systems, requiring security personnel to determine the best type to use for their specific circumstances. What does dynamic application security testing (DAST) NOT entail that SAST does?\n(A) Discovery\n(B) Knowledge of the system\n(C) Scanning\n(D) Probing",
        "中文题目与选项": "不同的安全测试方法为系统测试提供了不同的策略和方法，要求安全人员根据具体情况确定最适合使用的类型。动态应用安全测试（DAST）不包括静态应用安全测试（SAST）所包含的哪一项？\n(A) 发现\n(B) 对系统的了解\n(C) 扫描\n(D) 探测",
        "答案": "B",
        "来源页码": 382
    },
    {
        "题号": "383",
        "英文题目与选项": "You need to gain approval to begin moving your company's data and systems into a cloud environment. However, your CEO has mandated the ability to easily remove your IT assets from the cloud provider as a precondition. Which of the following cloud concepts would this pertain to?\n(A) Removability\n(B) Extraction\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "你需要获得批准，才能开始将公司数据和系统迁移到云环境中。然而，首席执行官要求能够轻松地从云服务提供商那里移除你的IT资产，作为前提条件。那么以下哪个云计算概念与此相关？\n(A) 可移除性\n(B) 提取性\n(C) 可移植性\n(D) 可逆性",
        "答案": "D",
        "来源页码": 383
    },
    {
        "题号": "384",
        "英文题目与选项": "What does static application security testing (SAST) offer as a tool to the testers that makes it unique compared to other common security testing methodologies?\n(A) Live testing\n(B) Source code access\n(C) Production system scanning\n(D) Injection attempts",
        "中文题目与选项": "静态应用安全测试（SAST）为测试人员提供了哪种工具，使其相比其他常见的安全测试方法具有独特之处？\n(A) 实时测试\n(B) 源代码访问\n(C) 生产系统扫描\n(D) 注入尝试",
        "答案": "B",
        "来源页码": 384
    },
    {
        "题号": "385",
        "英文题目与选项": "A main objective for an organization when utilizing cloud services is to avoid vendor lock-in so as to ensure flexibility and maintain independence. Which core concept of cloud computing is most related to vendor lock-in?\n(A) Scalability\n(B) Interoperability\n(C) Portability\n(D) Reversibility",
        "中文题目与选项": "一个组织在使用云服务时的主要目标是避免供应商锁定，以确保灵活性并保持独立性。以下哪个云计算核心概念与供应商锁定最相关？\n(A) 可扩展性\n(B) 互操作性\n(C) 可移植性\n(D) 可逆性",
        "答案": "C",
        "来源页码": 385
    },
    {
        "题号": "386",
        "英文题目与选项": "Which of the following areas of responsibility always falls completely under the purview of the cloud provider, regardless of which cloud service category is used?\n(A) Infrastructure\n(B) Data\n(C) Physical\n(D) Governance",
        "中文题目与选项": "以下哪一个责任领域无论使用哪种云服务类别，都完全属于云服务提供商的职责范围？\n(A) 基础设施\n(B) 数据\n(C) 物理环境\n(D) 治理",
        "答案": "C",
        "来源页码": 386
    },
    {
        "题号": "387",
        "英文题目与选项": "What type of masking would you employ to produce a separate data set for testing purposes based on production data without any sensitive information?\n(A) Dynamic\n(B) Tokenized\n(C) Replicated\n(D) Static",
        "中文题目与选项": "为了基于生产数据生成一个用于测试目的的不包含任何敏感信息的独立数据集，应采用哪种类型的数据掩码？\n(A) 动态掩码\n(B) 令牌化掩码\n(C) 复制掩码\n(D) 静态掩码",
        "答案": "D",
        "来源页码": 387
    },
    {
        "题号": "388",
        "英文题目与选项": "Which aspect of data poses the biggest challenge to using automated tools for data discovery and programmatic data classification?\n(A) Quantity\n(B) Language\n(C) Quality\n(D) Number of sources",
        "中文题目与选项": "数据的哪个方面在使用自动化工具进行数据发现和程序化数据分类时构成最大的挑战？\n(A) 数量\n(B) 语言\n(C) 质量\n(D) 数据源数量",
        "答案": "B",
        "来源页码": 388
    },
    {
        "题号": "389",
        "英文题目与选项": "When an organization is considering a cloud environment for hosting BCDR solutions, which of the following would be the greatest concern?\n(A) Self-service\n(B) Resource pooling\n(C) Availability\n(D) Location",
        "中文题目与选项": "当一个组织考虑使用云环境来托管业务连续性与灾难恢复（BCDR）解决方案时，下列哪项是最大的关注点？\n(A) 自助服务\n(B) 资源池化\n(C) 可用性\n(D) 位置",
        "答案": "D",
        "来源页码": 389
    },
    {
        "题号": "390",
        "英文题目与选项": "Just like the risk management process, the BCDR planning process has a defined sequence of steps and processes to follow to ensure the production of a comprehensive and successful plan. Which of the following is the correct sequence of steps for a BCDR plan?\n(A) Define scope, gather requirements, assess risk, implement\n(B) Define scope, gather requirements, implement, assess risk\n(C) Gather requirements, define scope, implement, assess risk\n(D) Gather requirements, define scope, assess risk, implement",
        "中文题目与选项": "与风险管理过程类似，BCDR（业务连续性与灾难恢复）规划过程也有一系列定义好的步骤和流程，以确保制定出全面且成功的计划。以下哪一项是BCDR计划的正确步骤顺序？\n(A) 定义范围，收集需求，评估风险，实施\n(B) 定义范围，收集需求，实施，评估风险\n(C) 收集需求，定义范围，实施，评估风险\n(D) 收集需求，定义范围，评估风险，实施",
        "答案": "A",
        "来源页码": 390
    },
    {
        "题号": "391",
        "英文题目与选项": "What type of solution is at the core of virtually all directory services?\n(A) WS\n(B) LDAP\n(C) ADFS\n(D) PKI",
        "中文题目与选项": "几乎所有目录服务的核心都基于哪种类型的解决方案？\n(A) WS\n(B) LDAP\n(C) ADFS\n(D) PKI",
        "答案": "B",
        "来源页码": 391
    },
    {
        "题号": "392",
        "英文题目与选项": "The different cloud service models have varying levels of responsibilities for functions and operations depending on the model's level of service. In which of the following models would the responsibility for patching lie predominantly with the cloud customer?\n(A) DaaS\n(B) SaaS\n(C) PaaS\n(D) IaaS",
        "中文题目与选项": "不同的云服务模型在功能和运维责任上有不同的层次，具体取决于服务模型的级别。以下哪种云服务模型中，补丁更新的主要责任由云客户承担？\n(A) DaaS（桌面即服务）\n(B) SaaS（软件即服务）\n(C) PaaS（平台即服务）\n(D) IaaS（基础设施即服务）",
        "答案": "D",
        "来源页码": 392
    },
    {
        "题号": "393",
        "英文题目与选项": "Which component of ITIL involves the creation of an RFC ticket and obtaining official approvals for it?\n(A) Problem management\n(B) Release management\n(C) Deployment management\n(D) Change management",
        "中文题目与选项": "ITIL 的哪个组件涉及创建 RFC（变更请求）工单并为其获取正式批准？\n(A) 问题管理\n(B) 发布管理\n(C) 部署管理\n(D) 变更管理",
        "答案": "D",
        "来源页码": 393
    },
    {
        "题号": "394",
        "英文题目与选项": "Which of the following are attributes of cloud computing?\n(A) Minimal management effort and shared resources\n(B) High cost and unique resources\n(C) Rapid provisioning and slow release of resources\n(D) Limited access and service provider interaction",
        "中文题目与选项": "以下哪项是云计算的特征？\n(A) 最少的管理工作量和共享资源\n(B) 高成本和专有资源\n(C) 快速配置和资源释放缓慢\n(D) 访问受限且需频繁与服务提供商交互",
        "答案": "A",
        "来源页码": 394
    },
    {
        "题号": "395",
        "英文题目与选项": "In a cloud environment, encryption should be used for all the following, except:\n(A) Secure sessions/VPN\n(B) Long-term storage of data\n(C) Near-term storage of virtualized images\n(D) Profile formatting",
        "中文题目与选项": "在云环境中，以下各项都应该使用加密，除了：\n(A) 安全会话/VPN\n(B) 数据的长期存储\n(C) 虚拟化映像的短期存储\n(D) 配置文件格式化",
        "答案": "D",
        "来源页码": 395
    },
    {
        "题号": "396",
        "英文题目与选项": "Which of the following is considered a technological control?\n(A) Firewall software\n(B) Firing personnel\n(C) Fireproof safe\n(D) Fire extinguisher",
        "中文题目与选项": "以下哪项被认为是技术控制措施？\n(A) 防火墙软件\n(B) 解雇人员\n(C) 防火保险箱\n(D) 灭火器",
        "答案": "A",
        "来源页码": 396
    },
    {
        "题号": "397",
        "英文题目与选项": "When using an IaaS solution, what is the capability provided to the customer?\n(A) To provision processing, storage, networks, and other fundamental computing resources when the consumer is able to deploy and run arbitrary software, which can include OSs and applications.\n(B) To provision processing, storage, networks, and other fundamental computing resources when the auditor is able to deploy and run arbitrary software, which can include OSs and applications.\n(C) To provision processing, storage, networks, and other fundamental computing resources when the provider is able to deploy and run arbitrary software, which can include OSs and applications.\n(D) To provision processing, storage, networks, and other fundamental computing resources when the consumer is not able to deploy and run arbitrary software, which can include OSs and applications.",
        "中文题目与选项": "在使用 IaaS 解决方案时，提供给客户的能力是什么？\n(A) 供应处理、存储、网络和其他基本计算资源，使消费者能够部署和运行任意软件，包括操作系统和应用程序。\n(B) 供应处理、存储、网络和其他基本计算资源，使审计人员能够部署和运行任意软件，包括操作系统和应用程序。\n(C) 供应处理、存储、网络和其他基本计算资源，使服务提供者能够部署和运行任意软件，包括操作系统和应用程序。\n(D) 供应处理、存储、网络和其他基本计算资源，使消费者无法部署和运行任意软件，包括操作系统和应用程序。",
        "答案": "A",
        "来源页码": 397
    },
    {
        "题号": "398",
        "英文题目与选项": "When using an IaaS solution, what is a key benefit provided to the customer?\n(A) Metered and priced on the basis of units consumed\n(B) Increased energy and cooling system efficiencies\n(C) Transferred cost of ownership\n(D) The ability to scale up infrastructure services based on projected usage",
        "中文题目与选项": "在使用 IaaS 解决方案时，向客户提供的主要优势是什么？\n(A) 按消耗的单位计量和定价\n(B) 提高能源和冷却系统的效率\n(C) 转移所有权成本\n(D) 能够根据预期使用情况扩展基础设施服务",
        "答案": "D",
        "来源页码": 398
    },
    {
        "题号": "399",
        "英文题目与选项": "Which of the following is considered an administrative control?\n(A) Keystroke logging\n(B) Access control process\n(C) Door locks\n(D) Biometric authentication",
        "中文题目与选项": "以下哪项被视为管理控制措施？\n(A) 按键记录\n(B) 访问控制过程\n(C) 门锁\n(D) 生物识别认证",
        "答案": "B",
        "来源页码": 399
    },
    {
        "题号": "400",
        "英文题目与选项": "What is a key capability or characteristic of PaaS?\n(A) Support for a homogenous environment\n(B) Support for a single programming language\n(C) Ability to reduce lock-in\n(D) Ability to manually scale",
        "中文题目与选项": "PaaS 的关键能力或特征是什么？\n(A) 支持同质环境\n(B) 支持单一编程语言\n(C) 能够减少供应商锁定\n(D) 能够手动扩展",
        "答案": "C",
        "来源页码": 400
    },
    {
        "题号": "401",
        "英文题目与选项": "In which cloud service model is the customer required to maintain the OS?\n(A) IaaS\n(B) CaaS\n(C) PaaS\n(D) SaaS",
        "中文题目与选项": "在以下哪种云服务模型中，客户需要维护操作系统？\n(A) 基础设施即服务（IaaS）\n(B) 容器即服务（CaaS）\n(C) 平台即服务（PaaS）\n(D) 软件即服务（SaaS）",
        "答案": "A",
        "来源页码": 401
    },
    {
        "题号": "402",
        "英文题目与选项": "When using a PaaS solution, what is the capability provided to the customer?\n(A) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The provider does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(B) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(C) To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the consumer supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.\n(D) To deploy onto the cloud infrastructure provider-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.",
        "中文题目与选项": "在使用 PaaS（平台即服务）解决方案时，为客户提供的能力是什么？\n(A) 部署在云基础设施上由消费者创建或获取的应用程序，这些应用程序使用提供商支持的编程语言、库、服务和工具创建。提供商不管理或控制底层云基础设施（包括网络、服务器、操作系统或存储），但控制已部署的应用程序以及可能的应用托管环境配置设置。\n(B) 部署在云基础设施上由消费者创建或获取的应用程序，这些应用程序使用提供商支持的编程语言、库、服务和工具创建。消费者不管理或控制底层云基础设施（包括网络、服务器、操作系统或存储），但控制已部署的应用程序以及可能的应用托管环境配置设置。\n(C) 部署在云基础设施上由消费者创建或获取的应用程序，这些应用程序使用消费者支持的编程语言、库、服务和工具创建。消费者不管理或控制底层云基础设施（包括网络、服务器、操作系统或存储），但控制已部署的应用程序以及可能的应用托管环境配置设置。\n(D) 部署在云基础设施上由提供商创建或获取的应用程序，这些应用程序使用提供商支持的编程语言、库、服务和工具创建。消费者不管理或控制底层云基础设施（包括网络、服务器、操作系统或存储），但控制已部署的应用程序以及可能的应用托管环境配置设置。",
        "答案": "B",
        "来源页码": 402
    },
    {
        "题号": "403",
        "英文题目与选项": "What are SOC 1/SOC 2/SOC 3?\n(A) Audit reports\n(B) Risk management frameworks\n(C) Access controls\n(D) Software developments",
        "中文题目与选项": "SOC 1/SOC 2/SOC 3 是什么？\n(A) 审计报告\n(B) 风险管理框架\n(C) 访问控制\n(D) 软件开发",
        "答案": "A",
        "来源页码": 403
    },
    {
        "题号": "404",
        "英文题目与选项": "Gathering business requirements can aid the organization in determining all of this information about organizational assets, except:\n(A) Full inventory\n(B) Criticality\n(C) Value\n(D) Usefulness",
        "中文题目与选项": "收集业务需求可以帮助组织确定有关组织资产的所有以下信息，但不包括：\n(A) 完整清单\n(B) 关键性\n(C) 价值\n(D) 有用性",
        "答案": "D",
        "来源页码": 404
    },
    {
        "题号": "405",
        "英文题目与选项": "In attempting to provide a layered defense, the security practitioner should convince senior management to include security controls of which type?\n(A) Physical\n(B) All of the above\n(C) Technological\n(D) Administrative",
        "中文题目与选项": "在尝试实施分层防御时，安全从业者应说服高层管理人员包含哪种类型的安全控制？\n(A) 物理性\n(B) 以上全部\n(C) 技术性\n(D) 管理性",
        "答案": "B",
        "来源页码": 405
    },
    {
        "题号": "406",
        "英文题目与选项": "The BIA can be used to provide information about all the following, except:\n(A) BC/DR planning\n(B) Risk analysis\n(C) Secure acquisition\n(D) Selection of security controls",
        "中文题目与选项": "业务影响分析（BIA）可用于提供以下所有方面的信息，除了：\n(A) 业务连续性/灾难恢复（BC/DR）规划\n(B) 风险分析\n(C) 安全采购\n(D) 安全控制的选择",
        "答案": "C",
        "来源页码": 406
    },
    {
        "题号": "407",
        "英文题目与选项": "Which of the following are cloud computing roles?\n(A) Cloud service broker and user\n(B) Cloud customer and financial auditor\n(C) CSP and backup service provider\n(D) Cloud service auditor and object",
        "中文题目与选项": "以下哪项是云计算中的角色？\n(A) 云服务经纪人和用户\n(B) 云客户和财务审计员\n(C) 云服务提供商（CSP）和备份服务提供商\n(D) 云服务审计员和对象",
        "答案": "A",
        "来源页码": 407
    },
    {
        "题号": "408",
        "英文题目与选项": "Which of the following are considered to be the building blocks of cloud computing?\n(A) CPU, RAM, storage, and networking\n(B) Data, CPU, RAM, and access control\n(C) Data, access control, virtualization, and services\n(D) Storage, networking, printing, and virtualization",
        "中文题目与选项": "下列哪一项被认为是云计算的基本构建模块？\n(A) CPU、RAM、存储和网络\n(B) 数据、CPU、RAM 和访问控制\n(C) 数据、访问控制、虚拟化和服务\n(D) 存储、网络、打印和虚拟化",
        "答案": "A",
        "来源页码": 408
    },
    {
        "题号": "409",
        "英文题目与选项": "Which of the following is considered a physical control?\n(A) Fences\n(B) Ceilings\n(C) Carpets\n(D) Doors",
        "中文题目与选项": "以下哪项被认为是物理控制？\n(A) 围栏\n(B) 天花板\n(C) 地毯\n(D) 门",
        "答案": "A",
        "来源页码": 409
    },
    {
        "题号": "410",
        "英文题目与选项": "What is an experimental technology that is intended to create the possibility of processing encrypted data without having to decrypt it first?\n(A) Quantum-state\n(B) Polyinstantiation\n(C) Homomorphic\n(D) Gastronomic",
        "中文题目与选项": "哪种实验性技术旨在在不先解密的情况下处理加密数据？\n(A) 量子态\n(B) 多实例化\n(C) 同态\n(D) 美食学",
        "答案": "C",
        "来源页码": 410
    },
    {
        "题号": "411",
        "英文题目与选项": "Which of the following are distinguishing characteristics of a managed service provider?\n(A) Be able to remotely monitor and manage objects for the customer and proactively maintain these objects under management.\n(B) Have some form of a help desk but no NOC.\n(C) Be able to remotely monitor and manage objects for the customer and reactively maintain these objects under management.\n(D) Have some form of a NOC but no help desk.",
        "中文题目与选项": "以下哪项是托管服务提供商（MSP）的显著特征？\n(A) 能够远程监控和管理客户的对象，并主动维护这些受管对象。\n(B) 设有某种形式的服务台，但没有网络运营中心（NOC）。\n(C) 能够远程监控和管理客户的对象，并被动地维护这些受管对象。\n(D) 设有某种形式的网络运营中心（NOC），但没有服务台。",
        "答案": "A",
        "来源页码": 411
    },
    {
        "题号": "412",
        "英文题目与选项": "To protect data on user devices in a BYOD environment, the organization should consider requiring all the following, except:\n(A) Multifactor authentication\n(B) DLP agents\n(C) Two-person integrity\n(D) Local encryption",
        "中文题目与选项": "在 BYOD（自带设备办公）环境中，为了保护用户设备上的数据，组织应考虑要求以下措施，除了：\n(A) 多因素认证\n(B) DLP（数据防泄漏）代理\n(C) 双人完整性机制\n(D) 本地加密",
        "答案": "C",
        "来源页码": 412
    },
    {
        "题号": "413",
        "英文题目与选项": "Tokenization requires two distinct _________________ .\n(A) Authentication factors\n(B) Personnel\n(C) Databases\n(D) Encryption",
        "中文题目与选项": "令牌化（Tokenization）需要两个不同的 _________________ 。\n(A) 认证因素\n(B) 人员\n(C) 数据库\n(D) 加密",
        "答案": "C",
        "来源页码": 413
    },
    {
        "题号": "414",
        "英文题目与选项": "DLP can be combined with what other security technology to enhance data controls?\n(A) DRM\n(B) Hypervisor\n(C) SIEM\n(D) Kerberos",
        "中文题目与选项": "DLP 可以与哪种其他安全技术结合以增强数据控制？\n(A) DRM（数字版权管理）\n(B) 虚拟机监控程序\n(C) 安全信息与事件管理（SIEM）\n(D) Kerberos 认证协议",
        "答案": "A",
        "来源页码": 414
    },
    {
        "题号": "415",
        "英文题目与选项": "What is the intellectual property protection for a confidential recipe for muffins?\n(A) Patent\n(B) Trademark\n(C) Trade secret\n(D) Copyright",
        "中文题目与选项": "对于一种保密的松饼配方，适用哪种知识产权保护？\n(A) 专利\n(B) 商标\n(C) 商业秘密\n(D) 版权",
        "答案": "C",
        "来源页码": 415
    },
    {
        "题号": "416",
        "英文题目与选项": "Every security program and process should have which of the following?\n(A) Severe penalties\n(B) Multifactor authentication\n(C) Foundational policy\n(D) Homomorphic encryption",
        "中文题目与选项": "每个安全程序和过程都应具备以下哪项？\n(A) 严厉的惩罚\n(B) 多因素认证\n(C) 基础性策略\n(D) 同态加密",
        "答案": "C",
        "来源页码": 416
    },
    {
        "题号": "417",
        "英文题目与选项": "DLP solutions can aid in deterring loss due to which of the following?\n(A) Inadvertent disclosure\n(B) Natural disaster\n(C) Randomization\n(D) Device failure",
        "中文题目与选项": "DLP（数据泄露防护）解决方案可帮助防止以下哪种情况造成的损失？\n(A) 无意泄露\n(B) 自然灾害\n(C) 随机化\n(D) 设备故障",
        "答案": "A",
        "来源页码": 417
    },
    {
        "题号": "418",
        "英文题目与选项": "All policies within the organization should include a section that includes all of the following, except:\n(A) Policy adjudication\n(B) Policy maintenance\n(C) Policy review\n(D) Policy enforcement",
        "中文题目与选项": "组织内的所有政策都应包含以下各部分，但不包括：\n(A) 政策裁决\n(B) 政策维护\n(C) 政策审查\n(D) 政策执行",
        "答案": "A",
        "来源页码": 418
    },
    {
        "题号": "419",
        "英文题目与选项": "Proper implementation of DLP solutions for successful function requires which of the following?\n(A) Physical access limitations\n(B) USB connectivity\n(C) Accurate data categorization\n(D) Physical presence",
        "中文题目与选项": "为了确保数据丢失防护（DLP）解决方案能够成功运行，正确的实施需要以下哪一项？\n(A) 物理访问限制\n(B) USB 连接\n(C) 精确的数据分类\n(D) 实体在场",
        "答案": "C",
        "来源页码": 419
    },
    {
        "题号": "420",
        "英文题目与选项": "What is the experimental technology that might lead to the possibility of processing encrypted data without having to decrypt it first?\n(A) AES\n(B) Link encryption\n(C) One-time pads\n(D) Homomorphic encryption",
        "中文题目与选项": "哪种实验性技术可能使我们在不先解密的情况下处理加密数据？\n(A) AES\n(B) 链路加密\n(C) 一次性密码本\n(D) 同态加密",
        "答案": "D",
        "来源页码": 420
    },
    {
        "题号": "421",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Multifactor authentication\n(B) Access restrictions\n(C) Confidentiality level\n(D) Distribution limitations",
        "中文题目与选项": "数据标签可能包括以下所有内容，除了：\n(A) 多因素认证\n(B) 访问限制\n(C) 机密级别\n(D) 分发限制",
        "答案": "A",
        "来源页码": 421
    },
    {
        "题号": "422",
        "英文题目与选项": "In the cloud motif, the data owner is usually:\n(A) The cloud provider\n(B) In another jurisdiction\n(C) The cloud customer\n(D) The cloud access security broker",
        "中文题目与选项": "在云计算模型中，数据所有者通常是：\n(A) 云服务提供商\n(B) 位于其他司法管辖区\n(C) 云客户\n(D) 云访问安全代理",
        "答案": "C",
        "来源页码": 422
    },
    {
        "题号": "423",
        "英文题目与选项": "The goals of DLP solution implementation include all of the following, except:\n(A) Elasticity\n(B) Policy enforcement\n(C) Data discovery\n(D) Loss of mitigation",
        "中文题目与选项": "实施DLP（数据泄漏防护）解决方案的目标包括以下所有项，除了：\n(A) 弹性\n(B) 策略执行\n(C) 数据发现\n(D) 损失缓解",
        "答案": "A",
        "来源页码": 423
    },
    {
        "题号": "424",
        "英文题目与选项": "What is the intellectual property protection for a useful manufacturing innovation?\n(A) Trademark\n(B) Copyright\n(C) Patent\n(D) Trade secret",
        "中文题目与选项": "对于一种有用的制造业创新，适用的知识产权保护形式是什么？\n(A) 商标\n(B) 版权\n(C) 专利\n(D) 商业秘密",
        "答案": "C",
        "来源页码": 424
    },
    {
        "题号": "425",
        "英文题目与选项": "The most pragmatic option for data disposal in the cloud is which of the following?\n(A) Cryptoshredding\n(B) Overwriting\n(C) Cold fusion\n(D) Melting",
        "中文题目与选项": "在云环境中，数据销毁最实用的方法是哪一种？\n(A) 加密粉碎（Cryptoshredding）\n(B) 覆写\n(C) 冷聚变\n(D) 熔化",
        "答案": "A",
        "来源页码": 425
    },
    {
        "题号": "426",
        "英文题目与选项": "In the cloud motif, the data processor is usually:\n(A) The cloud customer\n(B) The cloud provider\n(C) The cloud access security broker\n(D) The party that assigns access rights",
        "中文题目与选项": "在云计算模型中，数据处理者通常是：\n(A) 云客户\n(B) 云服务提供商\n(C) 云访问安全代理（CASB）\n(D) 分配访问权限的一方",
        "答案": "B",
        "来源页码": 426
    },
    {
        "题号": "427",
        "英文题目与选项": "What is the intellectual property protection for the tangible expression of a creative idea?\n(A) Trade secret\n(B) Copyright\n(C) Trademark\n(D) Patent",
        "中文题目与选项": "对创意的有形表达形式，适用哪种知识产权保护？\n(A) 商业秘密\n(B) 版权\n(C) 商标\n(D) 专利",
        "答案": "B",
        "来源页码": 427
    },
    {
        "题号": "428",
        "英文题目与选项": "The goals of SIEM solution implementation include all of the following, except:\n(A) Dashboarding\n(B) Performance enhancement\n(C) Trend analysis\n(D) Centralization of log streams",
        "中文题目与选项": "SIEM解决方案实施的目标包括以下所有项目，除了：\n(A) 仪表盘展示\n(B) 性能提升\n(C) 趋势分析\n(D) 日志流集中化",
        "答案": "B",
        "来源页码": 428
    },
    {
        "题号": "429",
        "英文题目与选项": "Data masking can be used to provide all of the following functionality, except:\n(A) Secure remote access\n(B) Test data in sandboxed environments\n(C) Authentication of privileged users\n(D) Enforcing least privilege",
        "中文题目与选项": "数据掩码可用于提供以下所有功能，但不包括：\n(A) 安全的远程访问\n(B) 在沙盒环境中测试数据\n(C) 特权用户的身份验证\n(D) 强制执行最小特权原则",
        "答案": "C",
        "来源页码": 429
    },
    {
        "题号": "430",
        "英文题目与选项": "All of the following are terms used to describe the practice of obscuring original raw data so that only a portion is displayed for operational purposes, except:\n(A) Tokenization\n(B) Masking\n(C) Data discovery\n(D) Obfuscation",
        "中文题目与选项": "以下所有术语都用于描述为了操作目的而隐藏原始数据，仅显示部分内容的做法，除了：\n(A) 令牌化（Tokenization）\n(B) 数据遮蔽（Masking）\n(C) 数据发现（Data discovery）\n(D) 混淆（Obfuscation）",
        "答案": "C",
        "来源页码": 430
    },
    {
        "题号": "431",
        "英文题目与选项": "DLP solutions can aid in deterring loss due to which of the following?\n(A) Power failure\n(B) Performance\n(C) Bad policy\n(D) Malicious disclosure",
        "中文题目与选项": "DLP 解决方案有助于防止以下哪种原因导致的损失？\n(A) 断电\n(B) 性能问题\n(C) 不良策略\n(D) 恶意泄露",
        "答案": "D",
        "来源页码": 431
    },
    {
        "题号": "432",
        "英文题目与选项": "All the following are data analytics modes, except:\n(A) Data mining\n(B) Agile business intelligence\n(C) Refractory iterations\n(D) Real-time analytics",
        "中文题目与选项": "以下所有都是数据分析模式，除了：\n(A) 数据挖掘\n(B) 敏捷商业智能\n(C) 难以反复的迭代\n(D) 实时分析",
        "答案": "C",
        "来源页码": 432
    },
    {
        "题号": "433",
        "英文题目与选项": "What are the U.S. State Department controls on technology exports known as?\n(A) DRM\n(B) ITAR\n(C) EAR\n(D) EAL",
        "中文题目与选项": "美国国务院对技术出口的管制被称为什么？\n(A) 数字版权管理（DRM）\n(B) 国际武器贸易条例（ITAR）\n(C) 出口管理条例（EAR）\n(D) 评估保证等级（EAL）",
        "答案": "B",
        "来源页码": 433
    },
    {
        "题号": "434",
        "英文题目与选项": "When crafting plans and policies for data archiving, we should consider all of the following, except:\n(A) The backup process\n(B) Immediacy of the technology\n(C) Archive location\n(D) The format of the data",
        "中文题目与选项": "在制定数据归档的计划和策略时，以下各项都应予以考虑，除了：\n(A) 备份过程\n(B) 技术的即时性\n(C) 归档位置\n(D) 数据格式",
        "答案": "B",
        "来源页码": 434
    },
    {
        "题号": "435",
        "英文题目与选项": "DLP solutions can aid in deterring loss due to which of the following?\n(A) Device failure\n(B) Randomization\n(C) Inadvertent disclosure\n(D) Natural disaster",
        "中文题目与选项": "DLP 解决方案可以帮助防止以下哪种原因导致的数据丢失？\n(A) 设备故障\n(B) 随机化\n(C) 无意泄露\n(D) 自然灾害",
        "答案": "C",
        "来源页码": 435
    },
    {
        "题号": "436",
        "英文题目与选项": "DLP can be combined with what other security technology to enhance data controls?\n(A) SIEM\n(B) Hypervisors\n(C) DRM\n(D) Kerberos",
        "中文题目与选项": "DLP 可以与哪种其他安全技术结合以增强数据控制？\n(A) 安全信息与事件管理（SIEM）\n(B) 虚拟机监控程序（Hypervisors）\n(C) 数字版权管理（DRM）\n(D) Kerberos",
        "答案": "C",
        "来源页码": 436
    },
    {
        "题号": "437",
        "英文题目与选项": "The goals of SIEM solution implementation include all of the following, except:\n(A) Dashboarding\n(B) Performance enhancement\n(C) Trend analysis\n(D) Centralization of log streams",
        "中文题目与选项": "SIEM 解决方案实施的目标包括以下所有内容，但不包括：\n(A) 仪表板显示\n(B) 性能增强\n(C) 趋势分析\n(D) 日志流的集中化",
        "答案": "B",
        "来源页码": 437
    },
    {
        "题号": "438",
        "英文题目与选项": "Data masking can be used to provide all of the following functionality, except:\n(A) Test data in sandboxed environments\n(B) Authentication of privileged users\n(C) Enforcing least privilege\n(D) Secure remote access",
        "中文题目与选项": "数据掩码可用于提供以下所有功能，除了：\n(A) 在沙盒环境中测试数据\n(B) 特权用户的身份验证\n(C) 强制执行最小特权\n(D) 安全远程访问",
        "答案": "B",
        "来源页码": 438
    },
    {
        "题号": "439",
        "英文题目与选项": "Cryptographic keys for encrypted data stored in the cloud should be ________________.\n(A) Not stored with the cloud provider\n(B) Generated with redundancy\n(C) At least 128 bits long\n(D) Split into groups",
        "中文题目与选项": "存储在云端的加密数据的加密密钥应当是 ________________。\n(A) 不与云服务提供商一起存储\n(B) 生成时具有冗余性\n(C) 至少 128 位长\n(D) 分组存放",
        "答案": "A",
        "来源页码": 439
    },
    {
        "题号": "440",
        "英文题目与选项": "Tokenization requires two distinct _________________ .\n(A) Personnel\n(B) Authentication factors\n(C) Encryption keys\n(D) Databases",
        "中文题目与选项": "令牌化需要两个不同的 _________________。\n(A) 人员\n(B) 认证因子\n(C) 加密密钥\n(D) 数据库",
        "答案": "D",
        "来源页码": 440
    },
    {
        "题号": "441",
        "英文题目与选项": "Best practices for key management include all of the following, except:\n(A) Ensure multifactor authentication\n(B) Pass keys out of band\n(C) Have key recovery processes\n(D) Maintain key security",
        "中文题目与选项": "密钥管理的最佳实践包括以下所有内容，除了：\n(A) 确保多因素身份验证\n(B) 通过带外方式传递密钥\n(C) 实施密钥恢复流程\n(D) 维护密钥安全",
        "答案": "A",
        "来源页码": 441
    },
    {
        "题号": "442",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Distribution limitations\n(B) Multifactor authentication\n(C) Confidentiality level\n(D) Access restrictions",
        "中文题目与选项": "数据标签可以包含以下所有内容，但不包括：\n(A) 分发限制\n(B) 多因素认证\n(C) 机密级别\n(D) 访问限制",
        "答案": "B",
        "来源页码": 442
    },
    {
        "题号": "443",
        "英文题目与选项": "What is the correct order of the phases of the data life cycle?\n(A) Create, Use, Store, Share, Archive, Destroy\n(B) Create, Archive, Store, Share, Use, Destroy\n(C) Create, Store, Use, Archive, Share, Destroy\n(D) Create, Store, Use, Share, Archive, Destroy",
        "中文题目与选项": "数据生命周期的各个阶段正确的顺序是什么？\n(A) 创建、使用、存储、共享、归档、销毁\n(B) 创建、归档、存储、共享、使用、销毁\n(C) 创建、存储、使用、归档、共享、销毁\n(D) 创建、存储、使用、共享、归档、销毁",
        "答案": "D",
        "来源页码": 443
    },
    {
        "题号": "444",
        "英文题目与选项": "Cryptographic keys should be secured ________________.\n(A) To a level at least as high as the data they can decrypt\n(B) In vaults\n(C) With two-person integrity\n(D) By armed guards",
        "中文题目与选项": "加密密钥应当以何种方式进行保护？\n(A) 保护级别至少与其可解密的数据相同\n(B) 存放在保险库中\n(C) 采用双人完整性机制\n(D) 由武装警卫看守",
        "答案": "A",
        "来源页码": 444
    },
    {
        "题号": "445",
        "英文题目与选项": "What is the experimental technology that might lead to the possibility of processing encrypted data without having to decrypt it first?\n(A) One-time pads\n(B) Link encryption\n(C) Homomorphic encryption\n(D) AES",
        "中文题目与选项": "哪种实验性技术可能使在不解密的情况下处理加密数据成为可能？\n(A) 一次性密码本\n(B) 链路加密\n(C) 同态加密\n(D) AES",
        "答案": "C",
        "来源页码": 445
    },
    {
        "题号": "446",
        "英文题目与选项": "What are third-party providers of IAM functions for the cloud environment?\n(A) AESs\n(B) SIEMs\n(C) DLPs\n(D) CASBs",
        "中文题目与选项": "云环境中提供身份与访问管理（IAM）功能的第三方服务商是什么？\n(A) AES\n(B) SIEM\n(C) DLP\n(D) CASB",
        "答案": "D",
        "来源页码": 446
    },
    {
        "题号": "447",
        "英文题目与选项": "Data labels could include all the following, except:\n(A) Data value\n(B) Date of scheduled destruction\n(C) Date data was created\n(D) Data owner",
        "中文题目与选项": "数据标签可以包含以下所有内容，但不包括：\n(A) 数据值\n(B) 预定销毁日期\n(C) 数据创建日期\n(D) 数据所有者",
        "答案": "A",
        "来源页码": 447
    },
    {
        "题号": "448",
        "英文题目与选项": "What are the U.S. Commerce Department controls on technology exports known as?\n(A) ITAR\n(B) DRM\n(C) EAR\n(D) EAL",
        "中文题目与选项": "美国商务部对技术出口的管制被称为什么？\n(A) ITAR\n(B) DRM\n(C) EAR\n(D) EAL",
        "答案": "C",
        "来源页码": 448
    },
    {
        "题号": "449",
        "英文题目与选项": "All of these are methods of data discovery, except:\n(A) Label-based\n(B) User-based\n(C) Content-based\n(D) Metadata-based",
        "中文题目与选项": "以下所有都是数据发现的方法，除了：\n(A) 基于标签\n(B) 基于用户\n(C) 基于内容\n(D) 基于元数据",
        "答案": "B",
        "来源页码": 449
    },
    {
        "题号": "450",
        "英文题目与选项": "The various models generally available for cloud BC/DR activities include all of the following except:\n(A) Private architecture, cloud backup\n(B) Cloud provider, backup from another cloud provider\n(C) Cloud provider, backup from same provider\n(D) Cloud provider, backup from private provider",
        "中文题目与选项": "云计算业务连续性/灾难恢复（BC/DR）中常见的几种模型包括以下所有选项，除了：\n(A) 私有架构，云备份\n(B) 云服务提供商，从另一家云服务提供商进行备份\n(C) 云服务提供商，从同一提供商处进行备份\n(D) 云服务提供商，从私有提供商处进行备份",
        "答案": "D",
        "来源页码": 450
    },
    {
        "题号": "451",
        "英文题目与选项": "Which kind of SSAE audit reviews controls dealing with the organization's controls for assuring the confidentiality, integrity, and availability of data?\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "中文题目与选项": "哪种类型的 SSAE 审计会审查处理组织在确保数据的机密性、完整性和可用性方面所实施控制的情况？\n(A) SOC 1\n(B) SOC 2\n(C) SOC 3\n(D) SOC 4",
        "答案": "B",
        "来源页码": 451
    },
    {
        "题号": "452",
        "英文题目与选项": "To address shared monitoring and testing responsibilities in a cloud configuration, the provider might offer all these to the cloud customer except:\n(A) Access to audit logs and performance data\n(B) DLP solution results\n(C) Security control administration\n(D) SIM, SEIM, and SEM logs",
        "中文题目与选项": "为了解决云配置中的共享监控和测试责任，云服务提供商可能向云客户提供以下所有内容，除了：\n(A) 访问审计日志和性能数据\n(B) DLP（数据泄漏防护）解决方案结果\n(C) 安全控制管理\n(D) SIM、SEIM 和 SEM 日志",
        "答案": "C",
        "来源页码": 452
    },
    {
        "题号": "453",
        "英文题目与选项": "Which kind of SSAE audit report is most beneficial for a cloud customer, even though it's unlikely the cloud provider will share it?\n(A) SOC 3\n(B) SOC 1 Type 2\n(C) SOC 2 Type 2\n(D) SOC 1 Type 1",
        "中文题目与选项": "对于云客户而言，哪种 SSAE 审计报告最有价值，尽管云服务提供商不太可能与客户共享？\n(A) SOC 3\n(B) SOC 1 类型 2\n(C) SOC 2 类型 2\n(D) SOC 1 类型 1",
        "答案": "C",
        "来源页码": 453
    },
    {
        "题号": "454",
        "英文题目与选项": "When reviewing the BIA after a cloud migration, the organization should take into account new factors related to data breach impacts. One of these new factors is:\n(A) Many states have data breach notification laws.\n(B) Breaches can cause the loss of proprietary data.\n(C) Breaches can cause the loss of intellectual property.\n(D) Legal liability can't be transferred to the cloud provider.",
        "中文题目与选项": "在云迁移后审查业务影响分析（BIA）时，组织应考虑与数据泄露影响相关的新因素。以下哪一项是新的因素：\n(A) 许多州都有数据泄露通知法。\n(B) 数据泄露可能导致专有数据丢失。\n(C) 数据泄露可能导致知识产权丢失。\n(D) 法律责任不能转移给云服务提供商。",
        "答案": "A",
        "来源页码": 454
    },
    {
        "题号": "455",
        "英文题目与选项": "What is the term we use to describe the general ease and efficiency of moving data from one cloud provider either to another cloud provider or down from the cloud?\n(A) Obfuscation\n(B) Elasticity\n(C) Mobility\n(D) Portability",
        "中文题目与选项": "用于描述将数据从一个云服务提供商迁移到另一个云服务提供商或从云端迁移到本地的过程的总体方便性和效率的术语是什么？\n(A) 混淆\n(B) 弹性\n(C) 移动性\n(D) 可移植性",
        "答案": "D",
        "来源页码": 455
    },
    {
        "题号": "456",
        "英文题目与选项": "Countermeasures for protecting cloud operations against internal threats include all of the following except:\n(A) Mandatory vacation\n(B) Least privilege\n(C) Separation of duties\n(D) Conflict of interest",
        "中文题目与选项": "以下哪项不是用于保护云操作防范内部威胁的对策？\n(A) 强制休假\n(B) 最小特权\n(C) 职责分离\n(D) 利益冲突",
        "答案": "D",
        "来源页码": 456
    },
    {
        "题号": "457",
        "英文题目与选项": "The cloud customer will have the most control of their data and systems, and the cloud provider will have the least amount of responsibility, in which cloud computing arrangement?\n(A) IaaS\n(B) SaaS\n(C) Community cloud\n(D) PaaS",
        "中文题目与选项": "在以下哪种云计算安排中，云客户对其数据和系统拥有最大的控制权，而云服务提供商承担的责任最少？\n(A) 基础设施即服务（IaaS）\n(B) 软件即服务（SaaS）\n(C) 社区云\n(D) 平台即服务（PaaS）",
        "答案": "A",
        "来源页码": 457
    },
    {
        "题号": "458",
        "英文题目与选项": "Countermeasures for protecting cloud operations against external attackers include all of the following except:\n(A) Continual monitoring for anomalous activity.\n(B) Detailed and extensive background checks.\n(C) Regular and detailed configuration/change management activities.\n(D) Hardened devices and systems, including servers, hosts, hypervisors, and virtual machines.",
        "中文题目与选项": "以下哪项不是保护云运营免受外部攻击者威胁的对策？\n(A) 持续监控异常活动。\n(B) 进行详细且广泛的背景调查。\n(C) 定期且详细的配置/变更管理活动。\n(D) 加固设备和系统，包括服务器、主机、虚拟机管理程序和虚拟机。",
        "答案": "B",
        "来源页码": 458
    },
    {
        "题号": "459",
        "英文题目与选项": "User access to the cloud environment can be administered in all of the following ways except:\n(A) Provider provides administration on behalf of the customer\n(B) Customer directly administers access\n(C) Third party provides administration on behalf of the customer\n(D) Customer provides administration on behalf of the provider",
        "中文题目与选项": "以下哪种方式不能用于管理用户对云环境的访问：\n(A) 由服务提供商代表客户进行管理\n(B) 客户直接管理访问权限\n(C) 第三方代表客户进行管理\n(D) 客户代表服务提供商进行管理",
        "答案": "D",
        "来源页码": 459
    },
    {
        "题号": "460",
        "英文题目与选项": "Countermeasures for protecting cloud operations against internal threats include all of the following except:\n(A) Extensive and comprehensive training programs, including initial, recurring, and refresher sessions\n(B) Skills and knowledge testing\n(C) Hardened perimeter devices\n(D) Aggressive background checks",
        "中文题目与选项": "针对内部威胁保护云运营的对策包括以下所有内容，除了：\n(A) 广泛而全面的培训计划，包括初始、定期和复训课程\n(B) 技能和知识测试\n(C) 加固的边界设备\n(D) 严格的背景调查",
        "答案": "C",
        "来源页码": 460
    },
    {
        "题号": "461",
        "英文题目与选项": "Each of the following are dependencies that must be considered when reviewing the BIA after cloud migration except:\n(A) The cloud provider's utilities\n(B) The cloud provider's suppliers\n(C) The cloud provider's resellers\n(D) The cloud provider's vendors",
        "中文题目与选项": "在云迁移后审查业务影响分析（BIA）时，以下各项都是必须考虑的依赖项，除了：\n(A) 云服务提供商的公用设施\n(B) 云服务提供商的供应商\n(C) 云服务提供商的经销商\n(D) 云服务提供商的销售商",
        "答案": "C",
        "来源页码": 461
    },
    {
        "题号": "462",
        "英文题目与选项": "Because of multitenancy, specific risks in the public cloud that don't exist in the other cloud service models include all the following except:\n(A) DoS/DDoS\n(B) Information bleed\n(C) Risk of loss/disclosure due to legal seizures\n(D) Escalation of privilege",
        "中文题目与选项": "由于多租户特性，公有云中存在而其他云服务模型中不存在的特定风险包括以下各项，除了：\n(A) 拒绝服务/分布式拒绝服务攻击（DoS/DDoS）\n(B) 信息泄露\n(C) 因法律查封导致的数据丢失或泄露风险\n(D) 权限提升",
        "答案": "A",
        "来源页码": 462
    },
    {
        "题号": "463",
        "英文题目与选项": "What is the cloud service model in which the customer is responsible for administration of the OS?\n(A) QaaS\n(B) SaaS\n(C) PaaS\n(D) IaaS",
        "中文题目与选项": "客户负责操作系统管理的云服务模型是什么？\n(A) QaaS\n(B) SaaS\n(C) PaaS\n(D) IaaS",
        "答案": "D",
        "来源页码": 463
    },
    {
        "题号": "464",
        "英文题目与选项": "All of the following are techniques to enhance the portability of cloud data, in order to minimize the potential of vendor lock-in except:\n(A) Ensure there are no physical limitations to moving\n(B) Use DRM and DLP solutions widely throughout the cloud operation\n(C) Ensure favorable contract terms to support portability\n(D) Avoid proprietary data formats",
        "中文题目与选项": "以下所有方法都是为了增强云数据的可移植性，从而最大限度地减少供应商锁定潜在风险的技术，除了：\n(A) 确保在迁移时没有物理限制\n(B) 在整个云操作中广泛使用 DRM 和 DLP 解决方案\n(C) 确保合同条款有利于支持数据可移植性\n(D) 避免使用专有数据格式",
        "答案": "B",
        "来源页码": 464
    },
    {
        "题号": "465",
        "英文题目与选项": "Hardening the operating system refers to all of the following except:\n(A) Limiting administrator access\n(B) Closing unused ports\n(C) Removing antimalware agents\n(D) Removing unnecessary services and libraries",
        "中文题目与选项": "操作系统加固指以下所有措施，除了：\n(A) 限制管理员访问\n(B) 关闭未使用的端口\n(C) 删除反恶意软件代理\n(D) 删除不必要的服务和库",
        "答案": "C",
        "来源页码": 465
    },
    {
        "题号": "466",
        "英文题目与选项": "Which kind of SSAE audit report is a cloud customer most likely to receive from a cloud provider?\n(A) SOC 1 Type 1\n(B) SOC 2 Type 2\n(C) SOC 3\n(D) SOC 1 Type 2",
        "中文题目与选项": "云客户最有可能从云服务提供商处获得哪种类型的 SSAE 审计报告？\n(A) SOC 1 类型 1\n(B) SOC 2 类型 2\n(C) SOC 3\n(D) SOC 1 类型 2",
        "答案": "C",
        "来源页码": 466
    },
    {
        "题号": "467",
        "英文题目与选项": "The cloud customer's trust in the cloud provider can be enhanced by all of the following except:\n(A) SLAs\n(B) Shared administration\n(C) Audits\n(D) Real-time video surveillance",
        "中文题目与选项": "云客户对云服务提供商的信任可以通过以下所有方式增强，除了：\n(A) 服务级别协议（SLA）\n(B) 共享管理\n(C) 审计\n(D) 实时视频监控",
        "答案": "D",
        "来源页码": 467
    },
    {
        "题号": "468",
        "英文题目与选项": "As a result of scandals involving publicly traded corporations such as Enron, WorldCom, and Adelphi, Congress passed legislation known as:\n(A) SOX\n(B) HIPAA\n(C) FERPA\n(D) GLBA",
        "中文题目与选项": "由于涉及安然（Enron）、世通（WorldCom）和阿德尔菲（Adelphi）等上市公司的丑闻，国会通过了以下被称为的立法：\n(A) SOX（萨班斯-奥克斯利法案）\n(B) HIPAA（健康保险携带与责任法案）\n(C) FERPA（家庭教育权利与隐私法案）\n(D) GLBA（格雷姆-里奇-布莱利法案）",
        "答案": "A",
        "来源页码": 468
    },
    {
        "题号": "469",
        "英文题目与选项": "In addition to whatever audit results the provider shares with the customer, what other mechanism does the customer have to ensure trust in the provider's performance and duties?\n(A) HIPAA\n(B) The contract\n(C) Statutes\n(D) Security control matrix",
        "中文题目与选项": "除了服务提供商与客户共享的审核结果之外，客户还可以通过哪种机制来确保对提供商绩效和职责的信任？\n(A) HIPAA 法案\n(B) 合同\n(C) 法规\n(D) 安全控制矩阵",
        "答案": "B",
        "来源页码": 469
    },
    {
        "题号": "470",
        "英文题目与选项": "The application normative framework is best described as which of the following?\n(A) A superset of the ONF\n(B) A stand-alone framework for storing security practices for the ONF\n(C) The complete ONF\n(D) A subnet of the ONF",
        "中文题目与选项": "关于应用规范框架（application normative framework），以下哪一项最能准确描述它？\n(A) ONF 的超集\n(B) 一个用于存储 ONF 安全实践的独立框架\n(C) 完整的 ONF\n(D) ONF 的子网",
        "答案": "D",
        "来源页码": 470
    },
    {
        "题号": "471",
        "英文题目与选项": "Deviations from the baseline should be investigated and __________________.\n(A) Revealed\n(B) Documented\n(C) Encouraged\n(D) Enforced",
        "中文题目与选项": "与基线的偏差应进行调查并__________________。\n(A) 披露\n(B) 记录\n(C) 鼓励\n(D) 强制执行",
        "答案": "B",
        "来源页码": 471
    },
    {
        "题号": "472",
        "英文题目与选项": "Which of the following best describes the Organizational Normative Framework (ONF)?\n(A) A set of application security, and best practices, catalogued and leveraged by the organization\n(B) A container for components of an application's security, best practices catalogued and leveraged by the organization\n(C) A framework of containers for some of the components of application security, best practices, catalogued and leveraged by the organization\n(D) A framework of containers for all components of application security, best practices, catalogued and leveraged by the organization",
        "中文题目与选项": "以下哪项最能描述组织规范框架（ONF）？\n(A) 由组织编录并利用的一套应用安全和最佳实践\n(B) 由组织编录并利用的应用程序安全组件容器及其最佳实践\n(C) 包含部分应用安全组件及最佳实践的容器框架，并由组织编录和利用\n(D) 包含所有应用安全组件及最佳实践的容器框架，并由组织编录和利用",
        "答案": "D",
        "来源页码": 472
    },
    {
        "题号": "473",
        "英文题目与选项": "A UPS should have enough power to last how long?\n(A) One day\n(B) 12 hours\n(C) Long enough for graceful shutdown\n(D) 10 minutes",
        "中文题目与选项": "UPS 应该具备足够的电力以维持多长时间？\n(A) 一天\n(B) 12 小时\n(C) 足够支持系统的正常关闭\n(D) 10 分钟",
        "答案": "C",
        "来源页码": 473
    },
    {
        "题号": "474",
        "英文题目与选项": "Which of the following best describes the purpose and scope of ISO/IEC 27034-1?\n(A) Describes international privacy standards for cloud computing\n(B) Serves as a newer replacement for NIST 800-52 r4\n(C) Provides an overview of network and infrastructure security designed to secure cloud applications\n(D) Provides an overview of application security that introduces definitive concepts, principles, and processes involved in application security",
        "中文题目与选项": "以下哪一项最能描述 ISO/IEC 27034-1 的目的和范围？\n(A) 描述云计算的国际隐私标准\n(B) 作为 NIST 800-52 r4 的新替代版本\n(C) 提供旨在保护云应用程序的网络和基础设施安全概述\n(D) 提供应用程序安全的概述，介绍其中的关键概念、原则和相关流程",
        "答案": "D",
        "来源页码": 474
    },
    {
        "题号": "475",
        "英文题目与选项": "Which of the following best describes SAML?\n(A) A standard used for directory synchronization\n(B) A standard for developing secure application management logistics\n(C) A standard for exchanging usernames and passwords across devices\n(D) A standard for exchanging authentication and authorization data between security domains",
        "中文题目与选项": "以下哪项最能描述 SAML？\n(A) 用于目录同步的标准\n(B) 用于开发安全应用管理逻辑的标准\n(C) 用于在设备之间交换用户名和密码的标准\n(D) 用于在安全域之间交换身份验证和授权数据的标准",
        "答案": "D",
        "来源页码": 475
    },
    {
        "题号": "476",
        "英文题目与选项": "Web application firewalls (WAFs) are designed primarily to protect applications from common attacks like:\n(A) Ransomware\n(B) Syn floods\n(C) XSS and SQL injection\n(D) Password cracking",
        "中文题目与选项": "Web应用防火墙（WAF）的主要设计目的是保护应用程序免受以下常见攻击：\n(A) 勒索软件攻击\n(B) SYN洪泛攻击\n(C) XSS和SQL注入\n(D) 密码破解",
        "答案": "C",
        "来源页码": 476
    },
    {
        "题号": "477",
        "英文题目与选项": "APIs are defined as which of the following?\n(A) A set of protocols, and tools for building software applications to access a web-based software application or tool\n(B) A set of routines, standards, protocols, and tools for building software applications to access a web-based software application or tool\n(C) A set of standards for building software applications to access a web-based software application or tool\n(D) A set of routines and tools for building software applications to access web-based software applications",
        "中文题目与选项": "API 的定义是以下哪一项？\n(A) 一组用于构建软件应用并访问基于 Web 的软件应用或工具的协议和工具\n(B) 一组用于构建软件应用并访问基于 Web 的软件应用或工具的例程、标准、协议和工具\n(C) 一组用于构建软件应用并访问基于 Web 的软件应用或工具的标准\n(D) 一组用于构建软件应用并访问基于 Web 的软件应用的例程和工具",
        "答案": "B",
        "来源页码": 477
    },
    {
        "题号": "478",
        "英文题目与选项": "Which of the following best describes data masking?\n(A) A method for creating similar but inauthentic datasets used for software testing and user training.\n(B) A method used to protect prying eyes from data such as social security numbers and credit card data.\n(C) A method where the last few numbers in a dataset are not obscured. These are often used for authentication.\n(D) Data masking involves stripping out all digits in a string of numbers so as to obscure the original number.",
        "中文题目与选项": "以下哪项最能描述数据掩码（Data Masking）？\n(A) 一种用于创建类似但不真实的数据集的方法，用于软件测试和用户培训。\n(B) 一种用于保护敏感信息不被窥视的方法，例如社会保障号码和信用卡数据。\n(C) 一种只隐藏数据集中最后几位数字的方法，这些数字通常用于验证。\n(D) 数据掩码通过删除数字字符串中的所有数字来隐藏原始号码。",
        "答案": "A",
        "来源页码": 478
    },
    {
        "题号": "479",
        "英文题目与选项": "Which of the following best describes a sandbox?\n(A) An isolated space where untested code and experimentation can safely occur separate from the production environment.\n(B) A space where you can safely execute malicious code to see what it does.\n(C) An isolated space where transactions are protected from malicious software.\n(D) An isolated space where untested code and experimentation can safely occur within the production environment.",
        "中文题目与选项": "以下哪项最能描述沙盒？\n(A) 一个与生产环境分离的隔离空间，可安全地进行未经测试的代码和实验。\n(B) 一个可以安全地执行恶意代码以观察其行为的空间。\n(C) 一个用于保护交易免受恶意软件侵害的隔离空间。\n(D) 一个在生产环境中安全进行未经测试的代码和实验的隔离空间。",
        "答案": "A",
        "来源页码": 479
    },
    {
        "题号": "480",
        "英文题目与选项": "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?\n(A) UPS\n(B) Generators\n(C) Joint operating agreements\n(D) Strict adherence to applicable regulations",
        "中文题目与选项": "通过使用以下哪种方式，可以以成本效益的方式应对局部事件或灾害？\n(A) 不间断电源（UPS）\n(B) 发电机\n(C) 联合运营协议\n(D) 严格遵守适用法规",
        "答案": "C",
        "来源页码": 480
    },
    {
        "题号": "481",
        "英文题目与选项": "In addition to battery backup, a UPS can offer which capability?\n(A) Breach alert\n(B) Confidentiality\n(C) Communication redundancy\n(D) Line conditioning",
        "中文题目与选项": "除了电池备份之外，不间断电源（UPS）还可以提供以下哪种功能？\n(A) 入侵警报\n(B) 机密性\n(C) 通信冗余\n(D) 电源调节",
        "答案": "D",
        "来源页码": 481
    },
    {
        "题号": "482",
        "英文题目与选项": "For performance purposes, OS monitoring should include all of the following except:\n(A) Disk space\n(B) Disk I/O usage\n(C) CPU usage\n(D) Print spooling",
        "中文题目与选项": "为了性能考虑，操作系统监控应包含以下所有内容，除了：\n(A) 磁盘空间\n(B) 磁盘 I/O 使用情况\n(C) CPU 使用情况\n(D) 打印缓冲",
        "答案": "D",
        "来源页码": 482
    },
    {
        "题号": "483",
        "英文题目与选项": "Identity and access management (IAM) is a security discipline that ensures which of the following?\n(A) That all users are properly authorized\n(B) That the right individual gets access to the right resources at the right time for the right reasons.\n(C) That all users are properly authenticated\n(D) That unauthorized users will get access to the right resources at the right time for the right reasons",
        "中文题目与选项": "身份与访问管理（IAM）是一种安全学科，它确保以下哪一项？\n(A) 所有用户都被正确授权\n(B) 正确的个人在正确的时间、出于正确的原因访问正确的资源\n(C) 所有用户都被正确认证\n(D) 未经授权的用户能够在正确的时间出于正确的原因访问正确的资源",
        "答案": "B",
        "来源页码": 483
    },
    {
        "题号": "484",
        "英文题目与选项": "Maintenance mode requires all of these actions except:\n(A) Remove all active production instances\n(B) Ensure logging continues\n(C) Initiate enhanced security controls\n(D) Prevent new logins",
        "中文题目与选项": "维护模式需要执行以下所有操作，但以下哪项除外：\n(A) 移除所有活动的生产实例\n(B) 确保日志记录持续进行\n(C) 启动增强的安全控制\n(D) 阻止新的登录",
        "答案": "A",
        "来源页码": 484
    },
    {
        "题号": "485",
        "英文题目与选项": "What is one of the reasons a baseline might be changed?\n(A) Numerous change requests\n(B) To reduce redundancy\n(C) Natural disaster\n(D) Power fluctuation",
        "中文题目与选项": "基线可能被更改的一个原因是什么？\n(A) 大量的变更请求\n(B) 减少冗余\n(C) 自然灾害\n(D) 电力波动",
        "答案": "A",
        "来源页码": 485
    },
    {
        "题号": "486",
        "英文题目与选项": "In a federated identity arrangement using a trusted third-party model, who is the identity provider and who is the relying party?\n(A) The users of the various organizations within the federation / a CASB\n(B) Each member organization / a trusted third party\n(C) Each member organization / each member organization\n(D) A contracted third party / the various member organizations of the federation",
        "中文题目与选项": "在采用受信任第三方模型的联合身份管理安排中，哪一方是身份提供者，哪一方是信任方？\n(A) 联盟中各组织的用户 / 一个 CASB（云访问安全代理）\n(B) 每个成员组织 / 一个受信任的第三方\n(C) 每个成员组织 / 每个成员组织\n(D) 一个签约的第三方 / 联盟中的各成员组织",
        "答案": "D",
        "来源页码": 486
    },
    {
        "题号": "487",
        "英文题目与选项": "Database activity monitoring (DAM) can be:\n(A) Host-based or network-based\n(B) Server-based or client-based\n(C) Used in the place of encryption\n(D) Used in place of data masking",
        "中文题目与选项": "数据库活动监控（DAM）可以是：\n(A) 基于主机或网络的\n(B) 基于服务器或客户端的\n(C) 用于替代加密\n(D) 用于替代数据脱敏",
        "答案": "A",
        "来源页码": 487
    },
    {
        "题号": "488",
        "英文题目与选项": "The BC/DR kit should include all of the following except:\n(A) Annotated asset inventory\n(B) Flashlight\n(C) Hard drives\n(D) Documentation equipment",
        "中文题目与选项": "BC/DR（业务连续性/灾难恢复）工具包应包含以下所有内容，除了：\n(A) 标注的资产清单\n(B) 手电筒\n(C) 硬盘\n(D) 文档设备",
        "答案": "C",
        "来源页码": 489
    },
    {
        "题号": "489",
        "英文题目与选项": "The baseline should cover which of the following?\n(A) Data breach alerting and reporting\n(B) All regulatory compliance requirements\n(C) As many systems throughout the organization as possible\n(D) A process for version control",
        "中文题目与选项": "基线应涵盖以下哪一项？\n(A) 数据泄露的警报与报告\n(B) 所有监管合规要求\n(C) 尽可能多的组织系统\n(D) 版本控制的流程",
        "答案": "C",
        "来源页码": 490
    },
    {
        "题号": "490",
        "英文题目与选项": "Which of the following roles is responsible for creating cloud components and the testing and validation of services?\n(A) Cloud auditor\n(B) Inter-cloud provider\n(C) Cloud service broker\n(D) Cloud service developer",
        "中文题目与选项": "以下哪一个角色负责创建云组件以及对服务进行测试和验证？\n(A) 云审计员\n(B) 跨云提供者\n(C) 云服务经纪人\n(D) 云服务开发人员",
        "答案": "D",
        "来源页码": 491
    },
    {
        "题号": "491",
        "英文题目与选项": "Which of the following storage types is most closely associated with a database-type storage implementation?\n(A) Object\n(B) Unstructured\n(C) Volume\n(D) Structured",
        "中文题目与选项": "以下哪种存储类型与数据库类型的存储实现最密切相关？\n(A) 对象存储\n(B) 非结构化存储\n(C) 卷存储\n(D) 结构化存储",
        "答案": "D",
        "来源页码": 492
    },
    {
        "题号": "492",
        "英文题目与选项": "A data custodian is responsible for which of the following?\n(A) Data context\n(B) Data content\n(C) The safe custody, transport, storage of the data, and implementation of business rules\n(D) Logging access and alerts",
        "中文题目与选项": "数据保管人负责以下哪项？\n(A) 数据上下文\n(B) 数据内容\n(C) 数据的安全保管、传输、存储以及业务规则的实施\n(D) 访问和警报的记录",
        "答案": "C",
        "来源页码": 493
    },
    {
        "题号": "493",
        "英文题目与选项": "Which of the following is the least challenging with regard to eDiscovery in the cloud?\n(A) Identifying roles such as data owner, controller and processor\n(B) Decentralization of data storage\n(C) Forensic analysis\n(D) Complexities of International law",
        "中文题目与选项": "以下哪项是云中电子取证（eDiscovery）方面挑战最小的？\n(A) 识别数据所有者、控制者和处理者等角色\n(B) 数据存储去中心化\n(C) 取证分析\n(D) 国际法律的复杂性",
        "答案": "A",
        "来源页码": 494
    },
    {
        "题号": "494",
        "英文题目与选项": "What is the Cloud Security Alliance Cloud Controls Matrix (CCM)?\n(A) A set of software development life cycle requirements for cloud service providers\n(B) An inventory of cloud services security controls that are arranged into a hierarchy of security domains\n(C) An inventory of cloud service security controls that are arranged into separate security domains\n(D) A set of regulatory requirements for cloud service providers",
        "中文题目与选项": "云安全联盟的云控制矩阵（CCM）是什么？\n(A) 针对云服务提供商的软件开发生命周期要求集\n(B) 一个云服务安全控制的清单，这些控制被组织在一个分层的安全域结构中\n(C) 一个云服务安全控制的清单，这些控制被划分到不同的安全域中\n(D) 一组针对云服务提供商的监管要求",
        "答案": "C",
        "来源页码": 495
    },
    {
        "题号": "495",
        "英文题目与选项": "Which of the following is a valid risk management metric?\n(A) KPI\n(B) KRI\n(C) SOC\n(D) SLA",
        "中文题目与选项": "以下哪一项是有效的风险管理指标？\n(A) 关键绩效指标（KPI）\n(B) 关键风险指标（KRI）\n(C) 安全运营中心（SOC）\n(D) 服务级别协议（SLA）",
        "答案": "B",
        "来源页码": 496
    },
    {
        "题号": "496",
        "英文题目与选项": "Which of the following is the best example of a key component of regulated PII?\n(A) Audit rights of subcontractors\n(B) Items that should be implemented\n(C) PCI DSS\n(D) Mandatory breach reporting",
        "中文题目与选项": "下列哪一项是受监管的个人可识别信息（PII）的关键组成部分的最佳示例？\n(A) 分包商的审计权\n(B) 应实施的项目\n(C) 支付卡行业数据安全标准（PCI DSS）\n(D) 强制违规报告",
        "答案": "D",
        "来源页码": 497
    },
    {
        "题号": "497",
        "英文题目与选项": "Which of the following components are part of what a CCSP should review when looking at contracting with a cloud service provider?\n(A) Redundant uplink grafts\n(B) Background checks for the provider's personnel\n(C) The physical layout of the datacenter\n(D) Use of subcontractors",
        "中文题目与选项": "以下哪些组件是 CCSP 在与云服务提供商签订合同时应审查的内容？\n(A) 冗余上行链路配置\n(B) 对服务提供商人员的背景调查\n(C) 数据中心的物理布局\n(D) 分包商的使用情况",
        "答案": "D",
        "来源页码": 498
    },
    {
        "题号": "498",
        "英文题目与选项": "Which of the following is not a way to manage risk?\n(A) Transferring\n(B) Accepting\n(C) Mitigating\n(D) Enveloping",
        "中文题目与选项": "以下哪一项不是管理风险的方法？\n(A) 转移\n(B) 接受\n(C) 缓解\n(D) 包容",
        "答案": "D",
        "来源页码": 499
    },
    {
        "题号": "499",
        "英文题目与选项": "Which of the following terms is not associated with cloud forensics?\n(A) eDiscovery\n(B) Chain of custody\n(C) Analysis\n(D) Plausibility",
        "中文题目与选项": "以下哪个术语与云取证无关？\n(A) 电子取证（eDiscovery）\n(B) 证据保全链（Chain of custody）\n(C) 分析（Analysis）\n(D) 可信性（Plausibility）",
        "答案": "D",
        "来源页码": 500
    },
    {
        "题号": "500",
        "英文题目与选项": "Which is the lowest level of the CSA STAR program?\n(A) Attestation\n(B) Self-assessment\n(C) Hybridization\n(D) Continuous monitoring",
        "中文题目与选项": "CSA STAR 计划中最低级别的是哪一个？\n(A) 审核认证\n(B) 自我评估\n(C) 混合验证\n(D) 持续监控",
        "答案": "B",
        "来源页码": 501
    },
    {
        "题号": "501",
        "英文题目与选项": "Which of the following is the primary purpose of an SOC 3 report?\n(A) HIPAA compliance\n(B) Absolute assurances\n(C) Seal of approval\n(D) Compliance with PCI/DSS",
        "中文题目与选项": "以下哪项是 SOC 3 报告的主要目的？\n(A) 符合 HIPAA 要求\n(B) 提供绝对保证\n(C) 认证认可标志\n(D) 符合 PCI/DSS 要求",
        "答案": "C",
        "来源页码": 502
    },
    {
        "题号": "502",
        "英文题目与选项": "Which of the following is not an example of a highly regulated environment?\n(A) Financial services\n(B) Healthcare\n(C) Public companies\n(D) Wholesale or distribution",
        "中文题目与选项": "以下哪一个不是高度受监管的环境的例子？\n(A) 金融服务\n(B) 医疗保健\n(C) 上市公司\n(D) 批发或分销",
        "答案": "D",
        "来源页码": 503
    },
    {
        "题号": "503",
        "英文题目与选项": "Which of the following methods of addressing risk is most associated with insurance?\n(A) Mitigation\n(B) Transference\n(C) Avoidance\n(D) Acceptance",
        "中文题目与选项": "以下哪种风险处理方法与保险最相关？\n(A) 缓解\n(B) 转移\n(C) 避免\n(D) 接受",
        "答案": "B",
        "来源页码": 504
    },
    {
        "题号": "504",
        "英文题目与选项": "Legal controls refer to which of the following?\n(A) ISO 27001\n(B) PCI DSS\n(C) NIST 800-53r4\n(D) Controls designed to comply with laws and regulations related to the cloud environment",
        "中文题目与选项": "下列哪项属于法律控制？\n(A) ISO 27001\n(B) PCI DSS\n(C) NIST 800-53r4\n(D) 为遵守与云环境相关的法律法规而设计的控制措施",
        "答案": "D",
        "来源页码": 505
    },
    {
        "题号": "505",
        "英文题目与选项": "Which of the following best describes a cloud carrier?\n(A) The intermediary who provides connectivity and transport of cloud providers and cloud consumers\n(B) A person or entity responsible for making a cloud service available to consumers\n(C) The person or entity responsible for transporting data across the Internet\n(D) The person or entity responsible for keeping cloud services running for customers",
        "中文题目与选项": "以下哪项最能描述云运营商？\n(A) 作为中介，为云服务提供商和云消费者提供连接与传输的实体\n(B) 负责让云服务可供消费者使用的个人或实体\n(C) 负责在互联网上传输数据的个人或实体\n(D) 负责保持云服务正常运行以服务客户的个人或实体",
        "答案": "A",
        "来源页码": 506
    },
    {
        "题号": "506",
        "英文题目与选项": "Gap analysis is performed for what reason?\n(A) To begin the benchmarking process\n(B) To assure proper accounting practices are being used\n(C) To provide assurances to cloud customers\n(D) To ensure all controls are in place and working properly",
        "中文题目与选项": "进行差距分析的原因是什么？\n(A) 开始基准测试流程\n(B) 确保采用了适当的会计做法\n(C) 向云客户提供保证\n(D) 确保所有控制措施均已到位并正常运行",
        "答案": "D",
        "来源页码": 507
    },
    {
        "题号": "507",
        "英文题目与选项": "Which of the following frameworks focuses specifically on design implementation and management?\n(A) ISO 31000:2009\n(B) ISO 27017\n(C) NIST 800-92\n(D) HIPAA",
        "中文题目与选项": "以下哪一个框架专注于设计、实施和管理？\n(A) ISO 31000:2009\n(B) ISO 27017\n(C) NIST 800-92\n(D) HIPAA",
        "答案": "B",
        "来源页码": 508
    },
    {
        "题号": "508",
        "英文题目与选项": "Which of the following report is most aligned with financial control audits?\n(A) SSAE 16\n(B) SOC 2\n(C) SOC 1\n(D) SOC 3",
        "中文题目与选项": "以下哪种报告最符合财务控制审计？\n(A) SSAE 16\n(B) SOC 2\n(C) SOC 1\n(D) SOC 3",
        "答案": "C",
        "来源页码": 509
    },
    {
        "题号": "509",
        "英文题目与选项": "Which of the following is not a risk management framework?\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "中文题目与选项": "以下哪一项不是风险管理框架？\n(A) COBIT\n(B) Hex GBL\n(C) ISO 31000:2009\n(D) NIST SP 800-37",
        "答案": "B",
        "来源页码": 510
    },
    {
        "题号": "510",
        "英文题目与选项": "Limits for resource utilization can be set at different levels within a cloud environment to ensure that no particular entity can consume a level of resources that impacts other cloud customers. Which of the following is NOT a unit covered by limits?\n(A) Hypervisor\n(B) Cloud customer\n(C) Virtual machine\n(D) Service",
        "中文题目与选项": "为了确保没有任何实体会消耗影响其他云客户的资源水平，可以在云环境中的不同层级设置资源使用限制。以下哪一项不是限制所涵盖的单位？\n(A) 管理程序（Hypervisor）\n(B) 云客户\n(C) 虚拟机\n(D) 服务",
        "答案": "A",
        "来源页码": 511
    },
    {
        "题号": "511",
        "英文题目与选项": "Which of the following is the dominant driver behind the regulations to which a system or application must adhere?\n(A) Data source\n(B) Locality\n(C) Contract\n(D) SLA",
        "中文题目与选项": "以下哪一项是系统或应用程序必须遵守的法规背后的主要驱动因素？\n(A) 数据来源\n(B) 所在地域\n(C) 合同\n(D) 服务级别协议（SLA）",
        "答案": "B",
        "来源页码": 512
    },
    {
        "题号": "512",
        "英文题目与选项": "When using a SaaS solution, what is the capability provided to the customer?\n(A) To use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.\n(B) To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.\n(C) To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.\n(D) To use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.",
        "中文题目与选项": "在使用 SaaS 解决方案时，客户获得的能力是什么？\n(A) 使用运行在云基础设施上的服务提供商的应用程序。这些应用程序可通过各种客户端设备访问，可以使用瘦客户端接口，例如 Web 浏览器（例如基于网页的电子邮件），或程序接口。消费者可以管理或控制底层云基础设施，包括网络、服务器、操作系统、存储，甚至单个应用程序功能，除了有限的用户特定的应用程序配置设置。\n(B) 使用运行在云基础设施上的消费者自己的应用程序。这些应用程序可通过各种客户端设备访问，可以使用瘦客户端接口，例如 Web 浏览器（例如基于网页的电子邮件），或程序接口。消费者不会管理或控制底层云基础设施，包括网络、服务器、操作系统、存储，甚至单个应用程序功能，除了有限的用户特定的应用程序配置设置。\n(C) 使用运行在云基础设施上的消费者自己的应用程序。这些应用程序可通过各种客户端设备访问，可以使用瘦客户端接口，例如 Web 浏览器（例如基于网页的电子邮件），或程序接口。消费者可以管理或控制底层云基础设施，包括网络、服务器、操作系统、存储，甚至单个应用程序功能，除了有限的用户特定的应用程序配置设置。\n(D) 使用运行在云基础设施上的服务提供商的应用程序。这些应用程序可通过各种客户端设备访问，可以使用瘦客户端接口，例如 Web 浏览器（例如基于网页的电子邮件），或程序接口。消费者不会管理或控制底层云基础设施，包括网络、服务器、操作系统、存储，甚至单个应用程序功能，除了有限的用户特定的应用程序配置设置。",
        "答案": "D",
        "来源页码": 513
    }
]
