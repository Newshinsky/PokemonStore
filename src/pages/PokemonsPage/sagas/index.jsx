// import * as actions from '../actions';

// import { put, call, takeEvery } from "redux-saga/effects"
// import { PokemonService } from '../../../services/pokemonsService';




// function* pokemonsPageWorker() {
//     try {
//         const response = yield call(PokemonService.getPokemons)
//         yield put(actions.GET_POKEMON_SUCCESS(response))

//     } catch (err) {
//         yield put(actions.GET_POKEMON_FAIL(err))
//     }
// }

// export function* pokemonsPageWatcher() {
//     yield takeEvery(actions.GET_POKEMON_REQUEST, pokemonsPageWorker)
// }