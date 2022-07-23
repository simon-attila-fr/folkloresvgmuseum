import "./Form.css";

export default function Login() {
  return (
    <div className="formContainer">
      <h1>Welcome back!</h1>
      <form type="submit" className="form">
        <label htmlFor="pseudo">Username:</label>
        <input type="text" name="pseudo" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
      </form>
    </div>
  );
}
