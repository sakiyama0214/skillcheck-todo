import React, { useState } from "react";

import InputForm from "./components/InputForm";

const App= () => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoId, setTodoId] = useState(1);

    const handleSetTodoTitle =(e) => {
        setTodoTitle(e.target.value);
    };
    const handleAddTodo = () => {
        setTodos([...todos, {id:todoId, title: todoTitle, status: 'notStarted'}]);
        setTodoId(todoId + 1);
        setTodoTitle('');
    };

    return (
        <>
            <InputForm
                handleSet={handleSetTodoTitle}
                handleAdd={handleAddTodo}
                todoTitle={todoTitle}
            />
            <div className="incomplete-list">
                <ul>
                    {todos.map((todo) => {
                        <li key={todo.id}>
                        <span>{todo.title}</span>
                        <select value={todo.status}>
                            <option value='notStarted'>未着手</option>
                            <option value='inProgress'>作業中</option>
                            <option value={'done'}>完了</option>
                        </select>
                        <button>編集</button>
                        <button>削除</button>
                    </li>
                    })}
                </ul>
            </div>
            <div className="complete-list"></div>
        </>
        
    )
}

export default App;