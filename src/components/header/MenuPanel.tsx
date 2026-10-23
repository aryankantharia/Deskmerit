import React, { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  UsersIcon,
  TrendingUpIcon,
  LogOutIcon,
  SparklesIcon,
  LayersIcon,
  CpuIcon,
  ShieldCheckIcon,
  BuildingIcon,
  Building2Icon,
  CompassIcon,
  FileTextIcon,
  CalculatorIcon,
  ClockIcon,
  BookOpenIcon,
  ReceiptIcon,
  VideoIcon,
  TargetIcon,
  AwardIcon,
  ScaleIcon,
  GlobeIcon,
  ChevronRightIcon,
  ClipboardCheckIcon,
  MegaphoneIcon,
  FileSearchIcon,
  MicIcon,
  CalendarCheckIcon,
  FileSignatureIcon,
  UserPlusIcon,
  LaptopIcon,
  MilestoneIcon,
  CalendarOffIcon,
  CoinsIcon,
  HeadphonesIcon,
  MessageSquareQuoteIcon,
  ArrowRightLeftIcon,
  GraduationCapIcon,
  CheckSquareIcon,
  ReceiptTextIcon,
  KeyRoundIcon,
  MessageCircleQuestionIcon,
  ExternalLinkIcon,
  BotIcon,
  LineChartIcon,
  TrendingDownIcon,
  PieChartIcon,
  RocketIcon,
  FactoryIcon,
  StethoscopeIcon,
  ShoppingBagIcon,
  LandmarkIcon,
  CloudIcon,
  UserCheckIcon,
  CircleDollarSignIcon,
  ShieldAlertIcon,
  CrownIcon,
  SmartphoneIcon,
  SlidersIcon,
  MapPinIcon,
  BoxesIcon,
  SwordsIcon,
  ZapIcon,
  PresentationIcon,
  QuoteIcon,
  FileStackIcon,
  BadgeDollarSignIcon,
  HourglassIcon,
  LifeBuoyIcon,
  ActivityIcon,
  FlameIcon,
  HeartIcon,
  NewspaperIcon,
  ImageIcon,
  PhoneCallIcon,
  FlagIcon,
  WorkflowIcon,
  LucideIcon
} from "lucide-react";
import { NavLink, NavMenu, NavSubMenu } from "../../types/navigation";

type MenuPanelProps = {
  menu: NavMenu;
  onNavigate: () => void;
};

const DEFAULT_IMAGE = "/dashboards/ai-interview-dashboard.png";

function getCategoryIcon(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (n.includes("hire") || n.includes("talent")) return BriefcaseIcon;
  if (n.includes("onboard")) return UserPlusIcon;
  if (n.includes("manage") || n.includes("people") || n.includes("core hr")) return UsersIcon;
  if (n.includes("grow") || n.includes("perform")) return TrendingUpIcon;
  if (n.includes("exit") || n.includes("separat") || n.includes("offboard")) return LogOutIcon;
  if (n.includes("ai") || n.includes("intellig")) return SparklesIcon;
  if (n.includes("industry")) return Building2Icon;
  if (n.includes("size") || n.includes("startup")) return BuildingIcon;
  if (n.includes("team")) return UsersIcon;
  if (n.includes("region")) return GlobeIcon;
  if (n.includes("differentiation") || n.includes("advantage")) return ZapIcon;
  if (n.includes("compare")) return ScaleIcon;
  if (n.includes("learn") || n.includes("knowledge") || n.includes("blog")) return BookOpenIcon;
  if (n.includes("tool") || n.includes("calc")) return CalculatorIcon;
  if (n.includes("support")) return LifeBuoyIcon;
  if (n.includes("about")) return FlameIcon;
  if (n.includes("career")) return BriefcaseIcon;
  if (n.includes("press") || n.includes("media")) return NewspaperIcon;
  if (n.includes("trust") || n.includes("complian") || n.includes("secur")) return ShieldCheckIcon;
  if (n.includes("partner")) return WorkflowIcon;
  if (n.includes("contact") || n.includes("office")) return MapPinIcon;
  return LayersIcon;
}

