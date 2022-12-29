import React from "react";
import d2d from "degrees-to-direction";
const WeatherDetails = ({
  precipitationProbability,
  humidity,
  visibility,
  dew,
  pressure,
  uvIndex,
  windSpeed,
  windDir,
}) => {
  const weatherDetails = [
    {
      name: "Humidity",
      value: `${humidity} %`,
    },
    {
      name: "Visibility",
      value: `${visibility} Km`,
    },
    {
      name: "Dew Point",
      value: `${dew} °C`,
    },
    {
      name: "Pressure",
      value: `${pressure} mb`,
    },
    {
      name: "Wind",
      value: `${windSpeed} Km/h ${d2d(windDir)}`,
    },
    {
      name: "UV Index",
      value: `${uvIndex}`,
    },
    {
      name: "Precipitation",
      value: `${precipitationProbability} %`,
    },
  ];
  return (
    <section name="current-details" className="my-2">
      <p className="text-white font-semibold text-xs">Current details</p>
      <div className="border-y-2 my-2 py-2">
        {weatherDetails.map(({ name, value }, i) => {
          return (
            <div
              className="text-xs flex items-center justify-between xs:mx-6"
              key={i}
            >
              <p className="text-white font-medium">{name}</p>
              <p className="text-gray-400 ">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WeatherDetails;
