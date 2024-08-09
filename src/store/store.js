import { combineReducers, configureStore } from "@reduxjs/toolkit";
import textSlise from "./textSlice";

const rootReducer = combineReducers({
  text: textSlise,
});

export const store = configureStore({
  reducer: rootReducer,
});
