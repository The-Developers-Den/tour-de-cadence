import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Link from "next/link";

const syntax = () => {
  const [code, setCode] = useState(`
// Attempt the quiz here
//
// Click on Show Answer to see the answers
`);
  const ans = `
// Your'e all set Lets Go !!
  `;

  const handleChange = (_editor: unknown, data: unknown, value: string) => {
    setCode(value);
  };
  const links: {
    title: string;
    link: string;
    isActive: boolean;
  }[] = [
    {
      title: "Lesson Overview",
      link: "/lessons/cadence-oops/1",
      isActive: true,
    },

    {
      title: "Cadence OOPs Mastery: Access Control",
      link: "/lessons/cadence-oops/2",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Interface",
      link: "/lessons/cadence-oops/3",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Enumerations",
      link: "/lessons/cadence-oops/4",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: References",
      link: "/lessons/cadence-oops/5",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: NFT Badge",
      link: "/lessons/cadence-oops/6",
      isActive: false,
    },
  ];

  return (
    <Lessons>
      <LessonHeader menuLink={links} menuTitle="Intro To Cadence" />
      <div className="w-screen h-[80vh] p-5 flex justify-between mt-20">
        <section className="basis-[52%] overflow-y-scroll">
          <LessonHeading links={links} />

          <section className="font-raleway leading-8">
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Welcome
            </h2>
            <h3>
              In this tutorial, we will learn about the major OOP concept of
              Cadence.{" "}
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              What is OOP?
            </h2>
            <h3>
              OOP stands for Object-Oriented Programming (OOP). It is a
              programming paradigm based on the concept of &quot;objects,&quot;
              which are instances of classes containing data and behavior. In
              OOP, code is organized into objects that interact with each other
              through methods and properties
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              How to use this tutorial ?
            </h2>
            <h3>
              This tutorial is designed to be interactive. You will be presented
              with a series of lessons, each of which will introduce you to a
              new concept in Cadence. You can know more about Cadence from{" "}
              <Link
                href={"https://developers.flow.com/cadence/intro"}
                target="blank"
                className="text-blue-500 cursor-pointer"
              >
                here
              </Link>
            </h3>

            <h3>
              Each lesson will include a short explanation of the concept,
              followed by a quiz. The quiz will present you with a series of
              questions about the concept. You will be able to answer the
              questions by writing Cadence code in the editor on the right side
              of the screen.
            </h3>
            <h3>
              You can also try{" "}
              <Link
                href={"https://play.flow.com/"}
                target="blank"
                className="text-blue-500 cursor-pointer"
              >
                Flow Playground
              </Link>{" "}
              to write and test your code. After completion of the course you
              will be awarded with a NFT.
            </h3>
          </section>
        </section>

        <section className="basis-[47%] overflow-y-scroll">
          <LessonQuiz
            ansCode={ans}
            handleQuizChange={handleChange}
            quizCode={code}
          />
        </section>
      </div>
    </Lessons>
  );
};
export default syntax;
