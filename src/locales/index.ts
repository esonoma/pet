import { App } from "vue";
import { createI18n } from "vue-i18n";

import { LOCALE as EN_US_MESSAGE, LOCALE_NAME as EN_US } from "./en";
import { LOCALE_NAME as ZH_CN, LOCALE as ZH_CN_MESSAGE } from "./zh";

export function setupI18n(app: App<Element>) {
    app.use(createI18nImpl());
}

function createI18nImpl(initialLanguage = ZH_CN, fallbackLanguage = EN_US) {
    return createI18n({
        locale: initialLanguage,
        fallbackLocale: fallbackLanguage,
        messages: {
            [ZH_CN]: ZH_CN_MESSAGE,
            [EN_US]: EN_US_MESSAGE,
        },
    });
}
