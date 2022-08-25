import {applyMiddleware, combineReducers, createStore} from "redux";
import {Chats} from "./chatsReducer";
import {Messages} from "./messagesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    chats: Chats,
    messages: Messages
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));