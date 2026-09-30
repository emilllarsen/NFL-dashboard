import { apiFetch } from "../api.js";

export async function getTeams(){
    const allTeams = await apiFetch("/teams");
    return allTeams;
}

