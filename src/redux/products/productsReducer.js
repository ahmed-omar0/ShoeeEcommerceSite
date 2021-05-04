import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, INCREASE_NUM_OF_ITEMS,  DECREASE_NUM_OF_ITEMS, FETCH_PRODUCT,  ADD_ITEM_TO_CART, REMOVE_FROM_CART} from './actionTypes';

export const initState = {
    loading: true,
    products: [],
    error: '',
    numOfItems: 1,
    id: 1,
    cart: []
}

export const productsReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_DATA_REQUEST: 
            return{
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_PRODUCT:
            return{
                ...state,
                id: action.payload
            }
        case INCREASE_NUM_OF_ITEMS:
            return{
                ...state,
                numOfItems: action.payload
            }
        case DECREASE_NUM_OF_ITEMS:
            return{
                ...state,
                numOfItems: action.payload
            }
        case ADD_ITEM_TO_CART:
            // Greate Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) => item.id === action.payload ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item) =>
                            item.id === action.payload ? { ...item, qty: item.qty + state.numOfItems} : item
                    )
                    : [...state.cart, { ...item, qty: state.numOfItems }],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
        default: return state
    }
}