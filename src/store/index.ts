import { App } from "vue";
import { createPinia } from "pinia";

export default function setupPinia(app: App<Element>) {
	const store = createPinia();
	app.use(store);
}
