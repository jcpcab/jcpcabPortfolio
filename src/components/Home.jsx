import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#17171F]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <h1 className="text-4xl sm:text-7xl font-semibold text-[#FFFFFF] max-w-[500px]">
          Building lovely web experiences.
        </h1>
        <h2 className="hidden text-4xl sm:text-7xl font-bold text-[#9191A4]">
          Welcome to my space!
        </h2>
        <p className="hidden text-[#9191A4]">TBD</p>
        <div>
          <button className="text-[#FFFFFF] group font-semibold border-2 px-6 py-2 my-8 flex items-center border-[#3F3FFF] hover:border-[#FFFFFF] bg-[#3F3FFF]">
            <Link
              className="flex flex-row-reverse space-x-2 space-x-reverse"
              to="work"
              smooth={true}
              duration={500}
            >
              <p> My Work.</p>
              <BsFillEyeFill className="text-2xl group-hover:rotate-180 duration-300" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
