<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronRight, ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import { useSeo } from "@/composables/useSeo";

const APP_URL = "https://app.thesisforge.io";

useSeo({
  title: "Documentation",
  description:
    "Learn how to connect your customer signals, discover themes, query your data with AI, and generate implementation-ready specs with ThesisForge.",
  url: "https://thesisforge.io/docs",
});

/* ─── Sidebar Navigation ─── */

const sections = [
  { id: "getting-started", label: "Getting Started" },
  { id: "connecting-sources", label: "Connecting Sources" },
  { id: "signals", label: "Signals" },
  { id: "themes", label: "Themes" },
  { id: "chat-intelligence", label: "Chat Intelligence" },
  { id: "specs", label: "Spec Generation" },
  { id: "integrations", label: "Integrations Reference" },
  { id: "uploading-data", label: "Uploading Data" },
  { id: "limits", label: "Limits & Pricing" },
];

/* ─── Active section tracking ─── */

const activeSection = ref("getting-started");
let sectionObserver: IntersectionObserver | null = null;

onMounted(() => {
  const els = document.querySelectorAll("section[id]");
  if (!els.length) return;

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      }
    },
    { threshold: 0.1, rootMargin: "-80px 0px -60% 0px" },
  );

  els.forEach((el) => sectionObserver!.observe(el));
});

onUnmounted(() => {
  sectionObserver?.disconnect();
});

/* ─── Mobile sidebar toggle ─── */
const sidebarOpen = ref(false);

/* ─── Integration data ─── */

const integrations = [
  { name: "Gong", type: "OAuth", signalType: "Customer Voice", description: "Call recordings and AI-generated transcripts from sales and CS calls." },
  { name: "Fireflies", type: "API Key", signalType: "Customer Voice", description: "Meeting transcripts from recorded calls." },
  { name: "Intercom", type: "OAuth", signalType: "Support Signal", description: "Customer support conversations and tickets." },
  { name: "Zendesk", type: "OAuth", signalType: "Support Signal", description: "Support tickets and customer interactions." },
  { name: "Slack", type: "OAuth", signalType: "Internal", description: "Team discussions, customer-shared channels, and feedback threads." },
  { name: "Notion", type: "OAuth", signalType: "Internal", description: "Database pages, meeting notes, and internal docs." },
  { name: "Linear", type: "OAuth", signalType: "Backlog", description: "Issues, feature requests, and roadmap items." },
  { name: "Jira", type: "OAuth", signalType: "Backlog", description: "Issues, sprints, and backlog items." },
  { name: "PostHog", type: "API Key", signalType: "Analytics", description: "Product analytics events, funnels, and user behavior." },
  { name: "Amplitude", type: "API Key", signalType: "Analytics", description: "User analytics, events, and behavioral data." },
  { name: "CSV Import", type: "Manual", signalType: "Any", description: "Upload spreadsheets of customer feedback, survey results, or NPS data." },
  { name: "Manual Entry", type: "Manual", signalType: "Any", description: "Paste or type individual signals — call notes, meeting takeaways, ad-hoc feedback." },
];
</script>

