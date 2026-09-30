import React from "react";
import styles from "./Header.module.css";
import { useNavigate, Link } from "react-router";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogoLinks}>
          <span
            className={styles.headerLogo}
            aria-label="Nfl-dashboard logo text"
          >
            NFL Dashboard
          </span>
          <nav className={styles.headerNavigation}>
            <Link className={styles.headerLinks} to="/">
              Teams
            </Link>
            <Link className={styles.headerLinks} to="/schedule">
              Schedule
            </Link>
            <Link className={styles.headerLinks} to="/stats">
              Stats
            </Link>
            <Link className={styles.headerLinks} to="/stadiums">
              Stadiums
            </Link>
          </nav>
        </div>
        <div className={styles.headerSearchLinks}>
          <input className={styles.headerInputSearch} type="text" />
          <Link className={`${styles.signButton}`} to="/sign-in">Sign in</Link>
          <Link className={`${styles.signButton}`} to="/sign-up">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
