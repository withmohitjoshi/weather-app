export const destructureWeatherData = (data1, data2, dataGetBy) => {
  const cityName = data1.name;
  const coord = data1.coord;
  const country = data1.sys.country;
  const completeAddress =
    dataGetBy === "byCityName" ? data2.resolvedAddress : "Current Location";
  const currentWeatherData = {
    temp: data1.main.temp,
    feelsLike: data1.main.feels_like,
    tempMin: data2.days[0].tempmin,
    tempMax: data2.days[0].tempmax,
    humidity: data1.main.humidity,
    pressure: data2.currentConditions.pressure,
    sunriseEpoch: data1.sys.sunrise,
    sunsetEpoch: data1.sys.sunset,
    datetimeEpoch: data1.dt,
    visibility: data2.currentConditions.visibility,
    windSpeed: data1.wind.speed,
    windDir: data1.wind.deg,
    icon: data2.currentConditions.icon,
    uvIndex: data2.currentConditions.uvindex,
    dew: data2.currentConditions.dew,
    precipitationProbability: data2.days[0].precipprob,
  };
  const todayHourlyData = data2.days[0].hours.map((hour) => {
    return {
      temp: hour.temp,
      icon: hour.icon,
      datetimeEpoch: hour.datetimeEpoch,
    };
  });
  const dailyForcastData = data2.days.map((day) => {
    const {
      humidity,
      conditions,
      datetimeEpoch,

      temp,
      tempmax: tempMax,
      tempmin: tempMin,
      feelslike: feelsLike,
      icon,
      sunriseEpoch,
      sunsetEpoch,
      windspeed: windSpeed,
      winddir: windDir,
    } = day;

    const dailyHourlyData = day.hours.map((data) => {
      return {
        datetimeEpoch: data.datetimeEpoch,
        icon: data.icon,
        temp: data.temp,
      };
    });

    return {
      humidity,
      conditions,
      datetimeEpoch,
      temp,
      tempMax,
      tempMin,
      feelsLike,
      windSpeed,
      windDir,
      icon,
      sunriseEpoch,
      sunsetEpoch,
      dailyHourlyData,
    };
  });

  return {
    cityName,
    coord,
    country,
    completeAddress,
    currentWeatherData,
    todayHourlyData,
    dailyForcastData,
  };
};
