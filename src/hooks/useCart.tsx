import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ITEM_CART_REQUEST, DELETE_ITEM_CART_REQUEST, GET_CART_REQUEST, UPDATE_ITEM_CART_REQUEST } from '../pages/BasketPage/actions'
import { cartPageSelector } from '../pages/BasketPage/selectors'
import { pokemonsPageSelector } from '../pages/PokemonsPage/selectors'

export const useCart = () => {

    const dispatch = useDispatch()
    const { itemsList, quantity, totalPrice, errors, customerId } = useSelector(cartPageSelector)
    const { pokemonsList } = useSelector(pokemonsPageSelector)

    const getCartState = useCallback(() => {
        dispatch(GET_CART_REQUEST())
    }, [dispatch])

    const deleteItemCart = useCallback((id: number) => {
        dispatch(DELETE_ITEM_CART_REQUEST(id))
    }, [dispatch])

    const updateItemCart = useCallback((id: number, quantity: number) => {
        dispatch(UPDATE_ITEM_CART_REQUEST({ id, quantity }))
    }, [dispatch])

    const addItemCart = (id: number) => {
        const cartPoke = pokemonsList.find(e => e.id === id)
        dispatch(ADD_ITEM_CART_REQUEST({ ...cartPoke, quantity: 1 }))
    }
    return (
        { customerId, errors, totalPrice, quantity, itemsList, addItemCart, updateItemCart, deleteItemCart, getCartState }
    )
}
