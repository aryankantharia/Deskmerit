export type ServiceDetail = {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  capabilities: { title: string; desc: string; icon: string }[];
  whyUs: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
};

export const defaultServiceDetail: ServiceDetail = {
  title: "Specialized Engineering Services",
  badge: "Enterprise Digital Engineering",
  tagline: "Scalable, High-Performance Software Architectures Engineered for Growth",
  description:
    "We architect, build, and scale mission-critical digital systems. Accelerated by AI and engineered by senior technical architects to deliver measurable business velocity.",
  stats: [
    { value: "99.99%", label: "Uptime & Reliability SLA" },
    { value: "< 250ms", label: "Average API Response Latency" },
    { value: "500+", label: "Production Deployments" },
    { value: "4.9/5", label: "Client Satisfaction Rating" }
  ],
  capabilities: [
    {
      title: "Custom System Architecture",
      desc: "Tailored microservices, headless frontends, and modular APIs designed for long-term maintainability and scale.",
      icon: "CpuIcon"
    },
    {
      title: "AI-Accelerated Development",
      desc: "Leveraging intelligent scaffolding and automated test generation to cut delivery cycles without compromising quality.",
      icon: "SparklesIcon"
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "Zero-trust architecture, OWASP compliance, automated vulnerability scanning, and strict data residency controls.",
      icon: "ShieldCheckIcon"
    },
    {
      title: "High-Throughput Optimization",
      desc: "Database indexing, edge caching with Cloudflare/Fastly, and distributed queuing for seamless peak traffic handling.",
      icon: "RocketIcon"
    },
    {
      title: "Third-Party Ecosystem Integration",
      desc: "Flawless connections between ERPs, payment gateways, CRMs, and custom legacy backend systems.",
      icon: "LayersIcon"
    },
    {
      title: "Continuous Observability & Support",
      desc: "24/7 proactive monitoring, real-time APM telemetry with Datadog/Grafana, and guaranteed response SLAs.",
      icon: "CheckCircle2Icon"
    }
  ],
  whyUs: [
    {
      title: "Senior-Only Squads",
      desc: "Direct collaboration with senior system architects and principal engineers, not junior hand-offs."
    },
    {
      title: "Business-Aligned Velocity",
      desc: "We focus on revenue outcomes, operational efficiency, and conversion metrics, not just code volume."
    },
    {
      title: "100% IP Ownership",
      desc: "Full transfer of clean, well-documented source code, CI/CD pipelines, and infrastructure as code."
    },
    {
      title: "Transparent Sprint Governance",
      desc: "Weekly demo meetings, live staging deployments, and itemized sprint backlogs in Jira or Linear."
    }
  ],
  process: [
    {
      step: "01",
      title: "Technical Discovery & Blueprint",
      desc: "Deep-dive analysis of your current stack, user journeys, data schemas, and security requirements to create an actionable roadmap."
    },
    {
      step: "02",
      title: "Architecture & UI/UX Prototyping",
      desc: "Designing responsive UI components, system boundary diagrams, and interactive Figma flows before writing production code."
    },
    {
      step: "03",
      title: "Agile Engineering Sprints",
      desc: "Bi-weekly sprints with automated CI/CD builds, peer code reviews, and continuous regression testing across environments."
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & Scale",
      desc: "Production cutover using blue-green deployment strategies, automated database migrations, and 24/7 real-time observability."
    }
  ],
  technologies: [
    "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI",
    "PostgreSQL", "Redis", "Docker", "AWS", "Kubernetes", "GraphQL"
  ],
  faqs: [
    {
      question: "How do you ensure enterprise-grade security throughout the development lifecycle?",
      answer:
        "We implement security by design, following OWASP Top 10 standards, encrypted communication (TLS 1.3), zero-trust authentication protocols, role-based access controls (RBAC), and automated static code analysis (SAST) in our deployment pipelines."
    },
    {
      question: "What is your typical engagement model and sprint cadence?",
      answer:
        "We operate in 2-week agile sprints with transparent Jira/Linear task boards, weekly client video standups, and bi-weekly staging release demos. We offer dedicated engineering squads, staff augmentation, and fixed-scope delivery models."
    },
    {
      question: "Do you assist with post-launch maintenance and system operations?",
      answer:
        "Yes, we provide tiered ongoing SLA support packages covering 24/7 infrastructure monitoring, bug-fix warranties, security patch updates, and feature iteration backlogs."
    },
    {
      question: "Can you integrate with our existing in-house development and product team?",
      answer:
        "Absolutely. Our senior architects and developers can seamlessly join your Slack channels, sprint rituals, and git repositories, adopting your exact workflows and testing standards."
    }
  ]
};

