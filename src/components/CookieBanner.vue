<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/ui/Button.vue";
import { Cookie } from "lucide-vue-next";

const STORAGE_KEY = "tf-cookie-consent";

const visible = ref(false);

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    visible.value = true;
  }
});

function accept() {
  localStorage.setItem(STORAGE_KEY, "accepted");
  visible.value = false;
}

function decline() {
  localStorage.setItem(STORAGE_KEY, "declined");
  visible.value = false;
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible"
      role="dialog"
      aria-label="Cookie consent"
      class="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6"
    >
      <div
        class="mx-auto max-w-2xl rounded-xl border border-border/50 bg-background/95 backdrop-blur-lg shadow-lg px-5 py-4 md:px-6 md:py-5"
      >
        <div class="flex items-start gap-4">
          <div class="hidden sm:flex shrink-0 h-9 w-9 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
            <Cookie class="h-4.5 w-4.5 text-primary" aria-hidden="true" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-foreground">We use cookies</p>
            <p class="mt-1 text-xs text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to improve your experience, analyze traffic, and personalize content.
              Read our <router-link to="/privacy" class="text-primary hover:underline" @click="accept">Privacy Policy</router-link> for details.
            </p>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-end gap-3">
          <Button variant="ghost" size="sm" @click="decline">
            Decline
          </Button>
          <Button size="sm" @click="accept">
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  </Transition>
</template>
