import React from "react";
import "./AppointmentsHeader.module.scss";
import classNames from "classnames";

const AppointmentsHeader = () => {
  return (
    <nav className="bahmni-header">
      <ul>
        <li>
          <a className="bahmni-header-home-btn">
            <i className={classNames("fa", "fa-home")}></i>
          </a>
        </li>
        <li>
          <a className="active">
            Manage Appointments
          </a>
        </li>
        <li>
          <a>Admin</a>
        </li>
      </ul>
    </nav>
  );
};
export default AppointmentsHeader;
