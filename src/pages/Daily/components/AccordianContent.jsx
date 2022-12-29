import React from "react";
import d2d from "degrees-to-direction";
import { DateTime } from "luxon";
import { createDateTime } from "../../../utils/createDateTime";
import RenderIcon from "../../../components/RenderIcon";
const AccordianContent = ({
  humidity,
  windSpeed,
  windDir,
  sunriseEpoch,
  sunsetEpoch,
  tempMax,
  tempMin,
  dailyHourlyData,
  showContent,
}) => {
  const contentDetails = [
    {
      name: "Humidity",
      value: `${humidity} %`,
    },
    {
      name: "Wind",
      value: `${windSpeed} Km/h ${d2d(windDir)}`,
    },
    {
      name: "Sunrise/Sunset",
      value: `${createDateTime(
        sunriseEpoch,
        DateTime.TIME_SIMPLE
      )}/${createDateTime(sunsetEpoch, DateTime.TIME_SIMPLE)}`,
    },
    {
      name: "Min/Max",
      value: `${tempMin}°C/${tempMax}°C`,
    },
  ];

  return (
    <section
      name="accordian-content"
      className={` ${
        showContent ? "h-[11rem] my-2" : "h-0 my-0"
      } transition-all duration-200 ease-in-out overflow-hidden flex flex-col justify-between`}
    >
      <div className="[&>*]:flex [&>*]:justify-between text-xs sm:text-[0.9rem]">
        {contentDetails.map(({ name, value }, i) => {
          return (
            <div key={i}>
              <p className="font-medium">{name}</p>
              <p className="text-gray-400">{value}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {dailyHourlyData.map(({ datetimeEpoch, icon, temp }, i) => {
          return (
            <div
              className="flex items-center flex-col gap-2 text-xs sm:text-[0.9rem]"
              key={i}
            >
              <p className="w-max font-medium ">
                {createDateTime(datetimeEpoch, DateTime.TIME_SIMPLE)}
              </p>
              <RenderIcon icon={icon} className="w-6 sm:w-8" />
              <p className="text-gray-400">{temp.toFixed()}&deg; C</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccordianContent;
