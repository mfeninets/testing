import { createSelector } from "reselect";

import { Message, State } from "../../types";

export const getAllMessagesSelector = createSelector(
    (state: State) => state.messages,
    (messages: Message[]) => messages,
);

export const getRateSelector = createSelector(
    (state: State) => state.rate,
    (rate: string) => rate,
);
