import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const routes = [
  { name: "Algemeen", href: "/" },
  { name: "Economie", href: "/economie" },
  { name: "Sport", href: "/sport" },
  { name: "Politiek", href: "/politiek" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Uitzendingen", href: "/uitzendingen" },
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
