import { NextResponse } from 'next/server';
import { getPredefinedPrompt } from './data';

export async function POST(req) {
  const { label } = await req.json();

  if (!label) {
    return new NextResponse('Invalid Label', { status: 400 });
  }

  const prompt = getPredefinedPrompt(label);

  if (!prompt) {
    return new NextResponse('Prompt Not Found', { status: 404 });
  }

  return NextResponse.json(prompt);
}
