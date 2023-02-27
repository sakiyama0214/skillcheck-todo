import React from 'react'

export const EditForm = ({newTitle, handleEditInputChange, handleEditTodo, onClickBack}) => {
  return (
    <div className="input-area">
        <input
        type='text'
        label='newTitle'
        value={newTitle}
        onChange={handleEditInputChange}
        />
        <button onClick={handleEditTodo}>編集を保存</button>
        <button onClick={onClickBack}>キャンセル</button>
    </div>
  );
};