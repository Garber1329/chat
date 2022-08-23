import {createStore } from "redux";
import {chatsReducer} from "./chatsReducer"

export const store = createStore(chatsReducer);