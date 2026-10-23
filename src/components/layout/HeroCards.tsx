import React from "react";
import {
  ShieldCheckIcon,
  LockIcon,
  CheckCircle2Icon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
  ActivityIcon,
  DatabaseIcon,
  CpuIcon,
  ScaleIcon,
  LayersIcon,
  FileTextIcon,
  MicIcon,
  HeadphonesIcon,
  KeyRoundIcon,
  CheckIcon,
  ExternalLinkIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  HelpCircleIcon,
  MoreVerticalIcon,
  PlusIcon,
  EditIcon,
  Trash2Icon,
  PieChartIcon,
  UserIcon
} from "lucide-react";

/* =========================================================================
   1. HIRING REQUESTS & APPROVALS HERO CARD
   Styled exactly like the Horilla HRMS reference screenshots:
   - Clean white card with soft shadow
   - Top tab pills: "Self Requisition" / "All Requisitions" in Horilla teal (#008B8B)
   - Table with #F1F5F9 header and crisp dark typography
   - Horilla status badges (● Requested in amber, ● Approved in emerald)
   - Square action buttons (green check, red cross, teal edit)
   ========================================================================= */
export function HiringRequestsHeroCard() {
  const requisitions = [
    {
      title: "Senior QA Engineer",
      roleCode: "EMP-QA-084",
      dept: "QA Engineering",
      manager: "Twin Admin",
      priority: "Medium",
      status: "Requested",
      statusTone: "amber",
      date: "Oct. 21, 2026"
    },
    {
      title: "Lead Cloud Architect",
      roleCode: "EMP-INF-092",
      dept: "Platform Infra",
      manager: "Priya Nair",
      priority: "High",
      status: "Approved",
      statusTone: "emerald",
      date: "Oct. 20, 2026"
    },
    {
      title: "Senior AI Engineer",
      roleCode: "EMP-AI-077",
      dept: "Applied Intelligence",
      manager: "Dishant M.",
      priority: "Urgent",
      status: "Approved",
      statusTone: "emerald",
      date: "Oct. 19, 2026"
    },
    {
      title: "Staff Product Designer",
      roleCode: "EMP-UX-065",
      dept: "Design & UX",
      manager: "Zil Mehta",
      priority: "Medium",
      status: "Requested",
      statusTone: "amber",
      date: "Oct. 19, 2026"
    }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-2 sm:p-2.5 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm">
      {/* Top Tab Bar matching Horilla Screenshot 1 */}
      <div>
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[11px] font-semibold text-[#475569] hover:text-[#1E293B] cursor-pointer">
              Self Requests
            </span>
            <span className="px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#008B8B] rounded-md shadow-xs">
              All Requests
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold">
              14 Active
            </span>
            <button className="h-5 w-5 rounded flex items-center justify-center text-[#64748B] hover:bg-[#F1F5F9]">
              <MoreVerticalIcon size={13} />
            </button>
          </div>
        </div>

        {/* Table matching Horilla Reference Screenshot 1 & 5 */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2 py-1 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-4">ROLE / TITLE</div>
            <div className="col-span-3">DEPARTMENT</div>
            <div className="col-span-2 hidden sm:block">REQUESTED BY</div>
            <div className="col-span-3 sm:col-span-2 text-center">STATUS</div>
            <div className="col-span-2 sm:col-span-1 text-right">ACTIONS</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F1F5F9]">
            {requisitions.map((req, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center px-2 py-1.5 text-[10px] hover:bg-[#F8FAFC] transition-colors"
              >
                {/* Role / Title with bold title */}
                <div className="col-span-4 min-w-0 pr-1">
                  <p className="font-bold text-[#1E293B] truncate leading-tight">{req.title}</p>
                  <p className="text-[9px] text-[#64748B] font-mono">{req.roleCode}</p>
                </div>

                {/* Department pill */}
                <div className="col-span-3 text-[#475569] text-[10px] truncate pr-1">
                  <span className="inline-block max-w-full px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[9px] font-medium truncate">
                    {req.dept}
                  </span>
                </div>

                {/* Requested By with Avatar */}
                <div className="col-span-2 hidden sm:flex items-center gap-1.5 text-[#475569] text-[10px]">
                  <div className="h-4 w-4 rounded-full bg-[#334155] text-white flex items-center justify-center text-[8px] font-bold">
                    {req.manager.charAt(0)}
                  </div>
                  <span className="truncate">{req.manager}</span>
                </div>

                {/* Status Badge matching Horilla ● amber/emerald */}
                <div className="col-span-3 sm:col-span-2 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-semibold ${
                      req.statusTone === "emerald"
                        ? "bg-[#ECFDF5] text-[#047857]"
                        : "bg-[#FEF9C3] text-[#B45309]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        req.statusTone === "emerald" ? "bg-[#10B981]" : "bg-[#F59E0B]"
                      }`}
                    />
                    <span className="truncate">{req.status}</span>
                  </span>
                </div>

                {/* Actions matching Horilla square buttons */}
                <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-1">
                  <button
                    title="Approve"
                    className="h-5 w-5 rounded bg-[#ECFDF5] text-[#10B981] hover:bg-[#D1FAE5] flex items-center justify-center transition-colors"
                  >
                    <CheckIcon size={11} strokeWidth={2.5} />
                  </button>
                  <button
                    title="Reject"
                    className="h-5 w-5 rounded bg-[#FEF2F2] text-[#EF4444] hover:bg-[#FEE2E2] flex items-center justify-center transition-colors"
                  >
                    <span className="text-[10px] font-bold leading-none">✕</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar with chain approval */}
      <div className="pt-1.5 border-t border-[#F1F5F9] flex items-center justify-between text-[9px] text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[#1E293B]">Approval Chain:</span>
          <span className="text-[#047857] font-medium">1. Manager ✓</span>
          <span>→</span>
          <span className="text-[#047857] font-medium">2. Finance ✓</span>
          <span>→</span>
          <span className="text-[#B45309] font-medium">3. Final Sign-off</span>
        </div>
        <span className="text-[#008B8B] font-semibold hidden sm:inline">100% Audit Tracked</span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. SECURITY & TRUST CENTRE HERO CARD
   Styled exactly like Horilla HRMS:
   - Clean white card with top teal border strip (#008B8B)
   - Status Gauge donut matching Screenshot 2
   - Verification logs table matching Screenshot 5
   ========================================================================= */
export function SecurityTrustHeroCard() {
  const auditLogs = [
    { event: "PII Encryption Key Rotated", actor: "AWS KMS Cloud", date: "Sep. 23, 2026", status: "AES-256", tone: "emerald" },
    { event: "SAML 2.0 Identity Assertion", actor: "Okta Tenant Prod", date: "Sep. 23, 2026", status: "Verified", tone: "emerald" },
    { event: "Tenant Shard Boundary Check", actor: "Audit Engine", date: "Sep. 23, 2026", status: "100% Isolated", tone: "teal" }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        {/* Header matching Horilla style */}
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#ECFDF5] text-[#047857] flex items-center justify-center">
              <ShieldCheckIcon size={13} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">Security & Compliance Console</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
              SOC 2 Type II
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold">
              ISO 27001
            </span>
          </div>
        </div>

        {/* Donut Metric Bar matching Screenshot 2 */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 text-center">
            <LockIcon size={12} className="text-[#008B8B] mx-auto mb-0.5" />
            <p className="text-[8px] text-[#64748B] uppercase font-bold">At Rest & Transit</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">AES-256 • TLS 1.3</p>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 text-center">
            <DatabaseIcon size={12} className="text-[#008B8B] mx-auto mb-0.5" />
            <p className="text-[8px] text-[#64748B] uppercase font-bold">Tenant Sharding</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">Zero Cross-Leak</p>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 text-center">
            <ShieldCheckIcon size={12} className="text-[#008B8B] mx-auto mb-0.5" />
            <p className="text-[8px] text-[#64748B] uppercase font-bold">AI Runtime</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">Zero Retention</p>
          </div>
        </div>

        {/* Audit Log Table matching Horilla Screenshot 5 */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden mt-2">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2.5 py-1.5 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-5">SECURITY EVENT</div>
            <div className="col-span-3">AUTH ENTITY</div>
            <div className="col-span-2 hidden sm:block">DATE</div>
            <div className="col-span-4 sm:col-span-2 text-right">STATUS</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {auditLogs.map((log, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2.5 py-2 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-5 font-bold text-[#1E293B] truncate pr-1">
                  {log.event}
                </div>
                <div className="col-span-3 text-[#475569] text-[9px] truncate">
                  {log.actor}
                </div>
                <div className="col-span-2 text-[#64748B] text-[9px] hidden sm:block">
                  {log.date}
                </div>
                <div className="col-span-4 sm:col-span-2 text-right">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[9px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Regional Hosting: India • UAE • US • EU</span>
        <span className="text-[#047857] font-semibold flex items-center gap-1">
          <ActivityIcon size={12} /> 99.99% Availability SLA
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   3. WHY SQALIBLE HERO CARD
   Styled like Horilla Screenshot 1 & 4:
   - Clean white card with top teal accent
   - Comparative table comparing Legacy vs Sqalible architecture
   ========================================================================= */
export function WhySqalibleHeroCard() {
  const comparisons = [
    {
      capability: "Employee Master Record",
      legacy: "Siloed SQL, 24h CSV batch exports",
      sqalible: "Single cryptographic live master record",
      edge: "100% Real-Time"
    },
    {
      capability: "AI Live Screening",
      legacy: "External ATS or manual phone recruiter",
      sqalible: "Autonomous avatar interview + human review",
      edge: "70% Faster Hire"
    },
    {
      capability: "5-Gate Offboarding",
      legacy: "Manual email checklists & lingering SSO",
      sqalible: "1-click automated last-day deprovisioning",
      edge: "Zero Orphaned"
    },
    {
      capability: "Payroll Statutory Sync",
      legacy: "Spreadsheets & attendance formula errors",
      sqalible: "Telemetry connected statutory engine",
      edge: "Penny-Perfect"
    }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold text-white bg-[#008B8B] rounded-md shadow-xs">
              AI-Native vs Legacy
            </span>
            <span className="text-xs font-semibold text-[#475569] hidden sm:inline">
              Architecture Benchmark
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
            2026 Core
          </span>
        </div>

        {/* Comparison Table */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2.5 py-1.5 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-4">WORKFORCE CAPABILITY</div>
            <div className="col-span-4">LEGACY HRMS (2010s)</div>
            <div className="col-span-4 text-right">SQALIBLE AI-NATIVE</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {comparisons.map((c, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2.5 py-2 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-4 font-bold text-[#1E293B] pr-1">
                  {c.capability}
                </div>
                <div className="col-span-4 text-[#64748B] text-[9px] pr-1 truncate">
                  <span className="text-rose-500 font-bold mr-1">✕</span> {c.legacy}
                </div>
                <div className="col-span-4 text-right text-[9px] font-medium text-[#047857] truncate">
                  <span className="text-[#10B981] font-bold mr-1">✓</span> {c.sqalible}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Model: Zero Third-Party Public LLM Training</span>
        <span className="text-[#008B8B] font-semibold">100% Human Sign-Off Authority</span>
      </div>
    </div>
  );
}

/* =========================================================================
   4. RESPONSIBLE AI HERO CARD
   Styled like Horilla Screenshot 2 (Objective status) & Screenshot 5:
   - Clean white card with top teal accent
   - EEOC 4/5ths parity status gauge and audit trails
   ========================================================================= */
export function ResponsibleAiHeroCard() {
  const evaluations = [
    { name: "Rohan Sharma", role: "AI Research Lead", score: "94/100", traitMask: "Voice Pitch Masked", status: "Approved", tone: "emerald" },
    { name: "Ananya Verma", role: "Product Manager", score: "91/100", traitMask: "Protected Traits Hidden", status: "Approved", tone: "emerald" },
    { name: "Kunal Mehra", role: "Full Stack Engineer", score: "88/100", traitMask: "Demographics Masked", status: "In Review", tone: "amber" }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <ScaleIcon size={14} className="text-[#008B8B]" />
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">Algorithmic Fairness & Parity Monitor</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
            EEOC 4/5ths: 0.98 PASS
          </span>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 my-2 text-center">
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <p className="text-[8px] text-[#64748B] uppercase font-bold">Human Oversight</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">Mandatory Sign-off</p>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <p className="text-[8px] text-[#64748B] uppercase font-bold">Bias Protection</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">Trait Masking ON</p>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <p className="text-[8px] text-[#64748B] uppercase font-bold">Explainability</p>
            <p className="text-[11px] font-bold text-[#1E293B] mt-0.5">Transcript Cited</p>
          </div>
        </div>

        {/* Table of Candidate Evaluations */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden mt-2">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2.5 py-1.5 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-4">CANDIDATE</div>
            <div className="col-span-3">ROLE</div>
            <div className="col-span-3">BIAS SAFEGUARD</div>
            <div className="col-span-2 text-right">ACTION</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {evaluations.map((ev, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2.5 py-2 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-4 font-bold text-[#1E293B] truncate pr-1">
                  {ev.name}
                </div>
                <div className="col-span-3 text-[#475569] text-[9px] truncate">
                  {ev.role}
                </div>
                <div className="col-span-3 text-[#008B8B] text-[9px] font-medium truncate">
                  {ev.traitMask}
                </div>
                <div className="col-span-2 text-right">
                  <span
                    className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] font-semibold ${
                      ev.tone === "emerald"
                        ? "bg-[#ECFDF5] text-[#047857]"
                        : "bg-[#FEF9C3] text-[#B45309]"
                    }`}
                  >
                    {ev.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Strict Non-Autonomous Execution Rule</span>
        <span className="text-[#047857] font-semibold">Audited Quarterly</span>
      </div>
    </div>
  );
}

/* =========================================================================
   5. INTEGRATIONS & OPEN API HERO CARD
   Styled like Horilla Screenshot 3 (Device card with toggle) and Screenshot 5:
   ========================================================================= */
export function IntegrationsHeroCard() {
  const integrationsList = [
    { title: "ZKTeco / eSSL Biometric", category: "Hardware Biometrics", sync: "Sub-second Punch", toggle: true },
    { title: "Okta & Microsoft Entra ID", category: "SSO & SCIM 2.0", sync: "Real-Time Directory", toggle: true },
    { title: "Slack & Microsoft Teams", category: "Interactive Approvals", sync: "Live Bot Active", toggle: true },
    { title: "Corporate Banking Portal", category: "Direct Statutory Payout", sync: "Penny-Perfect", toggle: true }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <ZapIcon size={14} className="text-[#008B8B]" />
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">Connected Enterprise Integrations</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold">
            50+ Connectors
          </span>
        </div>

        {/* 4 Cards matching Horilla Screenshot 3 with green top strip & toggle */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {integrationsList.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 hover:bg-white hover:border-[#008B8B]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#1E293B] truncate">{item.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              </div>
              <p className="text-[9px] text-[#64748B] mt-0.5">{item.category}</p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#E2E8F0]/60">
                <span className="text-[8px] font-medium text-[#008B8B]">{item.sync}</span>
                {/* Simulated Horilla toggle */}
                <div className="h-3.5 w-6 rounded-full bg-[#008B8B] p-0.5 flex items-center justify-end">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Webhook live feed in Horilla table style */}
      <div className="rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-2 text-[9px] my-1 font-mono">
        <div className="flex items-center justify-between text-[#64748B] pb-1 border-b border-[#E2E8F0]">
          <span>REST & WEBHOOK TELEMETRY</span>
          <span className="text-[#047857] font-bold">HTTP 200 OK</span>
        </div>
        <div className="flex items-center justify-between text-[#475569] mt-1">
          <span>POST /v1/biometric.punch_event</span>
          <span className="text-[#047857]">18ms latency</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Endpoints: REST • GraphQL • Webhooks</span>
        <span className="text-[#008B8B] font-semibold">Custom API Key Provisioning</span>
      </div>
    </div>
  );
}

/* =========================================================================
   6. COMPETITOR COMPARISON HERO CARD
   Styled like Horilla Screenshot 1 & 5:
   - Clean white card with top teal accent
   - Head-to-head scorecard table for Keka, Darwinbox, greytHR
   ========================================================================= */
export function CompetitorCompareHeroCard({ competitor }: { competitor: string }) {
  const compName = competitor.charAt(0).toUpperCase() + competitor.slice(1);

  const rows = [
    {
      feature: "Autonomous AI Live Interviewing",
      sqalible: "Native 24/7 avatar with rubric scoring",
      other: compName === "Keka" ? "Requires external ATS" : compName === "Darwinbox" ? "Chatbot only / 3rd party" : "Not supported",
      adv: "Sqalible"
    },
    {
      feature: "5-Gate Offboarding & Access Revoke",
      sqalible: "1-Click automated last-day deprovisioning",
      other: "Manual email checklists",
      adv: "Sqalible"
    },
    {
      feature: "Payroll & Attendance Telemetry",
      sqalible: "Sub-second real-time sync",
      other: "Multi-day batch runs & spreadsheets",
      adv: "Sqalible"
    },
    {
      feature: "Cutover & Migration Timeline",
      sqalible: "2-3 weeks + parallel payroll run",
      other: "3-6 months heavyweight rollout",
      adv: "Sqalible"
    }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold text-white bg-[#008B8B] rounded-md shadow-xs">
              Sqalible vs {compName}
            </span>
            <span className="text-xs font-semibold text-[#475569] hidden sm:inline">
              Capability Evaluation
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
            Verified Audit
          </span>
        </div>

        {/* Comparison Table matching Horilla style */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden mt-1">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2.5 py-1.5 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-4">CAPABILITY</div>
            <div className="col-span-4">SQALIBLE AI-NATIVE</div>
            <div className="col-span-4">{compName.toUpperCase()}</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2.5 py-2 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-4 font-bold text-[#1E293B] pr-1">
                  {r.feature}
                </div>
                <div className="col-span-4 text-[#047857] text-[9px] font-medium pr-1 truncate">
                  <span className="text-[#10B981] font-bold mr-1">✓</span> {r.sqalible}
                </div>
                <div className="col-span-4 text-[#64748B] text-[9px] truncate">
                  <span className="text-rose-500 font-bold mr-1">✕</span> {r.other}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Migration Guarantee: Zero Attendance or Payroll Downtime</span>
        <span className="text-[#008B8B] font-semibold">1-Month Dry-Run Included</span>
      </div>
    </div>
  );
}

/* =========================================================================
   7. AI VOICE SCREENING HERO CARD
   Styled like Horilla Screenshot 4 (Time / Project Record Card) with avatar & metrics:
   ========================================================================= */
export function VoiceScreeningHeroCard() {
  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <MicIcon size={14} className="text-[#008B8B]" />
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">AI Voice Screening & Competency Rubric</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
            Call Complete (12m 45s)
          </span>
        </div>

        {/* Candidate Detail Card matching Horilla Screenshot 4 */}
        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2.5 my-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-xs font-bold">
                RS
              </div>
              <div>
                <p className="font-bold text-[#1E293B] text-xs">Rohan Sharma (CAND-402)</p>
                <p className="text-[9px] text-[#64748B]">Senior Distributed Systems Engineer</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#008B8B]">94 / 100</span>
              <p className="text-[8px] text-[#64748B]">Role Match Score</p>
            </div>
          </div>

          {/* 3 Metric Columns matching Screenshot 4 */}
          <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-[#E2E8F0] text-[10px]">
            <div>
              <p className="font-bold text-[#1E293B]">System Design</p>
              <p className="text-[9px] text-[#64748B]">96% Match</p>
            </div>
            <div>
              <p className="font-bold text-[#1E293B]">Acoustic Clarity</p>
              <p className="text-[9px] text-[#64748B]">Pitch Masked</p>
            </div>
            <div>
              <p className="font-bold text-[#1E293B]">Time Spent</p>
              <p className="text-[9px] text-[#64748B]">12:45 min</p>
            </div>
          </div>
        </div>

        {/* Verbatim Transcript Excerpt */}
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-2 text-[9px] text-[#475569]">
          <span className="font-bold text-[#008B8B]">AI Transcript Citation [04:12]:</span>
          <p className="italic mt-0.5 text-[#334155]">
            "We mitigated Kafka partition rebalance storms by tuning session timeouts and configuring cooperative sticky assignors..."
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Protected Attribute Masking: Active</span>
        <div className="flex items-center gap-1.5">
          <button className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#047857] font-semibold text-[9px] hover:bg-[#D1FAE5]">
            ✓ Advance Candidate
          </button>
          <button className="px-2 py-0.5 rounded bg-[#FEF2F2] text-[#EF4444] font-semibold text-[9px] hover:bg-[#FEE2E2]">
            ✕ Reject
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   8. HR HELPDESK HERO CARD
   Styled like Horilla Screenshot 5 (Asset Requests Table):
   ========================================================================= */
export function HelpdeskHeroCard() {
  const tickets = [
    { user: "Jan Levinson (EMP120)", category: "Maternity Leave", date: "Sep. 23, 2026", status: "Requested", tone: "amber" },
    { user: "James Wilson (EMP115)", category: "Form 16 Tax Statement", date: "Sep. 23, 2026", status: "Resolved", tone: "emerald" },
    { user: "Alex Morgan (EMP118)", category: "Punch Regularization", date: "Sep. 23, 2026", status: "Requested", tone: "amber" },
    { user: "Emily Taylor (EMP109)", category: "Health Insurance Plan", date: "Sep. 22, 2026", status: "Resolved", tone: "emerald" }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-2.5 sm:p-3 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
              <HelpCircleIcon size={12} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">HR Helpdesk Requests to Action</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold">
            4 Pending
          </span>
        </div>

        {/* Table matching Horilla Screenshot 5 */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2 py-1 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-5">REQUEST USER</div>
            <div className="col-span-4">HELP CATEGORY</div>
            <div className="col-span-3 text-right">ACTIONS</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {tickets.map((t, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2 py-1.5 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-5 flex items-center gap-1.5 min-w-0 pr-1">
                  <div className="h-5 w-5 rounded-full bg-[#334155] text-white flex-shrink-0 flex items-center justify-center text-[8px] font-bold">
                    {t.user.charAt(0)}
                  </div>
                  <span className="font-bold text-[#1E293B] truncate text-[10px]">{t.user}</span>
                </div>
                <div className="col-span-4 pr-1 min-w-0">
                  <span className="inline-block max-w-full px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[9px] font-medium truncate">
                    {t.category}
                  </span>
                </div>
                <div className="col-span-3 flex items-center justify-end gap-1">
                  <button className="h-5 w-5 rounded bg-[#ECFDF5] text-[#10B981] hover:bg-[#D1FAE5] flex items-center justify-center transition-colors">
                    <CheckIcon size={11} strokeWidth={2.5} />
                  </button>
                  <button className="h-5 w-5 rounded bg-[#FEF2F2] text-[#EF4444] hover:bg-[#FEE2E2] flex items-center justify-center transition-colors">
                    <span className="text-[10px] font-bold leading-none">✕</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-1.5 border-t border-[#F1F5F9] flex items-center justify-between text-[9px] text-[#64748B]">
        <span>SLA Resolution Average: 14 mins</span>
        <span className="text-[#008B8B] font-semibold">AI Suggested Policy Active</span>
      </div>
    </div>
  );
}

/* =========================================================================
   9. ACCESS REVOCATION & DEPROVISIONING HERO CARD
   Styled like Horilla Screenshot 5:
   ========================================================================= */
export function AccessRevocationHeroCard() {
  const tools = [
    { user: "Dwight Schrute (EMP106)", system: "Okta & SAML Identity", date: "Sep. 23, 2026", status: "Revoked", tone: "rose" },
    { user: "Jan Levinson (EMP120)", system: "Google Workspace & Slack", date: "Sep. 23, 2026", status: "Revoked", tone: "rose" },
    { user: "Alex Morgan (EMP118)", system: "GitHub Org & AWS Access", date: "Sep. 23, 2026", status: "Scheduled", tone: "amber" },
    { user: "Emily Taylor (EMP109)", system: "Office RFID & Hardware MDM", date: "Sep. 23, 2026", status: "Pending Return", tone: "amber" }
  ];

  return (
    <div className="w-full h-full bg-white text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden rounded-none border border-[#E2E8F0] shadow-sm border-t-4 border-t-[#008B8B]">
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <KeyRoundIcon size={14} className="text-[#008B8B]" />
            <h4 className="text-xs sm:text-sm font-bold text-[#1E293B]">5-Gate Access Deprovisioning</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[10px] font-bold">
            Zero Orphaned Accounts
          </span>
        </div>

        {/* Table matching Horilla Screenshot 5 */}
        <div className="rounded-lg border border-[#E2E8F0] overflow-hidden">
          <div className="grid grid-cols-12 bg-[#F1F5F9] px-2.5 py-1.5 text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
            <div className="col-span-4">OFFBOARDING USER</div>
            <div className="col-span-4">SYSTEM / ASSET</div>
            <div className="col-span-2 hidden sm:block">EFFECTIVE</div>
            <div className="col-span-4 sm:col-span-2 text-right">STATUS</div>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {tools.map((t, i) => (
              <div key={i} className="grid grid-cols-12 items-center px-2.5 py-2 text-[10px] hover:bg-[#F8FAFC]">
                <div className="col-span-4 font-bold text-[#1E293B] truncate pr-1">
                  {t.user}
                </div>
                <div className="col-span-4 pr-1">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[9px] truncate">
                    {t.system}
                  </span>
                </div>
                <div className="col-span-2 text-[#64748B] text-[9px] hidden sm:block">
                  {t.date}
                </div>
                <div className="col-span-4 sm:col-span-2 text-right">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold ${
                      t.tone === "rose"
                        ? "bg-[#FEF2F2] text-[#DC2626]"
                        : "bg-[#FEF9C3] text-[#B45309]"
                    }`}
                  >
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
        <span>Automated Trigger: Last Working Day 18:00</span>
        <span className="text-[#047857] font-semibold">100% Audit Signed</span>
      </div>
    </div>
  );
}
