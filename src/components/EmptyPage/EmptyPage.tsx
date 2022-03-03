import React from 'react'
import Empty from "./../../images/png-transparent-shopping-einkaufskorb-plastic-basket-others-miscellaneous-material-trade.png"
import styles from "./EmptyPage.module.css"

const EmptyPage = () => {
    return (
        <div className={`${styles.emptyPageWrapper}`}>
            <h1>Корзина Пуста</h1>
            <img src={Empty} alt="EmptyPage" />
        </div>
    )
}

export default EmptyPage