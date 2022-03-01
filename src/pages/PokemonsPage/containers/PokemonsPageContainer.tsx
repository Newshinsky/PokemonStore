import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCart } from '../../../hooks'
import { AppRootStateType } from '../../../store/rootReducer'
import { GET_POKEMON_REQUEST } from '../actions'
import PokemonsPage from '../components/PokemonsPage'
import { pokemonsPageSelector } from '../selectors'


export type PokemonsListType = {
    id: number
    image: string
    name: string
    price: number
}

export type PokemonPageType = {
    pokemonsList: PokemonsListType[],
    isLoading: boolean,
    errors: null | string,
}

const PokemonsPageContainer = () => {
    const dispatch = useDispatch()

    const { isLoading, pokemonsList } = useSelector<AppRootStateType, PokemonPageType>(pokemonsPageSelector)
    const { addItemCart } = useCart()

    const initialPage = localStorage.getItem('page')

    const [page, SetPage] = useState<number>(+initialPage! || 1)

    const handlePageChange = useCallback((event: ChangeEvent<unknown>, page: number) => {
        SetPage(page)
    }, [])


    useEffect(() => {
        dispatch(GET_POKEMON_REQUEST(page))
        return localStorage.setItem('page', page.toString())
    }, [dispatch, page])
    return (

        <div>
            <PokemonsPage
                handlePageChange={handlePageChange}
                pokemonsList={pokemonsList}
                isLoading={isLoading}
                page={page}
                addItemCart={addItemCart}

            />
        </div>
    )
}

export default PokemonsPageContainer