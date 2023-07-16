import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Rewards = () => {
  return (
    <Tilt
      tiltReverse={true}
      transitionSpeed={900}
      tiltMaxAngleY={3}
      tiltMaxAngleX={3}
      className="w-screen min-h-screen flex flex-col overflow-hidden py-20"
    >
      <Image
        src={"/stars.png"}
        alt="stars-bg"
        width={1024}
        height={1024}
        className="w-screen h-full absolute top-0 -z-10 "
      />
      <h1 className="text-6xl font-black uppercase font-aber_bold text-center">
        Embrace the Tour
      </h1>
      <section
        className={` flex justify-around  items-center font-aber_bold text-white w-screen px-5 md:px-20 mx-auto py-10 my-5 md:my-10`}
      >
        <div className="flex justify-between">
          <section className="basis-[47%] my-3 text-right flex flex-col justify-center">
            <h2 className="text-3xl">Interactive Coding Tracks</h2>

            <h2 className="font-raleway text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae
              illo facilis cupiditate, doloribus earum dicta perspiciatis
              quisquam, et fugiat provident exercitationem necessitatibus,
              repellat quas.
            </h2>
          </section>

          <div className="relative basis-[45%]">
            <Image
              src={"/code-3.png"}
              alt="code"
              width={500}
              height={500}
              className="rounded-xl w-full h-full z-20"
            />
            <section className="bg-gradient-to-r  from-[#05D6D9] to-[#A88BEB]  rounded-xl absolute -top-2 -right-2 w-[98%] h-[98%] -z-10" />
          </div>
        </div>
      </section>
      <section
        className={` flex justify-around  items-center font-aber_bold text-white w-screen px-5 md:px-20 mx-auto py-10 my-5 md:my-10`}
      >
        <div className="flex justify-between">
          <div className="relative basis-[45%]">
            <Image
              src={"/code-3.png"}
              alt="code"
              width={500}
              height={500}
              className="rounded-xl w-full h-full z-20"
            />
            <section className="bg-gradient-to-r from-[#A88BEB] to-[#05D6D9]  rounded-xl absolute -bottom-2 -left-2 w-[98%] h-[98%] -z-10" />
          </div>
          <section className="basis-[47%] my-3 text-left flex flex-col justify-center">
            <h2 className="text-3xl">NFT Rewards</h2>

            <h2 className="font-raleway text-lg mt-5">
              NFT rewards will encourage engagement and long-term loyalty,
              helping us to create more active and engaged communities compared
              to existing education platforms.
            </h2>
          </section>
        </div>
      </section>

      <Image
        src={"/g-1.png"}
        alt="stars-bg"
        width={1300}
        height={1500}
        className="absolute -top-20 -left-40 -z-20 "
      />
      <Image
        src={"/g-2.png"}
        alt="stars-bg"
        width={1000}
        height={1000}
        className="absolute bottom-0 -right-96 -z-20 "
      />
    </Tilt>
  );
};

export default Rewards;
