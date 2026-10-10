import { siteApiFetch } from "../api/siteApi.js";
export async function fetchNextGames(){
    const result = await siteApiFetch("/scoreboard");
    return result;
}