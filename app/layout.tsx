import type { Metadata, Viewport } from "next";
import "@fontsource/open-runde/400.css";
import "@fontsource/open-runde/500.css";
import "@fontsource/open-runde/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Footer from "./components/footer";

const siteUrl = "https://rizzlord.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rizzlord — #1 AI Wingman, Rizz Generator & Pickup Line App",
    template: "%s | Rizzlord",
  },
  description:
    "Rizzlord is the #1 AI wingman app. Generate rizz, pickup lines, and smooth replies for Tinder, Hinge, Bumble, and IRL conversations. 3-day free trial on iOS and Android.",
  applicationName: "Rizzlord",
  authors: [{ name: "Revokslab", url: siteUrl }],
  creator: "Revokslab",
  publisher: "Revokslab",
  keywords: [
    "AI wingman",
    "AI wingman app",
    "rizz app",
    "rizz generator",
    "AI rizz",
    "pickup line generator",
    "AI pickup lines",
    "dating assistant",
    "AI dating app",
    "Tinder opener generator",
    "Hinge reply generator",
    "Bumble opener",
    "flirting app",
    "conversation starter app",
    "Rizzlord",
  ],
  category: "lifestyle",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rizzlord",
    title: "Rizzlord — #1 AI Wingman, Rizz Generator & Pickup Line App",
    description:
      "Generate rizz, pickup lines, and smooth replies for Tinder, Hinge, Bumble, and IRL conversations. 3-day free trial on iOS and Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizzlord — #1 AI Wingman & Rizz Generator",
    description:
      "Generate rizz, pickup lines, and smooth replies in seconds. 3-day free trial on iOS and Android.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
