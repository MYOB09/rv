import rvlogo from "./assets/oragne_orhtologo.png";
import english from "./assets/englishflag.png";
import { Button } from "./components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-[20] sticky top-0 ">
      <div className="bg-white items-center flex justify-between w-full h-24">
        <div className="ml-4">
          <a href="#">
            <img className="h-24 w-48" src={rvlogo} />
          </a>
        </div>
        <div className="inline-flex">
          <ul className="inline-flex mr-4 space-x-4 mt-2  ">
            <NavLink
              to="/features"
              className="aria-[current=page]:underline decoration-yellow-400 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
            >
              Features
            </NavLink>
            {/* <NavLink
              to="/industries"
              className="aria-[current=page]:underline decoration-yellow-400 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
            >
              Industries
            </NavLink> */}
            <NavLink
              to="/about-us"
              className="aria-[current=page]:underline decoration-yellow-400 hidden md:block font-semibold hover:cursor-pointer hover:underline "
            >
              About us
            </NavLink>
            <NavLink
              to="/pricing"
              className="aria-[current=page]:underline decoration-yellow-400 hidden md:block font-semibold hover:cursor-pointer hover:underline "
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className="aria-[current=page]:underline decoration-yellow-400 hidden md:block font-semibold hover:cursor-pointer hover:underline "
            >
              Contact
            </NavLink>
            <NavLink
              to="/log-in"
              className="aria-[current=page]:underline decoration-yellow-400 hidden md:block font-semibold hover:cursor-pointer hover:underline "
            >
              Log in
            </NavLink>
          </ul>
          <Button className="hidden md:block mr-4 rounded-xl bg-yellow-400 hover:bg-white hover:text-yellow-400 border-2 border-yellow-400">
            Start a Free Trial
          </Button>
          <div className="mt-2 md:hidden mx-4 ">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <img className="h-6 w-12 mt-2 mr-4" src={english} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white w-full text-center lg:hidden">
          <ul className="space-y-4 text-lg">
            <NavLink
              to="/features"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              Features
            </NavLink>
            {/* <NavLink
              to="/industries"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              Industries
            </NavLink> */}
            <NavLink
              to="/about-us"
              className="block font-semibold hover:cursor-pointer hover:underline aria-[current=page]:underline decoration-yellow-400"
              onClick={toggleMenu}
            >
              About us
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={toggleMenu}
              className="block font-semibold hover:cursor-pointer hover:underline aria-[current=page]:underline decoration-yellow-400"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={toggleMenu}
              className="block font-semibold hover:cursor-pointer hover:underline aria-[current=page]:underline decoration-yellow-400"
            >
              Contact us
            </NavLink>
            <NavLink
              to="/log-in"
              onClick={toggleMenu}
              className="block font-semibold hover:cursor-pointer hover:underline aria-[current=page]:underline decoration-yellow-400"
            >
              Log in
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
