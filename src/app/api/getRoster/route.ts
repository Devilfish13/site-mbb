'use server';

export async function GET() {
  try {
    const apiKey = process.env.WOWAUDIT_KEY;

    const url = 'https://wowaudit.com/v1/characters';

    if (!apiKey) {
      return new Response('Missing API key', { status: 500 });
    }

    const response = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
