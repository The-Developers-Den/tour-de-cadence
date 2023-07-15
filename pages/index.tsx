import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="w-screen h-screen flex justify-center items-center z-20 relative">
        <section className="absolute w-full h-full bg-[#020614] opacity-80 -z-20  " />
        <Image
          src={"/noise.png"}
          alt="stars-bg"
          width={1024}
          height={1024}
          className="w-screen h-screen absolute top-0 -z-10 opacity-80 "
        />
        <h1 className="font-raleway z-20">Lorem ipsum dolor sit amet.</h1>
      </section>
      <Image
        src={"/G-b.png"}
        alt="stars-bg"
        width={1000}
        height={1000}
        className="absolute -bottom-80 -right-80 -z-10 "
      />
      <Image
        src={"/G-l-r.png"}
        alt="stars-bg"
        width={1000}
        height={1100}
        className="absolute -left-96 -bottom-80 -z-10 after:opacity-5 "
      />
    </main>
  );
}
