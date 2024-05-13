import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Delete({ url }) {
  return (
    <div className="p-2">
      <Link href={url} className="rounded-xl  ">
        <FontAwesomeIcon
          icon={faTrash}
          className="size-8 cursor-pointer border shadow-md  rounded-xl bg-action text-primary hover:text-primary hover:bg-red-600  p-1.5 hover:ring hover:ring-red-900 hover:shadow-xl  "
        />
      </Link>
    </div>
  );
}

export default Delete;
