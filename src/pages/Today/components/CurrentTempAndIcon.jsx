import React from "react";
import RenderIcon from "../../../components/RenderIcon";

const CurrentTempAndIcon = ({ temp, feelsLike, icon }) => {
  return (
    <section
      name="temp-and-icon"
      className=" text-white my-3 flex flex-col gap-3 [&>*]:grid [&>*]:grid-cols-2 [&>*]:items-center"
    >
      <div>
        <p className="text-4xl xs:text-6xl justify-self-start">
          {temp.toFixed()}&deg;C
        </p>
        <RenderIcon icon={icon} className="w-14 xs:w-20 justify-self-center" />
      </div>
      <div className="text-xs sm:text-[1rem] sm:font-medium">
        <p className="justify-self-start">
          Feels Like {feelsLike.toFixed()}
          <sup>&deg;</sup>
        </p>
        <p className="capitalize justify-self-center">
          {icon.split("-").join(" ")}
        </p>
      </div>
    </section>
  );
};

export default CurrentTempAndIcon;
