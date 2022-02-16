import { handleActions } from "redux-actions";
import * as actions from "../actions/index"



const defaultState = {
  pokemonItem: {
    abilities: [],
    stats: [],
    name: "",
    title: ""
  },
  isLoading: false,
  errors: null,
};

export const pokemonItemPageReducer = handleActions({

  [actions.GET_POKEMON_ITEM_REQUEST.toString()]: (state) => {
    return { ...state, isLoading: true };
  },
  [actions.GET_POKEMON_ITEM_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      pokemonItem: payload.response
    }
  },
  [actions.GET_POKEMON_ITEM_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }

}, defaultState)

