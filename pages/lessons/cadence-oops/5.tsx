import Lessons from "@/util/lesson.config";
import React, { useState } from "react";
import LessonHeader from "@/components/LessonHeader";
import LessonHeading from "@/components/LessonHeading";
import LessonQuiz from "@/components/LessonQuiz";

const syntax = () => {
  const [code, setCode] = useState(`
// Example of a reference


// Declare a resource interface named HasCount,
//
resource interface HasCount {
    count: Int
}

resource Counter: HasCount {
    pub var count: Int

    pub init(count: Int) {
        self.count = count
    }

    pub fun increment() {
        self.count = self.count + 1
    }
}

// Create a new instance of the resource type Counter
// and create a reference to it, typed as &Counter,
// so the reference allows access to all fields and functions
// of the counter
//
let counter <- create Counter(count: 42)
let counterRef: &Counter = &counter as &Counter

counterRef.count  // is 42

counterRef.increment()

counterRef.count  // is 43

`);
  const ans = `
// No answer needed
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
      isActive: true,
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
              References
            </h2>
            <h3>References are copied, i.e. they are value types.</h3>
            <h3>
              References are created by using the & operator, followed by the
              object, the as keyword, and the type through which they should be
              accessed. The given type must be a supertype of the referenced
              object&apos; type.
            </h3>
            <h3>References may be authorized or unauthorized.</h3>
            <h3>
              Authorized references can be freely upcasted and downcasted,
              whereas unauthorized references can only be upcasted. Also,
              authorized references are subtypes of unauthorized references.
            </h3>
            <h3>
              References are ephemeral, i.e they cannot be stored. Instead,
              consider storing a capability and borrowing it when needed.
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
