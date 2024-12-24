import './App.css'
import { useState } from 'react';

function App() {
  const[count, setCount] = useState(0);
  //let count = 0;

  const increment = () =>{
    setCount(count+1);
    // count+=1;
  }
  const decrement = () =>{
    setCount(count-1)
    // count-=1;
  }

  return (
    <>
    <span>My Counter</span>
    <p>The count is {count}</p>
    <button className='button' onClick={increment}>+</button>
    <button className='button' onClick={decrement}>-</button>
    </>
  )
}

export default App
