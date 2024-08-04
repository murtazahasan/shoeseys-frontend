import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri"; // <RiLogoutCircleRLine />

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenSubmenu, setShowMenSubmenu] = useState(false);
  const [showWomenSubmenu, setShowWomenSubmenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleMenSubmenu = () => setShowMenSubmenu(!showMenSubmenu);
  const toggleWomenSubmenu = () => setShowWomenSubmenu(!showWomenSubmenu);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Men",
      path: "/men",
      submenu: [
        "Sneakers & Casual Shoes",
        "Formal Shoes",
        "Sports Shoes",
        "Sandals & Slippers",
        "Peshawari Chappal",
        "Socks",
        "Shoe Care Products",
      ],
    },
    {
      name: "Women",
      path: "/women",
      submenu: [
        "Pumps & Khusa",
        "Heels & Sandals",
        "Loafers",
        "Sneakers & Casual Shoes",
        "Slippers & Chappal",
        "Socks",
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden">
            {showMenu ? <HiMenuAlt1 size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
          <NavLink to="/" onClick={scrollToTop}>
            <span className="text-3xl font-bold font-serif ml-4">Shoeseys</span>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => {
                  if (item.name === "Men") setShowMenSubmenu(true);
                  else setShowWomenSubmenu(true);
                }}
                onMouseLeave={() => {
                  if (item.name === "Men") setShowMenSubmenu(false);
                  else setShowWomenSubmenu(false);
                }}
              >
                <NavLink
                  to={item.path}
                  className="text-gray-700 hover:text-blue-500"
                >
                  {item.name}
                </NavLink>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 ${
                    (item.name === "Men" ? showMenSubmenu : showWomenSubmenu)
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem}
                      to={`${item.path}/${subItem
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {subItem}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-500"
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className=" text-gray-700 rounded hover:bg-blue-400"
          >
            <VscSearch className=" ml-2" />
            <p className="" style={{ fontSize: "10px" }}>
              Search
            </p>
          </NavLink>
          <NavLink
            to="/login"
            className="  text-gray-700 rounded hover:bg-blue-400"
          >
            <FaRegUserCircle className="ml-1" />
            <p className="" style={{ fontSize: "10px" }}>
              Login
            </p>
          </NavLink>
        </div>
      </div>
      {/*  */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white flex flex-col p-4">
          <h2 className="font-bold text-xl mt-1 mb-16">Menu</h2>
          <ul className=" space-y-5">
            {menuItems.map((item) =>
              item.submenu ? (
                <li
                  key={item.name}
                  className=" border-t-2 border-b-2 py-1 border-gray-300"
                >
                  <div
                    className="text-gray-700 hover:text-blue-500 cursor-pointer flex justify-between items-center "
                    onClick={
                      item.name === "Men"
                        ? toggleMenSubmenu
                        : toggleWomenSubmenu
                    }
                  >
                    {item.name}
                    <span>
                      {(item.name === "Men" ? showMenSubmenu : showWomenSubmenu)
                        ? "-"
                        : "+"}
                    </span>
                  </div>
                  <ul
                    className={`pl-4 ${
                      item.name === "Men"
                        ? showMenSubmenu
                          ? "block"
                          : "hidden"
                        : showWomenSubmenu
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {/*  */}
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem}
                        className="border-t border-gray-200 my-1 py-2"
                      >
                        <NavLink
                          to={`${item.path}/${subItem
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="block text-gray-700 hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          {subItem}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={item.name}
                  className="border-t-2 border-b-2 border-gray-300"
                >
                  <NavLink
                    to={item.path}
                    className="text-gray-700 hover:text-blue-500 "
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <HiMenuAlt1 size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
