import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addToCart,
  removeFromCart,
  saveCartToDatabase,
  removeCartItemFromDatabase,
} from "../reducers/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.find((item) => item.productId === productId)
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        console.log("Product Data:", response.data);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking on "Add to Cart"
    if (!isAuthenticated) {
      scrollToTop();
      enqueueSnackbar("You need to be signed in to add items to the cart.", {
        variant: "info",
      });
      navigate("/login");
      return;
    }

    console.log("Adding product with ID:", productId);
    const productData = {
      productId: product._id,
      description: product.description,
      quantity: 1,
      image: product.imageUrl[0],
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercentage: product.discountPercentage,
    };
    dispatch(addToCart(productData));
    dispatch(saveCartToDatabase(productData));
    enqueueSnackbar("Added to cart", { variant: "success" });
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    console.log("Removing product with ID:", productId);
    dispatch(removeFromCart({ productId: productId }));
    dispatch(removeCartItemFromDatabase(productId));
    enqueueSnackbar("Removed from cart", { variant: "error" });
  };

  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-5">No product found.</div>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Product Detail
      </h1>
      <div className=" container mx-auto ">
        <div className="  border mx-5 md:mx-auto rounded-3xl md:px-40  px-6 py-6 mb-14  grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Product image section */}
          <section className="md:col-span-6 flex justify-center items-center">
            <img
              src={product.imageUrl[0]}
              alt={product.name}
              className="w-full h-auto object-cover rounded-3xl md:w-auto md:h-auto"
            />
          </section>

          {/* Product information section */}
          <section className="md:col-span-6 p-4 md:p-8">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center mt-4">
              <span className="text-red-500 font-bold text-xl pr-2">$</span>
              <span className="text-lg line-through text-gray-400">
                {product.price}
              </span>
              <span className="text-green-500 text-lg ml-2">
                ({product.discountPercentage}% off)
              </span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-lg font-bold">Price: </span>
              <span className="text-red-500 font-bold text-xl">$</span>
              <span className="text-lg">{product.discountPrice}</span>
            </div>

            {/* Product variations section */}
            {/* <div className="mt-4">
              <h2 className="text-lg font-bold">Size</h2>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Add to cart button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
