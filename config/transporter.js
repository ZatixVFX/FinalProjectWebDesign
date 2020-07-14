const nodemailer = require("nodemailer");
const creds = require("../config/nodemailerCreds");

let mail = {
  from,
  replyTo,
  to,
  subject,
  text,
};

const sendMail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: "junaids00800@gmail.com",
      pass: "Junaid0897",
    },
  });

  await transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  await transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Sucesss");
    }
  });
};

export default sendMail;
