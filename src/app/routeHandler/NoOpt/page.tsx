export default async function NoOpt() {
  const data = await fetch("http://127.0.0.1:3000/api/allSame/NoOpt");
  const { randomNumber } = await data.json();

  return (
    <main>
      No opt result :
      <br />
      {randomNumber}
    </main>
  );
}
