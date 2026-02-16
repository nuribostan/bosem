import UrunCard from "../urunSingle/urunCard";
import data from "@/db/urunler.json";
import Product from "@/types/product";

const UrunList = ({ productName }: { productName: string }) => {
  const category = data.urunler.find(
    (product: Product) => product.url.split("/").pop() === productName,
  );

  if (!category) {
    return <div className="mt-10 text-center">Ürün bulunamadı.</div>;
  }

  const allSubProducts = category.types.flatMap((brandGroup) =>
    brandGroup.types.map((subProduct) => ({
      ...subProduct,
      url: category.url,
    })),
  );

  console.log("Gösterilecek tüm alt ürünler:", allSubProducts);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  gap-6 overflow-hidden mt-10">
      {allSubProducts.map((product, index) => (
        <div
          key={`${product.brand}-${product.id}-${index}`}
          className="w-full h-full"
        >
          <UrunCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default UrunList;
