import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { RouteEffects } from "./components/layout/RouteEffects";
import { Home } from "./pages/Home";
import { PlatformPage } from "./pages/PlatformPage";
import { SolutionPage } from "./pages/SolutionPage";
import { WhyPage } from "./pages/WhyPage";
import { ComparePage } from "./pages/ComparePage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { InfoPage } from "./pages/InfoPage";
import { PricingPage } from "./pages/PricingPage";
import { ResourcePage } from "./pages/ResourcePage";
import { ToolPage } from "./pages/ToolPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";
import { TrialSignupPage } from "./pages/TrialSignupPage";
import { TrialWorkspacePage } from "./pages/TrialWorkspacePage";
import { BlogListingPage } from "./pages/BlogListingPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { ScalForcePage } from "./pages/ScalForcePage";
import { ScalForceComparePage } from "./pages/ScalForceComparePage";
import { NotFound } from "./pages/NotFound";

function RedirectIndustry() {
  const { slug } = useParams();
  return <Navigate to={`/solutions/${slug}`} replace />;
}

const resourcePaths = [
  "/resources",
  "/resources/guides",
  "/resources/webinars",
  "/customers",
  "/help",
  "/changelog",
  "/status",
  "/tools/templates"
];

const infoPaths = [
  "/responsible-ai",
  "/security",
  "/privacy",
  "/terms",
  "/dpa",
  "/subprocessors",
  "/accessibility",
  "/cookie-settings"
];

const companyPaths = [
  "/about",
  "/careers",
  "/partners",
  "/press",
  "/life-at-sqalible",
  "/life-at-squalible",
  "/life"
];

export function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Core Platform & Solution Routes */}
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/platform/:slug" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/why-sqalible" element={<WhyPage />} />
        <Route path="/compare/:slug" element={<ComparePage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/scalforce" element={<ScalForcePage />} />
        <Route path="/scalforce/direct-employment-vs-scalforce" element={<ScalForceComparePage />} />
        <Route path="/scalforce-vs-direct-employment" element={<Navigate to="/scalforce/direct-employment-vs-scalforce" replace />} />
        <Route path="/tools/:slug" element={<ToolPage />} />
        <Route path="/company" element={<Navigate to="/about" replace />} />

        {/* Blogs */}
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />

        {/* Sitemap-Approved Resources, Info & Legal, Company Routes */}
        {resourcePaths.map((p) => (
          <Route key={p} path={p} element={<ResourcePage />} />
        ))}
        {infoPaths.map((p) => (
          <Route key={p} path={p} element={<InfoPage />} />
        ))}
        {companyPaths.map((p) => (
          <Route key={p} path={p} element={<CompanyPage />} />
        ))}

        {/* Contact & Free Trial Routes */}
        <Route path="/contact" element={<ContactPage mode="demo" />} />
        <Route path="/signup" element={<TrialSignupPage />} />
        <Route path="/trial" element={<TrialWorkspacePage />} />
        <Route path="/trial/sandbox" element={<TrialWorkspacePage />} />

        {/* Canonical Redirects for Legacy / Unapproved Paths */}
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/career" element={<Navigate to="/careers" replace />} />
        <Route path="/our-team" element={<Navigate to="/about" replace />} />
        <Route path="/internship-opportunities" element={<Navigate to="/careers" replace />} />
        <Route path="/event-page" element={<Navigate to="/careers" replace />} />
        <Route path="/strategic-partnerships" element={<Navigate to="/partners" replace />} />
        <Route path="/insights/strategic-partnerships" element={<Navigate to="/partners" replace />} />
        <Route path="/forbes" element={<Navigate to="/press" replace />} />
        <Route path="/resource" element={<Navigate to="/blog" replace />} />
        <Route path="/security-policy" element={<Navigate to="/security" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/cookie-policy" element={<Navigate to="/cookie-settings" replace />} />
        <Route path="/customize-cookies" element={<Navigate to="/cookie-settings" replace />} />
        <Route path="/disclaimer" element={<Navigate to="/terms" replace />} />
        <Route path="/calculator" element={<Navigate to="/tools/gratuity-calculator" replace />} />
        <Route path="/calculator/*" element={<Navigate to="/tools/gratuity-calculator" replace />} />
        <Route path="/services" element={<Navigate to="/platform/hire" replace />} />
        <Route path="/services/*" element={<Navigate to="/platform/hire" replace />} />
        <Route path="/staffing-solution" element={<Navigate to="/solutions/it-staffing" replace />} />
        <Route path="/roles/*" element={<Navigate to="/platform/hire" replace />} />
        <Route path="/industry/:slug" element={<RedirectIndustry />} />
        <Route path="/case-study" element={<Navigate to="/customers" replace />} />
        <Route path="/case-studies/*" element={<Navigate to="/customers" replace />} />
        <Route path="/our-clients" element={<Navigate to="/customers" replace />} />
        <Route path="/insights/our-clients" element={<Navigate to="/customers" replace />} />
        <Route path="/faqs" element={<Navigate to="/help" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}