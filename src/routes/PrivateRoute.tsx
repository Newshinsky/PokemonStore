


import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authSelector } from '../pages/LoginPage/selectors'
import { ROUTES_NAMES } from './RoutesNames'


type PrivateRouteType = {
    children: React.ReactElement
}

const PrivateRoute = ({ children }: PrivateRouteType) => {
    const { isAuth } = useSelector(authSelector)

    return isAuth ? children : <Navigate to={ROUTES_NAMES.LOGIN} />
}

export default PrivateRoute