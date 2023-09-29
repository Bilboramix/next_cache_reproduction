import fs from "fs";

const path = "./public/data";

export async function GET(request: Request) {
  return new Response(JSON.stringify("coucou"));
}
