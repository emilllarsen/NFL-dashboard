import styles from './Hero.module.css';
import { useFetchWeeks } from '../../hooks/fetchWeekDates/useFetchWeeks.js';

export default function Hero() {

    const { data, isPending, error } = useFetchWeeks();
  return (
    <section>
      <h1 className={styles.heroMainHeading}>Week {data?.week?.number}</h1>
    </section>
  )
}
