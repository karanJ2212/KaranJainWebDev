import React, { useState } from "react";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto m-0">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Karan jain &nbsp;
            <span className="sm:block hidden">| WebDev</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                console.log("clicked", link.title);
                setActive(link.title);
              }}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* mobile navigation  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-20`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[19px]`}
                  onClick={() => {
                    console.log("clicked", link.title);
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link to={link.id}>{link.title}</Link>
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
