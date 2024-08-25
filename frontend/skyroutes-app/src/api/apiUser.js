import axios from "axios";

// const API_URL = "http://localhost:4000/api";
const API_URL = "https://skyroutes-service.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Set auth token in header if available
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const login = async (email, password) => {
  const response = await api.post("/auth/signin", { email, password });
  return response.data;
};

export const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await api.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    // Throw the error to be caught in the component
    throw error.response.data;
  }
};

export const getUser = async () => {
  const response = await api.get("/user");
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};
