import WaitlistForm from '@/components/WaitlistForm'
import DashboardMockup from '@/components/DashboardMockup'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE — change copy, features, pricing without touching HTML
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
]

const FEATURES = [
  {
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Quick Quote Wizard',
    description:
      'Generate quotes in 4 steps for business cards, flyers, posters, banners, and booklets. No guesswork, no back-and-forth.',
  },
  {
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Custom Job Builder',
    description:
      'Full line-item control for complex work. Break down materials, labor, design, outsourced costs, and equipment per job.',
  },
  {
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Automatic Rush Pricing',
    description:
      'Rush fees applied automatically based on due date — 10% at 7 days, 25% at 3 days, 50% at 2 days. Always enforced, never forgotten.',
  },
  {
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'QuickBooks Sync',
    description:
      'Export accepted quotes directly to QuickBooks Online as invoices. Sync your customer list with a single click.',
  },
  {
    iconPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12a2 2 0 002 2h8a2 2 0 002-2L19 8M10 12v4M14 12v4',
    title: 'Materials Database',
    description:
      'Track inventory levels, unit costs, reorder points, and supplier info. Get low-stock alerts before you run out mid-job.',
  },
  {
    iconPath: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    title: 'Admin & Staff Roles',
    description:
      'Admins control pricing settings and margins. Staff create and manage quotes. Each team member gets their own secure login.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Connect your QuickBooks account in one click',
    description:
      'Link your existing QuickBooks account and PressQuote pulls in your real numbers — materials, labor, overhead, and vendor costs. No manual entry.',
  },
  {
    number: '02',
    title: 'Build your quote — pick your product, quantity, and due date',
    description:
      'All of your real costs run in the background automatically. Rush fees, overhead, and margin targets are applied every time — no spreadsheets, no guessing.',
  },
  {
    number: '03',
    title: 'See your full margin breakdown before you hit send',
    description:
      "Know exactly what you make on every job before the quote ever goes out. No surprises after the fact.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <MarginCallout />
      <CTASection />
      <Footer />
    </div>
  )
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-forest-950/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-forest-600 rounded flex items-center justify-center shadow-lg shadow-forest-600/30">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
            </svg>
          </div>
          <span className="font-display font-bold text-white text-lg">PressQuote</span>
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
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </header>
  )
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
            'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 18px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-forest-900/60 border border-forest-700/50 text-forest-300 text-sm font-sans px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
            Built for the print industry
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-center text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          You don't know if
          <br />
          <span className="text-gradient">a job is profitable</span>
          <br />
          until it's too late.
        </h1>

        {/* Subheadline */}
        <p className="text-center text-white/60 text-lg sm:text-xl font-sans max-w-xl mx-auto mb-10 leading-relaxed">
          Pricing on gut feel is costing you margin. PressQuote pulls your real numbers from QuickBooks
          so you see actual profit on every job — before the quote goes out.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#waitlist" className="btn-primary text-base px-8 py-4">
            Join the Waitlist — It's Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  )
}

// ─── TRUST BAR ───────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm font-sans font-medium uppercase tracking-widest mb-8">
          Built for the way print shops actually work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '< 60s', label: 'Average quote time' },
            { value: 'Zero', label: 'Spreadsheets needed' },
            { value: 'Every job', label: 'Margin visible upfront' },
            { value: '1-click', label: 'QuickBooks sync' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-4xl text-gray-900 mb-1 leading-none">{value}</div>
              <div className="text-gray-500 text-sm font-sans mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-forest-500 inline-block" />
            Features
            <span className="w-6 h-px bg-forest-500 inline-block" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything a print shop needs to quote
            <br />
            <span className="text-gradient">with confidence</span>
          </h2>
          <p className="text-gray-500 text-lg font-sans max-w-2xl mx-auto">
            Stop losing margin to underquoting. Stop losing jobs to slow turnaround. PressQuote
            gives your team the tools to quote accurately and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ iconPath, title, description }) => (
            <div
              key={title}
              className="bg-white border border-stone-200 rounded-lg p-7 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-600/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest-50 border border-forest-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-forest-100 transition-colors text-forest-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                </svg>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{title}</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
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
            <div key={number} className="relative flex gap-8 md:gap-12 pb-12 last:pb-0">
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
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 font-sans leading-relaxed max-w-xl">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MARGIN CALLOUT ──────────────────────────────────────────────────────────

function MarginCallout() {
  return (
    <section className="py-16 bg-forest-950 border-y border-forest-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <p className="section-label text-forest-400 mb-3">
              <span className="w-6 h-px bg-forest-600 inline-block" />
              Full Profit Visibility
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              See exactly what you make
              <br />
              on every job.
            </h2>
            <p className="text-white/50 font-sans leading-relaxed">
              Every quote shows a full cost breakdown — materials, labor, overhead, and your actual
              margin — pulled straight from your QuickBooks data. No estimates, no guesswork.
            </p>
          </div>

          {/* Mock breakdown card */}
          <div className="w-full md:w-auto md:min-w-[300px] bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
            <p className="text-white/40 text-xs font-sans uppercase tracking-widest mb-4">Sample job breakdown</p>
            {[
              { label: 'Materials', value: '$48.00', muted: true },
              { label: 'Labor', value: '$35.00', muted: true },
              { label: 'Overhead', value: '$18.00', muted: true },
              { label: 'Quote Price', value: '$142.00', muted: false },
            ].map(({ label, value, muted }) => (
              <div key={label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className={`text-sm font-sans ${muted ? 'text-white/50' : 'text-white font-semibold'}`}>{label}</span>
                <span className={`text-sm font-sans ${muted ? 'text-white/50' : 'text-white font-semibold'}`}>{value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3">
              <span className="text-forest-400 text-sm font-sans font-semibold">Your margin</span>
              <span className="text-forest-400 text-lg font-bold">29%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section id="waitlist" className="py-24 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="section-label text-forest-400 mb-6 justify-center">
          <span className="w-6 h-px bg-forest-600 inline-block" />
          Join the Waitlist
          <span className="w-6 h-px bg-forest-600 inline-block" />
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
          Know your margin
          <br />
          before you hit send.
        </h2>
        <p className="text-white/50 font-sans text-lg mb-10 max-w-xl mx-auto">
          Join the waitlist and be first to get access when PressQuote launches.
        </p>

        <div className="flex justify-center">
          <WaitlistForm dark />
        </div>

        <p className="text-white/30 text-sm font-sans mt-5">
          No spam. No credit card. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-forest-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
            </div>
            <span className="font-display font-bold text-white">PressQuote</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How it Works', href: '#how-it-works' },
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
  )
}
