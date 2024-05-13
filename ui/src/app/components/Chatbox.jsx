import React from "react";
import Infobox from "./Infobox";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Chatbox() {
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
              <div className="">
                <div className=" ">
                  <p className="text-sm bg-message p-2 rounded-xl">
                    this is some randome massages
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0  w-full px-6">
              <form action=" w-full">
                <div className="flex grow w-full shadow-xl rounded-2xl ring-1">
                  <input
                    type="text"
                    className="border p-2 min-h-12 w-full text-secondery outline-none rounded-l-2xl pl-4"
                  />

                  <button
                    type="button"
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
