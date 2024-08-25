import { useState, useEffect } from "react";
import { fetchBookingsByUserId } from "../api/apiBooking"; // Import the API function
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useLoaderData();
  console.log("User in my booking component:", user);
  const { email, firstName, lastName, role, _id } = user;
  console.log(email, firstName, lastName, role, _id);
  const userId = _id; // Replace with actual user ID from authentication context or hook
  console.log(`******* userId : ${userId}`);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const data = await fetchBookingsByUserId(userId);
        console.log(`*******data : ${data}`);
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings: ", error);
        toast.error("Failed to fetch bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings found.</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <div className="container__main">
        <div className="user-bookings">
          <h2>Your Bookings</h2>
          {bookings.map((booking) => (
            <div key={booking._id} className="ticket-card">
              <div className="ticket-card__row">
                <h3 className="ticket-card__title">
                  Flight Number: {booking.flightNumber}
                </h3>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(booking.departureTime).toLocaleDateString()}
                </p>
              </div>
              <div className="ticket-card__row">
                <p>
                  <strong>Origin:</strong> {booking.origin.code} (
                  {booking.origin.city})
                </p>
                <p>
                  <strong>Destination:</strong> {booking.destination.code} (
                  {booking.destination.city})
                </p>
              </div>
              <div className="ticket-card__row ticket-card__row--special">
                <p>
                  <strong>Departure:</strong>{" "}
                  {new Date(booking.departureTime).toLocaleTimeString()}
                </p>
                <p>
                  <strong>Duration:</strong> {booking.duration}
                </p>
                <p>
                  <strong>Arrival:</strong>{" "}
                  {new Date(booking.arrivalTime).toLocaleTimeString()}
                </p>
              </div>
              <div className="ticket-card__row">
                <p>
                  <strong>Price:</strong> ${booking.price}
                </p>
                <p>
                  <strong>Cabin Class:</strong> {booking.cabinClass}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserBookings;
