"use client";
import { useState } from "react";
import { useForm, SubmitHandler, Form, Controller } from "react-hook-form";
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
    control,
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: object) => {
    console.log(data);
    router.push("/complete");
  };

  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <form className="h-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <Step1 register={register} errors={errors} />}
      {step === 2 && (
        <Step2
          control={control}
          register={register}
          watch={watch}
          getValues={getValues}
        />
      )}
      {step === 3 && <Step3 register={register} getValues={getValues} />}
      {step === 4 && <Step4 getValues={getValues} setValue={setValue} />}
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
                  console.log(getValues());
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
