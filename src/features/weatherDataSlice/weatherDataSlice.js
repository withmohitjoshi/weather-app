import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bg: "",
  cityName: "",
  country: "",
  completeAddress: "",
  coord: {},
  currentWeatherData: {},
  todayHourlyData: [],
  dailyForcastData: [],
};

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      const {
        cityName,
        completeAddress,
        coord,
        country,
        currentWeatherData,
        todayHourlyData,
        dailyForcastData,
      } = action.payload;
      state.cityName = cityName;
      state.country = country;
      state.completeAddress = completeAddress;
      state.coord = coord;
      state.currentWeatherData = currentWeatherData;
      state.todayHourlyData = todayHourlyData;
      state.dailyForcastData = dailyForcastData;
      state.bg =
        currentWeatherData.temp < 18
          ? "from-cyan-500 to-blue-900"
          : "from-orange-500 to-red-900";
    },
  },
});

export const { setWeatherData } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
