import { DateTime } from "luxon";
import React from "react";
import { createDateTime } from "../../../utils/createDateTime";

const CurrentTime = ({ datetimeEpoch }) => {
  const dateAndTime = createDateTime(datetimeEpoch, DateTime.DATETIME_MED);
  return (
    <section
      name="current-time"
      className="text-gray-700 font-medium text-xs xs:text-[1rem] sm:text-xl"
    >
      <p>{dateAndTime}</p>
    </section>
  );
};

export default CurrentTime;
