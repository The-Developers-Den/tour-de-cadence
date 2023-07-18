import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`

// emit an event whenever a user is created

  `);
  const ans = `
// Define a resource representing a User
  resource User {
      var id: Int
      var name: String
      // Additional user properties...
  }

pub fun createUser(id: Int, name: String): @User {
    let newUser <- create User(id: id, name: name)
    emit UserCreated(id: id, name: name)
    return <-newUser
}

// Event definition for user creation
pub event UserCreated(id: Int, name: String)
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
      isActive: true,
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
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Events
            </h2>
            <h3>
              Events are special values that can be emitted during the execution
              of a program.An event type can be declared with the event keyword.
            </h3>
            <h3>
              Events can only be declared within a contract body. Events cannot
              be declared globally or within resource or struct types.
            </h3>
            <Code>
              <h3>{`event FooEvent(x: Int, y: Int)`}</h3>
            </Code>

            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Emitting events
            </h2>

            <h3>To emit an event from a program, use the emit statement:</h3>
            <h3>
              Events can only be emitted from the location in which they are
              declared.
            </h3>
            <Code>
              <h3>{`pub contract Events {`}</h3>
              <h3>{`  event FooEvent(x: Int, y: Int)`}</h3>
              <h3>{`  fun events() {`}</h3>
              <h3>{`    emit FooEvent(x: 1, y: 2)`}</h3>
              <h3>{`  }`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Some Core Events
            </h2>
            <h3>
              Core events are events emitted directly from the FVM (Flow Virtual
              Machine). The events have the same name on all networks and do not
              follow the standard naming (they have no address).
            </h3>
            <h3>1. Account Created - Event name: flow.AccountCreated</h3>
            <h3>Event that is emitted when a new account gets created.</h3>
            <h3>2. Account Key Added - Event name: flow.AccountKeyAdded</h3>
            <h3>Event that is emitted when a key gets added to an account.</h3>
            <h3>3. Account Key Removed - Event name: flow.AccountKeyRemoved</h3>
            <h3>
              Event that is emitted when a key gets removed from an account .
            </h3>
            <h3>
              4. Account Contract Added - Event name: flow.AccountContractAdded
            </h3>
            <h3>
              Event that is emitted when a contract gets deployed to an account.
            </h3>
            <h3>
              5. Account Contract Removed - Event name:
              flow.AccountContractRemoved
            </h3>
            <h3>
              Event that is emitted when a contract gets removed from an
              account.
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
