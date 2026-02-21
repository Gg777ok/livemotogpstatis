import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://livemotogp.com"),

  title: {
    default: "LIVEMotoGP - Live Streaming & Berita MotoGP 2026",
    template: "%s | LIVEMotoGP",
  },

  description:
    "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari.",

  keywords: [
    "Live MotoGP",
    "Streaming MotoGP 2026",
    "Jadwal MotoGP",
    "Klasemen MotoGP",
    "Hasil Race MotoGP",
    "Berita MotoGP",
  ],

  authors: [{ name: "LIVEMotoGP Team" }],
  creator: "LIVEMotoGP",
  publisher: "LIVEMotoGP",

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

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://livemotogp.com",
    siteName: "LIVEMotoGP",
    title: "LIVEMotoGP - Live Streaming & Berita MotoGP 2026",
    description:
      "Streaming MotoGP 2026 live HD, jadwal race lengkap, klasemen terbaru, dan berita pembalap setiap hari.",
    images: [
      {
        url: "/og-image.jpg", // simpan di public/
        width: 1200,
        height: 630,
        alt: "Live Streaming MotoGP 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LIVEMotoGP - Live Streaming MotoGP 2026",
    description:
      "Nonton live MotoGP 2026, cek jadwal race, klasemen, dan hasil balapan terbaru.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5121660910861187"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
