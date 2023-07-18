import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`
  // Answer the following questions
    
  // q1 - Declare a public constant, accessible/visible in all scopes.    
  // q2 - Declare a public struct, accessible/visible in all scopes.  
  // q3 - Declare a private variable , accessible/visible in inner scopes.`);
  const ans = `
  // q1
      
  pub const someConstant = 1
    
  // q2
    
  pub struct SomeStruct {
      // code here
  }
    
  // q3
    
  pub struct SomeStruct {
      access(self) var c: Int
  } `;

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
      link: "/lessons/cadence-oops/1",
      isActive: false,
    },

    {
      title: "Cadence OOPs Mastery: Access Control",
      link: "/lessons/cadence-oops/2",
      isActive: true,
    },
    {
      title: "Cadence OOPs Mastery: Interface",
      link: "/lessons/cadence-oops/3",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Enumerations",
      link: "/lessons/cadence-oops/4",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: References",
      link: "/lessons/cadence-oops/5",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: NFT Badge",
      link: "/lessons/cadence-oops/6",
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
              Access control
            </h2>
            <h3>
              Access control allows making certain parts of the program
              accessible/visible and making other parts inaccessible/invisible.
            </h3>
            <h3>In Flow and Cadence, there are two types of access control:</h3>
            <h3>
              Access control on objects in account storage using capability
              security.
            </h3>
            <h3>
              Within Flow, a caller is not able to access an object unless it
              owns the object or has a specific reference to that object. This
              means that nothing is truly public by default. Other accounts can
              not read or write the objects in an account unless the owner of
              the account has granted them access by providing references to the
              objects.
            </h3>
            <h3>
              Access control within contracts and objects using pub and access
              keywords.
            </h3>
            <h3>
              For the explanations of the following keywords, we assume that the
              defining type is either a contract, where capability security
              doesn&apos;t apply, or that the caller would have valid access to
              the object governed by capability security.
            </h3>
            <h3>
              There are four levels of access control defined in the code that
              specify where a declaration can be accessed or called.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1. Public or access(all)
            </h2>
            <h3>
              The declaration is accessible/visible in all scopes. This includes
              the current scope, inner scopes, and the outer scopes.
            </h3>
            <h3>
              An element is made publicly accessible / by any code by using the
              pub or access(all) keywords.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. access(account)
            </h2>
            <h3>
              The declaration is only accessible/visible in the scope of the
              entire account where it is defined. This means that other
              contracts in the account are able to access it,
            </h3>
            <h3>
              An element is made accessible by code in the same account (e.g.
              other contracts) by using the access(account) keyword.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. access(contract)
            </h2>
            <h3>
              The declaration is only accessible/visible in the scope of the
              contract that defined it. This means that other types and
              functions that are defined in the same contract can access it, but
              not other contracts in the same account.
            </h3>
            <h3>
              An element is made accessible by code in the same contract by
              using the access(contract) keyword.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              4. Private or access(self)
            </h2>
            <h3>
              The declaration is only accessible/visible in the current and
              inner scopes.
            </h3>
            <h3>
              An element is made accessible by code in the same containing type
              by using the access(self) keyword.
            </h3>
            <h3>Summary is provided here</h3>
            <Code>
              <h3>{`// Access modifier  | Access scope`}</h3>
              <h3>{`priv / access(self)	Current and inner`}</h3>
              <h3>{`access(account)	    Current, inner, and other contracts in same account`}</h3>
              <h3>{`pub / access(all)	All`}</h3>
              <h3>{`access(contract)	Current, inner, and containing contract`}</h3>
              <h3>{``}</h3>
              <h3>{``}</h3>
              <h3>{`// Declare a private constant.`}</h3>
              <h3>{`access(self) let a = 1`}</h3>
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
