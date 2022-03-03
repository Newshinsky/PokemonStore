import { memo } from 'react'
import styles from "./CustomButton.module.css"


export type PropsType = {
    buttonName: string
    id?: string,
    className?: string
    handleClick?: () => void
    disabled?: boolean 
}

const CustomButton = memo((props: PropsType) => {
    return (
        <>
            <button disabled={props.disabled} onClick={props.handleClick} className={`${styles.button}`}>
                {props.buttonName}
            </button>
        </>
    )
})

export default CustomButton