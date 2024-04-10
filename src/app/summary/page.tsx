import React from "react";
import Link from "next/link";
const Summary = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>Summary page</div>{" "}
      <div className="w-full flex justify-between items-center ">
        <Link href="addons" className="text-CoolGray">
          Go Back
        </Link>
        <Link
          className="text-Magnolia bg-MarineBlue px-6 py-3 rounded-md"
          href="/complete"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
};

export default Summary;
