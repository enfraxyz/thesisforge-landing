<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const APP_URL = "https://app.thesisforge.io";

const entries = [
  {
    date: "March 10, 2026",
    version: "0.1.0",
    title: "Initial Launch",
    items: [
      {
        type: "added" as const,
        text: "Signal ingestion from 12 sources — Gong, Intercom, Slack, Linear, PostHog, Amplitude, Zendesk, Jira, Notion, Fireflies, CSV, and manual entry",
      },
      {
        type: "added" as const,
        text: "AI signal extraction — automatically identifies feature requests, pain points, bugs, praise, churn signals, and more from raw conversations",
      },
      {
        type: "added" as const,
        text: "Theme clustering — auto-discovers cross-customer patterns and groups them into themes weighted by customer revenue",
      },
      {
        type: "added" as const,
        text: "Chat intelligence — query your entire signal corpus in natural language with evidence-cited answers",
      },
      {
        type: "added" as const,
        text: "Spec generation — turn any chat conversation into an implementation-ready product spec with source references",
      },
      {
        type: "added" as const,
        text: "Signal analytics — track signal volume, theme trends, source coverage, and cost per query",
      },
      {
        type: "added" as const,
        text: "Demo workspace — explore a pre-loaded workspace with ~500 synthetic signals without connecting your own data",
      },
      {
        type: "added" as const,
        text: "Documentation — comprehensive docs covering getting started, signals, themes, chat, specs, integrations, and uploads",
      },
    ],
  },
];

const typeBadge = {
  added: { label: "Added", classes: "bg-emerald-500/10 text-emerald-400" },
  changed: { label: "Changed", classes: "bg-amber-500/10 text-amber-400" },
  fixed: { label: "Fixed", classes: "bg-blue-500/10 text-blue-400" },
  removed: { label: "Removed", classes: "bg-rose-500/10 text-rose-400" },
};
</script>

<template>
  <main id="main-content" class="container pt-24 pb-20 md:pt-28">
    <div class="mx-auto max-w-3xl">
      <h1 class="text-3xl font-semibold md:text-5xl font-serif">Changelog</h1>
      <p class="mt-4 text-muted-foreground md:text-lg">
        New features, improvements, and fixes shipped to ThesisForge.
      </p>

      <div class="mt-12 space-y-16">
        <article v-for="entry in entries" :key="entry.version" class="relative">
          <!-- Date + version header -->
          <div class="flex items-center gap-3 mb-6">
            <time class="text-sm font-mono text-muted-foreground">{{ entry.date }}</time>
            <span class="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-mono font-semibold text-primary">
              v{{ entry.version }}
            </span>
          </div>

          <h2 class="text-2xl font-semibold font-serif">{{ entry.title }}</h2>

          <ul class="mt-6 space-y-3">
            <li v-for="(item, i) in entry.items" :key="i" class="flex gap-3">
              <span :class="[
                'mt-0.5 shrink-0 inline-block rounded px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider',
                typeBadge[item.type].classes
              ]">
                {{ typeBadge[item.type].label }}
              </span>
              <span class="text-muted-foreground leading-relaxed">{{ item.text }}</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 rounded-xl border border-border/50 bg-card/30 p-8 text-center">
        <h2 class="text-xl font-semibold font-serif">Want to try it out?</h2>
        <p class="mt-2 text-muted-foreground">
          Start using ThesisForge for free — no credit card required.
        </p>
        <div class="mt-6">
          <Button as="a" :href="`${APP_URL}/setup`" size="lg">
            Get Started Free
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  </main>
</template>
