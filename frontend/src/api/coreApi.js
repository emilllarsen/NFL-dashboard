export async function coreApiFetch(endpoint, options = {}) {
  const API_URI = "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl";

  const response = await fetch(API_URI + endpoint, options);
  
  if (!response.ok) {
    throw new Error(`Request error: ${response.status}`);
  }

  const result = await response.json();

  if (!result) {
    throw new Error(
      result?.error ||
        result?.err ||
        result?.message ||
        result?.msg ||
        "An error occurred....",
    );
  }

  return result;
}
