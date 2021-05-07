import  {createStore, applyMiddleware} from 'redux';
import { productsReducer } from './products/productsReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from './products/actions';
import axios from 'axios';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['numOfItems', 'cartItems']
}
const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware),);
export let persistor = persistStore(store);
const unsubscribe = store.subscribe(() => true);

const fetchData = () => {
    return  dispatch => {
        dispatch(fetchDataRequest());
        axios.get('https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products')
        .then(response => {
            const products = response.data;
            dispatch(fetchDataSuccess(products));
        })
        .catch(err => {
            dispatch(fetchDataFailure(err.message))
        })
    }
}

store.dispatch(fetchData());
unsubscribe();


