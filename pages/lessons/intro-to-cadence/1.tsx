import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Lessons from "@/util/lesson.config";
import CodeDifference from "@/components/Test";
import React from "react";
import EditableCodeBlock from "@/components/CodeBlock";

const syntax = () => {
  const userCode = "const b =10; print(a); hellow world";
  const answerCode = "const a =10; print(a)";

  return (
    <Lessons>
      <div className="w-screen min-h-screen p-5 flex mt-20">
        <section className="basis-[55%] overflow-y-scroll">
          <h1 className="text-4xl font-bold font-aber_bold">
            Chapter 1:Introduction to Cadence
          </h1>
          <h3>
            Cadence is a new smart contract programming language for use on the
            Flow Blockchain. Cadence introduces new features to smart contract
            programming that help developers ensure that their code is safe,
            secure, clear, and approachable.
          </h3>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            wrapLongLines
          >
            a+b =10
          </SyntaxHighlighter>

          <CodeDifference userCode={userCode} answerCode={answerCode} />
        </section>

        <section className="basis-[45%]">
          <EditableCodeBlock />
        </section>
      </div>
    </Lessons>
  );
};

export default syntax;
