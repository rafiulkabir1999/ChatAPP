import {
  faDashboard,
  faPersonRifle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
function SideNav() {
  return (
    <div className="w-96 bg-secondery min-h-screen">
      <p className="text-center text-3xl font-bold p-6">CHAT APP</p>
      <hr />

      <div className="flex flex-col p-6">
        <User icon={faDashboard} name="Dashboard" url="/admin/" />
        <User icon={faUser} name="User List" url="/admin/user" />
        <User icon={faPersonRifle} name="Profile" url="/admin/profile" />
      </div>
    </div>
  );
}

const User = ({ name, icon, url }) => {
  return (
    <Link
      href={url}
      className="flex gap-4 items-center px-6 py-2 rounded-xl hover:text-secondery group hover:bg-primary cursor-pointer"
    >
      <FontAwesomeIcon
        icon={icon}
        className="size-6 group-hover:bg-secondery group-hover:rounded-full p-1 group-hover:text-primary"
      />
      <p className="text-sm">{name}</p>
    </Link>
  );
};

export default SideNav;
