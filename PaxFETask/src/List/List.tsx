import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { Message } from "./Message";
import { Message as MessageType, State } from "../types";
import { removeMessage as removeMessageAction, addMessage as addMessageAction } from "../actions";

import { messageToInsert } from "../data-mocks/messages";

import "./styles.css";

const getAllMessagesSelector = createSelector(
    (state: State) => state.messages,
    (messages: MessageType[]) => messages,
);

const getRateSelector = createSelector(
    (state: State) => state.rate,
    (rate: string) => rate,
);

export const List = () => {
    const messages = useSelector(getAllMessagesSelector);
    const rate = useSelector(getRateSelector);
    const dispatch = useDispatch();

    const handleRemoveMessage = useCallback(
        (id: number) => () => {
            dispatch(removeMessageAction(id));
        },
        [dispatch],
    );

    const handleAddMessage = useCallback(
        (id: number) => () => {
            dispatch(addMessageAction(id));
        },
        [dispatch],
    );

    return (
        <div className="container">
            <h1 className="title">FE TASK</h1>
            <section className="list">
                {messages.map((message: MessageType) => (
                    <div className={`message_container ${message.messageType}`} key={message.id}>
                        <Message
                            message={message}
                            handleRemoveMessage={handleRemoveMessage}
                            handleAddMessage={handleAddMessage}
                            rate={rate}
                        />
                        {message.isServiceMessage && <Message message={messageToInsert} />}
                    </div>
                ))}
            </section>
        </div>
    );
};
