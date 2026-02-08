import { books } from "@/lib/data";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function LiteraturePage() {
  const t = await getTranslations("literature");
  const soleAuthorBooks = books.filter(book => book.role === "Sole Author");
  const collaborationBooks = books.filter(book => book.role !== "Sole Author");

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {t("title")}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        {/* Author Info */}
        <div className="bg-white/5 rounded-2xl p-8 mb-16 border border-white/5">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[#1a365d] to-[#d4af37] rounded-full flex items-center justify-center text-4xl font-bold font-[family-name:var(--font-playfair)]">
              LM
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">Louis Mono</h2>
              <p className="text-gray-400 mb-4">
                {t("authorDesc")}
              </p>
              <a
                href="https://www.amazon.fr/stores/author/B08PVYNN19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#d4af37] hover:underline"
              >
                {t("viewAmazonPage")}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sole Author Books */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">{t("soleAuthorWorks")}</span> {t("works")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {soleAuthorBooks.map((book) => (
              <div 
                key={book.id} 
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row"
              >
                {/* Book Cover */}
                <div className="sm:w-56 flex-shrink-0">
                  <div className="relative aspect-[2/3] sm:h-full">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Book Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full font-semibold">
                        {book.role}
                      </span>
                      <span className="text-sm text-gray-500">{book.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1 font-[family-name:var(--font-playfair)]">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-[#d4af37] text-sm mb-3 italic">{book.subtitle}</p>
                    )}
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{book.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{book.language}</span>
                      {book.genre.split(" / ").slice(0, 2).map((g) => (
                        <span key={g} className="text-xs bg-white/10 px-3 py-1 rounded-full">{g}</span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#d4af37] hover:bg-[#f4d76c] text-black font-semibold px-5 py-2.5 rounded-full transition-colors text-sm w-fit"
                  >
                    {t("buyOnAmazon")}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Books */}
        <section>
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">{t("collaborations")}</span> {t("contributions")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationBooks.map((book) => (
              <div 
                key={book.id} 
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row"
              >
                {/* Book Cover */}
                <div className="sm:w-56 flex-shrink-0">
                  <div className="relative aspect-[2/3] sm:h-full">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Book Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-semibold">
                        {book.role}
                      </span>
                      <span className="text-sm text-gray-500">{book.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1 font-[family-name:var(--font-playfair)]">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-gray-400 text-sm mb-3 italic">{book.subtitle}</p>
                    )}
                    
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{book.description}</p>
                    
                    {book.rating && (
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="text-yellow-400">★ {book.rating}</span>
                        <span className="text-gray-500">({book.reviews} reviews)</span>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{book.language}</span>
                      {book.genre.split(" / ").slice(0, 2).map((g) => (
                        <span key={g} className="text-xs bg-white/10 px-3 py-1 rounded-full">{g}</span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold px-5 py-2.5 rounded-full transition-colors text-sm w-fit"
                  >
                    {t("viewOnAmazon")}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
