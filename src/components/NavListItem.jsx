import React from "react";
import './navListItem.css';

function NavListItem({ navItem }) {
  return (
    <li>
      <a href={navItem.link}>{navItem.name}</a>
    </li>
  );
}

export default NavListItem;
