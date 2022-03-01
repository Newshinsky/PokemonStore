import api from "../api/config";


export class OrderService {

    static instance = new OrderService()

    static getOrderInfo() {
        return api.get(`/order`)
    }

    static confirmOrderCart(curtomerInfo: any) {
        return api.post(`/order`, curtomerInfo)
    }
}

export default OrderService.instance