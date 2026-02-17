import HakkimizdaContent from "@/components/sections/urunSingle/Content";
import Hero from "@/components/sections/urunSingle/Hero";
import Slogan from "@/components/sections/urunSingle/Slogan";
import HakkimizdaTitle from "@/components/sections/urunSingle/Title";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1))
    .join(" ");

  return {
    title: formattedTitle,
    description: `Bosem Tarım garantisiyle en kaliteli ${formattedTitle} çeşitlerini inceleyin. Rize ve çevresi için taksitli satış, uygun fiyat ve güvenilir teslimat avantajları.`,
    keywords: [
      formattedTitle,
      `ucuz ${formattedTitle}`,
      `en iyi ${formattedTitle}`,
      `taksitli ${formattedTitle}`,
      "rize kömür firmaları",
      "kaliteli gübre",
      "bosem tarım",
    ],
  };
}
const UrunSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className="w-full h-full">
      <Hero bg={bg} alt="Bosem Tarım" title={slug} />
      <Slogan />
      <HakkimizdaTitle />
      <HakkimizdaContent productName={slug} />
    </div>
  );
};

export default UrunSinglePage;
