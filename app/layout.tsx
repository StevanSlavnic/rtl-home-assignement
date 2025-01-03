import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "../containers/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RTL Nieuws",
  description: "RTL Nieuws is een Nederlandse nieuwswebsite.",
};

const routes = [
  { name: "Algemeen", href: "/nieuws" },
  { name: "Economie", href: "/nieuws/economie" },
  { name: "Sport", href: "/nieuws/sport" },
  { name: "Politiek", href: "/nieuws/politiek" },
  { name: "Lifestyle", href: "/nieuws/lifestyle" },
  { name: "Uitzendingen", href: "/nieuws/uitzendingen" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <div className="container flex-grow">
            <Header routes={routes} />
            <div className="max-w-screen-xl mx-auto pt-4">{children}</div>
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
