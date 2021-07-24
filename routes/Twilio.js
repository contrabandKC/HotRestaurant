require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


// const accountSid = "ACb732612889d7f028289f95cb97cc20d8";
// const authToken = "52ef413b09e60b91b3f77af6eeed6ea4";

const sendSms = (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;