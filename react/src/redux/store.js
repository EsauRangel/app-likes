import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taksSlice"

export const store = configureStore({
    reducer:{
        tasks: taskReducer
    }
})