import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// smoke test
test('if NewTodoForm renders without crashing', () => {
  render(<NewTodoForm />);
});

//snapshot test
test('if NewTodoForm matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
