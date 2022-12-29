import { getWeatherDataByCityName } from "../services/getWeatherData";
import { setWeatherData } from "../features/weatherDataSlice/weatherDataSlice";
import {
  setError,
  setIsLoading,
} from "../features/appStateSlice/appStateSlice";
import { destructureWeatherData } from "../utils/destructureWeatherData";
export const fetchDataAndSetState = (dispatch, cityName = "pune") => {
  dispatch(setIsLoading(true));
  getWeatherDataByCityName(cityName)
    .then(([{ data: data1 }, { data: data2 }]) => {
      const weatherDataObject = destructureWeatherData(data1, data2);
      dispatch(setWeatherData(weatherDataObject));
    })
    .catch((error) => {
      error.response
        ? dispatch(setError(error.response.data.message))
        : dispatch(setError(error.message));
    })
    .finally(() => {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 1000);
    });
};
