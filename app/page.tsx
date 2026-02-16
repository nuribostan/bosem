import BizeUlasin from "@/components/sections/homepage/BizeUlasin";
import Hakkimizda from "@/components/sections/homepage/Hakkimizda";
import Hero from "@/components/sections/homepage/Hero";
import ProductsList from "@/components/sections/homepage/ProductsList";
import ProductsPageHeader from "@/components/sections/homepage/ProductsPageHeader";

import Slogan from "@/components/sections/homepage/Slogan";
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
