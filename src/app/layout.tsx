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
  title: "Ô ECLAT | Société de Nettoyage à Dijon, Besançon et Fontaine Française",
  description: "Ô ECLAT est votre société de nettoyage de confiance à Dijon, Besançon et Fontaine Française. Services de nettoyage de vitres, sols, bardages, panneaux solaires et débarras. Devis gratuit.",
  keywords: ["nettoyage", "société de nettoyage", "Dijon", "Besançon", "Fontaine Française", "vitres", "sols", "bardages", "panneaux solaires", "débarras", "Ô ECLAT"],
  icons: {
    icon: "/images/eclat.ico",
    shortcut: "/images/eclat.ico",
    apple: "/images/eclat.ico",
  },
};

import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import "./globals.css";

// ... (Metadata import)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          {/* <ChatBot /> */}
        </Providers>
      </body>
    </html>
  );
}

