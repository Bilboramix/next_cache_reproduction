import getValue from "@/helpers/getValue";

export default async function MimicStatic() {
  const data = await fetch("http://127.0.0.1:3000/api/allSame/MimicStatic", {
    next: {
      revalidate: 15,
    },
  });
  const { randomNumber } = await data.json();

  return (
    <main>
      Static result :
      <br />
      {randomNumber}
    </main>
  );
}
