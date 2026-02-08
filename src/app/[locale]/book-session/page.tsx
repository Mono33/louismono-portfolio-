import { services } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export default async function BookSessionPage() {
  const t = await getTranslations("bookSession");

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {t("title")} <span className="text-[#d4af37]">{t("titleHighlight")}</span> {t("titleSuffix")}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("availableServices")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {service.icon === "brain" && (
                      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {service.icon === "book" && (
                      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {service.icon === "music" && (
                      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    )}
                    {service.icon === "compass" && (
                      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {service.duration.map((d) => (
                        <span key={d} className="text-xs bg-white/10 px-2 py-1 rounded">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a365d]/30 to-[#d4af37]/10 rounded-2xl p-8 md:p-12 border border-white/5">
            <h2 className="text-2xl font-bold mb-6 text-center font-[family-name:var(--font-playfair)]">
              {t("scheduleSession")}
            </h2>
            
            {/* Cal.eu Embed (European instance) */}
            <div className="rounded-xl overflow-hidden mb-8" style={{ minHeight: "600px" }}>
              <iframe
                src="https://cal.eu/louis-mono-perso?theme=dark"
                width="100%"
                height="600"
                frameBorder="0"
                allow="payment"
                style={{ 
                  border: "none",
                  minHeight: "600px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)"
                }}
              />
            </div>

            {/* Alternative Contact */}
            <div className="text-center border-t border-white/10 pt-6">
              <p className="text-gray-400 mb-4">{t("preferDirectContact")}</p>
              <a 
                href="mailto:louis.mono1@gmail.com?subject=Booking Request"
                className="text-[#d4af37] hover:underline text-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                louis.mono1@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
            {t("faq")}
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: t("faqs.q1"),
                a: t("faqs.a1"),
              },
              {
                q: t("faqs.q2"),
                a: t("faqs.a2"),
              },
              {
                q: t("faqs.q3"),
                a: t("faqs.a3"),
              },
              {
                q: t("faqs.q4"),
                a: t("faqs.a4"),
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
