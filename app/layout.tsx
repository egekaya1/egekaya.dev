import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const title = "Ege Kaya"
const description =
  "M.Sc. Computer Science student at UBC working on NLP interpretability, explainable and human-centred AI, and low-level systems engineering."

export const metadata: Metadata = {
  metadataBase: new URL("https://egekaya.dev"),
  title,
  description,
  keywords: [
    "Ege Kaya",
    "UBC",
    "University of British Columbia",
    "M.Sc. Computer Science",
    "NLP",
    "Interpretability",
    "Explainable AI",
    "Human-Centred AI",
    "LLM Evaluation",
    "Retrieval-Augmented Generation",
    "Activation Patching",
    "Swift Concurrency",
    "Google Summer of Code",
    "Systems Programming",
    "Politecnico di Torino",
  ],
  authors: [{ name: "Ege Kaya", url: "https://egekaya.dev" }],
  creator: "Ege Kaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://egekaya.dev",
    title,
    description,
    siteName: "Ege Kaya",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ege Kaya, M.Sc. Computer Science at UBC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/favicon.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ege Kaya',
    url: 'https://egekaya.dev',
    image: 'https://egekaya.dev/hero-profile.webp',
    jobTitle: 'Graduate Researcher, Computer Science',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'University of British Columbia',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Politecnico di Torino',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    sameAs: [
      'https://scholar.google.ca/citations?user=6oLyRogAAAAJ',
      'https://www.linkedin.com/in/ege-kaya/',
      'https://github.com/egekaya1',
    ],
    knowsAbout: [
      'Natural Language Processing',
      'Interpretability',
      'Explainable AI',
      'Human-Computer Interaction',
      'Retrieval-Augmented Generation',
      'Systems Programming',
      'C++',
      'Swift',
      'Python',
      'PyTorch',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Analytics />
          <SpeedInsights />
          <div className="noise-overlay" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
