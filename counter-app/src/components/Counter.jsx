import React, { useState } from 'react';
import Button from './Button';
import Styled from '@emotion/styled';
import './Counter.css';

const Error = Styled.span`
  color: red;
`;

const Success = Styled.span`
  color: green;
`;

const Counter = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div className="counter-container">
      <h2>Counter: {counter < 0 ? <Error>{counter}</Error> : <Success>{counter}</Success>}</h2>
      <br />
      <Button onClick={() => setCounter(counter + 1)}>+1</Button>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
    </div>
  );
};

export default Counter;