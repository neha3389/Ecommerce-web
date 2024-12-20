import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteById, getQuotes } from "./slice/quoteSlice";
import { useState } from "react";

function App() {
  const quotesState = useSelector((state) => state.quotes);

  const [quoteId, setQuoteId] = useState(0);

  const dispatch = useDispatch();

  function handleButtonClick() {
    dispatch(getQuotes());
  }

  function handleFormSubmit(e) {
    // preventing default behaviour of form submit
    e.preventDefault();
    // dispatch
    dispatch(getQuoteById(quoteId));
  }

  console.log(quotesState);

  return (
    <>
      <h1>Simple react app</h1>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" onChange={(e) => setQuoteId(e.target.value)} />

        <button>Get quote with id</button>
      </form>
    </>
  );
}

export default App;