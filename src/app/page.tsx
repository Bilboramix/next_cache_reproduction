export default async function Home() {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/London", {
    cache: "no-cache",
  });
  const json = await data.json();

  return <main>Home - {json.unixtime}</main>;
}
