import "./register.css";
import logo from "../../assets/logo.png";
import welcome from "../../assets/Welcome-login.png";
import google from "../../assets/google-login.png";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    try {
      const formData = {
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        window.location.pathname = "/"; // Redirect to login page after successful registration
      } else {
        const errorMessage = await response.text();
        setError(`Registration failed: ${errorMessage}`);
      }
    } catch (error) {
      setError(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="register_container">
      <div className="register_left"></div>
      <div className="register_right">
        <div className="register_right_msg">
          <img src={logo} alt="" />
          <img src={welcome} alt="" />
        </div>
        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="register-options">
            <label htmlFor="terms">
              <input type="checkbox" id="terms" required />
            </label>
            <div>I agree to the terms and conditions</div>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Register</button>

          <hr />

          <div className="or-divider">or</div>

          <button type="button" className="google-register">
            <img src={google} alt="" />
            Continue with Google
          </button>

          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
