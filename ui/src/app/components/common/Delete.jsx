import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import axios from "@/axios/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Delete({ url }) {
  const router = useRouter();
  const deleteUser = async () => {
    try {
      const response = await axios.delete(url);
      if (response.status === 200) {
        toast.success("Youser deleted Successfully");
        router.refresh();
      } else {
        toast.error("user delete failed please try again");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <button onClick={deleteUser} className="">
      <div className="rounded-xl p-1">
        <FontAwesomeIcon
          icon={faTrash}
          className="size-4 cursor-pointer border shadow-md p-2 rounded-xl bg-action text-primary hover:text-primary hover:bg-red-600 hover:ring hover:ring-red-900 hover:shadow-xl  "
        />
      </div>
    </button>
  );
}

export default Delete;
