import React from 'react'

import styles from "./Card.module.css"


type propsType = {
    email: string
    firstName: string
    gender: string
    lastName: string
    phone: string
}

const Card = (props: propsType) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.face} ${styles.face1}`}>
                    <div className={`${styles.content}`}>
                        <span className={`${styles.stars}`}></span>
                        <h4 className={`${styles.python}`}>{props.lastName}</h4>
                        <h4 className={`${styles.python}`}>{props.email}</h4>
                        <h4 className={`${styles.python}`}>{props.gender}</h4>
                        <p className={`${styles.python}`}>{props.phone}</p>
                    </div>
                </div>
                <div className={`${styles.face} ${styles.face2}`}>
                    <h2>{props.firstName}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card