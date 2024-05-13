import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-x-10 p-6">
      <Box name="Total User" value="12345678" icon={faUser} />
      <Box name="Total" value="1029340" />
    </div>
  );
}
const Box = ({ name, value, icon }) => {
  return (
    <div className="rounded-xl text-primary hover:ring hover:shadow-md flex  gap-5 p-6  bg-gradient-to-br to-secondery from-action">
      <div className="">
        <FontAwesomeIcon icon={icon} className="size-10" />
      </div>
      <div className="flex flex-col gap-1">
        <p>{name}</p>
        <p className="text-xs">{value}</p>
      </div>
    </div>
  );
};
export default Dashboard;
