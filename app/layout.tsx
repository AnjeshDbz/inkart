import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./lib/fontawesome";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "Inkart - Your Premium Shopping Destination",
  description:
    "Discover unique, thoughtfully crafted home décor pieces and high-quality electronics at Inkart.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00095b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <ServiceWorkerRegister />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
