import React from "react";
import Link from "next/link";

type NavLiProps = {
  actual: string;
  step: number;
  type: string;
  href: string;
};

const NavLi = ({ actual, step, type, href }: NavLiProps) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <Link href={href}>
        <button
          className={
            " border rounded-full size-8 " +
            (actual === type ? " bg-LightBlue text-MarineBlue" : " text-white")
          }
        >
          {step}
        </button>
      </Link>
      <div className="max-md:hidden">
        <h2 className="uppercase  text-CoolGray">step {step}</h2>
        <p className="uppercase text-white font-[500]">{type}</p>
      </div>
    </div>
  );
};

export default NavLi;
