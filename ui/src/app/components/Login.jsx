"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "@/axios/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/Authcontext";

function Login() {
  const router = useRouter();
  const { fetchUser } = useAuth();
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const handleChange = (event) => {
    setUser((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/auth", user);
      if (response) {
        console.log(response);
        if (response.status === 200) {
          if (window !== "undefined") {
            localStorage.setItem("token", response?.data?.token);
            document.cookie =
              "token=" + (response?.data?.token || "") + "; path=/";
            document.cookie =
              "type=" + (response?.data?.type || "") + "; path=/";
          }
          toast.success("Login success");
          fetchUser();
          router.push("/chat");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-72 bg-primary rounded-xl p-8 shadow-2xl">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-action font-bold text-center">CHAT APP</h1>

        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Email
            </label>
            <input
              type="email"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="Email or Name "
              name="email"
              value={user.email || ""}
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
