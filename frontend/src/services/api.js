const API_URL = "https://api-trouve-ton-artisan-u6k6.onrender.com";

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    return {message: "Erreur lors du chargement des données !"}
  }

  return response.json();
};

export default apiFetch;