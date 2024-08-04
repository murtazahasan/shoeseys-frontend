import React from "react";
import { NavLink } from "react-router-dom";

function TwoPhoto() {
  return (
    <div className="container mx-auto mt-20 mb-16">
      <div className="flex flex-col md:flex-row justify-center items-center bg-yellow-500 rounded-3xl">
        <div className="relative w-full md:w-8/12 flex flex-col items-center justify-center p-4 ">
          <img
            src="ms1.jpg"
            alt="Men"
            className="w-full h-96 object-cover rounded-3xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 rounded-lg shadow-md">
            <h2 className="text-xl text-white font-bold mb-2">Men</h2>
            <p className="text-gray-400 mb-4">Description for image 1</p>
            <NavLink to="/men">
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Find More
              </button>
            </NavLink>
          </div>
        </div>
        <div className="relative w-full md:w-8/12 flex flex-col items-center justify-center p-4 ">
          <img
            src="ms2.jpg"
            alt="Women"
            className="w-full h-96 object-cover rounded-3xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 rounded-lg shadow-md">
            <h2 className="text-xl text-white font-bold mb-2">Women</h2>
            <p className="text-gray-400 mb-4">Description for image 2</p>
            <NavLink to="/women">
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Find More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoPhoto;
