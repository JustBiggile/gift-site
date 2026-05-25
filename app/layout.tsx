import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const provicali = localFont({
  src: "../public/fonts/Provicali/Provicali.woff2",
  variable: "--font-provicali",
  weight: "400",
});

const birds = localFont({
  src: "../public/fonts/BirdsofParadise/BirdsOfParadisePersonalUseOnly-dX7X.woff2",
  variable: "--font-birds",
  weight: "400",
});

const circular = localFont({
  src: [
    { path: "../public/fonts/Circular/CircularStd-Book.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Circular/CircularStd-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Circular/CircularStd-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Circular/CircularStd-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Circular/CircularStd-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Circular/CircularStd-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../public/fonts/Circular/CircularStd-Black.woff2", weight: "900", style: "normal" },
    { path: "../public/fonts/Circular/CircularStd-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "The Gift Forum",
  description: "Curated gift ideas for every person and every budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${provicali.variable} ${birds.variable} ${circular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
