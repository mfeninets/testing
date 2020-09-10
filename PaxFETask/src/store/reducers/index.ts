import { GetMessagesAction, Message, UpdateRateAction } from "../../types";
import {
    ADD_MESSAGE_BY_ID,
    REMOVE_MESSAGE_BY_ID,
    REMOVE_SERVICE_MESSAGE_BY_ID,
    UPDATE_MESSAGES,
    UPDATE_RATE,
} from "../../constants";

export const rateReducer = (state = "0", action: UpdateRateAction) => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload;
        default:
            return state;
    }
};

export const messagesReducer = (state: Message[] = [], action: GetMessagesAction) => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return action.payload;
        case ADD_MESSAGE_BY_ID:
            return state.reduce(
                (acc, message) => [
                    ...acc,
                    {
                        ...message,
                        ...(message.id === action.payload && { isServiceMessage: true }),
                    },
                ],
                [] as Message[],
            );
        case REMOVE_SERVICE_MESSAGE_BY_ID:
            return state.reduce(
                (acc, message) => [
                    ...acc,
                    {
                        ...message,
                        ...(message.id === action.payload && { isServiceMessage: false }),
                    },
                ],
                [] as Message[],
            );
        case REMOVE_MESSAGE_BY_ID:
            return state.filter((message: Message) => message.id !== action.payload);
        default:
            return state;
    }
};
