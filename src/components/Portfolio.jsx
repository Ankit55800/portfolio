import React from "react";
import customerProject from "../assets/portfolio/customerProject.png";
import hotel from "../assets/portfolio/hotel1.png";
import tictac from "../assets/portfolio/tictac.jpg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: customerProject,
      link:"https://github.com/Ankit55800/customer-segment/tree/main", 
    },
    {
      id: 2,
      src: tictac,
      link:"https://github.com/Ankit55800/customer-segment/tree/main",
    },
    {
      id: 3,
      src: hotel,
      link:"https://github.com/Ankit55800/Hotel",

    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-cyan-950 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work
          </p>
          <p className="py-6">Check out some of my works right here. . .</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                  <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
               <a href={`${link}`} target="_blank">
                    Code
            </a>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
