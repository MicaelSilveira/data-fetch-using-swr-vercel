import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import React from "react";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h3>LOGO</h3>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuUL}>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
