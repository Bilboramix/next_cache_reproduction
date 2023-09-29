import Link from "next/link";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header</h1>
          <Link prefetch={false} href="/test">
            test
          </Link>
          <Link prefetch={false} href="/">
            home
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
