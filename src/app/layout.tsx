import type { Metadata } from "next";
import "../css/globals.css";
import localFont from "next/font/local";

const neulisSans = localFont({
  src: [
    {
      path: "../fonts/Neulis_Sans_Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Semi_Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Neulis_Sans_Extra_Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

export const metadata: Metadata = {
  title: "Fast Onward",
  description: "Fast Onward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={neulisSans.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
