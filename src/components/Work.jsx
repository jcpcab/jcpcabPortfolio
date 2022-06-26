import React from "react";
import Placehold from ".././assets/placehold.jpg";
import Underdogdevs from ".././assets/underdogdevs.png";
import Fitness from ".././assets/fitness.jpeg";
import Africanmarket from ".././assets/africanmarketplace.png";
import Potluckplanner from ".././assets/potluckplanner.jpg";

import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#17171F] text-[#9191A4]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
            My Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Underdogdevs})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                Underdog Devs
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.underdogdevs.org/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="https://github.com/BloomTech-Labs/underdog-devs-fe-a">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Fitness})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                Anywhere Fitness
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="hidden text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="https://github.com/BW-Fitness/backend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Africanmarket})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                African Marketplace
              </span>
              <div className="pt-8 text-center">
                <a href="https://create-react-app-git-main-website-african-marketplace.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="https://github.com/Build-Week-African-MarketPlace6/FrontEnd">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Potluckplanner})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                Potluck Planner
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="hidden text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="https://github.com/Potluck-build">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                Future Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-500 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                Future Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <CgWebsite />
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
