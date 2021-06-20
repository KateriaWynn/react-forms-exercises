import React, { useState } from 'react';

/** Form for creating a new todo to add to a todo list.
 *
 * Has state for the task for each todo on submission,
 * sends { todo } to function (addTodo) received from parent (TodoList).
 *
 */

function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = { task: 'Complete React assignments' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send { task } to parent & clear form. */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input element */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New todo: </label>
      <input
        type="text"
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />

      <button>Add new todo</button>
    </form>
  );
}

export default NewTodoForm;
