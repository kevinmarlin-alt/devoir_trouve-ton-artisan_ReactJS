const API_URL = process.env.REACT_APP_API_URL;

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    return {message: "Erreur lors du chargement des données !"}
  }

  return response.json();
};

export default apiFetch;