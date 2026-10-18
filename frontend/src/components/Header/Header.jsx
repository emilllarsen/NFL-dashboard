import styles from "./Header.module.css";
import { Link } from "react-router";
export default function Header() {
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
          <input className={styles.headerInputSearch} type="text" placeholder="Search 32 Teams"/>
        </div>
      </div>
    </header>
  );
}
