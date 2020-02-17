import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Yo petit test de docker volumes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  console.log('hello');
});
