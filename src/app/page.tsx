import Link from "next/link"

const navLinks = [
  { href: "https://prosesajans.com", label: "Ajans" },
  { href: "https://prosessoftware.com", label: "Yazılım" },
  { href: "https://instagram.com/balikesir.press", label: "Medya" },
]

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="absolute inset-0 bg-aurora" aria-hidden />
      <div className="absolute inset-0 bg-stars opacity-60" aria-hidden />
      <div className="absolute left-[22%] top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora-glow blur-[120px] opacity-60" aria-hidden />
      <div className="absolute right-[8%] top-[26%] h-[440px] w-[440px] rounded-full bg-aurora-glow-2 blur-[140px] opacity-65" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-12 md:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/70">
            aziz · alkan
          </span>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1.5 text-sm font-medium text-white/80 shadow-[0_10px_30px_rgba(22,18,45,0.35)] backdrop-blur lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-1.5 transition hover:bg-white/20 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="mailto:azzlkn@gmail.com"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/80 shadow-[0_10px_25px_rgba(29,23,51,0.45)] backdrop-blur transition hover:border-white/40 hover:bg-white/20"
          >
            İletişim
          </Link>
        </header>

        <nav className="mt-8 flex flex-wrap gap-2 text-sm text-white/75 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-20 grid flex-1 items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">
          <div className="max-w-xl space-y-8">
            <p className="text-sm uppercase tracking-[0.5em] text-white/60">
              büyüme ortaklığı
            </p>
            <h1 className="text-4xl font-light leading-tight text-white md:text-6xl md:leading-[1.1]">
              İş ortaklarımızın markasını büyütüp, birlikte büyüyoruz.
            </h1>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Ben Aziz Alkan. Sosyal medya ajansı ve CRM şirketlerimizle, ticaret yapan insanlara gerçekten değer katan çözümler üretiyoruz. Sadelik, kalite ve uzun vadeli ortaklıklar bizim temel prensiplerimiz.
            </p>
            <div className="space-y-2 text-sm text-white/65">
              <p className="uppercase tracking-[0.45em] text-xs text-white/55">
                yaklaşım
              </p>
              <p className="text-sm sm:text-base">
                Sade çözümler, güçlü sonuçlar. Karmaşadan uzak, fikir ve uygulamayı buluşturan bir yaklaşımla çalışıyoruz. Müşterimizin başarısı, bizim büyümemizdir.
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center sm:h-[520px] sm:w-[520px]">
            <div className="hero-trail hero-trail-1" aria-hidden />
            <div className="hero-trail hero-trail-2" aria-hidden />
            <div className="hero-trail hero-trail-3" aria-hidden />
            <div className="hero-rocket" aria-hidden>
              <span className="hero-rocket-window" />
              <span className="hero-rocket-fin hero-rocket-fin-left" />
              <span className="hero-rocket-fin hero-rocket-fin-right" />
              <span className="hero-rocket-flame" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
