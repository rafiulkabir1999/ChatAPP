import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="bg-secondery flex justify-center h-screen items-center">
      <div className="w-72 bg-primary rounded-xl p-8 shadow-2xl">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-action font-bold text-center">CHAT APP</h1>
          <p className="text-secondery">Register New Account</p>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Name
            </label>
            <input
              type="text"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="Email or Name "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Email
            </label>
            <input
              type="email"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold ">
              Gender
            </label>
            <div className="flex justify-around  bg-white  outline h-[37px] border border-secondery rounded-xl">
              <div className="flex gap-2 items-center bg-white">
                <input type="radio" name="gender" id="" value="Male" />
                <p className="text-secondery text-xs">Male</p>
              </div>
              <div className="flex gap-2 items-center bg-white">
                <input type="radio" name="gender" id="" value="Female" />
                <p className="text-secondery text-xs">Female</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Password
            </label>
            <input
              type="password"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-secondery text-xs font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              className="p-2 border border-secondery rounded-xl  text-secondery text-sm outline-action"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="bg-action p-2 w-full rounded-xl hover:bg-secondery"
          >
            Login
          </button>
          <div className="text-center space-y-2">
            <Link href="/">
              <p className="text-secondery text-xs hover:text-action curosr-pointer">
                Login to your account
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
