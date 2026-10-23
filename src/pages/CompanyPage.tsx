import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  MapPinIcon,
  DownloadIcon,
  ExternalLinkIcon,
  CheckCircle2Icon,
  SparklesIcon,
  FileTextIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon,
  ZapIcon,
  BellRingIcon,
  DatabaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
  GlobeIcon,
  Gamepad2Icon,
  PartyPopperIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  TrophyIcon,
  CalendarIcon,
  CameraIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { FaqSection } from "../components/FaqSection";
import { companyPages } from "../data/pages";
import { stats } from "../data/home";

// Executive Leadership & Core Team
const teamMembers = [
  {
    name: "Keyur Mehta",
    role: "Managing Director",
    avatar: "/team/keyur-mehta.jpg"
  },
  {
    name: "Dishant Mehta",
    role: "Chief Technology Officer",
    avatar: "/team/dishant-mehta.jpg"
  },
  {
    name: "Zil Mehta",
    role: "Sr. Project Manager",
    avatar: "/team/zil-mehta.jpg"
  },
  {
    name: "Sohail Khan",
    role: "Head of Strategy and Growth",
    avatar: "/team/sohail-khan.jpg"
  },
  {
    name: "Anshika Mishra",
    role: "Project Manager",
    avatar: "/team/anshika-mishra.jpg"
  },
  {
    name: "Shivani Mehta",
    role: "Technical Project Manager",
    avatar: "/team/shivani-mehta.jpg"
  },
  {
    name: "Himali Jaiswal",
    role: "Lead – Account Management",
    avatar: "/team/himali-jaiswal.jpg"
  },
  {
    name: "Shashi Gupta",
    role: "Human Resource Manager",
    avatar: "/team/shashi-gupta.jpg"
  }
];

// Open Roles for Careers
const openRolesList = [
  {
    id: "dotnet",
    title: "Senior .Net Developer",
    experience: "Senior (6 - 9 years)",
    type: "Full Time",
    location: "Surat",
    department: "Engineering",
    description: "We are looking for a skilled .NET Developer to join our team. The ideal candidate should have hands-on experience in developing, maintaining, and deploying web applications using .NET technologies.",
    requirements: [
      "Should have good knowledge of OOPS Concept, Web application concepts, Architecture and Cloud/Infra.",
      "Must have hands-on experience on Asp.net Core MVC.",
      "SQL Server with Entity Framework",
      "Strong working knowledge of HTML, CSS, Javascript, Jquery, Ajax, Bootstrap.",
      "Web API"
    ]
  },
  {
    id: "designer",
    title: "Graphic Designer",
    experience: "Mid Level (3 - 5 years)",
    type: "Full Time",
    location: "Remote",
    department: "Design",
    description: "Create high-impact visual designs, marketing collateral, digital brand guidelines, and modern UI mockups for our enterprise web products and client campaigns.",
    requirements: [
      "Strong proficiency in Figma, Adobe Illustrator, Photoshop, and After Effects.",
      "Compelling portfolio demonstrating modern typography, visual hierarchy, and brand design.",
      "Experience creating responsive web graphics, social media assets, and presentation decks.",
      "Good understanding of design systems and digital branding guidelines."
    ]
  },
  {
    id: "architect",
    title: "Solution Architect",
    experience: "Senior (6 - 9 years)",
    type: "Full Time",
    location: "Remote",
    department: "Architecture",
    description: "Architect scalable multi-tenant cloud platforms, distributed microservices, and enterprise API integration layers for mission-critical customer systems.",
    requirements: [
      "Deep architectural expertise in distributed systems, event-driven architectures, and cloud services (AWS / Azure / GCP).",
      "Hands-on experience in database modeling, high-throughput caching (Redis), and data migration.",
      "Solid understanding of enterprise security, OAuth 2.0 / SAML SSO, and API gateway design.",
      "Proven track record mentoring senior engineering teams and leading client technical evaluations."
    ]
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    experience: "Mid Level (3 - 5 years)",
    type: "Full Time",
    location: "Surat/Remote",
    department: "Infrastructure",
    description: "Scale our automated CI/CD pipelines, container orchestration environments, and zero-downtime deployment workflows across multi-region cloud infrastructures.",
    requirements: [
      "Strong experience managing Kubernetes clusters, Docker containerization, and Terraform IaC.",
      "Proficiency with CI/CD automation tools like GitHub Actions, GitLab CI, or Jenkins.",
      "Hands-on expertise in cloud monitoring with Prometheus, Grafana, Datadog, or ELK stack.",
      "Strong shell scripting skills (Bash / Python) and network security knowledge."
    ]
  },
  {
    id: "qa",
    title: "QA Tester (Mobile Automation)",
    experience: "Mid Level (3 - 5 years)",
    type: "Full Time",
    location: "Remote",
    department: "Quality Assurance",
    description: "Design and execute automated testing frameworks for native and cross-platform mobile apps, ensuring rigorous reliability, security, and performance standards.",
    requirements: [
      "Strong experience in mobile automation tools such as Appium, Espresso, or XCUITest.",
      "Hands-on programming knowledge in Java, JavaScript, Python, or TypeScript for test automation.",
      "Experience with API testing using Postman/Newman and performance benchmarking tools.",
      "Familiarity with cloud-based test grids such as BrowserStack or Sauce Labs."
    ]
  },
  {
    id: "leadgen",
    title: "Lead Generation Executive",
    experience: "Mid Level (3 - 5 years)",
    type: "Full Time",
    location: "Mumbai",
    department: "Sales & Growth",
    description: "Drive strategic outbound pipeline generation, enterprise account identification, and consultative executive outreach to mid-market and enterprise leadership.",
    requirements: [
      "Proven track record in B2B outbound prospecting and qualified sales lead generation.",
      "Hands-on familiarity with modern sales tools like LinkedIn Sales Navigator, Apollo, HubSpot, and Salesforce.",
      "Exceptional verbal and written communication skills with business decision-makers.",
      "Strong research capabilities to map organizational hierarchies and identify key stakeholders."
    ]
  }
];

