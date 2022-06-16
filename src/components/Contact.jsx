import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#17171F] text-[#9191A4] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/435502fd-a63e-4ad0-9609-a8b4ede542a7" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-5xl font-semibold inline border-t-4 border-[#3F3FFF] text-[#FFFFFF] md:text-7xl">
            Contact
          </p>
          <p className="text-[#9191A4] p-4">
            // Feel free to contact me any time, through any method below.
          </p>
        </div>
        <input
          className=" p-2 bg-[#565666] text-[#FFFFFF]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#565666] text-[#FFFFFF]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#565666] text-[#FFFFFF]"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="transition ease-in-out delay-150 bg-blue hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 hover:rounded-md text-[#FFFFFF] group font-semibold border-2 px-6 py-2 my-8 mx-auto flex items-center border-[#3F3FFF] hover:border-[#FFFFFF] bg-[#3F3FFF] ">
          <p className="">Send it!</p>
        </button>
       
      </form>
    </div>
  );
};

export default Contact;
