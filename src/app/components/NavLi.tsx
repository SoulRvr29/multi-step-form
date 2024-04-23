import React from "react";
import { animate, motion } from "framer-motion";

type NavLiProps = {
  actual: string;
  step: number;
  type: string;
};

const NavLi = ({ actual, step, type }: NavLiProps) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <motion.div
        animate={
          actual === type
            ? {
                boxShadow: [
                  "0px 0px 5px white",
                  "0px 0px 10px white",
                  "0px 0px 5px white",
                ],
              }
            : { scale: 1 }
        }
        transition={{ duration: 1, repeat: Infinity }}
        className={
          " border rounded-full size-8 flex justify-center items-center  " +
          (actual === type ? " bg-LightBlue text-MarineBlue" : " text-white")
        }
      >
        {step}
      </motion.div>

      <div className="max-md:hidden">
        <h2 className="uppercase font-[400] text-PastelBlue">step {step}</h2>
        <p className="uppercase text-white font-[500]">{type}</p>
      </div>
    </div>
  );
};

export default NavLi;
