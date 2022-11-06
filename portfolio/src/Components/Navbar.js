import React, { useState } from "react";
import image from "../images/intro.png";
import { Link } from "react-scroll";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
function Navbar() {
  let link = [
    { name: "HOME", link: "Intro" },
    { name: "ABOUT", link: "About" },
    { name: "PROJECTS", link: "Project" },
    { name: "CONTACT", link: "Contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-6 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-1000"
        >
          <img
            src={image}
            alt="logo"
            className="h-12 mr-5 hover:scale-110 duration-500"
          />
          <p className="text-2xl">Prottoy Ahmed</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <>
              <CloseSharpIcon />
            </>
          ) : (
            <>
              <MenuSharpIcon />
            </>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 text-right absolute md:static bg-white md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {link.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 mr-8 md:mr-0 md:hover:scale-110 hover:scale-105  duration-300"
            >
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-1000 hover:text-gray-500  duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
