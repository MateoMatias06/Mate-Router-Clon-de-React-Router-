import { i18n } from "../i18n/i18n"


export const useI18nHome = (lang) => {
    return i18n.homePage[lang] || i18n.en
  }