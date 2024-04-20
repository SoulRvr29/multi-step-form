import React from "react";
import MainNav from "./MainNav";

type SummaryProps = {
  getValues: any;
  setValue: any;
};

const Summary = ({ getValues, setValue }: SummaryProps) => {
  let addonsSum = 0;
  if (getValues("Online service")) addonsSum += 1;
  if (getValues("Larger storage")) addonsSum += 2;
  if (getValues("Customizable profile")) addonsSum += 2;

  const period: "monthly" | "yearly" = getValues().period;
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="summary" />
      <div>
        <h1 className="max-md:text-2xl">Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="bg-Alabaster rounded-lg p-4 mt-4">
          <div className="text-xs">
            <h2 className="text-CoolGray font-bold text-base">Personal info</h2>
            <p>{getValues("name")}</p>
            <p>{getValues("email")}</p>
            <p>{getValues("phone")}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-MarineBlue font-bold capitalize">
              {getValues().plan.name} ({getValues().period})
            </p>
            <div className="text-MarineBlue font-bold">
              {getValues().period === "monthly"
                ? `${getValues().plan.prices.monthly}/mo`
                : `${getValues().plan.prices.yearly}/yr`}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              getValues().period === "monthly"
                ? setValue("period", "yearly")
                : setValue("period", "monthly");
            }}
            className="underline text-CoolGray hover:text-PurplishBlue"
          >
            Change
          </button>
          {getValues("addons") && <hr className="my-4" />}
          {getValues()["Online service"] && (
            <div className="flex justify-between mb-4 text-CoolGray">
              <div>Online service</div>
              <div className="text-MarineBlue">
                {getValues("period") === "monthly" ? "+$1/mo" : "+$10/yr"}
              </div>
            </div>
          )}
          {getValues()["Larger storage"] && (
            <div className="flex justify-between mb-4 text-CoolGray">
              <div>Larger storage</div>
              <div className="text-MarineBlue">
                {getValues("period") === "monthly" ? "+$2/mo" : "+$20/yr"}
              </div>
            </div>
          )}
          {getValues()["Customizable profile"] && (
            <div className="flex justify-between text-CoolGray">
              <div>Customizable profile</div>
              <div className="text-MarineBlue">
                {getValues("period") === "monthly" ? "+$2/mo" : "+$20/yr"}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between text-CoolGray p-4">
          <div>Total (per month)</div>
          <div className="text-PurplishBlue font-bold">
            {getValues().period === "monthly"
              ? `$${getValues().plan.prices.monthly + addonsSum}/mo `
              : `${getValues().plan.prices.yearly + addonsSum * 10}/yr`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
