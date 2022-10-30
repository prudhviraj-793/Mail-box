import { createSlice } from "@reduxjs/toolkit";

// { to: "", subject: "", body: "", isMailSent: false }
const initialMailState = { to: "", mails: [], body: "", isMailSent: false };

const mailSlice = createSlice({
  name: "body",
  initialState: initialMailState,
  reducers: {
    setMail(state, action) {
      if (state.to === action.payload.to) {
        state.mails.push({
          subject: action.payload.subject,
          body: action.payload.body,
        });
      } else {
        state.to = action.payload.to;
        state.mails = [
          {
            subject: action.payload.subject,
            body: action.payload.body,
          },
        ];
      }
      state.isMailSent = action.payload.isMailSent;
    },
    // setMail(state, action) {
    //   state.to = action.payload.to;
    //   state.subject = action.payload.subject;
    //   state.isMailSent = action.payload.isMailSent;
    // },
    setBody(state, action) {
      state.body = action.payload;
    },
    isMailSent(state, action) {
      state.isMailSent = action.payload;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
