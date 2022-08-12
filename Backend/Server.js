import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mailRoute from './Views/mail-view.js';
import db from './Config/database.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

const mailOptions = {
    from :'flip@gmail.com',
    to:'fly@gmail.com',
    subject:'Automatic Email System',
    text:'auto-email system is going down'
};

transporter.sendMail(mailOptions, (err, data)=> {
    if(err){
        console.log('Error occured in sending email',err)
    }else{
        console.log('Email is sent')
    }
})*/
//app Routes
app.use('/api/v1/mail', mailRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  //for successful database connection
  db.once('open', () => console.log('Database connected'));

  //for error connecting the database
  db.on('error', () => console.log('Error connecting database'));
});
