import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./counterSlice";
import counterReducer from "./counterSlice";





export const store = configureStore({
    reducer:{
        //counter is the variablename of the reducer to update the state
        counter: counterReducer
    }
})