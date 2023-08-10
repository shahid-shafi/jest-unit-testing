import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({
    email: 'Email is required',
    password: 'Password is required',
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const data = await response.json();
      setUser(data);
    } catch (error: any) {
      console.log(error);
      setErrors(error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form action="" className="flex flex-col gap-3">
        <span className=" text-emerald-400">{user?.name}</span>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-1 border-2 border-emerald-600 outline-none rounded-sm"
        />
        {errors?.email && (
          <span
            style={{ visibility: isError ? 'visible' : 'hidden' }}
            data-testid="email-error"
          >
            {errors?.email}
          </span>
        )}
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-1 border-2 border-emerald-600 outline-none rounded-sm"
        />
        {errors?.password && (
          <span
            style={{ visibility: isError ? 'visible' : 'hidden' }}
            data-testid="password-error"
          >
            {errors?.password}
          </span>
        )}
        <button
          disabled={!email || !password}
          className="px-4 py-1 bg-emerald-600 text-white rounded-md"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
