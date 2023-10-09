import getValue from "@/helpers/getValue";

export default async function Tags() {
  /* Tag controlled request : Reliable for ISG datas, every fetch request that carry this tag will replay when revalidateTags() is called */

  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/Bucharest", {
    next: {
      tags: ["test"],
    },
  });
  const json = await data.json();

  return (
    <main>
      tags result :
      <br />
      {getValue(json.unixtime)}
    </main>
  );
}
