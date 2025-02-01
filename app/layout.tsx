import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vikram Chouhan — Fullstack Engineer",
  description: "Fullstack developer",
  generator: "Next.js",
  applicationName: "Vikram Chouhan",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Vikram Chouhan — Fullstack Engineer",
    description: "Fullstack Engineer",
    url: "https://vikram-portfolio-azure.vercel.app/",
    siteName: "www.Vikramchouhan.com",
    images: [
      {
        url: "https://github.com/vikramchavan888/vikramchavan.com/blob/main/Assets/WhatsApp%20Image%202023-12-24%20at%201.32.16%20AM.jpeg?raw=true",
        width: 1200,
        height: 630,
        alt: "Vikram Chouhan — Fullstack Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Chouhan — Fullstack Engineer",
    description: "Fullstack Engineer",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/vikramchavan888/vikramchavan.com/blob/main/Assets/WhatsApp%20Image%202023-12-24%20at%201.32.16%20AM.jpeg?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
