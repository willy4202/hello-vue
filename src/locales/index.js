import { createI18n } from "vue-i18n";
import { ruRule, arRule } from "./pluralizationRules/index";
import numberFormats from "./numberFormats";

import en from "@/locales/messages/en-US.json";
import ar from "@/locales/messages/ar-AE.json";
import ru from "@/locales/messages/ru-RU.json";
import gb from "@/locales/messages/en-GB.json";

const messages = {
  "en-US": en,
  "en-GB": gb,
  "ar-AE": ar,
  "ru-RU": ru,
};

const pluralizationRules = {
  "ru-RU": ruRule,
  "ar-AE": arRule,
};

const i18n = createI18n({
  fallbackLocale: "en-US",
  messages,
  pluralizationRules,
  numberFormats,
});

export default i18n;
