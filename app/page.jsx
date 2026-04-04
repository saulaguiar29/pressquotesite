import WaitlistForm from '@/components/WaitlistForm'
import DashboardMockup from '@/components/DashboardMockup'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE — change copy, features, pricing without touching HTML
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

const FEATURES = [
  {
    emoji: '⚡',
    title: 'Quick Quote Wizard',
    description:
      'Generate quotes in 4 steps for business cards, flyers, posters, banners, and booklets. No guesswork, no back-and-forth.',
  },
  {
    emoji: '🔧',
    title: 'Custom Job Builder',
    description:
      'Full line-item control for complex work. Break down materials, labor, design, outsourced costs, and equipment per job.',
  },
  {
    emoji: '🚀',
    title: 'Automatic Rush Pricing',
    description:
      'Rush fees applied automatically based on due date — 10% at 7 days, 25% at 3 days, 50% at 2 days. Always enforced, never forgotten.',
  },
  {
    emoji: '📊',
    title: 'QuickBooks Sync',
    description:
      'Export accepted quotes directly to QuickBooks Online as invoices. Sync your customer list with a single click.',
  },
  {
    emoji: '📦',
    title: 'Materials Database',
    description:
      'Track inventory levels, unit costs, reorder points, and supplier info. Get low-stock alerts before you run out mid-job.',
  },
  {
    emoji: '👥',
    title: 'Admin & Staff Roles',
    description:
      'Admins control pricing settings and margins. Staff create and manage quotes. Each team member gets their own secure login.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Choose a product or build custom',
    description:
      'Pick from pre-configured product templates (cards, flyers, banners, booklets) or use the line-item builder for complex jobs with any combination of materials, labor, and outsourced work.',
  },
  {
    number: '02',
    title: 'The pricing engine handles the math',
    description:
      'Your labor rates, overhead percentage, target margin, economic multiplier, and rush fees are applied automatically — every time, consistently, based on real numbers not gut feelings.',
  },
  {
    number: '03',
    title: 'Review, email, and track',
    description:
      "See the full profit breakdown before sending. Generate a professional email draft. Track quote status from draft to accepted — and export to QuickBooks when it's time to invoice.",
  },
]

const PRICING = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for solo print shops getting started with better quoting.',
    features: [
      '1 user account',
      'Unlimited quotes',
      'Quick Quote + Custom Job',
      'Materials database',
      'QuickBooks sync',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing print shops with a team that needs to move fast.',
    features: [
      'Up to 5 user accounts',
      'Everything in Starter',
      'Admin + staff roles',
      'Quote analytics dashboard',
      'Priority email support',
      'Onboarding call included',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For multi-location print businesses with complex needs.',
    features: [
      'Unlimited users',
      'Everything in Professional',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Volume pricing',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const RUSH_RULES = [
  { days: '14+ days', fee: 'No rush fee', color: 'text-forest-500' },
  { days: '7–13 days', fee: '+10%', color: 'text-yellow-500' },
  { days: '3–6 days', fee: '+25%', color: 'text-orange-500' },
  { days: '0–2 days', fee: '+50%', color: 'text-red-500' },
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
      <Features />
      <HowItWorks />
      <RushPricingCallout />
      <Pricing />
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
          <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center shadow-lg shadow-forest-600/30">
            <span className="text-base">🖨️</span>
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
          Get Early Access
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
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
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
          Stop guessing.
          <br />
          <span className="text-gradient">Start quoting.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-white/60 text-lg sm:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          PressQuote calculates accurate, profitable print quotes in seconds — with built-in rush
          pricing, overhead, margin control, and QuickBooks sync.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#waitlist" className="btn-primary text-base px-8 py-4">
            Get Early Access — It's Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#how-it-works" className="btn-secondary text-base px-8 py-4">
            See how it works
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
            { value: '10+', label: 'Product categories' },
            { value: '40%+', label: 'Target margin enforced' },
            { value: '100%', label: 'Rush fees automatic' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-3xl text-gray-900 mb-1">{value}</div>
              <div className="text-gray-500 text-sm font-sans">{label}</div>
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
    <section id="features" className="py-24 bg-gray-50">
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
          {FEATURES.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-600/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest-50 border border-forest-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest-100 transition-colors text-2xl">
                {emoji}
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
                <div className="w-12 h-12 rounded-2xl bg-forest-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-600/30">
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

// ─── RUSH PRICING CALLOUT ────────────────────────────────────────────────────

function RushPricingCallout() {
  return (
    <section className="py-16 bg-forest-950 border-y border-forest-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label text-forest-400 mb-3">
              <span className="w-6 h-px bg-forest-600 inline-block" />
              Rush Pricing — Automatic
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Rush fees enforced every time.
              <br />
              No exceptions.
            </h2>
            <p className="text-white/50 font-sans max-w-md">
              PressQuote calculates the days until the due date and applies the correct surcharge
              automatically. Your team never has to remember.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[260px] bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="space-y-3">
              {RUSH_RULES.map(({ days, fee, color }) => (
                <div
                  key={days}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-white/60 text-sm font-sans">{days} until due</span>
                  <span className={`font-display font-bold text-sm ${color}`}>{fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ─────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-forest-500 inline-block" />
            Pricing
            <span className="w-6 h-px bg-forest-500 inline-block" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 font-sans text-lg">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING.map(({ name, price, period, description, features, cta, highlighted }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                highlighted
                  ? 'bg-forest-600 text-white shadow-2xl shadow-forest-600/30 scale-[1.02]'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-forest-600 text-xs font-bold font-sans px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-bold text-xl mb-2 ${
                    highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`font-display font-bold text-4xl ${
                      highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {price}
                  </span>
                  <span className={highlighted ? 'text-white/70' : 'text-gray-500'}>{period}</span>
                </div>
                <p
                  className={`text-sm font-sans ${highlighted ? 'text-white/70' : 'text-gray-500'}`}
                >
                  {description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        highlighted ? 'text-white' : 'text-forest-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm font-sans ${
                        highlighted ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`text-center font-sans font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm ${
                  highlighted
                    ? 'bg-white text-forest-700 hover:bg-forest-50 shadow-lg'
                    : 'bg-forest-600 text-white hover:bg-forest-700 shadow-lg shadow-forest-600/20'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
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
          Get Early Access
          <span className="w-6 h-px bg-forest-600 inline-block" />
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
          Ready to quote faster
          <br />
          and profit more?
        </h2>
        <p className="text-white/50 font-sans text-lg mb-10 max-w-xl mx-auto">
          Join print shops on the early access list. Be first to get access and lock in
          early-adopter pricing.
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
            <div className="w-7 h-7 bg-forest-600 rounded-lg flex items-center justify-center">
              <span className="text-sm">🖨️</span>
            </div>
            <span className="font-display font-bold text-white">PressQuote</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How it Works', href: '#how-it-works' },
              { label: 'Pricing', href: '#pricing' },
              // Add real links here as you build them:
              // { label: 'Privacy', href: '/privacy' },
              // { label: 'Terms', href: '/terms' },
              // { label: 'Contact', href: '/contact' },
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
