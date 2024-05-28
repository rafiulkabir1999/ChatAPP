"use client";
import React, { useEffect, useState } from "react";
import profile from "@public/image/profile-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useAuth } from "@/context/Authcontext";
import Link from "next/link";
import axios from "@/axios/axiosInstance";
function Sidenav() {
  const { user } = useAuth();
  const [friend, setFrind] = useState();
  console.log(friend);
  const fetchFriend = async () => {
    try {
      const response = await axios.get("user");
      if (response) {
        setFrind(response?.data?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchFriend();

    //setFrind(response?.data);
  }, []);
  return (
    <div className="w-72 bg-[#2B2D42] fixed h-screen">
      <div className="flex px-6 pt-4 pb-2 items-center gap-2">
        <div className="size-12 rounded-full relative">
          <Image
            src={profile}
            fill
            alt="profile image"
            className="rounded-full p-1"
          />
        </div>
        <div className="flex flex-col grow text-sm">
          <h1>{user?.name}</h1>
          <h1>{user?.email}</h1>
        </div>

        <span className="size-4 text-primary">
          <FontAwesomeIcon icon={faPencil} />
        </span>
      </div>

      <div className="p-4">
        <div className="flex gap-2 justify-center items-center bg-primary rounded-md px-2">
          <input
            type="text"
            className="outline-none text-secondery w-[90%] p-2"
          />
          <div className="w-7 h-7 p-1 text-secondery cursor-pointer hover:bg-action hover:rounded-full hover:text-primary ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      {friend?.map((item, key) => {
        return (
          <MessageList
            name={item?.name}
            lastsms="where are you"
            url={item?._id}
            messagenumber={1}
            time={`3:50`}
          />
        );
      })}
      {/* <MessageList
        name="Nahid Ul Kabir"
        lastsms="where are you"
        messagenumber={1}
        time={`3:50`}
      />
      <MessageList
        name="Subah binte Kamal"
        lastsms="where are you"
        messagenumber={1}
        time={`3:50`}
      />
      <MessageList
        name="Nahid Ul Kabir"
        lastsms="where are you"
        messagenumber={1}
        time={`3:50`}
      />
      <MessageList
        name="Subah binte Kamal"
        lastsms="where are you"
        messagenumber={1}
        time={`3:50`}
      /> */}
    </div>
  );
}

const MessageList = ({ name, lastsms, messagenumber, time, url }) => {
  return (
    <Link
      href={`/chat/${url}`}
      className="flex gap-2  p-4 group hover:bg-action cursor-pointer"
    >
      <div className="">
        <div className="w-10 h-10 p-2 block bg-red-500 relative rounded-full overflow-hidden">
          <Image src={profile} fill alt="profile image" className="" />
        </div>
      </div>
      <div className="grow">
        <p className="text-blue-400 text-sm line-clamp-1  group-hover:text-secondery">
          {name}
        </p>
        <p className="text-xs text-gray-500 leading-1 line-clamp-2 opacity-60  group-hover:text-secondery">
          {lastsms}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="text-gray-400 text-xs  group-hover:text-secondery">
          {time}
        </p>
        <div className="text-xs bg-primary text-secondery font-bold rounded-full size-4 text-center ">
          {messagenumber}
        </div>
      </div>
    </Link>
  );
};

export default Sidenav;
