import { configureStore } from "@reduxjs/toolkit";
import { quotesReducer } from "../slice/quoteSlice";

 export default  configureStore({
    reducer:{
        quotes: quotesReducer,
    }
});