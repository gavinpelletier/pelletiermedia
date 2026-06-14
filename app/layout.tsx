import type { Metadata } from "next";
import { Inter, Newsreader, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gavin Pelletier | Custom AI Systems & Operational Software",
  description:
    "AI agents, technical-document tools, system integrations, and operator interfaces built for real business workflows.",
  openGraph: {
    title: "Gavin Pelletier | Custom AI Systems & Operational Software",
    description:
      "AI agents, technical-document tools, system integrations, and operator interfaces built for real business workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavin Pelletier | Custom AI Systems & Operational Software",
    description:
      "AI agents, technical-document tools, system integrations, and operator interfaces built for real business workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(newsreader.variable, inter.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
