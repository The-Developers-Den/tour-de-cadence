import Footer from "@/components/Footer";
import React from "react";

type LessonsProps = {
  children: React.ReactNode;
};

const Lessons = ({ children }: LessonsProps) => {
  return (
    <div className="h-screen overflow-hidden">
      {children}
      <Footer showStars={false} />
    </div>
  );
};

export default Lessons;
