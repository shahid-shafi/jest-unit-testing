import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders apple list', () => {
  render(<App />);
  const apple = screen.getByText(/Apple/i);
  expect(apple).toBeInTheDocument();
});

test('renders banana from list', () => {
  render(<App />);
  const banana = screen.getByText(/Banana/i);
  expect(banana).toBeInTheDocument();
});

test('renders mango list', () => {
  render(<App />);
  const mango = screen.getByText(/Mango/i);
  expect(mango).toBeInTheDocument();
});

test('renders a list', () => {
  render(<App />);
  const listItem = screen.getAllByRole('listitem');
  // expect(listItem).toHaveLength(3);
  // expect(listItem.length).toBe(3);
  expect(listItem.length).toEqual(3);
});

test('renders heading by test-id', () => {
  render(<App />);
  const heading = screen.getByTestId('heading');
  expect(heading).toBeInTheDocument();
});

test('renders sum of two numbers', () => {
  render(<App />);
  const sum = screen.getByTitle('sum');
  expect(sum.textContent).toBe('6');
});
