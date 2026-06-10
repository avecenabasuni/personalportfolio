import type {
  Stat,
  TraceSpan,
  CaseStudy,
  Article,
  WorkInProgress,
  WorkInProgressMeta,
  ExperienceRole,
  Certification,
  SkillGroup,
  VaultEntry,
} from "./types";

export const stats: Stat[] = [
  {
    value: "76+",
    label: "Production systems instrumented across enterprise clients",
  },
  {
    value: "97%",
    label: "Technical evaluation score on a Rp 10B infrastructure tender",
  },
  {
    value: "72h",
    label: "Email infrastructure rebuild after ransomware attack",
  },
  {
    value: "20+",
    label: "Certifications across AWS, GCP, New Relic, and Nutanix",
  },
];

export const traceRows: TraceSpan[] = [
  { service: "api-gateway", offset: 0, duration: 88, color: "bg-sky-400/80" },
  { service: "auth-service", offset: 12, duration: 30, color: "bg-cyan-300/80" },
  { service: "feature-flags", offset: 18, duration: 14, color: "bg-teal-300/80" },
  { service: "catalog-service", offset: 27, duration: 42, color: "bg-blue-300/80" },
  { service: "postgres-primary", offset: 34, duration: 22, color: "bg-emerald-300/80" },
  { service: "redis-cache", offset: 38, duration: 10, color: "bg-lime-300/80" },
  { service: "payment-worker", offset: 52, duration: 24, color: "bg-violet-300/80" },
  { service: "notification-bus", offset: 66, duration: 16, color: "bg-indigo-300/80" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "fullstack-observability",
    title: "Full Stack Observability Implementation",
    tags: ["New Relic", "APM", "Infrastructure", "Enterprise"],
    image: "/images/screenshot-fullstackobservability.png",
    imageAlt: "Full Stack Observability dashboard screenshot",
    summary:
      "Unified fragmented monitoring stacks into one actionable New Relic workflow so incidents move from guesswork to fast, context-rich response.",
    implementation:
      "Instrumented applications, infrastructure, dashboards, and alert workflows across production environments.",
    architecture:
      "Consolidated fragmented telemetry into one operating model with trace-log-metric correlation and team-specific views.",
    outcome:
      "Reduced blind spots and helped teams move from user-reported incidents to faster, context-rich response.",
    hiringSummary: {
      role: "Observability / SRE implementation lead",
      scope:
        "Discovery, instrumentation, dashboard design, alert tuning, and engineer enablement.",
      stack: [
        "New Relic APM",
        "Infrastructure",
        "OpenTelemetry",
        "NRQL",
        "Alerting",
      ],
      outcome:
        "Unified fragmented monitoring into one incident response workflow with clearer ownership and faster root cause analysis.",
    },
    cta: {
      eyebrow: "Need this inside your team?",
      title: "Bring me in to turn fragmented telemetry into an operating model.",
      description:
        "I can own instrumentation, alert hygiene, dashboard design, and handoff for SRE or observability teams that need production signal they can trust.",
      intent: "role",
      label: "Discuss an observability role",
      trackLabel: "Case study CTA full stack observability",
    },
    problem:
      "Most teams I work with aren't flying blind by choice. They're running three different monitoring tools that don't talk to each other, relying on open-source stacks nobody has time to maintain, and finding out about errors from their users before their dashboards do. Root cause analysis turns into a war room guessing game.\n\nThis is the pattern I see repeatedly across fintech, manufacturing, healthcare, and ecommerce clients.",
    what: "I consolidated their observability stack end-to-end with New Relic, replacing fragmented tools with a single unified platform. I instrumented applications and infrastructure, designed dashboards tailored to each team's actual workflow, and tuned alerts to cut noise without missing what matters. Then I ran training sessions so engineers could use what we built, not just look at it.\n\nThe goal was simple: when something breaks at 2am, the right person gets paged with enough context to act immediately.",
    result:
      "MTTD and MTTR improved noticeably across engagements. Teams that used to jump between more than three disconnected monitoring tools can now trace root cause from a single platform. Recurring incidents started getting caught before users noticed, reducing reactive support load in the process.",
  },
  {
    id: "network-observability-docker",
    title: "Full Network Observability in Docker",
    tags: ["New Relic NPM", "Docker", "SNMP", "Syslog"],
    image: "/images/screenshot-snmp.png",
    imageAlt: "Network Performance Monitoring SNMP demo screenshot",
    summary:
      "Built a laptop-ready Docker lab that simulates SNMP and syslog traffic, so engineers can learn and validate network observability without physical hardware.",
    implementation:
      "Built Docker-based SNMP and syslog simulators that generate realistic New Relic NPM telemetry locally.",
    architecture:
      "Removed the hardware dependency from network observability demos while preserving the real data path engineers need to validate.",
    outcome:
      "Made network monitoring easier to demo, learn, and troubleshoot before touching production devices.",
    hiringSummary: {
      role: "Observability solution builder",
      scope:
        "Designed the lab architecture, built traffic simulators, validated telemetry, and documented the workflow.",
      stack: ["Docker", "New Relic NPM", "SNMP", "Syslog", "ktranslate"],
      outcome:
        "Gave engineers a laptop-ready way to validate network observability before touching production hardware.",
    },
    cta: {
      eyebrow: "Validating network observability?",
      title: "I can help turn unclear network telemetry into a repeatable proof of value.",
      description:
        "For teams evaluating NPM, SNMP, syslog, or hybrid network monitoring, I can build the lab path, production rollout plan, and troubleshooting workflow.",
      intent: "project",
      label: "Talk about a network observability project",
      trackLabel: "Case study CTA network observability",
    },
    problem:
      "Most tutorials for New Relic Network Performance Monitoring assume you have physical network devices sitting around. Routers, switches, something that speaks SNMP. Most engineers don't. So they skip NPM entirely, or never get hands-on experience before they need it in production.",
    what: "A fully containerized NPM demo environment using Docker. Two custom simulator images that generate real SNMP traps and syslog traffic without any physical hardware. Everything needed to explore New Relic NPM end-to-end, on a laptop, without touching a single physical device.",
    result:
      "Network observability is one of the hardest gaps to fill in a monitoring stack because the learning curve starts before you even touch the tool. This project removes that barrier. Clone the repo, spin up the containers, and within a few minutes you have realistic SNMP and syslog traffic flowing into New Relic, ready to explore.",
  },
  {
    id: "observability-toolkit",
    title: "New Relic Observability Toolkit",
    tags: ["Terraform", "IaC", "Open Source", "New Relic"],
    isOpenSource: true,
    image: "/images/screenshot-observabilitytoolkit.png",
    imageAlt: "New Relic Observability Toolkit Terraform modules screenshot",
    summary:
      "Codified production observability into reusable Terraform modules so teams can deploy alerts, dashboards, and notifications consistently from day one.",
    implementation:
      "Packaged alerts, dashboards, notification channels, and synthetics into reusable Terraform modules.",
    architecture:
      "Turned observability standards into reviewable IaC with opinionated defaults for golden signals and SBAR-style alerts.",
    outcome:
      "Gave teams a repeatable day-one baseline instead of weeks of manual dashboard and alert setup.",
    hiringSummary: {
      role: "SRE / Observability-as-code engineer",
      scope:
        "Designed reusable Terraform modules, alert policies, dashboard baselines, and notification workflows.",
      stack: ["Terraform", "New Relic", "NRQL", "Synthetics", "IaC"],
      outcome:
        "Converted observability setup into reviewable infrastructure code with production-ready defaults.",
    },
    cta: {
      eyebrow: "Want observability as code?",
      title: "I can help standardize alerts, dashboards, and notifications before drift starts.",
      description:
        "If your team needs a repeatable New Relic baseline, I can design the module boundaries, SRE defaults, and handoff documentation.",
      intent: "project",
      label: "Talk about observability as code",
      trackLabel: "Case study CTA observability toolkit",
    },
    problem:
      "Setting up observability from scratch is repetitive work. Every new environment needs the same alerts, the same dashboards, the same notification channels, built manually, configured inconsistently, and documented poorly. Teams end up with alert policies that nobody trusts and war room dashboards that mean something different to every engineer who built them.",
    what: "A production-ready Terraform toolkit that deploys a complete New Relic monitoring stack in a single `terraform apply`. Four modules, wired together out of the box: Golden Signals alerts with SRE-grounded thresholds, multi-channel notifications in SBAR format, external availability monitoring via Synthetics, and pre-built dashboards for NOC war rooms and engineer deep-dives.\n\nThe defaults are opinionated because they have to be. Error rate filters HTTP 5xx only because a 404 is not an incident. Notifications follow SBAR format because actionable alerts are a core principle from the Google SRE Workbook. Every decision is documented so the next engineer who touches it understands not just what was built, but why.",
    result:
      "Observability should be version-controlled, reviewable, and repeatable. This toolkit gives any SRE team a defensible, production-grade New Relic stack on day one, without spending weeks rediscovering the same configuration pitfalls everyone else already solved.",
  },
  {
    id: "squid-proxy",
    title: "New Relic Squid Proxy",
    tags: ["Squid Proxy", "Linux", "Automation", "Open Source"],
    isOpenSource: true,
    stars: 1,
    image: "/images/screeenshot-squidproxy.png",
    imageAlt: "New Relic Squid Proxy installer screenshot",
    summary:
      "Automated New Relic proxy setup across restricted enterprise networks with a one-command installer that removes recurring connectivity blockers.",
    implementation:
      "Automated Squid Proxy installation, endpoint verification, auth, SSL bump options, and proxy observability.",
    architecture:
      "Designed for restricted enterprise networks where monitoring agents must traverse proxy chains and corporate firewalls.",
    outcome:
      "Turned a recurring POC blocker into a repeatable handoff that any engineer can run and validate.",
    hiringSummary: {
      role: "Solutions Architect / automation engineer",
      scope:
        "Mapped connectivity constraints, automated proxy setup, verified endpoints, and packaged the handoff.",
      stack: ["Squid Proxy", "Linux", "Bash", "New Relic", "Corporate proxy"],
      outcome:
        "Turned restricted-network monitoring setup from a recurring blocker into a one-command validation path.",
    },
    cta: {
      eyebrow: "Blocked by enterprise network constraints?",
      title: "I can help design the monitoring path before connectivity delays the rollout.",
      description:
        "For proxy-heavy or restricted environments, I can review the architecture, automate the setup, and validate the telemetry path end to end.",
      intent: "project",
      label: "Talk about a restricted-network rollout",
      trackLabel: "Case study CTA squid proxy",
    },
    problem:
      "Enterprise environments don't always have direct internet access. Servers sit behind corporate firewalls, traffic goes through proxy chains, and getting a New Relic agent connected becomes a manual, distro-specific process that derails POC timelines before the client sees a single metric.\n\nEvery new client with network restrictions meant starting from scratch.",
    what: "An automated Squid Proxy installer that handles the entire lifecycle in a single command. One-liner install, multi-distro Linux support across nine distributions, optional SSL bump for TLS interception, Basic Auth, corporate proxy chaining, and a built-in verification engine that tests connectivity to all New Relic endpoints before handoff.\n\nIt also ships with a New Relic dashboard out of the box, so the proxy itself is observable from day one.",
    result:
      "A stalled POC is a lost deal. Every hour a client spends waiting for connectivity issues to be resolved is an hour they are not seeing value from the product. This tool turns a recurring manual bottleneck into a single command that any engineer can run, on any Linux distro, in any network environment.",
  },
];

