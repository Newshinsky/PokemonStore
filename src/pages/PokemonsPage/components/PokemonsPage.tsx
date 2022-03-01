import React, { ChangeEvent, memo } from 'react'
import { Link } from 'react-router-dom'
import FirstButton from '../../../components/Button/DefaultButton/CustomButton'
import Loaders from '../../../components/Loaders/Loaders'
import CustomPagination from '../../../components/Pagination'
import { ROUTES_NAMES } from '../../../routes/RoutesNames'
import { PokemonsListType } from '../containers/PokemonsPageContainer'
import styles from "./PokemonsPage.module.css"





type PropsType = {
  pokemonsList: PokemonsListType[],
  isLoading: boolean,
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void,
  page: number,
  addItemCart: (id: number) => void,
}

const PokemonsPage = memo((props: PropsType) => {
  return (
    <>
      <CustomPagination
        currentPage={props.page}
        onPageChange={props.handlePageChange}
        pageAmount={20} />
      <div className={`${styles.wrapper}`}>
        {
          props.isLoading
            ? <Loaders />
            : props.pokemonsList.map((e: PokemonsListType) =>
              < div className={`${styles.container}`} key={e.id}>
                <div className={`${styles.card}`}>
                  <div className={`${styles.box}`}>
                    <div className={`${styles.content}`}>
                      <h2>{e.id}</h2>
                      <h3>{e.name.toUpperCase()}</h3>
                      <img src={e.image} alt="" />
                      <p>${e.price}</p>
                      <Link to={`${ROUTES_NAMES.POKEMON}/${e.id}`} >
                        Read More
                      </Link>
                      <FirstButton handleClick={() => props.addItemCart(e.id)} buttonName="Add" />
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div >
    </>
  )
})

export default PokemonsPage