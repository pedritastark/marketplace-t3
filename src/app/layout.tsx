import type { Metadata } from "next";
import { Barrio, Libre_Baskerville, Roboto } from "next/font/google";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import ThemeRegistry from "./components/ThemeRegistry";
import "./globals.css";

// Cargar fuentes de Google Fonts
const barrio = Barrio({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barrio',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Transforma3",
  description: "Conectando empresas con la economía circular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barrio&family=Bitcount+Prop+Double:wght@100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${barrio.variable} ${libreBaskerville.variable} ${roboto.variable}`} style={{ fontFamily: '"Bitcount Prop Double", "Libre Baskerville", Barrio, Roboto, sans-serif' }}>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}