export const articles: Article[] = [
  {
    title: "Send New Relic Alerts to Telegram (Pure Webhook, Zero Middleware)",
    url: "https://medium.com/@avecenabasuni",
  },
  {
    title: "A Practical Guide to Modern Application Observability",
    url: "https://medium.com/@avecenabasuni",
  },
  {
    title: "Perlinuxan Duniawi",
    url: "https://medium.com/@avecenabasuni",
  },
];

export const workInProgress: WorkInProgress[] = [
  {
    title: "New Relic NPM Showcase",
    description:
      "Docker-based network observability demo, article in progress for Medium.",
  },
  {
    title: "chatbot-nutanix",
    description:
      "RAG chatbot on Nutanix Kubernetes Platform using PostgreSQL/pgvector and Qwen.",
  },
  {
    title: "observability-as-code",
    description:
      "Terraform toolkit for production-grade New Relic stack, actively maintained and open source.",
  },
];

export const workInProgressMeta: Record<string, WorkInProgressMeta> = {
  "New Relic NPM Showcase": {
    status: "in-progress",
    tags: ["Docker", "SNMP", "Syslog", "New Relic"],
  },
  "chatbot-nutanix": {
    status: "in-progress",
    tags: ["RAG", "Nutanix Kubernetes", "pgvector", "Qwen"],
  },
  "observability-as-code": {
    status: "completed",
    tags: ["Terraform", "IaC", "Open Source", "SRE"],
  },
};

