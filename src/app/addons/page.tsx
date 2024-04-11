import React from "react";
import Link from "next/link";
import MainNav from "../components/MainNav";

type AddonsLiProps = {
  name: string;
  desc: string;
  price: string;
};

const AddonsLi = ({ name, desc, price }: AddonsLiProps) => {
  return (
    <li className="flex justify-between items-center border border-LightGray rounded-lg p-4 hover:border-PurplishBlue cursor-pointer max-md:gap-4">
      <input
        className="size-5 border-LightGray accent-PurplishBlue  "
        type="checkbox"
        name={name}
        id={name}
      />
      <div>
        <h3 className="text-MarineBlue font-bold">{name}</h3>{" "}
        <p className="max-md:text-xs">{desc}</p>
      </div>
      <div className="text-PurplishBlue ">{price}</div>
    </li>
  );
};

const Addons = () => {
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
            name="Online service"
            desc="Access to multiplayer games"
            price="+$10/yr"
          />
          <AddonsLi
            name="Larger storage"
            desc="Extra 1TB of cloud save"
            price="+$20/yr"
          />
          <AddonsLi
            name="Customizable profile"
            desc="Custom theme on your profile"
            price="+$20/yr"
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center max-md:mt-8">
        <Link
          href="/plan"
          className="text-CoolGray font-[500] hover:text-MarineBlue"
        >
          Go Back
        </Link>
        <Link
          className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md hover:bg-opacity-80"
          href="/summary"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Addons;
