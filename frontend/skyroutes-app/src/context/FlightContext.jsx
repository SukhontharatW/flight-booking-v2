// context/FlightContext.js
import { createContext, useState, useContext } from "react";

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [booking, setBooking] = useState(null);

  const bookFlight = (travellers, travellerNames, paymentDetails) => {
    // Save booking information including traveller names
    const bookingInfo = {
      ...selectedFlight,
      travellers: travellerNames, // Ensure this is set correctly
      paymentDetails,
    };
    setBooking(bookingInfo);
  };

  return (
    <FlightContext.Provider
      value={{ selectedFlight, setSelectedFlight, booking, bookFlight }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlight = () => useContext(FlightContext);
