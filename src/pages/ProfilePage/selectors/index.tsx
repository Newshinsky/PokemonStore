import { cartItemsListPageType } from "../../BasketPage/components/BasketPage";
import { orderItem } from "../components/ProfilePage";



export type profilePageType = {
    isLoading: boolean,
    errors: null | string,
    totalPrice: number,
    quantity: number,
    itemsList: cartItemsListPageType[],
    createdAt: string,
    orderHistory: orderItem[]
};


export const profilePageSelector = (state: { profilePage: profilePageType; }) => state.profilePage