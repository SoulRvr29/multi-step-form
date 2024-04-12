import React from "react";
import MainNav from "./MainNav";
import { useFormContext } from "react-hook-form";

const Summary = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="summary" />
      <div>Summary page</div>{" "}
    </div>
  );
};

export default Summary;
