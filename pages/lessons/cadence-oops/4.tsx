import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`

// Determine the output

pub enum Food: UInt8 {
  pub case spaghetti
  pub case pizza
  pub case sushi
}
// q1
let pizza: Food? = Food(rawValue: 1)

// q2
let pasta: Food? = Food(rawValue: 4)

// q3
Food.sushi != Food.pizza
`);
  const ans = `
// q1 - Food.pizza
// q2 - nil
// q3 - true
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
      isActive: false,
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
      isActive: true,
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

          <section className="font-raleway leading-9">
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Enumerations
            </h2>
            <h3>
              Enumerations are sets of symbolic names bound to unique, constant
              values, which can be compared by identity.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Enum Declaration
            </h2>
            <h3>
              Enums are declared using the enum keyword, followed by the name of
              the enum, the raw type after a colon, and the requirements, which
              must be enclosed in opening and closing braces.
            </h3>
            <h3>
              Enum cases are declared using the case keyword, followed by the
              name of the enum case. Enum cases must be unique. Each enum case
              has a raw value, the index of the case in all cases.
            </h3>
            <h3>
              The enum cases can be accessed by using the name as a field on the
              enum, or by using the enum constructor, which requires providing
              the raw value as an argument. The enum constructor returns the
              enum case with the given raw value, if any, or nil if no such case
              exists.
            </h3>
            <h3>
              Enum cases can be compared using the equality operators == and !=.
            </h3>
            <Code>
              <h3>{`pub enum Color: UInt8 {`}</h3>
              <h3>{`    pub case red`}</h3>
              <h3>{`    pub case blue`}</h3>
              <h3>{`}`}</h3>
              <h3>{`let blue: Color = Color.blue`}</h3>
              <h3>{`// Get the raw value of the enum case blue.`}</h3>
              <h3>{`// As it is the third case, so it has index 1`}</h3>
              <h3>{`//blue.rawValue // is 2`}</h3>
            </Code>
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
