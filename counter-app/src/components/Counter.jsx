import React, { useState } from 'react';
import Button from './Button';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div className="counter-container">
      <h2>Counter: {counter}</h2>
      <br />
      <Button onClick={() => setCounter(counter + 1)}>+1</Button>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
    </div>
  );
};

export default Counter;