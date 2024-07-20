import React from "react";

function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px]">
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
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
        {/* hero image section */}
        {/* right side section */}
      </div>
    </section>
  );
}

export default Hero;
