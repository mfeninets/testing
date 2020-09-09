import { UPDATE_MESSAGES, UPDATE_RATE } from "../constants";

export type ContentItem = {
    source: string;
    amount: number;
};

export type Message = {
    id?: number;
    text: string;
    canDelete: boolean;
    btcAmount?: number;
    messageType: string;
    messageContent: ContentItem[] | string;
    isServiceMessage?: boolean;
};

export type State = {
    rate: string;
    messages: Message[];
};

export type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: string;
};

export type GetMessagesAction = {
    type: typeof UPDATE_MESSAGES;
    payload: Message[] | number;
};

export type Rate = {
    bpi: { USD: { rate_float: string } };
};
