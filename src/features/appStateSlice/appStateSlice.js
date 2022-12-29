import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  error: "",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    setError: (state, actions) => {
      if (actions.payload) {
        state.isError = true;
        state.error = actions.payload;
      } else {
        state.isError = false;
        state.error = "";
      }
    },
  },
});

export const { setIsLoading, setError } = appStateSlice.actions;

export default appStateSlice.reducer;
