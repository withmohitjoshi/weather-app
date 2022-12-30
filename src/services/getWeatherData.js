import axios from "axios";

export const getWeatherDataByCityName = (cityName) => {
  const req1 = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY_1}&units=metric`
  );
  const req2 = axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&include=hours%2Ccurrent&key=${process.env.REACT_APP_API_KEY_2}&contentType=json`
  );
  return axios.all([req1, req2]);
};
export const getWeatherDataByCoord = ({ latitude, longitude }) => {
  const req1 = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY_1}&units=metric`
  );
  const req2 = axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&include=hours%2Ccurrent&key=${process.env.REACT_APP_API_KEY_2}&contentType=json`
  );
  return axios.all([req1, req2]);
};
