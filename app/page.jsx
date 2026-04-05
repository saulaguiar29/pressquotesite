import WaitlistForm from "@/components/WaitlistForm";
import DashboardMockup from "@/components/DashboardMockup";

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE — change copy, features, pricing without touching HTML
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Get Early Access", href: "#waitlist" },
];

const STEPS = [
  {
    number: "01",
    title: "Connect your QuickBooks",
    description:
      "One click and we pull your real costs — materials, vendors, overhead, all of it. No manual entry.",
  },
  {
    number: "02",
    title: "Bring your existing prices",
    description:
      "Already have a pricing system? Send us your spreadsheet, PDF, or even just a link to your website. We pull it in and set everything up automatically.",
  },
  {
    number: "03",
    title: "Quote with confidence",
    description:
      "Build a quote, pick your product and quantity, and see your exact profit before it goes out. Every time.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-forest-950/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="font-display font-bold text-white text-xl">
            PressQuote
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 text-sm font-sans font-medium transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#waitlist" className="btn-primary text-sm px-5 py-2.5">
          Join the Waitlist
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-forest-950 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,163,74,0.12)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(22,163,74,0.06)_0%,_transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 18px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Headline */}
        <h1 className="font-display text-center text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Quote it right the
          <br />
          <span className="text-gradient">first time. Every time.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-white/60 text-lg sm:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Most print shops price jobs by feel. You do the work, send the
          invoice, and find out later if you actually made money. PressQuote
          connects to your QuickBooks and shows you the real profit on every job
          — before the customer ever sees the price.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#waitlist" className="btn-primary text-base px-8 py-4">
            Join the Waitlist — It's Free
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-forest-500 inline-block" />
            How it works
            <span className="w-6 h-px bg-forest-500 inline-block" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From job request to
            <br />
            <span className="text-gradient">approved quote in minutes</span>
          </h2>
        </div>

        <div className="space-y-0">
          {STEPS.map(({ number, title, description }, index) => (
            <div
              key={number}
              className="relative flex gap-8 md:gap-12 pb-12 last:pb-0"
            >
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-forest-200 to-transparent" />
              )}

              {/* Number */}
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-forest-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-600/30">
                  {number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 font-sans leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      id="waitlist"
      className="py-24 bg-forest-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="section-label text-forest-400 mb-6 justify-center">
          <span className="w-6 h-px bg-forest-600 inline-block" />
          Join the Waitlist
          <span className="w-6 h-px bg-forest-600 inline-block" />
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
          Stop guessing on every job.
          <br />
          Get early access.
        </h2>
        <p className="text-white/50 font-sans text-lg mb-10 max-w-xl mx-auto">
          Currently working with a print shop and an engraving company in Utah.
          Join the list and be first in line.
        </p>

        <div className="flex justify-center">
          <WaitlistForm dark />
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display font-bold text-white text-lg">
            PressQuote
          </span>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "How it Works", href: "#how-it-works" },
              { label: "Get Early Access", href: "#waitlist" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/30 text-sm font-sans">
            © {new Date().getFullYear()} PressQuote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
