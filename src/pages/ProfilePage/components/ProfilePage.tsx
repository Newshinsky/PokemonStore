import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';
import Card from '../../../components/Card/Card';
import { cartPageType } from '../../BasketPage/components/BasketPage';
import { UserDataType } from '../../LoginPage/selectors';
import styles from "./ProfilePage.module.css";



type orderItem = {
  createdAt: string
  customerId: string
  itemsList: cartPageType[]
  totalPrice: number
}

type PropsType = {
  orderHistory: orderItem[]
  userData: UserDataType
}



const ProfilePage = (props: PropsType) => {
  return (
    <>
      <Card
        email={props.userData.email}
        firstName={props.userData.firstName}
        gender={props.userData.gender}
        lastName={props.userData.lastName}
        phone={props.userData.phone} />

      <h1>THANKS FOR YOUR ORDERS</h1>
      {props.orderHistory.map((e: orderItem, i: number) =>
        <div key={i} className={styles.orderWrapper}>
          <Accordion sx={{
            width: "100%",
            backgroundColor: "#292929",
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.orderNameWrapper}>
                <span className={styles.orderName}> Order {i + 1} </span>
                <span className={styles.orderName}>  Total Price: {e.totalPrice}</span>
                <span className={styles.orderName}>  Date: {e.createdAt}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {e.itemsList.map((e: cartPageType, i: number) =>
                  <span key={i} className={styles.itemWrapper}>
                    <span>
                      <img src={e.image} alt="pokemonImage" />
                    </span>
                    <span>
                      {i + 1}. {e.name.toLocaleUpperCase()}
                    </span>
                    <span>
                      Quantity:  {e.quantity}
                    </span>
                    <span>
                      Price:  {e.price}
                    </span>
                  </span>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>)}

    </>
  )
}

export default ProfilePage