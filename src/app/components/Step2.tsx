"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import MainNav from "./MainNav";
import { useFormContext } from "react-hook-form";

type PlanProps = {
  icon: any;
  name: string;
  price: string;
};

const Plan = ({ icon, name, price }: PlanProps) => {
  return (
    <div className="flex flex-col max-md:flex-row max-md:justify-start max-md:gap-4 justify-between gap-10  border border-LightGray rounded-md p-4 hover:border-PurplishBlue cursor-pointer">
      <Image src={icon} width={40} height={40} alt={name} />
      <div>
        <h3 className="font-[500] text-MarineBlue">{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

const SelectPlan = () => {
  const { register } = useFormContext();
  const [period, setPeriod] = useState(0);
  const [plan, setPlan] = useState("arcade");

  const handleClick = (plan: string) => {
    setPlan(plan);
    console.log(plan);
  };
  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <MainNav actual="select plan" />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="max-md:text-2xl">Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full max-md:grid-cols-1">
          <div className="grid" onClick={() => handleClick("arcade")}>
            <Plan icon="/icon-arcade.svg" name="Arcade" price="$9/mo" />
          </div>
          <div className="grid" onClick={() => handleClick("advanced")}>
            <Plan icon="/icon-advanced.svg" name="Advanced" price="$12/mo" />
          </div>
          <div className="grid" onClick={() => handleClick("pro")}>
            <Plan icon="/icon-pro.svg" name="Pro" price="$15/mo" />
          </div>
        </div>
        <div className="flex justify-center gap-6 w-full bg-Alabaster rounded-lg p-4">
          <div
            className={
              "text-CoolGray font-[500] " + (period == 0 && " text-MarineBlue")
            }
          >
            Monthly
          </div>
          <input
            {...register("period")}
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
      </div>
    </div>
  );
};

export default SelectPlan;