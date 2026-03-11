<script setup lang="ts">
import { ref } from "vue";
import { Menu, X, ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import CookieBanner from "@/components/CookieBanner.vue";

const mobileMenuOpen = ref(false);

const APP_URL = "https://app.thesisforge.ai";
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
        <router-link to="/" class="flex items-center gap-2.5 text-lg font-semibold">
          <img src="/logo.svg" alt="" class="h-7 w-7" aria-hidden="true" />
          <span>ThesisForge</span>
        </router-link>

        <!-- Desktop nav -->
        <nav
          aria-label="Main navigation"
          class="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
        >
          <router-link to="/#features" class="hover:text-foreground transition-colors">Features</router-link>
          <router-link to="/#how-it-works" class="hover:text-foreground transition-colors">How It Works</router-link>
          <router-link to="/#integrations" class="hover:text-foreground transition-colors">Integrations</router-link>
          <router-link to="/#pricing" class="hover:text-foreground transition-colors">Pricing</router-link>
          <router-link to="/docs" class="hover:text-foreground transition-colors">Docs</router-link>
        </nav>

        <!-- Desktop CTA buttons -->
        <div class="hidden items-center gap-3 md:flex">
          <span class="text-xs text-muted-foreground/70 mr-1">14-day free trial</span>
          <Button as="a" :href="`${APP_URL}/setup`" size="header">
            Start Free Trial
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
          <router-link
            to="/#features"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
          >Features</router-link>
          <router-link
            to="/#how-it-works"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
          >How It Works</router-link>
          <router-link
            to="/#integrations"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
          >Integrations</router-link>
          <router-link
            to="/#pricing"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
          >Pricing</router-link>
          <router-link
            to="/docs"
            class="rounded-md px-3 py-2 hover:bg-muted hover:text-foreground"
            @click="mobileMenuOpen = false"
          >Docs</router-link>
          <hr class="my-1 border-border/40" />
          <a
            :href="`${APP_URL}/setup`"
            class="rounded-md px-3 py-2 font-medium text-primary hover:bg-muted"
            @click="mobileMenuOpen = false"
          >Start Free Trial</a>
          <p class="px-3 text-xs text-muted-foreground/70">14-day free trial · No CC required</p>
        </nav>
      </div>
      </Transition>
    </header>

    <router-view />

    <!-- ═══════════════════ FOOTER ═══════════════════ -->
    <footer class="footer-gradient py-10">
      <div class="container grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-3 md:col-span-1">
          <router-link to="/" class="flex items-center gap-2 text-lg font-semibold">
            <img
              src="/logo.svg"
              alt=""
              class="h-5 w-5"
              aria-hidden="true"
            />
            ThesisForge
          </router-link>
          <p class="mt-2 text-sm text-muted-foreground">
            Know what to build next.
          </p>
        </div>

        <!-- Product -->
        <div>
          <p class="font-medium">Product</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <router-link to="/#features" class="transition-colors hover:text-foreground">Features</router-link>
            </li>
            <li>
              <router-link to="/#integrations" class="transition-colors hover:text-foreground">Integrations</router-link>
            </li>
            <li>
              <router-link to="/#how-it-works" class="transition-colors hover:text-foreground">How It Works</router-link>
            </li>
            <li>
              <router-link to="/#pricing" class="transition-colors hover:text-foreground">Pricing</router-link>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <p class="font-medium">Resources</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <router-link to="/docs" class="transition-colors hover:text-foreground">Documentation</router-link>
            </li>
            <li>
              <router-link to="/changelog" class="transition-colors hover:text-foreground">Changelog</router-link>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <p class="font-medium">Legal</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <router-link to="/terms" class="transition-colors hover:text-foreground">Terms</router-link>
            </li>
            <li>
              <router-link to="/privacy" class="transition-colors hover:text-foreground">Privacy</router-link>
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

    <!-- Cookie Consent -->
    <CookieBanner />
  </div>
</template>
