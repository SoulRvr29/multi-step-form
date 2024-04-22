"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useRouter } from "next/navigation";
import React from "react";

type FormValues = {
  "Customizable profile": boolean;
  "Larger storage": boolean;
  "Online service": boolean;
  addons: object;
  email: string;
  name: string;
  phone: string;
  period: "monthly" | "yearly";
  plan: {
    name: string;
    prices: {
      monthly: number;
      yearly: number;
    };
  };
};

const MultiStepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
    watch,
    getValues,
    setValue,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      "Customizable profile": false,
      "Larger storage": false,
      "Online service": false,
      addons: {},
      email: "",
      name: "",
      phone: "",
      period: "monthly",
      plan: {
        name: "Arcade",
        prices: {
          monthly: 9,
          yearly: 90,
        },
      },
    },
  });

  const onSubmit = () => {
    router.push("/complete");
    // console.log(getValues());
  };

  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <form className="h-full flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <Step1 register={register} errors={errors} />}
      {step === 2 && (
        <Step2
          control={control}
          register={register}
          watch={watch}
          getValues={getValues}
          setValue={setValue}
        />
      )}
      {step === 3 && (
        <Step3
          register={register}
          watch={watch}
          getValues={getValues}
          setValue={setValue}
        />
      )}
      {step === 4 && <Step4 getValues={getValues} setValue={setValue} />}
      <div
        className={
          "w-full flex items-center max-md:mt-6  " +
          (step > 1 ? " justify-between" : " justify-end")
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
              trigger().then((isValid) => {
                if (isValid) {
                  setStep(step + 1);
                }
              });
            }}
          >
            Next Step
          </button>
        )}
        {step === 4 && (
          <button
            className="text-Magnolia bg-PurplishBlue px-6 py-3 rounded-md hover:bg-opacity-80"
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
