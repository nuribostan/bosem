import HomepageProductList from "../ui/Homepage/ProductList";

const ProductsList = () => {
  return (
    <div className="products-list w-full bg-products-background h-full relative py-40 max-sm:py-10 z-10 rounded-b-[60px]">
      <HomepageProductList />
    </div>
  );
};

export default ProductsList;
