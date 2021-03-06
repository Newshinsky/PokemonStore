import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { GET_POKEMON_ITEM_REQUEST } from '../actions'
import PokemonItem from '../components/PokemonItem'
import { pokemonsItemSelector } from '../selectors'



type PokemonAbilities = {
    description: string
    title: string
}

type pokemonStats = {
    title: pokemonStatsTitle,
    value: number
}

export type pokemonStatsTitle = 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed' | "'hp'"


export type pokemonItemType = {
    abilities: PokemonAbilities[]
    image: string
    name: string
    price: number
    stats: pokemonStats[]
}

export type pokemonItemPageType = {
    pokemonItem: pokemonItemType,
    isLoading: false,
    errors: null,
}


const PokemonItemPageContainer = () => {

    const dispatch = useDispatch()
    const { pokemonName } = useParams()
    const { pokemonItem, isLoading } = useSelector(pokemonsItemSelector)


    useEffect(() => {
        dispatch(GET_POKEMON_ITEM_REQUEST(pokemonName))
    }, [dispatch, pokemonName])
    return (
        <>
            <PokemonItem pokemonItem={pokemonItem} isLoading={isLoading} />
        </>
    )
}

export default PokemonItemPageContainer