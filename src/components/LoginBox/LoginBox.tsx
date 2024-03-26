import { Link } from "react-router-dom";
import "./../common-styles/login-signup-field.css";

export default function LoginBox() {
  return (
    <div className="content-container">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="center-div">
            <button className="form-submit"> Login </button>
          </div>
        </form>

        <div className="account-options">
          <p>Forgot password?</p>
          <p>
            Don't have an account yet?{" "}
            <Link to="/signup">
              <span className="text-link">Sign up for free!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
