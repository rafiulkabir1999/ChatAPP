"use client";
import { createContext, useState, useContext, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "@/axios/axiosInstance";
// import { destroyCookie, setCookie, parseCookies } from "nookies";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState();
  const [statuses, setStatuses] = useState();
  const [role, setRoles] = useState();
  const [permissions, setPermissions] = useState();
  const [isLoading, setLoading] = useState(true);
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );
  const response = NextResponse.next();

  useLayoutEffect(() => {
    try {
      fetchUser();
      if (token) {
        //fetchStatus();
        //const cookies = parseCookies();
        //const authCookies = cookies.token || "";
        // if (!authCookies) {
        //   setCookie(null, "token", token);
        // }
      } else {
        response.cookies.delete("token");
        //destroyCookie(null, "token");
        //destroyCookie(undefined, "token");
        setLoading(false);
      }
    } catch (e) {
      window.location.href = "/";
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("auth");
      console.log("user data fetch", response.data);
      if (response.data) {
        setUser({
          name: response?.data?.name,
          email: response?.data?.email,
        });
      }
    } catch (error) {}
  };
  const logout = () => {
    try {
      localStorage.removeItem("token");
      document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      router.refresh();
      toast.success("Log out Successfull");
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  //   const fetchStatus = async () => {
  //     try {
  //       const response = await axios
  //         .get("status")
  //         .then((response) => {
  //           if (response.data.status) {
  //             setStatuses(response.data.data);
  //           }
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     } finally {
  //     }
  //   };

  //   const LogoutHandler = async () => {
  //     try {
  //       await fetch("/api/logout", {
  //         method: "post",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       //  router.push("/login")
  //     } catch (error) {
  //       toast.error(error.response?.data?.error);
  //     }
  //   };

  //   const logout = async () => {
  //     try {
  //       axios.post("auth/logout").then(
  //         (res) => {
  //           toast.success("Logout success");
  //           setUser(null);
  //           LogoutHandler();
  //           destroyCookie(null, "token");
  //           destroyCookie(undefined, "token");
  //           response.cookies.delete("token");
  //           destroyCookie(null, "token");
  //           destroyCookie(undefined, "token");
  //           if (typeof window !== "undefined") {
  //             localStorage.removeItem("token");
  //           } else {
  //             console.log("No Local Storage");
  //           }
  //           router.push("/login");
  //         },
  //         (error) => {
  //           console.log(error);
  //           window.location.href = "/";
  //           window.location.reload();
  //         }
  //       );
  //     } catch (error) {
  //       console.log("", error);
  //       window.location.href = "/";
  //       window.location.reload();
  //     }
  //   };

  return (
    <AuthContext.Provider
      value={{
        user,
        // permissions,
        // role,
        // statuses,
        logout,
        // isLoading,
        // token,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
