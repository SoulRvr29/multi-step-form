import React from "react";
import MainNav from "./MainNav";

const PersonalInfo = ({ register, errors }: any) => {
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
            {...register("name", {
              required: { value: true, message: "This field is required" },
              minLength: {
                value: 3,
                message: "At least 3 characters",
              },
            })}
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
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[\w._]+@[\w]+\.[\w]{2,}$/i,
                message: "Enter valid email",
              },
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
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^\d{9}$/,
                message: "Must be 9 digits",
              },
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
            placeholder="e.g. 1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
