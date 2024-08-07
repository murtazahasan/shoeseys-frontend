import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Men() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Initial State:", { sneakers, loading, error });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const sneakerResponse = await axios.get(
          "http://localhost:4000/products?category=men-sneakers-casual-shoes"
        );
        console.log("Fetched sneakers:", sneakerResponse.data.products);

        setSneakers(sneakerResponse.data.products);
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

  const selectedSneakers = sneakers;

  console.log("Selected Sneakers:", selectedSneakers);

  return (
    <div className="">
      <h1 className="font-bold text-center text-4xl mb-10 mt-10">
        <span>__</span> Sneaker <span>__</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 mx-2 sm:mx-auto max-w-7xl">
        {selectedSneakers.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            id={product._id}
            type="sneaker"
          />
        ))}
      </div>
    </div>
  );
}

export default Men;
