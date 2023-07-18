import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Guess the output of -
  //
  let numbers = {"four": 4, "three": 3}

  //q1
  let a = numbers.length
  
  //q2
  let keys = numbers.keys

  //q3
  let oneHundred = numbers.remove(key: "oneHundred")
`);
  const ans = `
  // Output
  //
  // q1 -2
  // q2 - ["four","three"]
  // q3 - oneHundred is nil
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
      isActive: false,
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
      isActive: true,
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
    {
      title: "Course Completion NFT",
      link: "/lessons/intro-to-cadence/12",
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
              Dictionaries
            </h2>
            <h3>
              Dictionary literals start with an opening brace {`{`} and end with
              a closing brace {`}`}. Keys are separated from values by a colon,
              and key-value associations are separated by commas.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1. Types
            </h2>
            <h3>
              Dictionary types have the form {`{`}K: V{`}`}, where K is the type
              of the key, and V is the type of the value. For example, a
              dictionary with Int keys and Bool values has type {`{`}Int: Bool
              {`}`}.
            </h3>
            <h3>
              In a dictionary, all keys must have a type that is a subtype of
              the dictionary&apos;s key type (K) and all values must have a type
              that is a subtype of the dictionary&apos;s value type (V).
            </h3>

            <Code>
              <h3>{`Declare a constant that has type {Int: Bool},`}</h3>
              <h3>{`let integers = {`}</h3>
              <h3>{`    true: 1,`}</h3>
              <h3>{`    false: 0`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Access
            </h2>
            <h3>
              To get the value for a specific key from a dictionary, the access
              syntax can be used: The dictionary is followed by an opening
              square bracket [, the key, and ends with a closing square bracket
              ].
            </h3>

            <Code>
              <h3>{`Declare a constant that has type {Int: Bool},`}</h3>
              <h3>{`let integers = {`}</h3>
              <h3>{`    true: 1,`}</h3>
              <h3>{`    false: 0`}</h3>
              <h3>{`}`}</h3>
              <h3>{`integers[true]  // is 1`}</h3>
              <h3>{`integers[false]  // is 0`}</h3>
              <h3>{`integers[false] = 9  // is now 9`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. Fields and Functions
            </h2>
            <h3>Examples of functions of a dictionary</h3>
            <h3>{`let numbers = {"fortyTwo": 42, "twentyThree": 23}`}</h3>
            <h3>{`numbers.length // 2`}</h3>
            <h3>{`numbers.insert(key: "fortyTwo", 42) `}</h3>
            <h3>{`numbers.remove(key: "fortyTwo")  // 42 popped`}</h3>
            <h3>{` numbers.values  // numbers is now [42, 23]`}</h3>
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
