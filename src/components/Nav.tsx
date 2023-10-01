import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br />
      <Link href="/worldTimeApi/NoOpt">TIME API - No Opt</Link>
      <br />
      <Link href="/worldTimeApi/MimicDynamic">TIME API - Mimic Dynamic</Link>
      <br />
      <Link href="/worldTimeApi/MimicStatic">TIME API - Mimic Static</Link>
      <br />
      <Link href="/routeHandler/NoOpt">ROUTE HANDLER - No Opt</Link>
      <br />
      <Link href="/routeHandler/MimicDynamic">ROUTE HANDLER - Mimic Dynamic</Link>
      <br />
      <Link href="/routeHandler/MimicStatic">ROUTE HANDLER - Mimic Static</Link>
    </nav>
  );
};

export default Nav;
