import React, { ReactNode } from "react";

export default function CenterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto pt-20 pl-[5.4rem] pr-8 lg:px-[6.5rem] ">
      {children}
    </div>
  );
}
