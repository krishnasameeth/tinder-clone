import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div>
      <h2>I am the header</h2>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
