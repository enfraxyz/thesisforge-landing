<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps<{
  class?: string | string[];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-border/80 bg-card/60 text-card-foreground backdrop-blur-sm card-hover',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>
