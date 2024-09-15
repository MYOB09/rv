import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BMWLogo from "../assets/bmwlogo.png";
import GarnierLogo from "../assets/garnierlogo.png";
import MaybelineLogo from "../assets/maybelinelogo.jpg";

import Navbar from "../Navbar";
import Features from "../Features";
import Experiences from "../Experiences";
import Industries from "../Industries";
import CaseStudies from "../CaseStudies";
import AboutUs from "../AboutUs";
import Pricing from "../Pricing";
import Footer from "../Footer";

function HomePage() {
  const [text] = useTypewriter({
    words: [
      "Transform Customer Experience",
      "Boost your Sales",
      "Engage your Audience",
      "Empower your Brand",
      "Drive Brand Loyalty",
    ],
    loop: {},
  });

  return (
    <>
      <Navbar />
      <h1 className="m-14 mt-24 text-xl md:text-4xl">
        Use{" "}
        <span className="font-bold">
          Retail<span className="text-yellow-500">Vivo</span>
        </span>{" "}
        to:
        <br className="sm:hidden" />
        <span className="font-bold text-yellow-400"> {text}</span>
        <span className="text-red-600">
          <Cursor />
        </span>
        <p className="mt-8 text-base">
          Everyone loves to engage. We make it perfect for consumers of all
          ages.
        </p>
      </h1>
      <div className="text-center">
        <p className=" font-bold text-4xl">
          The best experience for the best value
        </p>
      </div>
      <Features />
      <Experiences />
      <Industries />
      <CaseStudies />
      <div className="text-center m-12">
        <div className="m-12  text-2xl font-bold">Trusted By</div>
        <div className="grid md:grid-cols-3">
          <div className="flex justify-center">
            <div className="w-44 h-44">
              <img src={MaybelineLogo} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-32">
              <img src={BMWLogo} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-44 h-44 mt-8">
              <img src={GarnierLogo} />
            </div>
          </div>
        </div>
        <AboutUs />
      </div>
      <Pricing />
      <Footer />
    </>
  );
}

export default HomePage;
