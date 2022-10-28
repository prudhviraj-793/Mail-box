import { Fragment, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../API/api";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  async function loginHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    const response = await login(loginData);
    const data = await response.json()
    try {
      if (!response.ok) {
        throw data.error.message
      }
      navigate("/welcome");
    } catch (error) {
      alert(error)
    }
  }
  return (
    <Fragment>
      <form onSubmit={loginHandler}>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <input type="email" placeholder="Email" ref={emailRef} required />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <Link to="/">Forgot Password</Link>
        </div>
      </form>
      <div>
        <Link to="/">Don't have an account? Sign up</Link>
      </div>
    </Fragment>
  );
}

export default Login;
