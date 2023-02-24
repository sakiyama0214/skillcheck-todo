import React from 'react'

const EditForm = (props) => {
    const {newTitle, handleEditInputChange, handleEditTodo, onClickBack} = props;
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

export default EditForm