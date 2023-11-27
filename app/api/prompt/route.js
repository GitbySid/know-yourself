import { NextResponse } from 'next/server';
import { getPredefinedPrompt } from './data';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const promptId = searchParams.get('promptId');

  if (!promptId) {
    return new NextResponse('Invalid Prompt Id', { status: 400 });
  }

  const prompt = getPredefinedPrompt(promptId);

  if (!prompt) {
    return new NextResponse('Prompt Not Found', { status: 404 });
  }

  return NextResponse.json(prompt);
}
