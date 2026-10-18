import styles from "./HeroCards.module.css";
import { Link } from "react-router";

export default function HeroCards({
  day,
  period,
  date,
  completed,
  onGoing,
  time,
  homeTeamLogo,
  homeTeam,
  awayTeam,
  awayTeamLogo,
  homeTeamRecord,
  awayTeamRecord,
  homeTeamScore,
  awayTeamScore,
}) {
  return (
    <section className={styles.heroCardWrapper}>
        <div className={styles.heroCardTopRow}>
          <span>{day}</span>
          <span>{date}</span>
          <span className={styles.bold}>
            {completed === true
              ? "Final"
              : onGoing === "In Progress"
                ? "In-Progress"
                : time}
          </span>
        </div>
        <div className={styles.heroCardHomeTeam}>
          <div className={styles.heroCardHomeTeamName}>
            <img
              className={styles.teamLogo}
              src={homeTeamLogo}
              alt={`${homeTeam} logo`}
            />
            <Link className={styles.teamLink}>{homeTeamScore < awayTeamScore ? <span className={styles.losingTeam}>{homeTeam}</span> : homeTeam}</Link>
          </div>
          <span>{period >= 1 ? homeTeamScore : homeTeamRecord}</span>
        </div>
        <div className={styles.heroCardAwayTeam}>
          <div className={styles.heroCardAwayTeamName}>
            <img
              className={styles.teamLogo}
              src={awayTeamLogo}
              alt={`${awayTeam} logo`}
            />
            <Link className={styles.teamLink}>{awayTeamScore < homeTeamScore ? <span className={styles.losingTeam}>{awayTeam}</span> : awayTeam}</Link>
          </div>
          <span>{period >= 1 ? awayTeamScore : awayTeamRecord}</span>
        </div>
    </section>
  );
}
