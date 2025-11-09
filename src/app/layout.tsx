import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Secret of E-Commerce Nobel",
  description:
    "Master the art of launching and scaling profitable e-commerce ventures with immersive lessons, code blueprints, and a guided growth framework.",
  metadataBase: new URL("https://agentic-e4bf8338.vercel.app"),
  openGraph: {
    title: "Secret of E-Commerce Nobel",
    description:
      "A cinematic learning experience that fuses e-commerce strategy with production-ready code assets.",
    url: "https://agentic-e4bf8338.vercel.app",
    siteName: "Secret of E-Commerce Nobel",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Hero art for Secret of E-Commerce Nobel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret of E-Commerce Nobel",
    description:
      "Interactive commerce mastery with motion graphics, 3D storytelling, and turnkey code.",
    site: "@secommerce_nobel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
