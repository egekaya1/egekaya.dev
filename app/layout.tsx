import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
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

export const metadata: Metadata = {
  title: "Ege Kaya | Computer Engineering Student & Front End Developer",
  description: "Portfolio of Ege Kaya - Computer Engineering student at Politecnico di Torino and Front End Developer Intern at Parma Calcio 1913. Passionate about AI, full-stack development, and building elegant solutions.",
  keywords: [
    "Ege Kaya",
    "Computer Engineering",
    "Front End Developer",
    "Politecnico di Torino",
    "Full Stack Developer",
    "AI",
    "Web Development",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ege Kaya" }],
  creator: "Ege Kaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://egekaya.dev",
    title: "Ege Kaya | Computer Engineering Student & Front End Developer",
    description: "Portfolio of Ege Kaya - Computer Engineering student at Politecnico di Torino and Front End Developer Intern at Parma Calcio 1913.",
    siteName: "Ege Kaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Kaya | Computer Engineering Student & Front End Developer",
    description: "Portfolio of Ege Kaya - Computer Engineering student at Politecnico di Torino and Front End Developer Intern at Parma Calcio 1913.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
