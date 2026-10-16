import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { SITE_URL, socialLinks } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const description =
  "Bridging product strategy and engineering. From SDK architecture to product vision — shipping what matters.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chryssa Aliferi | Product Engineering Leader",
    template: "%s | Chryssa Aliferi",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Chryssa Aliferi",
    title: "Chryssa Aliferi | Product Engineering Leader",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ChryssaAl",
  },
};

// Structured data so search engines can connect the site to the person
// and her profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chryssa Aliferi",
  url: SITE_URL,
  jobTitle: "Product Manager",
  worksFor: { "@type": "Organization", name: "RudderStack", url: "https://www.rudderstack.com" },
  sameAs: socialLinks.filter(({ href }) => href.startsWith("https://")).map(({ href }) => href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
