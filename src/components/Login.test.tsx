import { render, screen } from '@testing-library/react';
import Login from './Login';

test('render username input', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/email/i);
  expect(userInputEl).toBeInTheDocument();
});

test('render password input', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test('render a login button', () => {
  render(<Login />);
  const loginButtonEl = screen.getByRole('button');
  expect(loginButtonEl).toBeInTheDocument();
});

test('render email input empty', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
  expect(userInputEl.value).toBe('');
});

test('render password input empty', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(
    /password/i
  ) as HTMLInputElement;
  expect(passwordInputEl.value).toBe('');
});

test('button should be disable if empty inputs', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeDisabled();
});
