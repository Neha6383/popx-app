import MobileContainer from "../components/MobileContainer";
import "../styles/SignupPage.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/profile");
  };

  return (
    <MobileContainer>
      <div className="signup-page">

        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="form-group">
          <label>
            Full Name<span className="required">*</span>
          </label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>
            Phone number<span className="required">*</span>
          </label>
          <input type="text" placeholder="9876543210" />
        </div>

        <div className="form-group">
          <label>
            Email address<span className="required">*</span>
          </label>
          <input type="email" placeholder="example@email.com" />
        </div>

        <div className="form-group">
          <label>
            Password<span className="required">*</span>
          </label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Company Name" />
        </div>

        <div className="radio-section">
          <p>
            Are you an Agency?<span className="required">*</span>
          </p>

          <div className="radio-options">
            <label>
              <input type="radio" name="agency" /> Yes
            </label>

            <label>
              <input type="radio" name="agency" /> No
            </label>
          </div>
        </div>

        <button
          className="create-account-btn"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>

      </div>
    </MobileContainer>
  );
}

export default SignupPage;