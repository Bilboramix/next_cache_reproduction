import getValue from "@/helpers/getValue";

export default async function MimicStatic() {
  /* Visit the page, wait 10 seconds then revisit */

  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/London", {
    next: {
      revalidate: 10,
    },
  });
  const json = await data.json();

  return (
    <main>
      Static result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
