import React from "react";

type NavLiProps = {
  actual: string;
  step: number;
  type: string;
};

const NavLi = ({ actual, step, type }: NavLiProps) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <div
        className={
          " border rounded-full size-8 flex justify-center items-center " +
          (actual === type ? " bg-LightBlue text-MarineBlue" : " text-white")
        }
      >
        {step}
      </div>

      <div className="max-md:hidden">
        <h2 className="uppercase  text-CoolGray">step {step}</h2>
        <p className="uppercase text-white font-[500]">{type}</p>
      </div>
    </div>
  );
};

export default NavLi;
