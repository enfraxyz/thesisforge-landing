<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  Brain,
  Layers,
  MessageSquareText,
  FileText,
  BarChart3,
} from "lucide-vue-next";
import Badge from "@/components/ui/Badge.vue";
import Button from "@/components/ui/Button.vue";
import Card from "@/components/ui/Card.vue";

const mobileMenuOpen = ref(false);

const APP_URL = "https://app.thesisforge.io";
const GITHUB_URL = "https://github.com/thesisforge";

/* ─── Data ─── */

const features = [
  {
    id: "01",
    icon: Zap,
    title: "Every source, one place",
    body: "Connect Gong, Intercom, Slack, Linear, PostHog, and more. Calls, tickets, threads, and usage data — automatically classified and flowing into a single view.",
    screenshot: "/screenshot-signals.png",
  },
  {
    id: "02",
    icon: Brain,
    title: "AI reads between the lines",
    body: "Extracts feature requests, pain points, churn signals, and praise from raw conversations. Auto-classifies urgency and sentiment so nothing important gets buried.",
    screenshot: "/screenshot-signal-detail.png",
  },
  {
    id: "03",
    icon: Layers,
    title: "Patterns surface automatically",
    body: "Groups signals into themes like feature gaps, UX friction, and churn risk — weighted by customer revenue. See what matters most without building a single spreadsheet.",
    screenshot: "/screenshot-theme-detail.png",
  },
  {
    id: "04",
    icon: MessageSquareText,
    title: "Ask anything, get evidence",
    body: "Query your entire signal corpus in natural language. Every answer cites the specific customers and conversations it came from.",
    screenshot: null,
  },
  {
    id: "05",
    icon: FileText,
    title: "Specs that write themselves",
    body: "Generate implementation-ready specs from real conversations. Problem statements, user stories, and requirements — every claim backed by customer evidence.",
    screenshot: null,
  },
  {
    id: "06",
    icon: BarChart3,
    title: "Know your signal health",
    body: "Track signal volume, theme trends, source coverage, and cost per query. See which feature areas carry the most customer weight.",
    screenshot: null,
  },
];

const steps = [
  {
    num: "01",
    label: "Ingest",
    title: "Connect your signal sources",
    body: "Hook up Gong, Intercom, Slack, Linear, or upload CSVs. New data flows in automatically — every call, every ticket, every issue.",
  },
  {
    num: "02",
    label: "Analyze",
    title: "Discover patterns you missed",
    body: "LLM extraction pulls structured insights from raw text. Theme clustering surfaces the cross-customer patterns hiding in your feedback.",
  },
  {
    num: "03",
    label: "Act",
    title: "Build what actually matters",
    body: "Chat with your signal corpus for evidence-based answers. Generate product specs grounded in what customers said — not what you assumed.",
  },
];

const integrationGroups = [
  {
    label: "Customer Voice",
    dot: "bg-amber-400/70",
    items: [
      { name: "Gong" },
      { name: "Fireflies" },
    ],
  },
  {
    label: "Support Signal",
    dot: "bg-rose-400/70",
    items: [
      { name: "Intercom" },
      { name: "Zendesk" },
    ],
  },
  {
    label: "Internal",
    dot: "bg-blue-400/70",
    items: [
      { name: "Slack" },
      { name: "Notion" },
    ],
  },
  {
    label: "Backlog",
    dot: "bg-violet-400/70",
    items: [
      { name: "Linear" },
      { name: "Jira" },
    ],
  },
  {
    label: "Analytics",
    dot: "bg-emerald-400/70",
    items: [
      { name: "PostHog" },
      { name: "Amplitude" },
    ],
  },
  {
    label: "Manual",
    dot: "bg-slate-400/70",
    items: [
      { name: "CSV Import" },
      { name: "Text Paste" },
    ],
  },
];

