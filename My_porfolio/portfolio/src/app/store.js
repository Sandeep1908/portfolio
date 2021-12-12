import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/ProjectSlice/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
