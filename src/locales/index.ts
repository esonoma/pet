import { App } from "vue";
import { createI18n } from "vue-i18n";
import { name as LOCAL_DEFAULT } from "./zh";
import { name as FALLBACK_LOCAL } from "./en";
import { setProperty } from "@/helpers";

export const enabledLocales = {};
function registerLocalKeyMap(key: string, value: string) {
	setProperty(enabledLocales, key, value);
}

const locales = import.meta.globEager("./*.ts");
export function setupI18n(app: App<Element>) {
	app.use(
		createI18n({
			locale: LOCAL_DEFAULT,
			fallbackLocale: FALLBACK_LOCAL,
			messages: Object.values(locales).reduce((acc, curr) => {
				registerLocalKeyMap(curr?.name, curr.name);
				setProperty(acc, curr?.name, curr?.locale);

				return acc;
			}, {}),
		}),
	);
}
