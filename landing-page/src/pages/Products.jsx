import products from "../components/data/Data";
const ProductGrid = () => {
  return (
    <>
      <section className="py-20 flex text-center w-full justify-center">
        <h1 className="text-5xl font-medium font-serif">Products Selection</h1>
      </section>
      <section
        id="products"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 max-w-[1200px] mx-auto"
      >
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.image}
              className="w-full h-50 object-cover mb-2 "
            />
            <p className="text-sm  font-serif">{product.name}</p>
          </div>
        ))}
        <div id="about" className="pt-12"></div>
      </section>
    </>
  );
};

export default ProductGrid;
