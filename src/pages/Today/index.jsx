import React from "react";
import { useSelector } from "react-redux";
import CurrentTime from "./components/CurrentTime";
import CurrentLocation from "./components/CurrentLocation";
import MinMaxTemp from "./components/MinMaxTemp";
import CurrentTempAndIcon from "./components/CurrentTempAndIcon";
import SunriseAndSunset from "./components/SunriseAndSunset";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForcast from "./components/HourlyForcast";
const TodayPage = () => {
  const {
    currentWeatherData: {
      datetimeEpoch,
      tempMax,
      tempMin,
      temp,
      icon,
      feelsLike,
      sunriseEpoch,
      sunsetEpoch,
      precipitationProbability,
      humidity,
      visibility,
      dew,
      pressure,
      uvIndex,
      windSpeed,
      windDir,
    },
    completeAddress,
    coord: { lat, lon },
    todayHourlyData,
  } = useSelector((store) => store.weatherData);
  return (
    <div className="px-3">
      <CurrentTime datetimeEpoch={datetimeEpoch} />
      <CurrentLocation lat={lat} lon={lon} completeAddress={completeAddress} />
      <MinMaxTemp tempMax={tempMax} tempMin={tempMin} />
      <CurrentTempAndIcon temp={temp} icon={icon} feelsLike={feelsLike} />
      <SunriseAndSunset sunriseEpoch={sunriseEpoch} sunsetEpoch={sunsetEpoch} />
      <WeatherDetails
        precipitationProbability={precipitationProbability}
        humidity={humidity}
        visibility={visibility}
        dew={dew}
        pressure={pressure}
        uvIndex={uvIndex}
        windSpeed={windSpeed}
        windDir={windDir}
      />
      <HourlyForcast todayHourlyData={todayHourlyData} />
    </div>
  );
};

export default TodayPage;
