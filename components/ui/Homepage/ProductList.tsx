import data from "@/data/homepage/products.json";
import HomepageProductCard from "./ProductCard";

const HomepageProductList = () => {
  return (
    <div className="productList w-full h-full flex flex-col items-center justify-center gap-40 max-w-324 mx-auto px-4 max-lg:gap-20">
      {data.products.map((product) => (
        <HomepageProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          alt={product.alt}
          product={product.product}
          types={product.types.map((t) => t.name)}
        />
      ))}
    </div>
  );
};

export default HomepageProductList;
