<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-foreground",
        amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        mint: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface Props {
  variant?: "default" | "amber" | "mint";
  class?: string;
}

const props = defineProps<Props>();

const classes = computed(() =>
  cn(
    badgeVariants({
      variant: props.variant,
    }),
    props.class,
  ),
);
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
