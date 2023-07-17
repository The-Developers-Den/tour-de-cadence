import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

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
          <h2 className="font-raleway my-2 mb-4 text-lg w-[65%] text-center">
            Welcome to Tour Dé Cadence, where you&apos;ll master the art of
            Cadence - the language that sets the tempo for cutting-edge
            programming! Let us guide your coding journey with flair and
            finesse, turning you into a symphony of innovation.
          </h2>
          <Link
            href={"/courses"}
            className="outline-none text-black bg-white px-5 py-3 font-black text-lg my-3 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            Get Started
          </Link>
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
