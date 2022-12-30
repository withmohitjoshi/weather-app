import { setWeatherData } from "../features/weatherDataSlice/weatherDataSlice";
import {
  setError,
  setIsLoading,
} from "../features/appStateSlice/appStateSlice";
import { destructureWeatherData } from "../utils/destructureWeatherData";
export const fetchDataAndSetState = ({
  callback,
  dispatch,
  coords,
  cityName = "london",
}) => {
  dispatch(setIsLoading(true));
  callback(coords ? coords : cityName)
    .then(([{ data: data1 }, { data: data2 }]) => {
      const weatherDataObject = destructureWeatherData(
        data1,
        data2,
        coords ? "byCoords" : "byCityName"
      );
      dispatch(setWeatherData(weatherDataObject));
    })
    .catch((error) => {
      dispatch(
        setError(error.response ? error.response.data.message : error.message)
      );
    });
};
