import mongoose from 'mongoose';

const PromptFormSchema = new mongoose.Schema(
  {
    promptId: {
      type: String,
      required: [true, 'PromptId is required.'],
      unique: true,
    },
    label: {
      type: String,
      required: [true, 'Label is required.'],
      unique: true,
    },
    question1: { type: mongoose.Schema.Types.ObjectId, ref: 'ChoiceQuestion' },
    question2: { type: mongoose.Schema.Types.ObjectId, ref: 'ChoiceQuestion' },
    question3: { type: mongoose.Schema.Types.ObjectId, ref: 'ChoiceQuestion' },
    question4: { type: mongoose.Schema.Types.ObjectId, ref: 'InputQuestion' },
    question5: { type: mongoose.Schema.Types.ObjectId, ref: 'InputQuestion' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.PromptForm ||
  mongoose.model('PromptForm', PromptFormSchema);
