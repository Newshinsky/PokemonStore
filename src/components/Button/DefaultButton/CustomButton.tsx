import { memo } from 'react'

import styles from "./CustomButton.module.css"

export type PropsType = {
    buttonName: string
    id?: string,
    className?: string
    handleClick?: () => void
}

const CustomButton = memo((props: PropsType) => {
    return (
        <>
            <button onClick={props.handleClick} className={`${styles.button}`}>
                {props.buttonName}
            </button>
        </>
    )
})

export default CustomButton