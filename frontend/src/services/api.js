const API_URL = "http://localhost:3000";

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    return {message: "Il n'y a pas d'artisans pour votre recherche !"}
  }

  return response.json();
};

export default apiFetch;