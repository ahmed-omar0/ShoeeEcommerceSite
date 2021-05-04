import {INCREASE_NUM_OF_ITEMS, DECREASE_NUM_OF_ITEMS, FETCH_PRODUCT, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_ITEM_TO_CART, REMOVE_FROM_CART} from './actionTypes';

export const increaseNumOfItems = numOfItems => {
    return{
        type: INCREASE_NUM_OF_ITEMS,
        payload: numOfItems + 1
    }
}
export const decreaseNumOfItems = numOfItems => {
    return{
        type: DECREASE_NUM_OF_ITEMS,
        payload: numOfItems - 1
    }
}
export const fetchProduct = id => {
    return {
        type: FETCH_PRODUCT,
        payload: id
    }
}
export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess = products => {
    return{
        type: FETCH_DATA_SUCCESS,
        payload: products
    }
}
export const fetchDataFailure = error => {
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}
export const addItemToCart = (productId) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: productId
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};