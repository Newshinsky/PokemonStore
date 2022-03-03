import api from "../api/config";
import { cartItemsListPageType } from "../pages/BasketPage/components/BasketPage";


export type confirmOrderCartType = {
    customerId: string,
    totalPrice: number,
    itemsList: cartItemsListPageType[],
}

export class OrderService {

    static instance = new OrderService()

    static getOrderInfo() {
        return api.get(`/order`)
    }

    static confirmOrderCart(curtomerInfo: confirmOrderCartType) {
        return api.post(`/order`, curtomerInfo)
    }
}

export default OrderService.instance