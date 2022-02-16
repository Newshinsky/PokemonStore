import React from 'react'

import styles from "./CustomInput.module.css"

const CustomInput = () => {
    return (
        <div>
            <div className={`${styles.container}`}>
                <input type="text" placeholder="Search..." />
                <div className={`${styles.search}`}></div>
            </div>
        </div>
    )
}

export default CustomInput