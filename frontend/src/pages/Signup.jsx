import "./Form.css";

export default function Signup() {
  return (
    <div className="formContainer">
      <h1>Welcome!</h1>
      <form type="submit" className="form">
        <label htmlFor="pseudo">Username:</label>
        <input type="text" name="pseudo" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" minLength="8" />
        <label htmlFor="passwordsecu">Repeat the password:</label>
        <input type="password" name="passwordsecu" minLength="8" />
      </form>
    </div>
  );
}