export const experience: ExperienceRole[] = [
  {
    title: "Technical Product Specialist",
    company: "PT Berca Hardayaperkasa",
    period: "Mar 2024 – Present",
    summary:
      "End-to-end observability for 76+ enterprise clients across fintech, telecoms, government, and ecommerce — from requirements and architecture through instrumentation, alert tuning, and production validation.",
    highlights: [
      "Achieved 97% technical evaluation score on a Rp 10B Nutanix Kubernetes Platform tender, outperforming all competing vendors by 7 to 10 percent through end-to-end architecture design and presentation.",
      "Deployed New Relic APM, Infrastructure Monitoring, and distributed tracing across production Kubernetes environments, instrumenting microservices with OpenTelemetry for trace-log-metric correlation.",
      "Defined SLIs and golden signal alert thresholds that reduced on-call alert noise and improved signal accuracy across multiple client environments.",
    ],
  },
  {
    title: "Junior Systems Engineer",
    company: "PT Kairos Utama Indonesia",
    period: "Apr 2023 – Mar 2024",
    summary:
      "Before specializing in observability, I was the person called when everything broke. I managed 50+ VMs across Microsoft enterprise environments under 24/7 SLA.",
    highlights: [
      "Led incident response during a ransomware attack on a financial sector client, rebuilding the entire email infrastructure from scratch within 72 hours through cold backup restoration.",
      "Executed Disaster Recovery drills and validated RTO and RPO compliance across production environments for enterprise clients.",
    ],
  },
  {
    title: "Embedded Systems Engineer",
    company: "Covent Indonesia",
    period: "Apr 2022 – Apr 2023",
    summary:
      "The same instincts that make good firmware engineers make good SRE engineers: if it can fail silently, it will. At Covent, that meant Watchdog Timers and Fail-Safe mechanisms in safety-critical medical firmware. In SRE, it means instrumentation and alerting before incidents happen.",
    highlights: [
      "Engineered patented production-grade firmware for a safety-critical medical device in C/C++, implementing Watchdog Timers and Fail-Safe mechanisms.",
      "Conducted hardware-level debugging using oscilloscopes and logic analyzers to ensure strict medical device safety compliance.",
    ],
  },
  {
    title: "Electronics Laboratory Assistant",
    company: "Laboratorium Elektronika FTUI",
    period: "Aug 2021 – Jan 2023",
    summary:
      "Made complex embedded systems concepts understandable to the next generation of engineers.",
    highlights: [
      "Designed practicum modules covering 10 key topics in embedded systems and microcontroller programming.",
      "Mentored 50+ undergraduate students per semester in hands-on hardware troubleshooting and lab work.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "nutanix-certified-services-core-associate-6",
    name: "Nutanix Certified Services - Core Associate 6",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "December 31, 2024",
    credentialUrl:
      "https://www.credly.com/badges/f204967f-2a01-4a01-88fb-298dceb49a1a/public_url",
    badgeImage: "/images/certifications/ncsp.png",
    summary:
      "Recipients of the NCS-Core 6 badge have demonstrated basic understanding of delivering Nutanix Services with AOS 6.x. They have the technical knowledge to execute the core Nutanix service standards, facilitate a services technical kickoff call, deploy and configure Nutanix clusters and main features, and provide proper knowledge transfer and deliverables.",
  },
  {
    id: "nutanix-sizing-professional",
    name: "Nutanix Sizing Professional",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "October 26, 2024",
    credentialUrl:
      "https://www.credly.com/badges/378bd7df-296e-49ee-92ef-c72c72dfc20d/public_url",
    badgeImage: "/images/certifications/nsp.png",
    summary:
      "This certification validates the ability to use Sizer to design and size Nutanix solutions effectively, understand Nutanix architecture fundamentals, and apply discovery tools for environment assessment and optimization.",
  },
  {
    id: "nutanix-certified-sales-representative",
    name: "Nutanix Certified Sales Representative",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "November 06, 2024",
    credentialUrl:
      "https://www.credly.com/badges/66986869-d554-474c-834f-05a7cd49c32c/public_url",
    badgeImage: "/images/certifications/ncsp.png",
    summary:
      "Recipients of the NCSR badge can speak to customers about market conditions, infrastructure concerns, and how the Nutanix portfolio addresses them. It is part of the Nutanix Elevate Program and supports early partner progression.",
  },
  {
    id: "nutanix-certified-professional-multicloud-infrastructure-6",
    name: "Nutanix Certified Professional - Multicloud Infrastructure 6",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "October 22, 2024",
    expiresOn: "October 22, 2026",
    credentialUrl:
      "https://www.credly.com/badges/4a9287bc-d0c5-46dd-9655-881cb3b825e6/public_url",
    badgeImage: "/images/certifications/ncpmci.png",
    summary:
      "Recipients of the NCP-MCI badge have demonstrated their skills and abilities in deploying, administering, and troubleshooting a Nutanix AOS 6.x based multicloud infrastructure.",
    primary: true,
  },
  {
    id: "nutanix-certified-associate-6",
    name: "Nutanix Certified Associate 6",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "July 29, 2025",
    expiresOn: "July 29, 2027",
    credentialUrl:
      "https://www.credly.com/badges/af124ce5-1c4b-424c-be66-2272521d9733/public_url",
    badgeImage: "/images/certifications/nca.png",
    summary:
      "The Nutanix Certified Associate exam validates the ability to navigate a Nutanix AOS 6.xx cluster and manage and operate Nutanix core offerings.",
  },
  {
    id: "nutanix-accredited-professional-infrastructure",
    name: "Nutanix Accredited Professional – Infrastructure",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "October 26, 2024",
    credentialUrl:
      "https://www.credly.com/badges/b956ae95-53d7-4c9f-9bd9-fb96aa69a894/public_url",
    badgeImage: "/images/certifications/napi.png",
    summary:
      "The base level SE accreditation for Nutanix SEs and Partner SEs, covering Nutanix Cloud Infrastructure products, NCI demos, whiteboarding core components and data path, and sizing basic server virtualization opportunities.",
  },
  {
    id: "nutanix-accredited-associate-infrastructure",
    name: "Nutanix Accredited Associate – Infrastructure",
    issuer: "Nutanix",
    platform: "Nutanix",
    issuedOn: "November 06, 2024",
    credentialUrl:
      "https://www.credly.com/badges/0ad7f09b-f30f-4c99-bf2c-683e38514e58/public_url",
    badgeImage: "/images/certifications/naai.png",
    summary:
      "The base level sales accreditation for Nutanix sellers and partner sellers, covering HCI history and use cases, Nutanix Cloud Infrastructure, licensing, and first-call product positioning.",
  },
  {
    id: "cohesity-sales-foundations-associate-accreditation",
    name: "Cohesity Sales Foundations Associate Accreditation",
    issuer: "Cohesity",
    platform: "Cohesity",
    issuedOn: "January 20, 2026",
    credentialUrl:
      "https://www.credly.com/badges/d1209fc5-1bfc-49ee-aac3-89b160fe6a2e/public_url",
    badgeImage: "/images/certifications/csfa.png",
    summary:
      "This badge validates the ability to position Cohesity's unified data management, protection, and accessibility capabilities against customer challenges and business outcomes, including backup, recovery, file and object management, and cloud solutions.",
  },
  {
    id: "new-relic-certified-performance-engineer-professional",
    name: "New Relic Certified Performance Engineer Professional (PEP)",
    issuer: "New Relic",
    platform: "New Relic",
    issuedOn: "August 24, 2025",
    expiresOn: "August 24, 2027",
    credentialUrl:
      "https://credentials.newrelic.com/6d89c1e8-ef3c-4ce2-b0e3-17236fa20383#acc.xd0A1lOB",
    badgeImage: "/images/certifications/fsop.png",
    summary:
      "The New Relic Certified Performance Engineer exam validates competency in analyzing and optimizing systems and applications using New Relic monitoring, observability, and performance tooling with an emphasis on user experience.",
    primary: true,
  },
  {
    id: "new-relic-certified-apm-practitioner-associate",
    name: "New Relic Certified APM Practitioner Associate (APA)",
    issuer: "New Relic",
    platform: "New Relic",
    issuedOn: "May 18, 2025",
    expiresOn: "May 18, 2027",
    credentialUrl:
      "https://credentials.newrelic.com/3f744034-072f-4a01-8a0c-eb7c6fc28af1#acc.DeQutcjF",
    badgeImage: "/images/certifications/newrelic.png",
    summary:
      "This certification validates knowledge of APM fundamentals, user interface navigation, performance analysis insights, triage and troubleshooting techniques, and methods for tracking and improving application performance.",
    primary: true,
  },
  {
    id: "new-relic-partner-accredited-sales-associate",
    name: "New Relic Partner Accredited Sales Associate",
    issuer: "New Relic",
    platform: "New Relic",
    issuedOn: "May 8, 2025",
    expiresOn: "May 8, 2026",
    credentialUrl:
      "https://credentials.newrelic.com/81d5b7a8-0f31-481c-978f-e033b0fd9e27#acc.pFiDfsLG",
    badgeImage: "/images/certifications/newrelic.png",
    summary:
      "The Partner Accredited Sales Associate exam is for business-focused sales partners tasked with communicating value and positioning New Relic in the observability industry.",
  },
  {
    id: "new-relic-partner-accredited-sales-engineer-level-i",
    name: "New Relic Partner Accredited Sales Engineer Level I",
    issuer: "New Relic",
    platform: "New Relic",
    issuedOn: "May 8, 2025",
    expiresOn: "May 8, 2026",
    credentialUrl:
      "https://credentials.newrelic.com/db8bd6f4-3382-404a-a8ba-5676b07612c3#acc.axt9bF07",
    badgeImage: "/images/certifications/newrelic.png",
    summary:
      "The Partner Accredited Sales Engineer Level I exam is for technical consultants responsible for articulating New Relic’s technology and product portfolio positioning to business and technical users.",
  },
  {
    id: "new-relic-verified-foundation",
    name: "New Relic Verified Foundation (NVF)",
    issuer: "New Relic",
    platform: "New Relic",
    issuedOn: "December 19, 2024",
    expiresOn: "December 19, 2026",
    credentialUrl:
      "https://credentials.newrelic.com/068e7e5b-c3a9-4aed-8786-6f9134fd66aa#acc.hiSKzQRN",
    badgeImage: "/images/certifications/nvf.png",
    summary:
      "The New Relic Foundations Verified certification validates knowledge of observability concepts, New Relic capabilities, performance monitoring, data visualization, and instrumentation and configuration of datasets.",
  },
  {
    id: "aws-certified-solutions-architect-associate",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    platform: "AWS",
    issuedOn: "April 24, 2024",
    expiresOn: "April 24, 2027",
    credentialUrl:
      "https://www.credly.com/badges/d65aeee4-927e-4dcf-9b2a-166fcea82751/public_url",
    badgeImage: "/images/certifications/aws.png",
    summary:
      "This certification validates a comprehensive understanding of AWS services and the ability to design secure, scalable, resilient, efficient, and fault-tolerant distributed systems.",
    primary: true,
  },
  {
    id: "ccna-enterprise-networking-security-and-automation",
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    platform: "Cisco",
    issuedOn: "June 17, 2024",
    credentialUrl:
      "https://www.credly.com/badges/0fa7352a-4bcc-454c-8fba-f5a138862077/public_url",
    badgeImage: "/images/certifications/CCNAENSA__1_.png",
    summary:
      "This badge validates a foundation in scalable network architectures, dynamic routing, security threat mitigation, WANs, virtualization, and programmable network automation, including extensive lab participation.",
  },
  {
    id: "ccna-introduction-to-networks",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    platform: "Cisco",
    issuedOn: "May 20, 2024",
    credentialUrl:
      "https://www.credly.com/badges/46a2d6c9-2454-4a73-8ace-72bdaf3eb340/public_url",
    badgeImage: "/images/certifications/CCNAITN__1_.png",
    summary:
      "This badge validates networking fundamentals including IP addressing, Ethernet and data link support, and configuring connectivity between switches, routers, and end devices for local and remote access.",
  },
  {
    id: "ccna-switching-routing-and-wireless-essentials",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    platform: "Cisco",
    issuedOn: "June 02, 2024",
    credentialUrl:
      "https://www.credly.com/badges/85575361-3564-41cb-9bda-e615e798eaaf/public_url",
    badgeImage: "/images/certifications/CCNASRWE__1_.png",
    summary:
      "This badge validates a foundation in switching operations, wired and wireless LAN configuration, security best practices, redundancy protocols, and practical troubleshooting through lab work.",
  },
  {
    id: "aws-academy-graduate-cloud-architecting",
    name: "AWS Academy Graduate - Cloud Architecting - Training Badge",
    issuer: "Amazon Web Services",
    platform: "AWS",
    issuedOn: "April 12, 2022",
    credentialUrl:
      "https://www.credly.com/badges/d2dee066-3103-4366-bdbe-009174937cc3/public_url",
    badgeImage: "/images/certifications/awsca.png",
    summary:
      "Earners of this badge have completed the AWS Academy Cloud Architecting course.",
  },
  {
    id: "aws-academy-graduate-cloud-foundations",
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services",
    platform: "AWS",
    issuedOn: "March 19, 2022",
    credentialUrl:
      "https://www.credly.com/badges/880f1f69-c013-4169-9fef-c570b87b1a28/public_url",
    badgeImage: "/images/certifications/awscf.png",
    summary:
      "Earners of this badge have completed the AWS Academy Cloud Foundations course.",
  },
  {
    id: "aws-academy-graduate-machine-learning-foundations",
    name: "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
    issuer: "Amazon Web Services",
    platform: "AWS",
    issuedOn: "March 14, 2023",
    credentialUrl:
      "https://www.credly.com/badges/e44c5a4b-16b0-4cc1-bbb9-1864b9f893aa/public_url",
    badgeImage: "/images/certifications/awsml.png",
    summary:
      "Earners of this badge have completed the AWS Academy Machine Learning Foundations course.",
  },
  {
    id: "cloud-digital-leader-certification",
    name: "Cloud Digital Leader Certification",
    issuer: "Google Cloud",
    platform: "Google Cloud",
    issuedOn: "1 Jun 2023",
    expiresOn: "1 Jun 2026",
    badgeImage: "/images/certifications/google.png",
    summary:
      "A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services, common business use cases, and how cloud solutions support enterprise outcomes.",
  },
];

export function isCertificationExpired(
  cert: Certification,
  referenceDate = new Date(),
) {
  if (!cert.expiresOn) {
    return false;
  }

  const expiryDate = new Date(cert.expiresOn);
  if (Number.isNaN(expiryDate.getTime())) {
    return false;
  }

  expiryDate.setHours(23, 59, 59, 999);
  return expiryDate < referenceDate;
}

export const primaryCerts = certifications.filter(
  (cert) => cert.primary && !isCertificationExpired(cert),
);

export const additionalCertGroups = Array.from(
  certifications.reduce((map, cert) => {
    if (cert.primary) return map;
    const bucket = map.get(cert.platform) ?? [];
    bucket.push(cert);
    map.set(cert.platform, bucket);
    return map;
  }, new Map<string, Certification[]>()),
).map(([platform, certs]) => ({ platform, certs }));

export const skillGroups: SkillGroup[] = [
  {
    domain: "Observability",
    context: "daily driver across 76+ production engagements",
    skills: [
      "New Relic",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "ELK Stack",
      "Distributed Tracing",
    ],
  },
  {
    domain: "Cloud & Infrastructure",
    context: "deployed in production",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Nutanix HCI",
    ],
  },
  {
    domain: "DevOps & Automation",
    context: "used in real workflows",
    skills: ["GitHub Actions", "Jenkins", "Ansible", "Python", "Bash"],
  },
  {
    domain: "Site Reliability",
    context: "the actual job",
    skills: [
      "SLI/SLO Design",
      "Golden Signals",
      "Incident Response",
      "Observability as Code",
    ],
  },
];

