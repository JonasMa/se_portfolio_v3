import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://jmattes.de";
const description =
  "Jonas Mattes is a freelance frontend and full-stack web developer with 7+ years of experience, including at Google. He builds fast, reliable and accessible web applications with Angular, React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jonas Mattes — Freelance Frontend & Full-Stack Developer",
    template: "%s · Jonas Mattes",
  },
  description,
  keywords: [
    "Frontend Developer",
    "Full-Stack Developer",
    "Freelance Frontend Developer",
    "Freelance Full-Stack Developer",
    "Freelance Web Developer",
    "Angular Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Developer Munich",
    "Jonas Mattes",
  ],
  authors: [{ name: "Jonas Mattes", url: siteUrl }],
  creator: "Jonas Mattes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jonas Mattes — Frontend & Full-Stack Developer",
    title: "Jonas Mattes — Freelance Frontend & Full-Stack Developer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Mattes — Freelance Frontend & Full-Stack Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonas Mattes",
  url: siteUrl,
  image: `${siteUrl}/me.png`,
  jobTitle: "Freelance Frontend & Full-Stack Developer",
  description,
  email: "contact@jmattes.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Munich",
    addressCountry: "DE",
  },
  sameAs: [
    "https://github.com/JonasMa",
    "https://www.linkedin.com/in/jonas-mattes-3984a2181/",
  ],
  knowsAbout: [
    "Frontend Development",
    "Full-Stack Development",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "RxJS",
    "NgRx",
    "Web Accessibility",
    "Web Performance",
  ],
  alumniOf: [
    { "@type": "Organization", name: "Google" },
    { "@type": "Organization", name: "Zühlke" },
  ],
};

const themeInitScript = `
(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`bg-bg text-ink selection:bg-yellow selection:text-black ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <ThemeToggle />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
