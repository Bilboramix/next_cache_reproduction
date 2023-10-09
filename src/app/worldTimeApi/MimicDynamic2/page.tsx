import getValue from "@/helpers/getValue";

export default async function MimicDynamic2() {
  /* Visit this page, wait 30 sec then click the link to this page again to see changes (it becomes dynamic for 5 min straight) */

  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/Andorra", {
    cache: "no-store",
  });
  const json = await data.json();

  return (
    <main>
      Dynamic no-store result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
