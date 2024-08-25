import axios from "axios";

const API_URL = "http://localhost:4000/api";
// const API_URL = "https://skyroutes-backend.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const searchFlights = async () => {
//   try {
//     const response = await api.get("/flights");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flights:", error);
//     return [];
//   }
// };

export const searchFlights = async (params) => {
  // const { origin, destination } = params;
  console.log(`params : ${params}`);
  try {
    const response = await api.get("/flights", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
};
