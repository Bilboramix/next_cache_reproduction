import { revalidateTag } from "next/cache";

export default async function Home() {
  const revalidateTheTags = async () => {
    "use server";
    revalidateTag("test");
  };

  return (
    <main>
      <form action={revalidateTheTags}>
        <button type="submit">Revalidate tag !</button>
      </form>
    </main>
  );
}
