import React from "react";
import MainNav from "./MainNav";
import { motion } from "framer-motion";

const AddonsLi = ({
  name,
  desc,
  prices,
  register,
  getValues,
  setValue,
  watch,
}: any) => {
  return (
    <motion.li
      initial={{ rotate: 0 }}
      whileHover={{ rotate: [0, 1, -1, 0] }}
      transition={{ duration: 0.3 }}
      className={
        "flex gap-4 justify-between items-center border rounded-lg p-4 hover:border-PurplishBlue cursor-pointer max-md:gap-4 " +
        (watch().addons[name] ? "bg-Alabaster border-PurplishBlue" : "")
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
                  ([key]) => key != name
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
    </motion.li>
  );
};

const Addons = ({ register, getValues, setValue, watch }: any) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="add-ons" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-8 max-md:gap-4"
      >
        <motion.div animate={{ x: [-30, 0] }}>
          <h1 className="max-md:text-2xl">Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </motion.div>
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
      </motion.div>
    </div>
  );
};

export default Addons;