const stepColors = [
  { circle: "bg-primary/15 text-primary border-primary/30", label: "text-primary" },
  { circle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30", label: "text-yellow-400" },
  { circle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", label: "text-emerald-400" },
];

const outcomes = [
  { headline: "Ship what customers asked for", body: "Every feature on your roadmap backed by real signal data — not the loudest voice in the room." },
  { headline: "Back every decision with evidence", body: "Walk into any prioritization meeting with cited customer quotes and revenue-weighted themes." },
  { headline: "Cut research time by 10x", body: "Stop combing through transcripts manually. Ask a question, get an evidence-cited answer in seconds." },
  { headline: "Hear every customer — not just the loudest", body: "Revenue-weighted themes surface what matters most, so quiet accounts with big pain don't slip through." },
];

/* ─── Scroll Reveal ─── */

let revealObserver: IntersectionObserver | null = null;

onMounted(() => {
  const els = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!els.length) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  els.forEach((el) => revealObserver!.observe(el));
});

onUnmounted(() => {
  revealObserver?.disconnect();
});
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Background gradient -->
    <div class="hero-grid" aria-hidden="true" />

    <!-- ═══════════════════ HEADER ═══════════════════ -->
    <header
      class="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur"
    >
      <div class="container flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 text-lg font-semibold">
          <img src="/logo.svg" alt="" class="h-7 w-7" aria-hidden="true" />
          <span>ThesisForge</span>
        </a>

        <!-- Desktop nav -->
        <nav
          aria-label="Main navigation"
          class="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
        >
          <a href="#features" class="hover:text-foreground transition-colors"
            >Features</a
          >
          <a href="#how-it-works" class="hover:text-foreground transition-colors"
            >How It Works</a
          >
          <a
            href="#integrations"
            class="hover:text-foreground transition-colors"
            >Integrations</a
          >
        </nav>

        <!-- Desktop CTA buttons -->
        <div class="hidden items-center gap-3 md:flex">
          <Button as="a" :href="GITHUB_URL" target="_blank" rel="noopener noreferrer" variant="outline" size="header" class="text-muted-foreground hover:text-foreground">
            GitHub
          </Button>
          <Button as="a" :href="`${APP_URL}/setup`" size="header">
            Get Started
            <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out overflow-hidden"
        leave-active-class="transition-all duration-150 ease-in overflow-hidden"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-60 opacity-100"
        leave-from-class="max-h-60 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
      <div
        v-if="mobileMenuOpen"
        class="border-t border-border/40 bg-background/95 backdrop-blur md:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          class="container flex flex-col gap-1 py-3 text-sm text-muted-foreground"
        >
          <a
            href="#features"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
            >Features</a
          >
          <a
            href="#how-it-works"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
            >How It Works</a
          >
          <a
            href="#integrations"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
            >Integrations</a
          >
          <hr class="my-1 border-border/40" />
          <a
            :href="`${APP_URL}/setup`"
            class="rounded-md px-3 py-2 font-medium text-primary hover:bg-muted"
            @click="mobileMenuOpen = false"
            >Get Started</a
          >
        </nav>
      </div>
      </Transition>
    </header>

    <main id="main-content">
      <!-- ═══════════════════ HERO ═══════════════════ -->
      <section aria-label="Hero" class="container relative pt-24 pb-20 text-center md:pt-32">
        <Badge variant="amber" class="mb-6 hero-enter hero-enter-1">
          Stop guessing what to build
        </Badge>

        <h1
          class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight leading-[1.1] md:text-8xl md:leading-none hero-enter hero-enter-2 font-serif"
        >
          Know what to build
          <br class="hidden md:block" />
          <span class="relative inline-block text-primary">
            next
            <svg class="absolute -bottom-1 left-0 w-full md:-bottom-2" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 6 Q25 0 50 4 Q75 8 100 2" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
            </svg>
          </span>
        </h1>

        <p
          class="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg md:leading-relaxed hero-enter hero-enter-3"
        >
          Your customers are already telling you what they need — in calls,
          tickets, threads, and usage data. ThesisForge finds the patterns
          you're missing and turns them into specs you can ship.
        </p>

        <div class="mt-8 flex items-center justify-center gap-4 hero-enter hero-enter-4">
          <Button as="a" :href="`${APP_URL}/setup`" size="lg" class="install-glow">
            Start Free
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button as="a" href="#how-it-works" variant="outline" size="lg" class="text-muted-foreground hover:text-foreground">
            See How It Works
          </Button>
        </div>

        <!-- App screenshot — themes view -->
        <div class="mx-auto mt-14 max-w-4xl perspective surface-enter">
          <div class="app-surface" role="img" aria-label="ThesisForge theme clustering view showing auto-discovered patterns across customer signals">
            <img
              src="/screenshot-themes.png"
              alt="ThesisForge Themes view — auto-discovered patterns like UX Friction, Feature Gap, and Churn Risk with signal counts and trend indicators"
              class="w-full rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <!-- ═══════════════════ PROBLEM ═══════════════════ -->
      <section id="problem" class="container border-t border-border/50 py-20 md:py-28 reveal">
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          The Problem
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          Signal blindness is costing you customers
        </h2>
        <p class="mt-4 max-w-3xl text-muted-foreground md:text-lg">
          Your customers tell you what to build every day — in Gong calls,
          support tickets, Slack threads, and usage data. But those signals are
          buried across 12+ tools in unstructured text.
          <em class="font-serif italic text-foreground not-italic">You can't see the patterns.</em>
        </p>
        <p class="mt-3 max-w-3xl text-muted-foreground md:text-lg">
          So you prioritize from gut instinct and stakeholder opinions. And you
          know that's not good enough.
        </p>
        <div class="mt-10 grid gap-4 md:grid-cols-3 reveal-stagger">
          <Card class="p-6 relative overflow-hidden">
            <div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/60 to-primary/0" />
            <p class="text-4xl font-bold text-primary font-mono tracking-tight">73%</p>
            <p class="mt-3 text-sm text-muted-foreground leading-relaxed">
              of PMs say they lack confidence in their prioritization decisions
            </p>
          </Card>
          <Card class="p-6 relative overflow-hidden">
            <div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-400/60 to-amber-400/0" />
            <p class="text-4xl font-bold text-amber-400 font-mono tracking-tight">12+</p>
            <p class="mt-3 text-sm text-muted-foreground leading-relaxed">
              tools where customer feedback lives — disconnected and
              unsearchable
            </p>
          </Card>
          <Card class="p-6 relative overflow-hidden">
            <div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-rose-400/60 to-rose-400/0" />
            <p class="text-4xl font-bold text-rose-400 font-mono tracking-tight">80%</p>
            <p class="mt-3 text-sm text-muted-foreground leading-relaxed">
              of customer insights never make it into a product decision
            </p>
          </Card>
        </div>
      </section>

      <!-- ═══════════════════ HOW IT WORKS ═══════════════════ -->
      <section
        id="how-it-works"
        class="container border-t border-border/50 py-20 md:py-28 reveal"
      >
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          How It Works
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          From scattered signals to shipped features
        </h2>

        <div class="mt-12 relative">
          <!-- Connecting line (desktop only) -->
          <div class="timeline-line hidden md:block" aria-hidden="true" />

          <div class="grid gap-8 md:grid-cols-3 reveal-stagger">
            <div v-for="(step, i) in steps" :key="step.num" class="relative text-center md:text-left">
              <!-- Step circle -->
              <div class="flex justify-center md:justify-start mb-5">
                <span
                  :class="[
                    'relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border text-sm font-mono font-bold',
                    stepColors[i]?.circle ?? ''
                  ]"
                >{{ step.num }}</span>
              </div>
              <!-- Label -->
              <p
                :class="[
                  'text-xs uppercase tracking-[0.15em] font-mono font-semibold mb-2',
                  stepColors[i]?.label ?? ''
                ]"
              >{{ step.label }}</p>
              <h3 class="text-xl font-bold tracking-tight">{{ step.title }}</h3>
              <p class="mt-2 text-muted-foreground">{{ step.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════ FEATURES ═══════════════════ -->
      <section
        id="features"
        class="container border-t border-border/50 py-20 md:py-28 reveal"
      >
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          Capabilities
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          From raw signal to shipped feature
        </h2>
        <p class="mt-4 max-w-3xl text-muted-foreground">
          Every step of the product intelligence pipeline — automated,
          structured, and grounded in customer evidence.
        </p>

        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          <Card
            v-for="(feature, i) in features"
            :key="feature.id"
            :class="[
              feature.screenshot ? 'p-0 overflow-hidden' : 'p-6',
              i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            ]"
          >
            <div :class="feature.screenshot ? 'p-6 pb-4' : ''">
              <div class="mb-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10"
                >
                  <component
                    :is="feature.icon"
                    class="h-4.5 w-4.5 text-primary"
                  />
                </div>
              </div>
              <h3 class="text-lg font-bold">{{ feature.title }}</h3>
              <p class="mt-2 text-sm text-muted-foreground" :class="i === 0 ? 'max-w-xl' : ''">
                {{ feature.body }}
              </p>
            </div>
            <!-- Feature screenshot -->
            <div v-if="feature.screenshot" class="mt-2 px-4 pb-4">
              <div class="feature-screenshot-wrap">
                <img
                  :src="feature.screenshot"
                  :alt="`${feature.title} — ThesisForge app screenshot`"
                  class="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <!-- ═══════════════════ INTEGRATIONS ═══════════════════ -->
      <section
        id="integrations"
        class="container border-t border-border/50 py-20 md:py-28 reveal"
      >
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          Integrations
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          Works with your existing stack
        </h2>
        <p class="mt-4 max-w-3xl text-muted-foreground">
          No new workflows to learn. ThesisForge plugs into the tools your
          team already uses — and more sources mean deeper patterns.
        </p>

        <div class="mt-10 space-y-6 reveal-stagger">
          <div v-for="group in integrationGroups" :key="group.label">
            <p class="text-xs font-mono text-muted-foreground/70 uppercase tracking-widest mb-3">{{ group.label }}</p>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="item in group.items"
                :key="item.name"
                class="integration-pill"
              >
                <span :class="['h-2 w-2 rounded-full shrink-0', group.dot]" aria-hidden="true" />
                <span class="font-medium text-foreground">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════ CHAT DEMO SURFACE ═══════════════════ -->
      <section aria-label="Chat Intelligence Demo" class="container border-t border-border/50 py-20 md:py-28 reveal">
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          Intelligence
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          Ask your signals anything
        </h2>
        <p class="mt-4 max-w-3xl text-muted-foreground">
          Query your entire customer corpus in natural language. Every answer
          cites the specific signals and customers it came from — so you can
          trust what you're reading.
        </p>

        <div class="mx-auto mt-10 max-w-4xl">
          <div class="app-surface" role="img" aria-label="ThesisForge chat intelligence showing evidence-cited answers with MRR data">
            <img
              src="/screenshot-chat.png"
              alt="ThesisForge Intelligence view — natural language query returning evidence-cited answers with company MRR breakdown and signal sources"
              class="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- ═══════════════════ SUCCESS / TRANSFORMATION ═══════════════════ -->
      <section aria-label="What changes" class="container border-t border-border/50 py-20 md:py-28 reveal">
        <p
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono"
        >
          The Outcome
        </p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">
          What changes when you stop guessing
        </h2>

        <div class="mt-10 grid gap-4 md:grid-cols-2 reveal-stagger">
          <Card v-for="outcome in outcomes" :key="outcome.headline" class="p-6">
            <h3 class="text-lg font-bold tracking-tight">{{ outcome.headline }}</h3>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">{{ outcome.body }}</p>
          </Card>
        </div>
      </section>

      <!-- ═══════════════════ FINAL CTA ═══════════════════ -->
      <section aria-label="Get started" class="relative border-t border-border/50 py-24 text-center reveal overflow-hidden md:py-32">
        <!-- Forge glow -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_50%_60%,rgba(212,112,42,0.06),transparent)]" aria-hidden="true" />
        <div class="container relative">
          <h2 class="text-3xl font-semibold md:text-5xl font-serif">
            Stop guessing.
            <span class="text-primary">Start forging.</span>
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Every week you wait, more customer insights disappear into unread
            transcripts. Connect your first signal source in under 2 minutes.
          </p>
          <div class="mt-8 flex items-center justify-center gap-4">
            <Button as="a" :href="`${APP_URL}/setup`" size="lg" class="install-glow">
              Get Started Free
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <p class="mt-4 text-xs text-muted-foreground/70">
            No credit card required · Free tier available
          </p>
        </div>
      </section>
    </main>

    <!-- ═══════════════════ FOOTER ═══════════════════ -->
    <footer class="footer-gradient py-10">
      <div class="container grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-3 md:col-span-1">
          <div class="flex items-center gap-2 text-lg font-semibold">
            <img
              src="/logo.svg"
              alt=""
              class="h-5 w-5"
              aria-hidden="true"
            />
            ThesisForge
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Know what to build next.
          </p>
        </div>

        <!-- Product -->
        <div>
          <p class="font-medium">Product</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#features" class="transition-colors hover:text-foreground">Features</a>
            </li>
            <li>
              <a href="#integrations" class="transition-colors hover:text-foreground"
                >Integrations</a
              >
            </li>
            <li>
              <a href="#how-it-works" class="transition-colors hover:text-foreground"
                >How It Works</a
              >
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <p class="font-medium">Resources</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-foreground">Documentation</a>
            </li>
            <li>
              <a :href="`${GITHUB_URL}/releases`" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-foreground">Changelog</a>
            </li>
          </ul>
        </div>

        <!-- Open Source -->
        <div>
          <p class="font-medium">Open Source</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-foreground"
                >GitHub</a
              >
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <p class="font-medium">Legal</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a :href="`${APP_URL}/terms`" class="transition-colors hover:text-foreground">Terms</a>
            </li>
            <li>
              <a :href="`${APP_URL}/privacy`" class="transition-colors hover:text-foreground">Privacy</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="container mt-8 border-t border-border/30 pt-6 text-center text-xs text-muted-foreground/70"
      >
        &copy; {{ new Date().getFullYear() }} ThesisForge. All rights reserved.
      </div>
    </footer>
  </div>
</template>
