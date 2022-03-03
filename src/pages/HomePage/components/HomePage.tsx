import React from 'react'
import FirstButton from '../../../components/Button/DefaultButton/CustomButton'
import SuperInput from '../../../components/Input/CustomInput'
import wallpaper from "../../../images/pokemon-logo-png-pokemon-logo-black-transparent-1600-e1595964952147.png"
import styles from "../components/HomePage.module.css"


const HomePage = () => {
    return (
        <div className={styles.homePageContainer}>
            <img className={styles.pokemonLogo} src={wallpaper} alt="" />

            <div className={styles.inputStyle}> <SuperInput /> </div>
            <div className={styles.buttonStyle}>  <FirstButton buttonName="Search" /> </div>

        </div>
    )
}

export default HomePage