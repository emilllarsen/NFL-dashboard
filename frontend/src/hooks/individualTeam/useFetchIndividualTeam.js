import { useQuery } from "@tanstack/react-query";
import { getIndividualTeam } from "../../services/getIndividualTeam.js";
import { useParams } from "react-router";

export function useFetchIndividualTeam() {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["teams", id],
    queryFn: () => getIndividualTeam(id),
  });

  return { data, isPending, error };
}
