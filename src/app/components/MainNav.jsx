import React from "react";
import NavLi from "./NavLi";

const MainNav = ({ actual }) => {
  return (
    <nav className="z-10 absolute top-0 left-0 m-12 max-md:-mt-16 max-md:mx-0 max-md:flex max-md:justify-center max-md:w-full  max-md:gap-8">
      <NavLi actual={actual} step={1} href="/" type={"your info"} />
      <NavLi actual={actual} step={2} href="/plan" type={"select plan"} />
      <NavLi actual={actual} step={3} href="/addons" type={"add-ons"} />
      <NavLi actual={actual} step={4} href="/summary" type={"summary"} />
    </nav>
  );
};

export default MainNav;
