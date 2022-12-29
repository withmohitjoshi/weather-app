import React, { useState } from "react";
import AccordianContent from "./AccordianContent";
import AccordianHead from "./AccordianHead";
const Accordian = ({
  data: {
    datetimeEpoch,
    conditions,
    icon,
    windSpeed,
    windDir,
    humidity,
    temp,
    tempMin,
    tempMax,
    sunriseEpoch,
    sunsetEpoch,
    dailyHourlyData,
  },
}) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <section
        name="accordian"
        className="w-full bg-white px-3 py-2 border-b-[1px]"
      >
        <AccordianHead
          conditions={conditions}
          icon={icon}
          showContent={showContent}
          setShowContent={setShowContent}
          datetimeEpoch={datetimeEpoch}
          temp={temp}
        />
        <AccordianContent
          humidity={humidity}
          tempMax={tempMax}
          tempMin={tempMin}
          windSpeed={windSpeed}
          windDir={windDir}
          dailyHourlyData={dailyHourlyData}
          sunriseEpoch={sunriseEpoch}
          sunsetEpoch={sunsetEpoch}
          showContent={showContent}
        />
      </section>
    </>
  );
};

export default Accordian;
