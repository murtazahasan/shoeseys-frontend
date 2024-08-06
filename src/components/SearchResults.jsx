import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      fetchResults(searchQuery);
    }
  }, [location.search]);

  const fetchResults = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/products/search?query=${searchQuery}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  if (loading) {
    return <div className="mt-5 text-center">Loading...</div>;
  }

  return (
    <>
      <div className="mt-[140px] mb-5 flex justify-center">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 rounded"
            placeholder="Search products..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>
      </div>

      {results.length === 0 ? (
        <div className="mb-5 mx-1 fw-medium text-center">
          We couldn't find any products matching your search. Please try a
          different product name.
        </div>
      ) : (
        <>
          <h1 className="text-center mb-5 font-bold text-2xl">
            Search Results
          </h1>
          <div className="flex flex-wrap justify-center">
            {results.map((product) => (
              <div
                key={product._id}
                className="card p-3 mb-3 mx-3 relative w-80 shadow-md rounded"
              >
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.imageUrl[0]}
                    className="w-full h-80 object-cover rounded-t"
                    alt={product.name}
                  />
                  <div className="card-body p-3">
                    <h5 className="card-title text-lg font-semibold">
                      {product.name}
                    </h5>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="ml-5 sm:ml-20 my-14">
        <Link
          className="text-white bg-black p-4 rounded-3xl hover:underline"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
};

export default SearchResults;
