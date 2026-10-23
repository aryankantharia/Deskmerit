import { industryModules } from "./recommender";

export const solutionModules: Record<string, string[]> = {
  "/solutions/startups": ["Sourcing & Job Posting", "Core HR & Employee Records", "Leave Management", "AI HR Assistant"],
  "/solutions/mid-market": ["Hiring Requests & Approvals", "Attendance & Shifts", "Payroll Compliance", "Goals & OKRs"],
  "/solutions/enterprise": ["IT Provisioning", "Access Revocation", "Engagement & Workforce Insights", "Hiring & Workforce Planning"],
  "/solutions/it-staffing": industryModules["IT Services & Staffing"],
  "/solutions/manufacturing": industryModules.Manufacturing,
  "/solutions/healthcare": industryModules.Healthcare,
  "/solutions/retail": industryModules.Retail,
  "/solutions/bfsi": industryModules.BFSI,
  "/solutions/hr-teams": ["Hiring Requests & Approvals", "Pre-boarding & Day One", "Core HR & Employee Records", "Offboarding & Compliance Gates"],
  "/solutions/finance": ["Full & Final Settlement", "Payroll Compliance", "Expenses & Claims", "Hiring & Workforce Planning"],
  "/solutions/it-security": ["IT Provisioning", "Access Revocation", "Background Verification"],
  "/solutions/leadership": ["Engagement & Workforce Insights", "Attrition Risk", "Hiring & Workforce Planning"],
  "/solutions/employees": ["AI HR Assistant", "Leave Management", "HR Helpdesk", "Learning (LMS)"],
  "/solutions/india": ["Payroll Compliance", "Full & Final Settlement", "Background Verification"],
  "/solutions/middle-east": ["Core HR & Employee Records", "Attendance & Shifts", "AI HR Assistant"],
  "/solutions/us": ["AI Resume Screening", "AI Live Interview", "Compensation & Benefits"],
  "/solutions/europe": ["Core HR & Employee Records", "Leave Management", "Access Revocation"]
};