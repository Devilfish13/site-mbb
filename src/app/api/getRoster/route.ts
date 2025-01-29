export async function GET() {
  const apiKey = process.env.WOWAUDIT_KEY;
  const url = 'https://wowaudit.com/v1/characters';

  if (!apiKey) {
    return new Response('Missing API key', { status: 500 });
  }

  const response = await fetch('https://api.example.com/data', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
