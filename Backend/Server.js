import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
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
})

const PORT = 3300;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
