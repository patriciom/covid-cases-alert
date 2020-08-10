// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = `${process.env.ACCOUNT_SID}`;
const authToken = `${process.env.AUTH_TOKEN}`;
const client = require('twilio')(accountSid, authToken);

exports.sendSMS = (req, res, next) => {
  const {mobile, msg } = req.body;
  res.status(201).send(`SMS message [${msg}] sent to [${mobile}].`);
  client.messages
    .create({
      body: `${msg}`,
      from: `${process.env.FROM_NUMBER}`,
      to: `${mobile}`
    })
    .then(message => console.log(message.sid));
};
