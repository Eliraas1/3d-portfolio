import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const handleMenuClick = () => {
    setToggle((prev) => !prev);
  };

  const handleClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const handleLiClick = (title: string, isFromMenu?: boolean) => (e: any) => {
    // e.preventDefault();
    setActive(title);
    if (isFromMenu) handleMenuClick();
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-y fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link to="/" className="flex items-center gap-2" onClick={handleClick}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Eliran &nbsp;
            <span className="md:block hidden">| SW Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={handleLiClick(link.title)}
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={handleMenuClick}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={handleLiClick(link.title, true)}
                >
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
