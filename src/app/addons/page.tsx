import React from "react";
import Link from "next/link";

type AddonsLiProps = {
  name: string;
  desc: string;
  price: string;
};

const AddonsLi = ({ name, desc, price }: AddonsLiProps) => {
  return (
    <li className="flex justify-between items-center border border-LightGray rounded-lg p-4 ">
      <input
        className="size-5 border-LightGray "
        type="checkbox"
        name={name}
        id={name}
      />
      <div>
        <h3 className="text-MarineBlue font-bold">{name}</h3>{" "}
        <p className="text-[0.9rem]">{desc}</p>
      </div>
      <div className="text-PurplishBlue text-[0.9rem]">{price}</div>
    </li>
  );
};

const Addons = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="flex flex-col gap-4">
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
      <div className="w-full flex justify-between items-center ">
        <Link href="/plan" className="text-CoolGray">
          Go Back
        </Link>
        <Link
          className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md"
          href="/summary"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Addons;
