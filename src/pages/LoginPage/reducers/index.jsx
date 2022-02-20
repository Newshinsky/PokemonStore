import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEY } from "../../../constants/LocalStorageKey";
import * as actions from "../actions/index"




const defaultState = {
    userData: {
    },
    isLoading: false,
    errors: null,
    accessToken: null,
    isAuth: false
};

export const authPageReducer = handleActions({

    [actions.SIGN_IN_REQUEST.toString()]: (state) => {
        return {
            ...state,
            isLoading: true,
            accessToken: null
        };
    },
    [actions.SIGN_IN_SUCCESS.toString()]: (state, { payload }) => {

        const { accessToken, ...userData } = payload.response;

        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken);

        return {
            ...state,
            isAuth: true,
            isLoading: false,
            userData,
            accessToken
        }
    },
    [actions.SIGN_IN_FAIL.toString()]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errors: payload.response
        }
    }

}, defaultState)
