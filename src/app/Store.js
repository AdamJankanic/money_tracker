import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Slices/index.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
