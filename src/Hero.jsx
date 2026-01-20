import React, { useState,useEffect } from "react";

import img1 from "./assets/bgor.png";
import img2 from "./assets/nails.png";
import img3 from "./assets/anothernails.png"


function Hero() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className=" overflow-hidden   relative mt-15 w-8/6 md:w-1/5 lg:w-full h-[100vh] mx-auto ">
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-full absolute object-cover transition-all duration-700  "
      />
    </section>
</> 

)
}  

export default Hero;