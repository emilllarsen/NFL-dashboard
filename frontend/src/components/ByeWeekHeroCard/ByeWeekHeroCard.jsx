import { Link } from "react-router";
import styles from "./ByeWeekHeroCard.module.css";
export default function ByeWeekHeroCard({ logo, teams }) {
  return (
    <section className={styles.byeWeekWrapper}>
      <Link className={styles.byeWeekLink}>
        <figure className={styles.byeWeekContainer}>
          <img src={logo} alt={`${teams} logo`} width="24" height="24" />
          <span>{teams}</span>
        </figure>
      </Link>
    </section>
  );
}
