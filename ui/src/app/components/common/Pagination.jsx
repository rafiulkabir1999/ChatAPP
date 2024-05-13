import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Pagination({ data }) {
  const buttons = [];
  function paginateBtn() {
    const links = [];
    for (let btn = 0; btn < data?.pagination?.totalPages; btn++) {
      links.push(
        <Link key={btn} href={`/admin/user?page=${btn + 1}`}>
          {btn + 1}
        </Link>
      );
    }
  }
  return (
    <div className="flex justify-center gap-2">
      {data?.pagination?.prevPageLink && (
        <div className="bg-primary hover:bg-secondery text-bold shadow-md hover:text-primary text-secondery  text-center  rounded-md  text-sm ">
          <Link
            href={data?.pagination?.prevPageLink?.split("user")[1]}
            className="flex py-1 px-2 items-center gap-4"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className=" size-4 items-center "
            />
            <p className=" "> Prev Page</p>
          </Link>
        </div>
      )}
      {data?.pagination?.totalPages && <Paginationbtn value={3} />}

      {data?.pagination?.nextPageLink && (
        <div className=" hover:bg-secondery bg-primary text-bold shadow-md hover:text-primary text-secondery  text-center  rounded-md  text-sm ">
          <Link
            href={data?.pagination?.nextPageLink?.split("user")[1]}
            className="flex  py-1 px-2  items-center gap-4"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="size-3 items-center  "
            />
            <p className=" "> Next page</p>
          </Link>
        </div>
      )}
    </div>
  );
}

function Paginationbtn({ value }) {
  const buttons = [];
  for (let i = 0; i < value; i++) {
    buttons.push(
      <button
        className="border hover:bg-secondery  hover:text-primary bg-primary  shadow-md rounded-md size-7"
        key={i}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="space-x-2">{buttons}</div>;
}

export default Pagination;
{
}
