import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mailRoute from './routes/mail-route.js';
import db from './config/database.js';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Content management system api',
      description: 'This system facilitates content management',
    },
    contact: {
      name: 'Ang_Lincoln',
      email: 'coding-addict@gmail.com',
    },
    url: ["http://localhost:3000"],
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  //for successful database connection
  db.once('open', () => console.log('Database connected'));

  //for error connecting the database
  db.on('error', () => console.log('Error connecting database'));
});
