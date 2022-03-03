import { handleActions } from "redux-actions";
import * as actions from "../actions/index"



const defaultState = {
    isLoading: false,
    errors: null,
    isSuccess: false,
    message: ""
};


export const registerPageReducer = handleActions({

    [actions.SIGN_UP_REQUEST.toString()]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [actions.SIGN_UP_SUCCESS.toString()]: (state, { payload }) => {

        const { success, message } = payload.response;

        return {
            ...state,
            isLoading: false,
            isSuccess: success,
            message: message
        }
    },
    [actions.SIGN_UP_FAIL.toString()]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errors: payload.response
        }
    }
}, defaultState)