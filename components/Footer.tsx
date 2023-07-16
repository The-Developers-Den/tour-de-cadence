import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <section className=" relative w-screen px-5 md:px-7 text-center py-4 font-aber flex justify-between text-white/[0.8]">
      <h2 className="mx-2 z-10">
        Copyright © Tour de Credence - All rights reserved.
      </h2>
      <Image
        src={"/stars.png"}
        alt="stars-bg"
        width={1024}
        height={1024}
        className="w-screen h-full absolute top-0 left-0 "
      />
      <section className="basis-[30%] flex justify-around cursor-pointer z-10">
        <h2 className="hover:text-white">Privacy Policy </h2>
        <h2 className="hover:text-white">Get In Touch </h2>
      </section>
    </section>
  );
};

export default Footer;
