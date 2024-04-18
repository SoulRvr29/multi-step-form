"use client";
import { useState } from "react";
import { useForm, SubmitHandler, Form } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useRouter } from "next/navigation";
import React from "react";

const MultiStepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: object) => {
    console.log(data);
    router.push("/complete");
  };

  const [step, setStep] = useState(1);
  const router = useRouter();
  const [plan, setPlan] = useState("arcade");
  const [period, setPeriod] = useState("0");
  const [addons, setAddons] = useState({
    "Online service": false,
    "Larger storage": false,
    "Customizable profile": false,
  });
  return (
    <form className="h-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <Step1 register={register} errors={errors} />}
      {step === 2 && (
        <Step2
          register={register}
          plan={plan}
          setPlan={setPlan}
          icon={undefined}
          name={""}
          price={""}
          period={period}
          setPeriod={setPeriod}
        />
      )}
      {step === 3 && (
        <Step3 period={period} addons={addons} setAddons={setAddons} />
      )}
      {step === 4 && (
        <Step4
          addons={addons}
          period={period}
          setPeriod={setPeriod}
          plan={plan}
        />
      )}
      <div
        className={
          "w-full flex items-center " +
          (step > 1 ? " justify-between" : "justify-end")
        }
      >
        {step > 1 && (
          <button
            className="text-CoolGray font-[500] hover:text-MarineBlue"
            type="button"
            onClick={() => setStep(step - 1)}
          >
            Go Back
          </button>
        )}
        {step < 4 && (
          <button
            className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md hover:bg-opacity-80"
            type="button"
            onClick={() => {
              trigger().then((isValid: any) => {
                if (isValid) {
                  setStep(step + 1);
                  console.log(watch);
                }
              });
            }}
          >
            Next Step
          </button>
        )}
        {step === 4 && (
          <button
            className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md hover:bg-opacity-80"
            type="submit"
          >
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};
export default MultiStepForm;
