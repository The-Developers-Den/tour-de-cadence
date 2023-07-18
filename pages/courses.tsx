import CourseCard from "@/components/CourseCard";
import CourseHeader from "@/components/CourseHeader";
import Image from "next/image";

const courses = () => {
  const fundamentalCourses: {
    title: string;
    description: { info: string }[];
    image: string;
    link: string;
  }[] = [
    {
      title: "Intro To Cadence",
      description: [
        {
          info: "Scope of Cadence",
        },
        {
          info: "Variables",
        },
        {
          info: "Expressions",
        },
      ],
      image: "/blockchain.png",
      link: "/lessons/intro-to-cadence/1",
    },
    {
      title: "Cadence OOP Mastery",
      description: [
        {
          info: "Oops Concepts",
        },
        {
          info: "Made Easy",
        },
        {
          info: "Quiz & much more",
        },
      ],
      image: "/computer.png",
      link: "/lessons/cadence-oops/1",
    },
    {
      title: "Cadence: Smart Contract Wizardry",
      description: [
        {
          info: "Contract Creation",
        },
        {
          info: "Functions",
        },
        {
          info: "Quiz & much more",
        },
      ],
      image: "/link.png",
      link: "/courses",
    },
  ];
  const projects: {
    title: string;
    description: { info: string }[];
    image: string;
    link: string;
  }[] = [
    {
      title: "Hello World",
      description: [
        {
          info: "Flow's First Contract: Fundamental Start",
        },
        {
          info: "Cadence Basics: Contract Creation",
        },
        {
          info: "Start with Flow: First Contract",
        },
      ],
      image: "/hello-world.png",
      link: "/courses",
    },
    {
      title: "NFT Marketplace",
      description: [
        {
          info: "Build Marketplace: Cadence Tutorial",
        },
        {
          info: "Cadence Fundamentals: Marketplace Creation",
        },
        {
          info: "Marketplace Made Easy",
        },
      ],
      image: "/card.png",
      link: "/courses",
    },
    {
      title: "Voting Contract",
      description: [
        {
          info: "Decentralized Voting with Cadence",
        },
        {
          info: "Cadence Fundamentals: On-Chain Voting",
        },
        {
          info: "Blockchain Voting Made Easy",
        },
      ],
      image: "/ballot.png",
      link: "/courses",
    },
  ];
  return (
    <main className="font-aber relative overflow-hidden">
      <CourseHeader />
      <section className="w-screen min-h-screen  justify-center  z-10 p-5 mt-20  ">
        <h2 className="text-4xl font-aber_bold my-2">Fundamentals</h2>
        <section className="grid grid-cols-4 gap-4 justify-around my-10 py-5">
          {fundamentalCourses.map((course) => (
            <CourseCard
              description={course.description}
              image={course.image}
              link={course.link}
              title={course.title}
              key={course.title}
              btnText={"Start"}
            />
          ))}
        </section>
        <h2 className="text-4xl font-aber_bold my-2">Projects</h2>
        <section className="grid grid-cols-4 gap-4 justify-around my-10 py-5">
          {projects.map((course) => (
            <CourseCard
              description={course.description}
              image={course.image}
              link={course.link}
              title={course.title}
              key={course.title}
              btnText={"Coming Soon"}
            />
          ))}
        </section>
      </section>
      <Image
        src={"/stars.png"}
        alt="stars-bg"
        width={1024}
        height={1024}
        className="w-screen h-full absolute top-0 -z-10 "
      />
      <Image
        src={"/G-b.png"}
        alt="stars-bg"
        width={1000}
        height={1000}
        className="absolute -top-80 -right-80 -z-20 "
      />
      <Image
        src={"/G-l-r.png"}
        alt="stars-bg"
        width={1000}
        height={1100}
        className="absolute -left-96 -bottom-60 -z-20"
      />
    </main>
  );
};

export default courses;
