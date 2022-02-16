import * as pokemonItemPageActions from "../pages/PokemonItemPage/actions/index";
import * as pokemonPageActions from "../pages/PokemonsPage/actions/index";
import { PokemonService } from "../services/pokemonsService";

const apiCallMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMON_REQUEST]: PokemonService.getPokemons,
    [pokemonItemPageActions.GET_POKEMON_ITEM_REQUEST]: PokemonService.getPokemonItem
  }
  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping