import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KonamiWrapper } from "@/components/konami-wrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://egekaya.dev"),
  title: "Ege Kaya | Software Engineer Portfolio - React, Next.js, TypeScript",
  description: "Portfolio of Ege Kaya - Computer Engineering student at Politecnico di Torino (27/30 GPA) and Front End Developer at Parma Calcio 1913. Specialized in React, Next.js, TypeScript, AWS and Python. Building production-grade full-stack applications in Torino, Italy.",
  keywords: [
    "Ege Kaya",
    "Software Engineer Portfolio",
    "Computer Engineering",
    "Front End Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Politecnico di Torino",
    "Parma Calcio 1913",
    "AWS Developer",
    "Software Engineer",
    "Python Developer",
    "PostgreSQL",
    "Torino Italy",
    "Web Development Portfolio",
    "AI Development",
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
    type: "website",
    locale: "en_US",
    url: "https://egekaya.dev",
    title: "Ege Kaya | Software Engineer Portfolio",
    description: "Computer Engineering student at Politecnico di Torino and Front End Developer at Parma Calcio 1913. Specialized in React, Next.js, TypeScript, AWS, and Python.",
    siteName: "Ege Kaya Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ege Kaya - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Kaya | Software Engineer Portfolio",
    description: "Computer Engineering student at Politecnico di Torino. Building production-grade applications with React, Next.js, and TypeScript.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
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
    image: 'https://egekaya.dev/profile.webp',
    jobTitle: 'Computer Engineering Student & Front End Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Parma Calcio 1913',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Politecnico di Torino',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Torino',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/ege-kaya/',
      'https://github.com/egekaya1',
    ],
    knowsAbout: [
      'Computer Engineering',
      'Software Development',
      'Front End Development',
      'Full Stack Development',
      'Embedded Systems',
      'React',
      'Next.js',
      'TypeScript',
      'AWS',
      'PostgreSQL',
      'C++',
      'Python'
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <KonamiWrapper>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
            >
              Skip to main content
            </a>
            <Analytics />
            <SpeedInsights />
            <Navbar />
            {children}
            <Footer />
          </KonamiWrapper>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
