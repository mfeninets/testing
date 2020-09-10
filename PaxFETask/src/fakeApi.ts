import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { Dispatch } from "redux";

import { updateMessagesAction } from "./store/actions";
import { shuffledMessageList } from "./data-mocks/messages";

export const getMessagesList = (dispatch: Dispatch) =>
    of(shuffledMessageList)
        .pipe(
            delay(500),
            tap((messages) => {
                dispatch(updateMessagesAction(messages));
            }),
        )
        .subscribe();
