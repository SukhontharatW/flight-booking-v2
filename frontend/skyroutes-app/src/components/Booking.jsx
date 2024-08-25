import { useState } from "react";
import { useFlight } from "../context/FlightContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import { confirmBooking } from "../api/apiBooking";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const user = useLoaderData();
  console.log("User in Home component:", user);
  const { email, firstName, lastName, role, _id } = user;
  console.log(email, firstName, lastName, role, _id);

  const { selectedFlight } = useFlight();
  const [travellers, setTravellers] = useState(1);
  const [travellerNames, setTravellerNames] = useState([{ name: "" }]);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const navigate = useNavigate();

  if (!selectedFlight) {
    return <div>No flight information available.</div>;
  }

  const updateTravellerNames = (count) => {
    const names = Array.from({ length: count }, (_, i) => ({
      name: travellerNames[i]?.name || "",
    }));
    setTravellerNames(names);
  };

  const handleTravellerChange = (index, value) => {
    const newTravellerNames = [...travellerNames];
    newTravellerNames[index].name = value;
    setTravellerNames(newTravellerNames);
  };

  const validateBookingData = () => {
    // Validate number of travellers
    if (travellers < 1) {
      toast.error("Number of travellers must be at least 1.");
      return false;
    }

    // Validate traveller names
    for (const traveller of travellerNames) {
      if (!traveller.name.trim()) {
        toast.error("Traveller names cannot be empty.");
        return false;
      }
    }

    // Validate payment details
    const cardNumberPattern = /^\d{16}$/; // Example: 16-digit card number
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // Example: MM/YY
    const cvvPattern = /^\d{3}$/; // Example: 3-digit CVV

    if (!cardNumberPattern.test(paymentDetails.cardNumber)) {
      toast.error("Card number must be 16 digits.");
      return false;
    }

    if (!expiryDatePattern.test(paymentDetails.expiryDate)) {
      toast.error("Expiry date must be in MM/YY format.");
      return false;
    }

    if (!cvvPattern.test(paymentDetails.cvv)) {
      toast.error("CVV must be 3 digits.");
      return false;
    }

    return true;
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();

    // Validate booking data
    if (!validateBookingData()) {
      return;
    }

    // Prepare the booking data
    const bookingData = {
      flightNumber: selectedFlight.flight_number,
      origin: selectedFlight.origin,
      destination: selectedFlight.destination,
      departureTime: selectedFlight.departure_time,
      arrivalTime: selectedFlight.landing_time,
      duration: selectedFlight.duration,
      price: selectedFlight.price,
      cabinClass: selectedFlight.cabin_class,
      travellers: travellerNames,
      paymentDetails: paymentDetails,
      userId: _id,
    };

    try {
      // Call the API to confirm booking
      await confirmBooking(bookingData);
      toast.success("Booking confirmed successfully!");
      console.log("Booking confirmed successfully!");
      setTimeout(() => navigate("/my-bookings"), 2000);
    } catch (error) {
      console.error("Booking failed: ", error);
      toast.error("Failed to confirm booking. Please try again.");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="container__main">
        <div className="booking">
          <div className="booking__box">
            <h2 className="booking__title">Booking Information</h2>
            <div className="booking__ticket-card">
              <h3 className="booking__ticket-card-title">
                Flight Number: {selectedFlight.flight_number}
              </h3>
              <p className="booking__ticket-card-info">
                <strong>Origin:</strong> {selectedFlight.origin.code} (
                {selectedFlight.origin.city})
              </p>
              <p className="booking__ticket-card-info">
                <strong>Destination:</strong> {selectedFlight.destination.code}{" "}
                ({selectedFlight.destination.city})
              </p>
              <p className="booking__ticket-card-info">
                <strong>Date:</strong>{" "}
                {new Date(selectedFlight.departure_time).toLocaleDateString()}
              </p>
              <p className="booking__ticket-card-info">
                <strong>Departure:</strong>{" "}
                {new Date(selectedFlight.departure_time).toLocaleTimeString()}
              </p>
              <p className="booking__ticket-card-info">
                <strong>Arrival:</strong>{" "}
                {new Date(selectedFlight.landing_time).toLocaleTimeString()}
              </p>
              <p className="booking__ticket-card-info">
                <strong>Duration:</strong> {selectedFlight.duration}
              </p>
              <p className="booking__ticket-card-info">
                <strong>Price:</strong> ${selectedFlight.price}
              </p>
              <p className="booking__ticket-card-info">
                <strong>Cabin Class:</strong> {selectedFlight.cabin_class}
              </p>
            </div>
          </div>

          <div className="booking__box">
            <h2 className="booking__title">Booking Form</h2>
            <form className="booking__form" onSubmit={handleConfirmBooking}>
              <div className="booking__form-group">
                <label className="booking__form-label" htmlFor="travellers">
                  Number of Travellers:
                </label>
                <input
                  className="booking__form-input"
                  type="number"
                  id="travellers"
                  min="1"
                  value={travellers}
                  onChange={(e) => {
                    const count = parseInt(e.target.value, 10);
                    setTravellers(count);
                    updateTravellerNames(count);
                  }}
                  required
                />
              </div>

              {travellerNames.map((traveller, index) => (
                <div key={index} className="booking__form-group">
                  <label
                    className="booking__form-label"
                    htmlFor={`travellerName${index}`}
                  >
                    Traveller {index + 1} Name:
                  </label>
                  <input
                    className="booking__form-input"
                    type="text"
                    id={`travellerName${index}`}
                    value={traveller.name}
                    onChange={(e) =>
                      handleTravellerChange(index, e.target.value)
                    }
                    required
                  />
                </div>
              ))}

              <div className="booking__form-group">
                <label className="booking__form-label" htmlFor="cardNumber">
                  Card Number:
                </label>
                <input
                  className="booking__form-input"
                  type="text"
                  id="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="booking__form-group">
                <label className="booking__form-label" htmlFor="expiryDate">
                  Expiry Date:
                </label>
                <input
                  className="booking__form-input"
                  type="text"
                  id="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      expiryDate: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="booking__form-group">
                <label className="booking__form-label" htmlFor="cvv">
                  CVV:
                </label>
                <input
                  className="booking__form-input"
                  type="text"
                  id="cvv"
                  value={paymentDetails.cvv}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cvv: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <button
                className="booking__form-button click__basic"
                type="submit"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
