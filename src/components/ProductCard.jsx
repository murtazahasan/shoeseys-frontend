import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  _id,
  name,
  imageUrl,
  description,
  price,
  discountPrice,
  discountPercentage,
  stock,
}) => {
  console.log("Received props:", {
    _id,
    name,
    imageUrl,
    description,
    price,
    discountPrice,
    discountPercentage,
    stock,
  });

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${_id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stockStatus = () => {
    if (stock <= 0) {
      return <span className="text-danger text-small">Out of Stock</span>;
    } else {
      return null;
    }
  };

  return (
    <div className=" max-w-40 mx-2 my-6 bg-gray-100 rounded-lg shadow-md overflow-hidden sm:max-w-sm">
      <img
        className="sm:w-full h-52 object-fill sm:h-80"
        src={imageUrl[0]}
        alt="shoe photo"
      />
      <div className="px-6 pt-4 pb-2">
        <h2 className=" font-bold sm:text-lg">{name}</h2>
        <p className="text-gray-700 text-xs sm:text-sm">
          {description.split(" ").slice(0, 4).join(" ")}
          {description.split(" ").length > 4 ? " ..." : ""}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-gray-500 line-through text-xs sm:text-xs">
              {price}
            </span>
            <span className=" px-1 font-bold text-xs sm:text-sm">
              Rs.{discountPrice}
            </span>
            <span
              className=" text-red-500 sm:text-xs"
              style={{ fontSize: "9px" }}
            >
              {discountPercentage}%off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
