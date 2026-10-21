import { getHomepageTeams } from "../../services/getHomepageTeams.js";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import styles from "./HomepageTeams.module.css";
export default function HomepageTeams() {
  const { data } = useQuery({
    queryKey: ["teams"],
    queryFn: getHomepageTeams,
  });

  return (
    <section>
      {data?.groups.map((group) => (
        <div key={group.name}>
          {group?.children?.map((division) => (
            <div className={styles.homepageTeamWrapper}>
              <h2 className={styles.h2Heading}>
                {division.name.toUpperCase()}
              </h2>
              <div className={styles.homepageTeamContainer} key={division.name}>
                {division?.teams?.map((team) => (
                  <Link
                    className={styles.homepageTeamCards}
                    key={team.id}
                    to={`/teams/${team.id}`}
                  >
                    <img
                      className={styles.teamLogo}
                      height="50"
                      width="50"
                      src={team.logos[0].href}
                      alt=""
                    />
                    <p className={styles.teamName}>{team.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
