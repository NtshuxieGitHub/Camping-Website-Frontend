import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      id="hero"
    >
      <div className="hero-map" />

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="bold-52 lg:bold-88">Limpopo Campers</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Invite us on your journey to experience nature and explore South
          Africa. We can make your journey much more enjoyable with the Limpopo
          campers app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, idx) => (
                <Image
                  src="/star.svg"
                  key={idx}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-20">
            5.5K
            <span className="bold-8 regular-16 lg:regular-20 ml-1 underline">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How Hilink works?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Location on map */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Florida, Giyani</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">10.5 km</p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">3.00 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
