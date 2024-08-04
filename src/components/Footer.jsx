import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-4xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
            Shoeseys
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Karachi, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+92 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Men</li>
                  <li className="cursor-pointer">Women</li>
                  <li className="cursor-pointer">Contact</li>
                  <li className="cursor-pointer">Size Guide</li>
                  <li className="cursor-pointer">Exchange & Return Policy</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Men Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Sneakers & Casual Shoes</li>
                  <li className="cursor-pointer">Formal Shoes</li>
                  <li className="cursor-pointer">Sports Shoes</li>
                  <li className="cursor-pointer">Sandals & Slippers</li>
                  <li className="cursor-pointer">Peshawari Chappal</li>
                  <li className="cursor-pointer">Socks</li>
                  <li className="cursor-pointer">Shoe Care Products</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Women Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Pumps & Khusa</li>
                  <li className="cursor-pointer">Heels & Sandals</li>
                  <li className="cursor-pointer">Loafers</li>
                  <li className="cursor-pointer">Sneakers & Casual Shoes</li>
                  <li className="cursor-pointer">Slippers & Chappal</li>
                  <li className="cursor-pointer">Socks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
        <p className="text-center text-white border-t bg-black border-gray-500 py-2 text-sm">© All rights reserved</p>
    </div>
  );
};

export default Footer;
