export async function apiFetch(endpoint, options = {}) {
  const API_URI = "https://site.api.espn.com/apis/site/v2/sports/football/nfl";

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
