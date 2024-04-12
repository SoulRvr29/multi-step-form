import React from "react";
import NavLi from "./NavLi";

const MainNav = ({ actual }: { actual: string }) => {
  return (
    <nav className="z-10 absolute top-0 left-0 m-12 max-md:-mt-16 max-md:mx-0 max-md:flex max-md:justify-center max-md:w-full  max-md:gap-8">
      <NavLi actual={actual} step={1} type={"your info"} />
      <NavLi actual={actual} step={2} type={"select plan"} />
      <NavLi actual={actual} step={3} type={"add-ons"} />
      <NavLi actual={actual} step={4} type={"summary"} />
    </nav>
  );
};

export default MainNav;
