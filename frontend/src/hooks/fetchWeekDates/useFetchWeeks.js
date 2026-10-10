import { useQuery } from "@tanstack/react-query";
import { fetchNextGames } from "../../services/getNextGames.js";

export function useFetchWeeks() {
  const { data, isPending, error } = useQuery({
    queryKey: ["dates"],
    queryFn: fetchNextGames,
  });

  return { data, isPending, error };
}
