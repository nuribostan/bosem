import type { Metadata } from "next";
import { fonts } from "@/styles/font";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bosem Tarım | Soğuk Günlerin Sıcak Dostu",
    template: "%s | BOSEM TARIM",
  },
  description:
    "Rize'de ithal kömür, pelet yakıtı ve en iyi çay gübresi çeşitleriyle güvenilir tarım ve ısınma çözümleri. Taksitli satış ve uygun fiyat avantajları.",
  keywords: [
    "bosem tarım",
    "rize kömür",
    "ithal kömür fiyatları",
    "ucuz kömür",
    "en iyi kömür",
    "pelet yakıtı",
    "çam peleti",
    "rize gübre",
    "en ucuz gübre",
    "taksitli gübre",
    "çay gübresi",
    "kalorifer kömürü",
    "tarım",
  ],
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
