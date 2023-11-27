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
    // Insert data here
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
