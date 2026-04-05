import "./globals.css";

// ─── SEO — EDIT THIS SECTION ───────────────────────────────────────────────
const SITE_URL = "https://pressquote.com"; // update when you have a domain
const TITLE = "PressQuote — PressQuote ";
const DESCRIPTION =
  "Generate fast, accurate, profitable quotes for your print shop. Built for business cards, flyers, posters, banners, booklets, and more. Automatic rush pricing, QuickBooks sync, and full margin visibility.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "PressQuote, print shop management software, printing business software, print quote generator, print shop pricing tool",
  authors: [{ name: "PressQuote" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "PressQuote",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
