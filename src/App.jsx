import React, { useState } from "react";

import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { EditForm } from "./components/EditForm";

const App= () => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoId, setTodoId] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [editId, setEditId] = useState();

    const handleSetTodoTitle =(e) => {
        setTodoTitle(e.target.value);
    };
    const handleAddTodo = () => {
        setTodos([...todos, {id:todoId, title: todoTitle, status: 'notStarted'}])
        setTodoId(todoId + 1)
        setTodoTitle('')
        console.log(todos);
    };

    const onClickDelete = (targetTodo) => {
        setTodos(todos.filter((todo) => todo !== targetTodo))
    }

    const handleEditInputChange = (e) => {
        setNewTitle(e.target.value);
    }

    const onClickEdit = ({title, id}) => {
        setIsEditing(true);
        setEditId(id);
        setNewTitle(title);
    }

    const handleEditTodo = () => {
        setTodos([...todos].map((todo) => {
        return todo.id === editId ? {...todo, title: newTitle}
        : todo
        }));
        setIsEditing(false);
    }

    const onClickBack = () => {
        setIsEditing(false);
    }

    const handleStatusChange = ({id}, e) => {
        const newTodos = todos.map((todo) => {
            return ({...todo})
        });

        setTodos(newTodos.map((todo) =>
        todo.id === id ? {...todo, status: e.target.value}: todo
        ));
    };

    return (
        <>
            {isEditing ? (
                <EditForm
                    newTitle={newTitle}
                    handleEditInputChange={handleEditInputChange}
                    handleEditTodo={handleEditTodo}
                    onClickBack={onClickBack}
                />
            ) : (
                <InputForm
                    todoTitle={todoTitle}
                    handleSet={handleSetTodoTitle}
                    handleAdd={handleAddTodo}        
                />
            )}
            
            <TodoList
                todos={todos}
                handleStatusChange={handleStatusChange}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete} 
            />
        </>
        
    )
}

export default App;