<template>
  <main id="main-content" class="container pt-24 pb-20 md:pt-28">
    <div class="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[240px_1fr]">
      <!-- ─── Sidebar ─── -->
      <aside class="hidden lg:block">
        <nav class="sticky top-24" aria-label="Documentation navigation">
          <p class="text-xs uppercase tracking-[0.15em] font-mono font-semibold text-muted-foreground mb-4">
            Documentation
          </p>
          <ul class="space-y-1">
            <li v-for="section in sections" :key="section.id">
              <a
                :href="`#${section.id}`"
                :class="[
                  'block rounded-md px-3 py-1.5 text-sm transition-colors',
                  activeSection === section.id
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                ]"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- ─── Mobile section nav ─── -->
      <div class="mb-8 lg:hidden">
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="flex w-full items-center justify-between rounded-lg border border-border/60 bg-card/40 px-4 py-3 text-sm text-muted-foreground"
        >
          <span>Jump to section</span>
          <ChevronRight :class="['h-4 w-4 transition-transform', sidebarOpen ? 'rotate-90' : '']" />
        </button>
        <Transition
          enter-active-class="transition-all duration-200 ease-out overflow-hidden"
          leave-active-class="transition-all duration-150 ease-in overflow-hidden"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-96 opacity-100"
          leave-from-class="max-h-96 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <ul v-if="sidebarOpen" class="mt-2 space-y-1 rounded-lg border border-border/60 bg-card/40 p-2">
            <li v-for="section in sections" :key="section.id">
              <a
                :href="`#${section.id}`"
                class="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                @click="sidebarOpen = false"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>
        </Transition>
      </div>

      <!-- ─── Content ─── -->
      <div class="docs-content min-w-0">
        <h1 class="text-3xl font-semibold md:text-5xl font-serif">Documentation</h1>
        <p class="mt-4 text-muted-foreground md:text-lg">
          Everything you need to get started with ThesisForge — from connecting your first
          signal source to generating implementation-ready specs.
        </p>

        <!-- ═══════════ GETTING STARTED ═══════════ -->
        <section id="getting-started" class="docs-section">
          <h2>Getting Started</h2>
          <p>
            ThesisForge turns your scattered customer signals into product direction.
            Here's how to go from zero to evidence-based decisions in under 5 minutes.
          </p>

          <h3>1. Create your workspace</h3>
          <p>
            After signing in, you'll land on the setup page. You have two options:
          </p>
          <ul>
            <li>
              <strong>Explore the demo</strong> — A pre-loaded workspace with ~500 synthetic signals
              from a fictional SaaS company ("Stackline"). Great for exploring the product without connecting your own data.
            </li>
            <li>
              <strong>Create your own workspace</strong> — Start fresh with your real data.
              Name your workspace, then connect your signal sources.
            </li>
          </ul>

          <h3>2. Connect your signal sources</h3>
          <p>
            Navigate to <strong>Integrations</strong> and connect at least one source.
            OAuth connectors (Gong, Intercom, Slack, Linear, etc.) take one click.
            API key connectors (PostHog, Amplitude, Fireflies) require pasting a key.
            You can also upload CSVs or paste text directly.
          </p>

          <h3>3. Wait for processing</h3>
          <p>
            Once connected, ThesisForge syncs your data automatically. Each signal goes through
            a multi-step pipeline:
          </p>
          <ol>
            <li><strong>Extract</strong> — AI identifies feature requests, pain points, bugs, praise, and churn signals</li>
            <li><strong>Classify</strong> — Sentiment, urgency, and feature areas are auto-assigned</li>
            <li><strong>Embed</strong> — Vector embeddings enable semantic search</li>
            <li><strong>Cluster</strong> — Signals are grouped into themes automatically</li>
          </ol>
          <p>
            Processing typically takes a few minutes depending on volume. You'll see signals appear
            in real-time as they complete.
          </p>

          <h3>4. Explore your signals</h3>
          <p>
            Once processing is complete, you can browse signals in the <strong>Signals</strong> feed,
            explore discovered themes in <strong>Themes</strong>, ask questions in <strong>Chat</strong>,
            and generate specs in <strong>Specs</strong>.
          </p>
        </section>

        <!-- ═══════════ CONNECTING SOURCES ═══════════ -->
        <section id="connecting-sources" class="docs-section">
          <h2>Connecting Sources</h2>
          <p>
            ThesisForge supports 12 signal sources across 5 categories. Each connector syncs
            automatically after initial setup — new data flows in without manual intervention.
          </p>

          <h3>OAuth connectors</h3>
          <p>
            For Gong, Intercom, Zendesk, Slack, Notion, Linear, and Jira — click <strong>Connect</strong>,
            authorize in the popup, and you're done. ThesisForge requests only the permissions it needs
            to read your data. Credentials are encrypted at rest.
          </p>

          <h3>API key connectors</h3>
          <p>
            For PostHog, Amplitude, and Fireflies — paste your API key in the configuration drawer.
            ThesisForge validates the key immediately and starts syncing.
          </p>

          <h3>Manual sources</h3>
          <p>
            Upload CSVs (up to 10,000 rows, 10 MB) or paste text directly. Great for survey results,
            NPS feedback, interview notes, or any data that doesn't live in a connected tool.
          </p>

          <h3>Connector status</h3>
          <p>Each connector shows its current status:</p>
          <ul>
            <li><strong>Active</strong> — Connected and syncing normally</li>
            <li><strong>Syncing</strong> — Currently pulling new data</li>
            <li><strong>Error</strong> — Sync failed (check the error message for details)</li>
            <li><strong>Paused</strong> — Manually paused by you</li>
            <li><strong>Disconnected</strong> — OAuth token revoked or expired</li>
          </ul>
        </section>

        <!-- ═══════════ SIGNALS ═══════════ -->
        <section id="signals" class="docs-section">
          <h2>Signals</h2>
          <p>
            A <strong>signal</strong> is any piece of customer feedback, behavior, or communication
            that ThesisForge ingests and analyzes. Signals are the atomic unit of product intelligence.
          </p>

          <h3>What gets extracted</h3>
          <p>For each signal, AI extracts:</p>
          <ul>
            <li><strong>Entities</strong> — Feature requests, pain points, bug reports, praise, churn signals, competitive mentions, questions, and workflow descriptions</li>
            <li><strong>Sentiment</strong> — Negative (-1) to positive (+1)</li>
            <li><strong>Urgency</strong> — Low, medium, high, or critical</li>
            <li><strong>Feature areas</strong> — Which parts of your product are mentioned (e.g., "billing", "onboarding", "API")</li>
          </ul>

          <h3>Signal types</h3>
          <p>Signals are categorized by their source:</p>
          <ul>
            <li><strong>Customer voice</strong> — Call transcripts (Gong, Fireflies)</li>
            <li><strong>Support signal</strong> — Tickets and conversations (Intercom, Zendesk)</li>
            <li><strong>Usage data</strong> — Product analytics events (PostHog, Amplitude)</li>
            <li><strong>Backlog</strong> — Issues and feature requests (Linear, Jira)</li>
            <li><strong>Internal</strong> — Team discussions and docs (Slack, Notion)</li>
          </ul>

          <h3>Filtering signals</h3>
          <p>
            The Signals feed supports filtering by source type, urgency, sentiment, customer
            segment, and feature area. Use these filters to drill into specific problem areas
            or customer cohorts.
          </p>
        </section>

        <!-- ═══════════ THEMES ═══════════ -->
        <section id="themes" class="docs-section">
          <h2>Themes</h2>
          <p>
            <strong>Themes</strong> are automatically discovered patterns across your signals.
            When multiple customers report similar pain points, request similar features, or
            exhibit similar behavior — ThesisForge groups those signals into a theme.
          </p>

          <h3>How clustering works</h3>
          <p>
            After signals are processed, a clustering job runs automatically. It uses AI to
            identify recurring patterns across signal summaries and entities, then creates or
            updates themes. Themes are weighted by customer revenue when MRR data is available.
          </p>

          <h3>Theme categories</h3>
          <ul>
            <li><strong>Feature gap</strong> — A capability customers want but don't have</li>
            <li><strong>UX friction</strong> — Usability or workflow problems</li>
            <li><strong>Bug pattern</strong> — Recurring technical issues</li>
            <li><strong>Churn risk</strong> — Signals tied to potential customer loss</li>
            <li><strong>Expansion signal</strong> — Upsell or growth opportunities</li>
          </ul>

          <h3>Theme status</h3>
          <p>Track your response to each theme:</p>
          <ul>
            <li><strong>Emerging</strong> — New pattern, not yet validated</li>
            <li><strong>Confirmed</strong> — You've validated this is a real pattern worth addressing</li>
            <li><strong>Addressed</strong> — You've shipped a fix or feature for this</li>
            <li><strong>Dismissed</strong> — Marked as noise or not relevant</li>
          </ul>

          <h3>Trend indicators</h3>
          <p>
            Each theme shows whether it's <strong>rising</strong>, <strong>stable</strong>,
            or <strong>declining</strong> based on signal volume over time. Rising themes with
            high revenue weight deserve immediate attention.
          </p>
        </section>

        <!-- ═══════════ CHAT INTELLIGENCE ═══════════ -->
        <section id="chat-intelligence" class="docs-section">
          <h2>Chat Intelligence</h2>
          <p>
            Chat lets you query your entire signal corpus in natural language. Ask a question,
            and ThesisForge retrieves the most relevant signals, synthesizes an answer, and
            cites every source.
          </p>

          <h3>How retrieval works</h3>
          <ol>
            <li>Your question is broken into multiple sub-queries for coverage</li>
            <li>Semantic search retrieves the top signals by relevance</li>
            <li>Re-ranking selects the most informative signals</li>
            <li>A diversity filter ensures answers draw from multiple customers and sources</li>
            <li>AI synthesizes an evidence-cited answer in real-time</li>
          </ol>

          <h3>Example questions</h3>
          <ul>
            <li>"What are the top 3 feature requests from enterprise customers?"</li>
            <li>"What's causing churn in the last quarter?"</li>
            <li>"What do customers say about our onboarding experience?"</li>
            <li>"Which billing issues are mentioned most often?"</li>
            <li>"Compare feedback from SMB vs. enterprise segments"</li>
          </ul>

          <h3>Evidence and citations</h3>
          <p>
            Every answer shows which signals contributed — including the customer name,
            source type, and MRR when available. You can click into any cited signal
            to read the full context.
          </p>
        </section>

        <!-- ═══════════ SPEC GENERATION ═══════════ -->
        <section id="specs" class="docs-section">
          <h2>Spec Generation</h2>
          <p>
            Turn any chat conversation into an implementation-ready product spec. From
            a single click, ThesisForge generates a structured document with problem statements,
            user stories, requirements, and success metrics — all grounded in real customer evidence.
          </p>

          <h3>How to generate a spec</h3>
          <ol>
            <li>Have a chat conversation exploring a theme or customer need</li>
            <li>Click <strong>Generate Spec</strong> on any conversation</li>
            <li>The spec streams in real-time as it's generated</li>
            <li>Review, edit, and share with your engineering team</li>
          </ol>

          <h3>What's included</h3>
          <p>Each generated spec covers:</p>
          <ul>
            <li><strong>Problem statement</strong> — What customers are experiencing</li>
            <li><strong>User needs</strong> — Specific use cases and scenarios</li>
            <li><strong>Proposed solution</strong> — Recommended approach</li>
            <li><strong>Requirements</strong> — Functional and non-functional</li>
            <li><strong>Success metrics</strong> — How to measure impact</li>
            <li><strong>Source references</strong> — Every claim cites the signals that informed it</li>
          </ul>
        </section>

        <!-- ═══════════ INTEGRATIONS REFERENCE ═══════════ -->
        <section id="integrations" class="docs-section">
          <h2>Integrations Reference</h2>
          <p>
            Complete reference for all supported signal sources.
          </p>

          <div class="mt-6 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Connector</th>
                  <th>Auth</th>
                  <th>Signal Type</th>
                  <th>What it captures</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="int in integrations" :key="int.name">
                  <td class="font-medium text-foreground">{{ int.name }}</td>
                  <td>
                    <span :class="[
                      'inline-block rounded px-1.5 py-0.5 text-xs font-mono',
                      int.type === 'OAuth' ? 'bg-emerald-500/10 text-emerald-400' :
                      int.type === 'API Key' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-slate-500/10 text-slate-400'
                    ]">{{ int.type }}</span>
                  </td>
                  <td>{{ int.signalType }}</td>
                  <td>{{ int.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- ═══════════ UPLOADING DATA ═══════════ -->
        <section id="uploading-data" class="docs-section">
          <h2>Uploading Data</h2>
          <p>
            For data that doesn't live in a connected tool — survey results, interview notes,
            NPS feedback, or any other customer signal — you can upload CSVs or paste text directly.
          </p>

          <h3>CSV format</h3>
          <p>
            Your CSV should include at least one column of feedback text. ThesisForge will attempt
            to detect columns for customer name, date, and source type. For best results, include headers:
          </p>
          <div class="code-block">
            <code>customer_name,feedback,date,segment,mrr</code><br />
            <code>"Acme Corp","We need better billing exports","2025-11-15","enterprise",45000</code><br />
            <code>"StartupCo","Onboarding is confusing","2025-11-14","smb",1200</code>
          </div>

          <h3>Limits</h3>
          <ul>
            <li>Max file size: <strong>10 MB</strong></li>
            <li>Max rows: <strong>10,000</strong> per upload</li>
            <li>Supported formats: <strong>CSV, TSV</strong></li>
          </ul>

          <h3>Manual text entry</h3>
          <p>
            Paste or type a signal directly. Useful for quick notes from a customer call,
            a forwarded email, or an observation from a user testing session. Add customer
            name and segment for better synthesis context.
          </p>
        </section>

        <!-- ═══════════ LIMITS & PRICING ═══════════ -->
        <section id="limits" class="docs-section">
          <h2>Limits & Pricing</h2>

          <h3>Free tier</h3>
          <p>
            ThesisForge offers a free tier with generous limits for small teams and evaluation.
            No credit card required.
          </p>

          <h3>Rate limits</h3>
          <div class="mt-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Chat messages</td><td>10 per minute</td></tr>
                <tr><td>Spec generation</td><td>5 per minute</td></tr>
                <tr><td>File uploads</td><td>10 MB max, 10,000 rows</td></tr>
                <tr><td>Chat context</td><td>100k tokens max</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Processing speed</h3>
          <ul>
            <li>Signal extraction: <strong>2-5 seconds</strong> per signal</li>
            <li>Chat responses: under <strong>3 seconds</strong> to first token</li>
            <li>Spec generation: <strong>15-30 seconds</strong> for full document</li>
            <li>Theme clustering: runs automatically after signal batches complete</li>
          </ul>
        </section>

        <!-- ─── Bottom CTA ─── -->
        <div class="mt-16 rounded-xl border border-border/50 bg-card/30 p-8 text-center">
          <h2 class="text-xl font-semibold font-serif">Ready to get started?</h2>
          <p class="mt-2 text-muted-foreground">
            Connect your first signal source in under 2 minutes.
          </p>
          <div class="mt-6">
            <Button as="a" :href="`${APP_URL}/setup`" size="lg">
              Start Free
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.docs-section {
  @apply mt-16 pt-16 border-t border-border/30 first:mt-10 first:pt-0 first:border-t-0;
}

.docs-content h2 {
  @apply text-2xl font-semibold font-serif md:text-3xl;
}

.docs-content h3 {
  @apply mt-8 text-lg font-bold tracking-tight;
}

.docs-content p {
  @apply mt-3 text-muted-foreground leading-relaxed;
}

.docs-content ul,
.docs-content ol {
  @apply mt-3 space-y-2 text-muted-foreground;
}

.docs-content ul {
  @apply list-disc pl-6;
}

.docs-content ol {
  @apply list-decimal pl-6;
}

.docs-content li {
  @apply leading-relaxed;
}

.docs-content table {
  @apply w-full text-sm;
}

.docs-content thead {
  @apply border-b border-border/50;
}

.docs-content th {
  @apply px-3 py-2 text-left text-xs uppercase tracking-wider font-mono text-muted-foreground font-semibold;
}

.docs-content td {
  @apply px-3 py-2.5 text-muted-foreground border-b border-border/20;
}

.docs-content strong {
  @apply text-foreground font-semibold;
}

.code-block {
  @apply mt-3 rounded-lg border border-border/40 bg-card/50 px-4 py-3 font-mono text-sm text-muted-foreground overflow-x-auto;
}
</style>
