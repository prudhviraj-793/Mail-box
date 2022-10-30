import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";
import { sendMail } from "./Store/actions";
import { mailActions } from "./Store/mailSlice";

let isInitial = true;
function App() {
  const mails = useSelector((state) => state.mail.mails);
  const to = useSelector(state => state.mail.to)
  const isMailSent = useSelector((state) => state.mail.isMailSent);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (isMailSent) {
      dispatch(
        sendMail({
          to,
          mails,
        })
      );
    }
    dispatch(mailActions.isMailSent(false))
  }, [mails, to, dispatch, isMailSent]);
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
