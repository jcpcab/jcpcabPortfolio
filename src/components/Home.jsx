import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-scroll";
import clearPortrait from ".././assets/clearPortrait.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#17171F]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto flex flex-row px-8  h-full ">
        <div className="flex flex-col justify-center">
          <h1 className="font-sans font-semibold text-selected-text text-4xl sm:text-7xl text-[#FFFFFF] max-w-[500px]">
            Building lovely web experiences.
          </h1>
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
        <div className="bg-[#17171F] flex flex-col justify-center">
          <img className=" md:max-w-[800px] mix-blend-luminosity opacity-40 " src={clearPortrait} alt='Portrait of Jordan'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
