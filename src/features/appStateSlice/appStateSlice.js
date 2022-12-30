import { createSlice } from "@reduxjs/toolkit";
import { setWeatherData } from "../weatherDataSlice/weatherDataSlice";

const initialState = {
  isLoading: true,
  isError: false,
  error: "",
  locationAccessState: "",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
      state.isError = false;
      state.error = "";
    },
    setError: (state, actions) => {
      if (actions.payload) {
        state.isError = true;
        state.error = actions.payload;
      } else {
        state.isError = false;
        state.error = "";
      }
      state.isLoading = false;
    },
    setLocationAccessState: (state, action) => {
      state.locationAccessState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setWeatherData, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
  },
});

export const { setIsLoading, setError, setCoords, setLocationAccessState } =
  appStateSlice.actions;

export default appStateSlice.reducer;
