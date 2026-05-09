import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { LoadingScreen } from "@/components/loading/loading-screen";
import { ScrollProgress } from "@/components/scroll/scroll-progress";
import { personal } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://moizamz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} · Software Engineer · AI/ML · Full-Stack`,
    template: `%s · ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "Abdul Moiz",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "ASP.NET Core",
    "NUST",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: personal.linkedin }],
  creator: personal.name,
  openGraph: {
    type: "website",
    title: `${personal.name} · Software Engineer · AI/ML · Full-Stack`,
    description: personal.summary,
    url: siteUrl,
    siteName: `${personal.name} · Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} · Software Engineer`,
    description: personal.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
