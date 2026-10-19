import { useFetchIndividualTeam } from "../../hooks/individualTeam/useFetchIndividualTeam.js";


export default function IndividualPage() {
    const { data, isPending, error } = useFetchIndividualTeam();
  return (
    <section>
        {isPending ? <p>Loading...</p> : <p>{error}</p>}
        {data?.team && (
            <div key={data.team.id}>
                <p>{data.team.displayName}</p>
            </div>
        )}
    </section>
  )
}
