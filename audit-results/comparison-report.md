# Kombee vs Sqalible — Design Structure & Information Hierarchy Report

**Date:** 2026-10-19 (revised)  
**Reference:** [Kombee](https://www.kombee.com) — layout and content-flow inspiration only  
**Target:** Sqalible marketing site (Antigravity / local Vite build)  
**Scope:** Page structure, section order, grouping, layout patterns, and hierarchy — not sitemap compliance, branding, or visual styling.

This revision uses findings from the prior audit pass. No new site crawl was performed.

---

## Purpose

Compare how Kombee and Sqalible **organize** long marketing pages: where proof, product depth, interaction, and conversion appear in the scroll journey. The goal is actionable structural UX guidance for Sqalible while **keeping** intentional choices (tabbed Platform mega menu, existing AI Live Interview nav and homepage feature block, current brand and assets).

---

## Observed evidence (Kombee — verified)

**Homepage** (`https://www.kombee.com/`)

- Header: multiple mega menus; Contact appears repeatedly in header and body.
- Vertical rhythm: Hero → service capability cards → client stats → **case study carousel** (prev/next) → editorial feature → AI capability grid → **interactive “AI Service Selector”** (short questionnaire) → **large testimonial carousel** → **mid-page CTA + Project Cost Calculator** → blog 3-up grid → partner logos → FAQ accordion → footer CTA band → footer columns.

**Service page** (e.g. `/services/web-app-development`)

- Hero/value bullets → sub-capability blocks → **numbered 01–06 differentiator grid** → long-form narrative → **client quote block** → **Project Cost Calculator** → closing help CTA.

**Design judgment:** Kombee optimizes for **early social proof**, **mid-scroll interaction**, and **repeated conversion bands** on long pages. Sqalible optimizes for **lifecycle narrative** and **product depth** before late-stage FAQ and footer.

---

## Observed evidence (Sqalible — from prior code review)

**Homepage** (`src/pages/Home.tsx`)

1. Hero  
2. PlatformCards  
3. StatsBand  
4. SolutionsSection (tabs)  
5. InterviewFeature (flagship AI interview)  
6. DashboardShowcase  
7. AiCapabilities  
8. WhySqalible  
9. Testimonials  
10. BlogSection  
11. IntegrationsSection  
12. FaqSection  
13. Footer (no `PageCta` band on home)

**Standard product module** (`ModuleDetailView` in `src/pages/PlatformPage.tsx`)

- `PageHero` (breadcrumbs, pretitle, title, description)  
- Key Capabilities — 3-column card grid  
- How it works — 4-column dark segmented workflow (same four stage labels across modules)  
- Stakeholder value — 3-column (HR / Managers / Leadership)  
- `FaqSection`  
- `PageCta` (Book a Demo + Start Free Trial)

**Flagship AI Live Interview page**

- Extended hero path: telemetry strip, rubric pillars, 4-step workflow, FAQ, `PageCta` (deeper than standard modules).

**Navigation discovery**

- Tabbed sidebar mega menus (`MenuPanel.tsx`): category tab → 2-column link grid → right-rail **Customer Story** card (same pattern across Platform, Solutions, Resources, Company).

**Live preview:** Antigravity URL was not confirmed in the prior pass; treat Sqalible descriptions as structure-from-implementation unless validated in preview.

---

## A. Recommended structural improvements

Ranked by expected impact on clarity, trust, and conversion flow. Each item is a **layout / section** change, not a rebrand.

### 1. Add a homepage closing conversion band before FAQ or footer

| Field | Detail |
|---|---|
| **Page / section** | Homepage — after Integrations or after FAQ, before Footer |
| **Current Sqalible** | Homepage ends with `FaqSection`; inner pages use shared `PageCta` but home does not |
| **Kombee pattern** | Repeated “Contact / Need help choosing…” bands before footer on home and service pages |
| **Proposed change** | Insert the existing `PageCta` component (or equivalent full-width band) once on the homepage — e.g. after Testimonials + Blog, or immediately after FAQ |
| **Why it improves UX** | Visitors who read through proof and objections get a **single obvious next step** without scrolling back to the sticky header; aligns home with product-page mental model |
| **Priority** | **High** |

### 2. Tighten homepage AI/product story — reduce back-to-back depth blocks

| Field | Detail |
|---|---|
| **Page / section** | Homepage — `InterviewFeature` → `DashboardShowcase` → `AiCapabilities` → `WhySqalible` |
| **Current Sqalible** | Four consecutive sections all explain “why Sqalible / AI / product” before any customer voice |
| **Kombee pattern** | Alternates **proof** (stats, case studies) with **capability** blocks; testimonials appear **before** late calculators/blog |
| **Proposed change** | Reorder or merge hierarchy: keep `InterviewFeature` as flagship; follow with **one** consolidated “platform in action” block (combine dashboard + AI capabilities into one section with two sub-regions OR move `WhySqalible` above dashboard); place **Testimonials immediately after** flagship + stats/platform proof |
| **Why it improves UX** | Shortens the “all vendor claims, no customer voice” scroll gap; improves **credibility pacing** for evaluators comparing HRMS vendors |
| **Priority** | **High** |

### 3. Differentiate product page “workflow” sections by module (or demote generic template)

| Field | Detail |
|---|---|
| **Page / section** | All standard platform module pages — dark 4-column “Trigger → Policy → Execution → Sync” band |
| **Current Sqalible** | Identical four stage titles and parallel layout on every module (`ModuleDetailView`) |
| **Kombee pattern** | Service pages use **numbered, page-specific** differentiators (01–06) tied to that service line |
| **Proposed change** | **Option A:** Replace generic steps with module-specific 3–4 steps (content swap, same grid component). **Option B:** Keep generic band only on **stage hub** pages (`/platform/hire`, etc.) and use module-specific bullets or a slimmer “In this module” strip on leaf pages |
| **Why it improves UX** | Reduces **template fatigue** when browsing multiple modules; each page reads as purpose-built, which supports technical buyers validating fit |
| **Priority** | **High** |

### 4. Anchor homepage “Try AI Interview” to a defined on-page target on the product page

| Field | Detail |
|---|---|
| **Page / section** | Homepage `InterviewFeature` CTA → AI Live Interview product page |
| **Current Sqalible** | CTA href includes `#demo`; flagship page has no matching in-page demo/anchor region in implementation reviewed |
| **Kombee pattern** | Interactive blocks (selector, calculator) live **on the same page** as the CTA destination |
| **Proposed change** | Add a clearly labeled **“See it in action”** section on the AI Live Interview page (reuse homepage transcript/visual pattern or embed) with `id="demo"`; OR retarget CTA to an existing section id if demo content stays on home only |
| **Why it improves UX** | Preserves **continuity of intent** when users click from home; avoids disorientation landing at page top with no visual payoff |
| **Priority** | **High** |

### 5. Group trust and ecosystem proof into one late-home “evaluation” cluster

| Field | Detail |
|---|---|
| **Page / section** | Homepage — Testimonials, Blog, Integrations, FAQ |
| **Current Sqalible** | Testimonials → Blog → Integrations → FAQ (integrations separated from testimonials by blog) |
| **Kombee pattern** | Social proof and **partner/network** blocks sit near FAQ/pre-footer decision zone |
| **Proposed change** | Order: Testimonials → Integrations (shorter strip or logo grid) → Blog → FAQ; or wrap Testimonials + Integrations in a shared “Trusted by teams like yours” section with two sub-rows |
| **Why it improves UX** | Buyers in **comparison mode** see people + stack fit together before editorial content; FAQ then answers remaining blockers right before footer CTA |
| **Priority** | **Medium** |

### 6. Make mega-menu right rail context-specific (keep tabbed left nav as-is)

| Field | Detail |
|---|---|
| **Page / section** | All mega menus — right column in `MenuPanel` |
| **Current Sqalible** | Same “Customer Story” card pattern regardless of menu (Platform vs Resources vs Company) |
| **Kombee pattern** | Mega panels often end with a **topic-relevant** promo (service fit, hire talent, insights) |
| **Proposed change** | Keep tabbed Platform menu unchanged. Vary right rail by menu: Platform → lifecycle story or Hire outcome; Solutions → industry snapshot; Resources → free tool teaser; Company → careers highlight. Reuse one card component, swap content props |
| **Why it improves UX** | Supports **wayfinding** without adding nav complexity; users see “what matters here” instead of a generic story repeated four times |
| **Priority** | **Medium** |

### 7. Add mid-page proof on high-intent product pages only

| Field | Detail |
|---|---|
| **Page / section** | Flagship modules (e.g. AI Live Interview, Core HR, Payroll Compliance) — between workflow and FAQ |
| **Current Sqalible** | Module pages jump from stakeholder value grid to FAQ with no quote, metric, or logo strip |
| **Kombee pattern** | Service pages insert **client quote** between capabilities and calculator/CTA |
| **Proposed change** | One optional **compact** proof band (single quote + metric or 4–6 logos) on 3–5 priority URLs; omit on long-tail module pages to avoid noise |
| **Why it improves UX** | Validates claims **in context** where buyers are deepest in the funnel, without bloating every module page |
| **Priority** | **Medium** |

### 8. Pricing page — distinct visual band for Enterprise evaluation path

| Field | Detail |
|---|---|
| **Page / section** | `/pricing` — below tier table / AI add-ons |
| **Current Sqalible** | Tiers + `#ai-add-ons` block; FAQ follows (`PricingPage.tsx`) |
| **Kombee pattern** | Calculator/estimation blocks segment **self-serve** vs **talk to us** journeys on the same page |
| **Proposed change** | Add a dedicated **Enterprise** section (headline, 3 bullet differentiators, secondary CTA to contact/sales) as its own horizontal band — structurally separate from pooled tiers, with anchor for deep links |
| **Why it improves UX** | Enterprise buyers scan for **hosting/residency/support** signals; separating bands prevents them from misreading self-serve tiers as the only path |
| **Priority** | **Medium** |

### 9. Shorten footer pre-amble before link columns

| Field | Detail |
|---|---|
| **Page / section** | Global footer |
| **Current Sqalible** | Social strip → logo + columns → **Global Offices** grid → copyright/legal/language |
| **Kombee pattern** | Footer columns + bottom bar; less vertical content above primary links |
| **Proposed change** | Move office cards to **Contact** page primary content or collapse to one row + “View all offices”; keep social either in column header or bottom bar only (not both large strips) |
| **Why it improves UX** | Reduces scroll to **Legal & Trust** and product links; improves hierarchy for users seeking policies or support |
| **Priority** | **Low** |

---

## B. Optional design enhancements

Lower priority; adopt only if they support a clear user job.

### B1. Homepage “path finder” for Solutions (not a full Kombee clone)

| Field | Detail |
|---|---|
| **Page / section** | Homepage — near `SolutionsSection` or after StatsBand |
| **Current Sqalible** | Tabbed Solutions section requires reading tabs |
| **Kombee pattern** | “AI Service Selector” — two questions → suggested services |
| **Proposed change** | Lightweight **3-choice filter** (company size OR industry OR team) that scrolls to or highlights one Solutions tab — no new pages |
| **Why it improves UX** | Helps first-time visitors **self-segment** without opening the Solutions mega menu |
| **Priority** | **Low** |

### B2. Case-study carousel for Customer Stories

| Field | Detail |
|---|---|
| **Page / section** | Homepage or `/customers` teaser |
| **Current Sqalible** | Testimonials section (static pattern in codebase) |
| **Kombee pattern** | Case studies with prev/next and “View All” |
| **Proposed change** | If customer story content exists, use carousel controls on 3–5 cards linking to `/customers` |
| **Why it improves UX** | Surfaces **outcome narratives** for visual scanners; optional if testimonial content is already strong |
| **Priority** | **Low** |

### B3. Surface one free tool on homepage (single row, not calculator suite)

| Field | Detail |
|---|---|
| **Page / section** | Homepage — pre-footer or Resources-adjacent zone |
| **Current Sqalible** | Calculators live under `/tools/*`; not structurally linked from home |
| **Kombee pattern** | Prominent Project Cost Calculator mid-page |
| **Proposed change** | One **HR tool** teaser row (e.g. Gratuity Calculator) with link to `/tools/gratuity-calculator` |
| **Why it improves UX** | Gives practitioners a **low-commitment entry**; supports SEO journeys without mimicking agency cost calculators |
| **Priority** | **Low** |

### B4. Stage hub vs leaf page template clarity

| Field | Detail |
|---|---|
| **Page / section** | `/platform/hire` (and other stage hubs) vs leaf modules |
| **Current Sqalible** | Hubs use module grid; leaves use full ModuleDetailView stack |
| **Kombee pattern** | Category landing lists services; detail pages go deeper |
| **Proposed change** | On hubs, shorten or skip the generic 4-step workflow; reserve full workflow + stakeholder grid for **leaf** pages only |
| **Why it improves UX** | Prevents **duplicate reading** when users click hub then immediately open a module |
| **Priority** | **Low** |

### B5. Hero secondary path for “Explore platform”

| Field | Detail |
|---|---|
| **Page / section** | Homepage Hero |
| **Current Sqalible** | Primary CTAs: Book a Demo, Start Free Trial (`Hero.tsx`) |
| **Kombee pattern** | “Learn More” repeats under service cards |
| **Proposed change** | Add text link or tertiary control: scroll to `#interview` or PlatformCards — for researchers not ready to demo |
| **Why it improves UX** | Supports **multi-intent** traffic (evaluators vs ready-to-buy) without removing trial/demo prominence |
| **Priority** | **Low** |

---

## C. Keep as-is

Structures that work well or are **intentionally** different from Kombee. No change recommended for layout pattern alone.

| Area | What Sqalible does | Why it works / intentional |
|---|---|---|
| **Platform mega menu** | Tabbed lifecycle categories + 2-column module grid + right rail | Reduces visual noise versus six simultaneous columns; supports focused scanning per lifecycle stage (**intentional** — not a Kombee clone) |
| **AI Live Interview prominence** | Nav entry + dedicated `InterviewFeature` homepage section | Flagship differentiator is already structurally visible; no need to duplicate as “missing” |
| **Header conversion pair** | Login + Book a Demo + Start Free Trial | Clear dual path for self-serve vs sales-assist buyers |
| **Product page skeleton** | Hero → capabilities grid → dark workflow band → stakeholder benefits → FAQ → `PageCta` | Strong, repeatable **evaluation narrative**; matches B2B SaaS best practice and parts of Kombee’s service-page rhythm |
| **Homepage lifecycle opening** | PlatformCards early after Hero | Orients HR buyers to **Hire → Exit** mental model before vertical Solutions tabs |
| **DashboardShowcase** | Product UI mock mid-home | Concrete “what you get” evidence; appropriate for HRMS vs Kombee’s portfolio case studies |
| **Integrations as its own section** | Logo/grid block before FAQ | Useful for IT/security evaluators; worth keeping even if reordered with testimonials |
| **Fixed header + full-width mega panel** | Edge-to-edge menu (`Header.tsx`) | Consistent enterprise SaaS pattern; supports deep catalogs |
| **Brand / visual system** | Teal HRMS aesthetic, typography, assets | Out of scope; preserve per product direction |
| **Kombee-style cost calculator on home** | Not present | Not aligned with Sqalible’s product-led trial/demo model; **omit** unless sales strategy changes |

---

## Recommendation index (quick reference)

| # | Summary | Priority |
|---|---|---|
| A1 | Homepage closing `PageCta` band | High |
| A2 | Reorder/consolidate AI/product blocks; elevate testimonials earlier | High |
| A3 | Module-specific workflows (or hubs-only generic steps) | High |
| A4 | `#demo` / “See it in action” continuity on AI Live Interview page | High |
| A5 | Cluster testimonials + integrations before blog/FAQ | Medium |
| A6 | Context-specific mega-menu right rail (keep tabbed Platform) | Medium |
| A7 | Compact proof band on priority product pages | Medium |
| A8 | Enterprise band on pricing page | Medium |
| A9 | Slimmer footer hierarchy | Low |

---

## Top five recommended design structure improvements

1. **Homepage closing conversion band** — Add `PageCta` (or equivalent) so the home scroll journey ends with the same clear action as product pages.  
2. **Homepage credibility pacing** — Shorten the four-block AI/product sequence; move customer proof (testimonials) closer to flagship + platform evidence.  
3. **Module-specific workflow sections** — Replace or relocate the identical four-step dark band so multi-module browsing feels substantive, not templated.  
4. **Try AI Interview scroll target** — Define an on-page “demo / in action” section on the AI Live Interview page so homepage CTA intent is honored.  
5. **Contextual mega-menu right rail** — Keep tabbed Platform menu; swap generic Customer Story for menu-relevant promos to improve discovery without IA churn.

---

## Evidence vs design judgment

| Type | Examples in this report |
|---|---|
| **Evidence (Kombee)** | Homepage section sequence; case study and testimonial carousels; AI Service Selector; service-page 01–06 grid; mid-page calculator; quote blocks before closing CTA |
| **Evidence (Sqalible)** | `Home.tsx` section order; `ModuleDetailView` section stack; `MenuPanel` tab + story rail; `PageCta` on inner pages only; `InterviewFeature` on home |
| **Design judgment** | All items in sections A and B — proposed reordering, merging, contextual rails, and template differentiation — inferred to improve evaluator clarity and conversion flow |

---

**Report path:** `audit-results/comparison-report.md`

*Report revised for UX structure only. No website code was modified.*
