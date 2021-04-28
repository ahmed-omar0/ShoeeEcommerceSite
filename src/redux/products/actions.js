import {ADD_ITEM, REMOVE_ITEM, FETCH_PRODUCT, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './actionTypes';

export const addItem = numOfItems => {
    return{
        type: ADD_ITEM,
        payload: numOfItems + 1
    }
}
export const removeItem = numOfItems => {
    return{
        type: REMOVE_ITEM,
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
