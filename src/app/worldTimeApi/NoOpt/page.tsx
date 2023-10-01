import getValue from "@/helpers/getValue";

export default async function NoOpt() {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/Andorra");
  const json = await data.json();

  return (
    <main>
      No opt result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
