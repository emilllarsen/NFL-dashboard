import { siteApiFetch } from "../api/siteApi.js";

export async function getIndividualTeam(id){
    const oneTeam = await siteApiFetch(`/teams/${id}/`);
    return oneTeam;

}
