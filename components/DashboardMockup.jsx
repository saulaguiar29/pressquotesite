// CSS-only dashboard preview — no images needed, always looks sharp

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect behind the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-forest-600/20 via-forest-400/10 to-forest-600/20 rounded-3xl blur-2xl" />

      {/* Browser chrome */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0f1f12]">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1a0d] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-xs text-white/40 font-mono max-w-xs mx-auto text-center">
              app.pressquote.com
            </div>
          </div>
        </div>

        {/* App layout */}
        <div className="flex h-[340px] sm:h-[400px]">
          {/* Sidebar */}
          <aside className="w-40 sm:w-48 bg-[#0b1f0e] border-r border-white/5 flex flex-col py-3 shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 px-4 pb-3 border-b border-white/5 mb-2">
              <div className="w-6 h-6 bg-forest-600 rounded-lg flex items-center justify-center">
              </div>
              <span className="text-white text-xs font-bold font-display">PressQuote</span>
            </div>

            {/* Nav items */}
            {[
              { label: 'Dashboard', active: true },
              { label: 'Quotes', active: false },
              { label: 'Quick Quote', active: false },
              { label: 'Custom Job', active: false },
              { label: 'Materials', active: false },
              { label: 'Customers', active: false },
              { label: 'Settings', active: false },
            ].map(({ label, active }) => (
              <div
                key={label}
                className={`mx-2 px-2 py-1.5 rounded-lg mb-0.5 text-xs font-sans ${
                  active
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'text-white/40'
                }`}
              >
                {label}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main className="flex-1 p-4 overflow-hidden">
            <div className="text-white/70 text-xs font-sans mb-3">Good morning, Admin ☀️</div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { label: 'Total Quotes', value: '142', sub: '18 this month' },
                { label: 'Revenue', value: '$24.8K', sub: 'sent + accepted' },
                { label: 'Avg Margin', value: '41.3%', sub: 'across all quotes' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/5 border border-white/5 rounded-lg p-2">
                  <div className="text-white/40 text-[9px] font-sans uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white text-sm font-bold font-display">{value}</div>
                  <div className="text-white/30 text-[9px] font-sans">{sub}</div>
                </div>
              ))}
            </div>

            {/* Recent quotes table */}
            <div className="bg-white/5 border border-white/5 rounded-lg overflow-hidden">
              <div className="px-3 py-2 border-b border-white/5">
                <span className="text-white/60 text-[10px] font-sans font-semibold uppercase tracking-wider">Recent Quotes</span>
              </div>
              {[
                { num: 'PQ-2025-0018', customer: 'Valley Baptist Church', price: '$1,248', status: 'sent', margin: '43.2%' },
                { num: 'PQ-2025-0017', customer: "Johnson's Print Supply", price: '$386', status: 'accepted', margin: '38.7%' },
                { num: 'PQ-2025-0016', customer: 'Riverside Elementary', price: '$2,910', status: 'draft', margin: '45.1%' },
              ].map(({ num, customer, price, status, margin }) => (
                <div key={num} className="flex items-center justify-between px-3 py-2 border-b border-white/5 last:border-0">
                  <span className="text-forest-400 text-[9px] font-mono">{num}</span>
                  <span className="text-white/70 text-[9px] font-sans flex-1 ml-2">{customer}</span>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-sans mr-2 ${
                    status === 'sent' ? 'bg-forest-900 text-forest-400' :
                    status === 'accepted' ? 'bg-green-900/50 text-green-400' :
                    'bg-white/5 text-white/40'
                  }`}>{status}</span>
                  <span className="text-white/80 text-[9px] font-mono font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
