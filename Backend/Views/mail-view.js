import express from 'express';
import mailController from '../Controllers/email-controller.js';

//MailRoute instance
const mailRouter = express.Router();

//Route to send an email
mailRouter.route('/').post(mailController);

//Route to edit an email to be sent
mailRouter.route('/').patch();

//Route to delete an email
mailRouter.route('/').delete();

export default mailRouter;
