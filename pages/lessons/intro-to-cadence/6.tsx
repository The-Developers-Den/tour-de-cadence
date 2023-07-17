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
  num=[23, 4, 5, 2]
  //q1
  num.length

  //q2
  let a = num.removeLast()

  // q3
  let b = num.slice(from: 1, upTo: 3)
  `);
  const ans = `
  // Output

  // q1 - 4
  // q2 a is 2
  // q3 b is [4, 5]
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
      isActive: true,
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
              Arrays
            </h2>
            <h3>
              Arrays are mutable, ordered collections of values. Arrays may
              contain a value multiple times. Array literals start with an
              opening square bracket [ and end with a closing square bracket ].
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1. Types
            </h2>
            <h3>
              Arrays either have a fixed size or are variably sized, i.e.,
              elements can be added and removed.
            </h3>
            <h3>
              Fixed-size array types have the form [T; N], where T is the
              element type, and N is the size of the array. N has to be
              statically known, meaning that it needs to be an integer literal.
              For example, a fixed-size array of 3 Int8 elements has the type
              [Int8; 3].
            </h3>
            <h3>
              Variable-size array types have the form [T], where T is the
              element type. For example, the type [Int16] specifies a
              variable-size array of elements that have type Int16.
            </h3>
            <Code>
              <h3>{`let array: [Int8; 2] = [1, 2] //always contain 2 elements`}</h3>
              <h3>{`var variableLengthArray: [Int] = []  // variable length array`}</h3>
              <h3>{`let arrays: [[Int16; 3]; 2] = [`}</h3>
              <h3>{`    [1, 2, 3],`}</h3>
              <h3>{`    [4, 5, 6]`}</h3>
              <h3>{`]`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Indexing
            </h2>
            <h3>
              To get the element of an array at a specific index, the indexing
              syntax can be used: The array is followed by an opening square
              bracket [, the indexing value, and ends with a closing square
              bracket ].
            </h3>
            <h3>Indexes start at 0 for the first element in the array.</h3>
            <Code>
              <h3>{`let numbers = [42, 23]`}</h3>
              <h3>{`number[0]  // results 42`}</h3>
              <h3>{`number[1] = 5  // sets to 5`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. Fields and Functions
            </h2>
            <h3>
              Arrays have multiple built-in fields and functions that can be
              used to get information about and manipulate the contents of the
              array.
            </h3>
            <h3>
              The field length, and the functions concat, and contains are
              available for both variable-sized and fixed-sized or
              variable-sized arrays.
            </h3>
            <h3>{`let numbers = [42, 23, 4, 98]`}</h3>
            <h3>{`numbers.length // 4`}</h3>
            <h3>{`numbers.conatins(3)  // false`}</h3>
            <h3>{`numbers.slice(from: 1, upTo: 3)  // [23, 4]`}</h3>
            <h3>{`numbers.append(3)  // numbers is now [42, 23, 4 , 98, 3]`}</h3>
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
