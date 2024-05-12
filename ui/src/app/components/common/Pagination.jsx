import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Pagination({ data }) {
  return (
    <div className="flex justify-center">
      {data?.pagination?.nextPageLink && (
        <div className="bg-action hover:bg-secondery text-bold shadow-md hover:text-primary text-secondery  text-center py-2 rounded-md px-2 text-sm ">
          <Link
            href={data?.pagination?.nextPageLink?.split("user")[1]}
            className="flex  py-1 px-2  items-center gap-4"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-primary size-4 items-center"
            />
            <p className="font-bold"> Next page</p>
          </Link>
        </div>
      )}
      {data?.pagination?.prevPageLink && (
        <div className="bg-action hover:bg-secondery text-bold shadow-md hover:text-primary text-secondery  text-center py-2 rounded-md px-2 text-sm ">
          <Link
            href={data?.pagination?.prevPageLink?.split("user")[1]}
            className="flex py-1 px-2 items-center gap-4"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-primary size-4 items-center"
            />
            <p className="font-bold"> Prev Page</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Pagination;
{
}
