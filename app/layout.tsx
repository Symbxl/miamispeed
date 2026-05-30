import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "./components/site-config";
import StructuredData from "./components/StructuredData";

const display = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Timeless Autogroup | Exotic & Luxury Car Rental in NYC";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Timeless Autogroup",
  },
  description,
  applicationName: site.name,
  keywords: [
    "exotic car rental NYC",
    "luxury car rental New York",
    "Lamborghini rental NYC",
    "Ferrari rental New York",
    "McLaren rental NYC",
    "Porsche rental Manhattan",
    "exotic car rental Brooklyn",
    "supercar rental New York City",
    "chauffeur service NYC",
    "Tri-State exotic car rental",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#060606",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
