import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState({
    mensSneakers: [],
    menFormal: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const responses = await Promise.all([
          axios.get("http://localhost:4000/products?category=men-sneakers-casual-shoes"),
          axios.get("http://localhost:4000/products?category=men-formal-shoes"),
        ]);

        setProducts({
          mensSneakers: responses[0].data.products,
          menFormal: responses[1].data.products,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getSelectedProducts = (productData, indexes) => {
    return indexes.map(index => productData[index]).filter(Boolean);
  };

  const renderProductsSection = (title, productData, indexes) => {
    const selectedProducts = getSelectedProducts(productData, indexes);

    return (
      <section className="mb-10">
        <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
          {selectedProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto py-10">
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">Error: {error}</div>}

      {!loading && !error && (
        <>
          {products.mensSneakers.length > 0 &&
            renderProductsSection("- Best Sellers -", products.mensSneakers, [0, 2, 1])}
          {products.menFormal.length > 0 &&
            renderProductsSection("", products.menFormal, [0, 2, 1])}
        </>
      )}
    </div>
  );
};

export default Home;
