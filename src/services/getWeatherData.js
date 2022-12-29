import axios from "axios";
const API_KEY_1 = "57ed7fc78322e4fa96ad74f7c987f526";
const API_KEY_2 = "CD7ZZU5EY6B9WEZARDFR7PUM9";

export const getWeatherDataByCityName = (cityName) => {
  const req1 = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_1}&units=metric`
  );
  const req2 = axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&include=hours%2Ccurrent&key=${API_KEY_2}&contentType=json`
  );
  return axios.all([req1, req2]);
};
export const getWeatherDataByCoord = (lat, lon) => {
  const req1 = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_1}&units=metric`
  );
  const req2 = axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=hours%2Ccurrent&key=${API_KEY_2}&contentType=json`
  );
  return axios.all([req1, req2]);
};
