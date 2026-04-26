// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/global.scss";
import Navbar from "@/layouts/Navbar";

export const metadata: Metadata = {
  title: "Aura",
  description: "Elegant warm yellow landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
