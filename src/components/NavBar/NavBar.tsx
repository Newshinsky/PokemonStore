import React from 'react'
import "../../index.css"
import styles from "./Navbar.module.css"

import { Link } from 'react-router-dom'
import { ROUTES_NAMES } from '../../routes/RoutesNames'

import basket from "../../images/shopping-cart.png"
import home from "../../images/home.png"
import pokemons from "../../images/pokeball.png"
import profile from "../../images/user.png"
import pikachu from "../../images/pikachu.png"

const NavBar = () => {
    return (
        <div>
            <div id="nav" className={`${styles.nav}`}>
                <div className={`${styles.icon}`}>
                    <ul>
                        <li>
                            <Link to={ROUTES_NAMES.HOME}>
                                <img src={home} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.POKEMON}>
                                <img src={pokemons} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.BASKET}>
                                <img src={basket} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.PROFILE}>
                                <img src={profile} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.text}`}>
                    <ul>
                        <li>
                            <Link to={ROUTES_NAMES.HOME}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.POKEMON}>
                                Pokemons
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.BASKET}>
                                Basket
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES_NAMES.PROFILE}>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.info}`}>
                    <div className={`${styles.logo}`} > <img src={pikachu} alt="" /></div>
                    <div className={`${styles.name}`}> PokeShop </div>
                    <div className={`${styles.quote}`}>WHAT WE DO IS WHO WE ARE</div>
                    <div className={`${styles.social}`}>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar