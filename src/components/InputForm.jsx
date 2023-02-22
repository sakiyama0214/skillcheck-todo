import React from 'react'

const InputForm = (props) => {
  const {todoTitle, handleSet, handleAdd} = props;
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

export default InputForm;