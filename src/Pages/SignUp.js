import { Fragment, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../API/api";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  async function signUpHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
    if (enteredPassword === enteredConfirmPassword) {
      const signupData = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };
      const response = await signUp(signupData);
      const data = await response.json();
      try {
        if (!response.ok) {
          throw data.error.message;
        }
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please Check password");
    }
  }
  return (
    <Fragment>
      <form onSubmit={signUpHandler}>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div>
          <input type="email" placeholder="Email" ref={emailRef} required />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
        <Link to="/login">Have an account? Login</Link>
      </div>
    </Fragment>
  );
}

export default SignUp;
