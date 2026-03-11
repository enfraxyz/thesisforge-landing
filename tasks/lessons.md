# Lessons Learned

## Copywriting

- **Feature titles must be benefits, not technical labels.** "Multi-Source Ingestion" means nothing to a PM scrolling at 11pm. "Every source, one place" is instant comprehension. Always translate: "which means you can [benefit]."
- **Never introduce doubt you didn't need to.** "Not hallucinations" plants a seed of distrust. Reframe positively: "every answer cites its sources — so you can trust what you're reading."
- **StoryBrand Element 7 (Success) is the most commonly missing section on SaaS landing pages.** Metrics are competency signals (Guide element) but emotionally neutral. The customer's real question: "What will my life look like after I buy this?" Paint that picture explicitly.
- **Meta descriptions and OG descriptions have different length limits.** Meta: 150-160 chars (Google truncates). OG: up to 300 chars. Write both — don't force one to serve both purposes.

## UI Design

- **`text-muted-foreground/50` fails WCAG contrast on dark backgrounds.** Minimum viable opacity is `/70` for decorative text, higher for functional text. Always check contrast ratios, don't eyeball.
- **If you build a component (Button.vue), use it everywhere.** Three inline CTA styles with different border-radius, padding, and font-weight is tech debt that compounds. Adopt the component immediately.
- **Section spacing (`py-16`) that works for dense dashboards is too cramped for marketing pages with large display type.** Landing pages with `text-5xl` headings need `py-20 md:py-28` minimum between bordered sections.
- **Interactive hover states on non-interactive elements create mixed signals.** If integration pills aren't clickable, either remove the hover effect or add `cursor-default`.

## Architecture

- **Extract page content into views early.** A single-file App.vue works until you need a second route. The refactor from monolithic to shell+views touches every section and is easier to do before the codebase grows.
- **Route-level code splitting is free in Vite.** `() => import(...)` in the router gives you a separate chunk per view. DocsView (20KB) only loads when users visit `/docs`. No reason not to do this from the start.
- **Keep data arrays in the view that uses them, not in the shell.** Features, steps, integrations belong in HomeView, not App.vue. The shell should only have shared concerns (nav, footer, auth state).

## SEO

- **Always verify referenced assets exist.** `og-image.png`, `favicon-32x32.png`, and `apple-touch-icon.png` were all referenced in `<head>` but missing from `/public/`. Social shares showed no image. Check `public/` against every `<link>` and `<meta>` tag.
- **Update all copy in parallel.** When rewriting hero copy, also update: meta description, OG description, Twitter description, JSON-LD description, noscript fallback, and footer tagline. Missing any one creates inconsistency.

## Process

- **Run both design and copy audits in parallel.** They surface different issues from different lenses but converge on the same pain points (features section, metrics section). The combined view is more valuable than either alone.
- **Phase implementation by risk, not by file.** Copy changes (Phase 1) are zero-risk text swaps. Structural changes (Phase 2-3) touch layout. CSS polish (Phase 4-5) is safe but lower impact. This order means each phase builds on a stable foundation.
