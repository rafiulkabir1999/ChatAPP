import Table from "@/app/components/common/Table";
import React from "react";
import axios from "@/axios/axiosInstance";
import Pagination from "@/app/components/common/Pagination";
import Create from "@/app/components/common/Create";

async function Dashboard({ searchParams }) {
  const tableHead = [
    "Name",
    "Email",
    "Created",
    "Date of Birth",
    "Gender",
    "Action",
  ];
  const params = searchParams;
  //const perpage = { params } || 5;
  const url = `user?page=${params?.page}&pageSize=${params?.parpage}`;

  const data = await axios(url);
  //console.log("data", data?.data);

  return (
    <div className="p-6 bg-gray-200 min-h-screen space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-secondery">User List</p>
        <Create url={`/admin/user/create`} />
      </div>
      <div className="table text-secondery w-full">
        {data && <Table tableHead={tableHead} data={data?.data} />}
        <div className="p-6 ">
          <Pagination data={data?.data?.info} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
