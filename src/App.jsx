import React, { useState } from "react";

import InputForm from "./components/InputForm";

const App= () => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoId, setTodoId] = useState(1);
    const [isEditing, setIsEditing] = useState(false);

    const handleSetTodoTitle =(e) => {
        setTodoTitle(e.target.value);
    };
    const handleAddTodo = () => {
        setTodos([...todos, {id:todoId, title: todoTitle, status: 'notStarted'}])
        setTodoId(todoId + 1)
        setTodoTitle('')
        console.log(todos);
    };

    const onClickDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    return (
        <>
            {isEditing ? (
                <div></div>
            ) : (
                <InputForm
                    todoTitle={todoTitle}
                    handleSet={handleSetTodoTitle}
                    handleAdd={handleAddTodo}        
                />
            )}
            
            <div className="incomplete-list">
                <ul>
                    {todos.map((todo,index) => {
                        return (
                            <li key={todo.id}>
                                <span>{todo.title}</span>
                                <select value={todo.status}>
                                    <option value='notStarted'>未着手</option>
                                    <option value='inProgress'>作業中</option>
                                    <option value='done'>完了</option>
                                </select>
                                <button>編集</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="complete-list"></div>
        </>
        
    )
}

export default App;