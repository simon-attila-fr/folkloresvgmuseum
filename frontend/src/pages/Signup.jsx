import { useState } from "react";
import axios from "axios";
// import PasswordError from "../components/PasswordError";
import "./Form.css";

export default function Signup() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordsecu, setPasswordsecu] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        pseudo,
        email,
        password,
      })
      .then(function signupresponse(response) {
        // eslint-disable-next-line no-restricted-syntax
        console.log(response);
      })
      .catch(function signuperror(error) {
        console.warn(error);
      });
  }

  return (
    <div className="formContainer">
      <h1>Welcome!</h1>
      <form type="submit" className="form" onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Username:</label>
        <input
          type="text"
          name="pseudo"
          placeholder="Username"
          value={pseudo}
          onChange={(event) => {
            setPseudo(event.target.value);
          }}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="user@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          minLength="8"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label htmlFor="passwordsecu">Repeat the password:</label>
        <input
          type="password"
          name="passwordsecu"
          minLength="8"
          value={passwordsecu}
          onChange={(event) => {
            setPasswordsecu(event.target.value);
          }}
        />
        <input
          className="submitButton"
          type="submit"
          id="signup"
          name="signup"
          placeholder="Sign up"
        />
      </form>
    </div>
  );
}