const MODULE_ICON_MAP: Record<string, LucideIcon> = {
  // 1. Platform -> Hire
  "Hiring Requests & Approvals": ClipboardCheckIcon,
  "Sourcing & Job Posting": MegaphoneIcon,
  "AI Resume Screening": FileSearchIcon,
  "AI Voice Screening": MicIcon,
  "AI Live Interview": VideoIcon,
  "Interview Management": CalendarCheckIcon,
  "Offer Management": FileSignatureIcon,
  "Referral & Vendor Portals": UserPlusIcon,

  // 1. Platform -> Onboard
  "Pre-boarding & Day One": SparklesIcon,
  "Background Verification": ShieldCheckIcon,
  "IT Provisioning": LaptopIcon,
  "Probation Management": MilestoneIcon,

  // 1. Platform -> Manage
  "Core HR & Employee Records": UsersIcon,
  "Attendance & Shifts": ClockIcon,
  "Leave Management": CalendarOffIcon,
  "Payroll Compliance": CalculatorIcon,
  "Compensation & Benefits": CoinsIcon,
  "Expenses & Claims": ReceiptIcon,
  "HR Helpdesk": HeadphonesIcon,

  // 1. Platform -> Grow
  "Goals & OKRs": TargetIcon,
  "360° Feedback": MessageSquareQuoteIcon,
  "Internal Mobility": ArrowRightLeftIcon,
  "Learning (LMS)": GraduationCapIcon,

  // 1. Platform -> Exit
  "Offboarding & Compliance Gates": CheckSquareIcon,
  "Full & Final Settlement": ReceiptTextIcon,
  "Access Revocation": KeyRoundIcon,
  "Exit Interviews & Alumni": MessageCircleQuestionIcon,
  "Ex-Employee Portal": ExternalLinkIcon,

  // 1. Platform -> AI & Analytics
  "AI HR Assistant": BotIcon,
  "Engagement & Workforce Insights": LineChartIcon,
  "Attrition Risk": TrendingDownIcon,
  "Hiring & Workforce Planning": PieChartIcon,

  // 2. Solutions -> By company size
  "Startups": RocketIcon,
  "Mid-Market": TrendingUpIcon,
  "Enterprise": Building2Icon,

  // 2. Solutions -> By industry
  "IT Services & Staffing": LaptopIcon,
  "Manufacturing": FactoryIcon,
  "Healthcare": StethoscopeIcon,
  "Retail": ShoppingBagIcon,
  "BFSI": LandmarkIcon,
  "SaaS & Technology": CloudIcon,

  // 2. Solutions -> By team
  "For HR Leaders": UserCheckIcon,
  "For Finance": CircleDollarSignIcon,
  "For IT & Security": ShieldAlertIcon,
  "For Leadership": CrownIcon,
  "For Employees": SmartphoneIcon,
  "For Operations": SlidersIcon,

  // 2. Solutions -> By region
  "India": LandmarkIcon,
  "Middle East": Building2Icon,
  "United States": FlagIcon,
  "Europe & UK": GlobeIcon,

  // 3. Why Sqalible -> Differentiation
  "AI-Native vs Legacy HRMS": CpuIcon,
  "Responsible AI Policy": ScaleIcon,

  // 3. Why Sqalible -> Trust & Ecosystem
  "Security & Trust Centre": ShieldCheckIcon,
  "Integrations & Open API": BoxesIcon,

  // 3. Why Sqalible -> Compare
  "Sqalible vs Keka": BotIcon,
  "Sqalible vs Darwinbox": RocketIcon,
  "Sqalible vs greytHR": WorkflowIcon,

  // 4. Resources -> Learn
  "Blog": BookOpenIcon,
  "Guides & eBooks": FileTextIcon,
  "Webinars": PresentationIcon,
  "Customer Stories": QuoteIcon,

  // 4. Resources -> Free tools
  "HR Templates Library": FileStackIcon,
  "Gratuity Calculator": CalculatorIcon,
  "CTC / Salary Calculator": BadgeDollarSignIcon,
  "Notice Pay Calculator": HourglassIcon,

  // 4. Resources -> Support
  "Help Centre": LifeBuoyIcon,
  "Product Updates": SparklesIcon,
  "System Status": ActivityIcon,

  // 5. Company -> About Sqalible
  "Our Story & Mission": FlameIcon,
  "Leadership & Team": UsersIcon,

  // 5. Company -> Careers
  "Open Roles": BriefcaseIcon,
  "Life at Sqalible": HeartIcon,

  // 5. Company -> Partners
  "Partner Programs": WorkflowIcon,
  "Become a Partner": UsersIcon,

  // 5. Company -> Press & Media
  "News & Press Releases": NewspaperIcon,
  "Media Kit & Brand Assets": ImageIcon,

  // 5. Company -> Contact & Offices
  "Sales & Product Inquiries": PhoneCallIcon,
  "Office Locations": MapPinIcon,
};

