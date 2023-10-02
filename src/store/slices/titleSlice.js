import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const titleReducer = titleSlice.reducer;
