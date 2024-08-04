import React from 'react';

function ProductCard() {
  return (
    <>
<div className=" max-w-xs m-4 bg-gray-100 rounded-lg shadow-md overflow-hidden sm:max-w-sm">
  <img className="w-full h-72 object-fill sm:h-80" src="ms1.jpg" alt="shoe photo" />
  <div className="px-6 pt-4 pb-2">
    <h2 className="text-xl font-bold sm:text-lg">AF 1 All White</h2>
    <p className="text-gray-700 sm:text-sm">the all new full white shoe</p>
    <div className="flex justify-between items-center mt-4">
      <div>
        <span className="text-gray-500 line-through sm:text-xs">Rs.6000</span>
        <span className=" pl-1 font-bold sm:text-sm">Rs.4000</span>
        <span className="text-xs text-red-500 sm:text-xs"> 34%off</span>
      </div>
    </div>
  </div>
</div>
{/*  */}
<div className="max-w-xs m-4 bg-gray-100 rounded-lg shadow-md overflow-hidden sm:max-w-sm">
  <img className="w-full h-72 object-fill sm:h-80" src="ms1.jpg" alt="shoe photo" />
  <div className="px-6 pt-4 pb-2">
    <h2 className="text-xl font-bold sm:text-lg">AF 1 All White</h2>
    <p className="text-gray-700 sm:text-sm">the all new full white shoe</p>
    <div className="flex justify-between items-center mt-4">
      <div>
        <span className="text-gray-500 line-through sm:text-xs">Rs.6000</span>
        <span className=" pl-1 font-bold sm:text-sm">Rs.4000</span>
        <span className="text-xs text-red-500 sm:text-xs"> 34%off</span>
      </div>
    </div>
  </div>
</div>

    {/* old */}

    </>
  );
}

export default ProductCard;
