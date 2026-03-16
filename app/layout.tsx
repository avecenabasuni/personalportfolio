import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-display",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avecena Basuni — SRE & Observability Engineer",
  description:
    "Electrical engineer turned SRE. I instrument distributed systems, tune alert noise, and build observability that engineers actually use — across AWS, GCP, and on-prem.",
  keywords: [
    "SRE",
    "Site Reliability Engineering",
    "Observability",
    "New Relic",
    "OpenTelemetry",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "Avecena Basuni" }],
  openGraph: {
    title: "Avecena Basuni — SRE & Observability Engineer",
    description:
      "Electrical engineer turned SRE. I instrument distributed systems, tune alert noise, and build observability that engineers actually use.",
    url: "https://avecenabasuni.my.id",
    siteName: "Avecena Basuni",
    locale: "en_US",
    type: "website",
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
      className={`dark ${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
