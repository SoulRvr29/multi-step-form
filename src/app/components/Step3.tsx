"use client";
import React from "react";
import MainNav from "./MainNav";

type AddonsLiProps = {
  name: any;
  desc: string;
  prices: any;
  register: any;
  getValues: any;
  setValue: any;
  watch: any;
};
type AddonsProps = {
  register: any;
  getValues: any;
  setValue: any;
  watch: any;
};

const AddonsLi = ({
  name,
  desc,
  prices,
  register,
  getValues,
  setValue,
  watch,
}: AddonsLiProps) => {
  return (
    <li
      className={
        "flex gap-4 justify-between items-center border rounded-lg p-4 hover:border-PurplishBlue cursor-pointer max-md:gap-4 " +
        (watch().addons && watch().addons[name]
          ? "bg-Alabaster border-PurplishBlue"
          : "")
      }
    >
      <input
        {...register(name)}
        onChange={(e) => {
          if (e.target.checked) {
            setValue("addons", { ...getValues("addons"), [name]: prices });
          } else {
            setValue(
              "addons",
              Object.fromEntries(
                Object.entries(getValues("addons")).filter(
                  ([key, value]) => key != name
                )
              )
            );
          }
        }}
        className="size-5 border-LightGray accent-PurplishBlue  cursor-pointer"
        type="checkbox"
        name={name}
        id={name}
      />
      <div className="flex justify-between w-full items-center">
        <div className="justify-self-start">
          <h3 className="text-MarineBlue font-bold">{name}</h3>{" "}
          <p className="max-md:text-xs">{desc}</p>
        </div>
        <div className="text-PurplishBlue max-md:text-xs">
          {getValues().period === "monthly"
            ? `+$${prices.monthly}/mo`
            : `+$${prices.yearly}/yr`}
        </div>
      </div>
    </li>
  );
};

const Addons = ({ register, getValues, setValue, watch }: AddonsProps) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="add-ons" />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="max-md:text-2xl">Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="flex flex-col gap-4 font-[500] max-md:text-[0.95rem]">
          <AddonsLi
            watch={watch}
            setValue={setValue}
            getValues={getValues}
            register={register}
            name="Online service"
            desc="Access to multiplayer games"
            prices={{ monthly: 1, yearly: 10 }}
          />
          <AddonsLi
            watch={watch}
            getValues={getValues}
            setValue={setValue}
            register={register}
            name="Larger storage"
            desc="Extra 1TB of cloud save"
            prices={{ monthly: 2, yearly: 20 }}
          />
          <AddonsLi
            watch={watch}
            setValue={setValue}
            getValues={getValues}
            register={register}
            name="Customizable profile"
            desc="Custom theme on your profile"
            prices={{ monthly: 2, yearly: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Addons;
