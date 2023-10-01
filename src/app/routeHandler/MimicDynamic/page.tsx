export default async function MimicDynamic() {
  const data = await fetch("http://127.0.0.1:3000/api/allSame/MimicDynamic", {
    cache: "no-cache",
  });
  const { randomNumber } = await data.json();

  return (
    <main>
      Dynamic result :
      <br />
      {randomNumber}
    </main>
  );
}
