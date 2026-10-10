import styles from './Hero.module.css';
import { useFetchWeeks } from '../../hooks/fetchWeekDates/useFetchWeeks.js';
import HeroCards from '../HeroCards/HeroCards.jsx';

export default function Hero() {

  function dateToDay(date){
    const dateStr = date;
    const dayName = new Date(dateStr).toLocaleDateString('en-US', {weekday: "long"});
    return dayName;
  }

  function dateToMonth(date){
    const dateStr = date;
    const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
      day: 'numeric',
      month: "short"
    });

    return formattedDate;
  }
    const { data, isPending, error } = useFetchWeeks();
  return (
    <section>
      <h1 className={styles.heroMainHeading}>Week {data?.week?.number}</h1>
      {data?.events?.map((event) => (
        <div key={event.id}>
          <HeroCards 
            day={dateToDay(event.date.slice(0, 10))}
            date={dateToMonth(event.date)}
            completed={event.status?.type?.completed}
            time={event.date.slice(11, 16)}
            homeTeamLogo={event.competitions[0].competitors[0].team.logo}
            homeTeam={event.competitions[0].competitors[0].team.name}
            awayTeamLogo={event.competitions[0].competitors[1].team.logo}
            awayTeam={event.competitions[0].competitors[1].team.name}
            homeTeamRecord={event.competitions[0].competitors[0].records[0].summary}
            awayTeamRecord={event.competitions[0].competitors[1].records[0].summary}
            homeTeamScore={event.competitions[0].competitors[0].score}
            awayTeamScore={event.competitions[0].competitors[1].score}
          />
        </div>
      ))}
    </section>
  )
}
