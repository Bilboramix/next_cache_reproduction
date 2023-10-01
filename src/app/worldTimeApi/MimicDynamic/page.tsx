import getValue from "@/helpers/getValue";

export default async function MimicDynamic() {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/Paris", {
    cache: "no-cache",
  });
  const json = await data.json();

  return (
    <main>
      Dynamic result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
