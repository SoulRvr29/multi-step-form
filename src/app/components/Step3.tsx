"use client";
import React from "react";
import MainNav from "./MainNav";

type AddonsLiProps = {
  name: string;
  desc: string;
  price: string;
  setAddons: any;
  addons: object;
};

const AddonsLi = ({ name, desc, price, addons, setAddons }: AddonsLiProps) => {
  return (
    <li
      className={
        "flex gap-4 justify-between items-center border rounded-lg p-4 hover:border-PurplishBlue cursor-pointer max-md:gap-4 " +
        (addons[name as keyof typeof addons]
          ? "bg-Alabaster border-PurplishBlue"
          : "")
      }
    >
      <input
        className="size-5 border-LightGray accent-PurplishBlue  cursor-pointer"
        type="checkbox"
        name={name}
        id={name}
        onChange={(e) => {
          setAddons({ ...addons, [name]: e.target.checked });
        }}
      />
      <div className="flex justify-between w-full">
        <div className="justify-self-start">
          <h3 className="text-MarineBlue font-bold">{name}</h3>{" "}
          <p className="max-md:text-xs">{desc}</p>
        </div>
        <div className="text-PurplishBlue ">{price}</div>
      </div>
    </li>
  );
};

const Addons = ({
  period,
  addons,
  setAddons,
}: {
  period: string;

  addons: object;
  setAddons: any;
}) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="add-ons" />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="max-md:text-2xl">Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="flex flex-col gap-4 font-[500]">
          <AddonsLi
            addons={addons}
            setAddons={setAddons}
            name="Online service"
            desc="Access to multiplayer games"
            price={period ? "+$10/yr" : "+$1/mo"}
          />
          <AddonsLi
            addons={addons}
            setAddons={setAddons}
            name="Larger storage"
            desc="Extra 1TB of cloud save"
            price={period ? "+$20/yr" : "+$2/mo"}
          />
          <AddonsLi
            addons={addons}
            setAddons={setAddons}
            name="Customizable profile"
            desc="Custom theme on your profile"
            price={period ? "+$20/yr" : "+$2/mo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Addons;
