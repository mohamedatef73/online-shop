import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
import {setCartItems} from '../cartItems/setCartItems'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:

        const item = action.payload
        const existItem = state.cartItems.find((cartItems) => cartItems.product === item.product)

        if(existItem){
            return {
                ...state,
                cartItems:state.cartItems.map((cartItems) =>
                cartItems.product === existItem.product ? item: cartItems

                )
            }
        }else{
            return{
                ...state,
                cartItems: [...state.cartItems,item]

        }}


        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItems => cartItems.product !== action.payload)
            }
        default:
            return state
    }
}