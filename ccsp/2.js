const questionsData = [
    {
        "题号": "1",
        "英文题目与选项": "Juanita has configured her virtualization cluster for high availability mode. The virtualization management plane detects that one of her servers has failed and is no longer sending heartbeat information. What will the cluster do if the node cannot be restarted?\n(A) Attempt to reboot the failed system.\n(B) Shut down the failed system and send an alert.\n(C) Restart the VMs hosted on that system on other cluster nodes.\n(D) Migrate the hosts from the failed system to its backup mirror.",
        "中文题目与选项": "Juanita 已将其虚拟化集群配置为高可用模式。虚拟化管理平面检测到其中一台服务器发生故障且不再发送心跳信息。如果该节点无法重新启动，集群将执行哪种操作？\n(A) 尝试重新启动故障系统。\n(B) 关闭故障系统并发送警报。\n(C) 在其他集群节点上重新启动该系统上托管的虚拟机。\n(D) 将故障系统的主机迁移到其备用镜像。",
        "答案": "C",
        "来源页码": 1
    },
    {
        "题号": "2",
        "英文题目与选项": "Will wants to use containerized applications in his cloud-hosted environment. Which of the following is a best practice he should use as he builds them?\n(A) Package a single application per container.\n(B) Use default installs wherever possible.\n(C) Retain all normal tools and utilities.\n(D) Avoid tagging to reduce complexity.",
        "中文题目与选项": "Will 希望在其云托管环境中使用容器化应用程序。以下哪项是他在构建这些应用程序时应遵循的最佳实践？\n(A) 每个容器只打包一个应用程序。\n(B) 尽可能使用默认安装。\n(C) 保留所有常用工具和实用程序。\n(D) 避免使用标签以减少复杂性。",
        "答案": "A",
        "来源页码": 1
    },
    {
        "题号": "3",
        "英文题目与选项": "Jason wants to adopt a cloud service security standard. Which of the following is specifically designed to cover cloud service providers?\n(A) ISO/IEC 20000:1\n(B) ISO/IEC 27017\n(C) PCI DSS\n(D) GDPR",
        "中文题目与选项": "Jason 希望采用云服务安全标准。以下哪一项是专门为涵盖云服务提供商而设计的？\n(A) ISO/IEC 20000:1\n(B) ISO/IEC 27017\n(C) PCI DSS\n(D) GDPR",
        "答案": "B",
        "来源页码": 1
    },
    {
        "题号": "4",
        "英文题目与选项": "Helen’s organization operates an e-commerce website housed by a cloud service provider. Which of the following compliance standards is she likely to have to comply with?\n(A) PCI DSS\n(B) FedRAMP\n(C) COBIT\n(D) ITIL",
        "中文题目与选项": "Helen 的组织运营一个由云服务提供商托管的电子商务网站。以下哪个合规标准她最有可能需要遵守？\n(A) PCI DSS\n(B) FedRAMP\n(C) COBIT\n(D) ITIL",
        "答案": "A",
        "来源页码": 1
    },
    {
        "题号": "5",
        "英文题目与选项": "Ilya wants to ensure that systems in his cloud environment are properly patched. Which of the following options will give him the most flexibility and control over patching, including when patches are installed and what patches are installed if his organization has a strong emphasis on using prebuilt tools?\n(A) Automatically install patches using built-in OS tools.\n(B) Use a patching script developed by the organization.\n(C) Set up automatic updates for all applications and the OS.\n(D) Use the cloud provider’s patching tools and patch baselines.",
        "中文题目与选项": "Ilya 希望确保其云环境中的系统得到适当修补。如果其组织非常重视使用预构建工具，以下哪种选项能在补丁的安装时间和选择上为他提供最大的灵活性和控制？\n(A) 使用内置操作系统工具自动安装补丁。\n(B) 使用由组织开发的补丁脚本。\n(C) 为所有应用程序和操作系统设置自动更新。\n(D) 使用云提供商的补丁工具和补丁基线。",
        "答案": "B",
        "来源页码": 1
    },
    {
        "题号": "6",
        "英文题目与选项": "Yasmine is validating her software’s performance under load, including testing for higher numbers of users than her organization expects to ever use the application. What type of testing is she conducting?\n(A) Functional testing\n(B) Black-box testing\n(C) Nonfunctional testing\n(D) White-box testing",
        "中文题目与选项": "Yasmine 正在验证她的软件在负载下的性能，包括测试比她的组织预期使用该应用程序的用户数更多的情况。她正在进行哪种类型的测试？\n(A) 功能测试\n(B) 黑盒测试\n(C) 非功能性测试\n(D) 白盒测试",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "7",
        "英文题目与选项": "Adam’s organization uses Google cloud services and he wants to ensure that his organization’s logs are secure. What best practice should he recommend to his organization to ensure that the logs are secure at rest?\n(A) Ensure the cloud provider regularly rotates keys for the logs.\n(B) Use customer-managed encryption keys for logs.\n(C) Use provider-managed encryption keys for logs.\n(D) Avoid encrypting logs to ensure they remain accessible.",
        "中文题目与选项": "Adam 的组织使用 Google 云服务，他希望确保组织的日志在静态存储时是安全的。为了保证日志在静态状态下的安全，他应建议组织采用哪种最佳实践？\n(A) 确保云服务提供商定期轮换日志的密钥。\n(B) 使用客户管理的加密密钥来加密日志。\n(C) 使用服务提供商管理的加密密钥来加密日志。\n(D) 为了保持日志可访问性，避免加密日志。",
        "答案": "B",
        "来源页码": 2
    },
    {
        "题号": "8",
        "英文题目与选项": "Charleen wants to implement multifactor authentication for her organization. Which of the following MFA options is considered the least secure?\n(A) Application-based code generation\n(B) Hardware token–based code generation\n(C) SMS-based code delivery\n(D) USB hardware tokens",
        "中文题目与选项": "Charleen 想为她的组织实施多因素认证。以下哪种 MFA 选项被认为是最不安全的？\n(A) 基于应用程序的代码生成\n(B) 基于硬件令牌的代码生成\n(C) 基于短信的代码传递\n(D) USB 硬件令牌",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "9",
        "英文题目与选项": "Email and web pages are both examples of what type of data?\n(A) Unstructured data\n(B) Structured data\n(C) Semi-structured data\n(D) Partially structured data",
        "中文题目与选项": "电子邮件和网页都是哪种类型数据的示例？\n(A) 非结构化数据\n(B) 结构化数据\n(C) 半结构化数据\n(D) 部分结构化数据",
        "答案": "C",
        "来源页码": 2
    },
    {
        "题号": "10",
        "英文题目与选项": "Felix wants to ensure that members of his organization only access management consoles while they are in approved locations. Which of the following network security capabilities will best allow him to accomplish that task?\n(A) Zero trust\n(B) Geofencing\n(C) Traffic inspection\n(D) Network security groups",
        "中文题目与选项": "Felix 想确保他的组织成员只有在批准的位置才能访问管理控制台。以下哪种网络安全功能最能帮助他实现这一目标？\n(A) 零信任\n(B) 地理围栏\n(C) 流量检查\n(D) 网络安全组",
        "答案": "B",
        "来源页码": 2
    },
    {
        "题号": "11",
        "英文题目与选项": "Valerie, an Amazon AWS user, is concerned about potential outages that might impact her current US-East region. What risk mitigation strategy should she take to ensure her organization can handle a region-wide outage?\n(A) Configure DR in another region.\n(B) Configure DR in another availability zone.\n(C) Deploy redundant systems in her current availability zone.\n(D) Deploy redundant systems in her current region.",
        "中文题目与选项": "Valerie 是 Amazon AWS 的用户，她担心可能会出现影响其当前美国东部区域的故障。她应该采取哪种风险缓解策略来确保她的组织能够应对区域性故障？\n(A) 在另一个区域配置灾难恢复（DR）。\n(B) 在另一个可用区配置灾难恢复（DR）。\n(C) 在当前可用区部署冗余系统。\n(D) 在当前区域部署冗余系统。",
        "答案": "A",
        "来源页码": 2
    },
    {
        "题号": "12",
        "英文题目与选项": "Casey is transitioning from an on-premises datacenter to a cloud datacenter. What hardware monitoring will she still be able to access in her new environment?\n(A) CPU utilization\n(B) Fan speeds\n(C) System temperature\n(D) System voltages",
        "中文题目与选项": "Casey 正在将其本地数据中心迁移到云数据中心。在新的环境中，她仍然能够访问哪种硬件监控？\n(A) CPU 利用率\n(B) 风扇转速\n(C) 系统温度\n(D) 系统电压",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "13",
        "英文题目与选项": "Kirk is adopting a platform as a service (PaaS) tool for his organization. Who is responsible for application and data security in PaaS environments?\n(A) The customer\n(B) The provider\n(C) The regulator\n(D) Both the customer and provider",
        "中文题目与选项": "Kirk 正在为其组织采用平台即服务（PaaS）工具。在 PaaS 环境中，谁对应用程序和数据安全负责？\n(A) 客户\n(B) 服务提供商\n(C) 监管机构\n(D) 客户和服务提供商共同负责",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "14",
        "英文题目与选项": "Alaina wants to protect her on-premises datacenter from power issues. Which of the following options is best suited to handling brownouts?\n(A) A generator\n(B) Purchasing power from two different providers\n(C) UPS\n(D) PDUs",
        "中文题目与选项": "Alaina 想保护其本地数据中心免受电力问题的影响。以下哪种选项最适合应对电压下降（褐电）？\n(A) 发电机\n(B) 从两个不同的供应商购买电力\n(C) 不间断电源（UPS）\n(D) 电源分配单元（PDU）",
        "答案": "C",
        "来源页码": 3
    },
    {
        "题号": "15",
        "英文题目与选项": "What term is used to describe a cloud service provider that allows customers to create virtual machines, define their own networking using virtual networks, and use storage and other services to create and manage their own infrastructure?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) CaaS",
        "中文题目与选项": "哪一个术语用于描述允许客户创建虚拟机、使用虚拟网络定义自己的网络，并使用存储及其他服务来创建和管理自己基础架构的云服务提供商？\n(A) 基础架构即服务（IaaS）\n(B) 平台即服务（PaaS）\n(C) 软件即服务（SaaS）\n(D) 容器即服务（CaaS）",
        "答案": "A",
        "来源页码": 3
    },
    {
        "题号": "16",
        "英文题目与选项": "When Susan logs into her organization’s service portal, she sees customer data that has names and addresses removed. What data obfuscation technique is her organization using?\n(A) Randomization\n(B) Data masking\n(C) Hashing\n(D) Anonymization",
        "中文题目与选项": "当 Susan 登录其组织的服务门户时，她看到的客户数据已移除了姓名和地址。她的组织正在使用哪种数据混淆技术？\n(A) 随机化\n(B) 数据掩码\n(C) 哈希处理\n(D) 匿名化",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "17",
        "英文题目与选项": "Hui wants to conduct a point-in-time SOC audit that covers her organization’s security practices. What type of SOC audit should she select?\n(A) A SOC 1 Type 1\n(B) A SOC 2 Type 1\n(C) A SOC 1 Type 2\n(D) A SOC 2 Type 2",
        "中文题目与选项": "Hui 想进行一次特定时间点的 SOC 审计，以评估其组织的安全实践。她应选择哪种类型的 SOC 审计？\n(A) SOC 1 类型 1\n(B) SOC 2 类型 1\n(C) SOC 1 类型 2\n(D) SOC 2 类型 2",
        "答案": "B",
        "来源页码": 3
    },
    {
        "题号": "18",
        "英文题目与选项": "The Cloud Security Alliance notes that specific log types may only be available to cloud service providers when conducting forensic investigations. Which of the following log types will not typically be under service provider control in an IaaS environment?\n(A) Logs from DNS servers\n(B) Billing records\n(C) API logs\n(D) Web server logs",
        "中文题目与选项": "云安全联盟指出，在进行取证调查时，某些日志类型可能仅由云服务提供商获取。以下哪一类日志在 IaaS 环境中通常不在服务提供商的控制之下？\n(A) DNS 服务器日志\n(B) 计费记录\n(C) API 日志\n(D) Web 服务器日志",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "19",
        "英文题目与选项": "ITIL v4 defines one primary responsibility for availability. What role is key to availability efforts in ITIL?\n(A) System architect\n(B) Availability tester\n(C) Risk manager\n(D) Availability manager",
        "中文题目与选项": "ITIL v4 定义了一个对可用性负有主要责任的角色。以下哪个角色是 ITIL 中可用性管理的关键？\n(A) 系统架构师\n(B) 可用性测试员\n(C) 风险经理\n(D) 可用性经理",
        "答案": "D",
        "来源页码": 4
    },
    {
        "题号": "20",
        "英文题目与选项": "Wayne’s organization employs cloud architects who have broad responsibility for the implementation and oversight of their cloud environment. He wants to provide the architects with appropriate rights in his environment. What should he do to provide them with the proper rights?\n(A) Use the vendor’s best practices definitions for cloud architect rights.\n(B) Use only built-in roles.\n(C) Define a custom role.\n(D) Use multifactor authentication to map roles as needed.",
        "中文题目与选项": "Wayne 的组织聘用了负责其云环境实施和监督的云架构师。他希望赋予这些架构师适当的权限。为了正确地分配这些权限，他应该怎么做？\n(A) 使用供应商对云架构师权限的最佳实践定义。\n(B) 仅使用内置角色。\n(C) 定义自定义角色。\n(D) 使用多因素认证来按需映射角色。",
        "答案": "C",
        "来源页码": 4
    },
    {
        "题号": "21",
        "英文题目与选项": "Jack is considering a cloud service policy as part of his organization’s move to the cloud. Which of the following is not a common principle to follow when building a cloud service policy?\n(A) Obtain input from all relevant stakeholders.\n(B) Change organizational culture for the cloud.\n(C) Follow the chain of command.\n(D) Meet external requirements.",
        "中文题目与选项": "Jack 正在考虑制定一项云服务政策，作为其组织迁移到云端的一部分。以下哪一项不是制定云服务政策时通常应遵循的原则？\n(A) 征求所有相关利益相关者的意见。\n(B) 为云计算改变组织文化。\n(C) 遵循指挥链。\n(D) 满足外部要求。",
        "答案": "C",
        "来源页码": 4
    },
    {
        "题号": "22",
        "英文题目与选项": "Lucca wants to define technical risks to his cloud environment. Which of the following is not a technical risk for his cloud services?\n(A) Privacy issues\n(B) Data breaches\n(C) System outages\n(D) Denial-of-service attacks",
        "中文题目与选项": "Lucca 想要确定其云环境的技术风险。以下哪一项不是其云服务的技术风险？\n(A) 隐私问题\n(B) 数据泄露\n(C) 系统中断\n(D) 拒绝服务攻击",
        "答案": "A",
        "来源页码": 4
    },
    {
        "题号": "23",
        "英文题目与选项": "What defines a Type 2 hypervisor?\n(A) It runs in the cloud.\n(B) It runs on top of an existing operating system.\n(C) It is installed on a bare-metal system.\n(D) It cannot run inside of a virtualization system.",
        "中文题目与选项": "以下哪一项描述了 Type 2（第二类）虚拟机管理程序？\n(A) 它运行在云中。\n(B) 它运行在现有操作系统之上。\n(C) 它安装在裸机系统上。\n(D) 它不能在虚拟化系统中运行。",
        "答案": "B",
        "来源页码": 4
    },
    {
        "题号": "24",
        "英文题目与选项": "Amazon’s S3 relies on collections of objects in buckets and is accessible via REST APIs. What common type of cloud storage is Amazon’s S3?\n(A) Object\n(B) Block\n(C) Native\n(D) Network file",
        "中文题目与选项": "Amazon 的 S3 依赖于存放在存储桶（bucket）中的对象集合，并可通过 REST API 访问。Amazon S3 属于哪种常见类型的云存储？\n(A) 对象存储\n(B) 块存储\n(C) 本地存储\n(D) 网络文件存储",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "25",
        "英文题目与选项": "Which of the following is not a typical goal of a privacy impact assessment (PIA)?\n(A) Identifying the cost of privacy efforts\n(B) Ensuring that the organization meets legal and policy-based privacy requirements\n(C) Identifying the risks of privacy breaches\n(D) Identifying privacy controls",
        "中文题目与选项": "以下哪项不是隐私影响评估（PIA）的典型目标？\n(A) 确定隐私工作的成本\n(B) 确保组织符合法律和政策规定的隐私要求\n(C) 识别隐私泄露的风险\n(D) 识别隐私控制措施",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "26",
        "英文题目与选项": "Mike wants to ensure that his data labeling travels with the data as it is used in his organization. What is the most effective and feasible option to ensure this?\n(A) Include the data labels in file metadata.\n(B) Include the data labels in the filename.\n(C) Include the data labels as a second file sent with the first.\n(D) Include the data labels as part of a cryptographic wrapper.",
        "中文题目与选项": "Mike 希望确保数据在其组织中被使用时，标签信息能够随数据一起传递。实现这一目标最有效、最可行的方法是？\n(A) 将数据标签包含在文件的元数据中\n(B) 将数据标签包含在文件名中\n(C) 将数据标签作为第二个文件与原文件一起发送\n(D) 将数据标签作为加密封装的一部分包含进去",
        "答案": "A",
        "来源页码": 5
    },
    {
        "题号": "27",
        "英文题目与选项": "After a breach has been discovered, what group is most likely to have a legally required time frame to be notified about the breach?\n(A) Customers\n(B) Partners\n(C) Regulators\n(D) Law enforcement",
        "中文题目与选项": "在发现发生数据泄露后，哪一类群体最有可能在法律要求的时限内必须被告知？\n(A) 客户\n(B) 合作伙伴\n(C) 监管机构\n(D) 执法部门",
        "答案": "C",
        "来源页码": 5
    },
    {
        "题号": "28",
        "英文题目与选项": "Google’s Cloud Architecture Framework suggests a number of common security design practices. Which of the following is not a common cloud IaaS design security practice?\n(A) Meet compliance requirements for your regions.\n(B) Use a layered security approach.\n(C) Emphasize manual monitoring.\n(D) Automate deployment of sensitive tasks.",
        "中文题目与选项": "Google 的云架构框架提出了一些常见的安全设计实践。以下哪项不是常见的云 IaaS 设计安全实践？\n(A) 满足所属区域的合规要求\n(B) 采用分层安全方法\n(C) 强调人工监控\n(D) 自动化部署敏感任务",
        "答案": "C",
        "来源页码": 5
    },
    {
        "题号": "29",
        "英文题目与选项": "Olivia is using a waterfall SDLC. Which of the following is not a phase in typical waterfall-based SDLCs?\n(A) Requirements gathering\n(B) Reverse engineering\n(C) Implementation\n(D) Maintenance",
        "中文题目与选项": "Olivia 正在使用瀑布式系统开发生命周期（SDLC）。以下哪一项不是典型的瀑布式 SDLC 阶段？\n(A) 需求收集\n(B) 逆向工程\n(C) 实施阶段\n(D) 维护阶段",
        "答案": "B",
        "来源页码": 5
    },
    {
        "题号": "30",
        "英文题目与选项": "Michelle wants to store and manage cryptographic keys for her cloud environment. What solution should she require her cloud IaaS provider to have if she is selecting a new provider?\n(A) TPM\n(B) Cloud HSM\n(C) PKI\n(D) SAS 70",
        "中文题目与选项": "Michelle 想在她的云环境中存储和管理加密密钥。如果她正在选择新的云 IaaS 服务提供商，她应该要求对方具备哪种解决方案？\n(A) TPM（可信平台模块）\n(B) 云 HSM（硬件安全模块）\n(C) PKI（公钥基础设施）\n(D) SAS 70（审计标准）",
        "答案": "B",
        "来源页码": 6
    },
    {
        "题号": "31",
        "英文题目与选项": "What is the most common method for allocation of compute power in cloud IaaS environments?\n(A) Each customer uses a dedicated CPU per instance.\n(B) Each customer uses a dedicated core per instance.\n(C) Computation time is virtualized and allocated based on performance.\n(D) Computation time is virtualized and allocated based on time.",
        "中文题目与选项": "在云 IaaS 环境中，分配计算能力最常见的方法是什么？\n(A) 每个客户的实例使用独立的 CPU\n(B) 每个客户的实例使用独立的核心\n(C) 计算时间被虚拟化，并根据性能分配\n(D) 计算时间被虚拟化，并根据时间分配",
        "答案": "C",
        "来源页码": 6
    },
    {
        "题号": "32",
        "英文题目与选项": "Gurvinder wants to ensure that his cloud environment is available and reliable. What type of agreement should he ensure his organization receives from the cloud vendor?\n(A) QSA\n(B) NDA\n(C) MSA\n(D) SLA",
        "中文题目与选项": "Gurvinder 希望确保他的云环境具有可用性和可靠性。他应该确保从云供应商那里获得哪种类型的协议？\n(A) QSA（合格安全评估员）\n(B) NDA（保密协议）\n(C) MSA（主服务协议）\n(D) SLA（服务级别协议）",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "33",
        "英文题目与选项": "Ben is exploring new security options for his organization and wants to learn about confidential computing. Which of the following best describes what confidential computing does?\n(A) It ensures only authenticated users can access data.\n(B) It protects data both in transit and at rest.\n(C) It allows you to secure data in use, even while being processed.\n(D) It destroys data before it can be accessed by unauthorized parties.",
        "中文题目与选项": "Ben 正在为他的组织探索新的安全选项，并想了解机密计算。以下哪一项最能描述机密计算的作用？\n(A) 确保只有经过身份验证的用户才能访问数据\n(B) 保护传输中和静止状态的数据\n(C) 在数据使用中（即被处理时）也可保护数据安全\n(D) 在未经授权的访问前销毁数据",
        "答案": "C",
        "来源页码": 6
    },
    {
        "题号": "34",
        "英文题目与选项": "Susan wants to detect and alert on potential malicious traffic, but she does not want to risk causing service outages due to false positives. What technology should she deploy?\n(A) IDS\n(B) Network security group\n(C) IPS\n(D) Firewall",
        "中文题目与选项": "Susan 想检测并警报潜在的恶意流量，但她不希望因误报而导致服务中断。她应该部署哪种技术？\n(A) IDS（入侵检测系统）\n(B) 网络安全组\n(C) IPS（入侵防御系统）\n(D) 防火墙",
        "答案": "A",
        "来源页码": 6
    },
    {
        "题号": "35",
        "英文题目与选项": "Which of the following elements is not a typical service catalog component as defined by ISO/IEC 20000-1?\n(A) Contact points\n(B) A description of the service\n(C) Dependencies on other services\n(D) Risk ratings",
        "中文题目与选项": "根据 ISO/IEC 20000-1 的定义，下列哪一项不是典型的服务目录组成部分？\n(A) 联系点\n(B) 服务描述\n(C) 对其他服务的依赖\n(D) 风险评级",
        "答案": "D",
        "来源页码": 6
    },
    {
        "题号": "36",
        "英文题目与选项": "What does the acronym STRIDE stand for?\n(A) Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege\n(B) Security, Testing, Reconnaissance, Investigation, Data Security, Escalation\n(C) Security, Testing, Repudiation, Information Disclosure, Data Security, Escalation\n(D) Spoofing, Tampering, Reconnaissance, Incident Response, Deletion, Evidence",
        "中文题目与选项": "STRIDE 缩写代表什么？\n(A) 欺骗、篡改、否认、信息泄露、拒绝服务、特权提升\n(B) 安全、测试、侦察、调查、数据安全、升级\n(C) 安全、测试、否认、信息泄露、数据安全、升级\n(D) 欺骗、篡改、侦察、事件响应、删除、证据",
        "答案": "A",
        "来源页码": 7
    },
    {
        "题号": "37",
        "英文题目与选项": "Brian’s organization uses Google Workspace. What type of cloud service are they using?\n(A) IaaS\n(B) PaaS\n(C) SaaS\n(D) DaaS",
        "中文题目与选项": "Brian 的组织使用 Google Workspace。他们正在使用哪种类型的云服务？\n(A) 基础设施即服务（IaaS）\n(B) 平台即服务（PaaS）\n(C) 软件即服务（SaaS）\n(D) 桌面即服务（DaaS）",
        "答案": "C",
        "来源页码": 7
    },
    {
        "题号": "38",
        "英文题目与选项": "What security testing model is used to verify the components that make up open source software packages?\n(A) Static testing\n(B) Software composition analysis\n(C) Interactive security testing\n(D) Fuzzing",
        "中文题目与选项": "用于验证构成开源软件包的组件的安全测试模型是什么？\n(A) 静态测试\n(B) 软件组成分析\n(C) 交互式安全测试\n(D) 模糊测试",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "39",
        "英文题目与选项": "Chris has been notified by a partner about a recent breach of their cloud-hosted environment. What should Chris ask for from the partner organization?\n(A) A full list of compromised systems and services\n(B) A list of impacted customers\n(C) Disclosure of any relevant information based on their partnership agreement\n(D) Disclosure of other impacted partners",
        "中文题目与选项": "Chris 收到合作伙伴关于其云托管环境最近泄露的通知。Chris 应该向合作伙伴组织要求什么？\n(A) 被入侵系统和服务的完整列表\n(B) 受影响的客户列表\n(C) 根据合作协议披露任何相关信息\n(D) 披露其他受影响的合作伙伴",
        "答案": "C",
        "来源页码": 7
    },
    {
        "题号": "40",
        "英文题目与选项": "Gary is assessing risks and wants to describe how vendors are handling their risks. What term should he use to describe the risk remaining after the vendor has implemented their controls?\n(A) Inherent risk\n(B) Opportunity risk\n(C) Residual risk\n(D) Controlled risk",
        "中文题目与选项": "Gary 正在评估风险，他想描述供应商如何处理他们的风险。应使用哪个术语来描述在供应商实施其控制后仍然存在的风险？\n(A) 固有风险\n(B) 机会风险\n(C) 剩余风险\n(D) 受控风险",
        "答案": "C",
        "来源页码": 7
    },
    {
        "题号": "41",
        "英文题目与选项": "Jaime wants to explain the technology that allows cloud vendors to sell access to portions of their underlying hardware in the form of compute. What building block technology provides the foundation for this?\n(A) APIs\n(B) Virtualization\n(C) Segmentation\n(D) SLAs",
        "中文题目与选项": "Jaime 想解释使云供应商能够以计算形式出售其底层硬件部分访问权的技术。哪种基础技术为此提供了基础？\n(A) API 接口\n(B) 虚拟化\n(C) 分段技术\n(D) 服务级别协议（SLA）",
        "答案": "B",
        "来源页码": 7
    },
    {
        "题号": "42",
        "英文题目与选项": "Yuri wants to avoid the OWASP Top 10 application security risks. What should he do to help prevent cryptographic failures for data in transit?\n(A) Use TLS for all communications.\n(B) Use AES-256 encryption for all stored data.\n(C) Require all connections be done via UDP.\n(D) Require a three-way handshake for all data connections.",
        "中文题目与选项": "Yuri 想要避免 OWASP 前十的应用安全风险。他想帮助防止传输过程中的加密失败，应该怎么做？\n(A) 在所有通信中使用 TLS。\n(B) 对所有存储的数据使用 AES-256 加密。\n(C) 要求所有连接使用 UDP。\n(D) 要求所有数据连接进行三次握手。",
        "答案": "A",
        "来源页码": 8
    },
    {
        "题号": "43",
        "英文题目与选项": "Rick wants to ensure that his organization will not be held accountable if something goes wrong that his PaaS provider is responsible for. What should he require in his cloud contract?\n(A) OLA\n(B) Service-level management\n(C) SLA\n(D) Indemnification.",
        "中文题目与选项": "Rick 希望确保如果出现由 PaaS 提供商负责的问题，他的组织不会被追究责任。他应该在云合同中要求什么？\n(A) OLA（运行级别协议）\n(B) 服务级管理\n(C) SLA（服务级别协议）\n(D) 免责条款（Indemnification）",
        "答案": "D",
        "来源页码": 8
    },
    {
        "题号": "44",
        "英文题目与选项": "Hillary wants to publish an SSAE-18 SOC report to her website for public use. What type of SOC report should she provide if she wants to provide information about her organization’s controls over time?\n(A) An SOC 1 Type 2\n(B) An SOC 2 Type 2\n(C) An SOC 3 Type 2\n(D) An SOC 4 Type 2",
        "中文题目与选项": "Hillary 想在她的网站上公开发布 SSAE-18 SOC 报告。如果她希望提供关于组织在一段时间内的控制信息，她应该提供哪种类型的 SOC 报告？\n(A) SOC 1 Type 2\n(B) SOC 2 Type 2\n(C) SOC 3 Type 2\n(D) SOC 4 Type 2",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "45",
        "英文题目与选项": "Christina wants to ensure that her vendor is using appropriate, strong encryption technology. What standard could she ask her vendor to meet to ensure this?\n(A) EBCDIC\n(B) FIPS 140-2\n(C) SecureCERT\n(D) AESCert",
        "中文题目与选项": "Christina 想确保她的供应商使用合适且强大的加密技术。她可以要求供应商遵守哪个标准来确保这一点？\n(A) EBCDIC 编码\n(B) FIPS 140-2\n(C) SecureCERT\n(D) AESCert",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "46",
        "英文题目与选项": "Jerome wants to implement DevOps for his organization and is considering how security should be designed in. Which practice is best suited to a DevOps CI/CD environment?\n(A) Automation of security processes\n(B) Creation of major releases on a yearly cycle\n(C) Testing for security in production\n(D) Static code review",
        "中文题目与选项": "Jerome 想在他的组织中实施 DevOps，并考虑如何将安全性设计进去。哪种做法最适合 DevOps 的持续集成/持续交付 (CI/CD) 环境？\n(A) 自动化安全流程\n(B) 每年发布一次重大版本\n(C) 在生产环境中进行安全测试\n(D) 静态代码审查",
        "答案": "A",
        "来源页码": 8
    },
    {
        "题号": "47",
        "英文题目与选项": "Michelle wants to consider the legal risks relevant to her cloud environment. What risk should she highlight if she is concerned about how her organization will handle responses to lawsuits?\n(A) Cybersecurity risks\n(B) eDiscovery\n(C) Data security\n(D) Copyright infringement",
        "中文题目与选项": "Michelle 想考虑与其云环境相关的法律风险。如果她关注组织如何应对诉讼，她应重点强调哪项风险？\n(A) 网络安全风险\n(B) 电子证据发现（eDiscovery）\n(C) 数据安全\n(D) 版权侵权",
        "答案": "B",
        "来源页码": 8
    },
    {
        "题号": "48",
        "英文题目与选项": "Amanda wants to ensure that she can identify systems that performed actions in her cloud environment. What information is most critical to log to ensure she can properly identify ephemeral systems?\n(A) Their public IP address\n(B) Their private IP address\n(C) Tags\n(D) Usernames",
        "中文题目与选项": "Amanda希望确保能够识别在其云环境中执行操作的系统。为了能够正确识别短暂（临时）系统，最关键需要记录的信息是什么？\n(A) 它们的公网 IP 地址\n(B) 它们的私有 IP 地址\n(C) 标签（Tags）\n(D) 用户名",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "49",
        "英文题目与选项": "Justin’s IRM system deployment uses tagging to document data sensitivity. How can he use tagging later to most effectively decrease the chance of a data breach?\n(A) Implement a DLP system.\n(B) Use tags to manage data lifecycles.\n(C) Use tags to help IDS detection.\n(D) Implement a honeypot to capture tags.",
        "中文题目与选项": "Justin的IRM系统部署使用标签来记录数据敏感性。他之后可以如何利用标签来最有效地降低数据泄露的风险？\n(A) 实施数据丢失防护（DLP）系统\n(B) 使用标签来管理数据生命周期\n(C) 使用标签来帮助入侵检测系统（IDS）检测\n(D) 部署蜜罐以捕获标签信息",
        "答案": "B",
        "来源页码": 9
    },
    {
        "题号": "50",
        "英文题目与选项": "Ramon wants to use a cloud identity provider for his organization. Which of the following options is most likely to be supported by cloud identity providers?\n(A) SAML\n(B) RDP\n(C) LDAP\n(D) FedID",
        "中文题目与选项": "Ramon想为其组织使用云身份提供者。以下哪项最有可能被云身份提供者支持？\n(A) SAML\n(B) RDP\n(C) LDAP\n(D) FedID",
        "答案": "A",
        "来源页码": 9
    },
    {
        "题号": "51",
        "英文题目与选项": "Hyun wants to assess whether the cloud providers his organization is considering adopting have appropriate security-focused risk management methods in place. What type of audit artifact should he request to obtain the most information about controls and practices?\n(A) An SOC 2 Type 2\n(B) An SOC 2 Type 1\n(C) An SOC 1 Type 2\n(D) An SOC 1 Type 1",
        "中文题目与选项": "Hyun想评估其组织正在考虑采用的云提供商是否具备适当的安全风险管理方法。他应请求哪种审计报告，以获取关于控制和实践的最多信息？\n(A) SOC 2 类型 2 报告\n(B) SOC 2 类型 1 报告\n(C) SOC 1 类型 2 报告\n(D) SOC 1 类型 1 报告",
        "答案": "A",
        "来源页码": 9
    },
    {
        "题号": "52",
        "英文题目与选项": "Kayla deploys multiple small instances with a load balancer in front of them as part of her cloud environment. What benefit is she most likely to receive from this?\n(A) Greater confidentiality\n(B) Fewer vulnerabilities\n(C) High availability\n(D) Shorter patching windows",
        "中文题目与选项": "Kayla在其云环境中部署了多个小型实例，并在前端放置了一个负载均衡器。她最可能从中获得的好处是什么？\n(A) 更高的机密性\n(B) 更少的漏洞\n(C) 高可用性\n(D) 更短的补丁更新时间窗口",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "53",
        "英文题目与选项": "Rene is designing her cloud environment to ensure business continuity. Which of the following design elements is best suited to ensuring business continuity?\n(A) Setting up a backup VPC in another region\n(B) Configuring backups to another cloud provider\n(C) Deploying instances to multiple availability zones\n(D) Ensuring staff are not all working the same location",
        "中文题目与选项": "Rene正在设计她的云环境以确保业务连续性。以下哪种设计要素最适合确保业务连续性？\n(A) 在另一地区设置一个备用 VPC\n(B) 配置备份到另一云提供商\n(C) 在多个可用区部署实例\n(D) 确保员工不都在同一地点工作",
        "答案": "C",
        "来源页码": 9
    },
    {
        "题号": "54",
        "英文题目与选项": "Henry wants to reduce the risk of secrets being exposed in the event of a breach. What practice should he adopt to help prevent an attacker with access to application source code or the running application from using the secrets they can recover for future access?\n(A) Use multifactor authentication.\n(B) Use dynamic secrets.\n(C) Use strong passwords.\n(D) Use certificates and passphrases.",
        "中文题目与选项": "Henry 希望在发生泄露时降低机密信息暴露的风险。为了防止攻击者在获得应用源代码或正在运行的应用后，利用其中恢复出的机密信息进行将来访问，他应采取哪种做法？\n(A) 使用多因素认证。\n(B) 使用动态密钥（动态机密）。\n(C) 使用强密码。\n(D) 使用证书和密码短语。",
        "答案": "B",
        "来源页码": 10
    },
    {
        "题号": "55",
        "英文题目与选项": "Jim has mounted a local C: drive for his Windows instance in his cloud service provider’s IaaS environment. What type of storage is he most likely using?\n(A) Ephemeral block storage\n(B) Long-term\n(C) Object\n(D) Container",
        "中文题目与选项": "Jim 在其云服务提供商的 IaaS 环境中为他的 Windows 实例挂载了本地 C: 驱动器。 他最有可能使用哪种类型的存储？\n(A) 临时块存储\n(B) 长期存储\n(C) 对象存储\n(D) 容器存储",
        "答案": "A",
        "来源页码": 10
    },
    {
        "题号": "56",
        "英文题目与选项": "Lisa wants to audit actions taken in her cloud environment. Which of the following mechanisms is typically not permitted when dealing with cloud service management backplanes?\n(A) User access logs\n(B) Packet capture\n(C) Specialized cloud service logs\n(D) Configuration review",
        "中文题目与选项": "Lisa 希望审计其云环境中的操作。以下哪种机制在处理云服务管理平面时通常是不允许的？\n(A) 用户访问日志\n(B) 数据包捕获\n(C) 专用云服务日志\n(D) 配置审查",
        "答案": "B",
        "来源页码": 10
    },
    {
        "题号": "57",
        "英文题目与选项": "Emily needs to identify the data elements in an existing customer database that match customers in a newly acquired customer database. What process will Emily need to engage in to accomplish this?\n(A) Data migration\n(B) Data mining\n(C) Data consolidation\n(D) Data mapping",
        "中文题目与选项": "Emily 需要在现有客户数据库中识别与新获得的客户数据库匹配的数据元素。为完成此任务，Emily 需要进行哪种过程？\n(A) 数据迁移\n(B) 数据挖掘\n(C) 数据整合\n(D) 数据映射",
        "答案": "D",
        "来源页码": 10
    },
    {
        "题号": "58",
        "英文题目与选项": "Wayne’s organization considers their data to be highly sensitive and wants to ensure that the cloud provider itself cannot access the data while it is stored on the provider’s large-scale bulk storage. What type of encryption should he select to accomplish this in a secure manner?\n(A) AES-256\n(B) MD5\n(C) SHA-1\n(D) CRC",
        "中文题目与选项": "Wayne 的组织认为其数据高度敏感，希望确保在数据存储在云提供商的大规模批量存储中时，云提供商本身无法访问这些数据。为安全实现此目的，他应选择哪种加密方式？\n(A) AES-256\n(B) MD5\n(C) SHA-1\n(D) CRC",
        "答案": "A",
        "来源页码": 10
    },
    {
        "题号": "59",
        "英文题目与选项": "What is operating system–level sandboxing most frequently used for?\n(A) Building redundant infrastructure\n(B) Rapid application development\n(C) Testing malicious software\n(D) Performing FIPS 140-2 testing",
        "中文题目与选项": "操作系统级沙箱最常用于哪项用途？\n(A) 构建冗余基础设施\n(B) 快速应用开发\n(C) 测试恶意软件\n(D) 执行 FIPS 140-2 测试",
        "答案": "C",
        "来源页码": 10
    },
    {
        "题号": "60",
        "英文题目与选项": "The North American Electric Reliability Corporation Critical Infrastructure Protection (NERC/CIP) points to what it calls “mutually managed encryption” as a useful model for cloud environments where the cloud service provider and registered entity (covered by NERC/CIP’s requirements) share access and management of encryption keys. What advantage does this type of shared responsibility provide?\n(A) Flexibility and easier operational support\n(B) Lowered risk of unauthorized disclosure\n(C) Simpler control structure\n(D) Guaranteed confidentiality",
        "中文题目与选项": "北美电力可靠性公司关键基础设施保护（NERC/CIP）提出一种称为“共同管理加密”的模式，认为在云服务提供商与受 NERC/CIP 要求约束的注册实体共同访问和管理加密密钥的云环境中，这种模式非常有用。此类共享责任的主要优势是什么？\n(A) 灵活性和更容易的运营支持\n(B) 未经授权披露风险降低\n(C) 更简单的控制结构\n(D) 保证机密性",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "61",
        "英文题目与选项": "Jason wants to detect common vulnerabilities during his software development life cycle. What type of assessment is most likely to identify business logic issues?\n(A) Static code analysis\n(B) Vulnerability scanning\n(C) Dynamic testing\n(D) Software composition analysis",
        "中文题目与选项": "Jason 希望在其软件开发生命周期中检测常见漏洞。哪种类型的评估最可能识别出业务逻辑问题？\n(A) 静态代码分析\n(B) 漏洞扫描\n(C) 动态测试\n(D) 软件组成分析",
        "答案": "C",
        "来源页码": 11
    },
    {
        "题号": "62",
        "英文题目与选项": "Stacey wants to preserve forensics artifacts from a running instance in her cloud environment. What two key steps should she take to ensure she can perform forensic analysis?\n(A) Create a snapshot of the running instance and make bit-for-bit copies of any mounted volumes.\n(B) Shut down the instance and tag it for forensic investigation.\n(C) Shut down the instance and then create a snapshot for forensic investigation.\n(D) Use the cloud provider’s forensic response team and validate their process.",
        "中文题目与选项": "Stacey 希望从其云环境中的运行实例中保留取证证据。为确保她能够进行取证分析，应采取哪两个关键步骤？\n(A) 创建运行实例的快照，并对所有挂载的卷进行逐位复制。\n(B) 关闭实例并将其标记为取证调查对象。\n(C) 关闭实例，然后创建取证分析所用的快照。\n(D) 使用云提供商的取证响应团队并验证其流程。",
        "答案": "A",
        "来源页码": 11
    },
    {
        "题号": "63",
        "英文题目与选项": "Damian knows that misconfiguration is one of the common cloud threats and wants to decrease the chances of a misconfiguration causing significant issues for his organization. What practice is most likely to help his entire organization avoid misconfiguration issues?\n(A) Using multifactor authentication\n(B) Conducting regular vulnerability scanning\n(C) Create and use configuration baselines\n(D) Using default settings to ensure proper configuration",
        "中文题目与选项": "Damian 知道配置错误是常见的云威胁之一，并希望减少配置错误对组织造成重大问题的可能性。哪种做法最有助于整个组织避免配置错误问题？\n(A) 使用多因素身份验证\n(B) 定期进行漏洞扫描\n(C) 创建并使用配置基线\n(D) 使用默认设置以确保正确配置",
        "答案": "C",
        "来源页码": 11
    },
    {
        "题号": "64",
        "英文题目与选项": "What document is typically created after a master service agreement (MSA) to determine what tasks a business will actually perform?\n(A) SLA\n(B) SOW\n(C) NDA\n(D) SOP",
        "中文题目与选项": "在签订主服务协议（MSA）之后，通常会创建哪种文档以确定企业实际上将执行哪些任务？\n(A) 服务级别协议（SLA）\n(B) 工作说明书（SOW）\n(C) 保密协议（NDA）\n(D) 标准操作程序（SOP）",
        "答案": "B",
        "来源页码": 11
    },
    {
        "题号": "65",
        "英文题目与选项": "Christina wants to use Google as an identity provider, allowing her organization to simply determine what rights account holders would have while allowing Google to perform authentication and identity management for her. What is this type of relationship called?\n(A) A client/server infrastructure\n(B) Collaboration\n(C) A service provider\n(D) Federation",
        "中文题目与选项": "Christina 希望使用 Google 作为身份提供者，使她的组织只需确定账户持有者的权限，同时让 Google 执行身份验证和身份管理。这种关系称为什么？\n(A) 客户端/服务器架构\n(B) 协作\n(C) 服务提供者\n(D) 联合身份（Federation）",
        "答案": "D",
        "来源页码": 12
    },
    {
        "题号": "66",
        "英文题目与选项": "Naomi wants to understand what open source components are part of the containerization tool she is considering adopting. What testing process should she use to understand potential risks of the software based on its components?\n(A) Interactive application security testing\n(B) Software composition analysis\n(C) Manual static testing\n(D) Automated static testing",
        "中文题目与选项": "Naomi 想了解她正在考虑采用的容器化工具中包含哪些开源组件。她应该使用哪种测试过程来基于这些组件理解软件的潜在风险？\n(A) 交互式应用安全测试\n(B) 软件组成分析\n(C) 手动静态测试\n(D) 自动静态测试",
        "答案": "B",
        "来源页码": 12
    },
    {
        "题号": "67",
        "英文题目与选项": "Selah has deployed open source software in her cloud environment and wants to validate the licensing for the software. What concern is most frequently involved in open source software licensing?\n(A) The cost of licensing\n(B) The license type\n(C) The length of the license period\n(D) Changes to the license for the deployed software",
        "中文题目与选项": "Selah 已在她的云环境中部署了开源软件，并希望验证该软件的许可。开源软件许可中最常涉及的关注点是什么？\n(A) 许可的费用\n(B) 许可类型\n(C) 许可期限的长度\n(D) 已部署软件许可的变更",
        "答案": "B",
        "来源页码": 12
    },
    {
        "题号": "68",
        "英文题目与选项": "The company that Eric works for uses an authentication process that allows Eric to log in once and then use a variety of systems and services the organization provides. What technology is the company using?\n(A) Federation\n(B) MFA\n(C) IAM\n(D) SSO",
        "中文题目与选项": "Eric 所工作的公司采用一种身份验证机制，使他只需登录一次即可使用组织所提供的多个系统和服务。该公司使用的技术是什么？\n(A) 联合身份\n(B) 多因素验证（MFA）\n(C) 身份与访问管理（IAM）\n(D) 单点登录（SSO）",
        "答案": "D",
        "来源页码": 12
    },
    {
        "题号": "69",
        "英文题目与选项": "ITIL v4 includes three major tasks for configuration management. Which of the following lists correctly identifies those tasks?\n(A) Configuration design, configuration control, configuration deletion\n(B) Configuration identification, configuration control, configuration verification and audit\n(C) Configuration identification, configuration management, configuration modification\n(D) Configuration design, configuration modification, configuration documentation",
        "中文题目与选项": "ITIL v4 包含三个主要的配置管理任务。以下哪一项列表正确识别了这些任务？\n(A) 配置设计、配置控制、配置删除\n(B) 配置识别、配置控制、配置验证与审计\n(C) 配置识别、配置管理、配置修改\n(D) 配置设计、配置修改、配置文档化",
        "答案": "B",
        "来源页码": 12
    },
    {
        "题号": "70",
        "英文题目与选项": "Chuck wants to conduct a gap analysis for the security controls in his cloud environment. What artifact will he need first?\n(A) OLA\n(B) Configuration baseline\n(C) DR/BC plan\n(D) ITIL-based configuration item (CI)",
        "中文题目与选项": "Chuck 想为其云环境中的安全控制执行差距分析。他首先需要哪种文档？\n(A) OLA（运营级协议）\n(B) 配置基线\n(C) 灾难恢复/业务连续性计划（DR/BC 计划）\n(D) 基于 ITIL 的配置项（CI）",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "71",
        "英文题目与选项": "Annie wants to test software as part of her quality assurance efforts. What type of quality assurance testing will provide the greatest insight into the quality of the software being produced?\n(A) Automated QA testing tools\n(B) Fuzzing\n(C) Manual QA testing\n(D) Software composition analysis",
        "中文题目与选项": "Annie 想将软件测试作为质量保证工作的一部分。哪种类型的质量保证测试能对所开发软件的质量提供最大程度的洞察？\n(A) 自动化 QA 测试工具\n(B) 模糊测试\n(C) 手动 QA 测试\n(D) 软件成分分析",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "72",
        "英文题目与选项": "Dave logs into a service using a federated identity. What does the identity provider send to his browser to present to the service provider?\n(A) A token\n(B) A password\n(C) A password and a URL\n(D) A session ID",
        "中文题目与选项": "Dave 使用联合身份登录到某个服务。身份提供者会向他的浏览器发送什么以便呈现给服务提供者？\n(A) 令牌（token）\n(B) 密码\n(C) 密码和 URL\n(D) 会话 ID",
        "答案": "A",
        "来源页码": 13
    },
    {
        "题号": "73",
        "英文题目与选项": "Theresa’s organization has determined that a maximum of 30 minutes of data loss is acceptable in the event of a major disaster. What term is used to describe this type of definition?\n(A) A recovery time objective\n(B) A snapshot window\n(C) A recovery point objective\n(D) A snapshot duration",
        "中文题目与选项": "Theresa 的组织确定在重大灾难发生时，最多可接受 30 分钟的数据丢失。用哪个术语描述这种定义？\n(A) 恢复时间目标（RTO）\n(B) 快照窗口\n(C) 恢复点目标（RPO）\n(D) 快照持续时间",
        "答案": "C",
        "来源页码": 13
    },
    {
        "题号": "74",
        "英文题目与选项": "Alaina wants to establish metrics for her risk management program. Which of the following isn’t a metric that will help her manage her program effectively?\n(A) Cost of the risk management program\n(B) The number of risks identified\n(C) The number of risks that have occurred\n(D) The rate of risk occurrence per day",
        "中文题目与选项": "Alaina 想为她的风险管理计划建立度量标准。下列哪一项不是有助于她有效管理该计划的度量指标？\n(A) 风险管理计划的成本\n(B) 已识别的风险数量\n(C) 已发生的风险数量\n(D) 每日风险发生率",
        "答案": "D",
        "来源页码": 13
    },
    {
        "题号": "75",
        "英文题目与选项": "What is the primary driver in cloud IaaS environments for storage capacity monitoring?\n(A) Performance management\n(B) Cost management\n(C) Continuity management\n(D) Security management",
        "中文题目与选项": "在云 IaaS 环境中，监控存储容量的主要驱动因素是什么？\n(A) 性能管理\n(B) 成本管理\n(C) 连续性管理\n(D) 安全管理",
        "答案": "B",
        "来源页码": 13
    },
    {
        "题号": "76",
        "英文题目与选项": "Lisa is auditing her customer’s cloud-hosted services. She has been asked to perform an external audit of all the cloud services in use. What is the largest challenge she is likely to face?\n(A) Accessing audit trails in customer-managed environments\n(B) Determining appropriate audit targets\n(C) Understanding the scope of the cloud environment\n(D) Gathering information about controls from provider audit artifacts",
        "中文题目与选项": "Lisa正在审计其客户托管在云端的服务。她被要求对所有在用的云服务进行外部审计。她最可能面临的最大挑战是什么？\n(A) 在由客户管理的环境中访问审计轨迹\n(B) 确定适当的审计目标\n(C) 理解云环境的范围\n(D) 从云服务提供商的审计报告中收集控制信息",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "77",
        "英文题目与选项": "Which of the following is not typically stored in cloud secrets management tools?\n(A) MFA tokens\n(B) API keys\n(C) Passwords\n(D) Certificates",
        "中文题目与选项": "以下哪项通常不会存储在云密钥管理工具中？\n(A) 多因素身份验证令牌 (MFA tokens)\n(B) API 密钥\n(C) 密码\n(D) 证书",
        "答案": "A",
        "来源页码": 14
    },
    {
        "题号": "78",
        "英文题目与选项": "Gary’s organization uses a combination of cloud infrastructure and organizationally issued laptops to allow their remote workforce to access organizational data anywhere. What DLP deployment option will help Gary protect data in use by staff?\n(A) On central file servers\n(B) On endpoint devices as a client\n(C) At the network border\n(D) At the network core",
        "中文题目与选项": "Gary的组织使用云基础设施和公司发放的笔记本电脑，使远程员工可以在任何地方访问组织数据。哪种 DLP （数据泄露防护）部署选项可以帮助Gary保护员工正在使用的数据？\n(A) 在中央文件服务器上部署\n(B) 作为客户端部署在终端设备上\n(C) 在网络边界部署\n(D) 在网络核心部署",
        "答案": "B",
        "来源页码": 14
    },
    {
        "题号": "79",
        "英文题目与选项": "Lucca wants to apply data classification to his organization’s data. What phase of the data lifecycle should he ensure tags are applied at?\n(A) Create\n(B) Use\n(C) Share\n(D) Destroy",
        "中文题目与选项": "Lucca希望为其组织的数据应用数据分类。他应确保在数据生命周期的哪个阶段应用标签？\n(A) 创建阶段\n(B) 使用阶段\n(C) 共享阶段\n(D) 销毁阶段",
        "答案": "A",
        "来源页码": 14
    },
    {
        "题号": "80",
        "英文题目与选项": "Susan knows that serverless technology provides a number of security benefits for her organization. Which of the following isn’t a common benefit of serverless computing?\n(A) Not needing to handle patching\n(B) Broad privileges available via IAM\n(C) Ephemeral infrastructure\n(D) High levels of instrumentation",
        "中文题目与选项": "Susan知道无服务器技术为她的组织提供了许多安全优势。以下哪项不是无服务器计算的常见优势？\n(A) 无需自行处理打补丁\n(B) 通过IAM提供广泛的权限\n(C) 临时性的基础设施\n(D) 高级别的监控与可视化",
        "答案": "B",
        "来源页码": 14
    },
    {
        "题号": "81",
        "英文题目与选项": "Nick operates a service that hosts e-commerce websites. His infrastructure runs in AWS, and each customer is allocated their own S3 storage bucket. What type of logical design is Nick using?\n(A) Storage aggregation\n(B) Virtualization\n(C) Containerization\n(D) Tenant partitioning",
        "中文题目与选项": "Nick运营一个托管电子商务网站的服务。他的基础设施运行在AWS上，每个客户都分配到自己的S3存储桶。Nick采用的是哪种逻辑设计类型？\n(A) 存储聚合\n(B) 虚拟化\n(C) 容器化\n(D) 租户分区",
        "答案": "D",
        "来源页码": 14
    },
    {
        "题号": "82",
        "英文题目与选项": "Katie’s organization creates their software in an environment hosted in the Azure cloud. They use a continuous integration/continuous delivery (CI/CD) process that focuses on automated testing and deployment. What risk is most likely to make it through an automated security testing process?\n(A) Business logic risk\n(B) SQL injection flaws\n(C) Cross-site scripting flaws\n(D) Vulnerable components",
        "中文题目与选项": "Katie 的组织在 Azure 云上托管的环境中开发他们的软件。他们采用持续集成/持续交付（CI/CD）流程，重点是自动化测试和部署。哪种风险最有可能在自动化安全测试过程中被忽略？\n(A) 业务逻辑风险\n(B) SQL 注入漏洞\n(C) 跨站脚本漏洞\n(D) 易受攻击的组件",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "83",
        "英文题目与选项": "Thulani keeps documentation for her forensic activities and writes down how data was acquired, as well as where the data is stored, who has access to it, and any transfers of the data or media. What is Thulani documenting?\n(A) Chain of custody\n(B) Forensic proof\n(C) Data logging\n(D) Investigation notes",
        "中文题目与选项": "Thulani 为她的取证活动保留文档，并记录数据是如何获取的、数据存储的位置、谁有访问权限，以及数据或介质的任何转移。Thulani 正在记录的是什么？\n(A) 证据保管链\n(B) 取证证明\n(C) 数据日志\n(D) 调查笔记",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "84",
        "英文题目与选项": "Derek operates cloud-hosted environments in both the U.S. and the European Union (EU). His organization captures customer data in both locations, and he wants to use that data as a central, shared resource for his company. What concern should he raise about this potential use of the data?\n(A) There are different privacy laws in the U.S. and the EU, creating compliance concerns.\n(B) The EU does not allow U.S. data to be imported to EU servers.\n(C) The U.S. does not allow EU data to be imported to U.S. servers.\n(D) U.S. and EU privacy laws have the same penalties, but they are significant and can be costly.",
        "中文题目与选项": "Derek 在美国和欧盟（EU）都运营云托管环境。他的组织在两个地区都收集客户数据，并希望将这些数据用作公司集中共享的资源。对于这种潜在的数据使用方式，他应关注的主要问题是什么？\n(A) 美国和欧盟的隐私法律不同，会导致合规性问题。\n(B) 欧盟不允许将美国数据导入欧盟服务器。\n(C) 美国不允许将欧盟数据导入美国服务器。\n(D) 美国和欧盟的隐私法律具有相同的处罚，但罚款很重且成本高。",
        "答案": "A",
        "来源页码": 15
    },
    {
        "题号": "85",
        "英文题目与选项": "Ibrahim wants to securely configure SSH. Which of the following is not a common best practice for modern SSH environments?\n(A) Using SSH keys\n(B) Enabling password complexity requirements\n(C) Changing the default SSH port number\n(D) Limiting which users can log in via SSH",
        "中文题目与选项": "Ibrahim 想要安全地配置 SSH。以下哪一项不是现代 SSH 环境中的常见最佳实践？\n(A) 使用 SSH 密钥\n(B) 启用密码复杂性要求\n(C) 更改默认 SSH 端口号\n(D) 限制哪些用户可以通过 SSH 登录",
        "答案": "B",
        "来源页码": 15
    },
    {
        "题号": "86",
        "英文题目与选项": "What ISO/IEC standard defines business continuity plans, systems, and processes?\n(A) ISO/IEC 27001\n(B) ISO/IEC 853-1\n(C) ISO/IEC 28000:2022\n(D) ISO/IEC 22301:2019",
        "中文题目与选项": "哪个 ISO/IEC 标准定义了业务连续性计划、系统和流程？\n(A) ISO/IEC 27001\n(B) ISO/IEC 853-1\n(C) ISO/IEC 28000:2022\n(D) ISO/IEC 22301:2019",
        "答案": "D",
        "来源页码": 15
    },
    {
        "题号": "87",
        "英文题目与选项": "What ports and protocol does DHCP operate on?\n(A) UDP ports 21 and 22\n(B) TCP ports 80 and 443\n(C) TCP ports 3389 and 4780\n(D) UDP ports 67 and 68",
        "中文题目与选项": "DHCP 使用哪些端口和协议？\n(A) UDP 端口 21 和 22\n(B) TCP 端口 80 和 443\n(C) TCP 端口 3389 和 4780\n(D) UDP 端口 67 和 68",
        "答案": "D",
        "来源页码": 16
    },
    {
        "题号": "88",
        "英文题目与选项": "Sara wants to operate some of her infrastructure in a datacenter that she controls and some in third-party cloud-hosted environments. What type of cloud deployment model best describes this?\n(A) Private cloud\n(B) Hybrid cloud\n(C) Multicloud\n(D) Community cloud",
        "中文题目与选项": "Sara 希望在自己控制的数据中心运行部分基础设施，同时在第三方云托管环境中运行另一部分。哪种云部署模型最能描述这种情况？\n(A) 私有云\n(B) 混合云\n(C) 多云\n(D) 社区云",
        "答案": "B",
        "来源页码": 16
    },
    {
        "题号": "89",
        "英文题目与选项": "Isabelle wants to retrieve forensic data from her cloud provider’s native logging facility. What technique is most likely to be supported for this type of data access?\n(A) Transfer to removable media\n(B) Manual copying\n(C) API-based\n(D) Printed copies",
        "中文题目与选项": "Isabelle 想从云服务提供商的原生日志设施中获取取证数据。哪种数据访问技术最有可能得到支持？\n(A) 转移到可移动介质\n(B) 手动复制\n(C) 基于 API 的访问\n(D) 打印副本",
        "答案": "C",
        "来源页码": 16
    },
    {
        "题号": "90",
        "英文题目与选项": "Wesley wants to ensure that sensitive data used by his organization cannot be accessed or recovered by third parties. Once his organization stops using data stored in the cloud, what deletion process should he recommend they use?\n(A) Cryptographic shredding\n(B) Zero wiping\n(C) Deletion\n(D) Random data-based wiping",
        "中文题目与选项": "Wesley 希望确保组织使用的敏感数据在停止使用后无法被第三方访问或恢复。当组织停止使用云中存储的数据时，他应该建议使用哪种删除过程？\n(A) 加密粉碎\n(B) 零擦除\n(C) 删除\n(D) 基于随机数据的擦除",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "91",
        "英文题目与选项": "Mark uses Terraform to design and deploy his infrastructure by creating code and configuration files that define what will be deployed and how it will be set up. What is this type of strategy called?\n(A) Infrastructure as code\n(B) Dynamic scaling architecture\n(C) Containerization-based\n(D) Software as a cloud",
        "中文题目与选项": "Mark 使用 Terraform 通过编写代码和配置文件来设计和部署基础设施，这些文件定义要部署的内容及其设置方式。这种策略称为什么？\n(A) 基础设施即代码\n(B) 动态伸缩架构\n(C) 基于容器化\n(D) 云即软件",
        "答案": "A",
        "来源页码": 16
    },
    {
        "题号": "92",
        "英文题目与选项": "Diana wants to have the highest level of security possible for her secret keys stored in her cloud environment. What solution should she choose if her cloud service provider has it available?\n(A) Dedicated TPM\n(B) Cloud HSM\n(C) Cloud TPM\n(D) Dedicated HSM",
        "中文题目与选项": "Diana 希望她在云环境中存储的密钥具有尽可能高的安全级别。如果云服务提供商提供该选项，她应该选择哪种解决方案？\n(A) 专用 TPM\n(B) 云 HSM\n(C) 云 TPM\n(D) 专用 HSM",
        "答案": "B",
        "来源页码": 16
    },
    {
        "题号": "93",
        "英文题目与选项": "Ashley’s testing process involves approaching software testing like an attacker would. She will attempt to compromise or misuse the software, and report on its responses and any issues she identifies. What type of testing is Ashley conducting?\n(A) Abuse case testing\n(B) Interactive application security testing\n(C) User acceptance testing\n(D) Static testing",
        "中文题目与选项": "Ashley 的测试方法是像攻击者一样进行软件测试。她会尝试破坏或误用软件，并报告软件的响应以及她识别出的任何问题。Ashley 正在进行哪种类型的测试？\n(A) 滥用案例测试\n(B) 交互式应用安全测试\n(C) 用户验收测试\n(D) 静态测试",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "94",
        "英文题目与选项": "Lisa wants to advise her organization on a standard that they can adopt that defines information security controls. What standard should she recommend that will be broadly accepted by auditors?\n(A) ISO 27001\n(B) SOC 1\n(C) GDPR\n(D) HIPAA",
        "中文题目与选项": "Lisa 想为其组织提供建议，让他们采用一个定义信息安全控制的标准。她应推荐哪个标准以便被审计人员广泛接受？\n(A) ISO 27001\n(B) SOC 1\n(C) GDPR\n(D) HIPAA",
        "答案": "A",
        "来源页码": 17
    },
    {
        "题号": "95",
        "英文题目与选项": "What step is typically first in an ITIL-based change management process?\n(A) CAB review\n(B) Create the RFC\n(C) Change authorization\n(D) Deployment",
        "中文题目与选项": "在基于 ITIL 的变更管理流程中，通常的第一步是什么？\n(A) CAB 审查\n(B) 创建变更请求（RFC）\n(C) 变更授权\n(D) 部署",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "96",
        "英文题目与选项": "Specific customer data in Gina’s database has been replaced with alternate values that allow Gina to look up the original information from another database without exposing the actual data in the database she is using. Each unique data element is given a replacement value that is consistent any time that data element is used. What type of technique is in use in Gina’s database?\n(A) Masking\n(B) Hashing\n(C) Anonymization\n(D) Tokenization",
        "中文题目与选项": "Gina 数据库中的特定客户数据被替换为替代值，使她能从另一个数据库查找原始信息，而无需暴露当前数据库中的实际数据。每个唯一的数据元素都被分配一个一致的替代值，每次使用该数据元素时都相同。Gina 的数据库正在使用哪种技术？\n(A) 数据掩码\n(B) 哈希\n(C) 匿名化\n(D) 令牌化",
        "答案": "D",
        "来源页码": 17
    },
    {
        "题号": "97",
        "英文题目与选项": "Amanda’s company is being sued, and has received a letter from opposing counsel requiring them to retain information related to the lawsuit. What is this called?\n(A) Statute-based retention\n(B) Legal hold\n(C) DR/BC requirements\n(D) Legislative hold",
        "中文题目与选项": "Amanda 的公司正在被起诉，并收到对方律师发来的信函，要求他们保留与诉讼相关的信息。这种要求被称为什么？\n(A) 基于法规的保留\n(B) 法律保留\n(C) 灾难恢复/业务连续性要求\n(D) 立法保留",
        "答案": "B",
        "来源页码": 17
    },
    {
        "题号": "98",
        "英文题目与选项": "Freya wants to revoke a certificate used by her organization. What will happen when she revokes the certificate via her certificate authority?\n(A) The certificate will no longer work to encrypt data.\n(B) The certificate will be placed on a certificate revocation list.\n(C) A message about the revocation will be sent to all users of the certificate.\n(D) The CA will set the certificate’s expiration date to the revocation date.",
        "中文题目与选项": "Freya 想撤销其组织使用的一个证书。当她通过证书授权中心撤销该证书时，会发生什么？\n(A) 该证书将无法再用于加密数据。\n(B) 该证书将被放入证书吊销列表中。\n(C) 会向所有使用该证书的用户发送一条吊销消息。\n(D) CA 将把证书的到期日期设置为吊销日期。",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "99",
        "英文题目与选项": "Bart wants to perform data discovery on information stored in a SQL database that his company uses for customer information. What type of data is this?\n(A) Structured data\n(B) Semi-structured data\n(C) Unstructured data\n(D) Consolidated data",
        "中文题目与选项": "Bart 想对公司用于客户信息的 SQL 数据库中存储的信息进行数据发现。此类数据属于哪种类型？\n(A) 结构化数据\n(B) 半结构化数据\n(C) 非结构化数据\n(D) 综合数据",
        "答案": "A",
        "来源页码": 18
    },
    {
        "题号": "100",
        "英文题目与选项": "Patricia wants to analyze the data from her IPS for unexpected behavior. If she wants to use a known baseline, then analyze IPS data for potential malicious activity in an automated way that includes the ability to adapt to changes in attack behavior using information it gathers, what technology should she select?\n(A) A WAF\n(B) A SIEM\n(C) IDS\n(D) AI",
        "中文题目与选项": "Patricia 想分析来自入侵防御系统 (IPS) 的数据，以检测异常行为。如果她希望使用已知的基线，并通过自动化方式分析 IPS 数据以识别潜在的恶意活动，同时能够根据收集的信息适应攻击行为的变化，她应选择哪种技术？\n(A) Web 应用防火墙 (WAF)\n(B) 安全信息与事件管理系统 (SIEM)\n(C) 入侵检测系统 (IDS)\n(D) 人工智能 (AI)",
        "答案": "D",
        "来源页码": 18
    },
    {
        "题号": "101",
        "英文题目与选项": "Kathleen is concerned about country-specific privacy regulations because her organization is opening a location in a new country. What should she advise her organization’s leadership to do?\n(A) Follow OWASP-defined best practices.\n(B) Engage external counsel with appropriate expertise.\n(C) Identify an appropriate NIST standard to follow.\n(D) Carefully review the laws and design the new policy based on them.",
        "中文题目与选项": "Kathleen 关注特定国家的隐私法规，因为她的组织正在该国开设新分支。她应建议组织领导层采取什么措施？\n(A) 遵循 OWASP 定义的最佳实践。\n(B) 聘请具备相关专业知识的外部法律顾问。\n(C) 选择适当的 NIST 标准加以遵循。\n(D) 仔细审查该国法律，并基于这些法律设计新的政策。",
        "答案": "B",
        "来源页码": 18
    },
    {
        "题号": "102",
        "英文题目与选项": "Which of the following is not a typical driver for data retention policies?\n(A) Business requirements\n(B) Legal requirements\n(C) Regulatory requirements\n(D) Data integrity requirements",
        "中文题目与选项": "以下哪一项不是数据保留政策的典型驱动因素？\n(A) 业务需求\n(B) 法律要求\n(C) 监管要求\n(D) 数据完整性要求",
        "答案": "D",
        "来源页码": 18
    },
    {
        "题号": "103",
        "英文题目与选项": "Parker is concerned about customers abusing his organization’s APIs and wants to control the volume of requests they are allowed to send. Which of the following solutions is best suited to meet his needs?\n(A) An API gateway\n(B) An API firewall\n(C) An API load balancer\n(D) An API engine",
        "中文题目与选项": "Parker 担心客户滥用其组织的 API，并希望控制客户发送请求的数量。以下哪种解决方案最适合满足他的需求？\n(A) API 网关\n(B) API 防火墙\n(C) API 负载均衡器\n(D) API 引擎",
        "答案": "A",
        "来源页码": 19
    },
    {
        "题号": "104",
        "英文题目与选项": "Ron has implemented his IaaS design using an infrastructure as code model. His team has leveraged native APIs and functions within the IaaS environment and uses many of the vendor’s specialized capabilities. What issue may arise for Ron if the vendor begins to significantly increase prices?\n(A) Interoperability\n(B) Vendor lock-in\n(C) API contention\n(D) Code escrow",
        "中文题目与选项": "Ron 使用基础设施即代码 (IaC) 模型实现了其 IaaS 设计。他的团队在 IaaS 环境中利用了原生 API 和功能，并使用了许多供应商的专有特性。如果供应商开始显著提高价格，Ron 可能会遇到什么问题？\n(A) 互操作性\n(B) 厂商锁定\n(C) API 争用\n(D) 代码托管",
        "答案": "B",
        "来源页码": 19
    },
    {
        "题号": "105",
        "英文题目与选项": "Rick’s company spreads its data across multiple cloud vendors to help ensure that a data loss event or disaster at a single provider doesn’t cause the organization to lose the data. What technique is Rick’s company using?\n(A) Data mapping\n(B) Data cloning\n(C) Data dispersion\n(D) Data modeling",
        "中文题目与选项": "Rick 的公司将其数据分布在多个云服务提供商之间，以确保单个提供商发生数据丢失事件或灾难时，组织不会丢失数据。Rick 的公司正在使用哪种技术？\n(A) 数据映射\n(B) 数据克隆\n(C) 数据分散\n(D) 数据建模",
        "答案": "C",
        "来源页码": 19
    },
    {
        "题号": "106",
        "英文题目与选项": "Jonah wants to address the OWASP Top 10 vulnerable and outdated components issue for his organization. What can he do to most effectively help identify them for his open source tools?\n(A) Use software composition analysis tools.\n(B) Engage a penetration tester.\n(C) Perform static code review.\n(D) Set up automatic updates.",
        "中文题目与选项": "Jonah 想在其组织中解决 OWASP Top 10 中“易受攻击和过时组件”的问题。对于其开源工具，他应该如何最有效地识别这些组件？\n(A) 使用软件成分分析工具\n(B) 聘请渗透测试人员\n(C) 执行静态代码审查\n(D) 设置自动更新",
        "答案": "A",
        "来源页码": 19
    },
    {
        "题号": "107",
        "英文题目与选项": "Megan is accountable for the financial data in her organization, and she delegates responsibility for data-related actions to others in her organization. What role does she play?\n(A) Data owner\n(B) Data custodian\n(C) Data processor\n(D) Data steward",
        "中文题目与选项": "Megan 对组织中的财务数据负有最终责任，并将与数据相关的职责委托给组织中的其他人。她扮演的是哪种角色？\n(A) 数据所有者\n(B) 数据保管人\n(C) 数据处理者\n(D) 数据管理人",
        "答案": "A",
        "来源页码": 19
    },
    {
        "题号": "108",
        "英文题目与选项": "What makes vendor risk assessment difficult for open source software?\n(A) There is no vendor for many open source packages.\n(B) Open source software cannot undergo static code review.\n(C) Open source software vendors do not offer software support contracts.\n(D) Risk information about historical issues is not available.",
        "中文题目与选项": "是什么使得开源软件的供应商风险评估变得困难？\n(A) 许多开源软件包没有供应商。\n(B) 开源软件无法进行静态代码审查。\n(C) 开源软件供应商不提供软件支持合同。\n(D) 无法获得关于历史问题的风险信息。",
        "答案": "A",
        "来源页码": 20
    },
    {
        "题号": "109",
        "英文题目与选项": "The law enforcement officer that Henry is working with on a digital forensics effort has asked Henry for a forensic copy of the hard drive for a cloud-hosted desktop as a service (DaaS) system. What should Henry explain to the officer about the differences between cloud-hosted and physical systems?\n(A) The forensic copy process will take far longer than normal.\n(B) There is not a physical disk that Henry can access, and a snapshot is the closest equivalent to a forensic copy that he can provide.\n(C) The forensic copy cannot be verified because the disk will change during the process.\n(D) Cloud providers do not allow forensic copies of systems in their environments, and only logs will be available.",
        "中文题目与选项": "Henry与执法人员合作进行数字取证时，对方要求他提供一个云托管桌面即服务（DaaS）系统硬盘的取证副本。Henry 应该向执法人员解释云托管系统与物理系统的区别是什么？\n(A) 取证复制过程会比正常情况花费更长的时间。\n(B) 没有物理磁盘可供访问，快照是他能提供的最接近取证副本的方式。\n(C) 取证副本无法验证，因为磁盘在复制过程中会发生变化。\n(D) 云服务提供商不允许在其环境中制作系统取证副本，只能提供日志。",
        "答案": "B",
        "来源页码": 20
    },
    {
        "题号": "110",
        "英文题目与选项": "ITIL v4 identifies four information management subprocesses related to information security management. What ITIL v4 subprocess includes audits?\n(A) Design of security controls\n(B) Security testing\n(C) Management of security incidents\n(D) Security review",
        "中文题目与选项": "ITIL v4 确定了与信息安全管理相关的四个信息管理子流程。哪个 ITIL v4 子流程包含审计？\n(A) 安全控制设计\n(B) 安全测试\n(C) 安全事件管理\n(D) 安全审查",
        "答案": "D",
        "来源页码": 20
    },
    {
        "题号": "111",
        "英文题目与选项": "Diana wants to increase the bandwidth available to her cloud infrastructure as a service (IaaS)-hosted system. What would she need to do to increase the speed at which her instance is connecting to the provider’s network?\n(A) Replace the network interface card.\n(B) Request that the cloud provider upgrade the network card.\n(C) Increase the instance’s network bandwidth.\n(D) Change the network interface speed setting inside the instance’s operating system.",
        "中文题目与选项": "Diana 希望增加其基于云基础设施即服务（IaaS）托管系统的带宽。她应如何提高其实例连接到提供商网络的速度？\n(A) 更换网络接口卡。\n(B) 请求云提供商升级网络卡。\n(C) 增加实例的网络带宽。\n(D) 在实例操作系统中更改网络接口速度设置。",
        "答案": "C",
        "来源页码": 20
    },
    {
        "题号": "112",
        "英文题目与选项": "What step occurs at point X in the following diagram as part of the cloud secure data lifecycle?\nX Create\nArchive\nUse\nStore\nShare\n(A) Reclassify\n(B) Back up\n(C) Manage\n(D) Destroy",
        "中文题目与选项": "在云安全数据生命周期的下列图表中，点 X 处发生的是哪个步骤？\nX 创建\n归档\n使用\n存储\n共享\n(A) 重新分类\n(B) 备份\n(C) 管理\n(D) 销毁",
        "答案": "C",
        "来源页码": 21
    },
    {
        "题号": "113",
        "英文题目与选项": "What requirement for data breach reporting does the Sarbanes–Oxley Act place on organizations that must comply with it?\n(A) All impacted customers must be notified.\n(B) Data breaches must be reported in annual and quarterly reports.\n(C) Law enforcement must be informed as soon as the breach is discovered.\n(D) Breach disclosure is required in local news media.",
        "中文题目与选项": "《萨班斯-奥克斯利法案》对必须遵守的组织在数据泄露报告方面提出了什么要求？\n(A) 必须通知所有受影响的客户。\n(B) 数据泄露必须在年度和季度报告中报告。\n(C) 一旦发现泄露，必须立即通知执法部门。\n(D) 泄露披露必须在当地新闻媒体上公布。",
        "答案": "B",
        "来源页码": 21
    },
    {
        "题号": "114",
        "英文题目与选项": "Renee wants to gather requirements as part of her Agile SDLC. Which of the following is not a common requirements-gathering process for Agile teams?\n(A) Interviews\n(B) Questionnaires\n(C) Workshops\n(D) Reverse engineering",
        "中文题目与选项": "Renee 想在她的敏捷软件开发生命周期 (SDLC) 中收集需求。以下哪项不是敏捷团队常见的需求收集过程？\n(A) 访谈\n(B) 问卷调查\n(C) 研讨会\n(D) 逆向工程",
        "答案": "D",
        "来源页码": 21
    },
    {
        "题号": "115",
        "英文题目与选项": "Christina wants to train developers in her organization on common issues in web application development for the cloud. What tool can she use to base her training on?\n(A) MITRE’s ATT&CK\n(B) The OWASP Top 10\n(C) The SANS Blue Book\n(D) NIST’s CMDB",
        "中文题目与选项": "Christina 想要对组织中的开发人员进行云环境下 Web 应用开发常见问题的培训。她可以基于哪项工具进行培训？\n(A) MITRE 的 ATT&CK 框架\n(B) OWASP 十大漏洞列表\n(C) SANS 蓝皮书\n(D) NIST 的配置管理数据库 (CMDB)",
        "答案": "B",
        "来源页码": 21
    },
    {
        "题号": "116",
        "英文题目与选项": "Emily’s company aggregates cloud service contracts for multiple customers to allow for a better discount rate. They also provide integration services for their customers. What role is Emily’s company playing?\n(A) Cloud service provider\n(B) Regulator\n(C) Cloud service broker\n(D) Cloud steward",
        "中文题目与选项": "Emily 的公司为多个客户整合云服务合同，以便获得更好的折扣率。他们还为客户提供集成服务。Emily 的公司扮演什么角色？\n(A) 云服务提供商\n(B) 监管者\n(C) 云服务经纪人\n(D) 云数据保管人",
        "答案": "C",
        "来源页码": 22
    },
    {
        "题号": "117",
        "英文题目与选项": "Mike wants to use a standards-based rating system to identify, define, and catalog vulnerabilities. Which of the following options should he choose?\n(A) CVE\n(B) VulnRank\n(C) CPE\n(D) MITRE",
        "中文题目与选项": "Mike 想使用一个基于标准的评级系统来识别、定义并分类漏洞。他应该选择下列哪一个选项？\n(A) CVE\n(B) VulnRank\n(C) CPE\n(D) MITRE",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "118",
        "英文题目与选项": "What privacy regulation will impact Susan’s organization as they begin to operate in France?\n(A) ISO/IEC 27018\n(B) Generally Accepted Privacy Principles (GAPP)\n(C) FERPA\n(D) GDPR",
        "中文题目与选项": "当 Susan 的组织开始在法国开展业务时，哪项隐私法规会影响她的组织？\n(A) ISO/IEC 27018\n(B) 一般公认隐私原则 (GAPP)\n(C) FERPA（家庭教育权利和隐私法案）\n(D) GDPR（通用数据保护条例）",
        "答案": "D",
        "来源页码": 22
    },
    {
        "题号": "119",
        "英文题目与选项": "Fiona wants to back up virtual machines hosted in her on-premises datacenter. What technique is typically used to back up guest operating systems?\n(A) Backup clients on the guest OS\n(B) Copies of the underlying guest OS disks\n(C) Snapshots through the VM host\n(D) Snapshots through the guest OS",
        "中文题目与选项": "Fiona 想要备份她本地数据中心中托管的虚拟机。通常用于备份客户操作系统的技术是哪一种？\n(A) 在客户操作系统上安装备份客户端\n(B) 复制底层客户操作系统磁盘\n(C) 通过虚拟机主机创建快照\n(D) 通过客户操作系统创建快照",
        "答案": "C",
        "来源页码": 22
    },
    {
        "题号": "120",
        "英文题目与选项": "Olivia’s industry requires yearly audits of their business, and she knows that she needs to provide audit artifacts to the auditors about her cloud-hosted services. What should Olivia do to meet her audit requirements?\n(A) Engage external auditors to audit the cloud provider.\n(B) Contact the cloud service provider to obtain the required audit artifacts.\n(C) Engage internal auditors to audit the cloud provider.\n(D) Contact the cloud service provider and provide the required audit artifacts to them.",
        "中文题目与选项": "Olivia 所在行业要求每年进行一次业务审计，她知道她需要向审计员提供有关其云托管服务的审计证据。Olivia 应该怎么做以满足审计要求？\n(A) 聘请外部审计员审计云服务提供商。\n(B) 联系云服务提供商以获取所需的审计证据。\n(C) 聘请内部审计员审计云服务提供商。\n(D) 联系云服务提供商并将所需的审计证据提供给他们。",
        "答案": "B",
        "来源页码": 22
    },
    {
        "题号": "121",
        "英文题目与选项": "What happens at the end of the release management process flow according to ITIL?\n(A) Release closure\n(B) Release deployment\n(C) Release build\n(D) Release documentation",
        "中文题目与选项": "根据 ITIL，在发布管理流程的最后会发生什么？\n(A) 发布关闭\n(B) 发布部署\n(C) 发布构建\n(D) 发布文档编制",
        "答案": "A",
        "来源页码": 22
    },
    {
        "题号": "122",
        "英文题目与选项": "What type of hypervisor is most commonly used to host cloud IaaS services?\n(A) Type 1\n(B) Type 2\n(C) Type 3\n(D) Type 4",
        "中文题目与选项": "哪种类型的虚拟机管理程序（hypervisor）最常用于托管云 IaaS 服务？\n(A) 类型 1\n(B) 类型 2\n(C) 类型 3\n(D) 类型 4",
        "答案": "A",
        "来源页码": 23
    },
    {
        "题号": "123",
        "英文题目与选项": "Sean’s company has grown its IT infrastructure and no longer considers the converted closet that its servers have been hosted in sufficient to the organization’s needs. If Sean wants to meet an Uptime Institute Level 3 rating, what option will most efficiently and effectively meet his needs?\n(A) Buy a datacenter.\n(B) Build a datacenter.\n(C) Rent space in a datacenter facility.\n(D) Build a datacenter in an existing building.",
        "中文题目与选项": "Sean 的公司已经扩展了其 IT 基础设施，不再认为目前用于放置服务器的改造储物间能满足组织需求。如果 Sean 想要达到 Uptime Institute 第 3 级认证（Level 3）标准，以下哪种选项最有效率且最能满足他的需求？\n(A) 购买一个数据中心\n(B) 建造一个新的数据中心\n(C) 在数据中心设施中租用空间\n(D) 在现有建筑中建设数据中心",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "124",
        "英文题目与选项": "Which of the following is true of most cloud service providers’ datacenters?\n(A) Access to inexpensive power is not a major driver in datacenter placement.\n(B) Datacenters are placed without regard to weather-based threats.\n(C) Customers are not allowed physical access to machines.\n(D) Redundant design is not critical due to the number of datacenters.",
        "中文题目与选项": "以下哪项关于大多数云服务提供商数据中心的说法是正确的？\n(A) 获取廉价电力并不是数据中心选址的主要因素。\n(B) 数据中心选址不会考虑天气相关威胁。\n(C) 客户不允许对机器进行物理访问。\n(D) 由于数据中心数量众多，冗余设计不是关键因素。",
        "答案": "C",
        "来源页码": 23
    },
    {
        "题号": "125",
        "英文题目与选项": "Maria logs into her company’s service portal and looks at a customer’s information. In the credit card field she sees the credit card listed in a format that reads: XXXX-XXXX-XXXX-1980. What type of data security technique is in use?\n(A) Hashing\n(B) Masking\n(C) Randomization\n(D) De-identification",
        "中文题目与选项": "Maria 登录到公司服务门户，查看某位客户的信息。在信用卡号字段中，她看到的格式是：XXXX-XXXX-XXXX-1980。正在使用哪种数据安全技术？\n(A) 哈希（Hashing）\n(B) 数据遮蔽（Masking）\n(C) 随机化（Randomization）\n(D) 去标识化（De-identification）",
        "答案": "B",
        "来源页码": 23
    }
]