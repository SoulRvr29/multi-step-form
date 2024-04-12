import React from "react";
import MainNav from "./MainNav";
import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col justify-between h-full">
      <MainNav actual="your info" />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="max-md:text-2xl">Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div>
          <label className="block text-MarineBlue" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            className="block mb-6 border border-LightGray rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue"
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
          />
          <label className="block text-MarineBlue" htmlFor="email">
            Email Address
          </label>
          <input
            {...register("email")}
            className="block mb-6 border border-LightGray rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue"
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label className="block text-MarineBlue" htmlFor="phone">
            Phone Number
          </label>
          <input
            {...register("phone")}
            className="block mb-6 border border-LightGray rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue"
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
