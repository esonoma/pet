import { createSSRApp } from "vue";
import App from "./App.vue";
import setupPinia from "./store";
import { setupI18n } from "./locales";

export function createApp() {
  const app = createSSRApp(App);
  setupPinia(app);
  setupI18n(app);

  return {
    app,
  };
}
