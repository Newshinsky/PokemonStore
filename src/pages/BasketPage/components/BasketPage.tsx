import React, { memo } from 'react'
import styles from "./BasketPage.module.css"

import 'animate.css';
import CustomButton from '../../../components/Button/DefaultButton/CustomButton';

type PropsType = {
    itemsList: cartPageType[];
    quantity: number,
    totalPrice: number,
    deleteItemCart: (id: number) => void,
    updateItemCart: (id: number, itemQuantity: number) => void,
    addOrderHandler: () => void
}

export type cartPageType = {
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
            {props.itemsList.map((e: cartPageType, i: number) =>
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
                            disabled={e.quantity === 1}
                            onClick={() => props.updateItemCart(e.id, e.quantity - 1)}
                            className={`${styles.button}`}>
                            -
                        </button>
                        <button
                            onClick={() => props.deleteItemCart(e.id)}
                            className={`${styles.cornerButton} `}>
                            Delete
                        </button>
                        <button
                            onClick={() => props.updateItemCart(e.id, e.quantity + 1)}
                            className={`${styles.button}`}>
                            +
                        </button>
                    </div>
                </div>)}
        </div>
    )
})

export default BasketPage