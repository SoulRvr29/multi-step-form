import React from "react";
import Link from "next/link";
import MainNav from "../components/MainNav";

const Summary = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <MainNav actual="summary" />
      <div>Summary page</div>{" "}
      <div className="w-full flex justify-between items-center ">
        <Link
          href="addons"
          className="text-CoolGray font-[500] hover:text-MarineBlue"
        >
          Go Back
        </Link>
        <Link
          className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md hover:bg-opacity-80 hover:bg-PurplishBlue"
          href="/complete"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
};

export default Summary;
