import api from "../api/config";


export class CartService {

    static instance = new CartService()

    static getCart() {
        return api.get(`/cart`)
    }

    static addItemCart({ id, name, image, quantity, price }: any) {
        const cartItem = {
            id, name, image, quantity, price
        }
        return api.post(`/cart/item`, cartItem)
    }

    static deleteItemCart(pokemonId: number) {
        return api.delete(`/cart/item/${pokemonId}`)
    }

    static updateItemCart({ id, quantity }: any) {
        const cartItem = {
            id, quantity
        }
        return api.patch(`/cart/item`, cartItem)
    }
}

export default CartService.instance

