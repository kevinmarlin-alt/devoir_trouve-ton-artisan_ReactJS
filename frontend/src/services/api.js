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
    throw new Error("Erreur API");
  }

  return response.json();
};

export default apiFetch;