import api from "../api/config";


export class PokemonService {

    static instance = new PokemonService()

    static getPokemons(page: number) {

        return api.get(`/products?page=${page}`)
    }
    static getPokemonItem(pokemonId: number) {
        return api.get(`/products/${pokemonId}`)
    }
}

export default PokemonService.instance

