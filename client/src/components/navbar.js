import React from "react";
import { Link } from "@chakra-ui/react";
import Auth from "../utils/auth";


function NavTabs() {
  return (
  <div className="topnav">
    <ul>
      <a>
        <Link href="/">Home</Link>
      </a>
      <a>
        <Link href="/newitem">New Item</Link>
      </a>
      <a>
        <Link
          href={`/profile/${
            Auth.loggedIn() && Auth.getProfile().data.username
              ? Auth.getProfile().data.username
              : ""
          }`}
        >
          Profile
        </Link>
      </a>
      <a>
        {Auth.loggedIn() ? (
          <Link onClick={Auth.logout}>Logout</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </a>
    </ul>
  </div>
  );
}

export default NavTabs;
