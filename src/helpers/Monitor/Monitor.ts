import * as fundebug from "fundebug-javascript";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FundebugVue from "fundebug-vue";
import { App } from "vue";
import { getFundebugKey } from "./config";

export function setupFundebugMonitor(app: App<Element>) {
	initFundebugKey();
	app.use(new FundebugVue(fundebug));
}

function initFundebugKey() {
	(fundebug as any).apikey = getFundebugKey();
}
