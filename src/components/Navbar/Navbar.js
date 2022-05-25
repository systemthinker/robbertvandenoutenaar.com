import React from "react";
import { Link } from "react-router-dom";
import { StyledWrapper } from "./Navbar.sc";

export default function Navbar() {
  return (
    <StyledWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}