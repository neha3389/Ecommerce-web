import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// action
// dispatch(getQuotes())

export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();
  // data = {quotes : [30 items], total: 30}
  return data.quotes;
});

export const getQuoteById = createAsyncThunk(
  "quotes/getQuoteById",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/quotes/${id}`);
    const data = await res.json();
    // data = {id: 4, quote: "", author: ""}
    return data;
  }
);

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
    quote: {},
    status: "idle", // "loading" "failed" "succeseded"
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuoteById.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(getQuoteById.fulfilled, (state, action) => {
        state.quote = action.payload;
        console.log("Successfully fetched quote");
      })
      .addCase(getQuoteById.rejected, (state, action) => {
        console.log("Failed");
      });
  },
});

export const quotesReducer = quoteSlice.reducer;