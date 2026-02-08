import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function IntercielPage() {
  const t = await getTranslations("interciel");

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">{t("title")}</span>{t("titleSuffix")}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Company Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a365d]/30 to-[#d4af37]/10 rounded-2xl p-8 md:p-12 border border-white/5 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#d4af37] rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-black">I.ai</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Interciel.ai</h2>
                <p className="text-gray-400">{t("companyBy")}</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                {t("description1")}
              </p>
              
              <p className="text-gray-400 mb-8">
                {t("description2")}
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              {t("inDevelopment")}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">{t("vision")}</h3>
              <p className="text-gray-300">
                {t("visionText")}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">{t("mission")}</h3>
              <p className="text-gray-300">
                {t("missionText")}
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              {t("focusAreas")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: t("areas.aiConsulting"), desc: t("areas.aiConsultingDesc") },
                { title: t("areas.intelligentSolutions"), desc: t("areas.intelligentSolutionsDesc") },
                { title: t("areas.researchDevelopment"), desc: t("areas.researchDevelopmentDesc") },
                { title: t("areas.educationTraining"), desc: t("areas.educationTrainingDesc") },
                { title: t("areas.ethicalAI"), desc: t("areas.ethicalAIDesc") },
                { title: t("areas.humanAICollaboration"), desc: t("areas.humanAICollaborationDesc") },
              ].map((area) => (
                <div key={area.title} className="bg-white/5 rounded-lg p-4 border border-white/5">
                  <h4 className="font-semibold mb-1">{area.title}</h4>
                  <p className="text-sm text-gray-400">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Connect */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/5 text-center">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              {t("stayConnected")}
            </h2>
            <p className="text-gray-400 mb-6">
              {t("stayConnectedDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/interciel.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @interciel.ai
              </a>
              <Link
                href="/book-session"
                className="inline-flex items-center gap-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t("businessInquiries")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
