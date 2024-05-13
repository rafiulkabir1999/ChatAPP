import React from "react";
import Delete from "./Delete";

function Table({ tableHead, data }) {
  return (
    <div className="table text-secondery w-full">
      <table className="w-full shadow p-4">
        <thead className="bg-secondery text-primary text-sm">
          <tr className="border">
            {tableHead?.map((item, index) => {
              return (
                <th
                  key={index}
                  className={`p-2 px-4 ${
                    item === "Action" || item === "Phone"
                      ? "text-center"
                      : "text-left"
                  }`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data?.data.map((item, index) => {
            return (
              <tr key={index} className="border opacity-75">
                <td className="px-4 border">{item.name}</td>
                <td className="px-4 border">{item.email}</td>
                <td className="text-center">{item?.phone}</td>
                <td className="px-4 border">{item?.dob?.split("T")[0]}</td>
                <td className="px-4 border">{item?.gender}</td>
                <td className="px-4 border">
                  <Delete url={`/`} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
