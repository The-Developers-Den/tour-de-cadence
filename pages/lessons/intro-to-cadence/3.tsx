import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Check which are valid declarations

  // case 1

  let a = 10
  a = 2 

  // case 2

  var b = false
  b = 2

  // case 3

  let a = 10
  let b = a

  // case 4

  let a = 10
  
  if false {
    let a = 20
  }
 
  `);
  const ans = `
  // valid

  // case 3

  let a = 10
  let b = a

  // case 4

  let a = 10
  
  if false {
    let a = 20
  }
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
      link: "/lessons/intro-to-cadence/1",
      isActive: false,
    },
    {
      title: "Cadence Syntax: Comments & Naming Convention",
      link: "/lessons/intro-to-cadence/2",
      isActive: false,
    },
    {
      title: "Cadence Syntax Decoded: Mastering Variable",
      link: "/lessons/intro-to-cadence/3",
      isActive: true,
    },
    {
      title: "Cadence Types: Exploring Data Structures",
      link: "/lessons/intro-to-cadence/4",
      isActive: false,
    },
    {
      title: "Cadence Data Strucuture: Integer Deep Dive",
      link: "/lessons/intro-to-cadence/5",
      isActive: false,
    },
    {
      title: "Cadence Data Strucuture: Array Deep Dive",
      link: "/lessons/intro-to-cadence/6",
      isActive: false,
    },
    {
      title: "Cadence Data Strucuture: Dictionary Deep Dive",
      link: "/lessons/intro-to-cadence/7",
      isActive: false,
    },

    {
      title: "Operator's Odyssey: Mastering Operators in Cadence",
      link: "/lessons/intro-to-cadence/8",
      isActive: false,
    },
    {
      title: "Flow Control Mastery: Navigating Control Structures ",
      link: "/lessons/intro-to-cadence/9",
      isActive: false,
    },
    {
      title: "Cadence Mastery: Functions & Scope ",
      link: "/lessons/intro-to-cadence/10",
      isActive: false,
    },
    {
      title: "Cadence Mastery: Import Keyword ",
      link: "/lessons/intro-to-cadence/11",
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
              Declarations of Identifiers
            </h2>
            <h3 className="text-xl">1. Constants</h3>
            <h3>
              Constant means that the identifier&apos;s association is constant,
              not the value itself - the value may still be changed if it is
              mutable.
            </h3>
            <h3>Constants are declared using the let keyword.</h3>
            <Code>
              <h3>{`// Declare a constant named a.`}</h3>
              <h3>{`let a = 1`}</h3>
              <h3>{`a = 2 // Invalid: re-assigning to a constant.`}</h3>
            </Code>
            <h3 className="text-xl">2. Variables</h3>
            <h3>
              Variables are initialized with a value and can be reassigned
              later.{" "}
            </h3>
            <h3>Variables are declared using the var keyword.</h3>
            <Code>
              <h3>{`// Declare a variable named b.`}</h3>
              <h3>{`var b = 1`}</h3>
              <h3>{`b = 2 // valid: assigning new value.`}</h3>
            </Code>

            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              Points to remember
            </h2>
            <h3>
              Declaring another variable or constant with a name that is already
              declared in the current scope is invalid, regardless of kind or
              type.
            </h3>
            <h3>
              Declaring another variable or constant with a name that is already
              declared in the current scope is invalid, regardless of kind or
              type.
            </h3>
            <h3>variables can be redeclared in sub-scopes.</h3>
            <Code>
              <h3>{`let a = 1     // Declare a constant named a.`}</h3>
              <h3>{`if true {`}</h3>
              <h3>{`     let a = 2   // Declare a constant with the same name a`}</h3>
              <h3>{`     // This is valid because it is in a sub-scope.`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h3>A variable cannot be used as its own initial value.</h3>
            <Code>
              <h3>{`// Invalid: Use of variable in its own initial value.`}</h3>
              <h3>{`let x = x`}</h3>
            </Code>
            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              Type Annotations
            </h2>
            <h3>
              When declaring a constant, variable and function parameters , an
              optional type annotation can be provided, to make it explicit what
              type the declaration has.
            </h3>
            <Code>
              <h3>{`// Bool is the type of booleans.`}</h3>
              <h3>{`var isThisAwesome: Bool = true`}</h3>
            </Code>
            <h3>
              We will discuss more about different types in the next chapter.
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
