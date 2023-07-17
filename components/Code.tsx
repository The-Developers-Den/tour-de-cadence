import React, { ReactNode } from "react";

const Code = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#282a36] rounded-xl p-3 my-2 font-code text-sm text-[#fff]/[0.9] leading-8 w-[90%]">
      {children}
    </div>
  );
};

export default Code;
