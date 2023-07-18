import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Observe how to declare different variables
  
  `);
  const ans = `
  // no quiz for this chater
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
      isActive: true,
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
              Types of data strucutres
            </h2>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1. Boolean
            </h3>
            <h3>Boolean has two values true and false with the type Bool</h3>
            <h3>Constants are declared using the let keyword.</h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Numeric Literals
            </h3>
            <h3>
              Numbers can be written in various bases. Numbers are assumed to be
              decimal by default. Non-decimal literals have a specific prefix.
            </h3>
            <h3>Underscores are allowed for all numeral systems.</h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.1 Decimals
            </h3>
            <h3>prefix none </h3>
            <h3>
              Decimal numbers may contain underscores (_) to logically separate
              components.
            </h3>
            <Code>
              <h3>{`1234567890  // is 1234567890`}</h3>
              <h3>{`// A decimal number with leading zeros. Not an octal number!`}</h3>
              <h3>{`00123 // is 123`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.2 Binary
            </h3>
            <h3>prefix 0b only 0,1 allowed </h3>
            <Code>
              <h3>{`0b101010  // is 42`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.3 Octal
            </h3>
            <h3>prefix 0o only 0-7 allowed </h3>
            <Code>
              <h3>{`0o12345670  // is 2739128`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.4 Hexadecimal
            </h3>
            <h3>prefix 0x only 0-9 and a-f allowed </h3>
            <Code>
              <h3>{`0x1234567890ABCabc  // is 1311768467294898876`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.5 Integers
            </h3>
            <h3>
              Integers are numbers without a fractional part. They are either
              signed (positive, zero, or negative) or unsigned (positive or
              zero).
            </h3>
            <Code>
              <h3>{`let smallNumber: UInt8 = 10`}</h3>
            </Code>
            <h3>We will talk more about integers in the coming chapter</h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.6 Fixed-Point Numbers
            </h3>
            <h3>
              Fixed-point numbers are useful for representing fractional values.
              They have a fixed number of digits after decimal point.
            </h3>
            <h3>
              They are essentially integers which are scaled by a factor. For
              example, the value 1.23 can be represented as 1230 with a scaling
              factor of 1/1000. The scaling factor is the same for all values of
              the same type and stays the same during calculations.
            </h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2.7 Floating-Point Numbers
            </h3>
            <h3>There is no support for floating point numbers.</h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. Addressess
            </h3>
            <h3>
              The type Address represents an address. Addresses are unsigned
              integers with a size of 64 bits (8 bytes). Hexadecimal integer
              literals can be used to create address values.
            </h3>
            <h3>Address can also be created using a byte array or string.</h3>
            <Code>
              <h3>{`let someAddress: Address = 0x436164656E636521`}</h3>
              <h3>{`let addressFromString: Address? = Address.fromString("0x436164656E636521")`}</h3>
            </Code>

            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              4. Strings
            </h3>
            <h3>
              Strings are collections of characters. Strings have the type
              String, and characters have the type Character. Strings can be
              used to work with text in a Unicode-compliant way. Strings are
              immutable.
            </h3>
            <h3>
              String and character literals are enclosed in double quotation
              marks
            </h3>
            <h3>
              The type Character represents a single, human-readable character.
              Characters are extended grapheme clusters, which consist of one or
              more Unicode scalars.
            </h3>
            <Code>
              <h3>{`let someString = "Hello, world!"`}</h3>
            </Code>

            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              5. Arrays
            </h3>
            <h3>
              Arrays are mutable, ordered collections of values. Arrays may
              contain a value multiple times. Array literals start with an
              opening square bracket [ and end with a closing square bracket ].
            </h3>
            <h3>We will talk more about arrays in the coming chapter</h3>
            <Code>
              <h3>{`[1, 2, 3]`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              6. Dictionary
            </h3>
            <h3>
              Dictionaries are mutable, unordered collections of key-value
              associations. Dictionaries may contain a key only once and may
              contain a value multiple times. Dictionary literals start with an
              opening brace {`{`} and end with a closing brace {"}"} . Keys are
              separated from values by a colon, and key-value associations are
              separated by commas.
            </h3>
            <h3>We will talk more about dictinary in the coming chapter</h3>
            <Code>
              <h3>{`let booleans = {`}</h3>
              <h3>{`   1: true,`}</h3>
              <h3>{`   0: false`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              8.Never
            </h3>
            <h3>
              Never is the bottom type, i.e., it is a subtype of all types.
              There is no value that has type Never. Never can be used as the
              return type for functions that never return normally. For example,
              it is the return type of the function panic.
            </h3>
            <h3 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Minimum and maximum values
            </h3>
            <h3>
              The minimum and maximum values for all integer and fixed-point
              number types are available through the fields min and max.
            </h3>

            <Code>
              <h3>{`let max = UInt8.max`}</h3>
              <h3>{`// max is 255, the maximum value of the type UInt8`}</h3>
              <h3>{`let max = UInt8.min`}</h3>
              <h3>{`// min is 0, the maximum value of the type UInt8`}</h3>
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
