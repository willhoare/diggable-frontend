import axios from "axios";
import { useState, useEffect, startTransition } from "react";
import "./SignIn.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Profile from "../Profile/Profile";
import GoogleLogin from "../../components/googleLogin/googleLogin";
import GoogleLogout from "../../components/googleLogout/googleLogout";
import { gapi, gapiComplete } from "gapi-script";
const clientId =
  "45505834200-gd8mjdio7kvo7ktrjn6i1lnsho5c0slq.apps.googleusercontent.com";

export default SignUp;

function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Adding google oAuth

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  ////

  const handleSignup = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    console.log(username);
    console.log(name);
    console.log(password);

    axios
      .post("http://localhost:8080/signup", {
        username,
        name,
        password,
      })
      .then((res) => {
        setIsSignedUp(true);
      })
      .catch((e) => {
        setErrorMessage(`Error: ${e}`);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    axios
      .post("http://localhost:8080/login", {
        username,
        password,
      })
      .then(({ data }) => {
        sessionStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setIsLoginError(false);
        setErrorMessage("");
      })
      .catch((e) => {
        setIsLoginError(true);
        setErrorMessage(`Error: ${e}`);
      });
  };

  const renderSignUp = () => (
    <div>
      <div>
        <Header />
      </div>
      <section className="signupForm">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            Username:{" "}
            <input className="signupForm__inputs" type="text" name="username" />
          </div>
          <div className="form-group">
            Name:{" "}
            <input className="signupForm__inputs" type="text" name="name" />
          </div>
          <div className="form-group">
            Password:{" "}
            <input
              type="password"
              className="signupForm__inputs"
              name="password"
            />
          </div>
          <button type="submit" className="signButton">
            Signup
          </button>
        </form>

        <div>
          <GoogleLogin />
        </div>
        <div>
          <GoogleLogout />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );

  const renderLogin = () => (
    <div>
      <div>
        <Header />
      </div>
      <section className="signupForm">
        <h1>Login</h1>
        {isLoginError && <label className="error">{errorMessage}</label>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            Username:{" "}
            <input type="text" className="signinForm__inputs" name="username" />
          </div>
          <div className="form-group">
            Password:{" "}
            <input
              type="password"
              className="signinForm__inputs"
              name="password"
            />
          </div>
          <button type="submit" className="signButton">
            Login
          </button>
          <div>
            <Footer />
          </div>
        </form>
      </section>
    </div>
  );

  // Handle the Signup/Login
  if (!isSignedUp) return renderSignUp();
  if (!isLoggedIn) return renderLogin();

  return (
    <>
      <div>
        <Header />
      </div>
      <section className="signupForm">
        <div>
          <Profile />
        </div>
        <div>
          <GoogleLogin />
        </div>
        <div>
          <GoogleLogout />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
