import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#17171F] text-[#9191A4]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right text-4xl font-semibold '>
            <p>Welcome to my space.</p>
          </div>
          <div>
            <p>
              Full-Stack Web Developer that specializes in Front-End development
              with an interest in crypto development & WEB3 industry. Rather
              than the traditional route of going into the medical field or
              becoming a Registered Nurse, I decided to follow my passion and be
              the first in my Filipino family and past generations trail-blazing
              into the Tech-Industry! I'm always seeking to better myself,
              striving to be the better developer than I was the previous day
              while honing my hobbies and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
