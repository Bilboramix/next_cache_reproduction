import Nav from "../components/Nav";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  /* Do not do fetch request/api calls here if you want dynamic or ISG data, that's okay for data that will NEVER change */
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
