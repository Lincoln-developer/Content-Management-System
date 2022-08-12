//import Mail from '../Models/Mail-Options.js';
import nodemailer from 'nodemailer';

const mailController = async (req, res) => {
  //Test SMTP service account from ethereal.email
  let testAccount = await nodemailer.createTestAccount();

  //Reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  //Sending mail with defined transport object
  const mailInfor = await transporter.sendMail({
    //sender address
    from: 'lincoln@gmail.com',
    //receiver address
    to: 'ang@gmail.com',
    //subject
    subject: 'Coding to the moon!',
    text: 'Hey ang, am writing to let you know that we are having a meeting today',
  });

  console.log('Message sent: %s', mailInfor.messageId);

  //Preview URL of sent mail
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mailInfor));
};

mailController().catch(console.error);

export default mailController;
