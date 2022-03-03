import { handleActions, combineActions } from "redux-actions";
import * as actions from "../actions/index";


const defaultState = {
    isLoading: false,
    errors: null,
    totalPrice: 0,
    quantity: 0,
    itemsList: [],
    createdAt: "",
    orderHistory: []
};


export const orderReducer = handleActions({

    [combineActions(actions.CONFIRM_ORDER_REQUEST.toString(),
        actions.GET_ORDER_REQUEST.toString())]:
        (state) => {
            return { ...state, isLoading: true };
        },
    [actions.CONFIRM_ORDER_SUCCESS.toString()]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            totalPrice: payload.response.totalPrice,
            itemsList: payload.response.itemsList,
            createdAt: payload.response.createdAt
        }
    },
    [actions.GET_ORDER_SUCCESS.toString()]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            orderHistory: payload.response
        }
    },
    [combineActions(actions.CONFIRM_ORDER_FAIL.toString(),
        actions.GET_ORDER_FAIL.toString())]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response
            }
        }
}, defaultState)