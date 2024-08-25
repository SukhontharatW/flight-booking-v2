// Login.jsx
import { useState } from "react";
import { login } from "../../api/apiUser";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/apiUser";

function Login({ setIsAuthenticated, setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token); // Use localStorage
      localStorage.setItem("role", data.role); // Use localStorage
      setAuthToken(data.token); // Set token for API calls
      setIsAuthenticated(true);
      setIsAdmin(data.role === "admin");
      // Redirect based on role
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Log In</h1>
        <form className="login__form p__sm" onSubmit={handleLogin}>
          <div className="login__form-group">
            <label className="login__label p__normal">{/* Email */}</label>
            <input
              className="login__input login__input--email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div className="login__form-group">
            <label className="login__label p__normal margin-t-sm">
              {/* Password */}
            </label>
            <input
              className="login__input login__input--password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button className="login__button click__basic shadow" type="submit">
            Log In
            {error && <p className="login__error">{error}</p>}
          </button>
          <p className="login__signin-link">
            Don&apos;t have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
