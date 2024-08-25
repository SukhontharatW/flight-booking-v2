import axios from "axios";

const API_URL = "http://localhost:4000/api";
// const API_URL = "https://skyroutes-backend.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const confirmBooking = async (bookingData) => {
  try {
    console.log("bookingData:", bookingData); // Log the booking data

    // Adjust the endpoint to match the backend route
    const response = await api.post("/confirm-booking", bookingData);

    return response.data;
  } catch (error) {
    console.log(`confirmBooking error : ${error}`);
    if (error.response) {
      // Handle server-side errors
      throw new Error(
        error.response.data.message || "Failed to confirm booking"
      );
    } else if (error.request) {
      // Handle no response from server
      throw new Error("No response received from server");
    } else {
      // Handle other errors
      throw new Error(error.message || "Network error");
    }
  }
};

// Function to fetch bookings by user ID
export const fetchBookingsByUserId = async (userId) => {
  try {
    console.log(`============== api userId : ${userId}`);

    // Use the api instance to make the request
    const response = await api.get(`/booking/${userId}`);
    console.log("Bookings:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch bookings"
    );
  }
};
