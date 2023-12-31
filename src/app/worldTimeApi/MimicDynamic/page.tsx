import getValue from "@/helpers/getValue";

export default async function MimicDynamic() {
  /* Visit this page, wait 30 sec then click the link to this page again to see changes (it becomes dynamic for 5 min straight) */

  const data = await fetch("https://worldtimeapi.org/api/timezone/America/Denver", {
    cache: "no-cache",
  });
  const json = await data.json();

  return (
    <main>
      Dynamic no-cache result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
