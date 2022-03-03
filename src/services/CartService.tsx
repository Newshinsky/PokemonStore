import api from "../api/config";


export type addItemCartType = {
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
}

export type updateItemCartType = {
    id: string,
    quantity: number,
}
export class CartService {

    static instance = new CartService()

    static getCart() {
        return api.get(`/cart`)
    }

    static addItemCart({ id, name, image, quantity, price }: addItemCartType) {
        const cartItem = {
            id, name, image, quantity, price
        }
        return api.post(`/cart/item`, cartItem)
    }

    static deleteItemCart(pokemonId: number) {
        return api.delete(`/cart/item/${pokemonId}`)
    }

    static updateItemCart({ id, quantity }: updateItemCartType) {
        const cartItem = {
            id, quantity
        }
        return api.patch(`/cart/item`, cartItem)
    }
}

export default CartService.instance

