import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";




const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
   
    },
    {
      id: 2,
      link: "about",
      
    },
    {
      id: 3,
      link: "portfolio",
     
    },
    {
      id: 4,
      link: "experience",
    
    },

    
    {
      id: 5,
      link: "certificates",
    },
    {
      id: 6,
      link: "contact",
     
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-grey text-white fixed">
      <div>
      <h1 className="text-2xl font-bold inline ">Ankit Kumar</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,isActive }) => (
          <NavLinks
            key={id}
            link={link}
            // className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 hover:text-sky"
            className="px-4 cursor-pointer capitalize font-medium text-grey-400 hover:text-red-700 text-white-500 hover:text-blue-700;"
            
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              // className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 ;"
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:animate-pulse text-blue-500 hover:text-blue-700;"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;