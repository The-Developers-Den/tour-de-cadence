import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import Code from "@/components/Code";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
  // Guess the outputs of -

  // case 1

  let dictionary = {"one": 1, "two": 2}
  for key in dictionary.keys {
      let value = dictionary[key]!
      log(key)
      log(value)
  }

  // case 2

  if a == 1 {
    b = 1
  } else {
     if a == 0 {
         b = 2
     }
  }
 

  // case 3

  var i = 0
var x = 0
while i < 10 {
    i = i + 1
    if i < 3 {
        continue
    }
    x = x + 1
}
  
 



  `);
  const ans = `
  // Output

  // case 1

  let dictionary = {"one": 1, "two": 2}
  for key in dictionary.keys {
      let value = dictionary[key]!
      log(key)
      log(value)
  }

  // The loop would log:
  // "one"
  // 1
  // "two"
  // 2

 // case 2

 if a == 1 {
    b = 1
 } else {
     if a == 0 {
         b = 2
     }
 }
 
 // b is 2

  // case 3

  var i = 0
  var x = 0
  while i < 10 {
    i = i + 1
    if i < 3 {
        continue
    }
    x = x + 1
  }

  // x is 8

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
      isActive: true,
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
              1. Conditional branching: if-statement
            </h2>
            <h3>
              The if-statement starts with the if keyword, followed by the
              condition, and the code that should be executed if the condition
              is true inside opening and closing braces. The condition
              expression must be boolean. The braces are required and not
              optional. Parentheses around the condition are optional.
            </h3>
            <Code>
              <h3>{`let a = 0`}</h3>
              <h3>{`if a == 0 {  // Parentheses around the condition are optional`}</h3>
              <h3>{`b = 1`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h3>
              An additional, optional else-clause can be added to execute
              another piece of code when the condition is false. The else-clause
              is introduced by the else keyword followed by braces that contain
              the code that should be executed.
            </h3>
            <h3>
              The else-clause can contain another if-statement, i.e.,
              if-statements can be chained together. In this case the braces can
              be omitted.
            </h3>
            <Code>
              <h3>{`let a = 0`}</h3>
              <h3>{`var a = 0`}</h3>
              <h3>{`if a == 1 {`}</h3>
              <h3>{`   b = 1`}</h3>
              <h3>{`} else if a == 2 {`}</h3>
              <h3>{`   b = 2`}</h3>
              <h3>{`} else {`}</h3>
              <h3>{`   b = 3`}</h3>
              <h3>{`}`}</h3>
              <h3>{`// b is 3`}</h3>
            </Code>

            <h2 className="text-lg font-bold font-aber_bold my-2 mt-3">
              1.2 Optional Binding
            </h2>
            <h3>
              Optional bindings are declared using the if keyword like an
              if-statement, but instead of the boolean test value, it is
              followed by the let or var keywords, to either introduce a
              constant or variable, followed by a name, the equal sign (=), and
              the optional value.
            </h3>
            <Code>
              <h3>{`let maybeNumber: Int? = 1`}</h3>
              <h3>{`if let number = maybeNumber {`}</h3>
              <h3>{`// This branch is executed as maybeNumber is not nil`}</h3>
              <h3>{`} else {`}</h3>
              <h3>{`// This branch is *not* executed as maybeNumber is not nil`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Switch
            </h2>

            <h3>
              The switch-statement starts with the switch keyword, followed by
              the tested value, followed by the cases inside opening and closing
              braces. The test expression must be equatable. The braces are
              required and not optional.
            </h3>
            <h3>
              Each case is a separate branch of code execution and starts with
              the case keyword, followed by a possible value, a colon (:), and
              the block of code that should be executed if the case&apos;s value
              is equal to the tested value.
            </h3>
            <h3>
              An optional default case may be given by using the default
              keyword. The block of code of the default case is executed when
              none of the previous case tests succeeded. It must always appear
              last.
            </h3>
            <Code>
              <h3>{`fun word(_ n: Int): String {`}</h3>
              <h3>{`// Test the value of the parameter n`}</h3>
              <h3>{`switch n { `}</h3>
              <h3>{`    case 1:`}</h3>
              <h3>{`      // If the value of variable n is equal to 1,`}</h3>
              <h3>{`      // then return the string "one"`}</h3>
              <h3>{`      return "one"`}</h3>
              <h3>{`    case 2:`}</h3>
              <h3>{`      // If the value of variable n is equal to 2,`}</h3>
              <h3>{`      // then return the string "two"`}</h3>
              <h3>{`      return "two"`}</h3>
              <h3>{`    default:`}</h3>
              <h3>{`      // If the value of variable n is neither equal to 1 nor to 2,`}</h3>
              <h3>{`      // then return the string "other"`}</h3>
              <h3>{`      return "other"`}</h3>
              <h3>{`}`}</h3>
              <h3>{`}`}</h3>
              <h3>{``}</h3>
              <h3>{`word(1)  // returns "one"`}</h3>
              <h3>{`word(2)  // returns "two"`}</h3>
              <h3>{`word(3)  // returns "other"`}</h3>
              <h3>{`word(4)  // returns "other"`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3. Looping
            </h2>
            <h3>3.1 while-statement</h3>
            <h3>
              The while-statement starts with the while keyword, followed by the
              condition, and the code that should be repeatedly executed if the
              condition is true inside opening and closing braces. The condition
              must be boolean and the braces are required.
            </h3>
            <h3>
              The while-statement will first evaluate the condition. If it is
              true, the piece of code is executed and the evaluation of the
              condition is repeated. If the condition is false, the piece of
              code is not executed and the execution of the whole
              while-statement is finished. Thus, the piece of code is executed
              zero or more times.
            </h3>
            <Code>
              <h3>{`var a = 0`}</h3>
              <h3>{`while a < 5 {`}</h3>
              <h3>{`    a = a + 1`}</h3>
              <h3>{`}`}</h3>
              <h3>{`// a is 5`}</h3>
            </Code>
            <h3>3.2 For-in statement</h3>
            <h3>
              The for-in statement starts with the for keyword, followed by the
              name of the element that is used in each iteration of the loop,
              followed by the in keyword, and then followed by the array that is
              being iterated through in the loop.
            </h3>
            <h3>
              If there are no elements in the data structure, the code in the
              loop will not be executed at all. Otherwise, the code will execute
              as many times as there are elements in the array.
            </h3>
            <Code>
              <h3>{`let array = ["Hello", "World", "Foo", "Bar"]`}</h3>
              <h3>{`for index, element in array {`}</h3>
              <h3>{`    log(index)`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h3>3.3 continue and break</h3>
            <h3>
              In for-loops and while-loops, the continue statement can be used
              to stop the current iteration of a loop and start the next
              iteration.
            </h3>
            <h3>
              The break statement can be used to stop the execution of a
              for-loop or a while-loop.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Immediate function return: return-statement
            </h2>
            <h3>
              The return-statement causes a function to return immediately,
              i.e., any code after the return-statement is not executed. The
              return-statement starts with the return keyword and is followed by
              an optional expression that should be the return value of the
              function call.
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
