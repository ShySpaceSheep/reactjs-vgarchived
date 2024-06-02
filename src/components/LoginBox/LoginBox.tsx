import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../common-styles/login-signup-field.css";
import { useAuth } from "../../utils/auth-context";

interface loginDetails {
  email: string;
  password: string;
}

export default function LoginBox() {
  const [userDetails, setUserDetails] = useState<loginDetails>({
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const { signIn } = useAuth();

  const inputUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await signIn(userDetails.email, userDetails.password);

    if (error) {
      console.error("Error logging in:", error.message);
    } else {
      console.log("Logged in successfully");
      navigateTo("/");
    }
  };

  return (
    <div className="content-container">
      <div className="form-container">
        <h1 className="auth-header">Login</h1>
        <form onSubmit={loginHandler}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input-field"
            value={userDetails.email}
            onChange={inputUpdateHandler}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input-field"
            value={userDetails.password}
            onChange={inputUpdateHandler}
            required
          />
          <div className="center-div">
            <button className="form-submit"> Login </button>
          </div>
        </form>

        <div className="account-options">
          <p className="auth-text">Forgot password?</p>
          <p className="auth-text">
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
