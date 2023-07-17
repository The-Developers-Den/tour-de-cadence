import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Check which name is invalid

  1. token_name
  2. PersonID
  3. _2awesome
  4. _33@3
  5. #thisisFine
  6. 1account
  `);
  const ans = `
  // Invalid names

  1. _33@3   // Invalid char @
  2. #thisisFine // Invalid char #
  3. 1account  // starts with number 
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
      isActive: true,
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
              Comments
            </h2>
            <h3 className="text-lg font-raleway my-2">
              Comments can be used to document code. A comment is text that is
              not executed.
            </h3>
            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              Types of Comment
            </h2>
            <h3>
              1. <i> Single-line </i>
              comments start with two slashes (//). These comments can go on a
              line by themselves or they can go directly after a line of code.
            </h3>
            <Code>
              <h3>{`// This is a single line comment.`}</h3>
              <h3>
                {`let x = 1  // Here is another comment after a line of code.`}
              </h3>
            </Code>
            <h3>
              2. <i> Multi-line </i>
              comments start with a slash and an asterisk (/*) and end with an
              asterisk and a slash (*/):
            </h3>
            <Code>
              <h3>{`/* This is a comment which`}</h3>
              <h3>{`spans multiple lines. */`}</h3>
            </Code>
            <h3>
              3. <i>Documentation comments </i>
              (also known as &quot;doc-strings&quot; or &quot;doc-comment&quot;)
              are a special set of commentsused to generate human-readable
              documentation, or provide documentation in an IDE. Doc-comments
              either start with three slashes (///) on each line, or are
              surrounded by /** and **/.
            </h3>
            <Code>
              <h3>{`/// This is a documentation comment for \`z\`.`}</h3>
              <h3>{`/// It spans multiple lines.`}</h3>
              <h3>{`let z = 1. */`}</h3>
            </Code>
            <h3>
              4. <i>Nested comments </i>
            </h3>
            <Code>
              <h3>{`/* /* this */ is a valid comment */`}</h3>
            </Code>
            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              Naming Convention
            </h2>
            <h3>
              Names may start with any upper or lowercase letter (A-Z, a-z) or
              an underscore (_). This may be followed by zero or more upper and
              lower case letters, underscores, and numbers (0-9). Names may not
              begin with a number
            </h3>
            <Code>
              <h3>{`// Valid: various valid name`}</h3>
              <h3>{`PersonID _account _bal1`}</h3>
              <h3>{`// Invalid: various invalid characters`}</h3>
              <h3>{`!@#$%^&*`}</h3>
            </Code>
            <h3 className="bg-[#fae71698] rounded-xl p-3 my-2 ">
              By convention, variables, constants, and functions have lowercase
              names; and types have title-case names.
            </h3>
            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              Semicolons
            </h2>
            <h3>
              Semicolons (;) are used as separators between declarations and
              statements.Semicolons must be used to separate multiple statements
              if they appear on the same line.
            </h3>
            <Code>
              <h3>{`// Declare a constant and a variable on a single line, separated by semicolons.`}</h3>
              <h3>{`let d = 1; var e = 2`}</h3>
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
