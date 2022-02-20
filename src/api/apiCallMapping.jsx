import * as pokemonItemPageActions from "../pages/PokemonItemPage/actions/index";
import * as pokemonPageActions from "../pages/PokemonsPage/actions/index";
import * as authActions from "../pages/LoginPage/actions/index";

import { PokemonService } from "../services/pokemonsService";
import {AuthService} from "../services/AuthService";


const apiCallMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMON_REQUEST]: PokemonService.getPokemons,
    [pokemonItemPageActions.GET_POKEMON_ITEM_REQUEST]: PokemonService.getPokemonItem,

    [authActions.SIGN_IN_REQUEST]: AuthService.signIn
  }
  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping