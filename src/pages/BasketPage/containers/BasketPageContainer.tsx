import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EmptyPage from '../../../components/EmptyPage/EmptyPage'
import { useCart } from '../../../hooks'
import { CONFIRM_ORDER_REQUEST } from '../../ProfilePage/actions'
import BasketPage from '../components/BasketPage'

const BasketPageContainer = () => {

    const dispatch = useDispatch()

    const { totalPrice,
        quantity,
        itemsList,
        getCartState,
        deleteItemCart,
        updateItemCart,
        customerId,
        isLoading,
        open,
        handleClose, handleClick } = useCart()

    useEffect(() => {
        getCartState()
    }, [getCartState])

    const addOrderHandler = () => {
        const profileOrderData = {
            customerId: customerId,
            totalPrice: totalPrice,
            itemsList: itemsList,
        }
        dispatch(CONFIRM_ORDER_REQUEST(profileOrderData))
        handleClick()
        setTimeout(() => {
            getCartState()
        }, 1000)

    }

    return (
        <div>
            {!quantity ?
                <EmptyPage /> :
                <BasketPage
                    deleteItemCart={deleteItemCart}
                    itemsList={itemsList}
                    quantity={quantity}
                    totalPrice={totalPrice}
                    updateItemCart={updateItemCart}
                    addOrderHandler={addOrderHandler}
                    isLoading={isLoading}
                    open={open}
                    handleClose={handleClose}
                />}
        </div>
    )
}

export default BasketPageContainer