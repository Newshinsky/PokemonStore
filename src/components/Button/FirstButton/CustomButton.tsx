import React from 'react'

import styles from "./CustomButton.module.css"

export type PropsType = {
    buttonMove: string
    id?: string,
    className?: string
    handleClick?: () => void
}

const CustomButton = React.memo((props: PropsType) => {
    return (
        <>
            <button onClick={props.handleClick} className={`${styles.button}`}>
                {props.buttonMove}
            </button>
        </>
    )
})

export default CustomButton