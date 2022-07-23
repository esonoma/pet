const DEV_FUNDEBUG_KEY =
	"a10070dc3bd7c239c7e9a5394f921cbe4a798930dfb5f5f9c68bb51865f9c581";
const PROD_FUNDEBUG_KEY = import.meta.env.VITE_FUNDEBUG_SHOP_APIKEY;

export function getFundebugKey() {
	return import.meta.env.PROD ? PROD_FUNDEBUG_KEY : DEV_FUNDEBUG_KEY;
}
