import { useState } from "react";
import { searchFlights } from "../api/apiFlight";
import { useNavigate } from "react-router-dom";
import { useFlight } from "../context/FlightContext";
import { IoIosAirplane } from "react-icons/io";

const AIRPORTS = [
  { city: "Bangkok", code: "BKK", country: "Thailand" },
  { city: "Tokyo", code: "NRT", country: "Japan" },
  { city: "Singapore", code: "SIN", country: "Singapore" },
  { city: "New York", code: "JFK", country: "USA" },
  { city: "Los Angeles", code: "LAX", country: "USA" },
  { city: "Paris", code: "CDG", country: "France" },
  { city: "Rome", code: "FCO", country: "Italy" },
];

// Create a mapping for easy lookup
const AIRPORTS_MAP = AIRPORTS.reduce((acc, { city, code }) => {
  acc[city] = code;
  return acc;
}, {});

// Extract cities for dropdown options
const CITY_OPTIONS = AIRPORTS.map(({ city, code, country }) => ({
  label: `${country}, ${city} (${code})`,
  value: city,
}));

function FlightSearch() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed
  const [searchInputEmpty, setSearchInputEmpty] = useState(false); // Track if search inputs are empty
  const navigate = useNavigate();
  const { setSelectedFlight } = useFlight();

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);

    if (!origin || !destination || !departureDate) {
      setSearchInputEmpty(true);
      setFlights([]); // Clear any previous search results
      return;
    }

    setSearchInputEmpty(false);

    const originCode = AIRPORTS_MAP[origin];
    const destinationCode = AIRPORTS_MAP[destination];

    const queryParams = {
      originCode,
      destinationCode,
      departureDate,
    };

    const flights = await searchFlights(queryParams);
    setFlights(flights);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    navigate("/booking");
  };

  return (
    <div className="flight-search">
      <div className="flight-search__section">
        <h2 className="flight-search__title">
          <span className="flight-search__title--icon">
            <IoIosAirplane />
          </span>
          Your gateway to the world
        </h2>
        <form className="flight-search__form" onSubmit={handleSearch}>
          <div className="flight-search__field">
            <label htmlFor="origin" className="flight-search__label">
              Origin
            </label>
            <select
              id="origin"
              className="flight-search__select"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Select Origin</option>
              {CITY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flight-search__field">
            <label htmlFor="destination" className="flight-search__label">
              Destination
            </label>
            <select
              id="destination"
              className="flight-search__select"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {CITY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flight-search__field">
            <label htmlFor="departureDate" className="flight-search__label">
              Departure Date
            </label>
            <input
              id="departureDate"
              className="flight-search__input"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <button type="submit" className="flight-search__button click__basic">
            Search
          </button>
        </form>
      </div>
      <ul className="flight-search__results">
        {!hasSearched ? (
          <li className="flight-search__no-results">
            Start your search by selecting the origin, destination, and
            departure date.
          </li>
        ) : flights.length > 0 ? (
          flights.map((flight) => (
            <li key={flight._id} className="flight-search__result">
              <div className="ticket-card">
                <div className="ticket-card__row">
                  <h3 className="ticket-card__title">
                    Flight Number: {flight.flight_number}
                  </h3>
                  <p>
                    <strong>Date: </strong>
                    {new Date(flight.departure_time).toLocaleDateString()}
                  </p>
                </div>
                <div className="ticket-card__row">
                  <p>
                    <strong>Origin:</strong> {flight.origin.code} (
                    {flight.origin.city})
                  </p>
                  <p>
                    <strong>Destination:</strong> {flight.destination.code} (
                    {flight.destination.city})
                  </p>
                </div>
                <div className="ticket-card__row ticket-card__row--special">
                  <p>
                    <strong>Departure:</strong>
                    {new Date(flight.departure_time).toLocaleTimeString()}
                  </p>
                  <p>
                    <strong>Duration:</strong> {flight.duration}
                  </p>
                  <p>
                    <strong>Arrival:</strong>
                    {new Date(flight.landing_time).toLocaleTimeString()}
                  </p>
                </div>
                <div className="ticket-card__row">
                  <p>
                    <strong>Price:</strong> ${flight.price}
                  </p>
                  <p>
                    <strong>Cabin Class:</strong> {flight.cabin_class}
                  </p>
                </div>

                <div className="flight-search__select-button">
                  <button
                    className="flight-search__button--select click__basic"
                    onClick={() => handleSelectFlight(flight)}
                  >
                    Select
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : searchInputEmpty ? (
          <li className="flight-search__no-results">
            Please make a search with all fields filled
          </li>
        ) : (
          <li className="flight-search__no-results">No flights available</li>
        )}
      </ul>
    </div>
  );
}

export default FlightSearch;
