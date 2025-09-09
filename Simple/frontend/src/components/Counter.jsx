import React from 'react';

const Counter = ({ count, setCount }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    <span>{count}</span>
  </div>
);

export default Counter;