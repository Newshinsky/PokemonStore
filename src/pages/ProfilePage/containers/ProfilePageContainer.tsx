import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../LoginPage/selectors'
import { GET_ORDER_REQUEST } from '../actions'
import ProfilePage from '../components/ProfilePage'
import { profilePageSelector } from '../selectors'

const ProfilePageContainer = () => {

  const dispatch = useDispatch()

  const { orderHistory } = useSelector(profilePageSelector)
  const { userData } = useSelector(authSelector)

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST())
  }, [])

  return (
    <>
      <ProfilePage
        userData={userData}
        orderHistory={orderHistory} /></
    >
  )
}

export default ProfilePageContainer