export const serviceDetailsData: Record<string, Partial<ServiceDetail>> = {
  "web-app-development": {
    title: "Web Application Development",
    badge: "Core Engineering Practice",
    tagline: "High-Performance, Cloud-Native Web Applications Built for Scalability",
    description:
      "Transforming complex workflows into lightning-fast, secure, and intuitive web platforms. We build custom SaaS solutions, customer portals, and enterprise dashboards with modern Next.js, React, and cloud architectures.",
    stats: [
      { value: "48%", label: "Faster Load Times Achieved" },
      { value: "99.95%", label: "Uptime Across Client Fleets" },
      { value: "1.2M+", label: "Concurrent Daily Users Handled" },
      { value: "100%", label: "Test Automation Coverage" }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
    capabilities: [
      {
        title: "Modern Front-End Architectures",
        desc: "Server-side rendered and static Next.js/React applications with sub-second page transitions and WCAG AA accessibility.",
        icon: "CpuIcon"
      },
      {
        title: "Scalable Microservices & APIs",
        desc: "Resilient REST and GraphQL microservices structured with automated caching, schema validation, and rate limiting.",
        icon: "LayersIcon"
      },
      {
        title: "Enterprise SaaS Platforms",
        desc: "Multi-tenant database architectures, subscription billing via Stripe, and role-based permissions (RBAC).",
        icon: "RocketIcon"
      },
      {
        title: "Data Visualization & Dashboards",
        desc: "Interactive real-time charts, analytics telemetry, and exportable business intelligence reports.",
        icon: "SparklesIcon"
      },
      {
        title: "Automated QA & Performance Testing",
        desc: "End-to-end Cypress/Playwright suites and load stress testing to ensure stability before release.",
        icon: "CheckCircle2Icon"
      },
      {
        title: "Secure Cloud Infrastructure",
        desc: "Containerized deployments using AWS ECS, Kubernetes, and automated Terraform infrastructure as code.",
        icon: "ShieldCheckIcon"
      }
    ],
    faqs: [
      {
        question: "Why choose custom web application development over off-the-shelf software?",
        answer:
          "Custom web apps give you 100% intellectual property ownership, zero per-seat licensing fees, exact alignment with your business workflows, and unlimited flexibility to scale features as your company expands."
      },
      {
        question: "How do you ensure fast web app performance and low latency?",
        answer:
          "We utilize server-side rendering (SSR), incremental static regeneration (ISR), optimized database indexing, edge caching with CDNs, and tree-shaken frontend bundles to guarantee sub-second Time to First Byte (TTFB)."
      },
      {
        question: "How long does a typical web application project take?",
        answer:
          "A production MVP typically takes 6 to 12 weeks. Larger enterprise platforms with multiple third-party integrations and migration requirements generally range from 3 to 6 months in structured bi-weekly sprints."
      }
    ]
  },

  "mobile-app-development": {
    title: "Mobile Application Development",
    badge: "iOS & Android Engineering",
    tagline: "Intuitive, High-Retention Native & Cross-Platform Mobile Apps",
    description:
      "Crafting engaging mobile experiences on iOS and Android. From consumer apps with millions of downloads to mission-critical field operations tools built with Flutter, React Native, Swift, and Kotlin.",
    stats: [
      { value: "4.8/5", label: "Average App Store Rating" },
      { value: "2M+", label: "Mobile Active Installs" },
      { value: "60 FPS", label: "Smooth Animation Standard" },
      { value: "Zero", label: "Memory Leak Guarantee" }
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Node.js", "Fastlane", "PostgreSQL"],
    capabilities: [
      {
        title: "Cross-Platform Flutter & React Native",
        desc: "Single codebase efficiency delivering native performance, 60 FPS transitions, and synchronized releases on App Store & Google Play.",
        icon: "CpuIcon"
      },
      {
        title: "Native iOS (Swift) & Android (Kotlin)",
        desc: "Uncompromising access to device hardware, background sensors, CoreML, HealthKit, and low-level camera integrations.",
        icon: "RocketIcon"
      },
      {
        title: "Offline-First Synchronization",
        desc: "Robust SQLite and WatermelonDB offline storage with conflict-free background data synchronization when back online.",
        icon: "LayersIcon"
      },
      {
        title: "Push Notifications & Deep Linking",
        desc: "Automated user re-engagement pipelines, personalized geo-targeted notifications, and seamless Universal Link routing.",
        icon: "SparklesIcon"
      },
      {
        title: "Biometric & Payment Security",
        desc: "FaceID/Fingerprint authentication, hardware keychain token storage, and PCI-compliant in-app purchases and Stripe checkout.",
        icon: "ShieldCheckIcon"
      },
      {
        title: "Automated App Store CI/CD",
        desc: "Fastlane release pipelines for automated certificate signing, beta test distribution via TestFlight, and store review handling.",
        icon: "CheckCircle2Icon"
      }
    ],
    faqs: [
      {
        question: "Should I build native apps or choose cross-platform Flutter/React Native?",
        answer:
          "For 90% of business applications, cross-platform with Flutter or React Native cuts development costs and time-to-market by 40% with indistinguishable native performance. If your app relies heavily on proprietary hardware sensors, AR, or low-latency audio processing, native Swift/Kotlin is ideal."
      },
      {
        question: "How do you handle App Store and Google Play submissions?",
        answer:
          "We manage the complete submission process, including metadata assets, screenshots, privacy declarations, and adherence to Apple and Google store guidelines to guarantee swift approval."
      }
    ]
  },

  "ai-and-ml-development": {
    title: "AI & Machine Learning Solutions",
    badge: "AI-Native Intelligence",
    tagline: "Deploying Pragmatic AI Models That Drive Bottom-Line Business Impact",
    description:
      "Move beyond speculative AI hype. We design, fine-tune, and deploy enterprise machine learning models, custom NLP agents, predictive algorithms, and MLOps pipelines integrated directly into your business software.",
    stats: [
      { value: "10x", label: "Process Speed Acceleration" },
      { value: "98.4%", label: "Classification & NLP Accuracy" },
      { value: "Zero", label: "Data Leakage / Zero-Retention" },
      { value: "Sub-50ms", label: "Model Inference Latency" }
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Docker", "MLflow"],
    capabilities: [
      {
        title: "Custom LLM Fine-Tuning & RAG",
        desc: "Retrieval-Augmented Generation (RAG) connecting internal company knowledge bases to private AI models with strict access controls.",
        icon: "SparklesIcon"
      },
      {
        title: "Intelligent Document Processing (IDP)",
        desc: "Automated OCR extraction, contract parsing, invoice reconciliation, and structured data extraction from unstructured PDFs.",
        icon: "CpuIcon"
      },
      {
        title: "Predictive Analytics & Forecasting",
        desc: "Time-series machine learning models for inventory demand forecasting, customer churn prediction, and dynamic pricing.",
        icon: "RocketIcon"
      },
      {
        title: "Automated Workflow AI Agents",
        desc: "Autonomous conversational agents capable of answering complex inquiries, verifying inputs, and executing multi-step API transactions.",
        icon: "LayersIcon"
      },
      {
        title: "Production MLOps & Model Monitoring",
        desc: "Automated model retraining pipelines, drift detection, latency monitoring, and zero-downtime model deployments.",
        icon: "CheckCircle2Icon"
      },
      {
        title: "Responsible AI & Data Privacy",
        desc: "Strict zero-data-retention agreements, PII redaction filters, and transparent explainability audits for regulatory compliance.",
        icon: "ShieldCheckIcon"
      }
    ],
    faqs: [
      {
        question: "Is our proprietary company data safe when using AI models?",
        answer:
          "Yes. We configure private instances in your VPC (AWS/Azure) or enterprise zero-data-retention APIs. Your proprietary customer and business data is never used to train public foundational models."
      },
      {
        question: "How quickly can we see return on investment (ROI) from an AI deployment?",
        answer:
          "Targeted AI implementations (such as automated customer support triaging, document extraction, or predictive inventory replenishment) typically demonstrate measurable time-saving and cost reduction within the first 60 days."
      }
    ]
  },

  "headless-ecommerce": {
    title: "Headless E-Commerce Development",
    badge: "Next-Gen Commerce",
    tagline: "Sub-Second Page Loads, Higher Conversions, and Limitless Front-End Freedom",
    description:
      "Decouple your storefront from monolithic backend constraints. We build modern headless commerce architectures using Shopify Hydrogen, BigCommerce, commercetools, and Next.js for global high-volume retailers.",
    stats: [
      { value: "+34%", label: "Average Conversion Rate Uplift" },
      { value: "< 0.8s", label: "Page Load Time Globally" },
      { value: "3x", label: "Peak Traffic Scaling Capacity" },
      { value: "Zero", label: "Storefront Checkout Bottlenecks" }
    ],
    technologies: ["Shopify Plus", "Hydrogen", "Next.js", "commercetools", "BigCommerce", "Sanity CMS", "Algolia", "Stripe", "Klaviyo"],
    capabilities: [
      {
        title: "Shopify Plus Hydrogen / Oxygen",
        desc: "Custom headless storefronts utilizing Shopify's Storefront API with native checkout stability and unlimited layout flexibility.",
        icon: "RocketIcon"
      },
      {
        title: "Multi-Region & Omnichannel Commerce",
        desc: "Unified product catalogs serving localized currencies, tax rules, and localized languages from a single headless backend.",
        icon: "LayersIcon"
      },
      {
        title: "Blazing Edge Storefront Speeds",
        desc: "Static edge-rendered product pages achieving 95+ Google Lighthouse performance scores and superior organic SEO rankings.",
        icon: "CpuIcon"
      },
      {
        title: "Custom Loyalty & Subscriptions",
        desc: "Seamless integration of tiered loyalty point engines, subscription billing cycles, and automated customer reward tiers.",
        icon: "SparklesIcon"
      },
      {
        title: "Advanced Search & Merchandising",
        desc: "Instant search autocomplete, AI merchandising filters, and smart product recommendations via Algolia and custom engines.",
        icon: "CheckCircle2Icon"
      },
      {
        title: "ERP & Inventory Synchronization",
        desc: "Real-time bidirectional inventory syncing with SAP, NetSuite, Dynamics 365, and multi-warehouse logistics pipelines.",
        icon: "ShieldCheckIcon"
      }
    ],
    faqs: [
      {
        question: "Why should an established e-commerce business go headless?",
        answer:
          "Traditional monolith themes slow down with every installed app and limit design freedom. Headless separates the front-end presentation layer from the e-commerce database, resulting in sub-second load times, higher conversion rates, and total design control."
      },
      {
        question: "Does going headless affect Shopify checkout security?",
        answer:
          "No. All transactions, payments, and customer checkout flows securely route through Shopify's PCI Level 1 compliant checkout, ensuring zero compromise on fraud protection and security."
      }
    ]
  },

  "headless-cms": {
    title: "Headless CMS Solutions",
    badge: "Content Architecture",
    tagline: "Structured Content Orchestration for Modern Omnichannel Publishing",
    description:
      "Empower your marketing and product teams with visual structured content. We design bespoke schemas and integrations on Sanity.io, Contentful, Strapi, and Contentstack connected to high-performance frontend frameworks.",
    stats: [
      { value: "4x", label: "Faster Content Publishing Sprints" },
      { value: "100%", label: "Structured Schema Reusability" },
      { value: "Zero", label: "CMS Plugin Security Vulnerabilities" },
      { value: "Omnichannel", label: "Web, Mobile, and App Support" }
    ],
    technologies: ["Sanity.io", "Contentful", "Strapi", "Contentstack", "Next.js", "GraphQL", "TypeScript", "Vercel", "Tailwind CSS"],
    capabilities: [
      {
        title: "Sanity.io Custom Studio Schemas",
        desc: "Tailored visual workspaces with real-time collaborative editing, live previewing, and field-level validation rules.",
        icon: "CpuIcon"
      },
      {
        title: "Contentful & Contentstack Migration",
        desc: "Seamless automated content migration from legacy WordPress, Drupal, or proprietary CMS systems into structured JSON schemas.",
        icon: "LayersIcon"
      },
      {
        title: "Self-Hosted Strapi Node.js CMS",
        desc: "Open-source, self-hosted headless CMS architectures offering 100% data governance, private VPC hosting, and custom plugins.",
        icon: "ShieldCheckIcon"
      },
      {
        title: "Live On-Page Previews",
        desc: "Empower content authors to view drafts and layout changes in real-time across staging environments before publishing live.",
        icon: "SparklesIcon"
      },
      {
        title: "Granular Role-Based Permissions",
        desc: "Multi-tiered publishing workflows with author, editor, and legal approver rights to maintain brand compliance.",
        icon: "CheckCircle2Icon"
      },
      {
        title: "Instant Webhook Cache Invalidation",
        desc: "Automated incremental static regeneration (ISR) triggered instantly upon content publish, guaranteeing zero stale content.",
        icon: "RocketIcon"
      }
    ],
    faqs: [
      {
        question: "How does a headless CMS benefit non-technical marketing editors?",
        answer:
          "Editors get an intuitive, clutter-free editing interface with live side-by-side previews, drag-and-drop page builders, and structured blocks that maintain design consistency without risk of breaking site layouts."
      }
    ]
  },

  "cloud-solutions-for-enterprises": {
    title: "Cloud & Enterprise Solutions",
    badge: "Cloud Modernization",
    tagline: "Resilient Cloud Infrastructure, DevOps Automation, and Enterprise CRM Integration",
    description:
      "Modernize legacy enterprise monoliths into agile, cost-optimized cloud systems. We provide cloud migration on AWS/Azure, Salesforce CRM customization, Microsoft Dynamics 365 integrations, and 24/7 DevOps management.",
    stats: [
      { value: "35%", label: "Average Cloud Cost Reduction" },
      { value: "Zero", label: "Downtime Cutover Record" },
      { value: "24/7/365", label: "Proactive DevOps Monitoring" },
      { value: "SOC 2", label: "Compliant Cloud Security" }
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "Salesforce", "Apache NiFi", "PostgreSQL", "Grafana"],
    capabilities: [
      {
        title: "Cloud Migration & Modernization",
        desc: "Lift, shift, and re-architect legacy servers into scalable cloud containers and serverless microservices on AWS or Azure.",
        icon: "RocketIcon"
      },
      {
        title: "Salesforce & Dynamics 365 CRM",
        desc: "Bespoke CRM workflow customization, pipeline automation, custom Apex triggers, and two-way integration with backend databases.",
        icon: "LayersIcon"
      },
      {
        title: "Infrastructure as Code (Terraform)",
        desc: "Reproducible, version-controlled cloud infrastructure provisioning with automated disaster recovery and automated multi-region backup.",
        icon: "ShieldCheckIcon"
      },
      {
        title: "Apache NiFi Data Orchestration",
        desc: "High-volume enterprise ETL pipelines managing secure data routing, schema transformations, and legacy warehouse data ingestion.",
        icon: "CpuIcon"
      },
      {
        title: "DevOps & CI/CD Pipeline Automation",
        desc: "Continuous integration pipelines using GitHub Actions with automated unit tests, linting, and automated staging deployments.",
        icon: "CheckCircle2Icon"
      },
      {
        title: "24/7 APM & Incident Response",
        desc: "Real-time alerts, synthetic transaction health monitoring, automated error tracking via Sentry, and guaranteed critical SLAs.",
        icon: "SparklesIcon"
      }
    ],
    faqs: [
      {
        question: "Can you modernize our legacy software without disrupting daily business operations?",
        answer:
          "Yes. We use incremental strangler-fig migration patterns, building modern microservices alongside your existing system and transitioning traffic step by step with zero downtime."
      }
    ]
  }
};
