import "./login.css";
import logo from "../../assets/logo.png";
import welcome from "../../assets/Welcome-login.png";
import google from "../../assets/google-login.png";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Email and Password are required.");
      return;
    }

    try {
      const formData = {
        email: email.trim(),
        password: password.trim(),
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.location.pathname = "/home";
      } else {
        const errorMessage = await response.text();
        setError(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
      setError(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="login_container">
      <div className="login_left"></div>
      <div className="login_right">
        <div className="login_right_msg">
          <img src={logo} alt="" />
          <img src={welcome} alt="" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
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

          <div className="login-options">
            <div>
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" />
              </label>
              <div>Remember me</div>
            </div>

            <a href="/">Forgot password?</a>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Login</button>

          <hr />

          <div className="or-divider">or</div>

          <button type="button" className="google-login">
            <img src={google} alt="" />
            Continue with Google
          </button>

          <p>
            Don't have an account? <a href="/register">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
