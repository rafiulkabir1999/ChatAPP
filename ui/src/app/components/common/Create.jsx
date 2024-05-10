import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Create({ url }) {
  return (
    <div className="flex py-1 text-xs">
      <Link
        href={url}
        className="flex gap-2 bg-secondery rounded-md items-center py-1  group hover:bg-action text-secondery pl-2"
      >
        <FontAwesomeIcon
          icon={faAdd}
          className="size-7 text-action p-2 group-hover:text-secondery"
        />
        <p className="text-action pr-4 group-hover:text-secondery">Add New</p>
      </Link>
    </div>
  );
}

export default Create;
