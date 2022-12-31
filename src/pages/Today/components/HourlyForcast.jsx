import { DateTime } from "luxon";
import React from "react";
import { createDateTime } from "../../../utils/createDateTime";
import RenderIcon from "../../../components/RenderIcon";
const HourlyForcast = ({ todayHourlyData }) => {
  return (
    <section name="hourly-forcast" className="my-2">
      <p className="text-white font-semibold text-xs">Hourly Forcast</p>
      <div className="flex gap-4 overflow-scroll no-scrollbar border-y-2 my-2 py-2">
        {todayHourlyData.map(({ datetimeEpoch, icon, temp }, i) => {
          const time = createDateTime(datetimeEpoch, DateTime.TIME_SIMPLE);
          return (
            <div
              className="text-center text-white text-xs flex flex-col items-center gap-2 justify-between"
              key={i}
            >
              <p className="w-max">{time}</p>
              <RenderIcon icon={icon} className="w-10 aspect-square" />
              <p className="text-gray-300 w-min">{icon.split("-").join(" ")}</p>
              <p className="text-[1rem] w-max">{temp.toFixed()}&deg;C</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HourlyForcast;