function getModuleIcon(title: string): LucideIcon {
  if (MODULE_ICON_MAP[title]) {
    return MODULE_ICON_MAP[title];
  }
  const t = title.toLowerCase();
  if (t.includes("voice") || t.includes("audio")) return MicIcon;
  if (t.includes("interview") || t.includes("video")) return VideoIcon;
  if (t.includes("resume") || t.includes("cv") || t.includes("screening")) return FileSearchIcon;
  if (t.includes("job") || t.includes("sourcing") || t.includes("posting")) return MegaphoneIcon;
  if (t.includes("payroll") || t.includes("tax") || t.includes("calc")) return CalculatorIcon;
  if (t.includes("compliance") || t.includes("security") || t.includes("bgv") || t.includes("audit") || t.includes("gdpr")) return ShieldCheckIcon;
  if (t.includes("leave") || t.includes("vacation") || t.includes("pto")) return CalendarOffIcon;
  if (t.includes("shift") || t.includes("attendance") || t.includes("clock") || t.includes("time")) return ClockIcon;
  if (t.includes("compensation") || t.includes("benefit") || t.includes("salary") || t.includes("reward")) return CoinsIcon;
  if (t.includes("expense") || t.includes("claim") || t.includes("reimburse")) return ReceiptIcon;
  if (t.includes("helpdesk") || t.includes("ticket") || t.includes("support")) return HeadphonesIcon;
  if (t.includes("okr") || t.includes("goal") || t.includes("target")) return TargetIcon;
  if (t.includes("feedback") || t.includes("review") || t.includes("360")) return MessageSquareQuoteIcon;
  if (t.includes("mobility") || t.includes("transfer") || t.includes("pathway")) return ArrowRightLeftIcon;
  if (t.includes("learning") || t.includes("lms") || t.includes("course") || t.includes("training")) return GraduationCapIcon;
  if (t.includes("analytics") || t.includes("telemetry") || t.includes("insight")) return LineChartIcon;
  if (t.includes("attrition") || t.includes("risk") || t.includes("churn")) return TrendingDownIcon;
  if (t.includes("plan") || t.includes("forecast") || t.includes("headcount")) return PieChartIcon;
  if (t.includes("settlement") || t.includes("gratuity")) return ReceiptTextIcon;
  if (t.includes("revocation") || t.includes("deprovision") || t.includes("lock")) return KeyRoundIcon;
  if (t.includes("alumni") || t.includes("exit")) return MessageCircleQuestionIcon;
  if (t.includes("doc") || t.includes("template") || t.includes("letter") || t.includes("contract")) return FileTextIcon;
  if (t.includes("people") || t.includes("employee") || t.includes("team")) return UsersIcon;
  if (t.includes("startup")) return RocketIcon;
  if (t.includes("enterprise")) return Building2Icon;
  if (t.includes("manufactur")) return FactoryIcon;
  if (t.includes("health") || t.includes("clinic") || t.includes("hospital")) return StethoscopeIcon;
  if (t.includes("retail") || t.includes("store")) return ShoppingBagIcon;
  if (t.includes("bank") || t.includes("bfsi") || t.includes("finance")) return LandmarkIcon;
  if (t.includes("tech") || t.includes("saas") || t.includes("cloud") || t.includes("software")) return CloudIcon;
  return SparklesIcon;
}

