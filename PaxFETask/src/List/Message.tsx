import React from "react";

import { getUSDAmount } from "./utils";
import { ContentItem, Message as MessageType } from "../types";

import "./styles.css";

type Props = {
    message: MessageType;
    handleRemoveMessage?: (id: number) => (event: React.MouseEvent) => void;
    handleAddMessage?: (id: number) => (event: React.MouseEvent) => void;
    rate?: string;
};

export const Message = ({
    message: { id, text, canDelete, btcAmount, messageType, messageContent, isServiceMessage },
    handleRemoveMessage,
    handleAddMessage,
    rate,
}: Props) => (
    <>
        {messageType === "custom" ? (
            <div className={messageType}>
                <h3>{text}</h3>
                <p>{messageContent}</p>
            </div>
        ) : (
            <>
                {btcAmount && rate && (
                    <div className={`rate ${messageType}`}>$ {getUSDAmount(rate, btcAmount)}</div>
                )}
                <h3>{text}</h3>
                <div className="message_content">
                    {Array.isArray(messageContent) ? (
                        messageContent.map(({ source, amount }: ContentItem, index: number) => (
                            <p key={index}>{`${source}: $ ${getUSDAmount(
                                rate as string,
                                amount,
                            )}`}</p>
                        ))
                    ) : (
                        <p>messageContent</p>
                    )}
                </div>
                <div className={"actions"}>
                    {handleAddMessage && !isServiceMessage && (
                        <button className="btn" onClick={handleAddMessage(id as number)}>
                            Add service message
                        </button>
                    )}
                    {canDelete && handleRemoveMessage && (
                        <button
                            className="btn delete_btn"
                            onClick={handleRemoveMessage(id as number)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </>
        )}
    </>
);
