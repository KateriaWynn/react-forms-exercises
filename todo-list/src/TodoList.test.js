import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// smoke test
test('if TodoList renders without crashing', () => {
  render(<TodoList />);
});

// snapshot test
test('if TodoList matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('if new todo is added to TodoList', () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  // no todos yet
  expect(queryByText('Go to post office')).not.toBeInTheDocument();

  const todoInput = getByLabelText('New todo:');
  const submitBtn = queryByText('Add new todo');

  // fill out the form
  fireEvent.change(todoInput, { target: { value: 'Go to post office' } });
  fireEvent.click(submitBtn);

  // a new todo exists!
  expect(queryByText('Go to post office')).toBeInTheDocument();
});

test('if a clicked box is removed from TodoList', () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const todoInput = getByLabelText('New todo:');
  const submitBtn = queryByText('Add new todo');

  // fill out the form
  fireEvent.change(todoInput, { target: { value: 'Go to post office' } });
  fireEvent.click(submitBtn);

  // a new todo exists!
  expect(queryByText('Go to post office')).toBeInTheDocument();

  // click the remove button and the todo should be gone
  fireEvent.click(queryByText('X'));
  expect(queryByText('Go to post office')).not.toBeInTheDocument();
});
