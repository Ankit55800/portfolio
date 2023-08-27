import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-gray to-cyan-950"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Data Science Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 months of experience in Analyzing and Visualizing the data.
            Currently, I love to work on Data analysis using technologies like
            R, Python, Tableau, and Hadoop.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-half"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
