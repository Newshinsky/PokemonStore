import ProgressBar from "@ramonak/react-progress-bar";
import 'animate.css';
import React from 'react';
import FirstButton from '../../../components/Button/FirstButton/CustomButton';
import Loaders from '../../../components/Loaders/Loaders';
import { STATS_ICONS } from '../../../constants/StatsIcons';
import { pokemonItemType } from '../containers/PokemonItemPageContainer';
import styles from "./pokemonItem.module.css";


type imageItemType = {
  hp: string,
  attack: string,
  defense: string,
  "special-attack": string,
  "special-defense": string,
  speed: string,
}

const imageItem: any = {
  "hp": STATS_ICONS.hp,
  "attack": STATS_ICONS.attack,
  "defense": STATS_ICONS.defense,
  "special-attack": STATS_ICONS.specialAttack,
  "special-defense": STATS_ICONS.specialDefense,
  "speed": STATS_ICONS.speed,
};

type PropsType = {
  pokemonItem: pokemonItemType,
  isLoading: false,
}
const animationName = "animate__animated  animate__fadeInDownBig  animate__slow"
const PokemonItem = React.memo((props: PropsType) => {
  return (
    <>
      {props.isLoading
        ? <Loaders />
        : <div className={`${styles.pokemonItemWrapper} animate__animated  animate__zoomInDown`}>
          <div className={`${styles.pokemonItemContainer} `}>
            <div className={`${styles.pokemonInfo} `}>
              <div className={`${styles.pokemonAvatar} ${animationName} animate__delay-0.5s `}>
                <img src={props.pokemonItem.image} alt="Pokemon" />
                <h1> {props.pokemonItem.name.toLocaleUpperCase()}</h1>
                <h2> ${props.pokemonItem.price}</h2>
              </div>
              <div className={`${styles.pokemonAbilities}   ${animationName} animate__delay-1s`}>
                <h2>ABILITIES</h2 >
                {props.pokemonItem.abilities.map((e, i) => {
                  return <p key={i}>{i + 1}: {e.title.toLocaleUpperCase()}</p>
                })}
              </div>
              <FirstButton buttonMove={'Add'} />
            </div>
            <div className={`${styles.pokemonSkills}  ${animationName} animate__delay-2s`}>
              {props.pokemonItem.stats.map((e, i) => {
                return (
                  <div key={i} className={`${styles.pokemonStats}`} >
                    <div className={`${styles.pokemonStatsName}`}>
                      <img src={imageItem[e.title]} alt="" />
                      <h3> {e.title.toLocaleUpperCase()}</h3>
                    </div>
                    <ProgressBar width="80%" bgColor={e.value > 50 ? "#26d48c" : "#d42660"} completed={e.value}></ProgressBar>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    </>)
})

export default PokemonItem