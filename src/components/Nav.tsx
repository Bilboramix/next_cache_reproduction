import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br />
      <Link href="/worldTimeApi/NoOpt">TIME API - No Opt</Link>
      <br />
      <Link href="/worldTimeApi/MimicDynamic">TIME API - Mimic Dynamic no cache</Link>
      <br />
      <Link href="/worldTimeApi/MimicDynamic2">TIME API - Mimic Dynamic no store</Link>
      <br />
      <Link href="/worldTimeApi/MimicStatic">TIME API - Mimic Static</Link>
      <br />
      <Link href="/worldTimeApi/tags">TIME API - Mimic Static with tags</Link>
    </nav>
  );
};

export default Nav;
