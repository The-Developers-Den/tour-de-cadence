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
      image: "/i-4.png",
      link: "/courses/html",
    },
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
      image: "/i-4.png",
      link: "/courses/html",
    },
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
      image: "/i-4.png",
      link: "/courses/html",
    },
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
      image: "/i-4.png",
      link: "/courses/html",
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
            />
          ))}
        </section>
        <h2 className="text-4xl font-aber_bold my-2">Projects</h2>
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
