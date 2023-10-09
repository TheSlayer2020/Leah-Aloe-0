'use client'

import React, {useState } from 'react';
export default function Home() {
  const [number, setNum] = useState(0);

  const increment = () => {
    console.log('Increment button clicked');
    setNum((prevNum) => prevNum + 1); 
  }
    
  const decrement = () => {
    console.log('Decrement button clicked');
    setNum((prevNum) => prevNum - 1);
  }
 

  return (
    <center>
    <div>
      
      <nav className='hd'><h1> COUNTER </h1></nav> 

      <nav className='buttonContainer'>
        <nav className='txt'> counter: {number}</nav>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      
      </nav>
    </div>
    </center>
  )
}
