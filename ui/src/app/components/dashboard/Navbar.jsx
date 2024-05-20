"use client";
import React from "react";
import { AuthProvider } from "@/context/Authcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/Authcontext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <div className="bg-primary flex justify-end w-full shadow-md border text-secondery">
      <div className="flex gap-3 p-4 items-center">
        <div className="flex gap-1 items-center text-sm">
          <FontAwesomeIcon icon={faUser} className="text-action size-5 p-1" />{" "}
          <p>{user?.name}</p>
        </div>
        <div className="flex gap-1 items-center text-sm">
          <FontAwesomeIcon
            icon={faMailBulk}
            className="text-action size-5 p-1"
          />
          <p>{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="flex gap-1 items-center text-sm group hover:bg-secondery hover:text-white px-4 py-1 hover:ring rounded-xl cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faSignOut}
            className="text-action size-5 p-1 "
          />
          <p className="">Sign Out</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
