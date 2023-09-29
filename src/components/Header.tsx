// "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = async () => {
  const res = await fetch("http://localhost:3000/api/test");
  const json = await res.json();

  console.log("refreshing layout");

  console.log("header server code");

  return (
    <header>
      <Link replace={true} href="/">
        Home
      </Link>
      <Link replace={true} href="/login">
        login
      </Link>
      <Link replace={true} href="/action">
        action
      </Link>
    </header>
  );
};

export default Header;
