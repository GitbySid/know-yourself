import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

import { getPredefinedPrompt } from './data';
import InputQuestion from '@/models/InputQuestion';
import ChoiceQuestion from '@/models/ChoiceQuestion';
import PromptForm from '@/models/PromptForm';

export async function GET(request) {
  await dbConnect();

  const searchParams = request.nextUrl.searchParams;
  const promptId = searchParams.get('promptId');

  if (!promptId) {
    return new NextResponse('Invalid Prompt Id', { status: 400 });
  }

  const promptForm = await PromptForm.findOne({ promptId }).populate(
    'question1 question2 question3 question4 question5'
  );

  if (!promptForm) {
    return new NextResponse('Prompt Not Found', { status: 404 });
  }

  return NextResponse.json(promptForm);
}
