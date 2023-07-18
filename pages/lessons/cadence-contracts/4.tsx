import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`

// what are the four phases in a transaction

  `);
  const ans = `
transaction {
    prepare(signer1: AuthAccount) {
        // Access signing accounts for this transaction.
        //
        // Avoid logic that does not need access to signing accounts.
        //
        // Signing accounts can't be accessed anywhere else in the transaction.
    }

    pre {
        // Define conditions that must be true
        // for this transaction to execute.
    }

    execute {
        // The main transaction logic goes here, but you can access
        // any public information or resources published by any account.
    }

    post {
        // Define the expected state of things
        // as they should be after the transaction executed.
        //
        // Also used to provide information about what changes
        // this transaction will make to accounts in this transaction.
    }
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
      isActive: true,
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
              Transactions
            </h2>
            <h3>
              Transactions are objects that are signed by one or more accounts
              and are sent to the chain to interact with it.
            </h3>
            <h3>
              The body is declared using the transaction keyword and its
              contents are contained in curly braces.
            </h3>
            <Code>
              <h3>{`transaction {`}</h3>
              <h3>{`    // transaction contents`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h3>The four optional main phases: </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Prepare phase
            </h2>
            <h3>
              The prepare phase is used when access to the private AuthAccount
              object of signing accounts is required for your transaction.
            </h3>
            <h3>
              For each signer of the transaction the signing account is passed
              as an argument to the prepare phase. For example, if the
              transaction has three signers, the prepare must have three
              parameters of type AuthAccount.
            </h3>
            <Code>
              <h3>{`prepare(signer1: AuthAccount) {`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Pre Phase
            </h2>

            <h3>
              The pre phase is executed after the prepare phase, and is used for
              checking if explicit conditions hold before executing the
              remainder of the transaction. A common example would be checking
              requisite balances before transferring tokens between accounts.
            </h3>
            <Code>
              <h3>{`pre{`}</h3>
              <h3>{`    sendingAccount.balance > 0`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Execute Phase
            </h2>

            <h3>
              The execute phase does exactly what it says, it executes the main
              logic of the transaction. This phase is optional, but it is a best
              practice to add your main transaction logic in the section, so it
              is explicit.
            </h3>
            <Code>
              <h3>{`execute {`}</h3>
              <h3>{`    let publicAccount = getAccount(0x03)`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Post Phase
            </h2>

            <h3>
              Statements inside of the post phase are used to verify that your
              transaction logic has been executed properly. It contains zero or
              more condition checks.
            </h3>
            <h3>
              For example, a transfer transaction might ensure that the final
              balance has a certain value, or e.g. it was incremented by a
              specific amount.
            </h3>
            <Code>
              <h3>{`post {`}</h3>
              <h3>{`    result.balance == 30: "Balance after transaction is incorrect!"`}</h3>
              <h3>{`}`}</h3>
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
