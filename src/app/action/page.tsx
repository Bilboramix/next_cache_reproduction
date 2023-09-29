import Header from "@/components/Header";
import { revalidatePath } from "next/cache";

export default function Action() {
  const revalidation = async () => {
    "use server";
    revalidatePath("/", "layout");
  };

  console.log("Action page server code");

  return (
    <main>
      Action
      <form action={revalidation}>
        <button type="submit">sub</button>
      </form>
    </main>
  );
}
export const dynamic = "force-dynamic";