// Press Releases
const pressReleases = [
  {
    date: "October 12, 2026",
    title: "Sqalible Announces General Availability of Live AI Avatar Interviewing with Human-in-the-Loop Governance",
    category: "Product Launch",
    summary: "New capability enables candidate-adaptive coding evaluation and structured screening with strict bias mitigation."
  },
  {
    date: "September 24, 2026",
    title: "Sqalible Achieves SOC 2 Type II Certification and ISO/IEC 27001 Across All Global Cloud Regions",
    category: "Security & Trust",
    summary: "Independent audit confirms enterprise tenant isolation, zero-retention AI inference, and automated access governance."
  },
  {
    date: "August 15, 2026",
    title: "Sqalible Expands Middle East Operations with Arabic RTL Interface and Regional Statutory Packs",
    category: "Expansion",
    summary: "Enterprise clients across UAE and Saudi Arabia can now automate end-of-service gratuity and multi-currency payroll."
  },
  {
    date: "June 28, 2026",
    title: "Sqalible Unveils Zero-Disruption Migration Framework for Legacy HRMS Platforms",
    category: "Platform",
    summary: "Automated schema mapping and parallel dry-run simulations reduce cutover timelines from 6 months to under 3 weeks."
  }
];

// Media Kit Downloadable Resources
const mediaResources = [
  {
    title: "Official Sqalible Logo Kit",
    format: "SVG & PNG Pack (Light & Dark)",
    size: "1.8 MB",
    description: "Primary brand mark, inverted white assets, icon-only glyphs, and minimum safe margin guidelines.",
    href: "/sqalible-logo.png",
    downloadName: "sqalible-logo.png"
  },
  {
    title: "High-Resolution Product UI & Dashboards",
    format: "Figma & PNG Renders",
    size: "14.2 MB",
    description: "Full-resolution screenshots of AI Live Interview, Core HR Employee Directory, and Workforce Telemetry.",
    href: "/dashboards/ai-interview-dashboard.png",
    downloadName: "sqalible-product-screenshots.png"
  },
  {
    title: "Executive Leadership Headshots & Bios",
    format: "Print-ready JPG & PDF",
    size: "8.5 MB",
    description: "High-resolution portraits and approved executive biographies for Keyur Mehta, Dishant Mehta, and team.",
    href: "/team/keyur-mehta.jpg",
    downloadName: "sqalible-executive-headshots.jpg"
  },
  {
    title: "Sqalible Company Fact Sheet 2026",
    format: "Executive Summary PDF",
    size: "1.2 MB",
    description: "Fast facts, founding timeline, platform architecture overview, client stats, and executive contact channels.",
    href: "/Frame_1261155174.svg",
    downloadName: "sqalible-fact-sheet-2026.pdf"
  }
];

