import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";

 export const getQuotes = createAsyncThunk("quotes/getQuotes", async() => {
    const res = await fetch ("https://dummyjson.com/quotes");
    const data =await res.json();
    return data.quotes;
}
);



const quoteSlice = createSlice({
    name : "quotes",
    initialState:{
        quotes:[],
    },
    reducers:{
        getQuote : (state, action)=>{},
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getQuotes.pending ,(state,action) =>
        {
            console.log("req going out");
        })
        .addCase(getQuotes.fulfilled,(state,action)=>{
            state.quotes = action.payload;

        })
        .addCase(getQuotes.rejected ,(state,action)=>{
            console.log("error occured");
        })
    },
});


export const {getQuote} =quoteSlice.actions;

export const quotesReducer = quoteSlice.reducer;
