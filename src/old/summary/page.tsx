import React from "react";
import Link from "next/link";
import MainNav from "../../app/components/MainNav";

const Summary = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="summary" />
      <div>Summary page</div>{" "}
    </div>
  );
};

export default Summary;
