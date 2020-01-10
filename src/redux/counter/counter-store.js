import {createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export const counterStore = createStore(counterReducer);