import React from 'react';
import './Todo.css';

function Todo({ id, task, handleRemove }) {
  const remove = () => handleRemove(id);
  return (
    <>
      <div className="container">
        <p>{task}</p>
        <button onClick={remove}>X</button>
      </div>
    </>
  );
}

export default Todo;
