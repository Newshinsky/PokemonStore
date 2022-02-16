import { handleActions } from "redux-actions";
import * as actions from "../actions/index"



const defaultState = {
  pokemonsList: [],
  isLoading: false,
  errors: null,
};

export const pokemonsPageReducer = handleActions({

  [actions.GET_POKEMON_REQUEST.toString()]: (state) => {
    return { ...state, isLoading: true };
  },
  [actions.GET_POKEMON_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      pokemonsList: payload.response
    }
  },
  [actions.GET_POKEMON_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  },
  [actions.SORT_POKEMON_BY_NAME.toString()]: (state) => {
    console.log(state.pokemonsList.sort((a, b) => a.price - b.price))
    return {
      ...state,
      pokemonsList: state.pokemonsList.sort((a, b) => a.price - b.price)
    }
  }
}, defaultState)

