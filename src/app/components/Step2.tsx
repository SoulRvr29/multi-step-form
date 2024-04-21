import React from "react";
import Image from "next/image";
import MainNav from "./MainNav";
import { Controller } from "react-hook-form";

const Plan = ({ icon, name, field, getValues, prices }: any) => {
  return (
    <div
      onClick={() => {
        field.onChange({ name: name, prices });
      }}
      className={
        "flex flex-col max-md:flex-row max-md:justify-start max-md:gap-4 justify-between gap-10  border  rounded-md p-4 hover:border-PurplishBlue cursor-pointer " +
        (getValues().plan.name === name
          ? " bg-Magnolia border-PurplishBlue"
          : " border-LightGray")
      }
    >
      <Image src={icon} width={40} height={40} alt={name} />
      <div>
        <h3 className="font-[500] text-MarineBlue">{name}</h3>
        <p>
          {getValues().period === "monthly"
            ? `$${prices.monthly}/mo`
            : `$${prices.yearly}/yr`}
        </p>
        {getValues().period === "yearly" ? (
          <p className="text-MarineBlue text-xs">2 months free</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const SelectPlan = ({ control, register, getValues, watch }: any) => {
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
            defaultValue={{
              name: "Arcade",
              prices: {
                monthly: 9,
                yearly: 90,
              },
            }}
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  icon="/icon-arcade.svg"
                  name="Arcade"
                  prices={{
                    monthly: 9,
                    yearly: 90,
                  }}
                  register={register}
                  control={control}
                  getValues={getValues}
                />
              </div>
            )}
          />{" "}
          <Controller
            name="plan"
            control={control}
            defaultValue={{
              name: "Advanced",
              prices: {
                monthly: 12,
                yearly: 120,
              },
            }}
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  icon="/icon-advanced.svg"
                  name="Advanced"
                  prices={{
                    monthly: 12,
                    yearly: 120,
                  }}
                  register={register}
                  control={control}
                  getValues={getValues}
                />
              </div>
            )}
          />{" "}
          <Controller
            name="plan"
            control={control}
            defaultValue={{
              name: "Pro",
              prices: {
                monthly: 15,
                yearly: 150,
              },
            }}
            render={({ field }) => (
              <div className="grid">
                <Plan
                  field={field}
                  icon="/icon-pro.svg"
                  name="Pro"
                  prices={{
                    monthly: 15,
                    yearly: 150,
                  }}
                  register={register}
                  control={control}
                  getValues={getValues}
                />
              </div>
            )}
          />
        </div>
        <div className="flex justify-center gap-6 w-full bg-Alabaster rounded-lg p-4 max-md:p-3 ">
          <div
            className={
              " font-[500] " +
              (getValues().period === "monthly"
                ? " text-MarineBlue"
                : " text-CoolGray")
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
                  defaultValue={watch().period === "monthly" ? "0" : "1"}
                />
              </div>
            )}
          />
          <div
            className={
              "text-CoolGray font-[500] " +
              (getValues().period == "yearly" && " text-MarineBlue")
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
