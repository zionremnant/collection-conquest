import React from "react";
import { Link } from "@chakra-ui/react";
import Auth from "../utils/auth";

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
        <Link
          href={`/profile/${
            Auth.loggedIn() && Auth.getProfile().data.username
              ? Auth.getProfile().data.username
              : ""
          }`}
        >
          Profile
        </Link>
      </li>
      <li>
        {Auth.loggedIn() ? (
          <Link onClick={Auth.logout}>Logout</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}

export default NavTabs;
