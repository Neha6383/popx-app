import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/LandingPage.css";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="landing-page">

        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>

      </div>
    </MobileContainer>
  );
}

export default LandingPage;