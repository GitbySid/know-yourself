import mongoose from 'mongoose';

const InputQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question is required.'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.InputQuestion ||
  mongoose.model('InputQuestion', InputQuestionSchema);
