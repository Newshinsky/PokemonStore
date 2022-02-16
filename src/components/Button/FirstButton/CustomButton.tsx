import React from 'react'

import styles from "./CustomButton.module.css"

export type PropsType = {
    buttonMove: string
}

const CustomButton = React.memo((props: PropsType) => {
    return (
        <>
            <button className={`${styles.button}`}>
                {props.buttonMove}
            </button>
        </>
    )
})

export default CustomButton