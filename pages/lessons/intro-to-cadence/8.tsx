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

  let y = 1 > 2 ? nil : 3

  // case 2

  a <-> b <-> c

  // case 3

  let someBits = 4  
  let shiftedBits = someBits << 2   
  
  // case 4

  "" >= ""

  // case 5

  let a = 1
  let b = a ?? 2

  `);
  const ans = `
  // Output

  // case 1

  let y = 1 > 2 ? nil : 3
  // y is 3 and has type Int?

 // case 2

  a <-> b <-> c // invalid: cannot be assigned to an expression

  // case 3

  let someBits = 4  // is 0b00000100
  let shiftedBits = someBits << 2   // is 0b00010000
  
  // case 4

  "" >= ""      // is true

  // case 5 
  // Invalid: nil-coalescing operator is applied to a value which has a non-optional type
  // (a has the non-optional type Int).

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
      isActive: true,
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
            <h3>
              Operators are special symbols that perform a computation for one
              or more values. They are either unary (perform an operation for a
              single value), binary (operate on two values.), or ternary
              (operate on two values.)
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Types of Operators
            </h2>

            <h3 className="text-xl my-2">1. Assignment Operator (=)</h3>
            <h3>
              The binary assignment operator = can be used to assign a new value
              to a variable.
            </h3>
            <h3>
              It is only allowed in a statement and is not allowed in
              expressions.
            </h3>
            <Code>
              <h3>{`var a = 1.`}</h3>
              <h3>{`let numbers = [1, 2]`}</h3>
              <h3>{`let arrays = [[1, 2], [3, 4]]`}</h3>
              <h3>{`// Invalid: The assignment operation cannot be used in an expression.`}</h3>
              <h3>{`a = b = c`}</h3>
            </Code>
            <h3 className="text-xl my-2">
              2. Force-assignment operator {`(<-!)`}
            </h3>
            <h3>
              It assigns a resource-typed value to an optional-typed variable if
              the variable is nil. If the variable being assigned to is non-nil,
              the execution of the program aborts.
            </h3>
            <h3>
              The force-assignment operator is only used for resource types.
            </h3>
            <Code>
              <h3>{`// Declare a variable named b.`}</h3>
              <h3>{`var b = 1`}</h3>
              <h3>{`b = 2 // valid: assigning new value.`}</h3>
            </Code>
            <h3 className="text-xl my-2">3. Swapping Operator {`(<->)`}</h3>
            <h3>
              It is used to exchange the values of two variables. It is only
              allowed in a statement and is not allowed in expressions.
            </h3>
            <h3>
              Both sides of the swap operation must be variable, assignment to
              constants is invalid.
            </h3>
            <Code>
              <h3>{`var a = 2`}</h3>
              <h3>{`var b = 1`}</h3>
              <h3>{`a <-> b `}</h3>
              <h3>{`b = 2 // valid: assigning new value.`}</h3>
              <h3>{`let a = 2`}</h3>
              <h3>{`var b = 1`}</h3>
              <h3>{`a <-> b // invalid: cannot aiign to constant`}</h3>
            </Code>
            <h3 className="text-xl my-2">3. Arithmetic Operators</h3>

            <h3>3.1 The unary pefix operator - negates an integer</h3>
            <Code>
              <h3>{`let a = 10`}</h3>
              <h3>{`-a  // is -10`}</h3>
            </Code>
            <h3>3.2 Binary arithmetic operators:</h3>
            <h3>
              The arguments for the operators need to be of the same type. The
              result is always the same type as the arguments.
            </h3>

            <Code>
              <h3>{`let a = 1 + 2   //Addition`}</h3>
              <h3>{`a  // is 3`}</h3>
              <h3>{`let b = 3 - 2   //Subtraction`}</h3>
              <h3>{`b  // is 1`}</h3>
              <h3>{`let c = 1 * 2   //Multiplication`}</h3>
              <h3>{`c  // is 3`}</h3>
              <h3>{`let d = 6 / 3   //Division`}</h3>
              <h3>{`d  // is 2`}</h3>
              <h3>{`let e =  3 % 6   //Remainder`}</h3>
              <h3>{`e  // is 0`}</h3>
            </Code>
            <h3>
              Arithmetic operations on the signed integer types Int8, Int16,
              Int32, Int64, Int128, Int256, and on the unsigned integer types
              UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, do not cause
              values to overflow or underflow.
            </h3>
            <Code>
              <h3>{`let a: UInt8 = 255`}</h3>
              <h3>{`let b = a + 1  // Run-time error: The result 256 does not fit in the range of UInt8`}</h3>
              <h3>{`let a: UInt8 = -128`}</h3>
              <h3>{`let b = -a  // Run-time error: The result 128 does not fit in the range of UInt8`}</h3>
            </Code>
            <h3>
              Arithmetic operations on the unsigned integer types Word8, Word16,
              Word32, Word64 may cause values to overflow or underflow.
            </h3>
            <Code>
              <h3>{`let a: Word8 = 255`}</h3>
              <h3>{`a + 1 // is 0 `}</h3>
              <h3>{`//    11111111 = 255`}</h3>
              <h3>{`// +         1`}</h3>
              <h3>{`// = 100000000 = 0`}</h3>
            </Code>
            <h3>
              Arithmetic operators are not supported for number supertypes
              (Number, SignedNumber, FixedPoint, SignedFixedPoint, Integer,
              SignedInteger), as they may or may not succeed at run-time.
            </h3>
            <h3>
              Values of these types need to be cast to the desired type before
              performing the arithmetic operation.
            </h3>
            <Code>
              <h3>{`let x: Integer = 3 as Int8`}</h3>
              <h3>{`let y: Integer = 4 as Int8`}</h3>
              <h3>{`let z: Integer = x + y    // Static error`}</h3>
              <h3>{`let z: Integer = (x as! Int8) + (y as! Int8)`}</h3>
            </Code>

            <h3 className="text-xl my-2">4. Logical Operators</h3>
            <h3>4.1 Logical NOT: !</h3>
            <h3>This unary prefix operator logically negates a boolean:</h3>
            <Code>
              <h3>{`let good = true`}</h3>
              <h3>{`!good  // is false`}</h3>
            </Code>
            <h3>4.1 Logical AND: &&</h3>
            <h3>
              If the left-hand side is false, the right-hand side is not
              evaluated.
            </h3>
            <Code>
              <h3>{`true && true  // is true`}</h3>
              <h3>{`true && false  // is false`}</h3>
            </Code>
            <h3>4.1 Logical OR: ||</h3>
            <h3>
              If the left-hand side is true, the right-hand side is not
              evaluated
            </h3>
            <Code>
              <h3>{`true || true  // is true`}</h3>
              <h3>{`false || false  // is false`}</h3>
            </Code>

            <h3 className="text-xl my-2">5. Comparison Operators</h3>
            <h3>5.1 Equality: == </h3>
            <h3>
              Supported for booleans, numbers, addresses, strings, characters,
              enums, paths, Type values, references, and Void values (()).
              Variable-sized arrays, fixed-size arrays, dictionaries, and
              optionals also support equality tests if their inner types do.
              Both sides of the equality operator may be optional, even of
              different levels, so it is for example possible to compare a
              non-optional with a double-optional (??).
            </h3>
            <Code>
              <h3>{`1 == 1  // is true`}</h3>
              <h3>{`let x: Int? = 1`}</h3>
              <h3>{`x == nil  // is false`}</h3>
            </Code>
            <h3>5.2 Inequality: != </h3>
            <h3>
              It is supported for booleans, numbers, addresses, strings,
              characters, enums, paths, Type values, references, and Void values
              (()). Variable-sized arrays, fixed-size arrays, dictionaries, and
              optionals also support inequality tests if their inner types do.
              Both sides of the inequality operator may be optional, even of
              different levels, so it is for example possible to compare a
              non-optional with a double-optional (??).
            </h3>
            <Code>
              <h3>{`1 != 2  // is true`}</h3>
              <h3>{`let d1 = {"abc": 1, "def": 2}`}</h3>
              <h3>{`let d1 = {"abc": 1, "def": 22}`}</h3>
              <h3>{`d1 != d2 // is true`}</h3>
            </Code>
            <h3>5.3 Less than: {`<`}</h3>
            <h3>Used for integers, booleans, characters and strings</h3>
            <Code>
              <h3>{`1 < 1  // is false`}</h3>
              <h3>{`"" < "a"    // is true`}</h3>
            </Code>
            <h3>5.4 Less or equal than: {`<=`}</h3>
            <h3>Used for integers, booleans, characters and strings</h3>
            <Code>
              <h3>{`true <= true  // is true`}</h3>
              <h3>{`2 <= 1  // is false`}</h3>
            </Code>
            <h3>5.4 Greater than: {`>`}</h3>
            <h3>Used for integers, booleans, characters and strings</h3>
            <Code>
              <h3>{`1 > 1  // is true`}</h3>
              <h3>{`"" > "a"    // is false`}</h3>
            </Code>
            <h3>5.4 Greater or equal than: {`>=`}</h3>
            <h3>Used for integers, booleans, characters and strings</h3>
            <Code>
              <h3>{`true >= true  // is true`}</h3>
              <h3>{`2 >= 1  // is true`}</h3>
            </Code>

            <h3 className="text-xl my-2">6. Bitwise Operators</h3>
            <h3>6.1 Bitwise AND: &</h3>
            <h3>
              Returns a new integer whose bits are 1 only if the bits were 1 in
              both input integers:
            </h3>
            <Code>
              <h3>{`let firstFiveBits = 0b11111000`}</h3>
              <h3>{`let lastFiveBits  = 0b00011111`}</h3>
              <h3>{`let middleTwoBits = firstFiveBits & lastFiveBits  // is 0b00011000`}</h3>
            </Code>
            <h3>6.2 Bitwise OR: |</h3>
            <h3>
              Returns a new integer whose bits are 1 only if the bits were 1 in
              either input integers:
            </h3>
            <Code>
              <h3>{`let firstFiveBits = 0b11111000`}</h3>
              <h3>{`let lastFiveBits  = 0b00011111`}</h3>
              <h3>{`let combinedbits = someBits | moreBits  // is 0b11111110`}</h3>
            </Code>
            <h3>6.2 Bitwise XOR: ^</h3>
            <h3>
              Returns a new integer whose bits are 1 where the input bits are
              different, and are 0 where the input bits are the same:
            </h3>
            <Code>
              <h3>{`let firstFiveBits = 0b11111000`}</h3>
              <h3>{`let lastFiveBits  = 0b00011111`}</h3>
              <h3>{`let outputBits = firstBits ^ otherBits  // is 0b00010001`}</h3>
            </Code>

            <h3 className="text-xl my-2">6. Ternary Conditional Operator</h3>
            <h3>
              There is only one ternary conditional operator, the ternary
              conditional operator (a ? b : c).
            </h3>
            <h3>
              It behaves like an if-statement, but is an expression: If the
              first operator value is true, the second operator value is
              returned. If the first operator value is false, the third value is
              returned.
            </h3>
            <Code>
              <h3>{`let x = 1 > 2 ? 3 : 4`}</h3>
              <h3>{`// x is 4 and has type Int`}</h3>
            </Code>
            <h3 className="text-xl my-2">7. Optional Operators</h3>
            <h3>7.1 Nil-Coalescing Operator (??)</h3>
            <h3>
              The nil-coalescing operator ?? returns the value inside an
              optional if it contains a value, or returns an alternative value
              if the optional has no value, i.e., the optional value is nil.
            </h3>
            <h3>
              The nil-coalescing operator can only be applied to values which
              have an optional type.
            </h3>
            <h3>
              The type of the right-hand side of the operator (the alternative
              value) must be a subtype of the type of left-hand side, i.e. the
              right-hand side of the operator must be the non-optional or
              optional type matching the type of the left-hand side.
            </h3>
            <Code>
              <h3>{`let a: Int? = nil`}</h3>
              <h3>{`let b: Int = a ?? 42`}</h3>
              <h3>{`// b is 42, as a is nil`}</h3>
            </Code>

            <section className="text-center bg-[#ffe11e70] rounded-xl py-3 px-5 w-[90%]">
              <h2 className="text-xl font-bold font-aber_bold my-2 mt-3 text-left">
                Precedence and Associativity
              </h2>
              <h3 className="text-left">
                Operators have the following precedences, highest to lowest:
              </h3>

              <h3>Unary precedence:{` -, !, <- `}</h3>
              <h3>Cast precedence: as, as?, as!</h3>
              <h3>Multiplication precedence: *, /, %</h3>
              <h3>Addition precedence: +, -</h3>
              <h3>Bitwise shift precedence: {`<<, >>`}</h3>
              <h3>Bitwise conjunction precedence: &</h3>
              <h3>Bitwise exclusive disjunction precedence: ^</h3>
              <h3>Bitwise disjunction precedence: |</h3>
              <h3>Nil-Coalescing precedence: ??</h3>
              <h3>Relational precedence: {`<, <=, >, >=`}</h3>
              <h3>Equality precedence: ==, !=</h3>
              <h3>Logical conjunction precedence: &&</h3>
              <h3>Logical disjunction precedence: ||</h3>
              <h3>Ternary precedence: ? :</h3>
              <h3 className="text-left">
                All operators are left-associative, except for the following
                operators which are right-associative:
              </h3>
              <h3>Ternary operator</h3>
              <h3>Nil-coalescing operator</h3>
            </section>
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
