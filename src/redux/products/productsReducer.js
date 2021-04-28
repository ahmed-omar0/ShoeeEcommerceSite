import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_PRODUCT, ADD_ITEM, REMOVE_ITEM} from './actionTypes';

export const initState = {
    loading: true,
    products: [],
    error: '',
    numOfItems: 0,
    id: 1
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
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: action.payload
            }
        case REMOVE_ITEM:
            return {
                ...state,
                numOfItems: action.payload
            }
        default: return state
    }
}