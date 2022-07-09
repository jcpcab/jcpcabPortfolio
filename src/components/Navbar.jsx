import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
      <div className=" hidden group-hover:block pr-4">{text}</div>
      <div>{icon}</div>
    </div>
  );

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#17171F] text-[#FFFFFF]">
      
    {/*Social Icons*/}

    <div>
        <ul className="flex lg:flex-col lg:translate-y-28 md:flex-row sm:flex-row">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/jcpcabanada/">
              <SideBarIcon icon={<FaLinkedin size={30} />} text="LinkedIn" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/jcpcab">
              <SideBarIcon icon={<FaGithub size={30} />} text="GitHub" />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:jcpcabanada@gmail.com">
              <SideBarIcon icon={<HiOutlineMail size={30} />} text="Email" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1ojX1yJVmsNiIwJhcM3wJFRiLwK8Kh3YP/view?usp=sharing"
            >
              <SideBarIcon
                icon={<BsFillPersonLinesFill size={30} />}
                text="Resume"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex text-xl">
        <li className="hover:animate-pulse transition ease-in-out hover:-translate-y-1/4 duration-500 hover:text-indigo-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:animate-pulse transition ease-in-out hover:-translate-y-1/4 duration-500 hover:text-indigo-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:animate-pulse transition ease-in-out hover:-translate-y-1/4 duration-500 hover:text-indigo-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:animate-pulse transition ease-in-out hover:-translate-y-1/4 duration-500 hover:text-indigo-300">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:animate-pulse transition ease-in-out hover:-translate-y-1/4 duration-500 hover:text-indigo-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#17171F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}

      <div className="hidden fixed border-red top-0 left-0 h-screen w-16 m-0 flex flex-wrap text-white shadow">
      </div>
    </div>
  );
};

export default Navbar;
