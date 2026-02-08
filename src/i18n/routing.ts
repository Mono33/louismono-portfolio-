import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "it"],
  defaultLocale: "en",
  localeDetection: false, // Always start with English, don't auto-detect browser language
});

export type Locale = (typeof routing.locales)[number];
