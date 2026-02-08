import { musicReleases, artistBio, socialLinks } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export default async function MusicPage() {
  const t = await getTranslations("music");

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm font-semibold uppercase tracking-wider mb-2">
            {t("title")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            <span className="text-[#d4af37]">Chlod D</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            &ldquo;{artistBio.french}&rdquo;
          </p>
        </div>

        {/* Streaming Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={socialLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            {t("spotify")}
          </a>
          <a
            href={socialLinks.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fa2d48] to-[#fb5c74] hover:from-[#e0263f] hover:to-[#e85068] text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.8.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.107 1.596-.342 2.296-.792 1.097-.706 1.832-1.697 2.165-2.978.1-.39.163-.79.204-1.193.028-.272.04-.546.05-.82V6.308c-.01-.06-.01-.12-.02-.18zm-7.34 9.04c-.015.328-.046.656-.13.976-.157.6-.43 1.112-.92 1.503-.267.216-.564.384-.897.484-.32.096-.646.11-.975.07-.22-.03-.433-.09-.632-.173-.7-.29-1.116-.81-1.273-1.55-.078-.365-.077-.73.006-1.092.1-.423.298-.79.59-1.103.217-.23.467-.42.735-.585.34-.21.703-.37 1.073-.515.292-.114.588-.217.874-.35.14-.064.27-.147.37-.267.1-.123.123-.266.1-.418-.02-.13-.068-.254-.166-.344-.075-.07-.16-.124-.255-.155-.137-.047-.28-.053-.423-.056-.225-.004-.45.01-.673.04-.23.03-.46.066-.685.118-.125.03-.25.057-.376.088-.016.004-.032 0-.055-.005V8.09c.012-.006.02-.013.03-.016.457-.104.92-.17 1.39-.196.224-.012.448-.018.672-.012.26.007.52.03.775.085.47.1.892.28 1.237.596.252.232.42.516.492.854.04.175.057.352.05.53v5.133zm-7.1-1.42c-.015.328-.046.656-.13.976-.157.6-.43 1.112-.92 1.503-.267.216-.564.384-.897.484-.32.096-.646.11-.975.07-.22-.03-.433-.09-.632-.173-.7-.29-1.116-.81-1.273-1.55-.078-.365-.077-.73.006-1.092.1-.423.298-.79.59-1.103.217-.23.467-.42.735-.585.34-.21.703-.37 1.073-.515.292-.114.588-.217.874-.35.14-.064.27-.147.37-.267.1-.123.123-.266.1-.418-.02-.13-.068-.254-.166-.344-.075-.07-.16-.124-.255-.155-.137-.047-.28-.053-.423-.056-.225-.004-.45.01-.673.04-.23.03-.46.066-.685.118-.125.03-.25.057-.376.088-.016.004-.032 0-.055-.005V5.57c.012-.006.02-.013.03-.016.457-.104.92-.17 1.39-.196.224-.012.448-.018.672-.012.26.007.52.03.775.085.47.1.892.28 1.237.596.252.232.42.516.492.854.04.175.057.352.05.53v5.133z"/>
            </svg>
            {t("appleMusic")}
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
            {t("youtube")}
          </a>
        </div>

        {/* Main Album */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("featuredAlbum")}
          </h2>
          
          <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Spotify Embed */}
              <div className="lg:order-2">
                <iframe
                  src="https://open.spotify.com/embed/album/5wJLFppU0Rm6P3f3FqvknI?utm_source=generator&theme=0"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "450px" }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                />
              </div>
              
              {/* Album Info */}
              <div className="p-8 lg:order-1">
                <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                  {musicReleases.album.year} • {musicReleases.album.type}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4 font-[family-name:var(--font-playfair)]">
                  {musicReleases.album.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {musicReleases.album.tracks} tracks • {musicReleases.album.duration}
                </p>
                
                <div className="space-y-2 max-h-64 overflow-y-auto pr-4">
                  {musicReleases.album.trackList.map((track) => (
                    <div 
                      key={track.number}
                      className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-gray-500 w-6 text-sm">{track.number}</span>
                      <div className="flex-1">
                        <p className="font-medium">{track.title}</p>
                        {track.featuring && (
                          <p className="text-sm text-gray-500">feat. {track.featuring}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <a
                  href={musicReleases.album.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-[#d4af37] hover:underline"
                >
                  {t("openInSpotify")}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Singles */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("singles")}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {musicReleases.singles.map((single, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all"
              >
                <iframe
                  src={`https://open.spotify.com/embed/album/${single.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                  title={single.title}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Tracks */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("popularTracks")}
          </h2>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
            <div className="space-y-4">
              {musicReleases.popularTracks.map((track, index) => {
                const matchingSingle = musicReleases.singles.find(s => 
                  s.title === track || track.startsWith(s.title)
                );
                return (
                  <a
                    key={track}
                    href={matchingSingle?.spotifyUrl || socialLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-lg px-2 -mx-2 transition-colors group"
                  >
                    <span className="text-2xl font-bold text-[#d4af37] w-8">{index + 1}</span>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/20 to-[#1a365d]/20 rounded flex items-center justify-center group-hover:from-[#d4af37]/30 group-hover:to-[#1a365d]/30 transition-colors">
                      <svg className="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-lg">{track}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1DB954] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* About the Artist */}
        <section className="bg-gradient-to-br from-[#1a365d]/20 to-[#d4af37]/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            {t("aboutChlodD")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4 italic text-lg">
                &ldquo;{artistBio.french}&rdquo;
              </p>
              <p className="text-gray-400">
                {artistBio.english}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">{t("realName")}:</strong> Louis Mono
              </p>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">{t("genre")}:</strong> {t("genreValue")}
              </p>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">{t("rights")}:</strong> © ℗ Louis Mono
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1DB954] hover:underline"
                >
                  {t("followOnSpotify")}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={socialLinks.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#fa2d48] hover:underline"
                >
                  {t("listenOnAppleMusic")}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
