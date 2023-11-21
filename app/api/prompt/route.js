import { NextResponse } from 'next/server';
import { getPredefinedPrompt } from './data';

export async function POST(req) {
  const { label } = await req.json();
  const prompt = getPredefinedPrompt(label);
  return NextResponse.json(prompt);
}
