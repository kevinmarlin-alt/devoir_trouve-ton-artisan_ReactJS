import apiFetch from "./api";

export const getCategories = () => apiFetch("/categories");
export const getArtisansByCategory = (idCategory) => apiFetch(`/categories/${idCategory}/artisans`);