export function CompanyPage() {
  const { pathname, hash } = useLocation();
  const rawKey = pathname.replace(/^\//, "");

  let key: keyof typeof companyPages = (
    rawKey === "about-us" ? "about" :
    rawKey === "life-at-sqalible" || rawKey === "life-at-squalible" || rawKey === "life" || rawKey === "culture" ? "life" :
    rawKey
  ) as any;
  if (!companyPages[key]) {
    key = "about";
  }

  const isAbout = key === "about";
  const isCareers = key === "careers";
  const isPress = key === "press";
  const isPartners = key === "partners";
  const isLife = key === "life";

  // Smooth scroll to anchored hash sections (#story, #mission, #team)
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace(/^#/, "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  }, [hash, pathname]);

  const companyHeroImageMap: Record<string, string> = {
    about: "/heroes/company-about-hero.jpg",
    careers: "/heroes/company-careers-hero.jpg",
    partners: "/heroes/company-partners-hero.jpg",
    press: "/heroes/company-press-hero.jpg"
  };
  const companyHeroImage = companyHeroImageMap[key];

  return (
    <PageLayout>
      {/* 1. Page Hero: Dedicated Hero for Life at Sqalible matching Kombee, Standard PageHero for others */}
      {isLife ? (
        <LifeHero />
      ) : (
        <PageHero
          crumbs={[{ title: "Company", href: "/about" }, { title: companyPages[key].title }]}
          pretitle="Sqalible Organization"
          title={companyPages[key].title}
          description={companyPages[key].description}
          image={companyHeroImage}
          imageAlt={companyPages[key].title}
          showActions={isAbout}
        />
      )}

      {/* Metric Strip Directly After Hero Matching Responsible AI Design */}
      {isAbout && (
        <section className="border-y border-neutral-800 bg-neutral-900 text-white py-8" aria-label="Company Metrics">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">{s.value}</p>
                <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          LIFE AT SQALIBLE PAGE: Culture, Celebrations, Perks, Workspace (plus FAQ)
          ========================================================================= */}
      {isLife && <LifeAtSqalibleView />}

      {/* =========================================================================
          ABOUT PAGE: Team First, Then Our Story (plus Mission & FAQ)
          ========================================================================= */}
      {isAbout && <AboutView />}

      {/* =========================================================================
          CAREERS PAGE: Open Roles (Powered by Sqalible Hire) (plus FAQ)
          ========================================================================= */}
      {isCareers && <CareersView />}

      {/* =========================================================================
          PRESS PAGE: News & Accessible Media Kit (plus FAQ)
          ========================================================================= */}
      {isPress && <PressView />}

      {/* =========================================================================
          PARTNERS PAGE: Partner Ecosystem (plus FAQ)
          ========================================================================= */}
      {isPartners && <PartnersView />}
    </PageLayout>
  );
}

/* =========================================================================
   About View Component: Our Story (#story), Mission (#mission), Team (#team)
   ========================================================================= */
function AboutView() {
  const aboutFaqs = [
    {
      q: "Why was Sqalible built from the ground up as an AI-native HRMS?",
      a: "Traditional HR software was built decades ago as rigid relational databases that treat AI as an afterthought. Sqalible was designed from day one around an intelligent, single employee master record, allowing autonomous interview scheduling, real-time payroll reconciliation, and predictive workforce analytics to operate natively without fragile plugins."
    },
    {
      q: "How does Sqalible ensure ethical AI and unbiased candidate evaluations?",
      a: "All AI features in Sqalible follow strict human-in-the-loop governance. Our AI avatar interviews and resume scoring provide explainable rubrics while masking protected attributes (age, gender, ethnicity), ensuring hiring decisions remain fair, auditable, and firmly in the hands of human hiring managers."
    },
    {
      q: "Where are Sqalible's engineering delivery centers and data centers located?",
      a: "Sqalible maintains primary engineering delivery centers in India, with regional offices in Australia and New Zealand. Client data is hosted on enterprise cloud infrastructure with dedicated regional data sovereignty across India, Middle East/GCC, North America, and Europe."
    },
    {
      q: "Can organizations migrate from legacy systems like Keka, Darwinbox, or greytHR without downtime?",
      a: "Yes. Our enterprise migration team provides parallel run support, automated master record mapping, and statutory data verification to ensure zero disruption to attendance or payroll cycles."
    },
    {
      q: "How does Sqalible manage multi-entity and cross-border payroll compliance?",
      a: "Sqalible supports multi-currency, multi-entity organizations with built-in statutory compliance engines for India (PF, ESI, TDS, Gratuity), UAE/GCC (WPS, GOSI), the US (W-2, 1099, state taxes), and the UK/Europe (PAYE, GDPR)."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "First Principles & Architecture",
      desc: "Reimagined workforce operations from the ground up, establishing the immutable single employee master record and real-time event pipeline."
    },
    {
      year: "2023",
      title: "Autonomous AI Interview Engine",
      desc: "Pioneered adaptive resume parsing and live AI avatar candidate interviews with real-time code evaluation and human sign-off."
    },
    {
      year: "2024",
      title: "Unified End-to-End Lifecycle",
      desc: "Connected hiring directly to automated pre-boarding, attendance, multi-country statutory payroll compliance, and 360 performance reviews."
    },
    {
      year: "2025–2026",
      title: "Enterprise Scale & Global Trust",
      desc: "Achieved SOC 2 Type II and ISO 27001 certifications, serving high-growth mid-market and global enterprises across India, GCC, US, and UK/Europe."
    }
  ];

  return (
    <>
      {/* SECTION 1: OUR STORY & FOUNDING VISION (#story) */}
      <section id="story" className="scroll-mt-24 bg-[#0B0F19] py-20 md:py-28 text-white relative overflow-hidden" aria-label="Our Story & Founding Vision">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-teal-500/15 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-3.5 py-1 text-xs font-bold text-teal-400 mb-4 tracking-wider uppercase">
              OUR FOUNDING STORY
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Pioneering the AI-Native Future of Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Sqalible was founded by enterprise software architects and seasoned HR practitioners who grew tired of watching organizations struggle with disjointed, 15-year-old legacy software.
            </p>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We realized that slapping an "AI chatbot" on top of fragmented spreadsheets and fragile ERP databases was a band-aid, not a solution. Modern enterprises need a unified operating system built from first principles: an immutable single employee master record that powers autonomous hiring, zero-touch payroll compliance, and actionable workforce intelligence.
            </p>
          </div>

          {/* Architectural Milestones Grid */}
          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {milestones.map((m) => (
                <div key={m.year} className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <span className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VALUES (#mission) */}
      <section id="mission" className="scroll-mt-24 bg-white py-16 md:py-24 border-b border-neutral-200" aria-label="Our Mission & Values">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full max-w-3xl">
            <p className="pretitle text-primary">Mission & Values</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Mission
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-medium text-neutral-800 leading-relaxed">
              "To eliminate administrative friction across the entire employee lifecycle, enabling modern organizations to operate with autonomous speed while keeping people firmly in control."
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyPages.about.values.map((v, i) => {
              const valueIcons = [
                <UsersIcon size={22} />,
                <DatabaseIcon size={22} />,
                <GlobeIcon size={22} />
              ];
              return (
                <div
                  key={v.title}
                  className="group flex flex-col justify-between rounded-none border border-neutral-300 bg-white p-7 sm:p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0 [&>svg]:transition-colors group-hover:[&>svg]:text-white mb-6">
                      {valueIcons[i]}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP & CORE TEAM (#team) */}
      <section id="team" className="scroll-mt-24 bg-[#FAF7F2] py-16 md:py-24 border-b border-neutral-200" aria-label="Leadership & Team">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-12 sm:mb-16">
            <p className="pretitle text-primary">Executive Leadership & Core Team</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              The team behind Sqalible
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-3xl">
              Seasoned engineers, enterprise workforce architects, and strategic operators committed to building intelligent, transparent workforce systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
            {teamMembers.map((m) => (
              <div key={m.name} className="flex flex-col group">
                <div className="relative overflow-hidden bg-neutral-100 aspect-[4/5] w-full shadow-xs">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3.5 sm:mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-neutral-600 font-normal">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT SQALIBLE FAQS */}
      <FaqSection
        faqs={aboutFaqs}
        title="Everything you need to know about Sqalible"
        pretitle="About Sqalible FAQs"
        className="bg-[#FAFAFA] py-16 md:py-24"
      />
    </>
  );
}

/* =========================================================================
   LIFE AT SQALIBLE: Hero Component (Matching Kombee layout)
   ========================================================================= */
function LifeHero() {
  return (
    <section className="relative overflow-hidden bg-[#070D14] pb-16 pt-32 md:pb-24 md:pt-40 text-white" aria-labelledby="life-hero-title">
      {/* Background Glows & Subtle Tech Atmosphere */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2DD4BF 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-neutral-600">/</span>
              <a href="/about" className="hover:text-white transition-colors">Company</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-neutral-600">/</span>
              <span className="text-teal-400 font-semibold" aria-current="page">Life at Sqalible</span>
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4">
              <SparklesIcon size={14} className="text-teal-400" />
              Our Culture & Everyday Camaraderie
            </div>

            <h1 id="life-hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Life At Sqalible <br />
              Collaboration, Culture & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-100 to-emerald-400">
                Everyday Experiences
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Life at Sqalible is shaped by people who care deeply about craft, autonomy, and each other. From festive celebrations and collaborative hackathons to daily standup laughter, discover how our team builds what’s next.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/careers"
                className="group rounded-full bg-gradient-to-r from-teal-500 to-primary hover:from-teal-400 hover:to-teal-500 text-white font-semibold px-8 py-3.5 text-sm shadow-lg shadow-teal-900/30 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Explore Openings
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#culture"
                className="rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-semibold px-6 py-3.5 text-sm transition-colors"
              >
                See Inside Life at Sqalible
              </a>
            </div>
          </div>

          {/* Right Column: 3 Overlapping Tilted Polaroid Frames (Matching Kombee Screenshot) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] h-[340px] sm:h-[380px]">
              {/* Polaroid 1 (Left tilt -6deg) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ rotate: -2, scale: 1.04, zIndex: 30 }}
                className="absolute left-2 top-2 w-[190px] sm:w-[210px] bg-white p-2.5 pb-6 rounded-none shadow-2xl border border-neutral-200 cursor-pointer transition-shadow"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-none bg-neutral-100">
                  <img
                    src="/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
                    alt="Diwali Celebration at Sqalible"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[11px] font-bold text-neutral-800 tracking-tight">
                    Diwali Celebration 🪔
                  </span>
                </div>
              </motion.div>

              {/* Polaroid 2 (Center-right tilt 4deg) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ rotate: 1, scale: 1.04, zIndex: 30 }}
                className="absolute right-0 top-10 w-[200px] sm:w-[220px] bg-white p-2.5 pb-6 rounded-none shadow-2xl border border-neutral-200 cursor-pointer transition-shadow z-10"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-none bg-neutral-100">
                  <img
                    src="/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
                    alt="Townhall & Offsite at Sqalible"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[11px] font-bold text-neutral-800 tracking-tight">
                    Townhall & Offsites 🏢
                  </span>
                </div>
              </motion.div>

              {/* Polaroid 3 (Bottom-left tilt 8deg) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ rotate: 3, scale: 1.04, zIndex: 30 }}
                className="absolute left-10 bottom-0 w-[190px] sm:w-[210px] bg-white p-2.5 pb-6 rounded-none shadow-2xl border border-neutral-200 cursor-pointer transition-shadow z-20"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-none bg-neutral-100">
                  <img
                    src="/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
                    alt="Annual Hackathon at Sqalible"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[11px] font-bold text-neutral-800 tracking-tight">
                    Annual Hackathon 💡
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   LIFE AT SQALIBLE: Data Structures
   ========================================================================= */
const perksList = [
  {
    title: "Flexible Work Environment",
    icon: ClockIcon,
    image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg",
    description: "Work with clarity and balance through hybrid schedules and outcome-driven autonomy."
  },
  {
    title: "Team Engagement Activities",
    icon: Gamepad2Icon,
    image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg",
    description: "Participate in collaborative hackathons, sports challenges, and quarterly offsites that build real bonds."
  },
  {
    title: "Celebrations & Offsites",
    icon: PartyPopperIcon,
    image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg",
    description: "Enjoy shared experiences through company celebrations, annual retreats, and Friday socials."
  },
  {
    title: "Career Development Programs",
    icon: GraduationCapIcon,
    image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
    description: "Upskill through 1-on-1 mentorship, conference sponsorships, and certified AI engineering pathways."
  },
  {
    title: "Employee Wellbeing Support",
    icon: HeartPulseIcon,
    image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg",
    description: "Access comprehensive family health coverage, wellness days, and mental health support."
  },
  {
    title: "Recognition & Growth",
    icon: TrophyIcon,
    image: "/3e3316ce-a3b9-4de0-9d2f-0b39d026f336.jpg",
    description: "Your contributions are celebrated and rewarded through transparent merit cycles and rapid leadership advancement."
  }
];

const lifeFaqs = [
  {
    q: "What is the working model at Sqalible?",
    a: "Sqalible operates on an outcome-driven hybrid model. We support flexible schedules with modern offices in Surat and Mumbai for in-person collaboration, hackathons, and celebrations, alongside full support for remote and asynchronous team members globally."
  },
  {
    q: "How often do teams celebrate festivals and gather for offsites?",
    a: "We actively celebrate all major cultural milestones—including Diwali, Navratri Garba nights, Independence Day, and New Year’s—alongside quarterly team offsites, annual hackathons, and sports leagues."
  },
  {
    q: "What learning and development allowances are offered?",
    a: "Every employee receives an annual personal learning stipend for technical certifications, book allowances, AI tool subscriptions, and sponsored attendance at premier industry conferences."
  },
  {
    q: "How does Sqalible support employee wellbeing and mental health?",
    a: "We offer comprehensive health insurance covering direct dependents, regular wellness workshops, mandatory disconnect weeks, and ergonomic workstation stipends for both office and home setups."
  },
  {
    q: "How are promotions and career milestones evaluated?",
    a: "We practice transparent, merit-based bi-annual performance evaluations with 360-degree feedback, clear engineering level ladders, and direct mentorship from our leadership team."
  }
];

/* =========================================================================
   LIFE AT SQALIBLE: Main View Component (Matching Kombee Structure)
   ========================================================================= */
function LifeAtSqalibleView() {
  return (
    <>
      {/* =====================================================================
          SECTION 1: OUR WORKSPACE — Inside Life at Sqalible
          (Masonry Collage with Centerpiece Quote Card)
          ===================================================================== */}
      <section id="culture" className="bg-[#FAF7F2] py-20 md:py-28 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full max-w-3xl mb-14 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              OUR WORKSPACE
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Inside Life at Sqalible
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              At Sqalible, every day is driven by teamwork, open communication, and a shared commitment to delivering quality outcomes. Our teams collaborate closely across projects, exchanging ideas, solving challenges, and creating solutions that make a real impact.
            </p>
          </div>

          {/* Mosaic Zig-Zag Gallery Layout Matching Kombee Screenshot */}
          <div className="relative pt-6 pb-6">
            {/* Desktop & Large Tablet: Organic Zig-Zag Staggered Overlapping Cluster */}
            <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 relative overflow-visible">
              {/* Group 1 (Left Column): Dance photo top + Floor Townhall photo bottom + Overlapping Quote Card */}
              <div className="relative flex flex-col items-end shrink-0 w-[360px] xl:w-[390px]">
                {/* 1. Dance Celebration Image (Top) */}
                <div className="w-[300px] xl:w-[320px] bg-white p-2.5 rounded-none shadow-xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-none">
                    <img
                      src="/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
                      alt="Cultural celebration and dance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Quote Card (Nestled overlapping top-right of Dance photo with soft purple accent glow) */}
                <div className="absolute -top-4 -right-16 z-30 w-[330px] xl:w-[350px] rounded-none bg-white p-5 xl:p-6 shadow-2xl border border-neutral-200/90 text-left">
                  {/* Purple/Fuchsia accent glow circle matching Screenshot 1 */}
                  <div className="absolute -bottom-2 -left-3 w-12 h-12 rounded-full bg-purple-400/50 blur-lg pointer-events-none" />
                  <p className="text-xs xl:text-[13px] font-normal text-neutral-800 leading-relaxed relative z-10">
                    We foster a workplace where transparency, accountability, and collaboration are part of everyday work. By encouraging active participation and mutual support, we create an environment where teams stay aligned, productive, and connected.
                  </p>
                </div>

                {/* 2. Townhall Floor Sync Image (Bottom, overlapping lower part of dance image) */}
                <div className="w-[250px] xl:w-[270px] bg-white p-2.5 rounded-none shadow-2xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300 relative z-20 -mt-14 mr-6">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-none">
                    <img
                      src="/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
                      alt="All-Hands Townhall floor sync"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2 (Center Column): Large Cricket / Sports Ground Image */}
              <div className="relative shrink-0 w-[300px] xl:w-[340px] z-10 mt-14">
                <div className="w-full bg-white p-2.5 rounded-none shadow-2xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[3/4] xl:aspect-[4/5] w-full overflow-hidden rounded-none">
                    <img
                      src="/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
                      alt="Annual Cricket League & sports weekend"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3 (Right Column): Traditional gifts top + Trophies far top-right + Dinner table bottom-right */}
              <div className="relative flex flex-col shrink-0 w-[420px] xl:w-[460px]">
                {/* Upper Row: Traditional gifts image + Trophies image */}
                <div className="flex items-start gap-3.5 xl:gap-4 relative z-10">
                  {/* 3. Traditional Attire with Gift Bags */}
                  <div className="w-[230px] xl:w-[250px] bg-white p-2.5 rounded-none shadow-xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-none">
                      <img
                        src="/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
                        alt="Festive gift hampers & milestone honors"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* 4. Golden Trophies Image (Far right top) */}
                  <div className="w-[170px] xl:w-[190px] bg-white p-2.5 rounded-none shadow-2xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300 -mt-8">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-none">
                      <img
                        src="/3e3316ce-a3b9-4de0-9d2f-0b39d026f336.jpg"
                        alt="Annual excellence trophies"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Team Dinner Table Image (Bottom right, overlapping upper row in zig-zag) */}
                <div className="w-[270px] xl:w-[290px] bg-white p-2.5 rounded-none shadow-2xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300 relative z-20 -mt-18 ml-16 xl:ml-20">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-none">
                    <img
                      src="/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
                      alt="Friday team celebratory dinner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile & Small Screen Staggered Layout with White Frames */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              {/* Quote Card */}
              <div className="sm:col-span-2 rounded-none bg-white p-6 shadow-md border border-neutral-200">
                <p className="text-sm font-medium text-neutral-800 leading-relaxed italic">
                  “We foster a workplace where transparency, accountability, and collaboration are part of everyday work. By encouraging active participation and mutual support, we create an environment where teams stay aligned, productive, and connected.”
                </p>
                <p className="mt-3 text-xs font-bold text-teal-600">The Sqalible People Manifesto</p>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg" alt="Cultural celebration" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/00dca2be-059e-4a75-8d89-688b913d203a.jpg" alt="Townhall floor gathering" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg" alt="Cricket league" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg" alt="Festive gifts" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/3e3316ce-a3b9-4de0-9d2f-0b39d026f336.jpg" alt="Trophies" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-none shadow-md border border-neutral-100">
                <div className="aspect-[4/3] overflow-hidden rounded-none">
                  <img src="/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg" alt="Team celebratory dinner" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: PERKS & BENEFITS — What Makes Sqalible Different
          (Deep Obsidian Background with 6 Tall Vertical Cards matching Kombee)
          ===================================================================== */}
      <section className="bg-[#0A1118] py-20 md:py-28 border-b border-neutral-800 text-white relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full max-w-3xl mb-14 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400">
              PERKS & BENEFITS
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              What Makes Sqalible Different
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              We believe great work happens when people feel supported, trusted, and motivated. Our work environment is designed to encourage continuous learning, balanced routines, and long-term professional growth.
            </p>
          </div>

          {/* 6 Tall Vertical Cards in responsive grid matching Kombee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
            {perksList.map((perk) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="group relative h-[380px] sm:h-[410px] rounded-none overflow-hidden p-5 flex flex-col justify-between border border-white/10 hover:border-teal-400/60 shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background Image with hover zoom */}
                  <img
                    src={perk.image}
                    alt={perk.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/85 to-neutral-900/30" />

                  {/* Top: Icon Badge - rounded with brand color fill on hover */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-950/60 text-teal-300 border border-teal-500/30 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-colors duration-200 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                      <IconComp size={20} />
                    </span>
                  </div>

                  {/* Bottom: Title & Text */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors">
                      {perk.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-normal">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CTA BANNER (Green Background Card matching PageCta style)
          ===================================================================== */}
      <section className="bg-white py-14 md:py-18 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-none bg-primary px-8 py-10 md:flex-row md:items-center md:px-12 shadow-md">
            <div className="flex-1">
              <p className="pretitle text-primary-light">Get Started</p>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to Do the Best Work of Your Life?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl font-normal leading-relaxed">
                We’re continuously growing across engineering, design, AI research, and customer success. Find your place on our mission-driven team.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/careers"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:bg-neutral-100 hover:scale-105"
              >
                Explore Open Roles
                <ArrowRightIcon size={16} strokeWidth={2} className="inline ml-1.5" aria-hidden="true" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing existing FaqSection component */}
      <FaqSection
        title="Everything You Need to Know About Life at Sqalible"
        pretitle="Culture & Workplace FAQs"
        faqs={lifeFaqs}
        className="bg-[#FAFAFA] py-16 md:py-24"
      />
    </>
  );
}

/* =========================================================================
   Careers View Component: Open roles (powered by Sqalible Hire)
   ========================================================================= */
function CareersView() {
  const [openRoles, setOpenRoles] = useState<Record<string, boolean>>({
    dotnet: true
  });
  const [viewingRole, setViewingRole] = useState<(typeof openRolesList)[0] | null>(null);
  const [applyingRole, setApplyingRole] = useState<(typeof openRolesList)[0] | null>(null);
  const [applicantForm, setApplicantForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    noticePeriod: "",
    portfolio: "",
    resume: "",
    message: ""
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const toggleRole = (id: string) => {
    setOpenRoles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <>
      {/* Banner linking to Life at Sqalible Culture page */}
      <div className="bg-teal-50 border-b border-teal-200/60 py-3 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="text-teal-900 font-medium">
            Curious about our team retreats, festival celebrations, and day-to-day culture?
          </p>
          <a
            href="/life-at-sqalible"
            className="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-900 transition-colors shrink-0"
          >
            Explore Life at Sqalible <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>

      <section className="bg-[#FAF9F5] py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Open Roles
            </h2>
          </div>

          {/* Clean Kombee Dropdown list for Open Roles matching reference screenshot */}
          <div className="mt-8 border-t border-neutral-300">
            {openRolesList.map((role) => {
              const isOpen = Boolean(openRoles[role.id]);
              return (
                <div key={role.id} className="border-b border-neutral-300 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight">
                      {role.title} • {role.experience} • {role.type} • {role.location}
                    </h3>
                    <span className="shrink-0 ml-4 text-neutral-600 group-hover:text-primary transition-colors">
                      {isOpen ? <ChevronUpIcon size={22} /> : <ChevronDownIcon size={22} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 max-w-4xl">
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            {role.description}
                          </p>

                          {role.requirements && role.requirements.length > 0 && (
                            <div className="mt-5">
                              <h4 className="text-sm font-bold text-neutral-900">Requirements</h4>
                              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                {role.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Action Buttons Matching Screenshot */}
                          <div className="mt-6 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setViewingRole(viewingRole?.id === role.id ? null : role)}
                              className="rounded-full bg-neutral-900 text-white px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                            >
                              {viewingRole?.id === role.id ? "Hide Details" : "View More"}
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setApplyingRole(role);
                                setApplicationSubmitted(false);
                              }}
                              className="rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-all hover:scale-105 cursor-pointer"
                            >
                              Apply
                            </button>
                          </div>

                          {/* View More Expanded Details */}
                          {viewingRole?.id === role.id && (
                            <motion.div
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-6 p-5 sm:p-6 rounded-none bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-3 shadow-xs"
                            >
                              <h5 className="font-bold text-neutral-900">Perks & Compensation:</h5>
                              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                                <li>Top-of-market base salary with performance bonuses and equity incentives.</li>
                                <li>Comprehensive health, dental, and vision insurance for you and direct dependents.</li>
                                <li>Flexible hybrid/remote working models with home office setup budgets and Apple hardware.</li>
                                <li>Generous annual professional development stipend for conferences and certifications.</li>
                              </ul>
                              <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-xs text-neutral-500">
                                <span>Department: <strong className="text-neutral-800">{role.department}</strong></span>
                                <span>Role Ref: <code className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-700 font-mono">SQ-{role.id.toUpperCase()}</code></span>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PROCESS: ARCHITECTURAL LINE-DIVIDED DESIGN MATCHING ATTACHED SCREENSHOT */}
      <section className="bg-[#0B0F19] py-20 md:py-28 text-white relative overflow-hidden" aria-label="Hiring & Interview Process">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="pretitle text-teal-400 mb-3">
              Step-by-Step Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              How You Interview at Sqalible
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We practice what we build. Here is what your hiring process looks like:
            </p>
          </div>

          {/* Architectural Line-Divided Structure Matching Reference (3 Steps) */}
          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {/* Step 1 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ZapIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-teal-400 block mb-1 uppercase tracking-wider">
                  Step 1
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  One-Click Application
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Submit your resume or GitHub/LinkedIn profile. Review starts within 24 hours.
                </p>
              </div>

              {/* Step 2 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-teal-400 block mb-1 uppercase tracking-wider">
                  Step 2
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Adaptive Live Assessment
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Complete an asynchronous technical or design evaluation on your own schedule.
                </p>
              </div>

              {/* Step 3 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <UsersIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-teal-400 block mb-1 uppercase tracking-wider">
                  Step 3
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Team & Leadership Discussion
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Final conversation with your squad lead and team members with transparent compensation rubrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Job Application Modal */}
      <AnimatePresence>
        {applyingRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg rounded-none bg-white p-6 sm:p-8 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => {
                  setApplyingRole(null);
                  setApplicationSubmitted(false);
                }}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <XIcon size={18} />
              </button>

              {applicationSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-primary mb-4">
                    <CheckCircle2Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Application Submitted!</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for applying for <strong>{applyingRole.title}</strong> ({applyingRole.location}). Our recruitment team will review your profile and reach out within 24 to 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setApplyingRole(null);
                      setApplicationSubmitted(false);
                    }}
                    className="mt-6 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Job Application</span>
                    <h3 className="text-xl font-extrabold text-neutral-900 mt-1">{applyingRole.title}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {applyingRole.experience} • {applyingRole.type} • {applyingRole.location}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantForm.name}
                      onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Total Experience</label>
                      <input
                        type="text"
                        value={applicantForm.experience}
                        onChange={(e) => setApplicantForm({ ...applicantForm, experience: e.target.value })}
                        placeholder="e.g. 6 years"
                        className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Notice Period</label>
                      <input
                        type="text"
                        value={applicantForm.noticePeriod}
                        onChange={(e) => setApplicantForm({ ...applicantForm, noticePeriod: e.target.value })}
                        placeholder="e.g. 30 days"
                        className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">LinkedIn or Portfolio URL</label>
                    <input
                      type="url"
                      value={applicantForm.portfolio}
                      onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Resume Link (Google Drive / Dropbox)</label>
                    <input
                      type="text"
                      value={applicantForm.resume}
                      onChange={(e) => setApplicantForm({ ...applicantForm, resume: e.target.value })}
                      placeholder="https://drive.google.com/file/..."
                      className="w-full h-10 px-3.5 rounded-xl border border-neutral-300 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setApplyingRole(null)}
                      className="rounded-full px-5 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:scale-105 cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQ SECTION */}
      <FaqSection
        faqs={careersFaqs}
        title="Frequently Asked Questions about Working at Sqalible"
        pretitle="Careers FAQs"
        className="bg-[#FAFAFA] py-16 md:py-24"
      />
    </>
  );
}

const careersFaqs = [
  {
    q: "What is the interview and hiring process at Sqalible?",
    a: "Our process is fast, respectful, and transparent. It typically consists of 3 stages: an initial conversation with our talent squad, a hands-on technical or portfolio exercise (often using our own AI Live Interview and coding sandbox), and a final culture alignment session with a founder or domain lead. Most offers are extended within 7 to 10 days."
  },
  {
    q: "Do candidates experience the Sqalible AI Live Interview firsthand?",
    a: "Yes! As an AI-native company, candidates get early access to test our cutting-edge AI screening and live avatar interview platform. It gives you direct insight into the groundbreaking technology you will be helping build and scale."
  },
  {
    q: "What perks, equipment, and benefits does Sqalible offer?",
    a: "We provide competitive market compensation, generous equity grants for key roles, top-tier health insurance for employees and families, the latest Apple hardware (MacBook Pro M3), a dedicated annual learning stipend, and ergonomic home workstation allowances."
  },
  {
    q: "Does Sqalible support remote or hybrid working arrangements?",
    a: "Yes. While we have vibrant engineering hubs in Surat and Mumbai for collaborative sprints and celebrations, we also have fully remote team members across engineering, AI research, design, and growth."
  },
  {
    q: "How soon can I expect feedback after submitting an application?",
    a: "Our recruitment team reviews applications daily and guarantees a response within 48 to 72 hours. We pride ourselves on giving constructive feedback to every shortlisted candidate."
  }
];

/* =========================================================================
   Press View Component: News & Media Kit with Working Resources
   ========================================================================= */
function PressView() {
  return (
    <>
      <section className="bg-white py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top: News & Press Releases */}
          <div className="w-full mb-10">
            <p className="pretitle text-primary">Press & Media</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Latest News & Announcements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Read official press releases, product updates, and platform compliance milestones.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200 mb-20">
            {pressReleases.map((pr) => (
              <article key={pr.title} className="py-7 flex flex-col md:flex-row md:items-start justify-between gap-6 group">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="font-semibold text-primary">{pr.category}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-neutral-500">{pr.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {pr.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {pr.summary}
                  </p>
                </div>
                <div className="shrink-0 pt-2">
                  <a
                    href="mailto:press@sqalible.com?subject=Press%20Inquiry:%20"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-teal-700"
                  >
                    Request Full Release
                    <ArrowRightIcon size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Section: Media Kit & Accessible Resources */}
          <div className="pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="pretitle text-primary">Media Kit</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Official Brand Assets & Resources
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-600">
                  Download approved logo packs, product screenshots, and executive materials for media publication.
                </p>
              </div>

              {/* Direct Media Contact Box */}
              <div className="rounded-none border border-neutral-200 bg-[#FAFAFA] p-4 text-xs shrink-0">
                <p className="font-bold text-neutral-900">Media Inquiries</p>
                <a href="mailto:press@sqalible.com" className="text-primary hover:underline font-semibold block mt-0.5">
                  press@sqalible.com
                </a>
              </div>
            </div>

            {/* Accessible Resource Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mediaResources.map((res) => (
                <div
                  key={res.title}
                  className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                        <FileTextIcon size={20} />
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                        {res.size}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug">{res.title}</h3>
                    <p className="text-[11px] font-semibold text-primary mt-1">{res.format}</p>
                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">{res.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <a
                      href={res.href}
                      download={res.downloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-50 hover:bg-teal-50 border border-neutral-200 hover:border-teal-300 py-2.5 text-xs font-semibold text-neutral-800 hover:text-primary transition-all"
                    >
                      <DownloadIcon size={14} />
                      Download Resource
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection
        faqs={pressFaqs}
        title="Frequently Asked Questions for Press & Media"
        pretitle="Media Inquiries FAQs"
        className="bg-[#FAFAFA] py-16 md:py-24"
      />
    </>
  );
}

const pressFaqs = [
  {
    q: "Who should journalists and media outlets contact for press statements?",
    a: "For all press inquiries, interview requests, or quote attributions, please reach out directly to our communications desk at press@sqalible.com. We respond within 2 hours during business days."
  },
  {
    q: "Can publications schedule an interview with Sqalible's founders or leadership?",
    a: "Yes. Keyur Mehta (Managing Director), Dishant Mehta (CTO), and our VP of AI regularly participate in technology podcasts, HR industry panels, and press interviews discussing AI-native HRMS architecture and workforce ethics."
  },
  {
    q: "Where can we download approved logos, high-res UI screenshots, and executive headshots?",
    a: "All brand assets, high-resolution platform UI captures, executive photography, and the official 2026 Company Fact Sheet are available directly in the Media Kit section on this page with one-click downloads."
  },
  {
    q: "What are the rules regarding the use of the Sqalible trademark and brand name?",
    a: "The correct spelling is 'Sqalible' (single 'u'). Please do not alter the logo aspect ratio, distort brand colors, or overlay the mark onto low-contrast backgrounds. High-res vector SVGs and PNG guidelines are provided in the kit."
  }
];

/* =========================================================================
   Partners View Component
   ========================================================================= */
function PartnersView() {
  return (
    <>
      <section className="bg-white py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-12">
            <p className="pretitle text-primary">Ecosystem</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Partner Programmes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Work with Sqalible to deliver intelligent HR operations, seamless migrations, and integrations for global clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyPages.partners.types.map((t) => (
              <div key={t.title} className="flex flex-col justify-between rounded-none border border-neutral-200 bg-[#FAFAFA] p-8 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{t.title}</h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">{t.text}</p>
                </div>
                <a href="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-teal-700">
                  Become a partner
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection
        faqs={partnersFaqs}
        title="Frequently Asked Questions about Partnering with Sqalible"
        pretitle="Partnership FAQs"
        className="bg-[#FAFAFA] py-16 md:py-24"
      />
    </>
  );
}

const partnersFaqs = [
  {
    q: "What types of partnership programmes does Sqalible support?",
    a: "We offer three primary partner tracks: Technology Alliances (REST API & biometric hardware integrations), Implementation & Consulting Partners (HR consulting firms migrating enterprise clients), and Referral Affiliates (consultants recommending Sqalible with recurring revenue shares)."
  },
  {
    q: "What commercial incentives or revenue sharing is provided to partners?",
    a: "Certified implementation partners receive up to 25% recurring margin on software subscriptions for the first year, retain 100% of their customer implementation fees, and get co-marketing lead generation support."
  },
  {
    q: "Do partners receive training, sandboxes, and dedicated support?",
    a: "Yes. All partners receive complimentary developer sandboxes, access to Sqalible Academy certification, pre-sales architectural collateral, and a dedicated partner success manager."
  },
  {
    q: "How long does partner onboarding and certification take?",
    a: "Most consulting and implementation partners complete online certification and sandbox training within 2 weeks, allowing them to begin pitching and deploying Sqalible to their clients immediately."
  }
];