import React from "react";
import { UilArrowUp, UilArrowDown } from "@iconscout/react-unicons";
const MinMaxTemp = ({ tempMax, tempMin }) => {
  return (
    <section
      name="min-max-temp"
      className="flex gap-2 text-xs text-white [&>*]:flex [&>*]:items-center"
    >
      <div>
        <UilArrowUp size={20} />
        <p>Max {tempMax.toFixed()} &deg;C </p>
      </div>
      <div>
        <UilArrowDown size={20} />
        <p>Min {tempMin.toFixed()} &deg;C </p>
      </div>
    </section>
  );
};

export default MinMaxTemp;
