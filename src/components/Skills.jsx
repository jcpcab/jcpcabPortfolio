import React from "react";
import "../index.css";
import Tilt from "react-parallax-tilt";
import CSS from ".././assets/css.png";
import Github from ".././assets/github.png";
import HTML from ".././assets/html.png";
import Javascript from ".././assets/javascript.png";
import Node from ".././assets/node.png";
import react from ".././assets/react.png";
import Tailwind from ".././assets/tailwind.png";
import express from ".././assets/express.png";
import figma from ".././assets/figma.png";
import jest from ".././assets/jest.png";
import postgres from ".././assets/postgres.png";
import postman from ".././assets/postman.png";
import redux from ".././assets/redux.png";
import sqlite from ".././assets/sqlite.png";

const Skills = () => {
  const SkillCard = ({ skill, text }) => (
    <Tilt>
      <div className=" skills-grid py-4">
        <Tilt>
          <img className="w-20 mx-auto" src={skill} alt={text} />
          <p className=" pt-2 text-white font-semibold">{text}</p>
        </Tilt>
      </div>
    </Tilt>
  );


  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#17171F] text-[#9191A4] my-20"
    >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-2 sm:p-20 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
            Skills
          </p>
          <p className="text-1xl font-semibold py-4">
            // My tech stack and technologies I've worked with.
          </p>
        </div>

        {/*Cards*/}
        <div className="w-full grid grid-cols-5 md:grid-cols-5 sm:grid-cols-3 gap-5 text-center py-8 bg-transparent">
          <SkillCard skill={CSS} text="CSS" />
          <SkillCard skill={express} text="Express.js" />
          <SkillCard skill={figma} text="Figma" />
          <SkillCard skill={Github} text="GitHub" />
          <SkillCard skill={HTML} text="HTML" />
          <SkillCard skill={Javascript} text="JavaScript" />
          <SkillCard skill={jest} text="Jest" />
          <SkillCard skill={Node} text="Node.js" />
          <SkillCard skill={postgres} text="PostgreSQL" />
          <SkillCard skill={postman} text="Postman" />
          <SkillCard skill={react} text="React" />
          <SkillCard skill={redux} text="Redux" />
          <SkillCard skill={sqlite} text="SQLite3" />
          <SkillCard skill={Tailwind} text="Tailwind CSS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
