export const predefinedPrompts = [
  {
    id: 1,
    label: 'What movie to watch?',
    question1: {
      id: 1,
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    },
    question2: {
      id: 1,
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    },
    question3: {
      id: 2,
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    },
    question4: {
      id: 1,
      question: 'What was the last movie you enjoyed and why did you like it?',
    },
    question5: {
      id: 2,
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    },
  },
  {
    id: 2,
    label: 'What to eat for dinner?',
    question1: {
      id: 1,
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    },
    question2: {
      id: 1,
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    },
    question3: {
      id: 2,
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    },
    question4: {
      id: 1,
      question: 'What was the last movie you enjoyed and why did you like it?',
    },
    question5: {
      id: 2,
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    },
  },
  {
    id: 3,
    label: 'What sport to play?',
    question1: {
      id: 1,
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    },
    question2: {
      id: 1,
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    },
    question3: {
      id: 2,
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    },
    question4: {
      id: 1,
      question: 'What was the last movie you enjoyed and why did you like it?',
    },
    question5: {
      id: 2,
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    },
  },
  {
    id: 4,
    label: 'What board game to play?',
    question1: {
      id: 1,
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    },
    question2: {
      id: 1,
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    },
    question3: {
      id: 2,
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    },
    question4: {
      id: 1,
      question: 'What was the last movie you enjoyed and why did you like it?',
    },
    question5: {
      id: 2,
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    },
  },
  {
    id: 5,
    label: 'Where to go for a weekend getaway?',
    question1: {
      id: 1,
      question: 'Answer Level',
      choices: ['Broad', 'Medium', 'Specific'],
    },
    question2: {
      id: 1,
      question: 'How are you feeling right now?',
      choices: [
        'A) Excited and Energetic',
        'B) Melancholic or Thoughtful',
        'C) Relaxed or Chill',
        'D) Curious and Adventurous',
      ],
    },
    question3: {
      id: 2,
      question: 'What genre are you in the mood for?',
      choices: [
        'A) Action/Adventure',
        'B) Drama',
        'C) Comedy',
        'D) Mystery/Thriller',
      ],
    },
    question4: {
      id: 1,
      question: 'What was the last movie you enjoyed and why did you like it?',
    },
    question5: {
      id: 2,
      question:
        "Is there a specific theme you're interested in tonight ( friendship,space, historical events, etc.)?",
    },
  },
];

export const getPredefinedPrompt = (promptId) => {
  return predefinedPrompts.find((item) => promptId === item.id + '');
};
