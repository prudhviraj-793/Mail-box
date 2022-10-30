export function sendMail(mail) {
  return async (dispatch) => {
    let to = ''
    for(let char of mail.to) {
        if(char === '@' || char === '.') {
            continue
        }
        to += char
    }
    async function sendRequest() {
      const url =
        `https://mail-box-fe343-default-rtdb.firebaseio.com/allMails/${to}.json`;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({mails: mail.mails}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    sendRequest()
  };
}
