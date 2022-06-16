import React from "react";

import CSS from ".././assets/css.png";
import Github from ".././assets/github.png";
import HTML from ".././assets/html.png";
import Javascript from ".././assets/javascript.png";
import Node from ".././assets/node.png";
import react from ".././assets/react.png";
import Tailwind from ".././assets/tailwind.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#17171F] text-[#9191A4]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
            Skills
          </p>
          <p className="text-1xl font-semibold py-4">
            // The tech stack I'm efficient with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img 
                className="w-20 mx-auto" 
                src={HTML} 
                alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img 
                className="w-20 mx-auto"   
                src={CSS} 
                alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img 
            className="w-20 mx-auto" 
            src={Node} 
            alt="node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img 
                className="w-20 mx-auto" 
                src={react} 
                alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="Tailwindcss icon"
            />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#060416] hover:scale-110 duration-500 br-2 rounded-lg">
            <img
              className="w-20 mx-auto"
              src={Github}
              alt="Github icon"
            />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
