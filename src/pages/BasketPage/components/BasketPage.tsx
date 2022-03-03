import 'animate.css';
import React, { memo } from 'react';
import CustomButton from '../../../components/Button/DefaultButton/CustomButton';
import SnackBar from '../../../components/SnackBar/SnackBar';
import styles from "./BasketPage.module.css";


type PropsType = {
    itemsList: cartItemsListPageType[];
    quantity: number,
    totalPrice: number,
    deleteItemCart: (id: number) => void,
    updateItemCart: (id: number, itemQuantity: number) => void,
    addOrderHandler: () => void,
    isLoading: boolean,
    open: any,
    handleClose: any
}

export type cartPageType = {
    totalPrice: number,
    quantity: number,
    _id: string,
    customerId: string,
    itemsList: cartItemsListPageType[]
    isLoading: false,
    errors: null,
}

export type cartItemsListPageType = {
    id: number
    image: string
    name: string
    price: number
    quantity: number
    _id: string
}

const BasketPage = memo((props: PropsType) => {

    const animationName = "animate__animated  animate__backInDown animate__slow"

    return (
        <div className={`${styles.basketPageWrapper}`}>
            <div className={`${styles.totalInformation}`}>
                <h2>{`Total Price:  ${props.totalPrice}$`}</h2>
                <h2>{`Total Quantity:   ${props.quantity}`}</h2>
                <CustomButton
                    buttonName="Confirm"
                    handleClick={() => props.addOrderHandler()}
                />
            </div>
            {props.itemsList.map((e: cartItemsListPageType, i: number) =>
                <div key={i} className={`${styles.basketPageContainer} ${animationName}`} >
                    <div className={`${styles.basketImage}`}>
                        <img src={e.image} alt="pokemonImage" />
                    </div>
                    <div className={`${styles.description}`}>
                        <div>{`Name:  ${e.name.toLocaleUpperCase()}`}</div>
                        <div>{`Price:  ${e.price}`}</div>
                        <div>{`Quantity:  ${e.quantity}`}</div>
                    </div>
                    <div className={`${styles.buttonsWrapper}`} >
                        <button
                            disabled={e.quantity === 1 || props.isLoading}
                            onClick={() => props.updateItemCart(e.id, e.quantity - 1)}
                            className={`${styles.button}`}>
                            -
                        </button>
                        <button
                            disabled={props.isLoading}
                            onClick={() => props.deleteItemCart(e.id)}
                            className={`${styles.cornerButton} `}>
                            Delete
                        </button>
                        <button
                            disabled={props.isLoading}
                            onClick={() => props.updateItemCart(e.id, e.quantity + 1)}
                            className={`${styles.button}`}>
                            +
                        </button>
                    </div>
                </div>)}
            <SnackBar text={"Thanks for your order"} open={props.open} handleClose={props.handleClose} />
        </div >
    )
})

export default BasketPage