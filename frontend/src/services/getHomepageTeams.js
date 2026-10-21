import { siteApiFetch } from "../api/siteApi.js";

export async function getHomepageTeams() {
  const teams = await siteApiFetch("/groups");
  return teams;
}
