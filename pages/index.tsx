import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Rewards from "@/components/Rewards";
import Image from "next/image";

export default function Home() {
  const reasons: { title: string; description: string }[] = [
    {
      title: "Security",
      description:
        "Cadence provides security and safety guarantees that greatly simplify the development of secure smart contracts. As smart contracts often deal with valuable assets, Cadence provides the resource-oriented programming paradigm, which guarantees that assets can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted.",
    },
    {
      title: "Composability",
      description:
        "Cadence enables composability. Resources (which are arbitrary user-defined data types) are stored directly in users’ accounts, and can flow freely between contracts: They can be passed as arguments to functions, returned from functions, or even combined in arbitrary data structures. This makes implementing business logic easier, more natural and promotes reuse of existing logic.",
    },
    {
      title: "Simplicity",
      description:
        "Cadence’s syntax is inspired by popular modern general-purpose programming languages like Swift, Kotlin, and Rust, so developers will find the syntax and the semantics familiar. Practical tooling, documentation, and examples enable developers to start creating programs quickly and effectively. Hundreds of developers were able to learn Cadence quickly and develop production-quality smart contracts with it shortly.",
    },
  ];
  return (
    <main>
      <Hero />
      <section className="w-screen min-h-screen flex justify-center  z-20 relative">
        <section className="absolute w-full h-full bg-[#020614] opacity-80 -z-20  " />
        <Image
          src={"/noise.png"}
          alt="stars-bg"
          width={1024}
          height={1024}
          className="w-screen h-full absolute top-0 -z-10 opacity-80 "
        />
        <div className="mt-14 w-full pb-20 pt-5">
          <h1 className="font-aber_bold font-black mb-10 text-6xl text-center">
            Why Cadence?
          </h1>
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex justify-between w-[85%] mx-auto my-5 pb-10 border-b border-white/[0.6] items-center px-3"
            >
              <h2 className="basis-[1/3] font-aber_bold font-black text-4xl">
                {reason.title}
              </h2>
              <h2 className="basis-[40%] font-raleway">{reason.description}</h2>
            </div>
          ))}
        </div>
      </section>
      <Rewards />
      <section className="w-screen max-h-[60vh] flex justify-center items-center text-center relative">
        <section className="absolute w-full h-full bg-[#020614] opacity-80 -z-20  " />
        <Image
          src={"/noise.png"}
          alt="stars-bg"
          width={1024}
          height={1024}
          className="w-screen h-full absolute top-0 -z-10 opacity-80 "
        />
        <div className="w-full py-20 ">
          <h1 className="font-aber_bold font-black mb-10 text-6xl text-center">
            Get started now!
          </h1>
          <h2 className="w-[70%] mx-auto font-raleway">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, unde nemo? Illum rerum sint perspiciatis, harum vitae
            voluptatibus assumenda optio?
          </h2>
          <button className="outline-none text-black bg-white px-5 py-3 font-black text-lg mt-5 transition-transform duration-300 hover:scale-95 cursor-pointer font-aber_bold">
            Learn Cadence
          </button>
        </div>
        <Image
          src={"/G-b.png"}
          alt="stars-bg"
          width={700}
          height={500}
          className="absolute -left-20 -top-80 -z-30 after:opacity-5"
        />
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
        className="absolute -left-96 -bottom-80 -z-10 after:opacity-5"
      />
      <Footer />
    </main>
  );
}
