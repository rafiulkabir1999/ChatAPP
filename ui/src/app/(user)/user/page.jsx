import React from "react";
import Sidenav from "../components/Sidenav";
import Chatbox from "../components/Chatbox";
import Infobox from "../components/Infobox";
function Page() {
  return (
    <div className="flex">
      <Sidenav />
      <Chatbox />
    </div>
  );
}

export default Page;
