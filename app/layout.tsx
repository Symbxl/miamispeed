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

const title = "Miami Speed Rentals | Slingshots, Yachts, Jet Skis & Exotic Cars";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Miami Speed Rentals",
  },
  description,
  applicationName: site.name,
  keywords: [
    "Miami slingshot rental",
    "Polaris slingshot Miami",
    "yacht rental Miami",
    "jet ski rental Miami",
    "exotic car rental Miami",
    "jet car rental Miami",
    "South Beach slingshot rental",
    "Fort Lauderdale rentals",
    "Miami concierge rentals",
    "veteran owned rental Miami",
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#06060a",
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
