import { createStore, combineReducers } from "redux";

import { ADD_MESSAGE_BY_ID, REMOVE_MESSAGE_BY_ID, UPDATE_MESSAGES, UPDATE_RATE } from "./constants";
import { GetMessagesAction, Message, UpdateRateAction } from "./types";

const rateReducer = (state = "0", action: UpdateRateAction) => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload;
        default:
            return state;
    }
};

const messagesReducer = (state = [], action: GetMessagesAction) => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return action.payload;
        case ADD_MESSAGE_BY_ID as string:
            return state.map((message: Message) =>
                message.id === action.payload
                    ? Object.assign({}, message, { isServiceMessage: true })
                    : message,
            );
        case REMOVE_MESSAGE_BY_ID as string:
            return state.filter((message: Message) => message.id !== action.payload);
        default:
            return state;
    }
};

const reducers = combineReducers({ rate: rateReducer, messages: messagesReducer });

export const store = createStore(
    reducers,
    {},
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
