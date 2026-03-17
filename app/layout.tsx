import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import StickyContact from "@/components/StickyContact";
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
  metadataBase: new URL("https://avecenabasuni.my.id"),
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/logo-avecenabasuni.png", type: "image/png" }],
    shortcut: "/images/logo-avecenabasuni.png",
    apple: "/images/logo-avecenabasuni.png",
  },
  openGraph: {
    title: "Avecena Basuni — SRE & Observability Engineer",
    description:
      "Electrical engineer turned SRE. I instrument distributed systems, tune alert noise, and build observability that engineers actually use.",
    url: "https://avecenabasuni.my.id",
    siteName: "Avecena Basuni",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo-avecenabasuni.jpg",
        width: 500,
        height: 500,
        alt: "Avecena Basuni portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avecena Basuni — SRE & Observability Engineer",
    description:
      "Electrical engineer turned SRE focused on observability, reliability, and cloud infrastructure.",
    images: ["/images/logo-avecenabasuni.jpg"],
  },
};

const newRelicConfigScript = `
window.NREUM||(NREUM={});
NREUM.init={session_replay:{enabled:true,block_selector:'',mask_text_selector:'',sampling_rate:100,error_sampling_rate:100,mask_all_inputs:false,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},performance:{capture_detail:true,capture_marks:true,capture_measures:true},browser_consent_mode:{enabled:false},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"],capture_payloads:'none'}};
NREUM.loader_config={accountID:"4381242",trustKey:"4381242",agentID:"1120313957",licenseKey:"NRJS-97af675f24f176c6bb0",applicationID:"1120313957"};
NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-97af675f24f176c6bb0",applicationID:"1120313957",sa:1};
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avecena Basuni",
    url: "https://avecenabasuni.my.id",
    image: "https://avecenabasuni.my.id/images/foto-avecenabasuni.jpg",
    jobTitle: "SRE & Observability Engineer",
    email: "mailto:hello@avecenabasuni.my.id",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: [
      "https://linkedin.com/in/avecenabasuni",
      "https://github.com/avecenabasuni",
      "https://medium.com/@avecenabasuni",
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <Script
          id="newrelic-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: newRelicConfigScript }}
        />
        <Script
          id="newrelic-loader"
          src="https://js-agent.newrelic.com/nr-loader-spa-current.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="jsonld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        <StickyContact />
      </body>
    </html>
  );
}
