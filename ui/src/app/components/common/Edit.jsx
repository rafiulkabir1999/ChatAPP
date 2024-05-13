import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function Edit({ url }) {
  return (
    <div className="">
      <Link href={url} className="rounded-xl p-1">
        <FontAwesomeIcon
          icon={faEdit}
          className="size-4 cursor-pointer border shadow-md p-2 rounded-xl bg-action text-primary hover:text-primary hover:bg-orange-600 hover:ring hover:ring-red-900 hover:shadow-xl  "
        />
      </Link>
    </div>
  );
}

export default Edit;
