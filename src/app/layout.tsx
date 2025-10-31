import type { Metadata } from "next";
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
  title: "Ajogu Joseph | Software Developer",
  description:
    "Mid-Level Software Developer specializing in React ecosystems, crafting scalable and efficient web applications.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: "Ajogu Joseph | Software Developer",
    description:
      "Mid-Level Software Developer specializing in React ecosystems, crafting scalable and efficient web applications.",
    url: "https://ajogu.vercel.app",
    siteName: "Ajogu Joseph Portfolio",
    images: [
      {
        url: "https://ajogu.vercel.app/goab-og-img.png",
        width: 1200,
        height: 630,
        alt: "Ajogu Joseph Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajogu Joseph | Software Developer",
    description:
      "Mid-Level Software Developer specializing in React ecosystems, crafting scalable and efficient web applications.",
    images: ["https://ajogu.vercel.app/goab-og-img.png"],
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
  alternates: {
    canonical: "https://ajogu.vercel.app",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-site-verification-code",
  },
  bookmarks: ["/favicon.ico"],
  category: "technology",
  authors: [{ name: "Ajogu Joseph", url: "https://ajogu.vercel.app" }],
  publisher: "Ajogu Joseph",
  metadataBase: new URL("https://ajogu.vercel.app"),
  applicationName: "Ajogu Joseph Portfolio",
  generator: "Next.js",
  keywords: [
    "Ajogu Joseph",
    "AJ__ITACHI",
    "Joseph Ajogu",
    "Ajogu",
    "Ajogu Developer",
    "Software Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Full-Stack Developer",
    "Portfolio",
    "SaaS Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Tech Enthusiast",
    "UI/UX Designer",
    "Open Source Contributor",
  ],
  themeColor: "#ffffff",
  colorScheme: "light dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
