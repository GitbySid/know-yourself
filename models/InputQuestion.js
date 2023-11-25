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

module.exports =
  mongoose.models.InputQuestion ||
  mongoose.model('InputQuestion', InputQuestionSchema);
