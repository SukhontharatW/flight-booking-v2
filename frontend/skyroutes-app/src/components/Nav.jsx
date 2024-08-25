import { useLoaderData, useNavigate } from "react-router-dom";
import Logo from "../images/logo.svg";
import FaCircleUser from "../images/FaCircleUser.svg";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";

function Nav({ setIsAuthenticated, setIsAdmin }) {
  const user = useLoaderData();
  const { email, firstName, lastName, role, _id } = user;
  console.log(email, firstName, lastName, role, _id);
  console.log(`role : ${role}`);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setIsAdmin(false);
    navigate("/login");
  };

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".nav__list--sidebar");
    sidebar.classList.toggle("is-visible");
  };
  const targetURL = user?.role === "admin" ? "/admin" : "/home";

  return (
    <div className="nav-container shadow">
      <div className="nav">
        <ul className="nav__list">
          <Link className="nav__item" to={targetURL}>
            <img src={Logo} alt="Logo" className="nav__logo" />
          </Link>

          <li className="nav__item" onClick={toggleSidebar}>
            <div className="nav__menu p__normal">
              <p className="nav__greeting">Hi, {firstName}</p>
              <img src={FaCircleUser} alt="User" className="nav__icon" />
            </div>
          </li>
        </ul>
        <ul className="nav__list nav__list--sidebar shadow">
          <HiOutlineX
            size={24}
            className="nav__icon--close"
            onClick={toggleSidebar}
          />
          {role !== "admin" && (
            <>
              <li className="nav__item" onClick={toggleSidebar}>
                <Link className="nav__link" to={"/home"}>
                  <p className="nav__text p__normal">Search</p>
                </Link>
              </li>
              <li className="nav__item" onClick={toggleSidebar}>
                <Link className="nav__link" to={"/my-bookings"}>
                  <p className="nav__text p__normal">My Booking</p>
                </Link>
              </li>
            </>
          )}
          <li className="nav__item" onClick={toggleSidebar}>
            <button
              className="nav__logout-button p__normal"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
