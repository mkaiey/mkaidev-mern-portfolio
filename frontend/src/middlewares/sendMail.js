import { createTransport } from "nodemailer";

export const sendMail = async (name, email, message) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    transporter.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    const mailToMe = {
      from: email,
      to: process.env.EMAIL,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };
    
    const mailToViewer = {
      from: process.env.EMAIL,
      to: email,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Thanks ${name}! For your valuable feedback ✌️</p>`,
    };

    await transporter.sendMail(mailToMe, (error) => {
      if (error) {
        return console.log(error);
      } else {
        console.log("Success");
      }
    });

    await transporter.sendMail(mailToViewer, (error) => {
      if (error) {
        return console.log(error);
      } else {
        console.log("Success");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
