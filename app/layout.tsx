import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEOTECA | Lee menos. Aprende como CEO.",
  description:
    "CEOTECA transforma libros clave de negocios, inversión y crecimiento en análisis accionables con IA para founders.",
  metadataBase: new URL("https://landingceoteca.vercel.app"),
  openGraph: {
    title: "CEOTECA | Acceso Founders",
    description:
      "Deja tu correo o WhatsApp y recibe acceso anticipado, descuento founder y guía exclusiva.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