function getCustomerStory(categoryName: string, fallbackImg?: string) {
  const n = categoryName.toLowerCase();
  if (n.includes("hire")) {
    return {
      title: "How scaling scaleups screen 10x faster with zero calendar scheduling delays",
      href: "/platform/ai-live-interview",
      image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
    };
  }
  if (n.includes("onboard")) {
    return {
      title: "Paperless onboarding workflows and instant IT provisioning from day one",
      href: "/platform/onboarding",
      image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
    };
  }
  if (n.includes("manage")) {
    return {
      title: "How Taazaa cut monthly payroll processing from 168 hours to 1 hour",
      href: "/platform/payroll-compliance",
      image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
    };
  }
  if (n.includes("grow")) {
    return {
      title: "Driving continuous OKR alignment and transparent 360 reviews across 5,000+ staff",
      href: "/platform/performance",
      image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
    };
  }
  if (n.includes("exit")) {
    return {
      title: "Zero statutory risk: 100% automated asset recovery & compliant F&F settlement",
      href: "/platform/separation",
      image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
    };
  }
  if (n.includes("ai")) {
    return {
      title: "Sub-second workforce telemetry without public LLM data leakage",
      href: "/platform/ai-analytics",
      image: "/dashboards/ai-interview-dashboard.png"
    };
  }
  return {
    title: "Scaling from 10 to 1,000+ employees with zero administrative bloat",
    href: "/solutions",
    image: fallbackImg || "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
  };
}

export function MenuPanel({ menu, onNavigate }: MenuPanelProps) {
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  useEffect(() => {
    setActiveSubIndex(0);
  }, [menu.key]);

  const safeSubIndex = activeSubIndex < menu.subMenus.length ? activeSubIndex : 0;
  const activeSub = menu.subMenus[safeSubIndex] || menu.subMenus[0];

  if (!activeSub) return null;

  return (
    <div className="w-full bg-white text-neutral-900 border-t border-neutral-100 select-none">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-stretch gap-6 min-h-[360px]">
          {/* 1. Left Sidebar: Categories/Suites matching original design */}
          <div className="w-56 xl:w-64 shrink-0 border-r border-neutral-200/80 pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-3 pb-2.5">
              {menu.name.toUpperCase()}
            </p>
            <div className="space-y-1">
              {menu.subMenus.map((sub, idx) => {
                const isActive = idx === safeSubIndex;
                const Icon = getCategoryIcon(sub.name);
                return (
                  <button
                    key={sub.name}
                    type="button"
                    onClick={() => setActiveSubIndex(idx)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-teal-50 text-primary font-bold shadow-2xs border border-primary/25"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 ${
                        isActive ? "bg-primary text-white" : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold truncate">{sub.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Banner + 2-Column Submodules Feature Grid (Keka style) */}
          <div className="flex-1 px-4 lg:px-6 flex flex-col justify-start">
            {/* Dark Top Banner Box with sharp edges */}
            <div className="bg-[#0A0E17] text-white px-5 py-3.5 rounded-none mb-5 flex items-center justify-between shadow-xs">
              <div>
                <a
                  href={activeSub.href || "#"}
                  onClick={onNavigate}
                  className="text-sm font-bold text-white hover:text-teal-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>{activeSub.name}</span>
                  <span className="text-teal-400 font-extrabold">›</span>
                </a>
                <p className="text-xs text-neutral-300 mt-0.5 line-clamp-1">
                  {activeSub.description || "Meet the platform tailored to your business"}
                </p>
              </div>
            </div>

            {/* 2-Column Grid of submodules with icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
              {activeSub.links.map((link) => {
                const ModIcon = getModuleIcon(link.title);
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={onNavigate}
                    className="group flex items-start gap-3 p-2.5 rounded-none hover:bg-teal-50/40 hover:border-teal-500/20 border border-transparent transition-all cursor-pointer text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                      <ModIcon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors">
                          {link.title}
                        </span>
                        {link.flag && (
                          <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[9px] font-bold">
                            {link.flag}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-neutral-500 line-clamp-1 mt-0.5 leading-snug">
                        {link.description || "Intelligent workforce operations"}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Customer Story Card with sharp edges */}
          <div className="w-72 xl:w-84 shrink-0 pl-6 border-l border-neutral-200/80 hidden lg:flex flex-col">
            {(() => {
              const story = getCustomerStory(activeSub.name, activeSub.image);
              return (
                <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-none bg-neutral-900 group flex flex-col justify-end shadow-md">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative p-6 text-white flex flex-col justify-end">
                    <span className="pretitle text-teal-400 text-[10px] tracking-wider mb-2">
                      Customer Story
                    </span>
                    <h4 className="text-sm xl:text-base font-bold text-white leading-snug">
                      {story.title}
                    </h4>
                    <a
                      href={story.href}
                      onClick={onNavigate}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                    >
                      <span>Read customer story</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}