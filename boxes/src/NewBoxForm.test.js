import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// smoke test
test('if NewBoxForm renders without crashing', () => {
  render(<NewBoxForm />);
});

//snapshot test
test('if NewBoxForm matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
