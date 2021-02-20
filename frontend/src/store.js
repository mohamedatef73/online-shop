import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer  } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer 
})

const stringCartItemsFromStorage = localStorage.getItem('cartItems'); 

const cartItemsFromStorage = stringCartItemsFromStorage ?
 JSON.parse(stringCartItemsFromStorage) : []

 const stringUserInfoFromStorage = localStorage.getItem('userInfo');

 const userInfoFromStorage = stringUserInfoFromStorage ? 
 JSON.parse(stringUserInfoFromStorage) : null

const initialState = {
    cart: {cartItems : cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store
