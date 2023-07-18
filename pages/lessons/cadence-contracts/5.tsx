import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`

// use panic to terminate the program
// if the voting age is less than 18

  `);
  const ans = `
pub fun checkVotingAge(age: Int): Int {
    if age < 18 {
        panic("Voting age must be 18 or older.")
    }

    // If the age is 18 or older, continue with the rest of the code.
    return age
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
      isActive: true,
    },
    {
      title: "Contract Mastery: Imp Operators",
      link: "/lessons/cadence-contracts/6",
      isActive: false,
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
              panic
            </h2>
            <h3>
              Terminates the program unconditionally and reports a message which
              explains why the unrecoverable error occurred.
            </h3>

            <Code>
              <h3>{`let optionalAccount: AuthAccount? = // ...`}</h3>
              <h3>{`let account = optionalAccount ?? panic("missing account")`}</h3>
            </Code>

            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              assert
            </h2>

            <h3>
              Terminates the program if the given condition is false, and
              reports a message which explains how the condition is false. Use
              this function for internal sanity checks.
            </h3>

            <Code>
              <h3>{`fun assert(_ condition: Bool, message: String)`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              RLP (Recursive Length Prefix)
            </h2>

            <h3>
              RLP (Recursive Length Prefix) serialization allows the encoding of
              arbitrarily nested arrays of binary data. Cadence provides RLP
              decoding functions in the built-in RLP contract, which does not
              need to be imported.
            </h3>

            <Code>
              <h3>{`fun decodeString(_ input: [UInt8]): [UInt8]`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              unsafeRandom
            </h2>

            <h3>Returns a pseudo-random number.</h3>
            <h3>
              This limitation is inherent to any smart contract platform that
              allows transactions to roll back atomically and cannot be solved
              through safe randomness alone. Providing additional Cadence
              language primitives to simplify this challenge for developers is
              on our roadmap as well.
            </h3>

            <Code>
              <h3>{`fun unsafeRandom(): UInt64`}</h3>
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
