import React from "react";
import heroimg from "../assets/images/shoes.png";
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* brand info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-3xl uppercase font-bold">jorden 1 red</h1>
            <p>
              release date <br />
              10/08/2024
              <br />
              color way
              <br />
              red
            </p>
            {/* select section size */}
            <div className="max-w-[250px] space-y-3 md:mx-0">
              <p>select size (IN)</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start relative z-10">
                <p className="size-box">sm</p>
                <p className="size-box">md</p>
                <p className="size-box">lg</p>
                <p className="size-box">xl</p>
                <p className="size-box">8</p>
                <p className="size-box">9</p>
                <p className="size-box">10</p>
                <p className="size-box">11</p>
                <p className="size-box">12</p>
                <p className="size-box">13</p>
              </div>
            </div>
          </div>
        </div>
        {/* left side section */}
        <div className="flex flex-col justify-center items-center relative gap-16">
          <img
            src={heroimg}
            alt=""
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110"
          />
          {/* play icon */}
          <div className="flex gap-4 items-center">
            <button className="bg-red-500 flex items-center justify-center p-3 rounded-full hover:scale-105 duration-200">
              <FaPlay />
            </button>
            <p>PLAY VIDIO</p>
          </div>
        </div>
        {/* hero image section */}
        {/* right side section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16">
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo
            quam vero, nihil asperiores harum dolore ut illo earum nisi iusto
            facere fugit ad, animi dolorem, delectus sint repellendus iste.
          </p>
          {/* icones */}
          <div className="flex gap-8 pt-6 relative z-20">
            <div className="text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowLeft />
            </div>
            <div className="text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
