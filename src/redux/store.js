import {configureStore} from '@reduxjs/toolkit' ;
import filterSlice from './filterSlice';
import todoReducer from './todoSlice'

export default configureStore({
reducer:{
todos:todoReducer,
filter:filterSlice
},

})