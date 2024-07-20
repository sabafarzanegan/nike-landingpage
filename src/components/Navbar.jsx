import React from "react";
import logo from "../assets/images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
const NavbarMenu = [
  {
    id: 1,
    title: "New Release",
    link: "/",
    delay: "0.2",
  },
  {
    id: 2,
    title: "Men",
    link: "#",
    delay: "0.4",
  },
  {
    id: 3,
    title: "Women",
    link: "#",
    delay: "0.6",
  },
  {
    id: 4,
    title: "Kids",
    link: "#",
    delay: "0.8",
  },
  {
    id: 5,
    title: "Customize",
    link: "#",
    delay: "1",
  },
];

function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <div className="container py-6 flex items-center justify-between ">
        {/* logo section */}
        <div>
          <img src={logo} alt="" className="w-[100px]" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* icons section */}
        <div className="flex items-center gap-4">
          <div className="text-2xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-2xl cursor-pointer relative">
            <MdOutlineShoppingBag />
            <div className="absolute -top-1 -right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
              2
            </div>
          </div>
        </div>
        {/* mobile habmurgure */}
      </div>
    </nav>
  );
}

export default Navbar;
