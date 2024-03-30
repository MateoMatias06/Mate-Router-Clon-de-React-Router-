import { i18n } from "../i18n/i18n"

export const useI18n = (lang) => {
    return i18n.aboutPage[lang] || i18n.en
  }