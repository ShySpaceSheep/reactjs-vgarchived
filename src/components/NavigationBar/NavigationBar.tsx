import "./NavigationBar.css";
import logoLarge from "./../../assets/logo-large.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth-context";

export default function NavigationBar() {
  const { user, userDetails, signOut } = useAuth();

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logoLarge}
            alt="logo"
            style={{ height: "100%", width: "100%" }}
          />
        </Link>
      </div>

      <div className="navbar-div left">
        <Link to="/games" className="nav-interactable">
          <div className="nav-element"> GAMES </div>
        </Link>
      </div>

      <div className="navbar-div right">
        {user ? (
          <>
            <Link
              to={"/list/" + userDetails?.username}
              className="nav-interactable"
            >
              <div className="nav-element"> MY LIST </div>
            </Link>
            <div onClick={signOut} className="nav-button">
              {" "}
              Log Out{" "}
            </div>
          </>
        ) : (
          <>
            <Link
              to="https://github.com/ShySpaceSheep/reactjs-vgarchived/tree/development"
              className="nav-interactable"
            >
              <div className="nav-element"> Support our Project </div>
            </Link>
            <Link to="/login" className="nav-interactable">
              <div className="nav-button"> LOGIN </div>
            </Link>
            <Link to="/signup">
              <div className="nav-cta-element"> SIGN UP </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
