import React from "react";
import Sidenav from "@/app/components/Sidenav";
import Chatbox from "@/app/components/Chatbox";
function Page() {
  return (
    <div className="flex">
      <Sidenav />
      <Chatbox />
    </div>
  );
}
export default Page;
