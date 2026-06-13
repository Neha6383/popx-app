import MobileContainer from "../components/MobileContainer";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <MobileContainer>
      <div className="login-page">

        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="login-submit-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </MobileContainer>
  );
}

export default LoginPage;