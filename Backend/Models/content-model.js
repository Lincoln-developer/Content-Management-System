import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { collection: 'Content' }
);

const Content = mongoose.model('Content', contentSchema);

export default Content;
