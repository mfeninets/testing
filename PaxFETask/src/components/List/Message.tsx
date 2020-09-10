import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { messageToInsert } from "../../data-mocks/messages";
import {
    addMessageAction,
    removeMessageAction,
    removeServiceMessageAction,
} from "../../store/actions";
import { ContentItem, Message as MessageType } from "../../types";
import { getUSDAmount } from "./utils";

import "./styles.css";

type Props = {
    message: MessageType;
    rate?: string;
};

export const Message = ({
    message: { id, text, canDelete, btcAmount, messageType, messageContent, isServiceMessage },
    rate,
}: Props) => {
    const dispatch = useDispatch();

    const amount = useMemo(() => (rate && btcAmount ? getUSDAmount(rate, btcAmount) : 0), [
        btcAmount,
        rate,
    ]);

    const {
        text: serviceText,
        canDelete: serviceCanDelete,
        messageType: serviceMessageType,
        messageContent: serviceMessageContent,
    } = messageToInsert;

    const handleRemoveMessage = useCallback(() => {
        dispatch(removeMessageAction(id));
    }, [dispatch, id]);

    const handleRemoveServiceMessage = useCallback(() => {
        dispatch(removeServiceMessageAction(id));
    }, [dispatch, id]);

    const handleAddMessage = useCallback(() => {
        dispatch(addMessageAction(id));
    }, [dispatch, id]);

    return (
        <>
            {btcAmount && <div className={`rate ${messageType}`}>$ {amount}</div>}
            <h3>{text}</h3>
            <div className="message_content">
                {Array.isArray(messageContent) ? (
                    messageContent.map(({ source, amount }: ContentItem, index) => (
                        <p key={index}>{`${source}: $ ${amount}`}</p>
                    ))
                ) : (
                    <p>{messageContent}</p>
                )}
            </div>
            <div className="buttons_block">
                {!isServiceMessage && (
                    <button className="btn" onClick={handleAddMessage}>
                        Add service message
                    </button>
                )}
                {canDelete && (
                    <button className="btn delete_btn" onClick={handleRemoveMessage}>
                        Delete
                    </button>
                )}
            </div>
            {isServiceMessage && (
                <div className={serviceMessageType + "_message_type"}>
                    <h3>{serviceText}</h3>
                    <p>{serviceMessageContent}</p>
                    {serviceCanDelete && (
                        <button className="btn delete_btn" onClick={handleRemoveServiceMessage}>
                            x
                        </button>
                    )}
                </div>
            )}
        </>
    );
};
