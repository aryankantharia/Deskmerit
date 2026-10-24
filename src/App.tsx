import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CurrencyProvider } from "./utils/currencyContext";
import { RouteEffects } from "./components/layout/RouteEffects";
import { Home } from "./pages/Home";
import { FeaturesPage } from "./pages/FeaturesPage";
import { TrackerPlusPage } from "./pages/TrackerPlusPage";
import { AttendanceTrackingPage } from "./pages/AttendanceTrackingPage";
import { PricingPage } from "./pages/PricingPage";
import { ItServicesPage } from "./pages/ItServicesPage";
import { HrmsAddonPage } from "./pages/HrmsAddonPage";
import { IndiaPage } from "./pages/IndiaPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { DeskTimeAlternativePage } from "./pages/DeskTimeAlternativePage";
import { PrivacyPromisePage } from "./pages/PrivacyPromisePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { DemoPage } from "./pages/DemoPage";
import { DownloadPage } from "./pages/DownloadPage";
import { ToolsAndTemplatesPage } from "./pages/ToolsAndTemplatesPage";
import { LegalPage } from "./pages/LegalPage";
import { TrialSignupPage } from "./pages/TrialSignupPage";

export function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <RouteEffects />
        <Routes>
          {/* Core Home */}
          <Route path="/" element={<Home />} />

          {/* Product & Feature Pages */}
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/automatic-time-tracking" element={<FeaturesPage />} />
          <Route path="/features/productivity-tracking" element={<FeaturesPage />} />
          <Route path="/features/tracker-plus" element={<TrackerPlusPage />} />
          <Route path="/features/attendance-tracking" element={<AttendanceTrackingPage />} />
          <Route path="/features/idle-and-private-time" element={<PrivacyPromisePage />} />
          <Route path="/features/screenshots" element={<PrivacyPromisePage />} />
          <Route path="/features/project-time-tracking" element={<ItServicesPage />} />
          <Route path="/features/timesheets-and-reports" element={<TrackerPlusPage />} />
          <Route path="/features/shift-scheduling" element={<AttendanceTrackingPage />} />
          <Route path="/features/leave-management" element={<AttendanceTrackingPage />} />
          <Route path="/features/document-tracking" element={<FeaturesPage />} />
          <Route path="/features/focus-timer" element={<FeaturesPage />} />
          <Route path="/features/live-status" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />

          {/* Trust & Security */}
          <Route path="/security" element={<PrivacyPromisePage />} />
          <Route path="/privacy-promise" element={<PrivacyPromisePage />} />
          <Route path="/trust" element={<PrivacyPromisePage />} />

          {/* Pricing */}
          <Route path="/pricing" element={<PricingPage />} />

          {/* Solutions Pages */}
          <Route path="/solutions" element={<ItServicesPage />} />
          <Route path="/solutions/it-services" element={<ItServicesPage />} />
          <Route path="/solutions/staff-augmentation" element={<ItServicesPage />} />
          <Route path="/solutions/agencies" element={<ItServicesPage />} />
          <Route path="/solutions/bpo" element={<AttendanceTrackingPage />} />
          <Route path="/solutions/professional-services" element={<ItServicesPage />} />
          <Route path="/solutions/remote-teams" element={<AttendanceTrackingPage />} />
          <Route path="/solutions/hybrid-teams" element={<AttendanceTrackingPage />} />
          <Route path="/solutions/office-teams" element={<AttendanceTrackingPage />} />
          <Route path="/solutions/hr" element={<AttendanceTrackingPage />} />
          <Route path="/solutions/managers" element={<Home />} />
          <Route path="/solutions/finance" element={<ItServicesPage />} />
          <Route path="/hrms-add-on" element={<HrmsAddonPage />} />
          <Route path="/partners/white-label" element={<PricingPage />} />

          {/* Regional Variants */}
          <Route path="/en-in" element={<IndiaPage />} />
          <Route path="/india" element={<IndiaPage />} />
          <Route path="/en-au" element={<IndiaPage />} />
          <Route path="/australia" element={<IndiaPage />} />
          <Route path="/en-nz" element={<IndiaPage />} />
          <Route path="/new-zealand" element={<IndiaPage />} />
          <Route path="/en-ae" element={<IndiaPage />} />
          <Route path="/uae" element={<IndiaPage />} />
          <Route path="/en-sa" element={<IndiaPage />} />
          <Route path="/saudi-arabia" element={<IndiaPage />} />

          {/* Comparisons */}
          <Route path="/compare" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/desktime-alternative" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/hubstaff-alternative" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/time-doctor-alternative" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/activtrak-alternative" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/toggl-alternative" element={<DeskTimeAlternativePage />} />
          <Route path="/compare/time-champ-alternative" element={<DeskTimeAlternativePage />} />

          {/* Integrations & Developers */}
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/integrations/:slug" element={<IntegrationsPage />} />
          <Route path="/developers" element={<IntegrationsPage />} />
          <Route path="/developers/mcp-server" element={<IntegrationsPage />} />

          {/* Editorial & Guides */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/guides/employee-monitoring-laws" element={<IndiaPage />} />
          <Route path="/guides/employee-monitoring-laws/:country" element={<IndiaPage />} />

          {/* Free Tools & Templates */}
          <Route path="/tools" element={<ToolsAndTemplatesPage />} />
          <Route path="/tools/utilisation-calculator" element={<ToolsAndTemplatesPage />} />
          <Route path="/tools/overtime-calculator" element={<ToolsAndTemplatesPage />} />
          <Route path="/templates" element={<ToolsAndTemplatesPage />} />
          <Route path="/templates/timesheet-template" element={<ToolsAndTemplatesPage />} />
          <Route path="/templates/employee-monitoring-policy" element={<ToolsAndTemplatesPage />} />

          {/* Company & Conversion */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<AboutPage />} />
          <Route path="/partners" element={<AboutPage />} />
          <Route path="/press" element={<AboutPage />} />
          <Route path="/contact" element={<DemoPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/signup" element={<TrialSignupPage />} />

          {/* Legal Pages */}
          <Route path="/legal/terms" element={<LegalPage />} />
          <Route path="/legal/privacy" element={<LegalPage />} />
          <Route path="/legal/dpa" element={<LegalPage />} />
          <Route path="/legal/subprocessors" element={<LegalPage />} />
          <Route path="/legal/cookies" element={<LegalPage />} />
          <Route path="/legal/sla" element={<LegalPage />} />

          {/* Canonical Fallbacks */}
          <Route path="/privacy" element={<Navigate to="/privacy-promise" replace />} />
          <Route path="/terms" element={<Navigate to="/legal/terms" replace />} />
          <Route path="/calculator" element={<Navigate to="/tools/utilisation-calculator" replace />} />
          <Route path="/customers" element={<Home />} />
          <Route path="/glossary" element={<BlogPage />} />
          <Route path="/changelog" element={<FeaturesPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CurrencyProvider>
  );
}