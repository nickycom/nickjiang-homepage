import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Jiang | Marketing Director",
  description:
    "Nick Jiang (蒋卢) — Marketing Director with 15+ years of experience in brand strategy, trade marketing, and digital transformation across global beer, coffee, and FMCG brands.",
  keywords: [
    "Nick Jiang",
    "Marketing Director",
    "Brand Strategy",
    "Trade Marketing",
    "FMCG",
    "Beer",
    "Coffee",
  ],
  openGraph: {
    title: "Nick Jiang | Marketing Director",
    description:
      "15+ years in brand strategy, trade marketing & digital transformation at Budweiser APAC, CR Beer, NOWWA Coffee, and more.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
