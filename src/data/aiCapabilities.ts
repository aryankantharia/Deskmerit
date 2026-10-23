export type AiCapabilityId = "assistant" | "insights" | "attrition" | "planning";

export const aiCapabilities: {id: AiCapabilityId;title: string;text: string;}[] = [
{
  id: "assistant",
  title: "AI HR Assistant",
  text: "Permission-aware answers and policy search in plain language, for every employee."
},
{
  id: "insights",
  title: "Engagement & Workforce Insights",
  text: "Engagement scoring, attendance patterns and delivery risk, by team."
},
{
  id: "attrition",
  title: "Attrition Risk",
  text: "HR-only risk indicators explained with plain-language factors."
},
{
  id: "planning",
  title: "Hiring & Workforce Planning",
  text: "Sourcing channel ROI and hiring forecasts you can plan budgets around."
}];


export const engagementByTeam = [
{ team: "Engineering", score: 82 },
{ team: "Sales", score: 71 },
{ team: "Customer Success", score: 77 },
{ team: "Finance", score: 64 },
{ team: "Operations", score: 69 }];


export const attritionRisks = [
{ initials: "RK", name: "Rahul Kapoor", team: "Sales", level: "High" as const, factor: "No salary revision in 22 months and 3 missed 1:1s." },
{ initials: "LN", name: "Lina Nasser", team: "Engineering", level: "Medium" as const, factor: "Internal role applications declined twice this year." },
{ initials: "TB", name: "Tom Becker", team: "Finance", level: "Low" as const, factor: "Engagement steady; recently completed promotion review." }];


export const sourcingChannels = [
{ channel: "Employee referrals", hires: 14, costPerHire: "₹18,000" },
{ channel: "LinkedIn", hires: 11, costPerHire: "₹42,500" },
{ channel: "Naukri", hires: 9, costPerHire: "₹27,000" },
{ channel: "Vendor agencies", hires: 6, costPerHire: "₹96,000" }];