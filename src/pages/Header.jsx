import React from "react";
import './header.css';
import NavListItem from "../components/NavListItem";
import NavListData from "../data/navListData";
import Search from "../components/Search";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {NavListData.map(navItem => {
          return <NavListItem key={navItem._id} navItem={navItem} />;
        })}
      </ul>
      <Search/>
    </header>
  );
}

export default Header;
