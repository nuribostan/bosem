import UrunCard from "./urunCard";
import data from "@/db/urunler.json";
import Product from "@/types/product";

const UrunList = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden mt-10">
      {data.urunler.map((product: Product) => (
        <div key={product.id} className="w-full h-full">
          <UrunCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default UrunList;
