import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";
import Link from "next/link";

const syntax = () => {
  const [code, setCode] = useState(`

// use @ to refer a User resource

  `);
  const ans = `
resource User {
    let id: Int
    var name: String
    // Additional user properties...
}

pub fun updateUserName(user: @User, newName: String): @User {
    user.name = newName
    return <-user
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
      link: "/lessons/cadence-contracts/1",
      isActive: false,
    },
    {
      title: "Building a Contract",
      link: "/lessons/cadence-contracts/2",
      isActive: false,
    },
    {
      title: "Contract Mastery: Events",
      link: "/lessons/cadence-contracts/3",
      isActive: false,
    },
    {
      title: "Contract Mastery: Transactions",
      link: "/lessons/cadence-contracts/4",
      isActive: false,
    },
    {
      title: "Contract Mastery: Built-in Functions",
      link: "/lessons/cadence-contracts/5",
      isActive: false,
    },
    {
      title: "Contract Mastery: Imp Operators",
      link: "/lessons/cadence-contracts/6",
      isActive: true,
    },
    {
      title: "Contract Mastery: NFT Badge",
      link: "/lessons/cadence-contracts/7",
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
              1. & (ampersand)
            </h2>
            <h3>
              If an expression starts with the & (ampersand) symbol, it creates
              a reference.
            </h3>
            <Code>
              <h3>{`let a: String = "hello"`}</h3>
              <h3>{`let refOfA: &String = &a as &String`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. @ (at)
            </h2>
            <h3>
              The @ (at) symbol before a type is used to annotate whether the
              type is a resource.
            </h3>

            <Code>
              <h3>{`pub resource SomeResource {`}</h3>
              <h3>{`    pub var value: Int`}</h3>
              <h3>{`    init(value: Int) {`}</h3>
              <h3>{`        self.value = value`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`}`}</h3>
              <h3>{`let a: @SomeResource <- create SomeResource(value: 0)`}</h3>
            </Code>

            <h3>
              More operators can be accessed from{" "}
              <Link
                href={"/lessons/intro-to-cadence/8"}
                className="text-blue-400"
              >
                here
              </Link>
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
