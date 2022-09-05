import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import ru from "@/locales/ru.json";
import { createI18n } from "vue-i18n";

const message = {
  en: en,
  ar: ar,
  ru: ru,
};

const i18n = createI18n({
  locale: "en",

  message: message,
});

export default i18n;
