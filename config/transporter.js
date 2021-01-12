// Not in use
const nodemailer = require("nodemailer");
const creds = require("./creds");

module.exports = {
  sendMail: async (mail) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
      port: 587,
      auth: {
        user: creds.USER,
        pass: creds.PASS,
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
  },
};
