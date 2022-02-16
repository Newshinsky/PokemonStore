import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasketPage from '../pages/BasketPage/components/BasketPage'
import HomePage from '../pages/HomePage/components/HomePage'
import PokemonItemPageContainer from '../pages/PokemonItemPage/containers/PokemonItemPageContainer'
import PokemonsPageContainer from '../pages/PokemonsPage/containers/PokemonsPageContainer'
import ProfilePage from '../pages/ProfilePage/components/ProfilePage'
import { ROUTES_NAMES } from './RoutesNames'


const RoutesWay = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES_NAMES.HOME} element={<HomePage />} />
                <Route path={ROUTES_NAMES.BASKET} element={<BasketPage />} />
                <Route path={ROUTES_NAMES.POKEMON} element={<PokemonsPageContainer />} />
                <Route path={ROUTES_NAMES.POKEMON_ITEM} element={<PokemonItemPageContainer />} />
                <Route path={ROUTES_NAMES.PROFILE} element={<ProfilePage />} />
            </Routes>
        </>
    )
}

export default RoutesWay