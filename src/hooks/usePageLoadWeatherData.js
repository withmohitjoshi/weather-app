import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataAndSetState } from "../utils/fetchDataAndSetState";

const usePageLoadWeatherData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDataAndSetState(dispatch);
  }, [dispatch]);
};

export default usePageLoadWeatherData;
