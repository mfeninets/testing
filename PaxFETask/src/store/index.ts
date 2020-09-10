import { createStore, combineReducers } from "redux";

import { messagesReducer, rateReducer } from "./reducers";

const reducers = combineReducers({ rate: rateReducer, messages: messagesReducer });

export const store = createStore(reducers, {});
