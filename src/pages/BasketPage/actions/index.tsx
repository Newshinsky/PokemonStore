import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createAction("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");

export const ADD_ITEM_CART_REQUEST = createAction("ADD_ITEM_CART_REQUEST");
export const ADD_ITEM_CART_SUCCESS = createAction("ADD_ITEM_CART_SUCCESS");
export const ADD_ITEM_CART_FAIL = createAction("ADD_ITEM_CART_FAIL");

export const DELETE_ITEM_CART_REQUEST = createAction("DELETE_ITEM_CART_REQUEST");
export const DELETE_ITEM_CART_SUCCESS = createAction("DELETE_ITEM_CART_SUCCESS");
export const DELETE_ITEM_CART_FAIL = createAction("DELETE_ITEM_CART_FAIL");

export const UPDATE_ITEM_CART_REQUEST = createAction("UPDATE_ITEM_CART_REQUEST");
export const UPDATE_ITEM_CART_SUCCESS = createAction("UPDATE_ITEM_CART_SUCCESS");
export const UPDATE_ITEM_CART_FAIL = createAction("UPDATE_ITEM_CART_FAIL");



