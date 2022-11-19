import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTruck,
  faPlus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header>
      <div className="left-side-header">
        <FontAwesomeIcon className="business-logo" icon={faTruck} />
      </div>
      <div className="right-side-header">
        <button className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <FontAwesomeIcon className="user-icon" icon={faUser} />
        <button className="dark-mode-button">
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <button className="light-mode-button">
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
    </header>
  );
}
