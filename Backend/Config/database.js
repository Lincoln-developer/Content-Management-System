import mongoose from 'mongoose';

//Connecting to mongodb
mongoose
  .connect(process.env.DATABASE_URL)
  .then(console.log('Connected to Database'))
  .catch(console.log('Error connecting Database'));

const db = mongoose.connection;

export default db;
