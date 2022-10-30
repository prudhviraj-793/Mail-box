import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "../Components/TextEditor";
import { mailActions } from "../Store/mailSlice";

// function stringToHtml(str) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(str, "text/html");
//   return doc.body;
// }

function Welcome() {
  const toRef = useRef();
  const subjectRef = useRef();
  const body = useSelector((state) => state.mail.body);
  const dispatch = useDispatch();

  function sendMailHandler(e) {
    e.preventDefault();
    const enteredTo = toRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const obj = {
      to: enteredTo,
      subject: enteredSubject,
      body,
      isMailSent: true
    };
    // console.log(stringToHtml(body));
    dispatch(mailActions.setMail(obj));
  }
  return (
    <Fragment>
      <form onSubmit={sendMailHandler}>
        <div>
          <label>To</label>
          <input type="email" ref={toRef} required />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" ref={subjectRef} required />
        </div>
        <div>
          <TextEditor />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </Fragment>
  );
}

export default Welcome;
