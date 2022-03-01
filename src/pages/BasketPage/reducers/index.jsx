import { combineActions, handleActions } from "redux-actions";
import * as actions from "../actions/index";

import { cloneDeep } from 'lodash/'

const defaultState = {
  isLoading: false,
  errors: null,
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  customerId: ""
};

export const cartPageReducer = handleActions({

  [combineActions(
    actions.GET_CART_REQUEST.toString(),
    actions.ADD_ITEM_CART_REQUEST.toString(),
    actions.DELETE_ITEM_CART_REQUEST.toString(),
    actions.UPDATE_ITEM_CART_REQUEST
  )]: (state) => {
    return { ...state, isLoading: true };
  },
  [actions.GET_CART_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      itemsList: payload.response.itemsList,
      totalPrice: payload.response.totalPrice,
      quantity: payload.response.quantity,
      customerId: payload.response.customerId
    }
  },
  [actions.DELETE_ITEM_CART_SUCCESS.toString()]: (state, { payload }) => {

    let itemsListCopy = cloneDeep(state.itemsList)
    itemsListCopy = itemsListCopy.filter(e => e.id !== payload.response.removedItemId)

    return {
      ...state,
      isLoading: false,
      itemsList: itemsListCopy,
      totalPrice: payload.response.cartState.totalPrice,
      quantity: payload.response.cartState.quantity
    }
  },

  [actions.ADD_ITEM_CART_SUCCESS.toString()]: (state, { payload }) => {

    return {
      ...state,
      isLoading: false,
      itemsList: payload.response.itemsList,
      totalPrice: payload.response.totalPrice,
      quantity: payload.response.quantity
    }
  },
  [actions.UPDATE_ITEM_CART_SUCCESS.toString()]: (state, { payload }) => {

    let itemsListCopy = cloneDeep(state.itemsList)
    let { cartState, updatedItem } = payload.response

    const findeItem = itemsListCopy.find(e => e.id === updatedItem.id)
    findeItem.quantity = updatedItem.quantity

    return {
      ...state,
      isLoading: false,
      totalPrice: cartState.totalPrice,
      quantity: cartState.quantity,
      itemsList: itemsListCopy
    }
  },
  [combineActions(
    actions.ADD_ITEM_CART_FAIL.toString(),
    actions.DELETE_ITEM_CART_FAIL.toString(),
    actions.UPDATE_ITEM_CART_FAIL.toString(),
    actions.GET_CART_FAIL.toString())
  ]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}
  , defaultState)

