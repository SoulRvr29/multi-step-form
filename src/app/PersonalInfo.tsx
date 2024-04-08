import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col justify-evenly h-full  ">
      <div>
        <h1>Personal info</h1>
        <p className="mb-10">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form>
        <label className="block text-MarineBlue" htmlFor="name">
          Name
        </label>
        <input
          className="block mb-6 border border-LightGray rounded-md px-5 py-2 w-full font-[500]"
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
        />
        <label className="block text-MarineBlue" htmlFor="email">
          Email Address
        </label>
        <input
          className="block mb-6 border border-LightGray rounded-md px-5 py-2 w-full font-[500]"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className="block text-MarineBlue" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="block mb-6 border border-LightGray rounded-md px-5 py-2 w-full font-[500]"
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
      <div className="w-full flex justify-end">
        <button className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
