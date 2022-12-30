import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherDataByCityName } from "../services/getWeatherData";
import { fetchDataAndSetState } from "../utils/fetchDataAndSetState";
const usePageLoadWeatherData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDataAndSetState({ callback: getWeatherDataByCityName, dispatch });
  }, [dispatch]);
};

export default usePageLoadWeatherData;
