import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

// smoke test
test('if Todo renders without crashing', () => {
  render(<Todo />);
});

// snapshot test
test('if Todo matches snapshot', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
