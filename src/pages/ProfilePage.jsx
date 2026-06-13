import MobileContainer from "../components/MobileContainer";
import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <MobileContainer>
      <div className="profile-page">

        <div className="profile-header">

          <h2 className="profile-title">
            Account Settings
          </h2>

          <div className="profile-info">

            <img
              className="profile-image"
              src="https://i.pravatar.cc/150?img=32"
              alt="profile"
            />

            <div>
              <div className="profile-name">
                Marry Doe
              </div>

              <div className="profile-email">
                marrydoe@gmail.com
              </div>
            </div>

          </div>

        </div>

        <div className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam.
        </div>

      </div>
    </MobileContainer>
  );
}

export default ProfilePage;