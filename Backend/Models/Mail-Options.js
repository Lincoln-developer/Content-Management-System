import mongoose from 'mongoose';

const mailOptionsSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body:{
    type:String,
    required:true
  }
});

const Mail = mongoose.model('Mail',mailOptionsSchema);

export default Mail;    
