import styles from "./HeroCards.module.css";
import { Link } from "react-router";


export default function HeroCards({
  day,
  date,
  completed,
  time,
  homeTeamLogo,
  homeTeam,
  awayTeam,
  awayTeamLogo,
  homeTeamRecord,
  awayTeamRecord,
  homeTeamScore,
  awayTeamScore
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
            <img className={styles.teamLogo} src={homeTeamLogo} alt={`${homeTeam} logo`} />
            <Link>{homeTeam}</Link>
          </div>
          <span>{time > time ? homeTeamScore : homeTeamRecord}</span>
        </div>
        <div className={styles.heroCardAwayTeam}>
          <div className={styles.heroCardAwayTeamName}>
            <img className={styles.teamLogo} src={awayTeamLogo} alt={`${awayTeam} logo`} />
            <Link>{awayTeam}</Link>
          </div>
          <span>{time > time ? awayTeamScore : awayTeamRecord}</span>
        </div>
      </div>
    </section>
  );
}
