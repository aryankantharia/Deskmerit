import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { useCurrency } from "../utils/currencyContext";
import {
  ShieldCheck,
  Check,
  Building,
  CreditCard,
  WifiOff,
  Headphones,
  ArrowRight,
  HelpCircle,
  FileText,
  Clock,
  Globe2,
} from "lucide-react";

interface RegionConfig {
  code: string;
  currency: "INR" | "USD" | "AUD" | "NZD" | "AED" | "SAR";
  badge: string;
  name: string;
  heroTitle: string;
  heroAccent: string;
  heroDesc: string;
  planName: string;
  priceDisplay: string;
  priceSub: string;
  features: string[];
  cards: { title: string; desc: string; icon: any }[];
  guideUrl: string;
  guideTitle: string;
  guideDesc: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSub: string;
  isArabic?: boolean;
}

const REGIONS: Record<string, RegionConfig> = {
  in: {
    code: "in",
    currency: "INR",
    badge: "🇮🇳 INDIA · भारत",
    name: "India",
    heroTitle: "Employee time tracking and monitoring software,",
    heroAccent: "built in India for Indian teams.",
    heroDesc:
      "From IT services in Bengaluru and Pune to agencies in Mumbai and BPOs in Gurugram, Deskmerit gives Indian companies accurate attendance, billable utilisation and productivity data — priced in rupees and designed for India’s new data protection rules.",
    planName: "Pro Plan in India",
    priceDisplay: "₹299",
    priceSub: "/ user / month · Billed annually with GST invoice",
    features: [
      "Tracker Plus for Jira, Azure DevOps & OpenProject",
      "Attendance tracking without biometric punch machines",
      "Google & Outlook meeting work time detection",
      "DPDP Act compliant employee transparency notices",
      "GST tax invoice with input credit support",
    ],
    cards: [
      {
        title: "Priced in INR, invoiced with GST",
        desc: "Pay in rupees by UPI, card or bank transfer, with GST-compliant tax invoices. Pro ₹299 and Premium ₹499 per user per month.",
        icon: CreditCard,
      },
      {
        title: "Ready for the DPDP Act",
        desc: "The DPDP Rules were notified on 13 Nov 2025; core obligations apply from May 2027. Deskmerit ships clear employee notices and erasure on request.",
        icon: ShieldCheck,
      },
      {
        title: "Made for IT services & staffing",
        desc: "Tracker Plus starts time directly from your client’s Jira or Azure DevOps ticket — the way Indian delivery teams already work.",
        icon: Building,
      },
      {
        title: "Built into Sqalible HRMS",
        desc: "Already on Sqalible? Turn Deskmerit on in one click from your admin console and keep a single consolidated vendor invoice.",
        icon: Check,
      },
      {
        title: "Patchy Wi-Fi? Still tracked.",
        desc: "Offline tracking queues on the laptop and syncs without any gaps when broadband or mobile hotspot reconnects.",
        icon: WifiOff,
      },
      {
        title: "Support in your hours",
        desc: "Dedicated onboarding, SLA response and customer success from Kombee's engineering team in Pune & Bengaluru in IST.",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/india",
    guideTitle: "Employee monitoring in India, explained.",
    guideDesc:
      "Our plain-English guide covers employee notices, consent rules and what you can and can't track under India's DPDP Act 2023 — with a free monitoring policy template.",
    faqs: [
      {
        q: "Is employee monitoring legal in India?",
        a: "Generally yes, when employees are properly informed and tracking is limited strictly to legitimate work purposes. Deskmerit provides clear DPDP-compliant notice templates.",
      },
      {
        q: "Do you offer INR billing and GST tax invoices?",
        a: "Yes, on all paid plans. You can pay via UPI, Indian credit/debit cards, or NEFT/RTGS bank transfer with GST details listed.",
      },
      {
        q: "Does it work for work-from-home teams?",
        a: "Yes! Deskmerit's native agent queues sessions on the computer and syncs when broadband or mobile hotspots reconnect.",
      },
      {
        q: "Can we host data in India?",
        a: "Yes, Enterprise customers can choose the AWS Mumbai (ap-south-1) data residency region.",
      },
    ],
    ctaTitle: "Start tracking in rupees today.",
    ctaSub: "14-day free trial, GST invoices, support in IST.",
  },
  au: {
    code: "au",
    currency: "AUD",
    badge: "🇦🇺 AUSTRALIA",
    name: "Australia",
    heroTitle: "Transparent timesheet & workforce tracking,",
    heroAccent: "built for Australian workplace law.",
    heroDesc:
      "Compliant time tracking for Australian tech companies, consultancies and engineering agencies across Sydney, Melbourne, Brisbane and Perth. Fully aligned with Fair Work record-keeping and state surveillance notices.",
    planName: "Pro Plan in Australia",
    priceDisplay: "A$8",
    priceSub: "/ user / month · Billed annually with ABN tax invoice",
    features: [
      "NSW Workplace Surveillance Act 14-day notice support",
      "Fair Work Act overtime & maximum weekly hours records",
      "Integrated Jira, Azure DevOps & OpenProject ticket timer",
      "AEST/AEDT and AWST dedicated timezone support",
      "Australian Dollar (A$) local invoicing",
    ],
    cards: [
      {
        title: "NSW Surveillance Act Ready",
        desc: "Easily provide the mandatory 14-day prior written notice required under NSW and ACT surveillance legislation with built-in templates.",
        icon: ShieldCheck,
      },
      {
        title: "Fair Work Compliance",
        desc: "Accurate, tamper-proof work hour records that satisfy Fair Work Ombudsman standards for overtime, breaks and ordinary hours.",
        icon: FileText,
      },
      {
        title: "Sydney & Melbourne Cloud Residency",
        desc: "Optionally store telemetry within AWS Sydney (ap-southeast-2) for strict data residency and sovereign compliance.",
        icon: Building,
      },
      {
        title: "A$ Invoicing & Fast Payouts",
        desc: "Pay directly in Australian Dollars with ABN/GST-compliant invoicing and easy credit card or direct debit processing.",
        icon: CreditCard,
      },
      {
        title: "Transparent, Not Creepy",
        desc: "No keystroke logging, no hidden webcam recording. Employees can pause for Private Time whenever taking personal breaks.",
        icon: Clock,
      },
      {
        title: "Local Australian Hours",
        desc: "Rapid SLA customer success and onboarding aligned with Sydney and Melbourne business hours.",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/australia",
    guideTitle: "Employee monitoring laws in Australia, explained.",
    guideDesc:
      "A comprehensive guide on surveillance laws in NSW, Victoria, ACT and Queensland, detailing employer consent obligations and employee privacy rights.",
    faqs: [
      {
        q: "What are the rules for workplace surveillance in Australia?",
        a: "Under state laws like NSW Workplace Surveillance Act 2005, employers must provide at least 14 days written notice before computer monitoring begins. Deskmerit provides automated notice generation.",
      },
      {
        q: "Do you bill in Australian Dollars (AUD)?",
        a: "Yes, you can pay in AUD with tax invoices showing GST.",
      },
      {
        q: "Can Australian data be stored locally?",
        a: "Yes, our enterprise tier supports dedicated AWS Sydney data residency.",
      },
    ],
    ctaTitle: "Start your Australian trial today.",
    ctaSub: "14-day free trial, AUD pricing, NSW Surveillance Act ready.",
  },
  nz: {
    code: "nz",
    currency: "NZD",
    badge: "🇳🇿 NEW ZEALAND · AOTEAROA",
    name: "New Zealand",
    heroTitle: "Ethical time tracking and productivity software,",
    heroAccent: "tailored for New Zealand privacy standards.",
    heroDesc:
      "Built for kiwi engineering firms, creative agencies and distributed teams from Auckland to Christchurch. Compliant with the New Zealand Privacy Act 2020 Information Privacy Principles.",
    planName: "Pro Plan in New Zealand",
    priceDisplay: "NZ$9",
    priceSub: "/ user / month · Billed annually with NZ GST invoice",
    features: [
      "NZ Privacy Act 2020 12 Information Privacy Principles adherence",
      "Holidays Act 2003 hours tracking support",
      "Zero intrusive spyware: screenshots blurred by default",
      "NZST/NZDT timezone native scheduling",
      "NZD local currency billing",
    ],
    cards: [
      {
        title: "NZ Privacy Act 2020 Compliant",
        desc: "Respects employee privacy principles: lawful collection, open notification, employee right to access and correct their records.",
        icon: ShieldCheck,
      },
      {
        title: "Holidays Act Records",
        desc: "Provides verifiable actual daily hours worked to ensure accurate ordinary weekly pay and relevant daily pay calculations.",
        icon: FileText,
      },
      {
        title: "Kiwi Tech Agency Focus",
        desc: "Syncs directly with Jira and Azure DevOps to capture billable contractor hours without paperwork headaches.",
        icon: Building,
      },
      {
        title: "NZD Transparent Pricing",
        desc: "Clear per-seat pricing in New Zealand Dollars with IRD-friendly GST receipts.",
        icon: CreditCard,
      },
      {
        title: "Empowering Private Time",
        desc: "One-click private break mode so personal banking or health tasks during remote work stay completely off the record.",
        icon: Clock,
      },
      {
        title: "Auckland & Wellington Friendly",
        desc: "Fast setup and local timezone support tailored for New Zealand business days.",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/new-zealand",
    guideTitle: "New Zealand employee monitoring guide.",
    guideDesc:
      "Understand the Privacy Commissioner's guidelines for computer monitoring in NZ, including transparency and fairness obligations.",
    faqs: [
      {
        q: "Is workplace monitoring permitted in New Zealand?",
        a: "Yes, provided it is for a lawful work purpose, communicated clearly in advance, and proportional under the Privacy Act 2020.",
      },
      {
        q: "Do employees have the right to see their tracked data?",
        a: "Yes! Principle 6 of the Privacy Act gives individuals access to personal information held about them. Deskmerit gives every worker full access to their own timesheets.",
      },
    ],
    ctaTitle: "Try Deskmerit in New Zealand.",
    ctaSub: "14-day free trial, NZD pricing, zero spyware.",
  },
  ae: {
    code: "ae",
    currency: "AED",
    badge: "🇦🇪 UAE · UNITED ARAB EMIRATES",
    name: "UAE",
    heroTitle: "Workforce attendance & time tracking software,",
    heroAccent: "engineered for Dubai, Abu Dhabi & GCC teams.",
    heroDesc:
      "Accurate attendance, shift adherence and billable hours for UAE enterprises, IT consulting hubs and freezone companies. Fully adaptable to Monday–Friday or Sunday–Thursday working patterns.",
    planName: "Pro Plan in UAE",
    priceDisplay: "AED 22",
    priceSub: "/ user / month · Billed annually with VAT tax invoice",
    features: [
      "UAE Federal Decree-Law No. 33 of 2021 (Labour Law) aligned",
      "Flexible weekends: Monday–Friday & Sunday–Thursday rosters",
      "Ramadan reduced working hours schedule templates",
      "Dubai & Abu Dhabi freezone multi-branch reporting",
      "AED local billing & VAT invoice support",
    ],
    cards: [
      {
        title: "UAE Labour Law Ready",
        desc: "Maintain verifiable work hour records compliant with UAE Ministry of Human Resources and Emiratisation (MOHRE) guidelines.",
        icon: ShieldCheck,
      },
      {
        title: "Custom GCC Rosters",
        desc: "Switch between standard UAE Mon–Fri workweeks or regional Sun–Thu business schedules in a single click.",
        icon: Clock,
      },
      {
        title: "Freezone & Mainland Suited",
        desc: "Deployed by teams across DIFC, ADGM, Dubai Internet City, and mainland professional service providers.",
        icon: Building,
      },
      {
        title: "AED Direct Billing",
        desc: "Pay in UAE Dirhams with 5% VAT compliant tax invoices and multi-currency billing.",
        icon: CreditCard,
      },
      {
        title: "Offline Syncing for Consultants",
        desc: "Travelling between client offices or flights? Deskmerit records time offline and syncs securely on reconnection.",
        icon: WifiOff,
      },
      {
        title: "Middle East Timezone Support",
        desc: "GST (UTC+4) support hours and dedicated regional enterprise onboarding.",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/uae",
    guideTitle: "Employee monitoring laws in the UAE, explained.",
    guideDesc:
      "Learn about workplace surveillance, employee consent, and personal data protection under UAE federal legislation and DIFC/ADGM data regulations.",
    faqs: [
      {
        q: "Is employee monitoring legal in the UAE?",
        a: "Yes, monitoring employer-provided equipment for business purposes is standard in the UAE when disclosed in employment contracts or internal handbooks.",
      },
      {
        q: "Does Deskmerit support Ramadan working hours?",
        a: "Yes, our shift scheduler easily adjusts maximum daily hours to comply with statutory Ramadan reductions.",
      },
    ],
    ctaTitle: "Start your UAE trial today.",
    ctaSub: "14-day free trial, AED pricing, GCC shift presets.",
  },
  sa: {
    code: "sa",
    currency: "SAR",
    badge: "🇸🇦 SAUDI ARABIA · المملكة العربية السعودية",
    name: "Saudi Arabia",
    heroTitle: "Employee time tracking & productivity software,",
    heroAccent: "designed for Saudi Vision 2030 enterprises.",
    heroDesc:
      "Enterprise attendance, billable client hours and productivity intelligence for companies in Riyadh, Jeddah and Dammam. Built with Saudi Personal Data Protection Law (PDPL) compliance.",
    planName: "Pro Plan in Saudi Arabia",
    priceDisplay: "SAR 25",
    priceSub: "/ user / month · Billed annually with ZATCA-ready tax invoice",
    features: [
      "Saudi PDPL (Personal Data Protection Law) compliance",
      "Sunday–Thursday standard Saudi workweek configuration",
      "Integration with Jira, Azure DevOps & Sqalible HRMS",
      "Saudi Labor Law overtime & attendance audit trails",
      "SAR local billing & ZATCA e-invoicing readiness",
    ],
    cards: [
      {
        title: "Saudi PDPL Compliant",
        desc: "Built in adherence to Saudi Data & AI Authority (SDAIA) regulations regarding employee privacy and purpose limitation.",
        icon: ShieldCheck,
      },
      {
        title: "Sunday–Thursday Week Presets",
        desc: "Preconfigured for the Saudi business week with automatic weekend overtime and holiday detection.",
        icon: Clock,
      },
      {
        title: "ZATCA Ready Invoicing",
        desc: "Compliant Saudi Riyal (SAR) invoicing with standard 15% VAT details for streamlined tax reconciliation.",
        icon: CreditCard,
      },
      {
        title: "Vision 2030 Digital Delivery",
        desc: "Empowering fast-growing Saudi consulting firms, tech startups, and government contractors with verifiable proof of work.",
        icon: Building,
      },
      {
        title: "Privacy-First Architecture",
        desc: "Ethical monitoring with no keystroke eavesdropping and optional blurred screenshots for maximum employee trust.",
        icon: ShieldCheck,
      },
      {
        title: "KSA Timezone Assistance",
        desc: "Dedicated Arabic & English customer onboarding in Arabia Standard Time (AST, UTC+3).",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/saudi-arabia",
    guideTitle: "Employee monitoring laws in Saudi Arabia.",
    guideDesc:
      "Discover employer rights and compliance requirements under the Saudi Labor Law and PDPL regulations issued by SDAIA.",
    faqs: [
      {
        q: "Does Deskmerit comply with Saudi PDPL?",
        a: "Yes. Deskmerit implements strict data minimization, purpose limitation, encryption, and employee notification.",
      },
      {
        q: "Does the software support the Saudi Sunday-to-Thursday week?",
        a: "Yes, by default for all Saudi accounts, with custom work calendars available.",
      },
    ],
    ctaTitle: "Start tracking in Saudi Arabia.",
    ctaSub: "14-day free trial, SAR pricing, Sunday–Thursday workweek.",
  },
  ar: {
    code: "ar",
    currency: "SAR",
    badge: "🇸🇦 🇦🇪 النسخة العربية · ARABIC EDITION",
    name: "Arabic Home",
    heroTitle: "برنامج مراقبة وتتبع وقت الموظفين الأكثر موثوقية،",
    heroAccent: "مصمم للشركات الحديثة في الخليج والشرق الأوسط.",
    heroDesc:
      "تتبع تلقائي لساعات العمل، إدارة الحضور والانصراف، وقياس الإنتاجية بدقة مع احترام خصوصية الموظفين والتوافق الكامل مع قوانين العمل وأنظمة حماية البيانات الشخصية في السعودية والإمارات.",
    planName: "باقة برو للشركات",
    priceDisplay: "25 ر.س",
    priceSub: "/ للمستخدم / شهرياً · إصدار فواتير ضريبية معتمدة",
    features: [
      "تتبع الوقت التلقائي دون تعطيل عمل الموظفين",
      "بدء التتبع مباشرة من تذاكر Jira و Azure DevOps",
      "حماية الخصوصية: لقطات شاشة مموهة ودون تسجيل ضغطات المفاتيح",
      "إعدادات أسبوع العمل من الأحد إلى الخميس أو الاثنين إلى الجمعة",
      "دعم كامل للغة العربية والعملات المحلية (ريال سعودي / درهم إماراتي)",
    ],
    cards: [
      {
        title: "متوافق مع نظام حماية البيانات الشخصية (PDPL)",
        desc: "نظام تتبع يحمي خصوصية الموظف ويوفر إشعارات شفافة وإمكانية تفعيل الاستراحة الخاصة في أي لحظة.",
        icon: ShieldCheck,
      },
      {
        title: "دعم أسبوع العمل الخليجي",
        desc: "جاهز تلقائياً للدوام من الأحد إلى الخميس، مع حساب ساعات العمل الإضافية وإجازات الأعياد وشهر رمضان.",
        icon: Clock,
      },
      {
        title: "تكامل مباشر مع نظام Sqalible HRMS",
        desc: "ربط فوري بين تسجيل الحضور والانصراف ومسيرات الرواتب بضغطة زر واحدة ودون الحاجة لإدخال يدوي.",
        icon: Check,
      },
      {
        title: "فواتير ضريبية بالريال والدرهم",
        desc: "دفع مرن بالعملة المحلية مع فواتير ضريبية متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA).",
        icon: CreditCard,
      },
      {
        title: "يعمل دون انقطاع حتى بدون إنترنت",
        desc: "يقوم التطبيق بتسجيل ساعات العمل على جهاز الكمبيوتر محلياً ومزامنتها فور عودة الاتصال دون فقدان أي دقيقة.",
        icon: WifiOff,
      },
      {
        title: "دعم فني واستشارات متخصصة",
        desc: "فريق دعم فني متواجد خلال ساعات العمل الرسمية لتقديم المساعدة والتدريب لفرق العمل.",
        icon: Headphones,
      },
    ],
    guideUrl: "/guides/employee-monitoring-laws/saudi-arabia",
    guideTitle: "دليل قوانين مراقبة الموظفين في السعودية والخليج",
    guideDesc:
      "دليل شامل يشرح حقوق صاحب العمل والتزامات الإشعار والشفافية وفقاً لنظام العمل ولائحة حماية البيانات الشخصية.",
    faqs: [
      {
        q: "هل برنامج Deskmerit متوافق مع نظام العمل السعودي والإماراتي؟",
        a: "نعم، تم تصميم Deskmerit ليكون متوافقاً تماماً مع أحكام تنظيم ساعات العمل والإشعار بالرقابة الرقمية للأنشطة الوظيفية المشروعة.",
      },
      {
        q: "هل يمكن للموظف إيقاف التتبع أثناء فترات الراحة الخاصة؟",
        a: "نعم، يتميز البرنامج بزر 'الوقت الخاص' (Private Time) الذي يسمح للموظف بإيقاف التسجيل تماماً عند استخدام الجهاز لأغراض شخصية.",
      },
    ],
    ctaTitle: "ابدأ تجربتك المجانية لمدة 14 يوماً الآن.",
    ctaSub: "بدون بطاقة ائتمانية، إعداد سريع خلال دقائق، ودعم كامل للشركات العربية.",
    isArabic: true,
  },
};

export function IndiaPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const { setCurrencyCode } = useCurrency();

  // Determine active region from URL path
  let activeKey = "in";
  if (path.includes("/ar") || path === "/ar/") {
    activeKey = "ar";
  } else if (path.includes("/en-au") || path.includes("/australia")) {
    activeKey = "au";
  } else if (path.includes("/en-nz") || path.includes("/new-zealand")) {
    activeKey = "nz";
  } else if (path.includes("/en-ae") || path.includes("/uae")) {
    activeKey = "ae";
  } else if (path.includes("/en-sa") || path.includes("/saudi-arabia")) {
    activeKey = "sa";
  }

  const region = REGIONS[activeKey] || REGIONS.in;

  useEffect(() => {
    setCurrencyCode(region.currency);
  }, [region.currency, setCurrencyCode]);

  return (
    <div
      className={`min-h-screen bg-[#F7F4EE] text-[#0F1730] ${
        region.isArabic ? "font-sans" : ""
      }`}
      dir={region.isArabic ? "rtl" : "ltr"}
    >
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb & Language/Region Selector */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#4A5370]">
            <div className="flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#0F1730]">
                {region.isArabic ? "الرئيسية" : "Home"}
              </Link>
              <span>/</span>
              <span className="text-[#4A5370]">
                {region.isArabic ? "المناطق" : "Regions"}
              </span>
              <span>/</span>
              <span className="font-semibold text-[#0F1730]">{region.name}</span>
            </div>

            {/* Region Switcher Pills */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                {region.isArabic ? "تغيير المنطقة:" : "Select region:"}
              </span>
              <Link
                to="/en-in/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "in"
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇮🇳 India
              </Link>
              <Link
                to="/en-au/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "au"
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇦🇺 Australia
              </Link>
              <Link
                to="/en-nz/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "nz"
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇳🇿 New Zealand
              </Link>
              <Link
                to="/en-ae/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "ae"
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇦🇪 UAE
              </Link>
              <Link
                to="/en-sa/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "sa"
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇸🇦 Saudi
              </Link>
              <Link
                to="/ar/"
                className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  activeKey === "ar"
                    ? "bg-[#FF5A36] text-white border-[#FF5A36]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                🇸🇦 العربية
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span>{region.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                {region.heroTitle}{" "}
                <span className="text-[#FF5A36] block font-normal">
                  {region.heroAccent}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                {region.heroDesc}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center text-xs font-extrabold text-white bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-md hover:shadow-glow-ember transition-all"
                >
                  {region.isArabic
                    ? "ابدأ التجربة المجانية 14 يوماً ←"
                    : "Start free 14-day trial →"}
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#E6E2D8]/50 border border-[#0F1730] px-6 py-3.5 rounded-[12px] transition-all"
                >
                  {region.isArabic ? "طلب عرض توضيحي" : "Book a demo"}
                </Link>
              </div>

              <p className="text-xs text-[#4A5370]">
                {region.priceDisplay} · {region.priceSub}
              </p>
            </div>

            {/* Right: Regional Pricing Highlight Card */}
            <div className="lg:col-span-5 bg-[#FFFFFF] rounded-[24px] p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E2D8]">
                <span className="text-xs font-bold text-[#0F1730]">
                  {region.planName}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FFE6DF] text-[#C2361A]">
                  {region.isArabic ? "خصم 20% سنوياً" : "Save 20% Annual"}
                </span>
              </div>

              <div className="text-center py-4">
                <div className="text-5xl font-extrabold text-[#0F1730] font-display tnum">
                  {region.priceDisplay}
                </div>
                <div className="text-xs text-[#4A5370] mt-1 font-medium">
                  {region.priceSub}
                </div>
              </div>

              <ul className="space-y-3 py-6 border-t border-[#E6E2D8] text-xs text-[#0F1730]">
                {region.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/signup?plan=pro&region=${region.code}`}
                className="w-full py-3.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center transition-colors shadow-md hover:shadow-glow-ember block"
              >
                {region.isArabic
                  ? "بدء التجربة المجانية الآن"
                  : `Start 14-day free trial in ${region.name}`}
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Reasons Regional Teams Choose Deskmerit */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                {region.isArabic
                  ? "لماذا تختار الشركات في منطقتك Deskmerit"
                  : `Why teams in ${region.name} choose Deskmerit`}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                {region.isArabic
                  ? "دقة محلية حيثما يلزم. ومعايير عالمية في كل تفصيل."
                  : "Local where it matters. World-class everywhere else."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="p-7 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#C2361A] flex items-center justify-center mb-4 border border-[#E6E2D8]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-[#0F1730] mb-2">
                        {c.title}
                      </h3>
                      <p className="text-xs text-[#4A5370] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Guide Callout */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E6E2D8] shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                {region.isArabic ? "الجانب القانوني والامتثال" : "Compliance & Law"}
              </span>
              <h3 className="text-2xl font-bold text-[#0F1730]">
                {region.guideTitle}
              </h3>
              <p className="text-xs text-[#4A5370] max-w-xl leading-relaxed">
                {region.guideDesc}
              </p>
              <div className="text-[11px] text-[#9AA1B2]">
                {region.isArabic
                  ? "معلومات عامة للتوجيه، وليست استشارة قانونية رسمية."
                  : "General information, not formal legal advice."}
              </div>
            </div>

            <Link
              to={region.guideUrl}
              className="px-6 py-3.5 rounded-[12px] bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5"
            >
              {region.isArabic ? "قراءة الدليل القانوني" : "Read the guide"}{" "}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Regional FAQ Section (Deskmerit Standard) */}
        <DeskmeritFaq
          title={region.isArabic ? "الأسئلة الشائعة من الشركات" : "Questions, Answered Honestly"}
          category={region.isArabic ? "الأسئلة الشائعة" : "FAQS"}
          customFaqs={region.faqs}
          helpTitle={region.isArabic ? "تحتاج مساعدة في اختيار الحل المناسب؟" : `Need Help with ${region.name} Compliance & Billing?`}
          helpDescription={region.isArabic ? "تواصل مع خبرائنا لتحديد التكوين الأمثل لفرق العمل والمؤسسات الخاصة بك." : `Speak directly with our regional compliance specialists for custom ${region.currency} billing, GST/VAT invoices, and localized data hosting.`}
        />

        <DeskmeritCtaBand
          title={region.ctaTitle}
          subtitle={region.ctaSub}
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
