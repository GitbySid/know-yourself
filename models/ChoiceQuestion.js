import mongoose from 'mongoose';

const ChoiceQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question is required.'],
    },
    choices: [String],
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.ChoiceQuestion ||
  mongoose.model('ChoiceQuestion', ChoiceQuestionSchema);
