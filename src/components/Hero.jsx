import React from "react";
import heroimg from "../assets/images/shoes.png";
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const slideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});
function Hero() {
  return (
    <section className="bg-primary text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* brand info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={slideUp(0.2)}
              initial="hidden"
              animate="show"
              className="text-3xl uppercase font-bold">
              jorden 1 red
            </motion.h1>
            <motion.p variants={slideUp(0.4)} initial="hidden" animate="show">
              release date <br />
              10/08/2024
              <br />
              color way
              <br />
              red
            </motion.p>
            {/* select section size */}
            <motion.div
              className="max-w-[250px] space-y-3 md:mx-0"
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show">
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
            </motion.div>
          </div>
        </div>
        {/* left side section */}
        <div className="flex flex-col justify-center items-center relative gap-16">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={heroimg}
            alt=""
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110"
          />
          {/* play icon */}
          <motion.div
            className="flex gap-4 items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}>
            <button className="bg-red-500 flex items-center justify-center p-3 rounded-full hover:scale-105 duration-200">
              <FaPlay />
            </button>
            <p>PLAY VIDIO</p>
          </motion.div>
        </div>
        {/* hero image section */}
        {/* right side section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16">
          <motion.p
            className="text-sm"
            variants={slideUp(0.8)}
            initial="hidden"
            animate="show">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo
            quam vero, nihil asperiores harum dolore ut illo earum nisi iusto
            facere fugit ad, animi dolorem, delectus sint repellendus iste.
          </motion.p>
          {/* icones */}
          <motion.div
            className="flex gap-8 pt-6 relative z-20"
            variants={slideUp(1)}
            initial="hidden"
            animate="show">
            <div className="text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowLeft />
            </div>
            <div className="text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowRight />
            </div>
          </motion.div>
        </div>
      </div>
      {/* bg text and white */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-center text-[240px] md:text-[220px] lg:text-[250px] xl:text-[350px ] font-bold font-aston absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2]">
        NIKE
      </motion.p>
      <div className="w-[500px] h-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}

export default Hero;
