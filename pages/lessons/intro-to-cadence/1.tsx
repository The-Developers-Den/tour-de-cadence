import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Lessons from "@/util/lesson.config";
import CodeDifference from "@/components/Test";
import React, { useState } from "react";

import EditableCodeBlock from "@/components/CodeBlock";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";

const syntax = () => {
  const userCode = "const a =10; print(a+b)";
  const answerCode = "const a =10; print(a)";
  const [code, setCode] = useState(`
// HelloWorld.cdc
pub contract HelloWorld {

    // Declare a public field of type String.
    // All fields must be initialized in the init() function.
    pub let greeting: String

    // The init() function is required if the contract contains any fields.
    init() {
        self.greeting = "Hello, World!"
    }

    // Public function that returns our friendly greeting!
    pub fun hello(): String {
        return self.greeting
    }
}
  `);

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
      isActive: true,
    },
    {
      title: "Intro To Smart Contract",
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
      title: "Cadence Types: Exploring Data Structures",
      link: "/lessons/intro-to-cadence/5",
      isActive: false,
    },
    {
      title: "Operator's Odyssey: Mastering Operators in Cadence",
      link: "/lessons/intro-to-cadence/6",
      isActive: false,
    },
    {
      title: "Flow Control Mastery: Navigating Control Structures ",
      link: "/lessons/intro-to-cadence/7",
      isActive: false,
    },
    {
      title: "Flow Control Mastery: Navigating Control Structures ",
      link: "/lessons/intro-to-cadence/8",
      isActive: false,
    },
    {
      title: "Flow Control Mastery: Navigating Control Structures ",
      link: "/lessons/intro-to-cadence/8",
      isActive: false,
    },
  ];

  return (
    <Lessons>
      <LessonHeader menuLink={links} menuTitle="Intro To Cadence" />
      <div className="w-screen h-[80vh] p-5 flex justify-between mt-20">
        <section className="basis-[52%] overflow-y-scroll">
          <LessonHeading links={links} />

          <h2 className="text-xl font-bold font-aber_bold my-2">Comments</h2>
          <h3 className="text-lg font-raleway my-2">
            Comments can be used to document code. A comment is text that is not
            executed.
            <i>Single-line</i>
            comments start with two slashes (//). These comments can go on a
            line by themselves or they can go directly after a line of code.
          </h3>

          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            wrapLongLines
          >
            a+b =10
          </SyntaxHighlighter>
        </section>

        <section className="basis-[47%] flex flex-col">
          <section className="basis-[76%]">
            <EditableCodeBlock code={code} handleCodeChange={handleChange} />
          </section>
          <section className="flex">
            <button
              onClick={() => {
                console.log(code);
              }}
            >
              Show Answer
            </button>
            <button
              onClick={() => {
                console.log(code);
              }}
            >
              Check
            </button>
          </section>
          <CodeDifference userCode={userCode} answerCode={answerCode} />
        </section>
      </div>
    </Lessons>
  );
};
export default syntax;
