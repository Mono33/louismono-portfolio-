import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: `Louis Mono | ${t("tagline")}`,
    description:
      "Personal portfolio of Louis Mono - Writer, AI Professional, and Musician (Chlod D). Exploring the intersection of science, consciousness, and art.",
    keywords: [
      "Louis Mono",
      "Chlod D",
      "writer",
      "AI",
      "artificial intelligence",
      "musician",
      "author",
      "data science",
      "philosophy",
    ],
    openGraph: {
      title: `Louis Mono | ${t("tagline")}`,
      description: "Exploring where science meets soul",
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "it" ? "it_IT" : "en_US",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0a0a0a] text-white min-h-screen`}
      >
        <GoogleAnalytics />
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
