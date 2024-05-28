"use client";
import React, { useEffect, useState, useRef } from "react";
import Infobox from "./Infobox";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { io } from "socket.io-client";
import { useAuth } from "@/context/Authcontext";
import { usePathname, useRouter } from "next/navigation";

function Chatbox() {
  const { user } = useAuth();

  const router = usePathname();

  const [inbox, setInbox] = React.useState([]);
  const [room, setRoom] = React.useState("javaScript");
  const [socket, setSocket] = useState(undefined);
  const [message, setMessage] = React.useState({
    name: user?.name || "null",
    email: user?.email || "null",
    message: "",
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      console.log("scroll to bottom");
      container.scrollTop = container.scrollHeight;
    }
  }, [containerRef]);
  useEffect(() => {
    console.log(user);
    setMessage((state) => ({
      ...state,
      name: user?.name,
      email: user?.email,
    }));
  }, [user]);

  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.emit("joinRoom", room);
    socket.on("message", (message) => {
      setInbox((state) => [...state, message]);
    });
    setSocket(socket);
  }, []);

  const handleChange = (event) => {
    setMessage((state) => ({
      ...state,
      // user: user?.name,
      // email: user?.email,
      message: event.target.value,
    }));
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(user);
    // setMessage((state) => ({
    //   ...state,
    //   name: user?.name,
    //   email: user?.email,
    // }));
    console.log(message);
    // socket.emit("text", {room , 'bangladesh'} );
    socket.emit("text", { room, message });
  };
  return (
    <div className="bg-primary ml-72 min-h-screen grow">
      <div className="flex gap-2">
        <div className="grow">
          <div className="shadow flex items-center">
            <div className="flex px-6 py-4 gap-3">
              <FontAwesomeIcon
                icon={faUser}
                className="text-secondery w-5 h-5"
              />
              <p className="text-secondery font-bold">Nahid Ul Kabir</p>
            </div>
          </div>

          <div className="relative h-[90vh]">
            <div className="flex flex-col p-6">
              <div className=" overflow-y-auto">
                <div ref={containerRef} className="overflow-y-auto h-[75vh] ">
                  {inbox?.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className={`my-4 ${
                          user?.email === item?.email
                            ? "text-right border rounded-xl m-2 p-2"
                            : ""
                        }`}
                      >
                        <span
                          className={` rounded-full font-bold ${
                            user?.email === item?.email
                              ? "bg-sky-200"
                              : " bg-green-200"
                          }`}
                        >
                          <span className=" text-slate-800 text-xs p-1.5 opacity-50">
                            {item?.email?.toLowerCase()}
                          </span>
                        </span>
                        <p className="m-1">
                          <span
                            key={key}
                            className={`text-sm  text-secondery border p-2 rounded-full 
                            ${
                              user?.email === item?.email
                                ? "bg-sky-400 text-white"
                                : "bg-green-400 text-white"
                            }`}
                          >
                            {item?.message}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0  w-full px-6">
              <form onSubmit={handleSumbit} action=" w-full">
                <div className="flex grow w-full shadow-xl rounded-2xl ring-1">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="text"
                    className="border p-2 min-h-12 w-full text-secondery outline-none rounded-l-2xl pl-4"
                  />

                  <button
                    type="submit"
                    className=" w-16 h-12 bg-secondery hover:bg-action text-center group text-action rounded-r-2xl"
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="w-5 h-5 ml-4 group-hover:text-white"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-72 grow border-l p-6 h-screen">
          <Infobox />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
