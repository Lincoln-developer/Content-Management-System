import mongoose from 'mongoose';

//Connecting to mongodb
mongoose.connect(process.env.DATABASE_URL, (error) => {
  if (error) {
    return error;
  }
});

const db = mongoose.connection;

export default db;
