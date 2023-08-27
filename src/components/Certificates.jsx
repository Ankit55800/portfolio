import React from "react";

import dataV from "../assets/portfolio/dataV.png";
import proR from "../assets/portfolio/proR.png";
import analyticsR from "../assets/portfolio/analyticsR.png";
import pythonP from "../assets/portfolio/pythonP.jpg";
import excelB from "../assets/portfolio/excelBasics.png";
import dsaCPP from "../assets/portfolio/dsaCPP.png";
import awsCloud from "../assets/portfolio/awsCloud.png";
import DBMS from "../assets/portfolio/dbms.png";
import frontEnd from "../assets/portfolio/frontend.png";


const Certificates = () => {
    const portfolios = [
      {
        id: 1,
        src: dataV,
        cert : "https://drive.google.com/file/d/1I47qbEgHVHkrVYQnzLHzw4f0J3k4Qdt-/view?usp=sharing",
        details:"Data Specialization",
      },
      {
        id: 2,
        src: proR,
        cert : "https://drive.google.com/file/d/1FUtxgZo3UmvyiUcp4yZOT8crLpGfD28Y/view?usp=sharing",
        details:"R Programming",
      },
      {
        id: 3,
        src: pythonP,
        cert : "https://drive.google.com/file/d/1Cs99QGgMqaYua9Z6q7U-0tgvzHl_9Oyy/view?usp=sharing",
        details:"Python Programming",
      },
      {
        id: 4,
        src: DBMS,
        cert : "https://drive.google.com/file/d/1dIUp8FSGhZJvp6bJ9ejqqFTEsQT4BaCu/view?usp=sharing",
        details:"DBMS Part-1 Infosys",
      },
      {
        id: 5,
        src: dsaCPP,
        cert : "https://drive.google.com/file/d/1ePEggRtP4ceHjEXvy-mDOTpDkOVwUKul/view?usp=sharing",
        details:"Data Structures and Algorithms",
      },
      {
        id: 6,
        src: frontEnd,
        cert : "https://drive.google.com/file/d/1Mln8F06V7JQxPT8qtt5GmVS5ueYo3GJE/view?usp=sharing",
        details:"Front End Development",
      },
      {
        id: 7,
        src: analyticsR,
        cert : "https://drive.google.com/file/d/1CCepWSK6xssrR_eGIYbHXfTYx7PxLS7B/view?usp=sharing",
        details:"Data Analytics",
      },
      {
        id: 8,
        src: awsCloud,
        cert : "https://drive.google.com/file/d/1KwlMpGoQtTa1-yHfXSWbdhXhYH8xklYG/view?usp=sharing",
        details:"AWS Cloud",
      },
      {
        id: 9,
        src: excelB,
        cert : "https://drive.google.com/drive/u/2/folders/1zYQ9QstgwBglnSfFMhGx8MNGw6OiOzP2",
        details:"Excel Basics",
      },
      
    ];
  
    return (
      <div
        name="certificates"
        className="bg-gradient-to-b from-black to-cyan-950 w-full md:h-screen-h100 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Certificates
            </p>
            <p className="py-6">Check out some of my certifications . .</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src,cert, details}) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 , cursor-pointer"

                  onClick={()=>{window.open(cert)}}
                />
                <div className="flex items-center justify-center">
  
                   <p className="p-4">
                    {details}
                   </p>
                 
                </div>
                
              </div>
            ))}

          </div>
         
        </div>
       
      </div>
    );
  };
  
  export default Certificates;