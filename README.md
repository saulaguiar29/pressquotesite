# PressQuote Marketing Website

A production-ready Next.js 14 marketing site for PressQuote — built for fast edits and easy Vercel deployment.

## Quick Start

```bash
npm install
npm run dev
# → Open http://localhost:3000
```

## Deploy to Vercel (Free)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → "Add New Project"
3. Import your repo
4. Click Deploy — done. Live in ~60 seconds.

Every future `git push` auto-deploys. Changes go live in ~30 seconds.

---

## How to Edit Content

All your marketing copy is at the top of `app/page.jsx` in plain arrays/objects.
You never need to touch HTML to update text.

### Change the headline or description
→ Edit `app/page.jsx` — look for the Hero section or the nav/copy strings at the top

### Add/edit features
→ Edit the `FEATURES` array in `app/page.jsx`

### Change pricing tiers
→ Edit the `PRICING` array in `app/page.jsx`

### Update rush pricing table
→ Edit the `RUSH_RULES` array in `app/page.jsx`

### Change SEO title/description/keywords
→ Edit `app/layout.jsx` — look for the SEO section with `TITLE`, `DESCRIPTION`, `SITE_URL`

### Update your domain for SEO
→ Change `SITE_URL` in `app/layout.jsx` to your real domain

---

## Connect Email Capture

The waitlist form in `components/WaitlistForm.jsx` simulates a success state.
To actually capture emails, replace the simulated delay with a real API call.

**Option A — Next.js API route (simplest):**
```js
// app/api/waitlist/route.js
export async function POST(req) {
  const { email } = await req.json()
  // Save to your database, send to Mailchimp, etc.
  return Response.json({ ok: true })
}
```

**Option B — Mailchimp / ConvertKit / Resend:**
Replace the simulated `await new Promise(...)` in `WaitlistForm.jsx` with:
```js
await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})
```

---

## Add New Pages

Create `app/about/page.jsx`, `app/privacy/page.jsx`, etc.
Next.js handles routing automatically. Then add links to the Footer in `app/page.jsx`.

## Add a custom domain on Vercel

1. Go to your Vercel project → Settings → Domains
2. Add your domain
3. Update your DNS records as shown
4. Update `SITE_URL` in `app/layout.jsx`

---

## Tech Stack

- **Next.js 14** — App Router, server components, built-in SEO
- **Tailwind CSS** — utility-first styling, matches the PressQuote app theme
- **Google Fonts** — Syne (display) + DM Sans (body) — same as the app
- **Vercel** — deploy target, free tier is plenty

## File Structure

```
pressquote-site/
├── app/
│   ├── layout.jsx        ← SEO metadata, fonts, root HTML
│   ├── page.jsx          ← All landing page content (edit here!)
│   └── globals.css       ← Global styles + Tailwind
├── components/
│   ├── WaitlistForm.jsx  ← Email capture (client component)
│   └── DashboardMockup.jsx ← CSS app preview in hero
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```
