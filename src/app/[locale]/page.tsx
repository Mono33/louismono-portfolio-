import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { books, musicReleases, authorBio, socialLinks } from "@/lib/data";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { getTranslations } from "next-intl/server";

const getSections = (t: (key: string) => string) => [
  {
    title: t("sections.literature"),
    description: t("sections.literatureDesc"),
    href: "/literature",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: t("sections.music"),
    description: t("sections.musicDesc"),
    href: "/music",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Science & AI",
    description: "My research in artificial intelligence and data science",
    href: "/science",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: t("sections.interciel"),
    description: t("sections.intercielDesc"),
    href: "/interciel",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Politics",
    description: "Coming 2027 — Vision for the future",
    href: "/politics",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: t("sections.bookSession"),
    description: t("sections.bookSessionDesc"),
    href: "/book-session",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-[#d4af37] to-[#f4d76c]",
  },
];

export default async function Home() {
  const t = await getTranslations("home");
  const sections = getSections(t);
  const featuredBooks = books.filter(book => book.featured).slice(0, 2);

  return (
    <div className="pt-20">
      {/* Sound Toggle Button */}
      <SoundToggle />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Moon/Sun Duality Background with Waves */}
        <HeroBackground />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#1a365d] rounded-full blur-lg opacity-40" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#d4af37]/30 shadow-2xl">
                <Image
                  src="/images/louis-mono-profile.png"
                  alt="Louis Mono"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">Louis</span> Mono
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4">
            {t("tagline")}
          </p>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            {t("description")}
          </p>
          <p className="text-base text-gray-600 mb-12 italic">
            {t("alsoKnownAs")} <span className="text-[#d4af37]">Chlod D</span> {t("inMusicWorld")}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-session"
              className="bg-[#d4af37] hover:bg-[#f4d76c] text-black font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              {t("bookSession")}
            </Link>
            <Link
              href="/literature"
              className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              {t("exploreWork")}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">
            Explore My World
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From writing books to composing music, from AI research to building companies — 
            discover the many facets of my creative journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-[#d4af37] mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  <span className="inline-flex items-center text-[#d4af37] group-hover:gap-2 transition-all">
                    {t("discover")} 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">
            Featured Books
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Exploring philosophy, AI, and consciousness through the written word
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 flex flex-col sm:flex-row">
                {/* Book Cover */}
                <div className="sm:w-48 flex-shrink-0">
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
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                      {book.role}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-1 font-[family-name:var(--font-playfair)]">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-gray-400 text-sm mb-3">{book.subtitle}</p>
                    )}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{book.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{book.year}</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{book.language}</span>
                    </div>
                  </div>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#d4af37] hover:underline"
                  >
                    {t("viewOnAmazon")}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/literature" className="text-[#d4af37] hover:underline">
              View all books →
            </Link>
          </div>
        </div>
      </section>

      {/* Music Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">Chlod D</span> — Music
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto italic">
            &ldquo;Poète dans l&apos;âme, Poète de l&apos;âme, Poète des lames, Poètes des larmes...&rdquo;
          </p>
          
          <div className="max-w-3xl mx-auto">
            {/* Spotify Embed */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <iframe
                src="https://open.spotify.com/embed/album/5wJLFppU0Rm6P3f3FqvknI?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="border-0"
              />
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-6">
                <strong>{musicReleases.album.title}</strong> — {musicReleases.album.tracks} tracks, {musicReleases.album.duration}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  {t("listenOnSpotify")}
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {t("watchVideos")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("aboutMe")}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {authorBio.medium.split('\n\n')[0]}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[t("tags.aiProfessional"), t("tags.writer"), t("tags.musician"), t("tags.philosopher"), t("tags.explorer")].map((tag) => (
              <span key={tag} className="bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in AI consulting, book collaboration, music, 
            or just want to explore ideas together — I&apos;d love to hear from you.
          </p>
          <Link
            href="/book-session"
            className="inline-flex items-center bg-[#d4af37] hover:bg-[#f4d76c] text-black font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            {t("book1v1Session")}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
