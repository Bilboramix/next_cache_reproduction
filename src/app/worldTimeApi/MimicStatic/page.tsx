import getValue from "@/helpers/getValue";

export default async function MimicStatic() {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/London", {
    next: {
      revalidate: 1,
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
