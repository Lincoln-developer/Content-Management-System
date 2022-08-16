import express from 'express';
import mailController from '../controllers/email-controller.js';

//MailRoute instance
const mailRouter = express.Router();

//Route to send an email
/**
 * @swagger
 * /mailController:
 * post:
 *   description:used to send an email to specified client
 *   responses:
 *      "200":
 *         description:' response code for successfull message sent
*/
mailRouter.route('/').post(mailController);

//Route to edit an email to be sent
mailRouter.route('/').patch();

//Route to delete an email
mailRouter.route('/').delete();

export default mailRouter;
