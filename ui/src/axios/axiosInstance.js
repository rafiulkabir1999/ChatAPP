import axios from "axios";

const instance = axios.create({
  //  baseURL: 'http://118.179.149.36:8084/api/v1/'
  baseURL: "http://localhost:4000/",
});

instance.interceptors.request.use(
  (config) => {
    //const token = localStorage.getItem("token"); // Get the token from localStorage or wherever it's stored
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    // config.headers['Content-Type'] = 'application/json';
    //config.XCSRFToken = "X-CSRF-Token";
    //config.xsrfHeaderName = "X-CSRF-Token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error) {
      if (error.response.status === 401) {
        if (error.response.data.message === "Unauthenticated.") {
          //destroyCookie(null, "token");
          //destroyCookie(undefined, "token");
          if (typeof window !== "undefined") {
            //localStorage.removeItem("token");
            //localStorage.removeItem("role");
            //destroyCookie(null, "token");
            //destroyCookie(undefined, "token");
            // window.location.href = "/login";
          } else {
            console.log("No Local Storage");
          }
        }
      } else {
        if (error.response.data.errors) {
          for (let key in error.response.data.errors) {
            //toast.warning(key + " " + error.response.data.errors[key]);
          }
        }
        if (error.response.data.message) {
          //toast.warning(error.response.data.message);
        }
        console.log(error.response.data.errors);
      }
      return Promise.reject(error);
    }
  }
);

export default instance;
