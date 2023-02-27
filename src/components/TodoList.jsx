import React from "react";

export const TodoList = ({todos, handleStatusChange, onClickEdit, onClickDelete}) => {
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
                            <button onClick={() => onClickDelete(todo)}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};