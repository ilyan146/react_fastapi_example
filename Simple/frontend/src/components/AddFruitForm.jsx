import React, { useState } from 'react';
import Counter from './Counter';

const AddFruitForm = ({ addFruit, fruitCount}) => {
  const [fruitName, setFruitName] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
      <div>
        <span>Fruit Count: {fruitCount}</span>
      </div>
    </form>
  );
};

export default AddFruitForm;