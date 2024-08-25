/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getUser } from "../../api/apiUser";
import FlightSearch from "../FlightSearch";
import Benefit from "../Benefit";
import Offer from "../Offer";

function Home() {
  const user = useLoaderData();
  console.log("User in Home component:", user);
  const { email, firstName, lastName, role, _id } = user;

  return (
    <div className="container">
      <div className="container__main">
        <FlightSearch />
        <Offer />
        <Benefit />
      </div>
    </div>
  );
}
export async function loader() {
  const user = await getUser();
  console.log("User data from loader:", user);
  return user;
}
export default Home;
