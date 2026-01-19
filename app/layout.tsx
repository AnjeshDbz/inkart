import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./lib/fontawesome";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="theme-color" content="#00095b" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ServiceWorkerRegister />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
