// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/global.scss";
import Navbar from "@/layouts/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Understood | Be The Woman He Can’t Forget",
    template: "%s | Understood",
  },
  description:
    "A quiet guide to understanding men, reading the unspoken, and becoming magnetic through presence — not performance. Instant download • 78 pages • No fluff, just clarity.",
  keywords: [
    "dating advice for women",
    "how to be unforgettable",
    "attraction psychology",
    "relationship guide",
    "self-help for women",
    "magnetic presence",
    "stop overthinking dates",
  ],
  authors: [{ name: "Eloise M." }],
  creator: "Eloise M.",
  publisher: "Understood Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aura-nine-omega.vercel.app", // ← YOUR LIVE DOMAIN
    siteName: "Understood",
    title: "Be The Woman He Can’t Forget",
    description:
      "Stop overthinking your dates. Understand what truly creates attraction — not performance.",
    images: [
      {
        url: "https://aura-nine-omega.vercel.app/og-image.jpg", // ← Full absolute URL
        width: 1200,
        height: 630,
        alt: "Understood Ebook Cover - Be The Woman He Can't Forget",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Be The Woman He Can’t Forget",
    description:
      "A quiet guide to becoming magnetic through presence — not performance.",
    images: ["https://aura-nine-omega.vercel.app/og-image.jpg"], // ← Full absolute URL
    creator: "@yourtwitterhandle", // ← Optional: add if you have one
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains if needed (e.g., fonts, analytics) */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      </head>
      <body className="font-sans">
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
