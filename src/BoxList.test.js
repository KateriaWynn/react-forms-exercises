import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
test('if BoxList renders without crashing', () => {
  render(<BoxList />);
});

// snapshot test
test('if Boxlist matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test('if new box is added to BoxList', () => {
  const { getByLabelText, queryByText } = render(<BoxList />);
  // no boxes yet
  expect(queryByText('X')).not.toBeInTheDocument();

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');
  const submitBtn = queryByText('Add new box');

  // fill out the form
  fireEvent.change(backgroundColorInput, { target: { value: '#5d2828' } });
  fireEvent.change(heightInput, { target: { value: 300 } });
  fireEvent.change(widthInput, { target: { value: 300 } });
  fireEvent.click(submitBtn);

  // box exists!
  expect(queryByText('X')).toBeInTheDocument();
});

test('if a clicked box is removed from BoxList', () => {
  const { getByLabelText, queryByText } = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');
  const submitBtn = queryByText('Add new box');

  // fill out the form
  fireEvent.change(backgroundColorInput, { target: { value: '#5d2828' } });
  fireEvent.change(heightInput, { target: { value: 300 } });
  fireEvent.change(widthInput, { target: { value: 300 } });
  fireEvent.click(submitBtn);

  // box exists!
  expect(queryByText('X')).toBeInTheDocument();

  // click the remove button and the box should be gone
  fireEvent.click(queryByText('X'));
  expect(queryByText('X')).not.toBeInTheDocument();
});
