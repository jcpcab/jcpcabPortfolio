import React from "react";
import Placehold from ".././assets/placehold.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#17171F] text-[#9191A4]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
            My Work
          </p>
          <p>// Check out some of my recent work</p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Placehold})` }}
            className="transition ease-in-out hover:-translate-y-2 duration-150 shadow-lg shadow-[#060416] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-semibold text-white tracking-wider">
                React.js Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text gray-700 font-semibold text-lg">
                    Code
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
