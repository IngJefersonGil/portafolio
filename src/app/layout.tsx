import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jeferson Gil | Software Engineer",
  description:
    "Arquitecto de soluciones digitales y desarrollador full-stack. Transformo ideas complejas en interfaces elegantes y sistemas escalables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
