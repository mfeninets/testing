import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useRate } from "./useRate";
import { List } from "./components/List/List";
import { getMessagesList } from "./fakeApi";

export const App = () => {
    const dispatch = useDispatch();
    const isReadyToRender = useRate(dispatch);

    useEffect(() => {
        getMessagesList(dispatch);
    }, [dispatch]);

    return isReadyToRender ? <List /> : <p>We loading rate for u. Wait a bit</p>;
};
