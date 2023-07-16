import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <Tilt
      tiltReverse={true}
      transitionSpeed={900}
      tiltMaxAngleY={3}
      tiltMaxAngleX={3}
      className={` ${styles.outer} w-screen min-h-screen flex overflow-hidden`}
    >
      <section className="w-screen min-h-screen flex ">
        <Image
          src={"/stars.png"}
          alt="stars-bg"
          width={1024}
          height={1024}
          className="w-screen h-screen absolute top-0 -z-10 "
        />
        <section
          className={` ${styles.cont} flex flex-col justify-center items-center font-aber_bold text-white w-[80vw] mx-auto mt-10`}
        >
          <h1 className="text-8xl font-black uppercase">Tour dé Cadence</h1>
          <h2 className="font-raleway my-2 text-lg w-[60%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae
            illo facilis cupiditate, doloribus earum dicta perspiciatis
            quisquam, et fugiat provident exercitationem necessitatibus,
            repellat quas.
          </h2>
          <button className="outline-none text-black bg-white px-5 py-3 font-black text-lg my-3 transition-transform duration-300 hover:scale-95 cursor-pointer">
            Get Started
          </button>
        </section>
        <Image
          src={"/G-top.png"}
          alt="stars-bg"
          width={1000}
          height={1000}
          className="absolute top-0 -z-20 "
        />
      </section>
    </Tilt>
  );
};

export default Hero;
