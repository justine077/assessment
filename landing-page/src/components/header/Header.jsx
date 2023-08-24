import Elogo from "../../assets/image/Elogo.png";
import { Link } from "react-scroll";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#e3e6f3] w-full shadow-md sticky z-20 top-0">
      <header className="flex justify-between items-center p-4 max-w-[1200px] mx-auto bg-[#e3e6f3] text-[#1a1a1a] font-[600] ">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex gap-2 items-center cursor-pointer"
        >
          <div>
            <div>
              <img src={Elogo} alt="Logo" />
            </div>
          </div>
          <div className="mt-[10px] items-center">
            <h5 className="font-bold mb-[-8px]">QUICK STORE</h5>
            <span className="pl-[8px] font-semibold text-[11px]">
              FAST AND EASY
            </span>
          </div>
        </Link>
        <nav
          className={`${
            isOpen
              ? "absolute h-96 w-full text-[#1a1a1a] bg-[#E4E6F3] right-0 top-20 flex-col flex gap-5 pl-6 pt-5"
              : "hidden"
          } md:flex md:space-x-4 text-[16px] cursor-pointer`}
        >
          <Link
            className="hover:scale-110 duration-500 hover:text-[#F3A717]"
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-[#F3A717]"
            to="products"
            smooth={true}
            duration={500}
          >
            Products
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-[#F3A717]"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-[#F3A717]"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#1a1a1a] focus:outline-none"
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>
      <div id="home" className=""></div>
    </div>
  );
};

export default Header;