export const vaultEntries: VaultEntry[] = [
  {
    id: "ktranslate-dying",
    title: "Why ktranslate Keeps Dying on Docker",
    tags: ["New Relic", "Docker", "Permissions"],
    tldr: "Container dies immediately with permission denied on config directory. Add --user $(id -u):$(id -g) to your Docker run command.",
    body: "You spin up ktranslate for SNMP discovery, the container starts, then immediately dies. Logs say permission denied on the config directory. You're bind-mounting a local folder and the container's internal user (UID 1000) doesn't match your host UID.\n\nAdding `--user $(id -u):$(id -g)` to your Docker run command makes the process run as your host user. Container stays up.\n\nBind mounts don't inherit host permissions automatically. Always check what user the process runs as inside the container before mounting anything.",
  },
  {
    id: "snmp-traps-missing",
    title: "Where Did My SNMP Traps Go?",
    tags: ["New Relic", "SNMP", "NRQL"],
    tldr: "Traps don't appear in FROM Log. Query FROM KSnmpTrap instead — that's where ktranslate sends them.",
    body: "You configure ktranslate to receive SNMP traps and expect them to show up as Log events in New Relic. They don't. You query `FROM Log WHERE logtype = 'ktranslate-snmp'` and get nothing.\n\nktranslate sends different telemetry types to different event tables. Flows, traps, and syslog each have their own home in NRDB.\n\nSNMP traps use a completely different event type. Query `FROM KSnmpTrap` instead. The data was always there, just not where you were looking.",
  },
  {
    id: "openshift-nodes-missing",
    title: "Two Out of Three Nodes Showing in New Relic on OpenShift",
    tags: ["OpenShift", "Kubernetes", "New Relic"],
    tldr: "OpenShift SCC blocks the agent from accessing /proc and /sys. One command fixes it: oc adm policy add-scc-to-user privileged.",
    body: "You install the New Relic Kubernetes integration on Red Hat OpenShift, everything deploys cleanly, but only 2 out of 3 nodes show up in the cluster explorer. No obvious errors. The DaemonSet looks healthy.\n\nOpenShift adds a security layer on top of standard Kubernetes RBAC called Security Context Constraints. The New Relic agent needs privileged access to scrape deep system metrics from each node's `/proc` and `/sys`. Without it, the agent runs but can't collect what it needs from the host.\n\nOne command sorts it out: `oc adm policy add-scc-to-user privileged system:serviceaccount:<YOUR_NAMESPACE>:newrelic`. After that, the missing node appears.\n\nOpenShift is not just Kubernetes with a different name. If you're migrating from GKE or EKS, assume SCC will bite you at least once.",
  },
];
