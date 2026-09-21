import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radha Property | Premium Real Estate & Investment",
  description:
    "Build a Better Tomorrow with Radha Property. Registered 2026. Expert dealing in flats, plots, commercial spaces, PG rooms, and legal support.",
  verification: {
    google: "ABC123....",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fcfbfc] text-[#1e2238] antialiased">
        {children}
      </body>
    </html>
  );
}