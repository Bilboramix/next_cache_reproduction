export async function GET() {
  const randomNumber = Math.floor(Math.random() * 10000);
  return new Response(JSON.stringify({ randomNumber }));
}
