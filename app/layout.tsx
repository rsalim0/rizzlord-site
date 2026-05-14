import type { Metadata } from "next";
import "@fontsource/open-runde/400.css";
import "@fontsource/open-runde/500.css";
import "@fontsource/open-runde/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizzlord | AI Wingman",
  description: "Rizzlord is the AI wingman built for smoother conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
