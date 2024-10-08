import React from "react";
import heroBg from "@/assets/hero-bg.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Image
        className="absolute top-0 left-2/4 -z-10 -translate-x-2/4 max-w-[1440px] h-[80vh] object-cover"
        src={heroBg}
        alt="hero"
      />
      <div className="container"></div>
    </section>
  );
};

export default Hero;
