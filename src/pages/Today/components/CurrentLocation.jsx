import React from "react";
import { UilCompass, UilMapMarker } from "@iconscout/react-unicons";
import { dd2dms, format } from "latlng-conv";
const CurrentLocation = ({ lat, lon, completeAddress }) => {
  lat = format(dd2dms(lat, "lat"));
  lon = format(dd2dms(lon, "lng"));
  return (
    <section
      name="address-location"
      className="text-white font-semibold my-4 flex flex-col items-start gap-2"
    >
      <div className="flex items-center gap-2">
        <UilMapMarker size={30} />
        <p className="text-xl xs:text-2xl">{completeAddress}</p>
      </div>
      <div className="text-xs flex items-center gap-2">
        <UilCompass size={30} />
        <div>
          <p>{lat}</p>
          <p>{lon}</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentLocation;
