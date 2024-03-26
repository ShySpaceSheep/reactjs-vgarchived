import "./NavigationBar.css";
import logoLarge from "./../../assets/logo-large.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoLarge} height="50" alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-left">
        <Link to="/games" className="nav-interactable">
          <div className="nav-element"> GAMES </div>
        </Link>
        <Link to="/forums" className="nav-interactable">
          <div className="nav-element"> FORUMS </div>
        </Link>
      </div>
      <div className="navbar-right">
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
