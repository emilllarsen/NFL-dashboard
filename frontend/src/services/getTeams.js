import { siteApiFetch } from "../api/siteApi.js";
export async function getTeams(){
    const allTeams = await siteApiFetch("/teams");
    return allTeams;
}

