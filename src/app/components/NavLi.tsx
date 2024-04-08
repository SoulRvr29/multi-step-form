import React from "react";

type NavLiProps = {
  step: number;
  type: string;
};

const NavLi = ({ step, type }: NavLiProps) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <button className="text-white border rounded-full size-8">{step}</button>
      <div>
        <h2 className="uppercase text-sm text-CoolGray">step {step}</h2>
        <p className="uppercase text-white font-[500]">{type}</p>
      </div>
    </div>
  );
};

export default NavLi;
