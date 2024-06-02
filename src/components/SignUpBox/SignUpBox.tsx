import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase-client";
import "./../common-styles/login-signup-field.css";

interface RegistrationDetails {
  email: string;
  username: string;
  password: string;
  rePassword: string;
}

export default function SignUpBox() {
  const [userDetails, setUserDetails] = useState<RegistrationDetails>({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const navigateTo = useNavigate();

  const inputUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const registrationHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userDetails.password !== userDetails.rePassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: userDetails.email,
        password: userDetails.password,
      });

      if (error) {
        alert(error.message);
      } else if (data.user) {
        alert(
          "Signed up successfully. Please check your email for verification."
        );

        const { error: insertError } = await supabase.from("users").insert([
          {
            id: data.user.id,
            username: userDetails.username,
          },
        ]);

        if (insertError) {
          alert("Error inserting user data: " + insertError.message);
        } else {
          navigateTo("/login");
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="content-container">
      <div className="form-container">
        <h1 className="auth-header">Create an Account</h1>
        <form onSubmit={registrationHandler}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input-field"
            value={userDetails.email}
            onChange={inputUpdateHandler}
            required
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="input-field"
            value={userDetails.username}
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
          <input
            name="rePassword"
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={userDetails.rePassword}
            onChange={inputUpdateHandler}
            required
          />
          <div className="center-div">
            <button className="form-submit">Sign Up</button>
          </div>
        </form>
        <div className="account-options">
          <p className="auth-text">
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
