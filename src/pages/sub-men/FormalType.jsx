import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function FormalType() {
  const [menFormal, setmenFormal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Initial State:", { menFormal, loading, error });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const menFormalResponse = await axios.get(
          "http://localhost:4000/products?category=men-formal-shoes"
        );
        console.log("Fetched menFormal:", menFormalResponse.data.products);

        setmenFormal(menFormalResponse.data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const selectedmenFormal = menFormal;

  console.log("Selected Sneakers:", selectedmenFormal);

  return (
    <div className="">
      <h1 className="font-bold text-center text-4xl mb-10 mt-10">
        <span>__</span> Formal <span>__</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 mx-2 sm:mx-auto max-w-7xl">
        {selectedmenFormal.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            id={product._id}
            type="menFormal"
          />
        ))}
      </div>
    </div>
  );
}

export default FormalType;
