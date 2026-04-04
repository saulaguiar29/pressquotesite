import './globals.css'

// ─── SEO — EDIT THIS SECTION ───────────────────────────────────────────────
const SITE_URL = 'https://pressquote.com' // update when you have a domain
const TITLE = 'PressQuote — Print Shop Quoting Software'
const DESCRIPTION =
  'Generate fast, accurate, profitable quotes for your print shop. Built for business cards, flyers, posters, banners, booklets, and more. Automatic rush pricing, QuickBooks sync, and full margin visibility.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'print shop quoting software, print shop management software, printing business software, print quote generator, print shop pricing tool',
  authors: [{ name: 'PressQuote' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'PressQuote',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
