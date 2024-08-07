import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function SportType() {
  const [sportsShoes, setSportsShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Initial State:", { sportsShoes, loading, error });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const sportsShoesResponse = await axios.get(
          "http://localhost:4000/products?category=men-sports-shoes"
        );
        console.log("Fetched sports shoes:", sportsShoesResponse.data.products);

        setSportsShoes(sportsShoesResponse.data.products);
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

  const selectedSportsShoes = sportsShoes;

  console.log("Selected Sports Shoes:", selectedSportsShoes);

  return (
    <div className="">
      <h1 className="font-bold text-center text-4xl mb-10 mt-10">
        <span>__</span> Sports Shoes <span>__</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 mx-2 sm:mx-auto max-w-7xl">
        {selectedSportsShoes.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            id={product._id}
            type="sports-shoes"
          />
        ))}
      </div>
    </div>
  );
}

export default SportType;
