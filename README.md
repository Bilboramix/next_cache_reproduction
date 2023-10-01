[This should mimic getServerSideProps but it's not refreshing at all](https://github.com/Bilboramix/next_cache_reproduction/blob/main/src/app/page.tsx)

---

Also tried this to mimic getStaticProps but it's not working either :

```js
export default async function Home() {
  const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/London", {
    next: {
      revalidate: 5,
    },
  });
  const json = await data.json();

  return <main>Home - {json.unixtime.toString().slice(-4)}</main>;
}
```
