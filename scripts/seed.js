import mongoose from 'mongoose';
import dotenv from 'dotenv';
import PromptForm from '../models/PromptForm.js';
import ChoiceQuestion from '../models/ChoiceQuestion.js';
import InputQuestion from '../models/InputQuestion.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => {
    console.log(`MongoDB connected : ${conn.connection.host}`);
  })
  .catch((error) => {
    console.error(`ERROR: ${error.message}`);
  });

async function importData() {
  try {
    const question1 = new ChoiceQuestion({
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    });
    await question1.save();

    const question2 = new ChoiceQuestion({
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    });
    await question2.save();

    const question3 = new ChoiceQuestion({
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    });
    await question3.save();

    const question4 = new InputQuestion({
      question: 'What was the last movie you enjoyed and why did you like it?',
    });
    await question4.save();

    const question5 = new InputQuestion({
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    });
    await question5.save();

    const promptForm = new PromptForm({
      promptId: '1',
      label: 'What movie to watch?',
      question1: question1.id,
      question2: question2.id,
      question3: question3.id,
      question4: question4.id,
      question5: question5.id,
    });
    await promptForm.save();

    console.log('Data added successfully.');
    process.exit(0);
  } catch (error) {
    console.log('Data addition failed.');
    process.exit(1);
  }
}

async function destroyData() {
  try {
    await PromptForm.deleteMany({});
    await ChoiceQuestion.deleteMany({});
    await InputQuestion.deleteMany({});
    console.log('Data deleted successfully.');
    process.exit(0);
  } catch (error) {
    console.log('Data deletion failed.');
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
