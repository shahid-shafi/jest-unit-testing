import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form action="" className="flex flex-col gap-3">
        <input
          placeholder="Email"
          type="email"
          className="px-4 py-1 border-2 border-emerald-600 outline-none rounded-sm"
        />
        <input
          placeholder="Password"
          type="password"
          className="px-4 py-1 border-2 border-emerald-600 outline-none rounded-sm"
        />
        <button className="px-4 py-1 bg-emerald-600 text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
