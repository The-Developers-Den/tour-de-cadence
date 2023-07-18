import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Guess the output
  //
  //q1
  let a: UInt8 = 200
  let b: UInt8 = 100
  let result = a.saturatingAdd(b)
  
  //q2
  let max = UInt8.max

  //q3
  let fix =  -9223372036854775807
  fix.toBigEndianBytes()
  `);
  const ans = `
  //Ans
  // q1 - result is 255, the maximum value of the type UInt8
  // q2 - max is 255, the maximum value of the type UInt8
  // q3 - [128, 0, 0, 0, 0, 0, 0, 1]
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
      isActive: true,
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
              Integers
            </h2>
            <h3>
              Integers are numbers without a fractional part. They are either
              signed (positive, zero, or negative) or unsigned (positive or
              zero).
            </h3>
            <h3>
              Signed integer types which check for overflow and underflow have
              an Int prefix and can represent values in the following ranges:
            </h3>
            <h3>Int8: -2^7 through 2^7 - 1</h3>
            <h3>Int16: -2^15 through 2^15 - 1 </h3>
            <h3>Int32: -2^31 through 2^31 - 1 </h3>
            <h3>Int64: -2^63 through 2^63 - 1 </h3>
            <h3>Int128: -2^127 through 2^127 - 1 </h3>
            <h3>Int256: -2^255 through 2^255 - 1</h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Numeric Literals
            </h3>
            <h3>
              Unsigned integer types which check for overflow and underflow have
              a UInt prefix and can represent values in the following ranges:
            </h3>

            <h3>UInt8: 0 through 2^8 - 1 </h3>
            <h3>UInt16: 0 through 2^16 - 1 </h3>
            <h3>UInt32: 0 through 2^32 - 1 </h3>
            <h3>UInt64: 0 through 2^64 - 1 </h3>
            <h3>UInt128: 0 through 2^128 - 1</h3>
            <h3>UInt256: 0 through 2^256 - 1</h3>
            <h3>
              Unsigned integer types which do not check for overflow and
              underflow, i.e. wrap around, have the Word prefix and can
              represent values in the following ranges:
            </h3>

            <h3>Word8: 0 through 2^8 - 1 </h3>
            <h3>Word16: 0 through 2^16 - 1 </h3>
            <h3>Word32: 0 through 2^32 - 1 </h3>
            <h3>Word64: 0 through 2^64 - 1 </h3>

            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Integer Functions
            </h3>
            <h3>Integers have multiple built-in functions you can use.</h3>
            <Code>
              <h3>{`let largeNumber = 1234567890`}</h3>
              <h3>{`answer.toString()  // is "1234567890"`}</h3>
              <h3>{`largeNumber.toBigEndianBytes()  // is [73, 150, 2, 210]`}</h3>
              <h3>{`let negTwenty: Int? = Int.fromString("-20") // ok`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Saturation Arithmetic
            </h3>
            <h3>
              Integers and fixed-point numbers support saturation arithmetic:
              Arithmetic operations, such as addition or multiplications, are
              saturating at the numeric bounds instead of overflowing.
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
