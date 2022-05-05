import React from "react";
import { Link } from "@chakra-ui/react";

function NavTabs() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/newitem">New Item</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </ul>
  );
}

export default NavTabs;
