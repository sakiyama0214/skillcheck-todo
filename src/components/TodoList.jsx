import React from "react";

const TodoList = (props) => {
    const {todos, handleStatusChange, onClickEdit, onClickDelete} = props;
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo,index) => {
                    return (
                        <li key={todo.id}>
                            <span>{todo.title}</span>
                            <select value={todo.status} onChange={(e) => handleStatusChange(todo, e)}>
                                <option value='notStarted'>未着手</option>
                                <option value='inProgress'>作業中</option>
                                <option value='done'>完了</option>
                            </select>
                            <button onClick={() => onClickEdit(todo)}>編集</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;