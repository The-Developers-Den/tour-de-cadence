import Footer from "@/components/Footer";
import LessonHeader from "@/components/LessonHeader";
import React from "react";

type LessonsProps = {
  children: React.ReactNode;
};

const Lessons = ({ children }: LessonsProps) => {
  return (
    <>
      <LessonHeader />
      {children}
      <Footer showStars={false} />
    </>
  );
};

export default Lessons;
