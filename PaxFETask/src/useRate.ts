import { useState } from "react";
import { interval } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { Dispatch } from "redux";

import { updateRateAction } from "./store/actions";

const fetchUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
const poolingInterval = 10000;

export const useRate = (dispatch: Dispatch) => {
    const [isLoaded, setIsLoaded] = useState(false);

    interval(poolingInterval)
        .pipe(
            mergeMap(() =>
                fetch(fetchUrl).then((data) => {
                    setIsLoaded(true);
                    return data.json();
                }),
            ),
            tap((data) => {
                dispatch(updateRateAction(data));
            }),
        )
        .subscribe((data) => data);

    return isLoaded;
};
