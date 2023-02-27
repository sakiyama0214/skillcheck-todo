import React from 'react'

export const InputForm = ({todoTitle, handleSet, handleAdd}) => {
  return (
    <div className="input-area">
      <input
        type='text'
        label='title'
        value={todoTitle}
        onChange={handleSet}
      />
      <button onClick={handleAdd}>作成</button>
    </div>
  );
};