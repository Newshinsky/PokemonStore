import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasketPageContainer from '../pages/BasketPage/containers/BasketPageContainer'
import HomePage from '../pages/HomePage/components/HomePage'
import LoginForm from '../pages/LoginPage/components/LoginForm'
import PokemonItemPageContainer from '../pages/PokemonItemPage/containers/PokemonItemPageContainer'
import PokemonsPageContainer from '../pages/PokemonsPage/containers/PokemonsPageContainer'
import ProfilePageContainer from '../pages/ProfilePage/containers/ProfilePageContainer'
import RegisterForm from '../pages/RegisterPage/components/RegisterForm'
import PrivateRoute from './PrivateRoute'
import { ROUTES_NAMES } from './RoutesNames'


const RoutesWay = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES_NAMES.REGISTER} element={
                    <RegisterForm />
                } />
                <Route path={ROUTES_NAMES.LOGIN} element={
                    <LoginForm />
                } />
                <Route path={ROUTES_NAMES.HOME} element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                } />
                <Route path={ROUTES_NAMES.BASKET} element={
                    <PrivateRoute>
                        <BasketPageContainer />
                    </PrivateRoute>
                } />
                <Route path={ROUTES_NAMES.POKEMON} element={
                    <PrivateRoute>
                        <PokemonsPageContainer />
                    </PrivateRoute>} />
                <Route path={ROUTES_NAMES.POKEMON_ITEM} element={
                    <PrivateRoute>
                        <PokemonItemPageContainer />
                    </PrivateRoute>} />
                <Route path={ROUTES_NAMES.PROFILE} element={
                    <PrivateRoute>
                        <ProfilePageContainer />
                    </PrivateRoute>} />
            </Routes >
        </>
    )
}

export default RoutesWay