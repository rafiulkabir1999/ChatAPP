"use client";
import React from "react";
import profile from "@public/image/profile-2.jpg";
import Image from "next/image";
import { useAuth } from "@/context/Authcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Infobox() {
  const { user, logout } = useAuth();
  return (
    <div className=" text-red-500 bg-primary">
      <div className="flex flex-col gap-2 items-center ">
        <div className="">
          <div className="size-32 rounded-full overflow-hidden ">
            <Image src={profile} alt="user profile" />
          </div>
        </div>

        <div className=" text-center text-secondery">
          <p className="font-bold ">{user?.name}</p>
          <p className="text-sm opacity-50">{user?.email}</p>
          <p className="text-sm opacity-50">web developer</p>
          <button className="bg-action text-xs hover:bg-secondery font-bold hover:text-white px-4 py-2 m-2 rounded-xl">
            Add Friend
          </button>
          <button
            onClick={logout}
            className="bg-red-300 space-x-2 text-xs hover:bg-red-600 font-bold hover:text-white px-4 py-2 m-2 rounded-xl"
          >
            {/* <p>Log Out</p> */}
            <FontAwesomeIcon icon={faSignOut} />
          </button>
        </div>

        <div className=" text-secondery pt-6 w-full flex justify-between">
          <p className="text-sm opacity-60">Joinded</p>
          <p className="text-sm opacity-60">3/4/2024</p>
        </div>
        <div className=" text-secondery w-full flex justify-between">
          <p className="text-sm opacity-60">Total Message</p>
          <p className="text-sm opacity-60">1234</p>
        </div>
      </div>
    </div>
  );
}

export default Infobox;
