"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../constants/index";
import Image from "next/image";
import { menu, close, rahul } from "../assets";
import { clsx } from "clsx";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-15 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#050816]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={rahul} alt="Logo" width={40} height={40} className=" w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Rahul Ruke
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={`#${link.id}`}
              className={`${
                active === link.id ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </li>
          ))}
        </ul>
        {/* mobile device */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={clsx(
              "p-6 flex black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl",
              { hidden: !toggle }
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={`#${link.id}`}
              className={`${
                active === link.id ? "text-white" : "text-gray-400"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle)
                setActive(link.title)}}
            >
              {link.title}
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
