import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  /** Add new todo object to TodoList. */
  const addTodo = (todo) => {
    const newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  /** Remove a todo object from TodoList. */
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      handleRemove={removeTodo}
    />
  ));

  return (
    <div className="todo-list">
      <div>
        <NewTodoForm addTodo={addTodo} />
        {todoComponents}
      </div>
    </div>
  );
}

export default TodoList;
