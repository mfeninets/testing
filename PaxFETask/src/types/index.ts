export type ContentItem = {
    source: string;
    amount: number;
};

export type Message = {
    id: number;
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
    type: string;
    payload: string;
};

export type GetMessagesAction = {
    type: string;
    payload: Message[] | number;
};

export type Rate = {
    bpi: { USD: { rate_float: string } };
};
