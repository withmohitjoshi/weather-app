import { DateTime } from "luxon";
import React from "react";
import { createDateTime } from "../../../utils/createDateTime";
import { UilSunset, UilSun } from "@iconscout/react-unicons";
const SunriseAndSunset = ({ sunriseEpoch, sunsetEpoch }) => {
  const sunriseTime = createDateTime(sunriseEpoch, DateTime.TIME_SIMPLE);
  const sunsetTime = createDateTime(sunsetEpoch, DateTime.TIME_SIMPLE);
  return (
    <section
      name="sunrise-sunset-time"
      className="text-xl text-white font-medium flex items-center gap-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2"
    >
      <div>
        <UilSun />
        <p>{sunriseTime}</p>
      </div>
      <div>
        <UilSunset />
        <p>{sunsetTime}</p>
      </div>
    </section>
  );
};

export default SunriseAndSunset;
