import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addOne = ()=>{
    if(count<20){
      setCount(count+1);
    }
  }

  const minusOne = () =>{
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Current counter Value: {count}</h1>
      <button onClick={addOne}>Plus One</button>
      <button onClick={minusOne}>Minus One</button>
    </>
  )
}

export default App
