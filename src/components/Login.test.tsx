import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

test('render username input', () => {
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
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
  const emailInputEl = screen.getByPlaceholderText(
    /email/i
  ) as HTMLInputElement;
  expect(emailInputEl.value).toBe('');
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

test('email error message should be invisible', () => {
  render(<Login />);
  const emailErrorMessage = screen.getByTestId('email-error');
  expect(emailErrorMessage).not.toBeVisible();
});

test('password error message should be invisible', () => {
  render(<Login />);
  const emailErrorMessage = screen.getByTestId('password-error');
  expect(emailErrorMessage).not.toBeVisible();
});

test('render email input should change', () => {
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(
    /email/i
  ) as HTMLInputElement;
  const testValue = 'test@example.com';
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

test('render password input should change', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(
    /password/i
  ) as HTMLInputElement;
  const testValue = 'test@123';
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button shouldn't be disable for filled inputs", () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  const emailInputEl = screen.getByPlaceholderText(
    /email/i
  ) as HTMLInputElement;
  const passwordInputEl = screen.getByPlaceholderText(
    /password/i
  ) as HTMLInputElement;

  const emailTestValue = 'test@example.com';
  const passwordTestValue = 'test@123';
  fireEvent.change(emailInputEl, { target: { value: emailTestValue } });
  fireEvent.change(passwordInputEl, { target: { value: passwordTestValue } });

  expect(buttonEl).not.toBeDisabled();
});
