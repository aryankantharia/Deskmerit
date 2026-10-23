export const recommenderIndustries = [
  "Technology & SaaS",
  "Healthcare",
  "Banking & FinTech",
  "Retail & E-commerce",
  "Manufacturing",
  "Transportation",
  "Education",
  "Telecommunications",
  "Energy",
  "Travel"
];

export const recommenderNeeds = [
  "AI & Machine Learning",
  "Web App Development",
  "Mobile App Development",
  "Headless CMS",
  "Cloud Computing",
  "User Experience Design",
  "Quality Assurance",
  "Cybersecurity & Compliance"
];

export const recommenderSizes = [
  "1-50 employees",
  "51-250 employees",
  "251-1,000 employees",
  "1,000+ employees"
];


export type RecommendationResult = {
  primaryService: string;
  badge: string;
  timeline: string;
  description: string;
  deliverables: string[];
  suggestedStack: string[];
  href: string;
};

export const recommendationsMap: Record<string, Record<string, RecommendationResult>> = {
  "Healthcare": {
    "AI & Machine Learning": {
      primaryService: "AI Medical Data Intelligence & Predictive Diagnostics",
      badge: "HIPAA Compliant",
      timeline: "8 - 14 Weeks",
      description: "Custom NLP document processing, patient triage assistance, and predictive outcomes analytics adhering strictly to healthcare compliance standards.",
      deliverables: ["HIPAA-compliant data pipeline", "Automated clinical document parsing", "Predictive patient outcome models", "Real-time clinician dashboard"],
      suggestedStack: ["Python", "PyTorch", "FastAPI", "AWS HealthLake", "React"],
      href: "/services/ai-and-ml-development"
    },
    default: {
      primaryService: "Secure Digital Health Platform & Patient Portal",
      badge: "Healthcare Grade",
      timeline: "10 - 16 Weeks",
      description: "Encrypted patient and practitioner portals with real-time appointment scheduling, EHR/EMR interoperability, and telehealth video integration.",
      deliverables: ["FHIR/HL7 Compliant API Layer", "Biometric mobile app for patients", "Practitioner scheduling console", "Audit trail logging"],
      suggestedStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
      href: "/industry/healthcare"
    }
  },
  "Banking & FinTech": {
    "AI & Machine Learning": {
      primaryService: "Automated Fraud Detection & Risk Scoring Engine",
      badge: "PCI-DSS Ready",
      timeline: "6 - 12 Weeks",
      description: "Real-time transaction anomaly detection, automated credit risk evaluation, and algorithmic decision auditing for financial institutions.",
      deliverables: ["Sub-100ms anomaly scoring API", "Continuous risk telemetry", "Compliance audit reports", "Explainable AI dashboard"],
      suggestedStack: ["Python", "Apache Kafka", "Flink", "Redis", "Docker"],
      href: "/services/ai-and-ml-development"
    },
    default: {
      primaryService: "Modern FinTech Core & Headless Banking Experience",
      badge: "High Security",
      timeline: "12 - 18 Weeks",
      description: "Zero-trust banking web and mobile experience featuring multi-factor auth, instant ledger reconciliation, and open banking integrations.",
      deliverables: ["Microservices gateway", "Multi-tenant ledger module", "Customer KYC mobile app", "Admin risk terminal"],
      suggestedStack: ["Golang", "TypeScript", "Flutter", "PostgreSQL", "Kubernetes"],
      href: "/industry/banking"
    }
  },
  "Retail & E-commerce": {
    "Headless CMS": {
      primaryService: "High-Speed Headless Storefront & Composable Commerce",
      badge: "Omnichannel",
      timeline: "4 - 8 Weeks",
      description: "Ultra-fast headless commerce powered by Next.js, Sanity or Shopify Headless, delivering sub-second page loads and seamless checkout.",
      deliverables: ["Sanity/Shopify headless integration", "Optimized checkout funnel", "Algolia predictive search", "Global CDN edge caching"],
      suggestedStack: ["Next.js", "Sanity CMS", "Shopify Storefront API", "Tailwind CSS"],
      href: "/services/headless-ecommerce"
    },
    default: {
      primaryService: "Omnichannel E-Commerce & Inventory Sync",
      badge: "High Conversion",
      timeline: "6 - 10 Weeks",
      description: "Unified commerce architecture connecting mobile, web storefront, point-of-sale systems, and warehouse logistics.",
      deliverables: ["Real-time multi-warehouse sync", "Mobile shopping app", "B2B and B2C pricing tiers", "Conversion-optimized checkout"],
      suggestedStack: ["Next.js", "Flutter", "Node.js", "Saleor", "PostgreSQL"],
      href: "/industry/retail"
    }
  },
  default: {
    "AI & Machine Learning": {
      primaryService: "Intelligent Enterprise AI & Workflow Automation",
      badge: "AI-First",
      timeline: "6 - 10 Weeks",
      description: "Domain-specific AI automation that streamlines operations, parses unstructured documents, and accelerates human decision-making.",
      deliverables: ["Custom LLM agent integration", "Enterprise data connector", "Role-based access controls", "Real-time analytics dashboard"],
      suggestedStack: ["Python", "FastAPI", "React", "Vector DB", "Azure OpenAI"],
      href: "/services/ai-and-ml-development"
    },
    default: {
      primaryService: "Scalable Cloud Architecture & Modern Web Platform",
      badge: "Production Ready",
      timeline: "6 - 12 Weeks",
      description: "Cleanly engineered digital solution designed for high availability, fast response times, and effortless modular expansion as you scale.",
      deliverables: ["Modern responsive frontend", "Robust REST/GraphQL API", "Automated CI/CD deployment", "Monitoring & logging suite"],
      suggestedStack: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      href: "/services/web-app-development"
    }
  }
};

export function getRecommendation(industry: string, need: string): RecommendationResult {
  const byIndustry = recommendationsMap[industry] || recommendationsMap.default;
  return byIndustry[need] || byIndustry.default || recommendationsMap.default.default;
}

export const industryModules: Record<string, string[]> = {
  "IT Services & Staffing": ["AI Coding Interviews", "Bench Visibility", "Skills Matrix"],
  "Manufacturing": ["Biometric Attendance", "Shift Rosters", "Plant Geofencing"],
  "Healthcare": ["Credential Verification", "Shift Swaps", "On-Call Rostering"],
  "Retail": ["Store-Level Attendance", "Rapid Hiring", "Uniform & Asset Tracking"],
  "BFSI": ["Background Checks", "Audit Trails", "Role-Based Access"]
};