import { combineReducers } from "redux";
import { pokemonItemPageReducer } from "../pages/PokemonItemPage/reducers";
import { pokemonsPageReducer } from "../pages/PokemonsPage/reducers";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    pokemonsPage: pokemonsPageReducer,
    pokemonItem: pokemonItemPageReducer
})

export default rootReducer