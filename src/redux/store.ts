import { rootReducer } from "./roote-reducer";
import logger from 'redux-logger';
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore(
//   rootReducer,
//   undefined, // <- estado inicial
//   applyMiddleware(logger) // <- enhancer
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
}); 
