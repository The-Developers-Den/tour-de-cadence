import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`

// Simple Hello World Contract
//
pub contract HelloWorld {

// Declare a stored state field in HelloWorld
//
pub let greeting: String
// Declare a function that can be called by anyone
// who imports the contract
//
pub fun hello(): String {
    return self.greeting
}

init() {
    self.greeting = "Hello World!"
}
}

import HelloWorld from 0x42

log(HelloWorld.hello())
  `);
  const ans = `
log(HelloWorld.hello())    // prints "Hello World!"

// Valid: Using the imported contract object to read the greeting
// field.

log(HelloWorld.greeting)   // prints "Hello World!"
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
      isActive: true,
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
            <h3>
              Contracts can be created, updated, and removed using the contracts
              object of authorized accounts. This functionality is covered in
              the next section
            </h3>

            <h3>
              Contracts are declared using the contract keyword. The keyword is
              followed by the name of the contract.
            </h3>
            <h3>Contracts cannot be nested in each other.</h3>
            <Code>
              <h3>{`pub contract SomeContract {`}</h3>
              <h3>{`     // ...`}</h3>
              <h3>{`}`}</h3>
              <h3>{``}</h3>
              <h3>{`pub contract Invalid {`}</h3>
              <h3>{`    pub contract Nested {`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`}`}</h3>
            </Code>

            <h3>
              Each lesson will include a short explanation of the concept,
              followed by a quiz. The quiz will present you with a series of
              questions about the concept. You will be able to answer the
              questions by writing Cadence code in the editor on the right side
              of the screen.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Deploying a Contract
            </h2>
            <h3>
              A new contract can be deployed to an account using the add
              function:
            </h3>
            <h3>
              The code parameter is the UTF-8 encoded representation of the
              source code. The code must contain exactly one contract or
              contract interface, which must have the same name as the name
              parameter.
            </h3>
            <Code>
              <h3>{`fun add(`}</h3>
              <h3>{`  name: String,`}</h3>
              <h3>{`  code: [UInt8],`}</h3>
              <h3>{`  ... contractInitializerArguments`}</h3>
              <h3>{`): DeployedContract`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Getting a Deployed Contract
            </h2>
            <h3>
              A deployed contract can be gotten from an account using the get
              function, it returns the deployed contract for the
              contract/contract interface with the given name in the account, if
              any.
            </h3>
            <h3>
              Returns nil if no contract/contract interface with the given name
              exists in the account.
            </h3>
            <Code>
              <h3>{`let signer: AuthAccount = ...`}</h3>
              <h3>{`let contract = signer.contracts.get(name: "Test")`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Borrowing a Deployed Contract
            </h2>
            <h3>
              In contrast to a static contract import import T from 0x1, which
              will always perform an import of a type, contracts can be
              &quot;borrowed&quot; to effectively perform a dynamic import
              dependent on a specific execution path.
            </h3>
            <h3>
              For example, assuming that a contract named Test which conforms to
              the TestInterface interface is deployed to an account, the
              contract can be retrieved as follows:
            </h3>
            <Code>
              <h3>{`let signer: AuthAccount = ...`}</h3>
              <h3>{`let contract: &TestInterface = signer.contracts.borrow<&TestInterface>(name: "Test")`}</h3>
              <h3>{`// A deployed contract can be removed from an account`}</h3>
              <h3>{`//  using the remove function:`}</h3>
              <h3>{`fun remove(name: String): DeployedContract?`}</h3>
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
