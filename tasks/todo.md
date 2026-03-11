# Landing Page Audit — UI Design + Copywriting Overhaul

Source: Combined audit from `ui-design-reviewer` agent + StoryBrand SB7 copywriting review (2026-03-10)

---

## Phase 1: Copy Rewrites (highest impact, no structural changes)

These are pure text changes in `src/App.vue` data objects and template strings.

- [x] **1.1 Hero subheading rewrite** — Replace brand-centric "Your customer signals, forged into product direction..." with customer-centric copy that names the hero's situation and resolves with outcome. Keep headline "Know what to build next" as-is.
  - File: `App.vue:309-315`
  - Also: Consider replacing or removing "Product Intelligence" badge (brand jargon)

- [x] **1.2 Features section copy overhaul** — Rewrite all 6 feature titles from jargon to benefits, rewrite bodies from technical to outcome-focused.
  - File: `App.vue:24-67` (features array)
  - Before → After titles:
    - "Multi-Source Ingestion" → "Every source, one place"
    - "LLM Signal Extraction" → "AI reads between the lines"
    - "Theme Clustering" → "Patterns surface automatically"
    - "Chat Intelligence" → "Ask anything, get evidence"
    - "Spec Generation" → "Specs that write themselves"
    - "Signal Analytics" → "Know your signal health"

- [x] **1.3 Problem section copy tightening** — Add "customers" to headline for specificity. Split body into two emotional beats (external → internal). Add philosophical problem line.
  - File: `App.vue:353-362`
  - Headline: "Signal blindness is costing you" → "Signal blindness is costing you customers"

- [x] **1.4 How It Works headline simplify** — "Three steps to evidence-based product decisions" is corporate. Simplify.
  - File: `App.vue:399-401`

- [x] **1.5 Chat Demo body fix** — Remove "not hallucinations" (introduces doubt). Replace with trust-forward language.
  - File: `App.vue:540-543`

- [x] **1.6 Integrations headline + body rewrite** — Differentiate from How It Works step 1. Lead with "no new workflows."
  - File: `App.vue:505-511`

- [x] **1.7 Final CTA — add stakes line** — Add urgency line before CTA button: "Every week you wait, more customer insights disappear into unread transcripts."
  - File: `App.vue:578-581`

---

## Phase 2: Replace Metrics with Success Section (structural + copy)

Both audits flagged the Metrics section as cold and emotionally flat. Replace it with SB7 Element 7 (Success/Transformation).

- [x] **2.1 Replace metrics data with success outcomes** — Replace the 4 cold metrics with 4 transformation outcomes that paint "life after ThesisForge."
  - File: `App.vue:147-152` (metrics array) + `App.vue:558-567` (template)
  - New cards: "Ship features customers asked for" / "Back every decision with evidence" / "Cut prioritization meetings in half" / "Hear every customer, not just the loudest"

- [x] **2.2 Update section markup** — Add section header (eyebrow + headline) to match page rhythm. Adjust card styling for outcome-focused content vs numeric data.
  - File: `App.vue:558-567`

---

## Phase 3: UI Consistency + Component Adoption

- [x] **3.1 Adopt Button.vue for all CTAs** — Replace all inline `<a>` button styling with `<Button as="a">`. Add `lg` size variant to Button.vue.
  - Files: `Button.vue` (add lg size), `App.vue` lines 319-323, 231-237, 584-588, 325-330
  - Fixes: 3 different border-radius, 3 padding scales, 2 font weights → 1 component

- [x] **3.2 Remove feature ID numbers** — Remove "01", "02" etc. from feature cards. They add visual noise without information.
  - File: `App.vue:469-473` (template) — can keep `id` in data for keys

- [x] **3.3 Fix contrast on muted-foreground/50** — Replace all `text-muted-foreground/50` with `/70` minimum for WCAG compliance.
  - File: `App.vue` lines 470, 515 + any others using `/50` on text

---

## Phase 4: Spacing + Layout Polish

- [x] **4.1 Increase section vertical padding** — Change `py-16` to `py-20 md:py-28` on all major bordered sections.
  - File: `App.vue` lines 347, 391, 434, 497, 531, 558 (6 sections)

- [x] **4.2 Fix h3 hierarchy** — Change `font-semibold` to `font-bold tracking-tight` on step titles and feature card titles.
  - File: `App.vue` lines 425, 475

- [x] **4.3 Fix mobile hero heading** — Add explicit `leading-[1.1]` for mobile, `md:leading-none` for desktop. Verify no overflow at 320px.
  - File: `App.vue:297`

- [x] **4.4 Fix footer mobile grid** — Use `grid-cols-2` on small screens, `sm:grid-cols-3`, then `md:grid-cols-5`. Brand column spans full width on mobile.
  - File: `App.vue:600`

---

## Phase 5: Quick Wins + Polish

- [x] **5.1 Add `transition-colors` to footer links** — They currently snap without transition.
  - File: `App.vue` lines 622-663

- [x] **5.2 Vary problem stat card gradient colors** — All 3 cards use identical orange gradient. Differentiate with amber/rose/blue.
  - File: `App.vue:365, 372, 380`

- [x] **5.3 Mobile menu transition** — Replace `v-if` with `v-show` + height transition for smooth reveal.
  - File: `App.vue:253`

- [x] **5.4 Integration pills — remove hover or add cursor-default** — Pills look clickable but aren't. Mixed signal.
  - File: `style.css` lines 389-395

- [x] **5.5 Timeline line fade** — Add gradient fade at endpoints to mask alignment imprecision.
  - File: `style.css` lines 209-217

- [x] **5.6 Verify hero `<br>` doesn't orphan "next"** — At `text-8xl` in 1200px container, "next" alone on line 2 may look orphaned.
  - File: `App.vue:300`

---

## Review Log

| Date | Phase | Status | Notes |
|------|-------|--------|-------|
| 2026-03-10 | Audit | Complete | UI design + StoryBrand SB7 audit done |
| 2026-03-10 | Phase 1 | Complete | All 7 copy rewrites applied |
| 2026-03-10 | Phase 2 | Complete | Metrics → Success section, removed dead CSS |
| 2026-03-10 | Phase 3 | Complete | Button adoption, removed IDs, fixed contrast |
| 2026-03-10 | Phase 4 | Complete | Section spacing, h3 hierarchy, hero line-height, footer grid |
| 2026-03-10 | Phase 5 | Complete | Footer transitions, card colors, menu anim, pills, timeline, hero verified |
