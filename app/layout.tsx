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
  title: "Gavin Pelletier | AI Engineer & Co-founder of Kolix AI",
  description:
    "AI engineer building custom agents that save companies time. Co-founder of Kolix AI — Discord agents, system integrations, and operational dashboards.",
  openGraph: {
    title: "Gavin Pelletier | AI Engineer & Co-founder of Kolix AI",
    description:
      "Custom AI agents that plug into your existing tools and handle the repetitive work your team shouldn't be doing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavin Pelletier | AI Engineer & Co-founder of Kolix AI",
    description:
      "Custom AI agents that plug into your existing tools and handle the repetitive work your team shouldn't be doing.",
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
