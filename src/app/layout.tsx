import getValue from "@/helpers/getValue";
import Nav from "../components/Nav";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/Gibraltar", {
    next: {
      revalidate: 1,
    },
  });
  const json = await data.json();

  return (
    <html lang="en">
      <body>
        RootLayout result :
        <br />
        {getValue(json.unixtime)}
        <br />
        <br />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
