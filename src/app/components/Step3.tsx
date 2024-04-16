import React from "react";
import MainNav from "./MainNav";
import { useFormContext } from "react-hook-form";

type AddonsLiProps = {
  name: string;
  desc: string;
  price: string;
};

const AddonsLi = ({ name, desc, price }: AddonsLiProps) => {
  const { register } = useFormContext();
  return (
    <li className="flex justify-between items-center border border-LightGray rounded-lg p-4 hover:border-PurplishBlue cursor-pointer max-md:gap-4">
      <input
        {...register(name)}
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
    </div>
  );
};

export default Addons;
