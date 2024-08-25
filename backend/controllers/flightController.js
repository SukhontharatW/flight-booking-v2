const Flight = require("../models/Flight");

exports.getFlights = async (req, res) => {
  const { originCode, destinationCode, departureDate, cabinClass } = req.query;

  try {
    const query = {};
    if (originCode) query["origin.code"] = originCode;
    if (destinationCode) query["destination.code"] = destinationCode;
    // if (cabinClass) query.cabin_class = cabinClass;

    console.log(new Date(departureDate).toISOString());

    if (departureDate) {
      const startOfDay = new Date(`${departureDate}T00:00:00.000Z`);
      const endOfDay = new Date(`${departureDate}T23:59:59.999Z`);
      query.departure_time = { $gte: startOfDay, $lte: endOfDay };
    }

    console.log(`Query: ${JSON.stringify(query)}`);

    // Find flights based on the query object
    const flights = await Flight.find(query);
    console.log(`Flights: ${JSON.stringify(flights)}`);

    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
