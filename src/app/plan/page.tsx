"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type PlanProps = {
  icon: string;
  name: string;
  price: string;
};

export const Plan = ({ icon, name, price }: PlanProps) => {
  return (
    <div className="flex flex-col justify-between gap-10 border border-LightGray rounded-md p-4  ">
      <Image src={icon} width={40} height={40} alt={name} />
      <div>
        <h3 className="font-[500] text-MarineBlue">{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

const SelectPlan = () => {
  const [period, setPeriod] = useState(0);
  return (
    <div className="flex flex-col gap-10 h-full justify-between">
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <Plan icon="/icon-arcade.svg" name="Arcade" price="$9/mo" />
        <Plan icon="/icon-advanced.svg" name="Advanced" price="$12/mo" />
        <Plan icon="/icon-pro.svg" name="Pro" price="$15/mo" />
      </div>
      <div className="flex justify-center gap-4 w-full bg-Alabaster rounded-lg p-4">
        <div
          className={
            "text-CoolGray font-[500] " + (period == 0 && " text-MarineBlue")
          }
        >
          Monthly
        </div>
        <input
          className="bg-MarineBlue appearance-none w-10 rounded-full p-1 accent-Magnolia cursor-pointer"
          type="range"
          name="period"
          id="period"
          min="0"
          max="1"
          defaultValue="0"
          onChange={(e) => {
            setPeriod(Number(e.target.value));
          }}
        />
        <div
          className={
            "text-CoolGray font-[500] " + (period == 1 && " text-MarineBlue")
          }
        >
          Yearly
        </div>
      </div>
      <div className="w-full flex justify-between items-center ">
        <Link href="/" className="text-CoolGray">
          Go Back
        </Link>
        <Link
          className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md"
          href="/addons"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default SelectPlan;
