import React, { ReactNode } from "react";

export default function CenterContainer({ children }: { children: ReactNode }) {
  return <div className="max-w-[1100px] mx-auto pt-20 ">{children}</div>;
}
