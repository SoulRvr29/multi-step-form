import React from "react";
import MainNav from "./MainNav";

const Summary = ({ plan, values, period, setPeriod, addons }: any) => {
  // console.log(values);
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="summary" />
      <div>
        <h1 className="max-md:text-2xl">Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="bg-Alabaster rounded-lg p-4 mt-8">
          <div className="flex justify-between">
            <p className="text-MarineBlue font-bold capitalize">
              {plan} ({period === false ? "monthly" : "yearly"})
            </p>
            <div className="text-MarineBlue font-bold">$9/mo</div>
          </div>
          <button
            type="button"
            onClick={() => setPeriod(!period)}
            className="underline text-CoolGray"
          >
            Change
          </button>
          <hr className="my-4" />
          {addons["Online service"] && (
            <div className="flex justify-between mb-4 text-CoolGray">
              <div>Online service</div>
              <div className="text-MarineBlue">+$1/mo</div>
            </div>
          )}
          {addons["Larger storage"] && (
            <div className="flex justify-between mb-4 text-CoolGray">
              <div>Larger storage</div>
              <div className="text-MarineBlue">+$2/mo</div>
            </div>
          )}
          {addons["Customizable profile"] && (
            <div className="flex justify-between text-CoolGray">
              <div>Customizable profile</div>
              <div className="text-MarineBlue">+$2/mo</div>
            </div>
          )}
        </div>
        <div className="flex justify-between text-CoolGray p-4">
          <div>Total (per month)</div>
          <div className="text-PurplishBlue font-bold">+$12/mo</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
