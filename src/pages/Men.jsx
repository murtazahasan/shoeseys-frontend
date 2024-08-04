import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Men() {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Initial State:", { shirts, loading, error });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const shirtResponse = await axios.get(
          "http://localhost:4000/products?category=men-shirts"
        );
        console.log("Fetched shirts:", shirtResponse.data.products);

        setShirts(shirtResponse.data.products);
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

  // const selectedShirts = [shirts[0], shirts[1], shirts[2]];
  const selectedShirts = shirts;

  console.log("Selected Shirts:", selectedShirts);

  return (
    <div className="">
      
      <h1 className="font-bold text-center text-4xl mb-10 mt-10"><span>__</span> Sneaker <span>__</span></h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 mx-2 sm:mx-auto max-w-7xl">
        {selectedShirts.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            id={product._id}
            type="shirt"
          />
        ))}
      </div>
    </div>
  );
}

export default Men;
