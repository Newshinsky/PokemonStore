import { createAction } from "redux-actions";


export const GET_ORDER_REQUEST = createAction("GET_ORDER_REQUEST");
export const GET_ORDER_SUCCESS = createAction("GET_ORDER_SUCCESS");
export const GET_ORDER_FAIL = createAction("GET_ORDER_FAIL");


export const CONFIRM_ORDER_REQUEST = createAction("CONFIRM_ORDER_REQUEST");
export const CONFIRM_ORDER_SUCCESS = createAction("CONFIRM_ORDER_SUCCESS");
export const CONFIRM_ORDER_FAIL = createAction("CONFIRM_ORDER_FAIL");