import { createSSRApp } from "vue";
import App from "./App.vue";
import setupPinia from "./store";

export function createApp() {
  const app = createSSRApp(App);
  setupPinia(app);

  return {
    app,
  };
}
