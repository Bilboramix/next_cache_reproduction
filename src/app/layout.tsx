import Header from "@/components/Header";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
