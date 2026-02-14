import BizeUlasin from "@/components/sections/BizeUlasin";
import Hakkimizda from "@/components/sections/Hakkimizda";
import Hero from "@/components/sections/Hero";
import ProductsList from "@/components/sections/ProductsList";
import ProductsPageHeader from "@/components/sections/ProductsPageHeader";

import Slogan from "@/components/sections/Slogan";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";

export default function Home() {
  return (
    <main className="relative w-full min-h-[400vh] bg-transparent">
      <Hero bg={bg} alt="Bosem Tarım" />
      <Slogan />
      <ProductsPageHeader />
      <ProductsList />
      <BizeUlasin />
      <Hakkimizda />
    </main>
  );
}