import User from '../models/user-model.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

/**
 * check if the account exists already by email.
 * If the email exist, it is not registered otherwise it registered
 */
const registerUser = expressAsyncHandler(async (req, res) => {
  const { firstname, lastname, email, password: hash } = req.body;
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(500).json({ message: 'user already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(hash, 10);
    const user = await new User({ firstname, lastname, email, hashedPassword });
    await user
      .save()
      .then((user) => {
        return res.status(200).json({
          accountStatus: 'user registered successfuly',
          user: user,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: 'user not registerd',
        });
      });
  }
});
export default registerUser;
