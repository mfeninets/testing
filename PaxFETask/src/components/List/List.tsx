import React from "react";
import { useSelector } from "react-redux";

import { Message } from "./Message";

import "./styles.css";
import { getAllMessagesSelector, getRateSelector } from "../../store/selectors";

export const List = () => {
    const messages = useSelector(getAllMessagesSelector);
    const rate = useSelector(getRateSelector);

    return (
        <div className="container">
            <h1 className="title">FE TASK</h1>
            <section className="list">
                {messages.map((message) => (
                    <div
                        className={`message_container ${message.messageType + "_message_type"}`}
                        key={message.id}
                    >
                        <Message message={message} rate={rate} />
                    </div>
                ))}
            </section>
        </div>
    );
};
