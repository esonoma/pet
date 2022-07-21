import { App } from "vue";
import { Router } from "./Router";

export * from "./Router";
export * from "./originRouter";

export function setupRouter(Vue: App<Element>) {
	const router = new Router();
	Vue.use({
		install(app: App) {
			// eslint-disable-next-line no-param-reassign
			app.config.globalProperties.$routerInstance = router;
		},
	});
	return router;
}
