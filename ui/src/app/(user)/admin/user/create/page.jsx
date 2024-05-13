"use client";
import React from "react";
import axios from "@/axios/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function CreateUser() {
  const router = useRouter();
  const [user, setUser] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const data = new FormData();
        data.append("name", user?.Name);
        data.append("email", user?.Email);
        data.append("gender", user?.gender);
        data.append("password", user?.Password);
        if (user["Date of Birth"]) {
          const date = formatDateForInput(user["Date of Birth"]);
          data.append("dob", date);
        }
        if (user?.Password !== user["Confirm Password"]) {
          toast.error("Your password do not match");
          return;
        }

        const response = await axios.post("/user", data);
        if (response.status === 200) {
          toast.success("User Created Succesfully");
          router.push("/admin/user");
        } else {
          toast.error("User Created Faield try again");
        }
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code

        toast.error(error?.response?.data);
      } else if (error.request) {
        // The request was made but no response was received

        toast.error(error?.request);
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error(error.message);
      }
    }
  };

  const handleChange = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: event.target.value,
    }));
  };
  // Date formate
  const formatDateForInput = (date) => {
    // Assuming 'date' is in ISO format yyyy-mm-dd
    const [year, month, day] = date.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  return (
    <div className="p-6 ">
      <div className="w-96">
        <div className="text-center bg-white">
          <p className="text-2xl text-secondery pt-6 font-bold">Create User</p>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="space-y-6 p-6 md:py-18 md:px-10 shadow-md rounded-md text-sm text-secondery bg-white"
        >
          <InputCustom name="Name" type="text" onChange={handleChange} />
          <InputCustom name="Email" onChange={handleChange} type="text" />
          <InputCustom
            name="Date of Birth"
            onChange={handleChange}
            type="date"
          />{" "}
          <InputCustom name="Gender" onChange={handleChange} type="radio" />
          <InputCustom
            name="Password"
            onChange={handleChange}
            type="password"
          />
          <InputCustom
            name="Confirm Password"
            onChange={handleChange}
            type="password"
            className={`border bg-red-400`}
          />
          <button
            type="submit"
            className="rounded-md p-2 text-primary w-full bg-action hover:bg-secondery"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

const InputCustom = ({ name, type, onChange }) => {
  return (
    <div className="">
      <div className="">
        <label className=" font-bold text-right w-36 opacity-65">{name}</label>
      </div>
      {(type === "text" || type === "date" || type === "password") && (
        <input
          required
          name={name}
          onChange={onChange}
          type={type}
          className="bg-transparent border-b-2 w-full outline-none text-secondery text-md p-1 focus:border-secondery"
        />
      )}
      {type === "radio" && (
        <div className="flex space-x-10 py-2">
          <div className="space-x-3">
            <input
              type={type}
              onChange={onChange}
              className="cursor-pointer"
              value="Male"
              name="gender"
              id="male"
            />
            <label htmlFor="male" className="cursor-pointer">
              Male
            </label>
          </div>
          <div className="space-x-3">
            <input
              id="female"
              type={type}
              onChange={onChange}
              className="cursor-pointer"
              value="Female"
              name="gender"
            />
            <label htmlFor={"female"} className="cursor-pointer">
              Female
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
