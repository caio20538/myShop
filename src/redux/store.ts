import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./roote-reducer";
import {logger} from 'redux-logger';

export const store = createStore(
  rootReducer,
  undefined, // <- estado inicial
  applyMiddleware(logger) // <- enhancer
);
