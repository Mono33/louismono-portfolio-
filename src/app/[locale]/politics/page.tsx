import { getTranslations } from "next-intl/server";

export default async function PoliticsPage() {
  const t = await getTranslations("politics");

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          {t("comingSoon")}
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
          <span className="text-[#d4af37]">{t("title")}</span>
        </h1>
        
        {/* Year */}
        <div className="text-6xl md:text-8xl font-bold text-white/10 mb-8 font-[family-name:var(--font-playfair)]">
          2027
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>

        <p className="text-gray-400 mb-12">
          {t("location")}
        </p>

        {/* Preview Values */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { title: t("innovation"), desc: t("innovationDesc") },
            { title: t("consciousness"), desc: t("consciousnessDesc") },
            { title: t("unity"), desc: t("unityDesc") },
          ].map((value) => (
            <div 
              key={value.title}
              className="bg-white/5 rounded-xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-semibold text-[#d4af37] mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-[#1a365d]/30 to-purple-500/10 rounded-2xl p-8 border border-white/5">
          <h2 className="text-2xl font-semibold mb-4">{t("stayInformed")}</h2>
          <p className="text-gray-400 mb-6">
            {t("stayInformedDesc")}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#f4d76c] text-black font-semibold px-8 py-3 rounded-full transition-colors"
            >
              {t("notifyMe")}
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            {t("privacyNote")}
          </p>
        </div>

        {/* Quote */}
        <blockquote className="mt-12 text-xl text-gray-400 italic">
          &ldquo;{t("quote")}&rdquo;
        </blockquote>
        <p className="text-[#d4af37] mt-2">— Louis Mono</p>
      </div>
    </div>
  );
}
