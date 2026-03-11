import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";
import { router } from "./router";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(createHead());
app.use(router);
app.mount("#app");
