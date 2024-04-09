import React from "react";
import Link from "next/link";

type NavLiProps = {
  step: number;
  type: string;
  href: string;
};

const NavLi = ({ step, type, href }: NavLiProps) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <Link href={href}>
        <button className="text-white border rounded-full size-8">
          {step}
        </button>
      </Link>
      <div>
        <h2 className="uppercase  text-CoolGray">step {step}</h2>
        <p className="uppercase text-white font-[500]">{type}</p>
      </div>
    </div>
  );
};

export default NavLi;
