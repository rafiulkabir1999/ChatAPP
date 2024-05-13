import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Create({ url }) {
  return (
    <div className="flex py-1 text-xs">
      <Link
        href={url}
        className="flex gap-2  rounded-md items-center py-1  group bg-primary border shadow-md hover:bg-secondery  text-black hover:text-primary pl-2"
      >
        <FontAwesomeIcon icon={faAdd} className="size-5 p-1" />
        <p className=" pr-4 text-sm">Add New</p>
      </Link>
    </div>
  );
}

export default Create;
