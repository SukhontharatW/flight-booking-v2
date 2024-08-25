import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/apiUser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const nameRegex = /^[\p{L}\p{M}][\p{L}\p{M}\d]*$/u;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /(?=.*[a-zA-Z])(?=.*\d)/;

  const validateForm = () => {
    const errors = {};

    if (touched.firstName) {
      if (!firstName) errors.firstName = "First name is required.";
      else if (!nameRegex.test(firstName))
        errors.firstName = "Not allow special letter, spaces.";
      else if (/\s/.test(firstName))
        errors.firstName = "Cannot contain spaces.";
    }

    if (touched.lastName) {
      if (!lastName) errors.lastName = "Last name is required.";
      else if (!nameRegex.test(lastName))
        errors.lastName = "Not allow special letter, spaces.";
      else if (/\s/.test(lastName)) errors.lastName = "Cannot contain spaces.";
    }

    if (touched.email) {
      if (!email) errors.email = "Email is required.";
      else if (!emailRegex.test(email))
        errors.email = "Email address is invalid.";
    }

    if (touched.password) {
      if (!password) errors.password = "Password is required.";
      else if (password.length < 6) errors.password = "Min 6 characters long.";
      else if (!passwordRegex.test(password))
        errors.password = "Must contain letters and numbers.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName && !lastName && !email && !password) {
      setErrors({ submit: "Please enter your information." });
      toast.error("Please enter your information.");
    } else if (validateForm()) {
      try {
        await signup(firstName, lastName, email, password);
        setSuccess("Signup successful! Redirecting to login...");
        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 3000);
      } catch (err) {
        setErrors({ submit: err.msg || "Sign up failed. Please try again." });
        toast.error(err.msg || "Sign up failed. Please try again.");
        console.error(err);
      }
    }
  };

  return (
    <div className="signup">
      <ToastContainer />
      <div className="signup__container">
        <h2 className="signup__title">Sign Up</h2>
        {errors.submit && (
          <p className="signup__error-message">{errors.submit}</p>
        )}
        {success && <p className="signup__success-message">{success}</p>}
        <form className="signup__form p__sm" onSubmit={handleSubmit}>
          <div className="signup__form-group">
            <label className="signup__label opacity__max">
              {/* First Name */}
            </label>
            <input
              className="signup__input signup__input--firstName opacity__max"
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First name"
              onBlur={() =>
                setTouched((prev) => ({ ...prev, firstName: true }))
              }
            />
            {errors.firstName && touched.firstName && (
              <p className="signup__error-message">{errors.firstName}</p>
            )}
          </div>

          <div className="signup__form-group">
            <label className="signup__label">{/* Last Name */}</label>
            <input
              className="signup__input signup__input--lastName"
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last name"
              onBlur={() => setTouched((prev) => ({ ...prev, lastName: true }))}
            />
            {errors.lastName && touched.lastName && (
              <p className="signup__error-message">{errors.lastName}</p>
            )}
          </div>

          <div className="signup__form-group">
            <label className="signup__label">{/* Email */}</label>
            <input
              className="signup__input signup__input--email"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            />
            {errors.email && touched.email && (
              <p className="signup__error-message">{errors.email}</p>
            )}
          </div>

          <div className="signup__form-group">
            <label className="signup__label">{/* Password */}</label>
            <input
              className="signup__input signup__input--password"
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            />
            {errors.password && touched.password && (
              <p className="signup__error-message">{errors.password}</p>
            )}
          </div>

          <button className="signup__button shadow" type="submit">
            Sign Up
          </button>

          <p className="signup__signin-link">
            Already have an account? <Link to={"/login"}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
