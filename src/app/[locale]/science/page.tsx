import { books, authorBio } from "@/lib/data";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function SciencePage() {
  const t = await getTranslations("science");
  const aiBooks = books.filter(book => 
    book.genre.toLowerCase().includes("ai") || 
    book.genre.toLowerCase().includes("artificial")
  );

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {t("title")} <span className="text-[#d4af37]">{t("titleHighlight")}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        {/* Professional Profile */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#1a365d]/30 to-[#d4af37]/10 rounded-2xl p-8 md:p-12 border border-white/5">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                  {t("professionalProfile")}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {authorBio.medium.split('\n\n')[0]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("skills.ai"),
                    t("skills.dataScience"),
                    t("skills.ml"),
                    t("skills.consciousness"),
                    t("skills.vibrational"),
                  ].map((skill) => (
                    <span key={skill} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end">
                <div className="w-32 h-32 bg-gradient-to-br from-[#1a365d] to-[#d4af37] rounded-full flex items-center justify-center text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                  LM
                </div>
                <p className="text-gray-400 text-center md:text-right">
                  {t("dataAIProfessional")}<br />
                  Milano, Italy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Focus */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("researchFocus")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("aiSociety")}</h3>
              <p className="text-gray-400">
                {t("aiSocietyDesc")}
              </p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("consciousnessTech")}</h3>
              <p className="text-gray-400">
                {t("consciousnessTechDesc")}
              </p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("vibrationalIntel")}</h3>
              <p className="text-gray-400">
                {t("vibrationalIntelDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("publications")}
          </h2>
          
          <div className="space-y-6">
            {aiBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full">
                        {book.role}
                      </span>
                      <span className="text-sm text-gray-500">{book.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                    {book.subtitle && (
                      <p className="text-gray-400 text-sm mb-2">{book.subtitle}</p>
                    )}
                    <p className="text-gray-300">{book.description}</p>
                    {book.rating && (
                      <p className="text-sm text-gray-500 mt-2">
                        ★ {book.rating} ({book.reviews} reviews) • {book.pages} pages
                      </p>
                    )}
                  </div>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                  >
                    {t("viewBook")}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/5">
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            {t("myVision")}
          </h2>
          <blockquote className="text-xl text-gray-300 italic border-l-4 border-[#d4af37] pl-6 mb-6">
            &ldquo;{t("visionQuote")}&rdquo;
          </blockquote>
          <p className="text-gray-400 mb-8">
            {t("visionText")}
          </p>
          <Link
            href="/book-session"
            className="inline-flex items-center text-[#d4af37] hover:underline"
          >
            {t("discussAI")}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
