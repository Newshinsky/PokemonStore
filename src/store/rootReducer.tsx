import { combineReducers } from "redux";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/es/storage";
import { authPageReducer } from "../pages/LoginPage/reducers";
import { pokemonItemPageReducer } from "../pages/PokemonItemPage/reducers";
import { pokemonsPageReducer } from "../pages/PokemonsPage/reducers";
import { persistReducer } from "redux-persist";


export type AppRootStateType = ReturnType<typeof rootReducer>




const authBlackListedFields = createBlacklistFilter("auth", [
    "isLoading",
    "errors",
]);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
    transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
    auth: authPageReducer,
    pokemonsPage: pokemonsPageReducer,
    pokemonItem: pokemonItemPageReducer,

})

export default persistReducer(persistConfig, rootReducer);