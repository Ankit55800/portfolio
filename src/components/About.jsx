import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-cyan-950 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I am a Computer Science Senior from Lovely Professional University. I am really passionate about Data science 
        and its technological potential to influence behavior worldwide.
        I have a strong understanding of data analysis tools, including MS Excel, Tableau, MySQL, Python, and R Programming.
        In an internship as a data analyst, till now i have gained hands-on experience in analyzing, implementing, and maintaining data for a company.
        Worked on a project to build a hotel management system using Python and MySQL.The system allows customers to reserve hotel rooms for a specific location.
        Overall, I am an experienced data scientist with a strong foundation in data analysis and programming and really
        passionate about using data science to make a difference in the world.
        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;
