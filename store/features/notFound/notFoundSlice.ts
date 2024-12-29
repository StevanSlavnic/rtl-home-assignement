import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const notFoundSlice = createSlice({
  name: "notFound",
  initialState: false,
  reducers: {
    setNotFound: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { setNotFound } = notFoundSlice.actions;

export default notFoundSlice.reducer;
