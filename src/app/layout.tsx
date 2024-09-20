import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jonas Mattes",
  description:
    "Welcome to the digital portfolio of Jonas Mattes, a seasoned web developer with a penchant for crafting state-of-the-art, responsive, and robust web experiences. With a background at Google and a passion for user-centered design, Jonas specializes in creating beautiful, functional, and accessible websites that prioritize user experience. Explore Jonas's journey into web development and discover how he brings together design and functionality to create digital experiences that delight users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-blue-dark ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
