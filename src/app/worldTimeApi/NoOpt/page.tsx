import getValue from "@/helpers/getValue";

export default async function NoOpt() {
  /* No option here, the data will be fetched ONCE per client, then it will be unchanged until all cache system invalidations triggers (this is not reliable for any kind of dynamic data) */

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
