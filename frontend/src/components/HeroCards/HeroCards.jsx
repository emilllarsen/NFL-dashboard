import styles from "./HeroCards.module.css";
import { Link } from "react-router";


export default function HeroCards({
  day,
  date,
  completed,
  time,
  logo,
  homeTeam,
  awayTeam,
  record,
  score,
}) {
  return (
    <section className={styles.heroCardWrapper}>
      <div className={styles.heroCardContainer}>
        <div className={styles.heroCardTopRow}>
          <span>{day}</span>
          <span>{date}</span>
          <span>{completed === true ? "Final" : time}</span>
        </div>
        <div className={styles.heroCardHomeTeam}>
          <div className={styles.heroCardHomeTeamName}>
            <img src={logo} alt={`${homeTeam} logo`} />
            <Link>{homeTeam}</Link>
          </div>
          <span>{time > time ? score : record}</span>
        </div>
        <div className={styles.heroCardAwayTeam}>
          <div className={styles.heroCardAwayTeamName}>
            <img src={logo} alt={`${awayTeam} logo`} />
            <Link>{awayTeam}</Link>
          </div>
          <span>{time > time ? score : record}</span>
        </div>
      </div>
    </section>
  );
}
