import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Answer the following -

  // q1

  let x = 10

  fun f(): Int {
     return x
  }
  
  fun g(): Int {
     let x = 20
     return f()
  }
  
  // q2

  // Declare a function named tripple which multiples a number by three.

  //  q3

  // Declare a function named send, which transfers an amount
  // from one account to another.

  `);
  const ans = `
  // Output

  // q1

  let x = 10

fun f(): Int {
   return x
}

fun g(): Int {
   let x = 20
   return f()
}

g()  // is 10, not 20 as scope is lexical


 // q2

 fun tripple(_ x: Int): Int {
    return x * 3
}

  // q3

  fun send(from senderAddress: Address, to receivingAddress: Address, amount: Int) {
    // The function code is omitted for brevity.
    // ...
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
      isActive: true,
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
              1. Functions
            </h2>
            <h3>
              Functions are sequences of statements that perform a specific
              task. Functions have parameters (inputs) and an optional return
              value (output). Functions are typed: the function type consists of
              the parameter types and the return type.
            </h3>
            <h3>
              Functions are values, i.e., they can be assigned to constants and
              variables, and can be passed as arguments to other functions. This
              behavior is often called first-class functions.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1.1 Declarations
            </h2>

            <h3>
              Functions can be declared by using the fun keyword, followed by
              the name of the declaration, the parameters, the optional return
              type, and the code that should be executed when the function is
              called.
            </h3>
            <h3>
              The parameters need to be enclosed in parentheses. The return
              type, if any, is separated from the parameters by a colon (:). The
              function code needs to be enclosed in opening and closing braces.
            </h3>
            <h3>
              Argument labels precede the parameter name. The special argument
              label _ indicates that a function call can omit the argument
              label. If no argument label is declared in the function
              declaration, the parameter name is the argument label of the
              function declaration, and function calls must use the parameter
              name as the argument label.
            </h3>
            <h3>
              There is no support for optional parameters, i.e. default values
              for parameters, and variadic functions, i.e. functions that take
              an arbitrary amount of arguments.
            </h3>
            <Code>
              <h3>{`fun double(_ x: Int): Int {`}</h3>
              <h3>{`   return x * 2`}</h3>
              <h3>{`}`}</h3>
              <h3>{`double(2)  // is 4`}</h3>
            </Code>
            <h3>
              The order of the arguments in a function call must match the order
              of the parameters in the function declaration.
            </h3>
            <h3>Functions do not support overloading.</h3>
            <Code>
              <h3>{`fun test(first: Int, second: Int) {`}</h3>
              <h3>{`   // ...`}</h3>
              <h3>{`}`}</h3>
              <h3>{`// Invalid: the arguments are provided in the wrong order`}</h3>
              <h3>{`test(second: 1, first: 2)`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1.2 Expressions
            </h2>
            <h3>
              Functions can be also used as expressions. The syntax is the same
              as for function declarations, except that function expressions
              have no name, i.e., they are anonymous.
            </h3>
            <Code>
              <h3>{`let double =`}</h3>
              <h3>{`fun (_ x: Int): Int {`}</h3>
              <h3>{`   return x * 2`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1.3 Calls
            </h2>
            <h3>
              Functions can be called (invoked). Function calls need to provide
              exactly as many argument values as the function has parameters.
            </h3>
            <Code>
              <h3>{`fun double(_ x: Int): Int {`}</h3>
              <h3>{`   return x * 2`}</h3>
              <h3>{`}`}</h3>
              <h3>{`double(2)  // is 4`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Closures
            </h2>
            <h3>
              A function may refer to variables and constants of its outer
              scopes in which it is defined. It is called a closure, because it
              is closing over those variables and constants. A closure can read
              from the variables and constants and assign to the variables it
              refers to.
            </h3>
            <Code>
              <h3>{`// Declare a function named makeCounter which returns a function that`}</h3>
              <h3>{`// each time when called, returns the next integer, starting at 1.`}</h3>
              <h3>{`fun makeCounter(): ((): Int) {`}</h3>
              <h3>{`    var count = 0`}</h3>
              <h3>{`    return fun (): Int {`}</h3>
              <h3>{`        count = count + 1`}</h3>
              <h3>{`        return count`}</h3>
              <h3>{`  }`}</h3>
              <h3>{`}`}</h3>
              <h3>{``}</h3>
              <h3>{`let test = makeCounter()`}</h3>
              <h3>{`test()  // is 1`}</h3>
              <h3>{`test()  // is 2`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. Function Preconditions and Postconditions
            </h2>
            <h3>
              Preconditions must be true right before the execution of the
              function. Preconditions are part of the function and introduced by
              the pre keyword, followed by the condition block.
            </h3>
            <h3>
              Postconditions must be true right after the execution of the
              function. Postconditions are part of the function and introduced
              by the post keyword, followed by the condition block.
              Postconditions may only occur after preconditions, if any.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              4. Scope
            </h2>
            <h3>
              Every function and block {`({ ... })`} introduces a new scope for
              declarations. Each function and block can refer to declarations in
              its scope or any of the outer scopes.
            </h3>
            <Code>
              <h3>{`let x = 10`}</h3>
              <h3>{``}</h3>
              <h3>{`fun f(): Int {`}</h3>
              <h3>{`    let y = 10`}</h3>
              <h3>{`    return x + y`}</h3>
              <h3>{`}`}</h3>
              <h3>{``}</h3>
              <h3>{`f()  // is 20`}</h3>
              <h3>{``}</h3>
              <h3>{`// Invalid: the identifier y is not in scope.`}</h3>
              <h3>{`y`}</h3>
            </Code>
            <h3>
              Each scope can introduce new declarations, i.e., the outer
              declaration is shadowed.
            </h3>
            <h3>Scope is lexical, not dynamic.</h3>
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
