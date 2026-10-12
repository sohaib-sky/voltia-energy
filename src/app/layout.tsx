import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRUE CUTOUT — AI Background Remover | Remove Image Backgrounds",
  description:
    "Remove image backgrounds with AI using TRUE CUTOUT. Create clean transparent PNG cutouts from JPG, PNG, and WebP images in seconds.",
  keywords: [
    "AI background remover",
    "remove image background",
    "background remover",
    "remove background from image",
    "AI image background removal",
    "transparent PNG",
    "image cutout",
    "online background remover",
  ],
  authors: [{ name: "TURE" }],
  creator: "TURE",
  openGraph: {
    title: "TRUE CUTOUT — AI Background Remover",
    description:
      "Remove image backgrounds with AI and create clean transparent cutouts in seconds.",
    type: "website",
    siteName: "TRUE CUTOUT",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRUE CUTOUT — AI Background Remover",
    description:
      "Remove image backgrounds with AI and create clean transparent cutouts in seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TRUE CUTOUT",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  description:
    "Remove image backgrounds with AI and create clean transparent cutouts in seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "TURE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
