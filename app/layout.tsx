
import type { Metadata } from "next";
import { fonts } from "@/styles/font";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bosem Tarım",
  description: "Soğuk günlerin sıcak dostu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={` ${fonts.robotoSerif.variable} font-serif`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
