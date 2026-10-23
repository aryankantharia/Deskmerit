import React from "react";
import { FileTextIcon, LockIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "../Badge";
import { AiCapabilityId, attritionRisks, engagementByTeam, sourcingChannels } from "../../data/aiCapabilities";

const riskTone = { High: "error", Medium: "warning", Low: "success" } as const;

export function AiPanel({ id }: {id: AiCapabilityId;}) {
  if (id === "assistant") return <AssistantPanel />;
  if (id === "insights") return <InsightsPanel />;
  if (id === "attrition") return <AttritionPanel />;
  return <PlanningPanel />;
}

function PanelHeader({ title, meta }: {title: string;meta: React.ReactNode;}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4">
      <p className="text-body1 font-semibold text-neutral-900">{title}</p>
      {meta}
    </div>);

}

function AssistantPanel() {
  return (
    <>
      <PanelHeader title="Ask Sqalible AI" meta={<Badge tone="ai">Permission-aware</Badge>} />
      <div className="space-y-4 p-6">
        <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-neutral-200 px-4 py-3 text-body2 text-neutral-900">
          Can I carry forward unused leave into 2027?
        </p>
        <div className="max-w-[92%] rounded-xl rounded-bl-sm border border-[#E9D5FF] bg-[#FBF8FF] px-4 py-3">
          <p className="flex items-center gap-1 text-caption font-semibold text-ai">
            <SparklesIcon size={12} strokeWidth={1.75} aria-hidden="true" />
            Sqalible AI
          </p>
          <p className="mt-1 text-body2 text-neutral-800">
            Yes. You can carry forward up to <strong className="font-semibold text-neutral-900">8 annual leave days</strong>.
            You currently have 12 unused, so 4 will lapse on 31 December unless you apply before then.
          </p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-caption font-medium text-neutral-700 hover:border-primary hover:text-primary">
            
            <FileTextIcon size={12} strokeWidth={1.75} aria-hidden="true" />
            Leave Policy 2026 · Section 4.2
          </a>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {["Apply for leave", "Team calendar", "View payslip"].map((a) =>
          <span key={a} className="rounded-lg border border-[#E9D5FF] bg-ai-light px-2.5 py-1 text-caption font-medium text-ai">
              {a}
            </span>
          )}
        </div>
      </div>
    </>);

}

function InsightsPanel() {
  return (
    <>
      <PanelHeader title="Engagement by team" meta={<span className="text-caption text-neutral-600">Last 30 days</span>} />
      <div className="p-6">
        <div className="flex items-end gap-3">
          <span className="text-[40px] font-semibold leading-[48px] text-neutral-900">74</span>
          <span className="mb-2 inline-flex items-center gap-1 text-body2 font-medium text-success">
            <TrendingUpIcon size={16} strokeWidth={1.75} aria-hidden="true" />
            +3 vs last month
          </span>
        </div>
        <p className="text-caption text-neutral-600">Company engagement score</p>
        <ul className="mt-6 space-y-4">
          {engagementByTeam.map((row) =>
          <li key={row.team} className="grid grid-cols-[140px_1fr_32px] items-center gap-3 text-body2">
              <span className="text-neutral-700">{row.team}</span>
              <span className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <span
                className={`block h-full rounded-full ${row.score < 70 ? "bg-warning" : "bg-primary"}`}
                style={{ width: `${row.score}%` }} />
              
              </span>
              <span className="text-right font-semibold text-neutral-900">{row.score}</span>
            </li>
          )}
        </ul>
        <p className="mt-6 rounded-lg bg-warning-light px-3 py-2 text-caption text-warning">
          Finance is below 70 after two weeks of late closes. Delivery risk flagged for month-end.
        </p>
      </div>
    </>);

}

function AttritionPanel() {
  return (
    <>
      <PanelHeader
        title="Attrition risk"
        meta={
        <span className="inline-flex items-center gap-1 text-caption font-medium text-neutral-600">
            <LockIcon size={12} strokeWidth={1.75} aria-hidden="true" />
            Visible to HR only
          </span>
        } />
      
      <ul className="divide-y divide-neutral-200">
        {attritionRisks.map((person) =>
        <li key={person.name} className="flex items-start gap-3 px-6 py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-caption font-semibold text-neutral-700">
              {person.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-body2 font-semibold text-neutral-900">{person.name}</p>
                <span className="text-caption text-neutral-500">{person.team}</span>
              </div>
              <p className="mt-0.5 text-body2 text-neutral-600">{person.factor}</p>
            </div>
            <Badge tone={riskTone[person.level]}>{person.level} risk</Badge>
          </li>
        )}
      </ul>
    </>);

}

function PlanningPanel() {
  return (
    <>
      <PanelHeader title="Sourcing channel ROI" meta={<span className="text-caption text-neutral-600">FY 2026</span>} />
      <table className="w-full text-left text-body2">
        <thead className="text-caption font-semibold text-neutral-600">
          <tr className="border-b border-neutral-200">
            <th scope="col" className="px-6 py-3">Channel</th>
            <th scope="col" className="px-6 py-3 text-right">Hires</th>
            <th scope="col" className="px-6 py-3 text-right">Cost per hire</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {sourcingChannels.map((row) =>
          <tr key={row.channel}>
              <td className="px-6 py-3 text-neutral-900">{row.channel}</td>
              <td className="px-6 py-3 text-right text-neutral-700">{row.hires}</td>
              <td className="px-6 py-3 text-right font-medium text-neutral-900">{row.costPerHire}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="m-6 rounded-none border border-[#E9D5FF] bg-[#FBF8FF] p-4">
        <p className="flex items-center gap-1 text-caption font-semibold text-ai">
          <SparklesIcon size={12} strokeWidth={1.75} aria-hidden="true" />
          Forecast
        </p>
        <p className="mt-1 text-body2 text-neutral-800">
          You will need <strong className="font-semibold text-neutral-900">18 hires in Q1 2027</strong>. Shifting 20% of
          agency budget to referrals saves about ₹6.4 lakh.
        </p>
      </div>
    </>);

}