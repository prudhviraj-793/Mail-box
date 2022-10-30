import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { mailActions } from "../Store/mailSlice";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  function onChangeHandler(newContent) {
    setContent(newContent);
    dispatch(mailActions.setBody(content));
  }
  return (
    <div>
      <JoditEditor ref={editor} value={content} onChange={onChangeHandler} />
    </div>
  );
};

export default TextEditor;
