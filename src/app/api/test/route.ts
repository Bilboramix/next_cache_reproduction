import fs from "fs";

const path = "./public/data";

export async function GET(request: Request) {
  if (!fs.existsSync(path)) {
    console.log("WRITING FILE !", __dirname);
    fs.mkdirSync(path);
    fs.writeFileSync("./public/data/test.txt", "coucou");
  }

  return new Response(JSON.stringify("coucou"));
}
