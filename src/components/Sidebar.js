import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faBriefcase,
  faMusic,
  faRocket,
  faBullseye,
  faBookOpen,
  faPlus,
  faInbox,
  faCalendar,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="display-options">
        <ul>
          <li>
            <button className="inbox-button">
              <FontAwesomeIcon icon={faInbox} />
              <p>Inbox</p>
            </button>
          </li>
          <li>
            <button className="today-button">
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>Today</p>
            </button>
          </li>
          <li>
            <button className="next-7-days-button">
              <FontAwesomeIcon icon={faCalendar} />
              <p>Next 7 Days</p>
            </button>
          </li>
          <li>
            <button className="projects-button">
              <FontAwesomeIcon icon={faListCheck} />
              <p>Projects</p>
            </button>
          </li>
        </ul>
      </div>
      <div className="project-list">
        <ul>
          <li>
            <button>
              <FontAwesomeIcon icon={faBriefcase} />
              The Office
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faRocket} />
              Daily Items
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faBullseye} />
              Future
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faBookOpen} />
              Words
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faMusic} />
              Music
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faPlus} />
              Add Project
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
