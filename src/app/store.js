import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "../features/appStateSlice/appStateSlice";
import weatherDataReducer from "../features/weatherDataSlice/weatherDataSlice";
export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    weatherData: weatherDataReducer,
  },
});
