import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';
// This is the restricktive type of store 
// We have to register the reducers in the store then only it will take the values from them and then update them
// so it required the list of all the reducers

export const store = configureStore({
    reducer: todoReducer
})