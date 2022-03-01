import * as cartActions from "../pages/BasketPage/actions/index";
import * as authActions from "../pages/LoginPage/actions/index";
import * as pokemonItemPageActions from "../pages/PokemonItemPage/actions/index";
import * as pokemonPageActions from "../pages/PokemonsPage/actions/index";
import * as orderActions from "../pages/ProfilePage/actions/index";
import * as registerActions from "../pages/RegisterPage/actions/index";

import { AuthService } from "../services/AuthService";
import { CartService } from "../services/CartService";
import { OrderService } from "../services/OrderService";
import { PokemonService } from "../services/PokemonsService";


const apiCallMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMON_REQUEST]: PokemonService.getPokemons,
    [pokemonItemPageActions.GET_POKEMON_ITEM_REQUEST]: PokemonService.getPokemonItem,

    [authActions.SIGN_IN_REQUEST]: AuthService.signIn,
    [registerActions.SIGN_UP_REQUEST]: AuthService.signUp,

    [cartActions.GET_CART_REQUEST]: CartService.getCart,
    [cartActions.ADD_ITEM_CART_REQUEST]: CartService.addItemCart,
    [cartActions.DELETE_ITEM_CART_REQUEST]: CartService.deleteItemCart,
    [cartActions.UPDATE_ITEM_CART_REQUEST]: CartService.updateItemCart,

    [orderActions.CONFIRM_ORDER_REQUEST]: OrderService.confirmOrderCart,
    [orderActions.GET_ORDER_REQUEST]: OrderService.getOrderInfo,

  }
  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping