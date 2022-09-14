import { createI18n } from "vue-i18n";

import ruRule from "./pluralizationRules/index";

import en from "@/locales/messages/en.json";
import ar from "@/locales/messages/ar.json";
import ru from "@/locales/messages/ru.json";

const messages = {
  en: en,
  ar: ar,
  ru: ru,
};

const i18n = createI18n({
  fallbackLocale: "en",
  messages,
  pluralizationRules: {
    ru: ruRule,
  },
});

export default i18n;
