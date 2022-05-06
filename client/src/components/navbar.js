import React from "react";
import { Link } from "@chakra-ui/react";
import Auth from "../utils/auth";

function NavTabs() {
  return (
  <div className="navBar">
    <ul>
      <li className="float-child">
        <Link href="/">Home</Link>
      </li>
      <li className="float-child">
        <Link href="/newitem">New Item</Link>
      </li>
      <li className="float-child">
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
      <li className="float-child">
        {Auth.loggedIn() ? (
          <Link onClick={Auth.logout}>Logout</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  </div>
  );
}

export default NavTabs;
