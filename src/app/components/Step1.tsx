import React from "react";
import MainNav from "./MainNav";
import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors.name?.message?.toString());
  return (
    <div className="flex flex-col justify-between h-full">
      <MainNav actual="your info" />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="max-md:text-2xl">Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="block text-MarineBlue" htmlFor="name">
              Name
            </label>
            <p className="error text-StrawberryRed">
              {errors.name?.message?.toString()}
            </p>
          </div>
          <input
            {...register("name", { required: "This field is required" })}
            className={
              "block mb-6 border rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue" +
              (errors.name
                ? " outline-StrawberryRed border-StrawberryRed"
                : " border-LightGray")
            }
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
          />
          <div className="flex justify-between items-center">
            <label className="block text-MarineBlue" htmlFor="email">
              Email Address
            </label>
            <p className="error text-StrawberryRed">
              {errors.email?.message?.toString()}
            </p>
          </div>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: /^\S+@\S+$/i,
            })}
            className={
              "block mb-6 border rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue" +
              (errors.email
                ? " outline-StrawberryRed border-StrawberryRed"
                : " border-LightGray")
            }
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <div className="flex justify-between items-center">
            <label className="block text-MarineBlue" htmlFor="phone">
              Phone Number
            </label>
            <p className="error text-StrawberryRed">
              {errors.phone?.message?.toString()}
            </p>
          </div>
          <input
            {...register("phone", {
              required: "This field is required",
              minLength: { value: 10, message: "Must be 10 digits long" },
              maxLength: { value: 10, message: "Must be 10 digits long" },
            })}
            className={
              "block mb-6 border rounded-md px-4 py-2 w-full font-[500] cursor-pointer hover:border-PurplishBlue" +
              (errors.phone
                ? " outline-StrawberryRed border-StrawberryRed"
                : " border-LightGray")
            }
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
