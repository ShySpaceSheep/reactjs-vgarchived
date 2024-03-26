import { Link } from "react-router-dom";
import "./../common-styles/login-signup-field.css";

export default function SignUpBox() {
  return (
    <div className="content-container">
      <div className="form-container">
        <h1>Create an Account</h1>
        <form>
          <input type="text" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Username" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />

          <div className="center-div">
            <button className="form-submit"> Sign Up </button>
          </div>
        </form>

        <div className="account-options">
          <p>
            <Link to="/login">
              Already have an account?{" "}
              <span className="text-link">Log in!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
