import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "COMPLEX PROBLEM SOLVING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Oyindamola Jongbo, i am a Fullstack web developer who just graduated the Rutgers Coding bootcamp program, I currently works as a Project Implementation manager and Business Analyst for a Shipping and Logistics company called Wallenius Wilhelmsin. I have honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">1</div>
        <p className="text-white text-2xl md:ml-5">
          Year of learning, coding and Development. 
        </p>
      </div>

  
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

 
      <Services />
    </div>
  );
};

export default About;
