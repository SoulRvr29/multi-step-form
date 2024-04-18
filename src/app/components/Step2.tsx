"use client";
import React from "react";
import Image from "next/image";
import MainNav from "./MainNav";
import { Controller } from "react-hook-form";

type SelectPlanProps = {
  period?: string;
  setPeriod?: any;
  register: any;
  control: any;
  watch: any;
};
type PlanProps = {
  icon: any;
  name: string;
  price: string;
  period?: string;
  field: any;
  register: any;
  control: any;
  watch: any;
};

const Plan = ({ icon, name, price, field, watch }: PlanProps) => {
  return (
    <div
      onClick={() => {
        field.onChange(name);
      }}
      className={
        "flex flex-col max-md:flex-row max-md:justify-start max-md:gap-4 justify-between gap-10  border  rounded-md p-4 hover:border-PurplishBlue cursor-pointer " +
        (watch().plan === name ||
        (watch().plan === undefined && name === "Arcade")
          ? " bg-Magnolia border-PurplishBlue"
          : " border-LightGray")
      }
    >
      <Image src={icon} width={40} height={40} alt={name} />
      <div>
        <h3 className="font-[500] text-MarineBlue">{name}</h3>
        <p>{price}</p>
        {watch().period === "yearly" ? (
          <p className="text-MarineBlue text-xs">2 months free</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const SelectPlan = ({ period, control, register, watch }: SelectPlanProps) => {
  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <MainNav actual="select plan" />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="max-md:text-2xl">Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full max-md:grid-cols-1">
          <Controller
            name="plan"
            control={control}
            defaultValue="Arcade"
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  period={period}
                  icon="/icon-arcade.svg"
                  name="Arcade"
                  price={
                    watch().period === undefined || watch().period === "monthly"
                      ? "$9/mo"
                      : "$90/yr"
                  }
                  register={register}
                  control={control}
                  watch={watch}
                />
              </div>
            )}
          />{" "}
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  period={period}
                  icon="/icon-advanced.svg"
                  name="Advanced"
                  price={
                    watch().period === undefined || watch().period === "monthly"
                      ? "$12/mo"
                      : "$120/yr"
                  }
                  register={register}
                  control={control}
                  watch={watch}
                />
              </div>
            )}
          />{" "}
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  period={period}
                  icon="/icon-pro.svg"
                  name="Pro"
                  price={
                    watch().period === undefined || watch().period === "monthly"
                      ? "$15/mo"
                      : "$150/yr"
                  }
                  register={register}
                  control={control}
                  watch={watch}
                />
              </div>
            )}
          />
        </div>
        <div className="flex justify-center gap-6 w-full bg-Alabaster rounded-lg p-4">
          <div
            className={
              "text-CoolGray font-[500] " +
              (watch().period === "monthly" && " text-MarineBlue")
            }
          >
            Monthly
          </div>
          <Controller
            name="period"
            defaultValue="monthly"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  onChange={(e) => {
                    field.onChange(
                      e.target.value === "0" ? "monthly" : "yearly"
                    );
                  }}
                  className="bg-MarineBlue appearance-none w-10 rounded-full p-1 accent-Magnolia cursor-pointer"
                  type="range"
                  name="period"
                  id="period"
                  min="0"
                  max="1"
                  defaultValue={
                    !watch().period
                      ? "0"
                      : watch().period === "monthly"
                      ? "0"
                      : "1"
                  }
                />
              </div>
            )}
          />
          <div
            className={
              "text-CoolGray font-[500] " +
              (watch().period == "yearly" && " text-MarineBlue")
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
