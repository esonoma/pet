export function getFundebugKey() {
	return import.meta.env.PROD && import.meta.env.VITE_FUNDEBUG_SHOP_APIKEY;
}
