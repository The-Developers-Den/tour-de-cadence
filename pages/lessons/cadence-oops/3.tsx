import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";
import Code from "@/components/Code";

const syntax = () => {
  const [code, setCode] = useState(`
// Answer the following questions
    
// q1 - Declare a struct interface OuterBox, which declares a default function doubleValue.
// The function doubleValue takes in a variable of type Int and returns 2 * value.
    
// code here
    
// q2 - Declare a resource interface OuterBoxInterface, which declares
// a nested structure interface named InnerBoxInterface
    
// code here
`);
  const ans = `
// q1
    
struct interface Container {
    
    let items: [AnyStruct]
    let newList: [AnyStruct]
    
    fun doubleValue(): [AnyStruct] {
        for element in self.items {
            self.newList.append(element)
        }
        return self.newList
    }
}
    
// q2
    
resource interface OuterInterface {
    struct interface InnerInterface {}
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
      link: "/lessons/cadence-oops/1",
      isActive: false,
    },

    {
      title: "Cadence OOPs Mastery: Access Control",
      link: "/lessons/cadence-oops/2",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Interface",
      link: "/lessons/cadence-oops/3",
      isActive: true,
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

          <section className="font-raleway leading-9">
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              Interfaces
            </h2>
            <h3>
              An interface is an abstract type that specifies the behavior of
              types that implement the interface. Interfaces declare the
              required functions and fields, the access control for those
              declarations, and preconditions and postconditions that
              implementing types need to provide.
            </h3>

            <h3>There are three kinds of interfaces:</h3>
            <h3>Structure interfaces: implemented by structures</h3>
            <h3>Resource interfaces: implemented by resources</h3>
            <h3>Contract interfaces: implemented by contracts</h3>
            <h3>In Flow and Cadence, there are two types of access control:</h3>
            <h3>There is no support for event and enum interfaces.</h3>
            <h3>
              Calling functions with preconditions and postconditions on
              interfaces instead of concrete implementations can improve the
              security of a program, as it ensures that even if implementations
              change, some aspects of them will always hold.
            </h3>

            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              1. Declaration
            </h2>
            <h3>
              Interfaces are declared using the struct, resource, or contract
              keyword, followed by the interface keyword, the name of the
              interface, and the requirements, which must be enclosed in opening
              and closing braces.
            </h3>
            <h3>
              Neither the `var` keyword, nor the `let` keyword is used, so the
              field may be implemented as either a variable or as a constant
              field.
            </h3>
            <Code>
              <h3>{`pub resource interface FungibleToken {`}</h3>
              <h3>{`    init(balance: Int) {`}</h3>
              <h3>{`        pre {`}</h3>
              <h3>{`            balance >= 0:`}</h3>
              <h3>{`                "Balances are always non-negative"`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`}`}</h3>
              <h3>{``}</h3>
              <h3>{`pub fun deposit(_ token: @{FungibleToken}) {`}</h3>
              <h3>{`    post {`}</h3>
              <h3>{`        self.balance == before(self.balance) + token.balance:`}</h3>
              <h3>{`            "the amount must be added to the balance"`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              2. Implementation
            </h2>

            <h3>
              Declaring that a type implements (conforms) to an interface is
              done in the type declaration of the composite type (e.g.,
              structure, resource): The kind and the name of the composite type
              is followed by a colon (:) and the name of one or more interfaces
              that the composite type implements.
            </h3>
            <h3>
              The field declarations in the implementing type must match the
              field requirements in the interface in terms of name, type, and
              declaration kind (e.g. constant, variable) if given. For example,
              an interface may require a field with a certain name and type, but
              leaves it to the implementation what kind the field is.
            </h3>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              3.Interfaces in Types
            </h2>
            <h3>
              Interfaces can be used in types: The type {`{I}`} is the type of
              all objects that implement the interface I.
            </h3>
            <Code>
              <h3>{`pub struct interface Shape {`}</h3>
              <h3>{`    pub fun getArea(): Int`}</h3>
              <h3>{`    pub fun scale(factor: Int)`}</h3>
              <h3>{`}`}</h3>
              <h3>{`pub struct Rectangle: Shape {`}</h3>
              <h3>{`    pub var width: Int`}</h3>
              <h3>{`    pub var height: Int`}</h3>
              <h3>{`    pub init(width: Int, height: Int) {`}</h3>
              <h3>{`        self.width = width`}</h3>
              <h3>{`        self.height = height`}</h3>
              <h3>{`    }`}</h3>
              <h3>{`}`}</h3>
            </Code>
            <h2 className="text-xl font-bold font-aber_bold my-2 mt-3">
              4.Interface Default Functions
            </h2>
            <h3>
              Interfaces can provide default functions: If the concrete type
              implementing the interface does not provide an implementation for
              the function required by the interface, then the interface&apos;s
              default function is used in the implementation.
            </h3>
            <h3>
              Interfaces cannot provide default initializers or default
              destructors. Only one conformance may provide a default function.
            </h3>
            <Code>
              <h3>{`struct interface Container {`}</h3>
              <h3>{`    let items: [AnyStruct]`}</h3>
              <h3>{`    fun getCount(): Int {`}</h3>
              <h3>{`        return self.items.length`}</h3>
              <h3>{`    }`}</h3>
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
