import Hero from "@/components/Hero";
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
        <div className="mt-14 w-full">
          <h1 className="font-aber_bold font-black my-5 mb-20 text-6xl text-center">
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
          {/* <div className="flex justify-between w-[85%] mx-auto my-2 pb-10 border-b border-white/[0.6] items-center px-3">
            <h2 className="basis-[1/3] font-aber_bold font-black text-4xl">
              Security
            </h2>
            <h2 className="basis-[40%] font-raleway">
              Cadence provides security and safety guarantees that greatly
              simplify the development of secure smart contracts. As smart
              contracts often deal with valuable assets, Cadence provides the
              resource-oriented programming paradigm, which guarantees that
              assets can only exist in one location at a time, cannot be copied,
              and cannot be accidentally lost or deleted.
            </h2>
          </div> */}
        </div>
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
    </main>
  );
}
