import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/context/UserContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SpotlightEffectHandler from "@/components/effects/SpotlightEffectHandler"; // Import the new component

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iyer.dev'), // Replace with your actual domain
  title: {
    default: "Clavis: Data Quality Navigator",
    template: "%s | Clavis",
  },
  description: "Diagnose real business pains, link them to foundational data issues, and generate a starter project charter to drive data-driven success. Clavis helps you navigate data quality for better business outcomes.",
  keywords: ["data quality", "dq", "business intelligence", "data strategy", "data governance", "project charter", "AI readiness", "Kartik Iyer"],
  authors: [{ name: "Kartik Iyer", url: "https://iyer.dev" }],
  creator: "Kartik Iyer",
  publisher: "Kartik Iyer",
  openGraph: {
    title: "Clavis: Data Quality Navigator",
    description: "Diagnose real business pains, link them to foundational data issues, and generate a starter project charter to drive data-driven success.",
    url: "https://iyer.dev/clavis", // Replace with your actual app URL
    siteName: "Clavis",
    images: [
      {
        url: "/OG-image.png", // Path to your OG image in the public folder
        width: 1200,
        height: 630,
        alt: "Clavis - Data Quality Navigator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clavis: Data Quality Navigator",
    description: "Diagnose real business pains and link them to foundational data issues with Clavis.",
    creator: "@kartikiyer", // Replace with your Twitter handle
    images: ["/OG-image.png"], // Path to your OG image
  },
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.svg", // SVG favicon
    apple: "/apple-touch-icon.png", // Apple touch icon (add this image to public)
  },
  manifest: "/site.webmanifest", // Add a web app manifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-bg-deep-dark text-text-primary flex flex-col min-h-full`}>
        <UserContextProvider>
          <SpotlightEffectHandler /> {/* Add the handler here */}
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
