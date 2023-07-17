import React, { useState } from "react";
import EditableCodeBlock from "./CodeBlock";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type LessonQuizProps = {
  quizCode: string;
  ansCode: string;
  handleQuizChange: (editor: unknown, data: unknown, value: string) => void;
};
const LessonQuiz = ({
  quizCode,
  ansCode,
  handleQuizChange,
}: LessonQuizProps) => {
  const [showAns, setShowAns] = useState<boolean>(false);
  const handleAnsChange = (editor: unknown, data: unknown, value: string) => {
    console.log(value);
  };
  return (
    <section className="flex flex-col">
      <EditableCodeBlock code={quizCode} handleCodeChange={handleQuizChange} />
      <button
        onClick={() => {
          setShowAns(!showAns);
        }}
        className="bg-[#0f192a] my-2 rounded-xl p-2 border-[#28192a] border-2 font-aber_bold transition-transform duration-300 hover:scale-95 w-fit flex justify-center items-center"
      >
        {showAns ? (
          <AiFillEyeInvisible size={22} className="my-auto mx-1" />
        ) : (
          <AiFillEye size={22} className="my-auto mx-1" />
        )}
        {showAns ? "Hide Answer" : "Show Answer"}
      </button>
      {showAns && (
        <EditableCodeBlock code={ansCode} handleCodeChange={handleAnsChange} />
      )}
    </section>
  );
};

export default LessonQuiz;
