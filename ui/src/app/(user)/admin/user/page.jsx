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
        {/* <table className="w-full shadow p-4">
          <thead className="bg-secondery text-primary text-sm">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2 text-left">Date of Birth</th>
            <th className="p-2 text-left">Gender</th>
            <th className="p-2 ">Action</th>
          </thead>
          <tbody>
            <tr className="border">
              <td className="px-2 p-2 border">name</td>
              <td className="px-2 border">email</td>
              <td className="text-center">Phone</td>
              <td className="px-2 border">dateof Birth</td>
              <td className="px-2 border">Gender</td>
              <td className="px-2 border">Action</td>
            </tr>
          </tbody>
        </table> */}
        {data && <Table tableHead={tableHead} data={data?.data} />}
        <div className="p-6 ">
          <Pagination data={data?.data?.info} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
