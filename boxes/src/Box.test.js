import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

// smoke test
test('if Box renders without crashing', () => {
  render(<Box />);
});

// snapshot test
test('if Box matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
