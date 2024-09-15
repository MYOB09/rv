import rvlogo from "./assets/finallogo.png";
import english from "./assets/englishflag.png";
import { Button } from "./components/ui/button";

function Navbar() {
  return (
    <div className="z-[20] sticky top-0 ">
      <div className="bg-white items-center flex justify-between w-full h-24">
        <div className="ml-4">
          <a href="#">
            <img className="h-24 w-24" src={rvlogo} />
          </a>
        </div>
        <div className="inline-flex">
          <ul className="inline-flex mr-4 space-x-4 mt-2  ">
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              Features
            </li>
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              Industries
            </li>
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              About us
            </li>
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              Pricing
            </li>
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              Contact
            </li>
            <li className="hover:cursor-pointer hover:text-yellow-400 hidden md:block">
              Login
            </li>
          </ul>
          <Button className="mr-4 rounded-xl bg-yellow-400 hover:bg-white hover:text-yellow-400">
            Start a Free Trial
          </Button>
          <img className="h-6 w-12 mt-2 mr-4" src={english} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
