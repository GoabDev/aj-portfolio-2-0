import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajogujoseph.vercel.app"),
  title: {
    default: "Ajogu Joseph | Full-Stack & Frontend Developer",
    template: "%s | Ajogu Joseph",
  },
  description:
    "Portfolio of Ajogu Joseph, a Frontend and Full-Stack Developer building scalable web apps, internal business systems, automation tools, and modern product experiences.",
  applicationName: "Ajogu Joseph Portfolio",
  authors: [{ name: "Ajogu Joseph", url: "https://ajogujoseph.vercel.app" }],
  creator: "Ajogu Joseph",
  publisher: "Ajogu Joseph",
  category: "technology",
  alternates: {
    canonical: "https://ajogujoseph.vercel.app",
  },
  keywords: [
    "Ajogu Joseph",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Supabase Developer",
    "TypeScript Developer",
    "Software Developer Nigeria",
    "Lagos Software Developer",
    "Web Application Developer",
    "Internal Business Systems",
    "Automation Engineer",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ajogu Joseph | Full-Stack & Frontend Developer",
    description:
      "Explore projects by Ajogu Joseph across internal enterprise systems, automation tools, and high-performance web interfaces.",
    url: "https://ajogujoseph.vercel.app",
    siteName: "Ajogu Joseph Portfolio",
    images: [
      {
        url: "https://ajogujoseph.vercel.app/images/social-portfolio-og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Ajogu Joseph - Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajogu Joseph | Full-Stack & Frontend Developer",
    description:
      "Portfolio featuring web apps, internal systems, and automation projects by Ajogu Joseph.",
    images: [
      "https://ajogujoseph.vercel.app/images/social-portfolio-x-1200x628.jpg",
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
  bookmarks: ["/favicon.ico"],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
