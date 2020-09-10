import {
    ADD_MESSAGE_BY_ID,
    REMOVE_MESSAGE_BY_ID,
    REMOVE_SERVICE_MESSAGE_BY_ID,
    UPDATE_MESSAGES,
    UPDATE_RATE,
} from "../../constants";
import { Message, Rate } from "../../types";

export const addMessageAction = (id: number) => ({ type: ADD_MESSAGE_BY_ID, payload: id });

export const removeMessageAction = (id: number) => ({ type: REMOVE_MESSAGE_BY_ID, payload: id });

export const removeServiceMessageAction = (id: number) => ({
    type: REMOVE_SERVICE_MESSAGE_BY_ID,
    payload: id,
});

export const updateMessagesAction = (messages: Message[]) => ({
    type: UPDATE_MESSAGES,
    payload: messages,
});

export const updateRateAction = (rate: Rate) => ({
    type: UPDATE_RATE,
    payload: rate?.bpi?.USD?.rate_float,
});
