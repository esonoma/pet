import { createSSRApp } from "vue";
import { setupRouter } from "@helpers/router";

// #ifdef H5
import { setupFundebugMonitor } from "@helpers/Monitor";
// #endif
import App from "./App.vue";
import setupPinia from "./store";
import { setupI18n } from "./locales";

// #ifdef H5
import { isProd } from "./helpers";
// #endif

export function createApp() {
	const app = createSSRApp(App);
	const router = setupRouter(app);
	setupPinia(app);
	setupI18n(app);

	// fundebug SDK内部使用了DOM API, 小程序/APP下报错
	// #ifdef H5
	if (isProd()) {
		setupFundebugMonitor(app);
	}
	// #endif

	// 扩展的router方法
	router.onBeforeEach((options, previous) => {
		console.log("onBeforeEach", options, previous);
	});

	return {
		app,
	};
}
