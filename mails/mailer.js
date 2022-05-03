import confirmationMail from "./templates/bookingConfirmation.js";
import welcomeMail from "./templates/welcome.js";
import transporter from "./transport.js";

const sendInvitation = () => {
  let mailOptions = {
    from: "Mentorpoint App <mentorpoint.in@gmail.com>",
    to: "dnyaneshwarbtecs35@gmail.com",
    subject: `Welcome to Mentorpoint`,
    html: confirmationMail("Dnyaneshwar", {
      name: "Session Name",
      mentor: "Mentor Name",
    }),
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

export default sendInvitation;
