import "./NavigationBar.css";
import logoLarge from "./../../assets/logo-large.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
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
        <Link to="/forums" className="nav-interactable">
          <div className="nav-element"> FORUMS </div>
        </Link>
      </div>
      <div className="navbar-div right">
        <Link to="/login" className="nav-interactable">
          <div className="nav-element"> LOGIN </div>
        </Link>
        <Link to="/signup">
          <div className="nav-cta-element"> SIGN UP </div>
        </Link>
      </div>
    </nav>
  );
}
