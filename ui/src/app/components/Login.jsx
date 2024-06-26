"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    name: null,
    password: null,
  });

  const handleChange = (event) => {
    setUser((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div className="w-72 bg-primary rounded-xl p-8 shadow-2xl">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-action font-bold text-center">CHAT APP</h1>

        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Name
            </label>
            <input
              type="text"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="Email or Name "
              name="name"
              value={user.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Password
            </label>
            <input
              type="password"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="password"
              name="password"
              value={user.password || ""}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-secondery text-xs">Remember me</p>
          </div>

          <button
            type="submit"
            className="bg-action p-2 w-full rounded-xl hover:bg-secondery"
          >
            Login
          </button>
        </form>

        <div className="text-center space-y-2">
          <Link href="/register">
            <p className="text-secondery text-xs hover:text-action curosr-pointer">
              Register new account
            </p>
          </Link>
          <Link href="/register">
            <p className="text-secondery text-xs hover:text-action curosr-pointer">
              Forget password
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
