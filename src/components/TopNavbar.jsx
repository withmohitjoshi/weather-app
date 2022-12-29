import React from "react";
import { NavLink } from "react-router-dom";
import SearchWeather from "./SearchWeather";

const TopNavbar = () => {
  return (
    <header className="w-full h-fit bg-transparent shadow-md xs:shadow-none my-3 px-3">
      <SearchWeather />
      <nav className="mt-2 flex items-center justify-evenly font-semibold text-white [&>*]:p-1">
        <NavLink to={"/"}>Today</NavLink>
        <NavLink to={"/daily"}>Daily</NavLink>
      </nav>
    </header>
  );
};

export default TopNavbar;
