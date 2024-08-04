import React, { useState } from "react";

function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(null);

  const product = {
    name: "Nike Air Force 1",
    description: "A classic sneaker for everyday wear.",
    imageUrl: "/ms3.jpg",
    additionalImages: ["ms2.jpg", "/ms1.jpg"],
    regularPrice: 99.99,
    discountedPrice: 79.99,
    discountPercentage: 20,
    sizes: ["7", "8", "9", "10"],
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Product Detail
      </h1>
      <div className=" container mx-auto ">
        <div className="  border mx-5 md:mx-auto rounded-3xl md:px-40  px-6 py-6   grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Product image section */}
          <section className="md:col-span-6 flex justify-center items-center">
            <img
              src={product.imageUrl}
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
                {product.regularPrice}
              </span>
              <span className="text-green-500 text-lg ml-2">
                ({product.discountPercentage}% off)
              </span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-lg font-bold">Price: </span>
              <span className="text-red-500 font-bold text-xl">$</span>
              <span className="text-lg">{product.discountedPrice}</span>
            </div>

            {/* Product variations section */}
            <div className="mt-4">
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
            </div>

            {/* Add to cart button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
