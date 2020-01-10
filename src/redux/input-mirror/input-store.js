import {createStore} from "redux";
import {reducer} from "./inputM-reducer";

export const store = createStore(reducer);