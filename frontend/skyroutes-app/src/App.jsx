import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/User/Home";
import Dashboard from "./components/Admin/Dashboard";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import { setAuthToken } from "./api/apiUser";
import { ToastContainer } from "react-toastify";
import "./styles/main.scss";
import { loader as userLoader } from "./components/User/Home";
import { FlightProvider } from "./context/FlightContext";
import Booking from "./components/Booking";
import MyBookings from "./components/MyBookings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    // console.log(`Token from localStorage: ${token}`);
    console.log(`User Role from localStorage: ${userRole}`);

    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
      setIsAdmin(userRole === "admin");
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to="/login" />,
    },
    {
      path: "/login",
      element: isAuthenticated ? (
        <Navigate replace to={isAdmin ? "/admin" : "/home"} />
      ) : (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          setIsAdmin={setIsAdmin}
        />
      ),
    },
    {
      path: "/signup",
      element: isAuthenticated ? (
        <Navigate replace to={isAdmin ? "/admin" : "/home"} />
      ) : (
        <Signup />
      ),
    },
    {
      element: (
        <AppLayout
          setIsAuthenticated={setIsAuthenticated}
          setIsAdmin={setIsAdmin}
        />
      ),
      loader: userLoader,
      errorElement: <Error />,
      children: [
        {
          path: "/home",
          loader: userLoader,

          element:
            isAuthenticated && !isAdmin ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/admin",
          element:
            isAuthenticated && isAdmin ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            ),
        },
        {
          path: "/booking",
          loader: userLoader,

          element:
            isAuthenticated && !isAdmin ? (
              <Booking />
            ) : (
              <Navigate to="/login" />
            ),
        },
        {
          path: "/my-bookings",
          loader: userLoader,

          element:
            isAuthenticated && !isAdmin ? (
              <MyBookings />
            ) : (
              <Navigate to="/login" />
            ),
        },
        // Other routes here
      ],
    },
  ]);

  return (
    <FlightProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FlightProvider>
  );
}

export default App;
