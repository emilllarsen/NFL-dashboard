import styles from "./Hero.module.css";
import { useFetchWeeks } from "../../hooks/fetchWeekDates/useFetchWeeks.js";
import HeroCards from "../HeroCards/HeroCards.jsx";
import ByeWeekHeroCard from "../ByeWeekHeroCard/ByeWeekHeroCard.jsx";
import { Link } from "react-router";

export default function Hero() {
  function dateToDay(date) {
    const dateStr = date;
    const dayName = new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
    });
    return dayName;
  }

  function dateToMonth(date) {
    const dateStr = date;
    const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    return formattedDate;
  }

  function toNorwegianTime(data) {
    const utcTime = new Date(data);
    const options = {
      timeZone: "Europe/Oslo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const norwayTime = new Intl.DateTimeFormat("no-NO", options).format(
      utcTime,
    );
    return norwayTime;
  }

  const { data, isPending, error } = useFetchWeeks();

  if (isPending) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <h1 className={styles.heroMainHeading}>Week {data?.week?.number}</h1>
      <div className={styles.byeWeek}>
        <span>{data?.week?.teamsOnBye?.length} teams on bye</span>
        {data?.week?.teamsOnBye?.map((byeWeek) => (
          <section key={byeWeek.id}>
            <ByeWeekHeroCard logo={byeWeek.logo} teams={byeWeek.name} />
          </section>
        ))}
      </div>
      <section className={styles.heroCardWrapper}>
        {data?.events?.map((event) => (
          <section key={event.id}>
            <HeroCards
              homeTeamId={event.competitions[0].competitors[0].id}
              awayTeamId={event.competitions[0].competitors[1].id}
              day={dateToDay(event.date.slice(0, 10))}
              date={dateToMonth(event.date)}
              completed={event.status?.type?.completed}
              onGoing={event.status.type.description}
              time={toNorwegianTime(event.date)}
              homeTeamLogo={event.competitions[0].competitors[0].team.logo}
              homeTeam={event.competitions[0].competitors[0].team.name}
              awayTeamLogo={event.competitions[0].competitors[1].team.logo}
              awayTeam={event.competitions[0].competitors[1].team.name}
              homeTeamRecord={
                event.competitions[0].competitors[0].records[0].summary
              }
              awayTeamRecord={
                event.competitions[0].competitors[1].records[0].summary
              }
              homeTeamScore={event.competitions[0].competitors[0].score}
              awayTeamScore={event.competitions[0].competitors[1].score}
              period={event.competitions[0].status.period}
            />
          </section>
        ))}
      </section>
      <div className={styles.scheduleContainer}>
        <Link to="/schedule" className={styles.goToSchedule}>
          See Full Schedule
        </Link>
        <p className={styles.gamesLength}>{data?.events?.length} games</p>
      </div>
    </section>
  );
}
