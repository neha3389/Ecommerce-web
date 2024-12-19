import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getQuotes } from './slice/quoteSlice'

function App() {
  const quotesState = useSelector((state) => state.quotes)
  const dispatch =useDispatch();

  function handledButtonClick(){
    dispatch(getQuotes());
  }

  return (
    <>
    <h1>Simple REact</h1>
    <button onClick={()=> handledButtonClick()}>Quotes</button>
    {quotesState.quotes.map((q)=> {
      return<li key={q.id}>{q.quote}</li>;
    })}
      

    </>
  );
}

export default App
