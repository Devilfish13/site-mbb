'use server';

import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.WOWAUDIT_KEY;

  const url = 'https://wowaudit.com/v1/characters';

  if (!apiKey) {
    return new Response('Missing API key', { status: 500 });
  }
  console.log(apiKey);
  try {
    const response = await fetch(`${url}?api_key=${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return NextResponse.json(null);
  }
}
