import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Salt Lake City Gourmet Recipes | Foodie Paradise",
  description: "Discover exceptional gourmet recipes perfect for Salt Lake City food enthusiasts. From mountain-inspired cuisine to international flavors, elevate your culinary journey.",
  keywords: "Salt Lake City recipes, gourmet cooking, Utah food, foodie recipes, mountain cuisine, culinary Salt Lake",
  authors: [{ name: "Salt Lake Gourmet Kitchen" }],
  creator: "Salt Lake Gourmet Kitchen",
  publisher: "Salt Lake Gourmet Recipes",
  icons: {
    icon: "/images/salt-lake-gourmet-logo.png",
    shortcut: "/images/salt-lake-gourmet-logo.png",
    apple: "/images/salt-lake-gourmet-logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/salt-lake-gourmet-logo.png",
    },
  },
  openGraph: {
    title: "Salt Lake City Gourmet Recipes | Foodie Paradise",
    description: "Discover exceptional gourmet recipes perfect for Salt Lake City food enthusiasts.",
    url: "https://saltlakegourmet.com",
    siteName: "Salt Lake Gourmet Recipes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/salt-lake-gourmet-logo.png",
        width: 800,
        height: 600,
        alt: "Salt Lake Gourmet Logo",
      },
    ],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://saltlakegourmet.com" />
        <link rel="alternate" hrefLang="en" href="https://saltlakegourmet.com/en" />
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Salt Lake City" />
        <meta name="geo.position" content="40.7608;-111.8910" />
        <meta name="ICBM" content="40.7608, -111.8910" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
