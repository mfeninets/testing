import {
    ADD_MESSAGE_BY_ID,
    REMOVE_MESSAGE_BY_ID,
    UPDATE_MESSAGES,
    UPDATE_RATE,
} from "../constants";
import { Message, Rate } from "../types";

export const addMessage = (id: number) => ({ type: ADD_MESSAGE_BY_ID, payload: id });

export const removeMessage = (id: number) => ({ type: REMOVE_MESSAGE_BY_ID, payload: id });

export const updateMessages = (messages: Message[]) => ({
    type: UPDATE_MESSAGES,
    payload: messages,
});

export const updateRate = (rate: Rate) => ({
    type: UPDATE_RATE,
    payload: rate?.bpi?.USD?.rate_float,
});
