import React from "react";
import RenderIcon from "../../../components/RenderIcon";
import { UilAngleDown } from "@iconscout/react-unicons";
import { createDateTime } from "../../../utils/createDateTime";
const AccordianHead = ({
  datetimeEpoch,
  conditions,
  showContent,
  setShowContent,
  icon,
  temp,
}) => {
  const monthWeekday = createDateTime(datetimeEpoch, {
    month: "short",
    weekday: "long",
    day: "numeric",
  });

  return (
    <section
      name="accordian-head"
      className="flex items-center justify-between"
    >
      <div className="text-[0.8rem] sm:text-[1rem]">
        <p>{monthWeekday}</p>
        <p className="text-gray-500">
          {conditions} &#183; {temp.toFixed()}&deg;C
        </p>
      </div>
      <div className="flex gap-2">
        <RenderIcon icon={icon} className="w-8" />
        <button
          className={`${
            showContent ? "-rotate-180" : "rotate-0"
          } transition-transform duration-200 ease-in-out`}
          onClick={() => {
            setShowContent((prevState) => !prevState);
          }}
        >
          <UilAngleDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default AccordianHead;
